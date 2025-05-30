const convertbutton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelector = document.querySelector(".currency-selector")


function convertValues() {
    const inputcurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.72
    const euroToday = 6.49
    const realToday = 1.0


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyValue / euroToday)
    }
    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputcurrencyValue / realToday)
    }

    if (currencySelector.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputcurrencyValue / realToday)
    }
    if (currencySelector.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyValue /dolarToday)
    }
    if (currencySelector.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyValue /euroToday)
    }
}
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".converted")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/moeda-de-dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real-brasileiro.png"
    }

    convertValues()
}

function changetwoCurrency() {
    const currencyNameOne = document.getElementById("currency-name-one")
    const currencyImage = document.querySelector(".convert")

     if (currencySelector.value == "real") {
        currencyNameOne.innerHTML = "Real"
        currencyImage.src = "./assets/real-brasileiro.png"
    }

     if (currencySelector.value == "dolar") {
         currencyNameOne.innerHTML = "Dólar"
        currencyImage.src = "./assets/moeda-de-dolar.png"
    }
     if (currencySelector.value == "euro") {
         currencyNameOne.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
currencySelector.addEventListener("change", changetwoCurrency)
convertbutton.addEventListener("click", convertValues)