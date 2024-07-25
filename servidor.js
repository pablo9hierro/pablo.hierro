
const ImovelView = require('./AnuncieViews');
//importar a classe ImovelView
const imovelView = new ImovelView();
const ImovelModel = require('./AnuncieModels');
const UsuarioModels = require('./usuariomodels');

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/pablo';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function openDb() {
  try {
    await client.connect();
    console.log('Conectado ao MongoDB');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
  }
}

async function closeDb() {
  try {
    await client.close();
    console.log('Conexão com o MongoDB fechada');
  } catch (err) {
    console.error('Erro ao fechar conexão com o MongoDB:', err);
  }
}







// consumo api de cep
function consultarCEP() {
  var cepInput = document.getElementById('cep');
  var cepValue = cepInput.value.replace(/\D/g, ''); // Remove não dígitos

  if (cepValue.length === 8) {
      var apiUrl = 'https://api.postmon.com.br/v1/cep/' + cepValue;

      // Fazendo a requisição
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              // Processa os dados da API
              console.log(data);

              // Chama a função para renderizar os dados no HTML
              renderizarDadosNoHTML(data);

          })
          .catch(error => {
              console.error('Erro ao consultar a API de CEP:', error);
          });
  } else {
      console.log('CEP inválido');
  }
}

function renderizarDadosNoHTML(data) {
  // Preenche os campos no HTML com os dados da API
  document.getElementById('logradouro').value = data.logradouro || '';
  document.getElementById('bairro').value = data.bairro || '';
  document.getElementById('cidade').value = data.cidade || '';
}


async function validarCadastro(username, email, password) {
  try {
    // Consultar o banco de dados para verificar se os dados existem na coleção usuariodados
    const collection = client.db('pablo').collection('usuariomodels');
    const resultado = await collection.findOne({ username, email, password });

    if (resultado) {
      // Dados encontrados na coleção usuariodados
      console.log('Usuário encontrado no banco de dados');
      return true;
    } else {
      // Dados não encontrados na coleção usuariodados
      console.log('Usuário não encontrado no banco de dados');
      return false;
    }
  } catch (err) {
    console.error('Erro ao validar dados no banco de dados:', err);
    return false;
  }
}
// cria novo usuario a partir do 
const dadosUsuario = {
  username: 'pablo',
  email: 'pablo@gmail.com',
  password: 'pablo'
};

const collection = client.db('pablo').collection('usuariodados');
await collection.insertOne(dadosUsuario);
