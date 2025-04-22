
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