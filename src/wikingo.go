package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

const addr = "localhost:9090"

//helper to check errors
func check(e error, whoDidIt string) {
	if e != nil {
		log.Fatal(whoDidIt+": ", e)
	}
}

func renderPage(w http.ResponseWriter, r *http.Request) {
	//print requested path to console
	fmt.Println("path: ", r.URL.Path)

	//load a file
	dat, err := ioutil.ReadFile("data/index.md")
	check(err, "ReadFile")

	//send it to the client
	fmt.Fprintf(w, string(dat))
}

func main() {
	//set up a route
	http.HandleFunc("/", renderPage)

	//start the server
	log.Printf("Now listening on %s...\n", addr)
	err := http.ListenAndServe(addr, nil)
	check(err, "ListenAndServe")
}
