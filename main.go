// main.go
package main

import (
	"DPS_SERVER/apiFiles"
	"net/http"
)

func main() {
	http.HandleFunc("/api", apiFiles.Handler)

	http.Handle("/", http.FileServer(http.Dir("public")))

	http.ListenAndServe(":3000", nil)
	print("server demarré")
}
