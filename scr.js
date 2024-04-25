function validaCadastro() {
    // Obtém os valores dos campos do formulário e remove espaços em branco extras
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var senha = document.getElementById('senha').value.trim();
    var confirmarSenha = document.getElementById('confirmarSenha').value.trim();

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!nome || !email || !senha || !confirmarSenha) {
        alert("Campos obrigatórios!");
        return false; // Impede o envio do formulário
    }

    // Verifica se a senha e a confirmação de senha coincidem
    if (senha !== confirmarSenha) {
        alert("As senhas não conferem.");
        return false; // Impede o envio do formulário
    }

    // Aqui você pode adicionar o código para enviar os dados do formulário para o servidor
    // Por exemplo, você pode usar AJAX para enviar os dados sem recarregar a página

    // Se a validação passou, o formulário será enviado
    alert('Cadastro realizado com sucesso!');
    return true;
}

