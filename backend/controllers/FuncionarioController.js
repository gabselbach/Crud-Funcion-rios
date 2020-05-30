const Funcionario = require('../models/Funcionario');

module.exports = {
    create: function (req, res) {
        let funcionario = new Funcionario(req.body);

        funcionario.save()
            .then(funcionario => res.status(200).json(funcionario))
            .catch(err => {
                res.status(400).send("Erro ao cadastrar funcionario", err)
            });
    },

    getAll: function (req, res) {
        Funcionario.find(function (err, funcionarios) {
            if (err) {
                res.status(400).send("Erro ao listar os funcionários", err);
            }
            else {
                res.status(200).json(funcionarios);
            }
        });
    },

    getById: function (req, res) {
        Funcionario.findById(req.params.id, function (err, funcionario) {
            if (err) {
                res.status(400).send("Erro ao procurar funcionario" + err);
            }
            else {
                res.status(200).json(funcionario);
            }
        })
    },

    delete: function (req, res) {
        Funcionario.findByIdAndRemove(req.params.id, function (err, funcionario) {
            if (err) {
                res.status(400).send("Erro ao deletar funcionario", err);
            }
            else {
                res.status(200).json(req.params.id);
            }
        });
    },

    update: function (req, res) {
        Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, funcionario) {
            if (err) {
                res.status(400).send("There's was an error while updating the funcionario", err)
            } else {
                res.status(200).json(funcionario);
            }
        });
    },

};