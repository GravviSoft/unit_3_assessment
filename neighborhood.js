

const restaurant = document.querySelector(".restaurant")
const roulette = document.querySelector("#roulette")
const rest = document.querySelector('.cards');


function createCharacterCard(char) {
    const local = [
        `<article class="card card--1">
        <div class="card__info-hover">
        </div>
        <div class="card__img"></div>
        <a href="#" class="card_link">
            <div class="card__img--hover"></div>
        </a>
        <div class="card__info">
            <span class="card__category"> Indian</span>
            <h3 class="card__title">Bombay House</h3>
            <span class="card__by">site: <a href="https://bombayhouse.com/" class="card__author" title="author">bombayhouse.com</a></span>
        </div>
        </article>`, 
        ` <article class="card card--2">
            <div class="card__info-hover">
            </div>
            <div class="card__img"></div>
            <a href="#" class="card_link">
                <div class="card__img--hover"></div>
            </a>
            <div class="card__info">
                <span class="card__category"> Mexican</span>
                <h3 class="card__title">Milagros</h3>
                <span class="card__by">site: <a href="https://milagrosutah.com" class="card__author" title="author">milagrosutah.com</a></span>
            </div>
        </article>`,
        ` <article class="card card--3">
            <div class="card__info-hover">
            </div>
            <div class="card__img"></div>
            <a href="#" class="card_link">
                <div class="card__img--hover"></div>
            </a>
            <div class="card__info">
                <span class="card__category"> Sushi</span>
                <h3 class="card__title">Happy Sumo Sushi </h3>
                <span class="card__by">site: <a href="https://happysumosushi.com" class="card__author" title="author">happysumosushi.com</a></span>
            </div>
        </article>`,
        `<article class="card card--4">
            <div class="card__info-hover">
            </div>
            <div class="card__img"></div>
            <a href="#" class="card_link">
                <div class="card__img--hover"></div>
            </a>
            <div class="card__info">
                <span class="card__category"> Mexican</span>
                <h3 class="card__title">Maria Bonita Mexican Grill</h3>
                <span class="card__by">site: <a href="https://www.mariabonitagrill.com" class="card__author" title="author">mariabonitagrill.com</a></span>
            </div>
        </article>`,
        `<article class="card card--5">
            <div class="card__info-hover">
            </div>
            <div class="card__img"></div>
            <a href="#" class="card_link">
                <div class="card__img--hover"></div>
            </a>
            <div class="card__info">
                <span class="card__category"> Burgers</span>
                <h3 class="card__title">Chom Burger</h3>
                <span class="card__by">site: <a href="https://www.chomburger.com/" class="card__author" title="author">chomburger.com</a></span>
            </div>
        </article>`,
        ` <article class="card card--6">
            <div class="card__info-hover">
            </div>
            <div class="card__img"></div>
            <a href="#" class="card_link">
                <div class="card__img--hover"></div>
            </a>
            <div class="card__info">
                <span class="card__category"> Burgers</span>
                <h3 class="card__title">Five Guys</h3>
                <span class="card__by">site: <a href="https://www.fiveguys.com/" class="card__author" title="author">fiveguys.com</a></span>
            </div>
        </article>`,
        `<article class="card card--7">
            <div class="card__info-hover">
            </div>
            <div class="card__img"></div>
            <a href="#" class="card_link">
                <div class="card__img--hover"></div>
            </a>
            <div class="card__info">
                <span class="card__category">Sushi</span>
                <h3 class="card__title">Five Sushi Brothers</h3>
                <span class="card__by">site: <a href="https://fivesushibrothers.com/" class="card__author" title="author">fivesushibrothers.com</a></span>
            </div>
        </article>`,]
    const random = Math.floor(Math.random() * local.length);
    rest.innerHTML = local[random]
}

roulette.addEventListener('click', createCharacterCard)


