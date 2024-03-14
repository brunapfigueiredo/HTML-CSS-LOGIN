function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var cpf = document.getElementById('cpf').value;

    if (nome.trim() === '' || nome.length < 8) {
        alert('Por favor, insira nome e sobrenome.');
        return false;
    }

    if (email.trim() === '' || !email.includes('@') || !email.includes('.')) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    if (senha.trim() === '' || senha.length < 8) {
        alert('Senha deve ter pelo menos 8 caracteres.');
        return false;
    }

    if (!validarCPF(cpf)) {
        alert('Por favor, insira um CPF válido.');
        return false;
    }

    return true;
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^0-9]+/g, '');

    if (cpf == '') return false;

    if (
        cpf.length != 11 ||
        cpf == '00000000000' ||
        cpf == '11111111111' ||
        cpf == '22222222222' ||
        cpf == '33333333333' ||
        cpf == '44444444444' ||
        cpf == '55555555555' ||
        cpf == '66666666666' ||
        cpf == '77777777777' ||
        cpf == '88888888888' ||
        cpf == '99999999999'
    )
        return false;

    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) return false;

    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) return false;

    return true;
}
