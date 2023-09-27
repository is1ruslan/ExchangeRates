window.addEventListener('DOMContentLoaded', function () {


    let selectOpt = document.querySelector('.select'),
        calcDol = document.querySelector('.calc-dol'),
        calcEur = document.querySelector('.calc-eur'),
        calcLar = document.querySelector('.calc-lar'),
        calcRub = document.querySelector('.calc-rub'),
        inputNum = document.querySelector('.input'),
        rubUsd = document.querySelector('.rub-dol-calc'),
        rubEur = document.querySelector('.rub-eur-calc'),
        rubGel = document.querySelector('.rub-lar-calc'),
        usdRub = document.querySelector('.dol-rub-calc'),
        usdEur = document.querySelector('.dol-eur-calc'),
        usdGel = document.querySelector('.dol-lar-calc'),
        eurRub = document.querySelector('.eur-rub-calc'),
        eurUsd = document.querySelector('.eur-usd-calc'),
        eurGel = document.querySelector('.eur-gel-calc'),
        gelRub = document.querySelector('.lar-rub-calc'),
        gelUsd = document.querySelector('.lar-usd-calc'),
        gelEur = document.querySelector('.lar-eur-calc');



    //Taking rates of currencies

    const API_KEY = '2ca12bfc303bef7845a1e97d4792edfb';
    const usdAPI = `https://open.er-api.com/v6/latest/USD?apikey=${API_KEY}`;
    const rubAPI = `https://open.er-api.com/v6/latest/RUB?apikey=${API_KEY}`;
    const eurAPI = `https://open.er-api.com/v6/latest/EUR?apikey=${API_KEY}`;
    const gelAPI = `https://open.er-api.com/v6/latest/GEL?apikey=${API_KEY}`;

    fetch(rubAPI)
        .then(response => response.json())
        .then(data => {
            rubRates(data.rates);
        })
        .catch(error => {
            console.error("Error when receiving exchange rates:", error);
        });

    fetch(usdAPI)
        .then(response => response.json())
        .then(data => {
            usdRates(data.rates);
        })
        .catch(error => {
            console.error("Error when receiving exchange rates:", error);
        });
    
    fetch(eurAPI)
        .then(response => response.json())
        .then(data => {
            eurRates(data.rates);
            console.log(data.rates);
        })
        .catch(error => {
            console.error("Error when receiving exchange rates:", error);
        });  

    fetch(gelAPI)
        .then(response => response.json())
        .then(data => {
            gelRates(data.rates);
        })
        .catch(error => {
            console.error("Error when receiving exchange rates:", error);
        });



    //Show rates on the site

    let rubUsd_API = 0,
        rubEur_API = 0,
        rubGel_API = 0,
        usdRub_API = 0,
        usdEur_API = 0,
        usdGel_API = 0,
        eurUsd_API = 0,
        eurRub_API = 0,
        eurGel_API = 0,
        gelUsd_API = 0,
        gelEur_API = 0,
        gelRub_API = 0;

    function rubRates (rate) {
        rubUsd_API = rate.USD,
        rubEur_API = rate.EUR,
        rubGel_API = rate.GEL;
        rubUsd.textContent = rubUsd_API.toFixed(2);
        rubEur.textContent = rubEur_API.toFixed(2);
        rubGel.textContent = rubGel_API.toFixed(2);
    };
    
    function usdRates (rate) {
        usdRub_API = rate.RUB;
        usdEur_API = rate.EUR;
        usdGel_API = rate.GEL;
        usdRub.textContent = usdRub_API.toFixed(2);
        usdEur.textContent = usdEur_API.toFixed(2);
        usdGel.textContent = usdGel_API.toFixed(2);
    };

    function eurRates (rate) {
        eurRub_API = rate.RUB;
        eurUsd_API = rate.USD;
        eurGel_API = rate.GEL;
        eurRub.textContent = eurRub_API.toFixed(2);
        eurUsd.textContent = eurUsd_API.toFixed(2);
        eurGel.textContent = eurGel_API.toFixed(2);
    };

    function gelRates (rate) {
        gelRub_API = rate.RUB;
        gelEur_API = rate.EUR;
        gelUsd_API = rate.USD;
        gelRub.textContent = gelRub_API.toFixed(2);
        gelEur.textContent = gelEur_API.toFixed(2);
        gelUsd.textContent = gelUsd_API.toFixed(2);
    };
    


    //Calculate Inputed Currency

    function caclCurrency () {

        if (selectOpt.value === 'RUB') {

                calcDol.textContent = (inputNum.value * rubUsd_API).toFixed(2);
                calcEur.textContent = (inputNum.value * rubEur_API).toFixed(2);
                calcLar.textContent = (inputNum.value * rubGel_API).toFixed(2);
                calcRub.textContent = (inputNum.value * 1).toFixed(2);
            };

        if (selectOpt.value === 'USD') {

                calcDol.textContent = (inputNum.value * 1).toFixed(2);
                calcEur.textContent = (inputNum.value * usdEur_API).toFixed(2);
                calcLar.textContent = (inputNum.value * usdGel_API).toFixed(2);
                calcRub.textContent = (inputNum.value * usdRub_API).toFixed(2);;
            };

        if (selectOpt.value === 'EUR') {

                calcDol.textContent = (inputNum.value * eurUsd_API).toFixed(2);
                calcEur.textContent = (inputNum.value * 1).toFixed(2);
                calcLar.textContent = (inputNum.value * eurGel_API).toFixed(2);
                calcRub.textContent = (inputNum.value * eurRub_API).toFixed(2);;
            };
        
        if (selectOpt.value === 'GEL') {

                calcDol.textContent = (inputNum.value * gelUsd_API).toFixed(2);
                calcEur.textContent = (inputNum.value * gelEur_API).toFixed(2);
                calcLar.textContent = (inputNum.value * 1).toFixed(2);
                calcRub.textContent = (inputNum.value * gelRub_API).toFixed(2);;
            };
    }

    inputNum.addEventListener('input', caclCurrency);
    selectOpt.addEventListener('change', caclCurrency);
});