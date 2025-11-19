function executar() {

    const pesoTxt = prompt("Digite seu peso (kg):");
    const alturaTxt = prompt("Digite sua altura (m) (use '.' ou ','):");

    if (pesoTxt === null || alturaTxt === null) return; 

    const peso = parseFloat(pesoTxt.replace(',', '.').trim());
    const altura = parseFloat(alturaTxt.replace(',', '.').trim());

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Valores inválidos! Certifique-se de digitar números (ex: 70 e 1.60).");
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso ideal (normal)";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III (mórbida)";
    }

    const imcAlvo = 24.9;
    const pesoAlvo = imcAlvo * altura * altura;
    const diferenca = peso - pesoAlvo;
    const diferencaText = diferenca > 0
        ? `Você deveria perder aproximadamente ${diferenca.toFixed(2)} kg para ficar com IMC ${imcAlvo}.`
        : (Math.abs(diferenca) > 0.01
            ? `Você poderia ganhar aproximadamente ${Math.abs(diferenca).toFixed(2)} kg para ficar com IMC ${imcAlvo}.`
            : `Você já está muito próximo do IMC ${imcAlvo}.`);

    alert(
        "Seu IMC é: " + imc.toFixed(2) +
        "\nClassificação: " + classificacao +
        "\n\n" + diferencaText
    );
}
