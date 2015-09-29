(ns app.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [app.handlers]
              [app.subs]
              [app.routes :as routes]
              [app.views :as views]))

(defn mount-root []
  (reagent/render [views/home-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch [:initialize-db])
  (mount-root))
