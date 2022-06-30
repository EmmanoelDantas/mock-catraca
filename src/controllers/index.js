
const uuid = require('uuid-js');

const loginController = (req, res) => {
    const session = uuid.create(1);

    res.status(200).json({session});
}

const logsGenerator = (req, res) => {
    const idAluno = uuid.create(1);
    const body = {
        idAluno: `${idAluno}`,
        nome: 'Joao Felipe',
        data: '30/06/2022',
        hora_entrada: '7:30 hrs',
        event: 'Entrou'
    }

    res.status(200).json({body});
}

module.exports = {loginController, logsGenerator};