document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginformid');

  loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const username = document.getElementById('loginusuarioid').value;
      const password = document.getElementById('loginsenhaid').value;

      // Validar os dados do formulário antes de enviar para o servidor
      if (!username || !password) {
          alert('Por favor, preencha todos os campos.');
          return;
      }

      // Criar um objeto com os dados do usuário
      const usuarioObj = {
          username: username,
          password: password
      };

      // Enviar os dados para o servidor para validação
      fetch('/api/validar-login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuarioObj)
      })
      .then(response => {
          if (response.ok) {
              // Sucesso ao fazer login, redirecionar para a página principal
              window.location.href = 'login.html';
          } else {
              // Exibir mensagem de erro caso a autenticação falhe
              alert('Erro ao fazer login. Verifique suas credenciais.');
          }
      })
      .catch(error => {
          console.error('Erro ao fazer login:', error);
      });
  });
});