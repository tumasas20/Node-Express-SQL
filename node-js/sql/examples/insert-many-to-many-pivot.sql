insert into film (title, year, played, trailer, userId) values
('Scream VI', '2023', 'Tara Carpenter', 'https://www.youtube.com/embed/h74AXqw4Opc', 3);

set @created_film_id = last_insert_id();

insert into image (src) values
('nuotrauka 1'),
('nuotrauka 2'),
('nuotrauka 3'),
('nuotrauka 4'),
('nuotrauka 5');

set @image_id = last_insert_id();

insert into film_image (imageId, filmId) values
(@image_id, @created_film_id),
(@image_id + 1, @created_film_id),
(@image_id + 2, @created_film_id),
(@image_id + 3, @created_film_id),
(@image_id + 4, @created_film_id);

set @actor_id = last_insert_id();

insert into actor (fullname, actorId) values
('Jenna Ortega', @actor_id);

insert into role (actorId, filmId) values
(@actor_id, @created_film_id);