insert into image(src) values
('https://images.freeimages.com/fic/images/icons/126/sleek_xp_basic/300/administrator.png'),
('https://pen.org/wp-content/uploads/2023/01/nina-mcconigley-300x300.jpg'),
('https://i1.au.reastatic.net/382x382,gravity=north,quality=90/96ef967176f728b4925f7eaec50ea7d1675e69721745457b367c8eae03855081/main.jpg'),
('https://www.hrdconnect.com/wp-content/uploads/2020/11/Laura-Keith.jpg');

insert into user(name, surname, email, password, imageId, importance) values
('Mandarinas', 'Plepys', 'admin@gmail.com', 'Druskinikai135!', 1, 'ADMIN'),
('Nina', 'Faulkner', 'spasibos@gmail.com', 'laikinas', 2, 'USER'),
('Alexandra', 'Mcgrath', 'zalexiaz@gmail.com', 'laikinas', 3, 'USER'),
('Laura', 'Keith', 'christinecamlong@gmail.com', 'laikinas', 4, 'USER');

insert into film(userId, title, year) values
(2, 'The Dark Knight', '2008'),
(2, 'Inception', '2010'),
(2, 'The Green Mile', '1999'),
(3, 'The Matrix', '1999'),
(3, 'The Thing', '1982'),
(3, 'A Beautiful Mind', '2001'),
(4, 'Scarface', '1983'),
(4, 'Oldeuboi', '2003'),
(4, 'Alien', '1979'),
(2, 'Parasite', '2019'),
(3, 'Léon', '1994'),
(4, 'Back to the Future', '1985');