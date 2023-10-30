const UsuarioModel = require('./UsuarioModel');

class LoginController {
    fazerLogin(username, password) {
        // Para este exemplo, simularemos um modelo de usuário
        const user = new UsuarioModel(username, 'example@email.com', password);

        // Verifica se o nome de usuário e senha correspondem ao usuário no sistema
        if (user.username === username && user.password === password) {
            // Se as credenciais estiverem corretas, autenticamos o usuário
            window.location.href = 'dexHTML.html'; // Redirecionamento para a próxima página
        } else {
            alert('Credenciais inválidas. Tente novamente.'); // Exibir uma mensagem de erro se as credenciais estiverem incorretas
        }
    }
}

module.exports = LoginController;
