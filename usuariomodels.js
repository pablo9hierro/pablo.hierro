// app.js
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

// Configurar Mongoose
mongoose.connect('mongodb://localhost:27017/pablo', { useNewUrlParser: true, useUnifiedTopology: true });

// Configurar sessões
app.use(session({ secret: 'segredo', resave: false, saveUninitialized: false }));

// Configurar Passport
app.use(passport.initialize());
app.use(passport.session());

// Definir modelo de usuário
const User = require('./models/user');

// Configurar estratégia local do Passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ... Restante da configuração do Express

// models/user.js
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  // Outros campos do usuário
  username: String,
  password: String,
});

// Adicionar métodos de autenticação ao esquema
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);


// routes/auth.js
const express = require('express');
const passport = require('passport');
const User = require('../models/user');

// Rota para registro
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  User.register(new User({ username }), password, (err, user) => {
    if (err) {
      console.error(err);
      return res.redirect('/register'); // Redirecionar para a página de registro em caso de erro
    }
    passport.authenticate('local')(req, res, () => {
      res.redirect('/dashboard'); // Redirecionar para a página de dashboard após o registro
    });
  });
});

// Rota para login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true,
}));

// Rota para logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;


// routes/dashboard.js
const express = require('express');
const router = express.Router();

// Middleware para verificar autenticação
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

// Rota protegida
router.get('/dashboard', isAuthenticated, (req, res) => {
  res.render('dashboard', { user: req.user });
});

module.exports = router;
