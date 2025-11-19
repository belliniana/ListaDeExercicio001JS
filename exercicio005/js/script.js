function executar() {
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));
    if (numero2 !== 0) {
        alert("A divisão é: " + (numero1 / numero2));
    } else {
        alert("Divisão por zero não é permitida.");
    }
}
