const express = require('express')
const app = express()

app.get('/hello', function (req, res) {
  res.send('Hello World')
})

/*
Lista de Endpoints CRUD
Create, Read (Single & All), Update, Delete
Criar, Ler (Individual & Tudo), Atualizar, Remover

Associamos os endpoints aos verbos de HTTP
Quando seguimos as convenções, utilizandos os verbos corretos,
podemos dizer que a nossa aplicação segue os padrões REST
Quando uma aplicação segue os padrões REST, ela é chamada de RESTful
[POST] -> Create
[GET] -> Read
[PUT/PATCH] -> Update
[DELETE] -> Delete
*/

// Escolha um tema: Filmes, Séries, Jogos, etc

const lista = ["Senhor dos Anéis", "Harry Potter"];

app.get("/filmes", function (req, res) {
  res.send(lista)
})

app.listen(3000)