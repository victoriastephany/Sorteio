function realizarSorteio() {
    const nomesInput = document.getElementById("nomesInput").value;
    const quantidadeInput = document.getElementById("quantidade").value;
    const quantidade = parseInt(quantidadeInput);
    const resultadoElemento = document.getElementById("resultado");

    if (nomesInput.trim() === "") {
        alert("Por favor, insira alguns nomes!");
        return;
    }

    if (isNaN(quantidade) || quantidade < 1) {
        alert("Por favor, insira uma quantidade válida de vencedores!");
        return;
    }

    const nomes = nomesInput.split('\n').map(nome => nome.trim()).filter(nome => nome !== "");

    if (nomes.length < quantidade) {
        alert("Há menos nomes do que a quantidade de vencedores. Adicione mais nomes.");
        return;
    }

    const sorteados = [];
    while (sorteados.length < quantidade) {
        const randomIndex = Math.floor(Math.random() * nomes.length);
        const nome = nomes.splice(randomIndex, 1)[0];
        sorteados.push(nome);
    }

    let contagem = 3;

    const mostrarContagem = () => {
        resultadoElemento.textContent = contagem;
        resultadoElemento.classList.add('countdown', 'show');

        setTimeout(() => {
            resultadoElemento.classList.remove('countdown');
            contagem--;

            if (contagem > 0) {
                mostrarContagem();
            } else {
                resultadoElemento.textContent = `🎉 Os vencedores são: ${sorteados.join(', ')}`;
                resultadoElemento.style.fontSize = "22px";
                confetti(); // 🎊 Solta os confetes!

                // Limpa os campos
                document.getElementById("nomesInput").value = "";
                document.getElementById("quantidade").value = "";
            }
        }, 1000);
    };

    mostrarContagem();
}
