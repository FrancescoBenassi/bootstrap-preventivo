# Calcolare il preventivo

1) Prendere gli elementi del form dal DOM creando delle variabili
2) Creare un array "prezzo lavoro" con all'interno degli oggetti con delle proprietà (nome lavoro e prezzo)
3) Creare un ciclo per rendere la select dinamica
4) Creare un'array "coupon" con dentro i vari codici sconto
5) Creare una funzione evento al submit per calcolare il prezzo finale e aggiungerlo al DOM modificandolo
    - Validare il nome, cognome, email e Privacy Police
    - Confrontare il lavoro scelto nel form con gli oggetti nell'array "lavoro" e applicare il giusto prezzo
    - Calcolare il prezzo in base al lavoro e alla quantità d'ore di lavoro(10 ore)
    - Confrontare lo sconto se è stato applicato confrontandolo con gli oggetti nell'array "sconto"
    - Nel caso fosse stato applicato calcolare applicare lo sconto al prezzo calcolato in precedenza
    - Rimuovere tutti i campi del form rendendoli vuoti
    - Aggiungere il risultato finale del preventivo al DOM modificandolo