document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById('generate');
    const numberDisplay = document.getElementById('number-display');
    let generatedNumbers = [];

    generateButton.addEventListener('click', () => {
        const min = parseInt(document.getElementById('min').value);
        const max = parseInt(document.getElementById('max').value);

        if (isNaN(min) || isNaN(max) || min > max) {
            alert("Por favor ingresa un rango válido.");
            return;
        }

        if (generatedNumbers.length >= (max - min + 1)) {
            alert("Todos los números posibles han sido generados.");
            return;
        }

        let randomNum;
        do {
            randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (generatedNumbers.includes(randomNum));

        generatedNumbers.push(randomNum);
        numberDisplay.textContent = randomNum;
    });
});