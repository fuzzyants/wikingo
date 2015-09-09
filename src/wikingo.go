package main

import (
	"fmt"
	"log"
	"net/http"
)

func renderPage(w http.ResponseWriter, r *http.Request) {
	//print requested path to console
	fmt.Println("path: ", r.URL.Path)

	//reply something
	fmt.Fprintf(w, "This is wikingo.")
}

func main() {
	//set up a route
	http.HandleFunc("/", renderPage)

	//start the server
	err := http.ListenAndServe(":9090", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
