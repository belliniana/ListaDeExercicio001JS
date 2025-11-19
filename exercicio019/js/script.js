function executar() {
    const base = parseFloat(prompt("Digite o valor do cateto adjacente:"));
    const altura = parseFloat(prompt("Digite o valor do cateto oposto:"));
    const hipotenusa = Math.sqrt(base ** 2 + altura ** 2);
    alert("A hipotenusa é: " + hipotenusa.toFixed(2));
}