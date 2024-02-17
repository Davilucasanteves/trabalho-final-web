function mostraSenha(iconeOlho, inputSenha) {
    if (inputSenha.type === 'password') {
        inputSenha.setAttribute('type', 'text');
        iconeOlho.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        inputSenha.setAttribute('type', 'password');
        iconeOlho.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}


const form = document.getElementById("form");
form.addEventListener("submit", logSubmit);

function logSubmit(event) {
    event.preventDefault();

    const formEmail = document.getElementById("email").value;
    const formSenha = document.getElementById("senha").value;
    const formNome = document.getElementById("nome").value;
    const formConfirmaSenha = document.getElementById("confirmaSenha").value;

    if (formSenha !== formConfirmaSenha) {
        console.log('Senhas não coincidem');
        return;
    }

    const userData = {
        nome: formNome,
        email: formEmail,
        senha: formSenha,
    };

    const inforeq = {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    };

    fetch("https://back-end-tf-web.vercel.app/usuario/cadastro", inforeq)
        .then(function (res) {
            if (!res.ok) {
                throw new Error('Erro no cadastro'); // handle non-successful responses
            }
            return res.json();
        })
        .then((data) => {
            console.log('Usuário cadastrado com sucesso:', data);
            // Handle success as needed, e.g., redirect to a success page
        })
        .catch((error) => {
            console.error('Erro na requisição:', error);
            // Handle errors, e.g., display an error message to the user
        });
}
