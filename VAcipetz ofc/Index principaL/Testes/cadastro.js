onBtnCadastrarClick = () => {
    const enderecoAtualSplit = window.location.href.split('/');
    enderecoAtualSplit.pop();
    enderecoAtualSplit.pop();
    let novoEndereco = enderecoAtualSplit.join('/') + '/pets/pet-lista.html';
    window.location.href = novoEndereco;
}