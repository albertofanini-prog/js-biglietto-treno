//Chiedere il numero di km da percorrere
//Chiedere l'età
//Il prezzo è di 0.21€ al km
//Sconto di 20% per <18
//Sconto di 40% per >65


//Chiedere il numero di km da percorrere

const km = prompt('Benvenuto in BoolTrain. Quanti km dovrai percorrere?');
console.log(km);
if (isNaN(km)){
    alert(`Inserire un valore numerico.`)
}


//Chiedere l'età

const age = prompt('Inserisci la tua età, perfavore.');
console.log(age)
if (isNaN(age)){
    alert(`Inserire un valore numerico.`)
}

alert('Il prezzo è di 0.21€ per km percorso. Gli under 18 hanno diritto a uno sconto del 20%, gli over 65 hanno diritto a uno sconto del 40%.')


//Calcolare il prezzo

const price = km * 0.21;
console.log(price);


//Calcolare il prezzo per under 18 con -20%

const priceU18 = price - ((20*price) / 100);
console.log(priceU18);


//Calcolare il prezzo per over 65 con -40%

const priceO65 = price - ((40*price) / 100);
console.log(priceO65);


//Dichiarare il prezzo

const datiHTML = document.getElementById('price');
datiHTML.innerHTML = `Il prezzo del suo biglietto sarà di ${price}€`;

    if(age < 18){
        datiHTML.innerHTML = `Il prezzo del suo biglietto sarà di ${priceU18.toFixed(2)}€`;
    }

    else if(age > 65){
        datiHTML.innerHTML = `Il prezzo del suo biglietto sarà di ${priceO65}€`;
    }

/*if ((isNaN(km))(isNaN(age))){
    alert(`Inserire un carattere numerico per continuare.`);
}
else{
    if(age < 18){
        price = price - ((20*price) / 100);
    }
    else if (age > 65){
        price = price - ((20*price) / 100);
    }
}

price = price.toFixed(2);
const datiHTML = document.getElementById('price')
datiHTML.innerHTML = `Il prezzo del suo bigliettto è ${price}`;
console.log(da);*/