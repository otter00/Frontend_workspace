var valueFactory = function (x) { return x; };
var myValue = valueFactory(11);
var x = {
    value: 'abc' // string
};
// class ArrayOfNums {
//     constructor(public collection: number[]) {
//         this.collection = collection;
//     }
//     get(index: number): number {
//         return this.collection[index];
//     }
// }
// class ArrayOfStrings {
//     constructor(public collection: string[]) {
//         this.collection = collection;
//     }
//     get(index: number): string {
//         return this.collection[index];
//     }
// }
// multitype class
var ArrayOfAny = /** @class */ (function () {
    function ArrayOfAny(collection) {
        this.collection = collection;
    }
    ArrayOfAny.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAny;
}());
new ArrayOfAny(['1', '2', 's']);
new ArrayOfAny([1, 2, 3]);
new ArrayOfAny(['array', 'of', 'strings']);
// function printString(arr: string[]):void {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
// function printNum(arr: number[]):void {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
// multitype print func
function printAny(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAny([1, 22, 35]);
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function (acc, num) { return acc + num; }, 0);
console.log(sum); // Output: 15 (sum of all elements in the array)
function printLength(arg) {
    return arg.length;
}
printLength('1');
printLength([1]);
printLength({ a: 1, length: 1 });
function getProperty(obj, key) {
    console.log(obj[key]);
    return obj[key];
}
var myObj = {
    a: 1,
    b: 2,
    c: 3,
};
// K === 'a' | 'b' | 'c'
getProperty(myObj, 'a');
