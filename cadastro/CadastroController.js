

//importar a classe models
const UsuarioModels = require('./CadastroModels');
//importar minha classe views
const UsuarioViews = require('./CadastroViews');

//função de validar dados capturados do views
function validarCadastro(username, email, password) {
  return username && email && password;
}


//função para salvar dados na tabela TabelaUsuario
function salvarNoBancoDeDados(username, email, password) {
  if (validarCadastro(username, email, password)) {
    const query = `INSERT INTO TabelaUsuario (username, email, password) VALUES ('${username}', '${email}', '${password}')`;

    connection.query(query, (err, result) => {
      if (err) {
        console.error('Erro ao inserir dados no banco de dados:', err);
      } else {
        console.log('Dados inseridos com sucesso');
      }
    });
  } else {
    console.log('Cadastro inválido. Preencha todos os campos.');
  }
}

module.exports = { validarCadastro, salvarNoBancoDeDados };




