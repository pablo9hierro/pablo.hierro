

 



// CadastroViews.js

//cria a superclasse que poderá ser instanciada plenamente
class UserView {
  constructor() {
    // Defina propriedades para elementos do DOM que você deseja interagir
    this.usernameInput = document.getElementById('usuarioid');
    this.emailInput = document.getElementById('emailid');
    this.passwordInput = document.getElementById('senhaid');
    this.registrationForm = document.getElementById('registroformid');
  }

}



//exporta a nossa superclasse kkk
module.exports = UserView;


