'use strict'
console.log('sono connesso')

const word = prompt("inserisci una parola e premi F12 per scoprire se è palindroma");

console.log(`input preso dall'utente: ${word}` )

function palindroma(word){
    
    //conterrà la parola invertita
    let reverseWord = "";
    //iteriamo all'inverso sulla parola inserita dall'utente
    for (let i = word.length - 1; i >= 0; i--){
        // si stampa word in posizone index al contrario su reverseWord
        reverseWord += word[i];
    }
        console.log(`parola correttamente invertita: ${reverseWord}`);
        return reverseWord;

}

palindroma(word);