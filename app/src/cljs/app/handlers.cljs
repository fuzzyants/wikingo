(ns app.handlers
    (:require [re-frame.core :as re-frame]
              [app.db :as db]
              [ajax.core :refer [GET POST]]))

;; Adds default values to the database
(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   {:name "" :page "test"}))

;; Process the JSON data and store it in the DB
(re-frame/register-handler
  :process-page
  (fn
    [db [_ response]]
    (.log js/console response)

    ;; Check this for -> explanation http://clojuredocs.org/clojure.core/-%3E
    (-> db
    ;; Associate the new values with the database
    (assoc :page (get (js->clj response) "content"))
    (assoc :name (get (js->clj response) "author")))))

;; This is our save function. It is called as an event handler
;; when the save button is pressed
(re-frame/register-handler
  :save-page
  (fn
    [db [_ response]]
    (.log js/console response)
    (assoc db :page response)))

;; This is called in core.cljs to load a page from the wikingo server
(re-frame/register-handler
 :load-page
 (fn [db _]
   (GET "http://localhost:9090/page"
         {:handler #(re-frame/dispatch-sync [:process-page %1])})
    db))
