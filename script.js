function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);
    const resultDiv = document.getElementById("result"); // Seleciona a div para exibir o resultado

    // Verificação de erros
    if (isNaN(min) || isNaN(max)) {
        resultDiv.textContent = "Por favor, insira números válidos!";
        return;
    }

    if (min < 0 || max < 0) {
        resultDiv.textContent = "Por favor, insira números positivos!";
        return;
    }

    if (min >= max) {
        resultDiv.textContent = "O número mínimo deve ser menor que o número máximo!";
        return;
    }

    // Sorteio do número
    const result = Math.floor(Math.random() * (max - min + 1) + min);
    resultDiv.textContent = `Número sorteado: ${result}`; // Exibe o resultado na div
}

// Coloca o foco no input ao carregar o site
window.onload = function () {
    document.querySelector(".input-min").focus();
};

// Função para lidar com a tecla "Enter"
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        generateNumber(); // Chama a função generateNumber() quando a tecla "Enter" é pressionada
    }
});