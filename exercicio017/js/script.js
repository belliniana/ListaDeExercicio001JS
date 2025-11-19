function executar() {
    const nome1 = prompt("Digite o nome da primeira pessoa:");
    const idade1 = parseInt(prompt(`Digite a idade de ${nome1}:`));
    const nome2 = prompt("Digite o nome da segunda pessoa:");
    const idade2 = parseInt(prompt(`Digite a idade de ${nome2}:`));
    const nome3 = prompt("Digite o nome da terceira pessoa:");
    const idade3 = parseInt(prompt(`Digite a idade de ${nome3}:`));
    const media = (idade1 + idade2 + idade3) / 3;
    alert(`A média das idades é: ${media.toFixed(1)}`);
}