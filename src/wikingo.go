package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/russross/blackfriday"
)

const addr = "localhost:9090"
const dataFile = "../data/index.md"

//helper to check errors
func check(e error, whoDidIt string) {
	if e != nil {
		log.Fatal(whoDidIt+": ", e)
	}
}

func renderPage(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	//print requested path to console
	fmt.Println("path: ", r.URL.Path)

	//load a file
	dat, err := ioutil.ReadFile(dataFile)
	check(err, "ReadFile")

	output := blackfriday.MarkdownCommon(dat)
	//send it to the client
	fmt.Fprintf(w, string(output))
}

func main() {

	// Create a new router
	r := httprouter.New()

	// Set up a route
	r.GET("/", renderPage)

	//start the server
	log.Printf("Now listening on %s...\n", addr)
	err := http.ListenAndServe(addr, r)
	check(err, "ListenAndServe")
}
