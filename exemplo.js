const form = document.getElementById('contatoForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    //envia os dados para um servidor usando uma requisição AJAX.
 
    fetch('https://seu-servidor/enviar-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, mensagem })
    })
    .then(response => {
        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
        } else {
            alert('Ocorreu um erro ao enviar a mensagem.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});