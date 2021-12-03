async function GetMovies() {
    // отправляет запрос и получаем ответ
    const response = await fetch("https://localhost:5001/api/Movie/getmovies", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    const movie = await response.json();
    //lert(movie);
    return movie;
}


//GetMovies();