const express = require('express');
const routes = express.Router();


const FuncionarioController = require('./controllers/FuncionarioController');

routes.get('/funcionarios', FuncionarioController.getAll);
routes.post('/funcionario', FuncionarioController.create);
routes.put('/funcionario/:id', FuncionarioController.update);
routes.delete('/funcionario/:id', FuncionarioController.delete);
module.exports= routes;