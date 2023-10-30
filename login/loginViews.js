class LoginView {
    constructor(controller) {
        this.controller = controller;

        this.usernameInput = document.getElementById('loginusuarioid');
        this.passwordInput = document.getElementById('loginsenhaid');
        this.loginForm = document.getElementById('loginformid');

        this.loginForm.addEventListener('submit', this.handleLogin.bind(this));
    }

    handleLogin(event) {
        event.preventDefault();
        const username = this.usernameInput.value;
        const password = this.passwordInput.value;

        // Chame o método do Controller para processar os dados (método fazerLogin)
        this.controller.fazerLogin(username, password);
    }
}

module.exports = LoginView;
