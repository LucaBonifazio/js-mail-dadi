// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const userMail = document.querySelector('#mail');
const arrMail = ['luca@gmail.com', 'marco@gmail.com', 'paolo@gmail.com', 'franco@gmail.com','gianni@gmail.com'];
const eleConferme = document.querySelector('.btn-success');
const eleDetelete = document.querySelector('.btn-danger');
const eleResult = document.querySelector('.result');

eleConferme.addEventListener('click', function () {
    let userMailCheck = false; 
    for (let i = 0; i < arrMail.length; i++) {  
        if (userMail.value === arrMail[i]){
            userMailCheck = true;
        }
    };
    if (userMailCheck){
        eleResult.innerHTML = ('Mail corretta')
    } else {
        eleResult.innerHTML = ('La mail non è presente');
    }
    console.log(eleResult);
});

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

    const eleResultShot = document.querySelector('.dice_result');
    const eleShot = document.querySelector('.btn-info');

    eleShot.addEventListener('click', function () {

        const myDice = document.querySelector('.my_dice');
        numberDice = Math.floor(Math.random() * 6 + 1);
        eleResultShot.innerHTML = (`Il tuo dado: ${numberDice}` );
        myDice.innerHTML = numberDice;
        
        const botDice = document.querySelector('.bot_dice');
        numberDiceBot = Math.floor(Math.random() * 6 + 1);
        eleResultShot.innerHTML = (`Il dado del Bot: ${numberDiceBot}` );
        botDice.innerHTML = numberDiceBot;
        
        if (numberDice > numberDiceBot){
            eleResultShot.innerHTML = (`Hai vinto!` );
        } else if (numberDice < numberDiceBot) {
            eleResultShot.innerHTML = (`Hai perso!` );
        } else {
            eleResultShot.innerHTML = (`Pareggio!` );
        }
    });

// BONUS:
// Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

eleDetelete.addEventListener('click', function () {
    document.location.reload();
});
