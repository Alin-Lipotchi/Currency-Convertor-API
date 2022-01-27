const currencyForm = document.querySelector("form.currency-convertor");
const outputText = document.querySelector("h2.converted-value");

const printError = () => {
    outputText.style.color = "red";
    outputText.innerHTML = "Please insert a valid value!"
    outputText.style.opacity = "1";
    console.error("Insert a valid value");
}

const printResult = (value, currency) => {
    outputText.style.color = "black";
    outputText.innerHTML = `The converted value is ${value} ${currency}`;
    outputText.style.opacity = "1";
}

const convertCurrency = async (e) => {
    e.preventDefault();
    let userAmount = currencyForm[0].value;
    let userCurrency = currencyForm[1].value;
    let wantedCurrency = currencyForm[2].value;
    if(parseFloat(userAmount)) {
        const response = await fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${userCurrency}&want=${wantedCurrency}&amount=${userAmount}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-converter-by-api-ninjas.p.rapidapi.com",
            "x-rapidapi-key": "26322812damsh909f42bf90d25a8p1f23ddjsn63d6b73897c6"
        }
        });
        if(response.status === 200) {
            let result = await response.json();
            printResult(result.new_amount, result.new_currency);
        } else {
            printError();
        }
    } else {
        printError();
    }
}

currencyForm.addEventListener("submit", convertCurrency);