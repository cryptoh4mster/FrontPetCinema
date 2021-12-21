const ui = new UI;
const api = new API;

ui.ShowHeader();

api.GetMovies().then(value => {
    ui.ShowMoviesTable(value);
});

api.GetSerials().then(value => {
    ui.ShowSerialsTable(value);

})

ui.ShowFooter();