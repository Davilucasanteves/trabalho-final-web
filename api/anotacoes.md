drop TABLE if exists partida;

CREATE TABLE partida (
	id serial PRIMARY KEY,
	vencedor varchar (255) not null,
	usuario_id not null,
	quantidaDeRodadas not null,
	FOREIGN KEY (usuario_id) REFERENCES usuario (id) on update cascade on delete cascade
);

**Questões a serem vistas:**

Vê se /login tem que especificar se é admin ou usuario; 
Tem pois no meu caso um cliente pode ser tanto admin quanto usuário! 
aí muda no router de login;

Testar a auntenticação;

Toda vez que for adicionar uma nova entidade no backend deve-se modificar o db/index.js e adicionar ela no /routes e por no index de src;

put é em caso de mudar varios dados em um bd, patch é só um;