// Задача 2. Форматування повідомлення
// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок(параметр message) та перевіряє його
// довжину відповідно до заданої максимальної довжини(параметр maxLength).
// Доповни код функції таким чином, що:
// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message; //Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін
  } else {
    return message.slice(0, maxLength) + '...'; // Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.
  }
}

console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"
