(ns ui_playground.core
    (:use
     compojure.core)
  (:require
     [ring.adapter.jetty :as jetty]
     [compojure.route :as route]
     [liberator.core :refer [resource defresource]]
     [ring.util.response :as resp]))

(defroutes main-routes
  (GET "/" [] (resp/file-response "index.html" {:root "public"}))
  (GET "/a" [] (resource :available-media-types ["application/json"]
                            :handle-ok "{data: 'here is a'}"))
  (GET "/b" [] (resource :available-media-types ["application/json"]
                            :handle-ok "{data: 'here is b'}"))
  (GET "/c" [] (resource :available-media-types ["application/json"]
                            :handle-ok "{data: 'here is c'}"))
  (GET "/d" [] (resource :available-media-types ["application/json"]
                            :handle-ok "{data: 'here is d'}"))
  (route/resources "/")
  (route/not-found "404 Not Found"))

(defn -main [] (jetty/run-jetty main-routes {:port 8080}))
