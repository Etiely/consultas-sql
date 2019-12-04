create table estados(
 id_estado serial primary key,
 nome_estado varchar(45) not null unique,
 sigla_estado varchar(2) not null unique,
 regiao varchar(45),
 constraint regiao_check check (regiao in('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul')),
 populacao decimal(5,2) not null
);