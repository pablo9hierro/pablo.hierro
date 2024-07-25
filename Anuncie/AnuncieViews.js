class ImovelView {
  constructor(controller) {
    this.controller = controller;

    // Obtenha as referências aos elementos do DOM
    this.cepInput = document.getElementById('cep');
    this.quintalCheckbox = document.getElementById('quintal');
    this.terracoCheckbox = document.getElementById('terraco');
    this.andaresSelect = document.getElementById('andares');
    this.tipoImovelSelect = document.getElementById('tipoImovel');
    const enviarButton = document.getElementById('enviar');

    // ouvinte de evento para o botão enviar
    enviarButton.addEventListener('click', this.handleEnviarClick.bind(this));
  }

  handleEnviarClick() {
    const cep = this.cepInput.value;
    const quintal = this.quintalCheckbox.checked;
    const terraco = this.terracoCheckbox.checked;
    const andares = this.andaresSelect.value;
    const tipoImovel = this.tipoImovelSelect.value;

    // método do controller para processar os dados (método salvarImovel)
    this.controller.salvarImovel(cep, quintal, terraco, andares, tipoImovel);
  }
}

module.exports = ImovelView;
