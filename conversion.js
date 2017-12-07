function currConvert() {
    var amount = prompt("Please enter the amount of USD you wish to convert. Don't include the $.", "10.00");
    var currency = null;
    if(amount != null) {
        currency = prompt("Please enter the currency you wish to convert into", "GBP");
    }
    var conversion = 0;
    if (amount != null && currency != null) {
        document.getElementById("convertedAmount").innerHTML =
            "$ " + amount + " in USD is " + conversion + " in " + currency;
    }
}
fx.rates = {
    GBP: 0.6,
    USD: 1
};
fx.base = USD;