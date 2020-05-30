const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Funcionario = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    nascimento: {
        type: Date,
        required: true,
      },
    RG: {
      type: Number,
      required: true,
    },
    CPF: {
      type: Number,
      required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    CEP: {
        type: String,
        required: true,
    },

  }
);

module.exports = mongoose.model('Funcionario', Funcionario);