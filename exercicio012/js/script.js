function executar() {
    const n1 = parseFloat(prompt("Digite a primeira nota:"));
    const n2 = parseFloat(prompt("Digite a segunda nota:"));
    const n3 = parseFloat(prompt("Digite a terceira nota:"));
    const media = (n1 + n2 + n3) / 3;
    alert("A média é: " + media.toFixed(2));
}