(ns app.db
  (:require [reagent.core :as reagent]))

;; The default database is just reagent/atom [ratom] with an empty map
(def default-db (reagent/atom {}))
