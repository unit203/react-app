const user = {
  id: "1",
  name: "Ivan",
  lastname: "Ivanov",
  email: "ivan@ya.ru",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=80",
  about: "Информация о себе, много букв или может быть и нет.",
};

const users = {
  0: {name: "pink", lastname: "floid"},
  1: {name: "agata", lastname: "kristi"},
  2: {name: "Marsal", lastname: "Jukov"},
  3: {name: "Slevin", lastname: "Celevra"},
  4: {name: "ernest", lastname: "FonClausevic"},
}

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}
