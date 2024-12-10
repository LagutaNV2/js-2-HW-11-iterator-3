// TODO: write your code here
function canIterate(obj) {
    // Проверяем, есть ли у объекта метод Symbol.iterator и является ли он функцией
    return obj != null && typeof obj[Symbol.iterator] === 'function';
}

// Примеры использования:

console.log('проверка new Map()', canIterate(new Map())); // true
console.log('проверка new Set()', canIterate(new Set())); // true
console.log('проверка (null)', canIterate(null)); // false
console.log('проверка (10)', canIterate(10)); // false
console.log('проверка (строка)', canIterate("Netology")); // true
