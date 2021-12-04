class UI {
    constructor() {
        this.moviesList = document.getElementById('moviesList');
    }
    ShowMoviesTable(movies) {
        var table = document.getElementById("moviesList");
        table.innerHTML = `${movies[0].name}`;
    }
    ShowHeader() {
        var header = document.getElementById("header");
        header.innerHTML = "Заголовок страницы";
    }
    ShowFooter() {
        var footer = document.getElementById("myFooter");
        footer.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                                <div class="social-networks">
                                    <a href="#" class="vk"><i class="fa fa-vk"></i></a>
                                    <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                                    <a href="#" class="telegram"><i class="fa fa-telegram"></i></a>
                                </div>
                    </div>
                   <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d127935.68361644953!2d30.3615842!3d59.9322242!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1638617532453!5m2!1sru!2sru" width=800" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe> 
                </div>
                <div class="footer-copyright">
                    <p>© 2021 CinemaWatch </p>
                </div>
            </div>`;
    }
}
