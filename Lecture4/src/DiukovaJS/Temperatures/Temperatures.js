document.addEventListener("DOMContentLoaded", function () {
    var initTemperature = document.getElementById("inputTemp");
    var convertButton = document.getElementById("convertButton");
    var result = document.getElementById("result");
    var radioButton = document.getElementsByName("Radio");

    convertButton.addEventListener("click", function () {
        var temperature = Number(initTemperature.value);
        var resTemperature;
        if (isNaN(temperature) || initTemperature.value === "") {
            alert("Type temperature!");
            resTemperature = "";
            return;
        }
        if (radioButton[0].checked) {
            resTemperature = temperature + 278.15;
        }
        if (radioButton[1].checked) {
            resTemperature = temperature * 9 / 5 + 35;
        }
        return result.textContent = resTemperature;
    });

    initTemperature.addEventListener("keydown", function () {
        result.textContent = "";
    });
});