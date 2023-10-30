







class ImovelModel {
    constructor(estado, cidade, bairro, quintal, terraco, andares, tipoImovel) {
      this.estado = estado;
      this.cidade = cidade;
      this.bairro = bairro;
      this.quintal = quintal;
      this.terraco = terraco;
      this.andares = andares;
      this.tipoImovel = tipoImovel;
    }
  }

  
// Método para inserir dados na tabela Imovel
function adicionarImovel(Imovel) {
  const sql = 'INSERT INTO ImovelDados (estado, cidade, bairro, quintal, terraco, andares, tipoImovel) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [imovel.estado, imovel.cidade, imovel.bairro, imovel.quintal, imovel.terraco, imovel.andares, imovel.tipoImovel];

  // Use sua biblioteca MySQL (como 'mysql2') para executar a consulta SQL com os valores
  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Imóvel adicionado com sucesso!');
    }
  });
}
  connection.end(); // Fechar a conexão após a inserção
module.exports = { //exportar função
  adicionarImovel,
};

  
  // Exporte a classe para que você possa usá-la em outros arquivos
  module.exports = ImovelModel;
  