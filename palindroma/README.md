Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


//assegnamo a *word la funzione -control

let word = control();

//definiamo la funzione -control

function control(word){

    //richiediamo un prompt da parte dell'utente...
    do{

        word = prompt(`inserisci una parola e premi F12 per scoprire se è palindroma `)

    //fin tanto che... questo risulta essere un numero o uno spazio vuoto
    }while  (!isNaN(parseFloat(word))|| word === null || word.trim() === "");  

    //estraiamo word 
    return word
}

//debug per controllare i valori con console.log

//definiamo la funzione che palindroma() che stamperà la parola al contrario effetturà un controllo

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

//richiamiamo la funzione

paindroma(word);