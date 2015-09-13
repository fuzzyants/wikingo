package controllers

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/russross/blackfriday"
)

const dataFile = "../data/index.md"

type (
	// PageController is the controller for the Page resource
	PageController struct{}
)

// Instantiates a new PageController
func NewPageController() *PageController {
	return &PageController{}
}

// GetUser retrieves an individual user resource
func (pc PageController) GetPage(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	//print requested path to console
	fmt.Println("path: ", r.URL.Path)

	//load a file
	dat, err := ioutil.ReadFile(dataFile)
	if err != nil {
		log.Fatal("ReadFile"+": ", err)
	}

	output := blackfriday.MarkdownCommon(dat)
	//send it to the client
	fmt.Fprintf(w, string(output))
}
