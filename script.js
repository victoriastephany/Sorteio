function realizarSorteio() {
    // Pega o valor do input de nomes
    const nomesInput = document.getElementById("nomesInput").value;

    // Pega o valor do input de quantidade
    const quantidadeInput = document.getElementById("quantidade").value;
    const quantidade = parseInt(quantidadeInput);

    // Verifica se o campo de nomes não está vazio
    if (nomesInput.trim() === "") {
        alert("Por favor, insira alguns nomes!");
        return;
    }

    // Verifica se a quantidade é válida
    if (isNaN(quantidade) || quantidade < 1) {
        alert("Por favor, insira uma quantidade válida de vencedores!");
        return;
    }

    // Divide os nomes por linha e remove espaços extras
    const nomes = nomesInput.split('\n').map(nome => nome.trim()).filter(nome => nome !== "");

    // Verifica se há nomes suficientes para sortear
    if (nomes.length < quantidade) {
        alert("Há menos nomes do que a quantidade de vencedores. Adicione mais nomes.");
        return;
    }

    // Embaralha os nomes
    const sorteados = [];
    while (sorteados.length < quantidade) {
        const randomIndex = Math.floor(Math.random() * nomes.length);
        const nome = nomes.splice(randomIndex, 1)[0];
        sorteados.push(nome);
    }

    // Exibe o resultado
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = `Os vencedores são: ${sorteados.join(', ')}`;

    // Aplica a classe 'show' para exibir o resultado com efeito de transição
    resultadoElemento.classList.add('show');

    // Limpa os campos após o sorteio
    document.getElementById("nomesInput").value = "";
    document.getElementById("quantidade").value = "";
}
