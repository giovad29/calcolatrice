/**
 * Descrizione dell'esercizio:
  Creare una semplice calcolatrice che permetta all'utente di inserire due numeri e selezionare 
  un'operazione aritmetica tra somma, sottrazione, moltiplicazione e divisione. 
  Il risultato dell'operazione selezionata viene visualizzato sulla pagina web.

 Istruzioni:

 Crea un documento HTML con un form per l'input dei numeri e la selezione dell'operazione.
 Utilizza JavaScript per gestire l'input dell'utente e calcolare il risultato in base all'operazione selezionata.
 Utilizza sia lo statement switch che l'if per gestire diversi casi di operazione.
 */


function calcola(){
    var operazione = document.getElementById("operazione");
    var operazioneScelta = operazione.value;
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var risultato = document.getElementById("risultato");
    
  
    
        

    switch (operazioneScelta) {
        case "somma":
             if (isNaN(numero1) || isNaN(numero2)) {
                    alert("inserisci i numeri");

                }
                else {
                    var ris = numero1 + numero2;
                    risultato.innerHTML += numero1 + " + " + numero2 + " = " + ris;


                }
                break;
        case "differenza":
                if (isNaN(numero1) || isNaN(numero2)) {
                    alert("inserisci i numeri");

                }
                else {
                    var ris = numero1 - numero2;
                    risultato.innerHTML += numero1 + " - " + numero2 + " = " + ris;


                }
                break;
        case "prodotto":
                if (isNaN(numero1) || isNaN(numero2)) {
                    alert("inserisci i numeri");

                }
                else {
                    var ris = numero1 * numero2;
                    risultato.innerHTML += numero1 + " * " + numero2 + " = " + ris;


                }
                break; case "divisione":
                if (isNaN(numero1) || isNaN(numero2)) {
                    alert("inserisci i numeri");

                }
                else {
                    if (numero2 === 0) {
                        risultato.innerHTML = "impossibile dividere per 0";
                    }
                    else {
                        var ris = numero1 / numero2;
                        risultato.innerHTML += numero1 + " / " + numero2 + " = " + ris; }
                    


                }
                break;
            default: risultato.innerHTML = "operazione non valida";
    }
    

    }
        


