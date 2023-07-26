const valueFactory = (x: number) => x;
const myValue = valueFactory(11);

type TypeFactory<X> = X;
type MyType = TypeFactory<string> // pass the TYPE not a value

interface ValueContainer<Value> {
    value: Value;
}
// create type
type StringContainer = ValueContainer<string>;

const x: StringContainer = {
    value: 'abc' // string
}

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
class ArrayOfAny<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }
}
new ArrayOfAny<string>(['1', '2', 's'])
new ArrayOfAny<number>([1, 2, 3])
new ArrayOfAny(['array', 'of', 'strings'])

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
function printAny<T>(arr: T[]):void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
printAny<number>([1, 22, 35])

// function fillArray<T>(len: number, elem: T): T[] {
//     return new Array<T>(len).fill(elem);
// }

// array of 10 stars
//const abstractArray = fillArray<string>(10, '*');

interface Array<T> {
    concat(...items: Array<T>[] | T[]): T[];
    reduce<U>(
        callback: (state: U, element: T, index: number, array: T[]) => U,
        firstState?: U
    ): U;
    // ...
}
const numbers: number[] = [1, 2, 3, 4, 5];
const sum: number = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15 (sum of all elements in the array)

interface Lengthwise {
    length: number;
}

function printLength<T extends Lengthwise>(arg:T):number {
    return arg.length;
}
printLength('1');
printLength([1]);
printLength({a: 1, length: 1})

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    console.log(obj[key])
    return obj[key]
}

const myObj = {
    a: 1,
    b: 2,
    c: 3,
}
// K === 'a' | 'b' | 'c'
getProperty(myObj, 'b') // output: 2