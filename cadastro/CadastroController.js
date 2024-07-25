
//função de validar dados capturados do views
function validarCadastro(username, email, password) {
  return username && email && password;
}


//função para salvar dados na tabela TabelaUsuario
function salvarUsuario(username, email, password) {
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

// routes/auth.js
router.post('/registrar', (req, res) => {
  const { username, email, password } = req.body;
  User.register(new User({ username, email }), password, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Erro no registro' });
    }
    passport.authenticate('local')(req, res, () => {
      res.status(200).json({ success: true, message: 'Usuário registrado com sucesso' });
    });
  });
});



module.exports = { validarCadastro, salvarNoBancoDeDados };




