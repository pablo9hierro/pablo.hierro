
// Importe os módulos e configure a rota
const express = require('express');
const router = express.Router();
const CadastroModels = require('./CadastroModels'); // Importe o modelo


// importando o objeto UserModel do arquivo CadastroModels.js
const UserModel = require('./CadastroModels');
//aqui do mermo jeito. sendo que com os elementos html
const UserView = require('./CadastroViews');


//declarar classe para construir (herança)
class UserController {
  constructor() {
    //chamar a classe mão (herança)
    this.model = new UserModel();
    //chamar a classe mão (herança)
    this.view = new UserView();
    
    // Adicione os ouvintes de eventos, como o envio do formulário
    this.view.registrationForm.addEventListener('submit', this.handleRegistration.bind(this));
  }

  // Adicione métodos para tratar ações do usuário, como registro de usuário
  handleRegistration(event) {
    event.preventDefault();
    
    const username = this.view.usernameInput.value;
    const email = this.view.emailInput.value;
    const password = this.view.passwordInput.value;

    //aqui tá firmando a nova classe (UserController) vinda de UserModel (instanciar - herança)
    const newUser = new UserModel(username, email, password);

    // Use o modelo para salvar os dados no banco de dados (ou enviar para o servidor)
  }
}

// CadastroController.js

const UserModel = require('./CadastroModels'); // Certifique-se de usar o caminho correto para o UserModel

class UserController {
  constructor(view) {
    this.view = view;
  }

  handleRegistration(event) {
    event.preventDefault();

    const username = this.view.usernameInput.value;
    const email = this.view.emailInput.value;
    const password = this.view.passwordInput.value;

    const newUser = new UserModel(username, email, password);

    // Agora, chame o método para enviar os dados para o servidor
    this.registerUser(newUser);
  }

  // Método para enviar os dados do novo usuário para o servidor
  registerUser(newUser) {
    // Usar fetch ou outra biblioteca para enviar os dados para o servidor
    fetch('/api/registrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser), // Enviar o novo usuário como JSON
    })
      .then((response) => {
        if (response.ok) {
          // O registro foi bem-sucedido
          return response.json();
        } else {
          // Lidar com erros de registro aqui
          console.error('Erro ao registrar usuário');
          return Promise.reject('Erro ao registrar usuário');
        }
      })
      .then((data) => {
        // Manipular os dados da resposta, se necessário
        console.log(data);
        // Redirecionar para a página de login ou fazer outra ação após o registro bem-sucedido
        window.location.href = 'login.html';
      })
      .catch((error) => {
        // Lidar com erros de rede ou erros na solicitação
        console.error('Erro de rede:', error);
      });
  }
}

module.exports = UserController;



