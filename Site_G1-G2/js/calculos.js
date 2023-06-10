function calcular() {
    let preco_custo = document.getElementById("preco_custo").value;
    let percentual_lucro = document.getElementById("percentual_lucro").value;
    let preco_venda = document.getElementById("preco_venda").value;
    preco_venda = parseFloat(preco_custo) + (preco_custo * (percentual_lucro / 100));
    console.log(preco_custo);
    console.log(percentual_lucro);
    console.log(preco_venda);
    document.getElementById("preco_venda").value = preco_venda;
}

function cadastrar() {
    let preco_custo = document.getElementById("preco_custo").value;
    let produto = document.getElementById("produto")
}