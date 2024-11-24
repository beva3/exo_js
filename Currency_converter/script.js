const btn = document.getElementById('convertBtn');
class CurrencyConvert{
    constructor(exchangeRates){
        this.exchangeRates = exchangeRates;
    }
    convert(amount, from_currency, to_currency){
        const rate = this.exchangeRates[from_currency][to_currency];
        return amount * rate;
    }
    display_result(amount, from_currency, to_currency, convertedAmount){
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `${amount} ${from_currency} = ${convertedAmount} ${to_currency}`;
    }
    display_error(msg){
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = msg;
    }
    // validate input
    validateInput(amount, from_currency, to_currency){
        if(!amount || from_currency === to_currency){
            return false;
        }
        return true;
    }
}

console.log(btn);

const exchangeRates = {
    USD: { EUR: 0.85, MGA: 4400 },
    EUR: { USD: 1.18, MGA: 5200 },
    MGA: { USD: 0.00023, EUR: 0.00019 },
};
// console.log(exchangeRates['EUR']['USD']);


btn.addEventListener('click',() =>{
    let amount = parseFloat(document.getElementById('amount').value);
    let from_currency = document.getElementById('fromCurrency').value;
    let to_currency = document.getElementById('toCurrency').value; 
       
    let app = new CurrencyConvert(exchangeRates);
    if(!app.validateInput(amount, from_currency, to_currency)){
        app.display_error("Invalid input or same currency")
        return;
    }
    let result = app.convert(amount, from_currency, to_currency);
    app.display_result(amount, from_currency, to_currency, result);
    // alert('Please enter');
})

