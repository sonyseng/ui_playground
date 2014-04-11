(defproject ui_playground "0.1.0-SNAPSHOT"
  :description "UI playground"
  :url "http://www.google.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [ring/ring-core "1.2.0"]
                 [ring/ring-jetty-adapter "1.2.0"]
                 [compojure "1.1.5"]
                 [liberator "0.9.0"]]
  :plugins [[lein2-eclipse "2.0.0"]
            [lein-ring "0.8.7"]]
  :ring {:handler ui_playground.core/main-routes}
  :main ui_playground.core)
