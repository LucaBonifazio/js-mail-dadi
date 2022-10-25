// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const arrMail = ['luca@gmail.com', 'marco@gmail.com', 'paolo@gmail.com', 'franco@gmail.com','gianni@gmail.com'];
const eleResult = document.querySelector('.result');
const eleConferme = document.querySelector('.btn-success');
const eleDetelete = document.querySelector('.btn-danger');

eleConferme.addEventListener('click', function () {

    const userMail = document.querySelector('#mail');
    
    for (let i = 0; i < arrMail.length; i++) {
        if (userMail.value === arrMail[i]){
            eleResult.innerHTML = ('Mail corretta')
        } else {
            eleResult.innerHTML = ('La mail non è presente');
        }
    };
});

eleDetelete.addEventListener('click', function () {
    document.location.reload();
});

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

    // const myDice = document.querySelector('.my_dice');
    // numberDice = Math.floor(Math.random() * 6);
    // eleWagon.innerHTML = (`Il tuo dado: ${numberDice}` );

    // const botDice = document.querySelector('.bot_dice');
    // numberDice = Math.floor(Math.random() * 6);
    // eleCode.innerHTML = (`Il dado del Bot: ${numberDice}` );

// BONUS:
// Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
