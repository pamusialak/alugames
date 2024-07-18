function alterStatus(id){
    let clickedGame = document.getElementById(`game-${id}`);
    let image = clickedGame.querySelector('.dashboard__item__img');
    let button = clickedGame.querySelector('.dashboard__item__button');

    if(image.classList.contains('dashboard__item__img--rented')){
        image.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');
        button.textContent = 'Rent';
    }else{
        image.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Return';
    }
}
