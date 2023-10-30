const UsuarioModel = require('./CadastroModels');

function validarCadastro(username, email, password) {
  if (username && email && password) {
    return true;
  } else {
    return false;
  }
}

module.exports = { validarCadastro };




