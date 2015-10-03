(ns app.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

;; Subscriptions receive data from the DB via an reaction and make them
;; available to the views that subscribe to them

;; Get the :name out of the default-db map
(re-frame/register-sub
 :name
 (fn [db]
   (reaction (:name @db))))

;; Get the :page out of the default-db map
;; This is Markdown content.
(re-frame/register-sub
 :page
 (fn [db]
   (reaction (:page @db))))
