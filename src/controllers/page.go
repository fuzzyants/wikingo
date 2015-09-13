package controllers

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/russross/blackfriday"

	"github.com/fuzzyants/wikingo/src/models"
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

// GetPage parses a Markdown file and converts it into HTML
func (pc PageController) GetPage(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	//print requested path to console
	fmt.Println("path: ", r.URL.Path)

	// Read the datafile
	dat, err := ioutil.ReadFile(dataFile)
	if err != nil {
		log.Fatal("ReadFile"+": ", err)
	}

	// Instantiate a new Page
	p := models.Page{
		Content: dat,
	}

	output := blackfriday.MarkdownCommon(p.Content)
	//send it to the client
	fmt.Fprintf(w, string(output))
}
