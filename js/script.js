// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const userMail = document.querySelector('#mail');
console.log (userMail);

const arrMail = ['luca@gmail.com', 'marco@gmail.com', 'paolo@gmail.com', 'franco@gmail.com','gianni@gmail.com'];
console.log (arrMail);

for (let i = 0; i < arrMail.length; i++) {
    if (userMail != arrMail[i]){
        console.log('La mail non è presente');
    } else {
        console.log('Email confermata!')
    }
};




// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// BONUS:
// Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
