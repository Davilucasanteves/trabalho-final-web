import pkg from "pg";
const { Pool } = pkg;

//app use(roteadorLogin) não deveria estra aqui

async function connect() {
  const pool = new Pool({
    connectionString: process.env.URL_BD,
  });
  return pool.connect();
}

async function selectUsuarios() {         // Lista tudo de todos os usuários
  const client = await connect();
  const res = await client.query("SELECT * FROM usuario");
  return res.rows;
}

//bd.js
async function selectUsuario(id) {          //Lista informações de somente um usuário
  const client = await connect();
  const query = "SELECT * FROM usuario WHERE id = $1";
  const usuario = [id];
  const res = await client.query(query, usuario);
  return res.rows;
}

//bd.js
async function insertUsuario(data) {         //cadastrar
  const client = await connect();
  const query = "INSERT INTO usuario (nome,senha,email) VALUES ($1,$2,$3) ";
  const usuario = [data.nome, data.senha, data.email];
  await client.query(query, usuario);
}

//bd.js
async function deleteUsuario(id) {      // exclui infos de um usuário identificado
  const client = await connect();
  const query = "DELETE FROM usuario WHERE id = $1";
  await client.query(query, [id]);
}

//bd.js
async function updateUsuario(data) {            // alterar informaçõies de um usuário identificado
  const client = await connect();
  const query =
    "UPDATE usuario SET nome = $1, email = $2, senha = $3 WHERE id = $4";
  const usuario = [data.nome, data.email, data.senha, data.id];
  await client.query(query, usuario);
}

// src/db/index.js
async function autenticarUsuario(email, senha) {
  const client = await connect();
  const query = "SELECT * FROM usuario WHERE email = $1 AND senha = $2";
  const usuario = [email, senha];
  const res = await client.query(query, usuario);
  return res.rows[0];
}


//Admin-->


async function selectAdmins() {         // Lista tudo de todos os admins
  const client = await connect();
  const res = await client.query("SELECT * FROM admin");
  return res.rows;
}

//bd.js
async function selectAdmin(id) {          //Lista informações de somente um admin
  const client = await connect();
  const query = "SELECT * FROM admin WHERE id = $1";
  const admin = [id];
  const res = await client.query(query, admin);
  return res.rows;
}

//bd.js
async function insertAdmin(data) {         //cadastrar
  const client = await connect();
  const query = "INSERT INTO admin (nome,senha,email) VALUES ($1,$2,$3) ";
  const admin = [data.nome, data.senha, data.email];
  await client.query(query, admin);
}

//bd.js
async function deleteAdmin(id) {      // exclui infos de um admin identificado
  const client = await connect();
  const query = "DELETE FROM admin WHERE id = $1";
  await client.query(query, [id]);
}

//bd.js
async function updateAdmin(data) {            // alterar informaçõies de um admin identificado
  const client = await connect();
  const query =
    "UPDATE admin SET nome = $1, email = $2, senha = $3 WHERE id = $4";
  const admin = [data.nome, data.email, data.senha, data.id];
  await client.query(query, admin);
}

// src/db/index.js
async function autenticarAdmin(email, senha) {
  const client = await connect();
  const query = "SELECT * FROM admin WHERE email = $1 AND senha = $2";
  const admin = [email, senha];
  const res = await client.query(query, admin);
  return res.rows[0];
}


//Partida-->


//bd.js
async function insertPartida(data) {         
  const client = await connect();
  const query = "INSERT INTO partida (vencedor, usuario_id, quantidadeDeRodadas) VALUES ($1,$2, $3) ";
  const partida = [data.vencedor, data.usuario_id, data.quantidadeDeRodadas];
  await client.query(query, partida);
}

async function selectPartidas() {         
  const client = await connect();
  const res = await client.query("SELECT * FROM partida");
  return res.rows;
}

//bd.js
async function selectPartida(id) {          
  const client = await connect();
  const query = "SELECT * FROM partida WHERE id = $1";
  const partida = [id];
  const res = await client.query(query, partida);
  return res.rows;
}

//bd.js
async function deletePartida(id) {      
  const client = await connect();
  const query = "DELETE FROM partida WHERE id = $1";
  await client.query(query, [id]);
}

export { selectUsuarios, selectUsuario, insertUsuario, deleteUsuario, updateUsuario, autenticarUsuario, selectAdmins, selectAdmin, insertAdmin, deleteAdmin, updateAdmin, autenticarAdmin, selectPartidas, selectPartida, insertPartida, deletePartida };
