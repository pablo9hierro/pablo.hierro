







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
  
  // Exporte a classe para que você possa usá-la em outros arquivos
  module.exports = ImovelModel;
  