select 
	f.filmId as id,
	f.title,
	f.year,
    f.trailer,
    json_object(
		'id', u.userId,
		'name', u.name,
		'surname', u.surname,
		'email', u.email
	)  as host, 
	json_object(
        'fullname', ac.fullname,
        'role', f.played
	) as actor,
	if(count(i.imageId) = 0, json_array(), json_arrayagg(i.src)) as images
from film as f
join user as u
on f.userId = u.userId
join role as r
on f.filmId = r.actorId
join actor as ac
on r.actorId = ac.actorId 
join film_image as fi
on f.filmId = fi.filmId
join image as i
on fi.imageId = i.imageId
group by f.filmId