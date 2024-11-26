Simon Says
===
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**NOTA**: non è importante l’ordine con cui l’utente inserisce i numeri, basta che ne indovini il più possibile.
**BONUS:**
- Inseriamo la validazione: se l’utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
- I numeri random generati devono essere univoci.

Step Logici
- Inserisco un countdown, sotto l quale viene visualizzato un Array stampato di 5 numeri casuali compresi tra 1 e 50.
- al termine del countdown faccio in modo che l'intera section sparisca con un display-none ne faccio comparire un'altra originalmente  presente ma con class d-none
- dentro questa section saranno presenti un form con 5 input testuali e un bottone
- riporto i vari input in js e inibisco il bottone
- stampo gli input testali all'interno di un secondo array e lo confronto con il primo
- riporto in un terzo array (quello di output) i valori corrispondenti dei primi due array
- creo una condizione: se l'array di output è composto da 5 numeri stampo il messaggio di vittoria
- se è composto da 0 < i < 5 numeri riporto in pagina l'array di output con i numeri indovinati
- se è composto da 0 numeri genero un messaggio di output negativo
- una volta che tutto funziona procedo con la validazione dei casi in cui si inseriscano due numeri uguali o si inserisca una stringa nan    