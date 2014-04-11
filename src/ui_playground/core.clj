(ns ui_playground.core
    (:use compojure.core)
  (:require
     [ring.adapter.jetty :as jetty]
     [ring.util.response :as resp]
     [compojure.route :as route]
     [liberator.core :refer [resource defresource]]))

(defroutes main-routes
  (GET "/" [] (resp/file-response "index.html" {:root "public"}))
  (GET "/1" [] (resource :available-media-types ["application/json"]
                            :handle-ok "{\"data\": 1}"))
  (GET "/2" [] (resource :available-media-types ["application/json"]
                            :handle-ok "{\"data\": 2}"))
  (GET "/3" [] (resource :available-media-types ["application/json"]
                            :handle-ok "{\"data\": 3}"))
  (GET "/4" [] (resource :available-media-types ["application/json"]
                            :handle-ok "{\"data\": 4}"))
  (route/resources "/")
  (route/not-found "404 Not Found"))

(defn -main [] (jetty/run-jetty main-routes {:port 8080}))
