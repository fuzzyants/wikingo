(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [app.core]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload (fn [& x] (if js/app.core.mount-root (apply js/app.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'app.core/mount-root' is missing"))), :build-id "dev"})

