const theatre = document.querySelector(".movie-theatre");
const container = document.querySelector(".container");
const body = document.querySelector('body');
let batman1 = document.querySelector(".pic-1");
let batman2 = document.querySelector(".pic-2");
let batman3 = document.querySelector(".pic-3");
let batman4 = document.querySelector(".pic-4");
let batman5 = document.querySelector(".pic-5");
let batman6 = document.querySelector(".pic-6");
const baseUrl = 'http://www.omdbapi.com/?apikey=7b4e5388';
// let xButton = document.querySelector(".movie-poster")


batman1.addEventListener('click', (e) => {
    const movieurl = `${baseUrl}&t=Batman`

    fetch(movieurl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const ticket = document.createElement('div');
            ticket.classList.add("scale-up-center")
            container.appendChild(ticket);

            const title = document.createElement('h2');
            title.innerText = data.Title
            title.classList.add("movie-title");


            const director = document.createElement('h2');
            director.innerText = "Directed by:" + data.Director
            director.classList.add("director");

            const year = document.createElement('h2');
            year.innerText = "Year:" + data.Year
            year.classList.add("year");

            const rated = document.createElement('h2');
            rated.innerText = "Rated:" + data.Rated
            rated.classList.add("rated");

            const released = document.createElement('h2');
            released.innerText = "Released:" + data.Released
            released.classList.add("released");

            const poster = document.createElement('img');
            poster.src = data.Poster
            poster.classList.add("movie-poster")

            const remove = document.createElement('button');
            remove.innerText = "X";
            remove.classList.add("myButton")

            ticket.appendChild(title);
            ticket.appendChild(director);
            ticket.appendChild(year);
            ticket.appendChild(rated);
            ticket.appendChild(released);
            ticket.appendChild(poster);
            ticket.prepend(remove);

           const close = document.querySelector('button');

            close.addEventListener('click', () =>{
                window.location.reload()
            })

        })
});

batman2.addEventListener('click', (e) => {
    const movieurl = `${baseUrl}&t=Batman+Begins`

    fetch(movieurl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const ticket = document.createElement('div');
            ticket.classList.add("scale-up-center")
            container.appendChild(ticket);

            const title = document.createElement('h2');
            title.innerText = data.Title
            title.classList.add("movie-title");


            const director = document.createElement('h2');
            director.innerText = "Directed by:" + data.Director
            director.classList.add("director");

            const year = document.createElement('h2');
            year.innerText = "Year:" + data.Year
            year.classList.add("year");

            const rated = document.createElement('h2');
            rated.innerText = "Rated:" + data.Rated
            rated.classList.add("rated");

            const released = document.createElement('h2');
            released.innerText = "Released:" + data.Released
            released.classList.add("released");

            const poster = document.createElement('img');
            poster.src = data.Poster
            poster.classList.add("movie-poster")

            const remove = document.createElement('button');
            remove.innerText = "X";
            remove.classList.add("myButton")

            ticket.appendChild(title);
            ticket.appendChild(director);
            ticket.appendChild(year);
            ticket.appendChild(rated);
            ticket.appendChild(released);
            ticket.appendChild(poster);
            ticket.prepend(remove);

            const close = document.querySelector('button');

            close.addEventListener('click', () =>{
                window.location.reload()
            })
        })
});

batman3.addEventListener('click', (e) => {
    const movieurl = `${baseUrl}&t=dawn+of+justice`

    fetch(movieurl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const ticket = document.createElement('div');
            ticket.classList.add("scale-up-center")
            container.appendChild(ticket);

            const title = document.createElement('h2');
            title.innerText = data.Title
            title.classList.add("movie-title");


            const director = document.createElement('h2');
            director.innerText = "Directed by:" + data.Director
            director.classList.add("director");

            const year = document.createElement('h2');
            year.innerText = "Year:" + data.Year
            year.classList.add("year");

            const rated = document.createElement('h2');
            rated.innerText = "Rated:" + data.Rated
            rated.classList.add("rated");

            const released = document.createElement('h2');
            released.innerText = "Released:" + data.Released
            released.classList.add("released");

            const poster = document.createElement('img');
            poster.src = data.Poster
            poster.classList.add("movie-poster")

            const remove = document.createElement('button');
            remove.innerText = "X";
            remove.classList.add("myButton")

            ticket.appendChild(title);
            ticket.appendChild(director);
            ticket.appendChild(year);
            ticket.appendChild(rated);
            ticket.appendChild(released);
            ticket.appendChild(poster);
            ticket.prepend(remove);

            const close = document.querySelector('button');

            close.addEventListener('click', () =>{
                window.location.reload()
            })
        })
});

