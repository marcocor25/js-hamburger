// SELEZIONO L'ICONA DELL'HAMBURGER-MENÙ

const button = document.querySelector('.fa-bars');
console.log(button);

// SELEZIONO LA CLASSE HAMBURGER-MENÙ

const burger = document.querySelector('.hamburger-menu');
console.log(burger);

// SELEZIONO L'ICONA PER CHIUDERE IL MENÙ

const buttonClose = document.querySelector('.close');
console.log(buttonClose);

// CREO L'APERTURA DEL MENÙ AL CLICK

button.addEventListener('click', function() {
    burger.style.display = 'block';
})

// CREO LA CHIUSURA DEL MENÙ AL CLICK

buttonClose.addEventListener('click', function() {
    console.log('Finalmente ho finito un esercizio JavaScript senza sclerare.');
    burger.style.display = 'none';
})

// FINE