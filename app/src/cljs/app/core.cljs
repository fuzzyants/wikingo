(ns app.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [app.handlers]
              [app.subs]
              [app.routes :as routes]
              [app.views :as views]))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  ;; Ignore routes for now, because we have only one panel.
  ;; (routes/app-routes)
  ;; Write some default values to the DB
  (re-frame/dispatch-sync [:initialize-db])
  ;; Get the data from the JSON Wikingo server
  (re-frame/dispatch-sync [:load-page])
  (mount-root))
