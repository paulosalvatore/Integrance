const express = require("express");
const app = express();

app.use(express.json());

const filmes = [
    {
        id: 1,
        nome: "Senhor dos Anéis",
    },
    {
        id: 2,
        nome: "Harry Potter",
    },
];
// índices      0                   1

app.get("/", function (req, res) {
    res.send("Hello World");
});

// [GET] -> Leitura de informações

// REST (padrão de requisições) ou RESTful (estar no padrão REST)

// CRUD -> Create, Read (All & By Id), Update and Delete
// CRUD -> Criar, Ler (Tudo & Por Id), Atualizar e Remover

// [GET] -> /endpoint - Read All
// [GET] -> /filmes - Read All
app.get("/filmes", (req, res) => {
    res.send(filmes.filter(Boolean));
});

// [GET] -> /filmes/{id} - Read By Id
app.get("/filmes/:id", (req, res) => {
    const id = +req.params.id;

    const filme = filmes.find(filme => filme && filme.id === id);

    if (!filme) {
        res.status(404).send({ mensagem: "Filme não encontrado" });

        return;
    }

    res.send(filme);
});

// [POST] -> /filmes - Create
// Tem corpo na requisição
app.post("/filmes", function (req, res) {
    const filme = req.body;

    if (!filme || !filme.nome || !filme.imagemUrl) {
        res.status(400).send({
            mensagem:
                "Certifique-se de que o corpo da requisição possui 'nome' e 'imagemUrl'.",
        });

        return;
    }

    filmes.push(filme);

    res.status(201).send({ mensagem: "Filme adicionado com sucesso!" });
});

// [PUT] -> /filmes - Update By Id
// Tem corpo na requisição
app.put("/filmes/:id", function (req, res) {
    const id = +req.params.id;

    const filmeIndex = filmes.findIndex(filme => filme.id === id);

    if (filmeIndex < 0) {
        res.status(404).send({ mensagem: "Filme não encontrado" });

        return;
    }

    const filme = req.body;

    if (!filme || !filme.nome || !filme.imagemUrl) {
        res.status(400).send({
            mensagem:
                "Certifique-se de que o corpo da requisição possui 'nome' e 'imagemUrl'.",
        });

        return;
    }

    filme.id = filmes[filmeIndex].id;

    filmes[filmeIndex] = filme;

    res.status(200).send({ mensagem: "Filme atualizado com sucesso!" });
});

// [DELETE] -> /filmes - Delete By Id
app.delete("/filmes/:id", function (req, res) {
    const id = +req.params.id;

    const filmeIndex = filmes.findIndex(filme => filme.id === id);

    if (filmeIndex < 0) {
        res.status(404).send({ mensagem: "Filme não encontrado" });

        return;
    }

    delete filmes[filmeIndex];

    res.send(204);
});

app.listen(3000);
