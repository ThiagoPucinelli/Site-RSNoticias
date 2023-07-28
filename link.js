const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

// Configurações do Express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurações do MongoDB
const MONGODB_URI = 'mongodb://localhost:27017/projeto'; // Substitua 'nome_do_banco' pelo nome do seu banco de dados
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Definição do Schema do Usuário
const userSchema = new mongoose.Schema({
 nome: String,
  email: { type: String, unique: true },
  senha: String
});

const User = mongoose.model('User', userSchema);

// Rota para cadastrar um novo usuário
app.post('/Entrar', async (req, res) => {
  try {
    const {nome, email, senha } = req.body;

    // Verificar se o e-mail já está cadastrado
    const existingUser = await User.findOne({ email});
    if (existingUser) {
      return res.status(409).json({ message: 'E-mail já cadastrado!' });
    }

    // Criptografar a senha antes de salvar no banco de dados
    const hashedsenha = await bcrypt.hash(senha, 10);

    // Salvar o novo usuário no banco de dados
    const newUser = new User({nome, email, senha: hashedsenha });
    await newUser.save();

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro no cadastro:', error);
    return res.status(500).json({ message: 'Ocorreu um erro no servidor.' });
  }
});

// Iniciar o servidor
const PORT = 3000; // Escolha a porta que desejar
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

