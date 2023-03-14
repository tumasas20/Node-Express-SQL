create table image (
    imageId int4 unsigned primary key auto_increment,
    src varchar(512) not null,
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp on update current_timestamp
);

create table user (
    userId int4 unsigned primary key auto_increment,
    name varchar(64) not null,
    surname varchar(64) not null,
    email varchar(64) not null unique,
    password varchar(64) not null,
    imageId int4 unsigned not null unique,
    importance enum ('USER', 'ADMIN') default 'USER',
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp on update current_timestamp,
    foreign key (imageId) references image(imageId)
);

create table film (
    filmId int4 unsigned primary key auto_increment,
    title varchar(64) not null,
    year varchar(4) not null,
    played varchar(64) not null,
    trailer varchar(512) not null,
    userId int4 unsigned not null,
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp on update current_timestamp,
    foreign key (userId) references user(userId)
);

create table user_film_rating (
    filmId int4 unsigned not null,
    userId int4 unsigned not null,
    amount int1 unsigned not null,
    foreign key (filmId) references film(filmId),
    foreign key (userId) references user(userId),
    primary key (filmId, userId)
);

create table actor (
	actorId int4 unsigned primary key auto_increment,
	fullname varchar(128) not null unique,
	createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp
);

create table role (
	actorId int4 unsigned not null,
	filmId int4 unsigned not null,
    foreign key (actorId) references actor(actorId),
    foreign key (filmId) references film(filmId)
);

create table film_image (
	filmId int4 unsigned not null,
	imageId int4 unsigned not null primary key,
    foreign key (filmId) references film(filmId),
    foreign key (imageId) references image(imageId)
);