class API {
    async GetMovies() {
        const response = await fetch("https://localhost:5001/api/Movie/getmovies", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        const movie = await response.json();
        return movie;
    }
}


