DELETE from user_film_rating
    WHERE filmId = 1;

    DELETE from role
    WHERE filmId = 1 and actorId = 1;
    
    DELETE from actor
    WHERE actorId = 1;

    SET @filmImagesIds = (
      select group_concat(imageId) 
      from film_image 
      where filmId = 1
      group by filmId);  

    DELETE from film_image
    WHERE filmId = 1;

    DELETE from image
    WHERE find_in_set(imageId, @filmImagesIds);

    DELETE from film
    WHERE filmId = 1;