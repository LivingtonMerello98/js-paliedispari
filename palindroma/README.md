Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


//chiedere all'utente attraverso prompt di inserire una parola

const word = prompt('inseirisci una parola e ti diremo se è palindroma');

//creare funzione(){}

function palindroma(word)

let reverseWord= "";  //variabile che conterra la parola invertita
for (i of word) {   //percorro le lettere della parola in ordine inverso
    reverseWord += i;     //aggiunge alla fine di reverseWord la lettera attuale
}                       //quando finisce il for, reverseWord contiene la parola invertita



if (reverseWord === word) {  //controlla se reverseWord è uguale a word
    console.log("La tua parola è un palindromo");  //stampa su console "La tua parola è un palindromo"
} else {
    console.log("La tua parola non è un palindromo") ;     //stampa su console "La tua parola non è un palindromo"

}



//----------------------------------//

controllo valore

-se numerico

//utiliziamo un ciclo do-while per stabilire se il prompt è un numero o una parola
//cambiamo da const a let inizializzando la variabile a 0 : let word

let word

do{ 
    word = prompt ('Inserisci una parola e ti diremo se è palindroma');
 }while{
    !isNaN(word); continuiamo a chiedere all utente finchè l'input è un numero
 }


-valore è vuoto

//se la lavriabile è uguale a un campo nullo o vuoto
chiediamo ll utente di inserire una parola

//altrimenti entriamo nelaìla funzione palindroma() per determinare se la funzione è palindroma o meno

if (word === null || word.trim() === " "){ //trim() per verificare che la stringa sia effettivamente vuota rimuoviao gli spazi con trim() e verifichiamo se c'è un reale contenuto con === " "

    console.log(inserisci un valore)
    alert inserisci un valore valido
}else{
    palindroma(word)
}

