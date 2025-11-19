function executar() {

    const nome = prompt("Digite o nome do produto:");
    if (nome === null || nome.trim() === "") {
        alert("Nome inválido!");
        return;
    }

    const precoTxt = prompt("Digite o preço do produto (use . ou ,):");

    if (precoTxt === null) return;

    const preco = parseFloat(precoTxt.replace(',', '.').trim());

    if (isNaN(preco) || preco <= 0) {
        alert("Preço inválido! Digite um valor como 100,50 ou 100.50");
        return;
    }

    const precoComDesconto = preco * 0.90; 
    const descontoValor = preco - precoComDesconto;

    alert(
        `Produto: ${nome}\n` +
        `Preço original: R$ ${preco.toFixed(2)}\n` +
        `Desconto (10%): R$ ${descontoValor.toFixed(2)}\n` +
        `Preço final: R$ ${precoComDesconto.toFixed(2)}`
    );
}
