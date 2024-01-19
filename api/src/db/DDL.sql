CREATE TABLE usuario (
	id serial PRIMARY KEY,
	nome VARCHAR ( 50 ) UNIQUE NOT NULL,
	senha VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL
);

CREATE TABLE admin (
	id serial PRIMARY KEY,
	nome VARCHAR ( 50 ) UNIQUE NOT NULL,
	senha VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL
);

CREATE TABLE partida (
	id serial PRIMARY KEY,
	vencedor varchar (255) not null,
	usuario_id not null,
	quantidaDeRodadas not null,
	FOREIGN KEY (usuario_id) REFERENCES usuario (id) on update cascade on delete cascade
);