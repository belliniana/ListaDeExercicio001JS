function executar() {
    const raio = parseFloat(prompt("Digite o raio do círculo:"));
    const area = Math.PI * Math.pow(raio, 2);
    alert("A área do círculo é: " + area.toFixed(2));
}
