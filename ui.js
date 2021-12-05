class UI {
    constructor() {
        this.moviesList = document.getElementById('moviesList');
    }
    ShowMoviesTable(movies) {
        var table = document.getElementById("moviesList").getElementsByClassName("container")[0];

        table.innerHTML += `
            <div class="content-description">
                Фильмы
            </div>
        `;
        //table.innerHTML += `<div class="row">`
        var rowsAmount = Math.floor(movies.length / 5);
        var remainder = movies.length - rowsAmount * 5;
        for (var i = 0; i < rowsAmount; i++) {
            table.innerHTML += `<div class="row"></div>`;
            var rowOfTable = document.getElementById("moviesList").getElementsByClassName("container")[0].getElementsByClassName("row")[i];
            for (var z = i * 5; z < i * 5 + 5; z++) {
                rowOfTable.innerHTML += `
                <div class="film">
                    <img src="${movies[z].image}">
                    <p>${movies[z].name}</p>
                </div>
                `;
            }
        }
        if (remainder > 0) {
            table.innerHTML += `<div class="row"></div>`;
            var rowOfTable = document.getElementById("moviesList").getElementsByClassName("container")[0].getElementsByClassName("row")[rowsAmount];
            for (var z = 0; z < remainder; z++) {
                rowOfTable.innerHTML += `
                <div class="film">
                    <img src="${movies[z + rowsAmount * 5].image}">
                    <p>${movies[z + rowsAmount * 5].name}</p>
                </div>
                `;
            }
        }

    }
    ShowHeader() {
        var header = document.getElementById("myHeader");
        header.innerHTML = `
            <div class="container" >
                <div class="row">
                    <div class="element">
                        <a href="#">Главная</a>
                    </div>
                    <div class="element">
                        <a href="#">Топ 10 фильмов</a>
                    </div>
                    <div class="element">
                        <a href="#">Топ 10 сериалов</a>
                    </div>
                    <div class="element" style="width:310px">
                        <input type="text" placeholder="Поиск фильмов и сериалов..">
                        <button type ="button">
                        <a href="#" style="color:black">
                        <i class ="fa fa-search" style="float:left">
                        </i>
                        </a>
                        </button>
                    </div>
                    <div class="element">
                        <a href="#">Войти</a>
                    </div>
                </div>
            </div >
            `;
    }
    ShowFooter() {
        var footer = document.getElementById("myFooter");
        footer.innerHTML = `
            <div class="container" >
                <div class="row">
                    <div class="col-sm-3">
                        <div class="social-networks">
                            <a href="#" class="vk"><i class="fa fa-vk"></i></a>
                            <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                            <a href="#" class="telegram"><i class="fa fa-telegram"></i></a>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d127935.68361644953!2d30.3615842!3d59.9322242!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1638617532453!5m2!1sru!2sru" width=800" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe> 
                </div >
            <div class="footer-copyright">
                <p>© 2021 CinemaWatch </p>
            </div>
            </div > `;
    }
}
