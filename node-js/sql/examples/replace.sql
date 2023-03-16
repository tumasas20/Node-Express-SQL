update film
set title = 'atnaujinta', year= '0001', played= 'atnaijinta', trailer= 'atnaujinta'
where filmId = 12;

set @filmImagesIds = (
	select group_concat(imageId) 
    from film_image 
    where filmId = 12
    group by filmId);

delete from film_image
where filmId = 12;

delete from image
where find_in_set(imageId, @filmImagesIds);

set @filmRoleIds = (
	select group_concat(actorId) 
    from role 
    where filmId = 12
    group by filmId);

delete from role
where filmId = 12;

delete from actor
where find_in_set(actorId, @filmRoleIds);

insert into image (src) values
('nuotrauka 1'),
('nuotrauka 2'),
('nuotrauka 3'),
('nuotrauka 4'),
('nuotrauka 5');

set @first_image_id = last_insert_id();

insert into film_image(imageId, filmId)
select imageId, 12 as filmId
from image
where imageId >= @first_image_id;

set @actor_id = 12;

insert into actor (fullname, actorId) values
('atnaujintas', @actor_id);

insert into role (actorId, filmId) values
(@actor_id, 12);