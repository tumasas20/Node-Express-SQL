import { FilmModel } from './types';

export const films: FilmModel[] = [
    {
      id: 1,
      title: 'The Dark Knight',
      year: '2008',
      actor: {
        role: 'Batman',
        fullname: 'Christian Bale',
      },
      images: [
        'https://ntvb.tmsimg.com/assets/p173378_v_h10_ab.jpg?w=1280&h=720',
        'https://cdn.wallpapersafari.com/73/7/NYiy7z.jpg',
        'https://bostonhassle.com/wp-content/uploads/2018/05/darkknighttrilogyjpg-8839be_1280w.jpg',
      ],
      rating: 9,
      trailer: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    },
    {
      id: 2,
      title: 'Inception',
      year: '2010',
      actor: {
        role: 'Cobb',
        fullname: 'Leonardo DiCaprio',
      },
      images: [
        'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/26677df38123a3a1553d704477c100af81b641e1d539bc1991f99f89935f18b0._UY500_UX667_RI_V_TTW_.jpg',
        'https://static01.nyt.com/images/2010/07/16/arts/16inceptioncap/16inceptioncap-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
        'https://images.theconversation.com/files/353517/original/file-20200819-14-1n1gtu5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip',
      ],
      rating: 8.8,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      id: 3,
      title: 'The Green Mile',
      year: '1999',
      actor: {
        role: 'death row prison guard',
        fullname: 'Tom Hanks',
      },
      images: [
        'https://i.ytimg.com/vi/CmxArNBJHFQ/maxresdefault.jpg',
        'https://www.denofgeek.com/wp-content/uploads/2022/02/The-Green-Mile-Hanks-Duncan.jpg?fit=1600%2C1000',
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F03%2Fgreen-mile.jpg&q=60',
      ],
      rating: 8.6,
      trailer: 'https://www.youtube.com/embed/Ki4haFrqSrw',
    },
    {
      id: 4,
      title: 'The Matrix',
      year: '1999',
      actor: {
        role: 'Neo',
        fullname: 'Keanu Reeves',
      },
      images: [
        'https://twosidesblog.com/wp-content/uploads/2021/09/The-Matrix-Header-Pic.jpeg',
        'https://resizing.flixster.com/b3abmyKKFDnpKFOJ1VyTIFOuEVA=/740x380/v2/https://statcdn.fandango.com/MPX/image/NBCU_Fandango/759/547/thumb_AD047365-3BF3-4675-8C6F-9C75E74E33AE.jpg',
        'https://media.wired.com/photos/5ca648a330f00e47fd82ae77/16:9/w_1391,h_782,c_limit/Culture_Matrix_Code_corridor.jpg',
      ],
      rating: 8.7,
      trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8',
    },
    {
      id: 5,
      title: 'The Thing',
      year: '1982',
      actor: {
        role: 'R.J. MacReady',
        fullname: 'Kurt Russell',
      },
      images: [
        'https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/the-thing-1982/Thing-image.jpg',
        'https://m.media-amazon.com/images/M/MV5BYzBhZmNmYzgtMmZkMC00ODYxLWJiYjctOGFkOTYwMWZhZDk4XkEyXkFqcGdeQWpvaG5oYXJ0._V1_QL75_UX500_CR0,47,500,281_.jpg',
        'https://filmblitz.org/wp-content/uploads/2018/10/thing-678x381.jpg',
      ],
      rating: 8.2,
      trailer: 'https://www.youtube.com/embed/5ftmr17M-a4',
    },
    {
      id: 6,
      title: 'A Beautiful Mind',
      year: '2001',
      actor: {
        role: 'Nash',
        fullname: 'Russell Crowe',
      },
      images: [
        'https://filmobsessive.com/wp-content/uploads/2019/05/a-beautiful-mind.jpg',
        'https://www.pluggedin.com/wp-content/uploads/2019/12/a-beautiful-mind.jpg',
        'https://www.giffonifilmfestival.it/en/media/djcatalog2/images/item/47/a-beautiful-mind.1_f.jpg',
      ],
      rating: 8.2,
      trailer: 'https://www.youtube.com/embed/9wZM7CQY130',
    },
    {
      id: 7,
      title: 'Scarface',
      year: '1983',
      actor: {
        role: 'Tony Montana',
        fullname: 'Al Pacino',
      },
      images: [
        'https://occ-0-420-55.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRSgdBZUdi8HnYaNkU5XjwecsFL6zSCdPXwVk4pTeXWhY0ueL0VkxwbjjCDZnV31VdL3QxaCnZPDcVX5pUlDKLlHOqj6zZnXlr92.jpg?r=fc9',
        'https://arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/KWPS44YMAUFTQXIY666SZFPKYE.jpg',
        'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2019/07/12/cd5485e2-a3be-11e9-9a3c-98259c87fba2_image_hires_124225.jpg?itok=MhaKV41B&v=1562906551',
      ],
      rating: 8.3,
      trailer: 'https://www.youtube.com/embed/7pQQHnqBa2E',
    },
    {
      id: 8,
      title: 'Oldeuboi',
      year: '2003',
      actor: {
        role: 'Oh Dae-su',
        fullname: 'Choi Min-sik',
      },
      images: [
        'https://i.pinimg.com/736x/8d/76/ef/8d76ef69da58c78e71561251968b5801--wallpaper-backgrounds-drama.jpg',
        'https://m.media-amazon.com/images/M/MV5BOTUzOTEyMTkxM15BMl5BanBnXkFtZTcwMTU4MTI2NQ@@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTMyNzQxMjc3OF5BMl5BanBnXkFtZTcwNjQ4MTI2NQ@@._V1_.jpg',
      ],
      rating: 8.4,
      trailer: 'https://www.youtube.com/embed/2HkjrJ6IK5E',
    },
    {
      id: 9,
      title: 'Alien',
      year: '1979',
      actor: {
        role: 'Dallas',
        fullname: 'Tom Skerritt',
      },
      images: [
        'https://www.comingsoon.net/wp-content/uploads/sites/3/2022/12/xenomorph-alien-header.png',
        'https://media.wired.co.uk/photos/606db4e0d051e15de128ca53/master/w_1600%2Cc_limit/alien_1.jpg',
        'https://static01.nyt.com/images/2017/05/07/movies/07alien-image/07alien-image-videoSixteenByNine1050-v2.jpg',
      ],
      rating: 8.5,
      trailer: 'https://www.youtube.com/embed/LjLamj-b0I8',
    },
    {
      id: 10,
      title: 'Parasite',
      year: '2019',
      actor: {
        role: 'Kim Ki-taek',
        fullname: 'Song Kang-ho',
      },
      images: [
        'https://i.ytimg.com/vi/PhPROyE0OaM/maxresdefault.jpg',
        'https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2019/05/23/210426_1338272.png.1500x1000_q95_crop-smart_upscale.png',
        'https://tldrmoviereviewsblog.files.wordpress.com/2019/07/parasite-2.jpg',
      ],
      rating: 8.5,
      trailer: 'https://www.youtube.com/embed/5xH0HfJHsaY',
    },
    {
      id: 11,
      title: 'Léon',
      year: '1994',
      actor: {
        role: 'Léon',
        fullname: 'Jean Reno',
      },
      images: [
        'https://cdn.shopify.com/s/files/1/0693/4223/products/The_Professional_Cover_Web_1800x1800.jpg?v=1632926597',
        'https://images.mubicdn.net/images/film/168/cache-90913-1545068127/image-w1280.jpg?size=800x',
        'https://theoddapple.com/wp-content/uploads/2020/08/leon-the-professional-1994-mathilda-and-leon-1024x576.jpg',
      ],
      rating: 8.5,
      trailer: 'https://www.youtube.com/embed/jawVxq1Iyl0',
    },
    {
      id: 12,
      title: 'Back to the Future',
      year: '1985',
      actor: {
        role: 'Marty McFly',
        fullname: 'Michael J. Fox',
      },
      images: [
        'https://m.media-amazon.com/images/S/pv-target-images/ff68e65f5d5ee5dd98fc71c1218a71e3e1008668880b6430d4e912ebf5bda412._UR1920,1080_.jpg',
        'https://www.gannett-cdn.com/-mm-/94572ad71c1c554abae670ec7bd4871e2898e3b2/c=0-142-3000-1837/local/-/media/2015/10/21/USATODAY/USATODAY/635809824922215243-AP-BACK-TO-THE-FUTURE-DAY-76890712.JPG?width=3000&height=1695&fit=crop&format=pjpg&auto=webp',
        'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/06/Back-to-the-Future.jpg',
      ],
      rating: 8.5,
      trailer: 'https://www.youtube.com/embed/qvsgGtivCgs',
    },
  ];
