class API {
    async GetMovies() {
        const response = await fetch("https://localhost:44344/api/Movie/movies", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        const movie = await response.json();
        return movie;
    }

    async GetSerials() {
        const response = await fetch("https://localhost:44344/api/Serial/serials", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        const serial = await response.json();
        return serial;
    }
}


