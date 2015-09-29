(ns app.views
    (:require [re-frame.core :as re-frame]
              [re-com.core :as re-com]))

;; --------------------
(defn home-title []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [re-com/title
       :label (str "Hello from " @name ". This is the Home Page.")
       :level :level1])))

(defn home-panel []
  [re-com/v-box
   :gap "1em"
   :children [[home-title]]])
