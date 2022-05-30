package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("Application started...")
	http.HandleFunc("/greet", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Hello World")
	})
	fmt.Println("Application is running on port 50080")
	http.ListenAndServe(":50080", nil)
}

// git init creates init the git project or treat this project as a git project