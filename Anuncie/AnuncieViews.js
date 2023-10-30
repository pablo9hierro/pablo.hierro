class ImovelView {
  constructor(controller) {
    this.controller = controller;

    // Obtenha as referências aos elementos do DOM
    this.estadoInput = document.getElementById('estado');
    this.cidadeInput = document.getElementById('cidade');
    this.bairroInput = document.getElementById('bairro');
    this.quintalCheckbox = document.getElementById('quintal');
    this.terracoCheckbox = document.getElementById('terraco');
    this.andaresSelect = document.getElementById('andares');
    this.tipoImovelSelect = document.getElementById('tipoImovel');
    const enviarButton = document.getElementById('enviar');

    // Adicione um ouvinte de evento para o botão "Enviar"
    enviarButton.addEventListener('click', this.handleEnviarClick.bind(this));
  }

  handleEnviarClick() {
    const estado = this.estadoInput.value;
    const cidade = this.cidadeInput.value;
    const bairro = this.bairroInput.value;
    const quintal = this.quintalCheckbox.checked;
    const terraco = this.terracoCheckbox.checked;
    const andares = this.andaresSelect.value;
    const tipoImovel = this.tipoImovelSelect.value;

    // Chame o método do Controller para processar os dados (método salvarImovel)
    this.controller.salvarImovel(estado, cidade, bairro, quintal, terraco, andares, tipoImovel);
  }
}

module.exports = ImovelView;
