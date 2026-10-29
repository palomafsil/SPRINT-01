import express from 'express';
const app = express();
const porta = 3000;

// Central de Informações da Escola
app.get('/', (req, res) => {
    res.send('Bem-vindo à Central de Informações da Escola!');
});

// informando que o servidor está online
app.get('/status', (req, res) => {
    res.json({ status: "online", mensagem: "Servidor rodando com sucesso." });
});

//Deve devolver JSON contendo nome, cidade e tipo da instituição
app.get('/escola', (req, res) => {
    res.json({
        nome: "Escola Técnica de Tecnologia",
        cidade: "São Paulo",
        tipo: "Ensino Técnico"
    });
});

//Deve devolver um array JSON com pelo menos três cursos. Cada curso deve possuir id e nome
app.get('/cursos', (req, res) => {
    res.json([
        { id: 1, nome: "Desenvolvimento de Sistemas" },
        { id: 2, nome: "Redes de Computadores" },
        { id: 3, nome: "Administração" }
    ]);
});

//Deve devolver JSON com nome e disciplina.
app.get('/professor', (req, res) => {
    res.json({
        nome: "Carlos Silva",
        disciplina: "Programação Back-End"
    });
});

//Deve devolver texto explicando quais rotas o sistema disponibiliza e para que servem.
app.get('/ajuda', (req, res) => {
    const orientacoes = `
    Rotas disponíveis no sistema:
    - GET /         : Página inicial com mensagem de boas-vindas.
    - GET /status   : Verifica se o servidor está online.
    - GET /escola   : Retorna dados da instituição (Nome, Cidade, Tipo).
    - GET /cursos   : Lista os cursos técnicos disponíveis.
    - GET /professor: Mostra o nome do professor e sua respectiva disciplina.
    - GET /ajuda     : Apresenta esta lista de orientações.
    `;
    res.send(orientacoes);
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});