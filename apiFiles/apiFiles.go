package apiFiles

import (
	"fmt"
	"io"
	"net/http"
	// "strings"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		fmt.Fprint(w, "Vous avez fait une requête GET")
	case "POST":
		body, err := io.ReadAll(r.Body)
		if err != nil {
			http.Error(w, "Erreur de lecture du corps", http.StatusBadRequest)
			return
		}
		fmt.Fprint(w, "Vous avez fait une requête POST avec le corps : ", string(body))
	default:
		http.Error(w, "Méthode non autorisée", http.StatusMethodNotAllowed)
	}
}
