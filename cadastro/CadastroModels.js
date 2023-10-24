

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

class UserModel {
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
  
    // Adicione métodos para interagir com o banco de dados, como salvar, atualizar, buscar, etc.
  }
  
  module.exports = UserModel;
  

// Endpoint para receber os dados do novo usuário
app.post('/api/registrar', (req, res) => {
  // Receba os dados do novo usuário do corpo da solicitação
  const { username, email, password } = req.body;

  //salvar no banco de dados
  const newUser = {
    username,
    email,
    password,
  };
  

  // Envie uma resposta de sucesso (você pode personalizar a resposta conforme necessário)
  res.status(200).json({ mensagem: 'Usuário registrado com sucesso' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});