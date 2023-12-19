function convertValues() {
   /*esse*/  const inputValue = parseFloat(document.querySelector(".input").value.replace(",", "."));
    const valueToConvert = document.querySelector(".mangos2");
    const valueConvertedDollar = document.querySelector(".mangos4");
    const valueConvertedEuro = document.querySelector(".mangos6");
    const dolarToday = 4.9;
    const euroToday = 5.3;

  /*e esse*/  const convertValueDollar = inputValue / dolarToday;
              const convertValueEuro = inputValue / euroToday;

    valueToConvert.textContent = inputValue.toFixed(2);
    valueConvertedDollar.textContent = convertValueDollar.toFixed(2);
    valueConvertedEuro.textContent = convertValueEuro.toFixed(2);

    console.log("Valor convertido:", convertValueDollar);
    console.log("Valor convertido:", convertValueEuro);
}

const convertButton = document.querySelector(".convert-button");
convertButton.addEventListener("click", convertValues);
