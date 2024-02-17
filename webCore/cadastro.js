function mostraSenha() {
    var inputPass = document.getElementById('senha');
    var inputConfirmaSenha = document.getElementById('confirmaSenha');
    var iconeOlho = document.getElementById('olhoSenha');
    var iconeOlho2 = document.getElementById('olhoConfirmaSenha');

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text');
        iconeOlho.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        inputPass.setAttribute('type', 'password');
        iconeOlho.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }

    if (inputConfirmaSenha.type === 'password') {
        inputConfirmaSenha.setAttribute('type', 'text');
        iconeOlho2.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        inputConfirmaSenha.setAttribute('type', 'password');
        iconeOlho2.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}


const form = document.getElementById("form");
form.addEventListener("submit", logSubmit);

function logSubmit(event) {
    event.preventDefault();

    const formEmail = document.getElementById("email");
    const formSenha = document.getElementById("senha");
    const formNome = document.getElementById("nome");
    const formConfirmaSenha = document.getElementById("confirmaSenha");

    const inforeq = {
        method: 'POST',
        body: JSON.stringify({
            nome: formNome.value,
            email: formEmail.value,
            senha: formSenha.value,
            confirmaSenha: formConfirmaSenha.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    
    fetch("https://back-end-tf-web.vercel.app/usuario/login", inforeq)
        .then(function (res) {
            return res.json(); // converte a resposta para JSON
        })
        .then((data) => {
            mostraUsuario(data.token);
        }).catch((erro) => {
            console.log('Erro na requisição:', erro);
        });


}
