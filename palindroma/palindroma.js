'use strict'
//inizializiamo la variabile let

let word = control();

function control(word){
    //controllo se word ha valore numerico 
    do{
    word = prompt(`inserisci una parola e premi F12 per scoprire se è palindroma`)
    //richiediamo il dato fin tanto che è numerico
    }while  (!isNaN(parseFloat(word)) || word === null || word.trim() === "" ); 

    return word
}

console.log(`il valore non è un numero: ${word}`);
console.log(`input preso dall'utente: ${word}` )

function palindroma(word){
    
    //conterrà la parola invertita
    let reverseWord = "";
    //iteriamo all'inverso sulla parola inserita dall'utente
    for (let i = word.length - 1; i >= 0; i--) {
        // si stampa word in posizone index al contrario su reverseWord
        reverseWord += word[i];
    }
        console.log(`parola correttamente invertita: ${reverseWord}`);

    //comparare word con revrseWord 
    if( word === reverseWord){
        console.log(`la tua parola è un palindromo. -la tua parola: ${word} -la tua parola al contrario ${reverseWord}`)
    }else{
        console.log(`la tua parola non è un palindromo. la tua parola: ${word}-la tua parola al contrario ${reverseWord}`);
    }

}

palindroma(word);