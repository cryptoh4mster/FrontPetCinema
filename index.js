async function GetMovies() {
    // отправляет запрос и получаем ответ
    const response = await fetch("https://localhost:5001/api/Movie/getmovies", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    // если запрос прошел нормально
    if (response.ok === true) {
        // получаем данные
        const movies = await response.json();
        return movies;
    }
}
