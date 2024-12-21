function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);

    const result = Math.floor(Math.random() * (max - min + 1) + min);

    // Verificação de erros
    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, insira números válidos!");
        return;
    }
    
    if (min < 0 || max < 0) {
        alert("Por favor, insira números positivos!");
        return;
    }

    if (min >= max) {
        alert("O número mínimo deve ser menor que o número máximo!");
        return;
    }
}

// Coloca o foco no input ao carregar o site
window.onload = function() {
    document.querySelector(".input-min").focus();
};

// Função para lidar com a tecla "Enter"
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        generateNumber(); // Chama a função generateNumber() quando a tecla "Enter" é pressionada
    }
});