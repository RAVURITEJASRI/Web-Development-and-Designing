function convert() {
    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (temp === "" || isNaN(temp)) {
        result.innerHTML = "Please enter a valid number!";
        return;
    }

    temp = parseFloat(temp);

    if (unit === "celsius") {
        let fahrenheit = (temp * 9/5) + 32;
        result.innerHTML = temp + "°C = " + fahrenheit.toFixed(2) + "°F";
    } else {
        let celsius = (temp - 32) * 5/9;
        result.innerHTML = temp + "°F = " + celsius.toFixed(2) + "°C";
    }
}
