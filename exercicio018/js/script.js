function executar() {
    const metrosTxt = prompt("Digite o valor em metros (use . ou ,):");

    if (metrosTxt === null) return;

    const metros = parseFloat(metrosTxt.replace(',', '.').trim());

    if (isNaN(metros) || metros < 0) {
        alert("Valor inválido! Digite um número em metros (ex: 1.5 ou 1,5).");
        return;
    }

    const cm = metros * 100;
    const mm = metros * 1000;

    alert(
        `${metros.toFixed(2)} metros equivalem a:\n` +
        `${cm.toFixed(2)} centímetros\n` +
        `${mm.toFixed(2)} milímetros`
    );
}
