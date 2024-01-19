# back-end-tf-web

Trabalho que visa desenvolver o back-end do nosso projeto AdivinheSô.

## Integrantes

- [Daví Lucas Antunes Neves](https://github.com/Davilucasanteves)
- [Renato Neres Costa](https://github.com/RenatoNC2)
- [Ronan Mendes Nogueira Couto](https://github.com/Carl-Johnson-LS)
- [Samuel da Silva Caires](https://github.com/SamuelCaires15)
- [Thallys Henriques Vilela](https://github.com/liscadoido)
- [Walisson Fernandes Dias](https://github.com/Murynga)


## Ferramentas utilizadas

Para realizarmos o desenvolvimento do banco de dados e disponibilizá-lo para a utilização de sua API, usamos o site "Neon.tech". 

## Documentação

**Links**

[Link da imagem do Modelo-Conceitual](https://github.com/Davilucasanteves/back-end-tf-web/blob/main/src/db/Modelo-Conceitual.png) <br/>
[Link da imagem do Modelo-Lógico](https://github.com/Davilucasanteves/back-end-tf-web/blob/main/src/db/Modelo-L%C3%B3gico.jpeg)<br/>
[Link do arquivo DDL(Modelo-Físico)](https://github.com/Davilucasanteves/back-end-tf-web/blob/main/src/db/DDL.sql)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
<br/>

### Funções de cada entidade

### - Funções de Usuário:

**URL API: https://back-end-tf-web.vercel.app**

- **Cadastrar novo usuário**:

[POST] /usuario

Descrição: Insere um novo usuário no banco de dados.

Body:
{
  "nome": "Fulano",
  "senha": "111",
  "email": "f@email.com"
}

<br/>


- **Listar todos os usuários e as suas respectivas informações**:

[GET] /usuarios

Descrição: Lista todos os usuários e suas respectivas informações.

Observações: É necessário token de acesso via header (x-access-token)

Body: nesse caso não há body


<br/>

- **Listar as informações de apenas um usuário**:

[GET] /usuario/:id

Descrição: Lista as informações do usuário requisitado.

Observações: É necessário token de acesso via header (x-access-token)

Body: nesse caso não há body


<br/>

- **Alterar as informações de um usuário identificado**:

[PUT] /usuario

Descrição: Modifica informações de um usuário específico.

Observações: É necessário token de acesso via header (x-access-token)

Body:
{
  "id": 1,
  "nome": "Fulano",
  "senha": "111",
  "email": "f@email.com"
}

<br/>


- **Excluir as informações de um usuário identificado**:

[DELETE] /usuario/:id

Descrição: Exclui as informações de um certo usuário.

Observações: É necessário token de acesso via header (x-access-token)

Body: não há body nesse caso.

<br/>

- **Autenticar o usuário**: 

[POST] /usuario/login

Descrição: Verifica se realmente é o usuário que está usando tal aplicação.

Observações: É necessário que o usuário esteja cadastrado.

Body: 
{
  "senha": "111",
  "email": "f@email.com"
}

<br/>

---

<br/>

### - Funções de Admin:

**URL API: https://back-end-tf-web.vercel.app**

- **Cadastrar novo admin**:

[POST] /admin

Descrição: Insere um novo admin no banco de dados.

Body:
{
  "nome": "Davi",
  "senha": "888",
  "email": "d@email.com"
}

<br/>


- **Listar todos os admins e as suas respectivas informações**:

[GET] /admins

Descrição: Lista todos os admins e suas respectivas informações.

Observações: É necessário token de acesso via header (x-access-token)

Body: nesse caso não há body

<br/>


- **Listar as informações de apenas um admin**:

[GET] /admin/:id

Descrição: Lista as informações de um certo admin.

Observações: É necessário token de acesso via header (x-access-token)

Body: nesse caso não há body

<br/>


- **Alterar as informações de um admin identificado**:

[PUT] /admin

Descrição:  Modifica informações de um admin específico.

Observações: É necessário token de acesso via header (x-access-token)

Body:
{
  "id": 1,
  "nome": "Davi",
  "senha": "888",
  "email": "d@email.com"
}

<br/>

- **Excluir as informações de um admin identificado**:

[DELETE] /admin/:id

Descrição:  Exclui as informações de um certo admin.  

Observações: É necessário token de acesso via header (x-access-token)

Body: não há body nesse caso.


<br/>

- **Autenticar o admin**: 

[POST] /admin/login

Descrição:  Verifica se realmente é o admin que está usando tal aplicação.

Observações: É necessário que o admin esteja cadastrado.

Body: 
{
  "senha": "888",
  "email": "d@email.com"
}

<br/>

---

<br/>

### - Funções de Partida:

**URL API: https://back-end-tf-web.vercel.app**

- **Cadastrar uma nova partida**:

[POST] /partida

Descrição: Cadastra uma nova partida.

Body:
{
  "quantidadeDeRodadas": 6,
  "vencedor": "Beltrano",
  "usuario_id": 3
}

<br/>

- **Requisitar informações de todas as partidas**:

[GET] /partidas

Descrição: Requisita dados de todas as partidas.

Observações: É necessário token de acesso via header (x-access-token)

Body: não há body nesse caso.

<br/>

- **Requisitar informações de uma partida**:

[GET] /partida/:id

Descrição: Requisita dados de uma única partida.

Observações: É necessário token de acesso via header (x-access-token)

Body: não há body nesse caso.

<br/>

- **Deletar uma partida**:

[DELETE] /partida/:id

Descrição: Deleta uma partida.

Observações: É necessário token de acesso via header (x-access-token)

Body: não há body nesse caso.

<br/>

---
