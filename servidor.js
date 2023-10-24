

// definindo as variáveis para o backend com MySQL
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); // Correção aqui

const app = express();
const port = 3000;

app.use(bodyParser.json());

// configuração de conexão com o banco de dados
const connection = mysql.createConnection({ // Correção aqui
  host: 'localhost',
  user: 'pablo',
  password: 'sepodemadera',
  database: 'Chibata'
});


// ENDPOINT CADASTRADOR DE DADOS

// capturar dados do frontend e processá-los
app.post('/api/registrar', (req, res) => {
  const { username, passwort, email } = req.body;

  // criar o CRUD agora
  const sql = 'INSERT INTO registros (username, passwort, email) VALUES (?, ?, ?)';
  const values = [username, passwort, email];

  // criar uma consulta aqui pra verificar se está dando certo
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ mensagem: 'fudeu' }); // Correção aqui
    } else {
      res.status(201).json({ mensagem: 'Dados inseridos com sucesso' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// ENDPOINT VALIDADOR LOGIN 

// Adicione esta rota no servidor.js para tratar a solicitação de login 
// Endpoint para validar login
app.get('/api/validar-login', (req, res) => {
  const { username, password } = req.query;

  // Consulta ao banco de dados para verificar as credenciais
  const sql = 'SELECT * FROM registros WHERE username = ? AND passwort = ?';
  const values = [username, password];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ mensagem: 'Erro interno no servidor' });
    } else {
      if (result.length > 0) {
        // Credenciais válidas
        res.status(200).json({ mensagem: 'Login válido' });
        window.location.href="dex.html";
      } else {
        // Credenciais inválidas
        res.status(401).json({ mensagem: 'Login inválido' });
      }
    }
  });
});




