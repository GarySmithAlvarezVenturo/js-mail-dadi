/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

//Request email
const requestMail = prompt("Inserisci qui la tua email");

//List email 
const mailArray = ['Gary@gmail.com', 'vincenzo@live.it', 'elena@libero.it', 'marco@gmail.com'];

// Check user input and mail addres
console.log("User mail: " + requestMail)
console.log("Mail array: " + mailArray)

//Check if user mail is in the array
let check = false;

for (let i = 0; i < mailArray.length; i++) {
    if (requestMail == mailArray[i]) {
        check = true;
        console.log('%cMail accepted', 'color: green');
        const welcomeMsg = alert("Access allowed");
    }
}

if (check == false){
    console.log('%cMail not accepted', 'color: red');  
    const accessDeniedMsg = alert("Acces denied!");
}