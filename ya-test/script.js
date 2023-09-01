// // 1) ПЕРВАЯ
// const fs = require("fs");

// function checkRange(a, b) {
//   const minRangeValue = -2 * 10 ** 9;
//   const maxRangeValue = 2 * 10 ** 9;

//   if (
//     a >= minRangeValue &&
//     a <= maxRangeValue &&
//     b >= minRangeValue &&
//     b <= maxRangeValue
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Считываем числа из файла
// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   const numbers = data.split(" ");
//   const a = parseInt(numbers[0]);
//   const b = parseInt(numbers[1]);

//   // Проверяем диапазон значений a и b
//   if (checkRange(a, b)) {
//     // Вычисляем сумму чисел
//     const sum = a + b;

//     // Записываем ответ в файл
//     fs.writeFile("output.txt", sum.toString(), (err) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log("Результат был записан в файл output.txt");
//     });
//   } else {
//     console.error("Значения a и b находятся вне допустимого диапазона");
//   }
// });

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Введите числа A и B через пробел: ", (input) => {
//   const numbers = input.split(" ");
//   const A = parseInt(numbers[0]);
//   const B = parseInt(numbers[1]);

//   const sum = A + B;
//   console.log("Сумма A и B:", sum);

//   rl.close();
// });

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkRange(a, b) {
  const minRangeValue = -2 * 10 ** 9;
  const maxRangeValue = 2 * 10 ** 9;

  if (
    a >= minRangeValue &&
    a <= maxRangeValue &&
    b >= minRangeValue &&
    b <= maxRangeValue
  ) {
    return true;
  } else {
    return false;
  }
}

rl.question("Введите два числа через пробел: ", (input) => {
  const numbers = input.split(" ");
  const a = parseInt(numbers[0]);
  const b = parseInt(numbers[1]);

  if (checkRange(a, b)) {
    const sum = a + b;
    console.log("Сумма:", sum);
  } else {
    console.error("Числа вне диапазона");
  }

  rl.close();
});
