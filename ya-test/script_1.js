/**
 * @typedef {Object} Answer
 * @property {string} date - дата, для которой подсчитано количество уникальных пользователей
 * @property {number} users - количество уникальных пользователей
 *
 *
 * @typedef {Object} Credentials
 * @property {string | null | undefined} login - логин пользователя
 * @property {string | null | undefined} password - пароль пользователя
 * @property {Date} date - дата последнего логина
 *
 * @param {Function} func  - произвольная функция, вызываемая для пользователей с присутствующим логином и паролем
 * @return {(credentials: Credentials, ...args) => Answer[]} - результат подсчета количества уникальных пользователей для каждого дня
 */

function countUniqueUsersWrapper(func) {
  const uniqueUsers = new Map();

  return function countUniqueUsers(credentials, ...args) {
    const dateStr = credentials.date.toISOString().split("T")[0];

    if (
      typeof credentials.login !== "string" ||
      typeof credentials.password !== "string" ||
      credentials.login === "" ||
      credentials.password === ""
    ) {
      // Возвращаем текущее сохраненное количество уникальных пользователей
      return [{ date: dateStr, users: uniqueUsers.size }];
    }

    const userKey = `${credentials.login}:${credentials.password}`;

    uniqueUsers.set(userKey, true);

    // Вызываем функцию func с переданными аргументами
    func(...args);

    // Возвращаем количество уникальных пользователей за день
    return [{ date: dateStr, users: uniqueUsers.size }];
  };
}

// Тестовые данные
// const wrappedFunc = countUniqueUsersWrapper(() => console.log("called"));

// console.log(
//   wrappedFunc({ login: "a", password: "a", date: new Date("2023-06-28") })
// );
// // Ожидаемый вывод: [{ date: '2023-06-28', users: 1 }], и в консоли должно быть напечатано "called"

// console.log(
//   wrappedFunc({ login: NaN, password: "a", date: new Date("2023-06-28") })
// );
// // Ожидаемый вывод: [{ date: '2023-06-28', users: 1 }], функция "called" не должна быть вызвана, так как логин не является строкой

// console.log(
//   wrappedFunc({ login: "c", password: undefined, date: new Date("2023-06-28") })
// );
// Ожидаемый вывод: [{ date: '2023-06-28', users: 1 }], функция "called" не должна быть вызвана, так как пароль не определен

// Тестовые данные
const wrappedFunc = countUniqueUsersWrapper(() => console.log("called"));

console.log(
  wrappedFunc({ login: "a", password: "a", date: new Date("2023-06-28") })
);

console.log(
  wrappedFunc({ login: "b", password: "a", date: new Date("2023-06-28") })
);

console.log(
  wrappedFunc({ login: "c", password: "c", date: new Date("2023-06-28") })
);
