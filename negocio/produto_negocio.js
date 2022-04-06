let listaProdutos = [
    {id:1, nome:"Pastel", preco:7}
];
let idAutoIncrement = 2;

exports.listar = () => {
    return listaProdutos;
}

exports.buscarPorId = (id) => {
    const produto = listaProdutos.find(
        (produto) => produto.id == id
    );

    if(!produto){
        throw new Error("Produto nao encontrado");
    }
    else {
        return produto;
    }
}

exports.inserir = (produto) => {
    if(produto && produto.nome && produto.preco){
        produto.id = idAutoIncrement++;
        listaProdutos.push(produto);
        return produto;
    }
    else {
        throw new Error("Falta parametros de produto");
    }
}
