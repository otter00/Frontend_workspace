// списки - динамически расширяемый, одного типа
const arr:string[] = []; 
// объявляем тип - массив строк, и присваиваем его переменной
const arr1 = ['a', 'b', 'c']; 
arr.push('str')
const arr2: Array<number> = [];
const arr3: string[][] = []; // двумерный массив
arr3.push(['a', 'b'])

type myType = (string | number)
const arr4: myType[] = [];

let el = arr1[0]
let el1 = arr1.pop()


// кортежи (tuples) - фиксированное кол-во эл-тов (могут быть разных типов)
const tuple1: [string, boolean, number] = ['abc', true, 1];
// csv - comma separation value
type SimpleCsv = [string, string, number]
const example: SimpleCsv[] = [
    ['str', 'st', 2]
];

