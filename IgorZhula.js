const users = [
  { id: 1, name: "Anna", age: 22, city: "Moscow", isActive: true },
  { id: 2, name: "Oleg", age: 17, city: "Kazan", isActive: false },
  { id: 3, name: "Ivan", age: 30, city: "Moscow", isActive: true },
  { id: 4, name: "Maria", age: 25, city: "Sochi", isActive: false }
];

function getActiveUsers(usersArray) {
  return usersArray.filter(user => user.isActive === true);
}

function getUserNames(usersArray) {
  return usersArray.map(user => user.name);
}

function findUserById(usersArray, id) {
  const foundUser = usersArray.find(user => user.id === id);
  return foundUser || null;
}

function getUsersStatistics(usersArray) {
  const total = usersArray.length;
  const active = usersArray.filter(user => user.isActive === true).length;
  const inactive = usersArray.filter(user => user.isActive === false).length;
  return { total, active, inactive };
}

function getAverageAge(usersArray) {
  if (usersArray.length === 0) return 0;
  const totalAge = usersArray.reduce((sum, user) => sum + user.age, 0);
  return totalAge / usersArray.length;
}

function groupUsersByCity(usersArray) {
  return usersArray.reduce((groupedUsers, user) => {
    const city = user.city;
    if (!groupedUsers[city]) groupedUsers[city] = [];
    groupedUsers[city].push(user);
    return groupedUsers;
  }, {});
}

console.log("Активные пользователи:", getActiveUsers(users));
console.log("Имена пользователей:", getUserNames(users));
console.log("Поиск id=3:", findUserById(users, 3));
console.log("Статистика:", getUsersStatistics(users));
console.log("Средний возраст:", getAverageAge(users));
console.log("Группировка по городам:", groupUsersByCity(users));