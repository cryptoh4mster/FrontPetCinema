const ui = new UI;
const api = new API;

ui.ShowHeader();

api.GetMovies().then(value => {
    ui.ShowMoviesTable(value);
});

ui.ShowFooter();