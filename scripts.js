
// Função para adicionar items na tabela 
function adicionarItem() {
    const descricaoInput = document.getElementById("descricao");
    const valorInput = document.getElementById("valor");
    const categoriaInput = document.getElementById("categoria");
    const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];

    const descricao = descricaoInput.value;
    const valor = valorInput.value;
    const categoria = categoriaInput.value;

    const novaLinha = tabela.insertRow();
    const celulaDescricao = novaLinha.insertCell();
    const celulaValor = novaLinha.insertCell();
    const celulaCategoria = novaLinha.insertCell();

    celulaDescricao.innerHTML = descricao;
    celulaValor.innerHTML = valor;
    celulaCategoria.innerHTML = categoria;
}


//Função para limpar os dados da tabela 
function limparTabela() {
    const tabelaBody = document.querySelector("#tabelaDados tbody");
    if (tabelaBody) {
        tabelaBody.innerHTML = "";
    }
}

//Função calcular valores 
function calcular() {
    const tabelaDados = document.getElementById('tabelaDados');
    const corpoTabela = tabelaDados.getElementsByTagName('tbody')[0];

    const total = Array.from(corpoTabela.rows)
        .map(row => parseFloat(row.cells[1].textContent) || 0)
        .reduce((sum, valor) => sum + valor, 0);

    alert(`O total de gastos é: R$ ${total.toFixed(2)}`);
    console.log(`Total de gastos: R$ ${total.toFixed(2)}`);

}