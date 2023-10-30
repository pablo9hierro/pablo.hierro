const { validarCadastro, salvarNoBancoDeDados } = require('./CadastroController');

class UsuarioViews {
  constructor(controller) {
    this.controller = controller;
    this.usernameInput = document.getElementById('usuarioid');
    this.emailInput = document.getElementById('emailid');
    this.passwordInput = document.getElementById('senhaid');
    this.registrarButton = document.getElementById('registrar-btn');

    // evento de click
    this.registrarButton.addEventListener('click', this.handleCadastrarClick.bind(this));
  }

  handleCadastrarClick() {
    const username = this.usernameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    // chamando a função de validação
    const cadastroValido = validarCadastro(username, email, password);

    if (cadastroValido) {
      // chama a função para salvar no banco de dados
      salvarNoBancoDeDados(username, email, password);
      window.location.href = 'login.html'; // cadastro bem-sucedido, vai para a página de login
    } else {
      alert('Cadastro inválido. Preencha todos os campos.');
    }
  }
}

module.exports = UsuarioViews;
