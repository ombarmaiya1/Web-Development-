const countryCode1 = document.getElementById("countryCode1");
const country1 = document.getElementById("country1");
const country2 = document.getElementById("country2");

const amountInput = document.getElementById("amountInput");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("resultOutput");

let currencyData = {};

// Fetch all currency rates
const getCurrencies = async () => {
  try {
    let data = await fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json",
    );

    data = await data.json();
    currencyData = data.usd;

    loadDropdowns();
  } catch (err) {
    console.log("Error:", err);
  }
};

// Populate dropdowns
const loadDropdowns = () => {
  const currencies = Object.keys(currencyData);

  currencies.forEach((currency) => {
    const option1 = document.createElement("a");
    option1.classList.add("dropdown-item");
    option1.href = "#";
    option1.innerText = currency.toUpperCase();

    option1.addEventListener("click", () => {
      country1.innerText = currency.toUpperCase();
    });

    countryCode1.appendChild(option1);

    // second dropdown
    const option2 = document.createElement("a");
    option2.classList.add("dropdown-item");
    option2.href = "#";
    option2.innerText = currency.toUpperCase();

    option2.addEventListener("click", () => {
      country2.innerText = currency.toUpperCase();
    });

    document.querySelectorAll(".dropdown-menu")[1].appendChild(option2);
  });
};

const convert = () => {
  const fromCurrency = country1.innerText.toLowerCase();
  const toCurrency = country2.innerText.toLowerCase();
  const amount = Number(amountInput.value);

  const amountInUSD = amount / currencyData[fromCurrency];
  const convertedAmount = amountInUSD * currencyData[toCurrency];

  result.innerText = convertedAmount.toFixed(2);
};

convertBtn.addEventListener("click", convert);

getCurrencies();
