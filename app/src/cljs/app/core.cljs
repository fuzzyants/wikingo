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

(def page (atom nil))

(defn page-handler [response]
  (reset! page (get (js->clj response) "content")))

(defn render-page []
  (let [get-page (fn [] (GET "http://localhost:9090/page" {:handler page-handler}))]
  (get-page)
  (fn []
    [:div {:dangerouslySetInnerHTML
              {:__html (md/md->html @page)}}])))

(defn atom-input [value]
  [:textarea {:rows 5
           :cols 50
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn shared-state []
  [:div
   [:p "The raw markdown is now:"]
   [:p @page]
   [:p "Change it here: "]
   [:p [atom-input page]]])

(defn home-page []
  [:div [render-page]
   [:div [shared-state]]
   [:div [:a {:href "#/about"} "go to about page"]]
   ])

(defn current-page []
  [:div [(session/get :current-page)]])

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
