const user = {
  id: "1",
  name: "Ivan",
  lastname: "Ivanov",
  email: "ivan@ya.ru",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=80",
  about: "Информация о себе, много букв или может быть и нет.",
};

const users = {
  0: {id: 65, name: "pink", lastname: "floid", email: "floid@mail.com", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",},
  1: {id: 34, name: "agata", lastname: "kristi", email: "kristi@ma.com", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",},
  2: {id: 33, name: "Marsal", lastname: "Jukov", email: "jukov@mj.com", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",},
  3: {id: 22, name: "Slevin", lastname: "Celevra", email: "celevra@move.com", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",},
  4: {id: 11, name: "ernest", lastname: "FonClausevic", email: "fonclausevic@del.com", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",},
}

export function getUser(userId) {
  for (let i = 0; i < Object.keys(users).length; i++) {
    console.log(users);
    console.log(users[i]);
    if (users[i].id == userId) return users[i];
    return user
  }


  return user;
}

export function getUsers() {
  return users;
}
