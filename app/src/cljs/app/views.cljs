(ns app.views
    (:require [re-frame.core :as re-frame]
              [re-com.core :as re-com]
              [markdown.core :as md]))

;; --------------------

;; Render the page title
(defn page-title []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [re-com/title
       :label (str "Welcome to Wikingo, " @name "!")
       :level :level2])))

;; Render the page content present in the default-db
(defn page-content []
  (let [page (re-frame/subscribe [:page])]
    (fn []
      [:div
        [:p "This is the database state: "]
        [:p @page]])))


; Update the page atomically
(defn edit-page [page]
  [re-com/input-textarea
   :width "300px"
   :height "300px"
   :rows 5
   :model page
   :on-change #(reset! page %)
   :change-on-blur? false])

;; Use the markdown module to render the page dynamically from markdown
;; into html. Updates when the edit-page component is re-rendered.
(defn render-preview [page]
  [:div {:dangerouslySetInnerHTML
        {:__html (md/md->html @page)}}])

;; The main editor component.
;; It subscribes to the :page content in the DB and makes it available
;; to the edit-page component and the render-preview component
;; The page data is passed down and the child components do not need to
;; subscribe to it (they receive it from page-editor).
;; edit-page and render-preview will update the displayed content, but the
;; database content itself is not changed!
;; Remember: https://github.com/Day8/re-frame#the-2nd-flow
;; The dispatch function takes an event handler :save-page and updates
;; the state of the database!
(defn page-editor []
  (let [page (re-frame/subscribe [:page])]
  (fn []
    [re-com/v-box
      :gap "1em"
      :children [
                [re-com/h-box
                 :gap "1em"
                 :children [
                           [edit-page page]
                           [render-preview page]]]
                [re-com/button
                 :label "save"
                 :class "btn-success"
                 :on-click #(re-frame/dispatch [:save-page @page])]]])))

;; Render the main panel
;; All other components are children of this panel
(defn main-panel []
  [re-com/v-box
   :gap "1em"
   :align :center
   :children [[page-title]
              [re-com/title :label "Editor" :level :level3]
              [page-editor]
              [page-content]]])
