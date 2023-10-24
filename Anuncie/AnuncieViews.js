class ImovelView {
    constructor(controller) {
      this.controller = controller;
  
      // Obtenha as referências aos elementos do DOM
      const estadoInput = document.getElementById('estado');
      const cidadeInput = document.getElementById('cidade');
      const bairroInput = document.getElementById('bairro');
      const quintalCheckbox = document.getElementById('quintal');
      const terracoCheckbox = document.getElementById('terraco');
      const andaresSelect = document.getElementById('andares');
      const tipoImovelSelect = document.getElementById('tipoImovel');
      const enviarButton = document.getElementById('enviar');
  
      // Adicione um ouvinte de evento para o botão "Enviar"
      enviarButton.addEventListener('click', this.handleEnviarClick.bind(this));
    }
  
    handleEnviarClick() {
      const estado = estadoInput.value;
      const cidade = cidadeInput.value;
      const bairro = bairroInput.value;
      const quintal = quintalCheckbox.checked;
      const terraco = terracoCheckbox.checked;
      const andares = andaresSelect.value;
      const tipoImovel = tipoImovelSelect.value;
  
      // Chame o método do Controller para processar os dados(método processImovelData)
      this.controller.processImovelData(estado, cidade, bairro, quintal, terraco, andares, tipoImovel);
    }
  }
  
  module.exports = ImovelView;
  