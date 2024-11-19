function realizarSorteio() {
    // Pega o valor do input
    const nomesInput = document.getElementById("nomesInput").value;
    
    // Verifica se o campo não está vazio
    if (nomesInput.trim() === "") {
        alert("Por favor, insira alguns nomes!");
        return;
    }

    // Divide os nomes separados por vírgula e remove espaços extras
    const nomes = nomesInput.split(',').map(nome => nome.trim());

    // Verifica se há mais de um nome
    if (nomes.length < 2) {
        alert("Insira pelo menos dois nomes para sortear!");
        return;
    }

    // Sorteia um nome aleatório
    const vencedor = nomes[Math.floor(Math.random() * nomes.length)];

    // Exibe o resultado e aplica a classe 'show'
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = `O vencedor é: ${vencedor}`;

    // Aplica a classe 'show' para exibir o resultado com efeito de transição
    resultadoElemento.classList.add('show');

    // Limpa a entrada de texto após o sorteio
    document.getElementById("nomesInput").value = "";
}
