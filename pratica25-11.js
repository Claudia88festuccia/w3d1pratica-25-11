/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = (a, b) => {
    return a === b ? (a + b) * 3 : a + b;
  }
  console.log(crazySum(2,3))
  console.log(crazySum(4,4))
/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(num1){
    return(num1>=20 && num1<=100)||(num1===400)
  }
  console.log(boundary(400))
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("ciao"))
/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(str) {
  return str.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
}
console.log(upperFirst("ciao sono una stringa"))
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
      result.push(Math.floor(Math.random() * 11));  
  }
  return result;
}
console.log(giveMeRandom(5))
//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1,l2){
  return(l1*l2)
  }
  console.log(area(5, 7))
/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num) {
  let diff = Math.abs(num - 19); // Calcola la differenza assoluta
  return diff > 19 ? diff * 3 : diff;  // Usa un operatore ternario per decidere il risultato
}
console.log(crazyDiff(20))
/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function codify(str) {
  return str.startsWith("code") ? str : "code" + str;
}
console.log(codify("ciao"));      
console.log(codify("codeciao"));
/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(num) {
  return num % 3 === 0 || num % 7 === 0;
}
console.log(check3and7(9));   
console.log(check3and7(14));
/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str) {
  return str.slice(1, -1);
}
console.log(cutString("taglia"))