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