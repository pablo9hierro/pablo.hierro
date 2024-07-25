const { validarCadastro, salvarUsuario } = require('./CadastroController');




function registrarUsuario() {
  const username = document.getElementById('usuarioid').value;
  const email = document.getElementById('emailid').value;
  const password = document.getElementById('senhaid').value;

  // Chamar a função de registro no backend
  fetch('/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
  })
  .then(response => response.json())
  .then(data => {
      // Lidar com a resposta do servidor
      if (data.success) {
          // Redirecionar para a página de dashboard ou exibir uma mensagem de sucesso
          window.location.href = '/dex';
      } else {
          // Exibir mensagem de erro (você pode adicionar um elemento HTML para exibir mensagens)
          console.error(data.message);
      }
  })
  .catch(error => {
      console.error('Erro ao fazer a solicitação:', error);
  });

  // Impede o formulário de ser enviado normalmente
  return false;
}
