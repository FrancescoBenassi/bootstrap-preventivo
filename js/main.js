// variabili con all'interno elementi del DOM

const calculatedPrice = document.getElementById('calculated-price');

const nameUser = document.getElementById('name-user');

const surnameUser = document.getElementById('surname-user');

const emailUser = document.getElementById('email-user');

const selectWork = document.getElementById('select-work');

const textAreaUser = document.getElementById('textarea-user');

const selectCoupon = document.getElementById('discount-coupon');

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
