// parte funcional do código de login irá aqui
fetch('https://back-end-tf-web.vercel.app/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'aplication/json'
    },
    body: JSON.stringify({
        senha: '8',
        email: 'david@gmailcom'
    })
}) .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
            return res.json()
        } else{
            console.log("Not Successful")
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))



/*

const myForm = document.getElementById("myForm");
myForm.addEventListener('submit', function(e){
    e.preventDefault();

    const formData = new FormData(this);
    const searchParams = new URLSearchParams();

    for (const pair of FormData){
        searchParams.append(pair[0]. pair[1])
    }

    fetch('/api/src/routes/login.js', {
        method: 'post',
        body: searchParams
    }).then(function (response){
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error) {
        console.error(error);
    })
})

*/