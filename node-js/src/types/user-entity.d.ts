type UserEntity = {
    id: number,
    email: string,
    password: string,
    name: string,
    surname: string,
    importance: 'ADMIN' | 'USER',
    image: string,
  };
