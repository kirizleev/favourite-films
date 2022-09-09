'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    document.querySelector('.promo__genre').innerHTML = 'ДРАМА';
    document.querySelector('#promo__bg').style.backgroundImage = 'url("./img/bg.jpg")';
    const adv = document.querySelector(".promo__adv"),
    addFilmForm = document.querySelector('.add'),
    input = document.querySelector('.adding__input'),
    checkBox = document.getElementById('checkbox');

    adv.remove();

    const filmsList = document.querySelector('.promo__interactive-list');

    function createMovieList(films, parent){
        parent.innerHTML = '';
        function setFilmsItem(films){
            let el = '';
            for(let i = 0; i < films.length; i++){
                el += `<li class="promo__interactive-item">
                            ${i + 1}. ${films[i]}
                            <div class='delete'></div>
                       </li>`;
            }
            return el
        }
        parent.innerHTML = setFilmsItem(films.sort());

        document.querySelectorAll('.delete').forEach( (del, i) => {
            del.addEventListener("click", function (){
                del.parentElement.remove();
                films.splice(i, 1);
                createMovieList(films, parent);
            })
        })
    }
    createMovieList(movieDB.movies, filmsList);



    addFilmForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        const favorite = checkBox.checked;
        if (input.value.length > 21){
            input.value = input.value.slice(0, 23) + '...';
            movieDB.movies.push(input.value);
            createMovieList(movieDB.movies, filmsList);
            if(favorite)console.log('Добавляем любимый фильм');
            input.value = '';
        }else if (input.value){
            movieDB.movies.push(input.value);
            createMovieList(movieDB.movies, filmsList);
            if(favorite)console.log('Добавляем любимый фильм');
            input.value = '';
        }
    });
});




