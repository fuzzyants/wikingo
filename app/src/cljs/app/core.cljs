(ns app.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [ajax.core :refer [GET POST]]
              [markdown.core :as md])
    (:import goog.History))

;; -------------------------
;; Views

; A reagent atom that can be updated
(def page (atom nil))

; Takes the json response from the wikingo server and stores the content in
; the page atom.
(defn page-handler [response]
  (reset! page (get (js->clj response) "content")))

; A reagent component that renders a page using the wikingo json api
; let binds the page content and will only be executed *once*
(defn render-page []
  (let [get-page (fn [] (GET "http://localhost:9090/page" {:handler page-handler}))]
  ; Get the page content
  (get-page)
  ; Rendering function that will update every time the @page atom changes
  (fn []
    [:div {:dangerouslySetInnerHTML ; Only a good idea if we trust the markdown
              {:__html (md/md->html @page)}}])))

; Update the page atom
(defn atom-input [value]
  [:textarea {:rows 5
           :cols 50
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

; Component to update the markdown content
(defn update-page []
  [:div
   [:p "The raw markdown is now:"]
   [:p @page]
   [:p "Change it here: "]
   [:p [atom-input page]]])

; Component that renders the homepage.
(defn home-page []
  [:div [render-page]
   [:div [update-page]]
   [:div [:a {:href "#/about"} "go to about page"]]
   ])

(defn current-page []
  [:div [(session/get :current-page)]])

; Test handler
(defn handler [response]
  (.log js/console (str response)))

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))


;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (hook-browser-navigation!)
  (mount-root))
