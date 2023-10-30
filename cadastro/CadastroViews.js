class UsuarioViews {
  constructor(controller) {
    this.controller = controller;
    this.usernameInput = document.getElementById('usuarioid');
    this.emailInput = document.getElementById('emailid');
    this.passwordInput = document.getElementById('senhaid');
    this.registrarButton = document.getElementById('registrar-btn');

    // Adicione outros elementos aqui, se necessário
    this.registrarButton.addEventListener('click', this.handleCadastrarClick.bind(this));
  }

  handleCadastrarClick() {
    const username = this.usernameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    // Chame o método do Controller para validar o cadastro
    const cadastroValido = this.controller.validarCadastro(username, email, password);

    if (cadastroValido) {
      window.location.href = 'login.html';  // Substitua 'login.html' pelo nome da sua próxima página
    } else {
      alert('Cadastro inválido. Preencha todos os campos.');
    }
  }
}

module.exports = UsuarioViews;
