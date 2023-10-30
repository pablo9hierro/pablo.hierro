const mysql = require('mysql2'); // Importe a biblioteca MySQL2

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'seu-host',
  user: 'seu-usuario',
  password: 'sua-senha',
  database: 'seu-banco-de-dados',
});

// Conecte-se ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Crie as tabelas aqui:


const TabelaUsuario = `
    CREATE TABLE IF NOT EXISTS Usuario (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    )
  `;

  connection.query(TabelaUsuario, (err, results) => {
    if (err) {
      console.error('Erro ao criar a tabela Usuario:', err);
    } else {
      console.log('Tabela Usuario criada com sucesso.');
    }


const UsuarioDados = `
  CREATE TABLE IF NOT EXISTS Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  )
`;

connection.query(UsuarioDados, (err) => {
  if (err) {
    console.error('Erro ao criar a tabela Usuario:', err);
  } else {
    console.log('Tabela Usuario criada com sucesso.');
  }
});




const ImovelDados = `
  CREATE TABLE IF NOT EXISTS Imovel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estado VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    quintal BOOLEAN,
    terraco BOOLEAN,
    andares INT,
    tipoImovel VARCHAR(255) NOT NULL
  )
`;

connection.query(ImovelDados, (err) => {
  if (err) {
    console.error('Erro ao criar a tabela Imovel:', err);
  } else {
    console.log('Tabela Imovel criada com sucesso.');
  }
});

// Feche a conexão quando não precisar mais
connection.end();


