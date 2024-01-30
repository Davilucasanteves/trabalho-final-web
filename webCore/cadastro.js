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