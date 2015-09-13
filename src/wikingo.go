package main

import (
	"log"
	"net/http"

	"github.com/fuzzyants/wikingo/src/controllers"
	"github.com/julienschmidt/httprouter"
)

const addr = "localhost:9090"

//helper to check errors
func check(e error, whoDidIt string) {
	if e != nil {
		log.Fatal(whoDidIt+": ", e)
	}
}

func main() {

	// Create a new router
	r := httprouter.New()

	// Get a PageController instance
	pc := controllers.NewPageController()

	// Set up a route
	r.GET("/", pc.GetPage)

	//start the server
	log.Printf("Now listening on %s...\n", addr)
	err := http.ListenAndServe(addr, r)
	check(err, "ListenAndServe")
}
