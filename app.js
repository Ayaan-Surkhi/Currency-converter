const currencyone = document.getElementById('currency-1');
const currencytwo = document.getElementById('currency-2'); 
const rateone = document.getElementById('rate-1');
const ratetwo = document.getElementById('rate-2');

// Fetch the data
function fetchCalculate(){
const selected1value  = currencyone.value; 
const selected2value = currencytwo.value; 

fetch(`https://api.exchangerate-api.com/v4/latest/${selected1value}`)
.then(res => res.json())
.then(data  => {
    // console.log(data);
    const rates = data.rates[selected2value];

    ratetwo.value = (rateone.value * rates).toFixed(2);
});
currencyone.addEventListener('change', calculate);
rateone.addEventListener('input', calculate);
currencytwo.addEventListener('change', calculate);
ratetwo.addEventListener('input', calculate);
}

//Call function
fetchCalculate();
