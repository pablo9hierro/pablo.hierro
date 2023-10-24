
// Importe os módulos e configure a rota
const express = require('express');
const router = express.Router();

const ImovelModel = require('../models/imovelModel'); // Importa o modelo de imóvel

// Controlador para manipular os dados do imóvel
class ImovelController {
  constructor() {
    this.imoveis = []; // Você pode usar um array para armazenar os imóveis ou integrar com o banco de dados
  }

  // Método para adicionar um imóvel
  adicionarImovel(estado, cidade, bairro, quintal, terraco, andares, tipoImovel) {
    const novoImovel = new ImovelModel(estado, cidade, bairro, quintal, terraco, andares, tipoImovel);
    this.imoveis.push(novoImovel); // Adiciona o imóvel ao array (ou ao banco de dados)
  }

  // Outros métodos para manipular os dados do imóvel podem ser adicionados aqui
}

// Exporta uma instância do controlador para que possa ser utilizada em outros arquivos
module.exports = new ImovelController();
