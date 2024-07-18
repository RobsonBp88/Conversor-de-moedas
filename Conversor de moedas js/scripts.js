
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const moedaSelect = document.querySelector(".moeda-select")


function convertValues(){

const inputCurrencyValue = document.querySelector(".input-currency").value
const valorMoedaConverter = document.querySelector(".valor-moeda-converter")
const valorMoedaConvertido = document.querySelector(".valor-moeda")

console.log(currencySelect.value)
console.log(moedaSelect.value)

const dolarToday = 5.2
const euroToday = 6.2
const libraToday = 7.1
const bitcoinToday = 352404.10
const realToday = 0.18


if(currencySelect.value=="dolar"){

    valorMoedaConvertido.innerHTML = new Intl.NumberFormat("en-US", {

        style: "currency",
        currency: "USD"
        
        }).format(inputCurrencyValue / dolarToday)
        


}

if(currencySelect.value=="euro"){

    valorMoedaConvertido.innerHTML = new Intl.NumberFormat("de-DE", {

        style: "currency",
        currency: "EUR"

        }).format(inputCurrencyValue / euroToday)


}

if(currencySelect.value=="libra"){

    valorMoedaConvertido.innerHTML = new Intl.NumberFormat("en-GB", {

        style: "currency",
        currency: "GBP"

        }).format(inputCurrencyValue / libraToday)


}

if(currencySelect.value=="bitcoin"){

    valorMoedaConvertido.innerHTML = new Intl.NumberFormat("de-DE", {

        style: "currency",
        currency: "BTC"

        }).format(inputCurrencyValue / bitcoinToday)


}




valorMoedaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {

style: "currency",
currency: "BRL"

}).format(inputCurrencyValue)

}  
        


function changeCurrency(){

    const nomeMoeda = document.getElementById("nome-moeda-usa")
    const moedaDolar = document.querySelector(".moeda-dolar-img")

    if(currencySelect.value=="dolar"){

        nomeMoeda.innerHTML = "Dólar"
        moedaDolar.src="./assets/dolar.png"

    }

    if(currencySelect.value=="euro"){

        nomeMoeda.innerHTML = "Euro"
        moedaDolar.src="./assets/euro.png"

    }

    if(currencySelect.value=="libra"){

        nomeMoeda.innerHTML = "Libra"
        moedaDolar.src="./assets/libra.png"

    }

    if(currencySelect.value=="bitcoin"){

        nomeMoeda.innerHTML = "Bitcoin"
        moedaDolar.src="./assets/bitcoin.png"

    }




    convertValues()

}

function changeMoeda(){

    const nomeReal = document.getElementById("nome-moeda-real")
    const moedaReal = document.querySelector(".moeda-real-img")

    if(moedaSelect.value=="real"){

        nomeReal.innerHTML = "Real"
        moedaReal.src="./assets/real.png"

    }

    if(moedaSelect.value=="dolar"){

        nomeReal.innerHTML = "Dólar"
        moedaReal.src="./assets/dolar.png"

    }

    if(moedaSelect.value=="euro"){

        nomeReal.innerHTML = "Euro"
        moedaReal.src="./assets/euro.png"

    }

    if(moedaSelect.value=="libra"){

        nomeReal.innerHTML = "Libra"
        moedaReal.src="./assets/libra.png"

    }

    if(moedaSelect.value=="bitcoin"){

        nomeReal.innerHTML = "Bitcoin"
        moedaReal.src="./assets/bitcoin.png"

    }

    convertValues()

}

moedaSelect.addEventListener("change", changeMoeda)

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)