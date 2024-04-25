
function validasenha() {
    // Obtém o valor do campo de e-mail e remove espaços em branco extras
    var email = document.getElementById('email').value.trim();

// Verifica se todos os campos obrigatórios foram preenchidos
if (!email) {
    alert("Campo obrigatório!");
    return false; // Impede o envio do formulário
}
 // Se a validação passou, o formulário será enviado
 alert('Código encaminhado.');
 return true;
}
