let rentedGames = 0;

function countAndShowRentedGames(){
    console.log(`Total of rented games: ${rentedGames}`);
}


function alterStatus(id){
    let clickedGame = document.getElementById(`game-${id}`);
    let image = clickedGame.querySelector('.dashboard__item__img');
    let button = clickedGame.querySelector('.dashboard__item__button');
    let gameName = clickedGame.querySelector('.dashboard__item__name');

    if(image.classList.contains('dashboard__item__img--rented')){

        if(confirm(`Are you sure you want to retunr the game ${gameName.textContent}?`)){
            image.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.textContent = 'Rent';
            rentedGames--;
        }
        
    }else{
        image.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Return';
        rentedGames++;
    }

    countAndShowRentedGames();
}

document.addEventListener('DOMContentLoaded', function() {
    rentedGames = document.querySelectorAll('.dashboard__item__img--rented').length;
    countAndShowRentedGames();
});
