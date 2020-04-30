/*
1 Массивы (объект Array)

1.1 Функция принимает 2 массива и возвращает новый массив, в котором
собраны общие элементы (то есть элементы,
которые встречаются и в первом и во втором массивах) без повторений
*/
/*
const array1 = ['a', 'b', 'c'];
const array2 = ['1', '2', '3'];
const array3 = array1.concat(array2);

console.log(array3);
*/

/*
1 Массивы (объект Array)

1.1 Функция принимает 2 массива и возвращает новый массив, в котором
собраны общие элементы (то есть элементы,
которые встречаются и в первом и во втором массивах) без повторений
 */



//1.2 Даны два массива. Объедините их и преобразовав в строку.

/*
const arr1=['1', '2', '3', '4', '5'];
const arr2=['a', 'z', 's', 'o', 'Q'];

const arr3=arr1.concat(arr2);

console.log(arr3);
*/

/*
2 Строки (объект String)

2.1 Напишите функцию, которая преобразует первую букву каждого слова
строки str в верхний регистр.
 */
/*
let str = 'да что вы знаете о самоизоляции?! - кричал робинзон крузо.';
function capitalize(str) {
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
console.log(capitalize(str));
*/

/*
2.2 Написать функцию для проверки спама в переданной строке. Функция
возвращает true, если строка содержит спам. Спамом считать следующие
слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте,
    ххх.
Функция должна быть нечувствительна к регистру.
*/
/*
function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('100% бесплатно') || lowerStr.includes('увеличение продаж')
        || lowerStr.includes('только сегодня') || lowerStr.includes('не удаляйте')
        || lowerStr.includes('xxx')
}

console.log( checkSpam('забирай 100% бесплатно') );
console.log( checkSpam('100% Увеличение продаж') );
console.log( checkSpam('ты не Поверишь только сегодня') );
console.log( checkSpam('не удаляйте и получите 2000 дол.') );
console.log( checkSpam('бесплатно xxx') );
*/

/*
3 Классы

3.1 Реализуйте класс Worker (Работник), который будет иметь следующие
свойства: name (имя), surname (фамилия), rate (ставка за день работы),
days (количество отработанных дней). Также класс должен иметь метод
getSalary(), который будет выводить зарплату работника. Зарплата - это
произведение (умножение) ставки rate на количество отработанных
дней days
 */
/*
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = 0;
        this.days = 0;
    }
    getSalary() { return this.rate * this.days; }
}
let nikola = new Worker('Никола', 'Николаевичь');
nikola.rate = 500;
nikola.days = 160;
console.log(nikola.getSalary());
*/

/*
3.2 С помощью класса Worker создайте двух рабочих и найдите сумму их
зарплат.
 */

/*
function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}
let salaries = {
    "Nicola": 80000,
    "Geka": 45000
};

console.log('total:', sumSalaries(salaries) );
*/

/*
3.3 Модифицируйте класс Worker следующим образом: сделайте все его
свойства приватными, а для их чтения сделайте методы-геттеры
 */

/*
class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName() {
        return this._name;
    }

    getSurname() {
        return this._surname;
    }

    getRate() {
        return this._rate;
    }

    getDays() {
        return this._days;
    }

    getSalary() {
        return this._rate * this._days;
    }

}

let worker = new Worker('Никола', 'Николаевичь', 500, 20);

console.log('Имя:',worker.getName());
console.log('Отчество:',worker.getSurname());
console.log('Оплата в час:',worker.getRate());
console.log('Дней отработано:',worker.getDays());
console.log('Итого:',worker.getSalary());
*/

/*
4 Set
Создайте коллекцию Set с начальными значениями 1,2,3.
 */

/*
let set = new Set;
set.add(1);
set.add(2);
set.add(3);
console.log(set);
*/

/*
С помощью метода has проверьте наличие элемента со значением 3,
а затем элемента со значением 4.

*/
/*
let set = new Set;
set.add(1);
set.add(2);
set.add(3);
//set.add(4);
set.add(5);
console.log(set.has(3));
console.log(set.has(4));
*/
//Добавите еще несколько элементов.
/*
let set = new Set;
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
console.log(set.has(3));
console.log(set.has(4));
console.log(set.has(7));
*/

//С помощью цикла for-of переберите ее значения и выведите в консоль.
/*
let set = new Set;
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
for(let elem of set)
console.log(elem);
*/

//Найдите сумму этих значений.
/*
let set = new Set;
let  sum = 0;
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
for(let elem of set)
    sum = sum + elem
console.log(sum);
*/

//Удалите элемент 2.
/*
let set = new Set;
let  sum = 0;
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
set.delete(2);
console.log(set);
*/

//Очистите всю коллекцию.
/*
let set = new Set;
let  sum = 0;
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
set.clear();
console.log(set);
*/

/*
5 Map
 */
//Пусть даны 2 массива. Создайте коллекцию Map из этих массивов.
//Получите список ключей и значений отдельно.
/*
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10,];

let map = new Map;
map.set(arr1, 'azso1');
map.set(arr2, 'osza2');
console.log(map);
//Получите текущее количество элементов.
console.log(map.size);
*/

//Добавьте и удалите элемент
/*
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10,];

let map = new Map;
map.set(arr1, 'azso1');
map.set(arr2, 'osza2');

map.get('55555');
map.set('987654');

map.delete('987654');
console.log(map);
*/
//Произведите поиск по ключу
/*
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

let map = new Map;
map.set(arr1, 'azso1');
map.set(arr2, 'osza2');
map.get('55555');
map.set('987654');
map.delete('987654');


map.set('proverka');


console.log(map.has('proverka'));
*/