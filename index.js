function mostraSenha() {
    var inputPass = document.getElementById('senha');
    var iconeOlho = document.getElementById('olho');

    if (inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        iconeOlho.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    } else {
        inputPass.setAttribute('type', 'password')
        iconeOlho.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}

const form = document.getElementById("form");
form.addEventListener("submit", logSubmit);

function logSubmit(event) {
    event.preventDefault();

        const formEmail = document.getElementById("email");
        const formSenha = document.getElementById("senha");
        
    const inforeq = {
        method: 'POST',
        body: JSON.stringify({
            email: formEmail.value,
            senha: formSenha.value,
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

function mostraUsuario(token) {
    const inforeq = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'x-access-token': token,
        },
    }
    fetch("https://back-end-tf-web.vercel.app/usuarios/", inforeq)
        .then(function (res) {
            return res.json();
        })
        .then((data) => {
            if (data.message == "Entidade não Autenticada") {
                alert('Senha ou Email incorreto');
            } else {
                window.location.href = 'https://trabalho-final-web-davi.vercel.app/webCore/game.html'
            }
        }).catch(
            (error) => console.log(error)
        );

}