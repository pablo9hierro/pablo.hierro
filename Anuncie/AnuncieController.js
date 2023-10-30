//importar dependências
const mysql = require('mysql');
const ImovelView = require('./AnuncieViews');
//importar a classe ImovelView
const imovelView = new ImovelView();

const ImovelModel = require('./AnuncieModels');


// Crie a conexão com o MySQL
const connection = mysql.createConnection({
  host: 'seu-host',
  user: 'seu-usuario',
  password: 'sua-senha',
  database: 'seu-banco-de-dados',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conexão com o MySQL estabelecida com sucesso.');
  }
});


//função para persistir os dados do imovel no banco de dados

function salvarImovel(estado, cidade, bairro, quintal, terraco, andares, tipoImovel) {
  // Crie uma instância da classe ImovelModel com os dados
  const imovel = new ImovelModel(estado, cidade, bairro, quintal, terraco, andares, tipoImovel);

  // Use os métodos do modelo para obter os dados do imóvel
  const dadosImovel = {
    estado: imovel.estado,
    cidade: imovel.cidade,
    bairro: imovel.bairro,
    quintal: imovel.quintal,
    terraco: imovel.terraco,
    andares: imovel.andares,
    tipoImovel: imovel.tipoImovel,
  };

  // Execute a consulta SQL para inserir os dados na tabela ImovelDados
  const sql = 'INSERT INTO ImovelDados (estado, cidade, bairro, quintal, terraco, andares, tipoImovel) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [dadosImovel.estado, dadosImovel.cidade, dadosImovel.bairro, dadosImovel.quintal, dadosImovel.terraco, dadosImovel.andares, dadosImovel.tipoImovel];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      console.log('error');
    } else {
      console.log('Imóvel adicionado com sucesso!');
      // Você pode retornar um feedback de sucesso para a View
    }
  });
}

module.exports = {
  salvarImovel, // Exporte a função para que ela possa ser usada em outras partes do código
};