batman4.addEventListener('click', (e) => {
    const movieurl = `${baseUrl}&t=Batman+%26+Robin`

    fetch(movieurl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const ticket = document.createElement('div');
            ticket.classList.add("scale-up-center")
            container.appendChild(ticket);

            const title = document.createElement('h2');
            title.innerText = data.Title
            title.classList.add("movie-title");


            const director = document.createElement('h2');
            director.innerText = "Directed by:" + data.Director
            director.classList.add("director");

            const year = document.createElement('h2');
            year.innerText = "Year:" + data.Year
            year.classList.add("year");

            const rated = document.createElement('h2');
            rated.innerText = "Rated:" + data.Rated
            rated.classList.add("rated");

            const released = document.createElement('h2');
            released.innerText = "Released:" + data.Released
            released.classList.add("released");

            const poster = document.createElement('img');
            poster.src = data.Poster
            poster.classList.add("movie-poster")

            const remove = document.createElement('button');
            remove.innerText = "X";
            remove.classList.add("myButton")

            ticket.appendChild(title);
            ticket.appendChild(director);
            ticket.appendChild(year);
            ticket.appendChild(rated);
            ticket.appendChild(released);
            ticket.appendChild(poster);
            ticket.prepend(remove);

            const close = document.querySelector('button');

            close.addEventListener('click', () =>{
                window.location.reload()
            })
        })
});

batman5.addEventListener('click', (e) => {
    const movieurl = `${baseUrl}&t=the+lego+batman+movie`

    fetch(movieurl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const ticket = document.createElement('div');
            ticket.classList.add("scale-up-center")
            container.appendChild(ticket);

            const title = document.createElement('h2');
            title.innerText = data.Title
            title.classList.add("movie-title");


            const director = document.createElement('h2');
            director.innerText = "Directed by:" + data.Director
            director.classList.add("director");

            const year = document.createElement('h2');
            year.innerText = "Year:" + data.Year
            year.classList.add("year");

            const rated = document.createElement('h2');
            rated.innerText = "Rated:" + data.Rated
            rated.classList.add("rated");

            const released = document.createElement('h2');
            released.innerText = "Released:" + data.Released
            released.classList.add("released");

            const poster = document.createElement('img');
            poster.src = data.Poster
            poster.classList.add("movie-poster")

            const remove = document.createElement('button');
            remove.innerText = "X";
            remove.classList.add("myButton")

            ticket.appendChild(title);
            ticket.appendChild(director);
            ticket.appendChild(year);
            ticket.appendChild(rated);
            ticket.appendChild(released);
            ticket.appendChild(poster);
            ticket.prepend(remove);

            const close = document.querySelector('button');

            close.addEventListener('click', () =>{
                window.location.reload()
            })
        })
});

batman6.addEventListener('click', (e) => {
    const movieurl = `${baseUrl}&t=batman+under+the+red+hood`

    fetch(movieurl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const ticket = document.createElement('div');
            ticket.classList.add("scale-up-center")
            container.appendChild(ticket);

            const title = document.createElement('h2');
            title.innerText = data.Title
            title.classList.add("movie-title");


            const director = document.createElement('h2');
            director.innerText = "Directed by:" + data.Director
            director.classList.add("director");

            const year = document.createElement('h2');
            year.innerText = "Year:" + data.Year
            year.classList.add("year");

            const rated = document.createElement('h2');
            rated.innerText = "Rated:" + data.Rated
            rated.classList.add("rated");

            const released = document.createElement('h2');
            released.innerText = "Released:" + data.Released
            released.classList.add("released");

            const poster = document.createElement('img');
            poster.src = data.Poster
            poster.classList.add("movie-poster")

            const remove = document.createElement('button');
            remove.innerText = "X";
            remove.classList.add("myButton")

            ticket.appendChild(title);
            ticket.appendChild(director);
            ticket.appendChild(year);
            ticket.appendChild(rated);
            ticket.appendChild(released);
            ticket.appendChild(poster);
            ticket.prepend(remove);

            const close = document.querySelector('button');

            close.addEventListener('click', () =>{
                window.location.reload()
            })
        })
});