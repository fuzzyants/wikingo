(ns app.handlers
    (:require [re-frame.core :as re-frame]
              [app.db :as db]))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   {:name "Fabian"}))
