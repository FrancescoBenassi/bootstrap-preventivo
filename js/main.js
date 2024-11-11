// variabili con all'interno elementi del DOM

const calculatedPrice = document.getElementById('calculated-price');

const nameUser = document.getElementById('name-user');

const surnameUser = document.getElementById('surname-user');

const emailUser = document.getElementById('email-user');

const selectWork = document.getElementById('select-work');

const textAreaUser = document.getElementById('textarea-user');

const selectCoupon = document.getElementById('discount-coupon');

const couponSuccess = document.getElementById('coupon-success');

const privacyRules = document.getElementById('privacy-rules');

const resultPrice = document.getElementById('result');

// Array con oggetti dei nomi e dei prezzi dei vari lavori

const priceWork = [{
    nameWork: 'BackedDevelopment',
    price: 20.50
}, {
    nameWork: 'FrontedDevelopment',
    price: 15.30
}, {
    nameWork: 'ProjectAnalysis',
    price: 33.60
}]

// Variabile della unghezza Array 

const priceWorkLenght = priceWork.length;

// Ciclo per rendere la select dinamica

for (let i = 0; i < priceWorkLenght; i++) {
    const priceWorks = priceWork[i];
    const optionElement = document.createElement('option');
    optionElement.innerHTML = priceWorks.nameWork;
    selectWork.appendChild(optionElement);
}

// Variabile con le ore di lavoro

const hoursWork = 10;

/* Array con dentro i vari codici sconto, variabile con la lunghezza dell'array e sconto 
da applicare nel caso sia presente uno di questi codici sconto */

const coupons = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']; // Codici validi per aver il 25% di sconto
const couponsLenght = coupons.length;
const priceCoupons = 25 / 100; // Sconto del 25%

/* Funzione evento che al submit valida i campi (nome, cognome, email) se sono corretti, 
calcola il prezzo finale e lo aggiunge al DOM modificandolo */

calculatedPrice.addEventListener('submit', function (event) {
    event.preventDefault();

    //// Inizio Validazione nome, cognome, email

    const nameValue = nameUser.value;
    if (!isValidName(nameValue)) { return alert("Il nome non è valido"); }

    const surnameValue = surnameUser.value;
    if (!isValidName(surnameValue)) { return alert("Il cognome non è valido"); }

    const emailValue = emailUser.value;
    if (!isValidEmail(emailValue)) { return alert("L'email non è valida"); }

    //// Fine Validazione nome, cognome, email

    const selectWorkValue = selectWork.value;
    const selectCouponValue = selectCoupon.value;
    let totalPrice = 0;

    // Ciclo per calcolare il prezzo del lavoro in base al lavoro scelto dall'utente

    for (let i = 0; i < priceWorkLenght; i++) {
        const priceWorkObject = priceWork[i];
        if (selectWorkValue === priceWorkObject.nameWork) {
            totalPrice = priceWorkObject.price * hoursWork;
        }
    }

    // Ciclo per verificare e calcolare lo sconto nel caso il coupon fosse stato inserito

    couponSuccess.classList.add('d-none');

    for (let i = 0; i < couponsLenght; i++) {
        const couponsObject = coupons[i];
        if (selectCouponValue === couponsObject) {
            totalPrice = totalPrice - (totalPrice * priceCoupons);
            couponSuccess.classList.remove('d-none');
        }
    }

    // Svuotamento dei campi input

    nameUser.value = '';
    surnameUser.value = '';
    emailUser.value = '';
    selectWork.value = '';
    textAreaUser.value = '';
    selectCoupon.value = '';
    privacyRules.checked = false;

    //Aggiunta del prezzo finale al DOM

    let totalPriceString = totalPrice.toFixed(2);
    let [numberInt, numberDeci] = totalPriceString.split(".");

    result.innerHTML = `€ <strong>${numberInt}</strong>,${numberDeci}`;

})

// Funzione per validare una parola

function isValidName(string) {
    const wordPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    return wordPattern.test(string);
}

// Fnzione per validare una email

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}