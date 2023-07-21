import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1'

//axios.get(url).then(response => console.log(response.data))

//     1
//tsc index.ts - формируем файл js
//node index.js - смотрим в консоли, что получили с апи
//     2
//ts-node index.ts - компиляция ts в js в одно действие

interface Todo { // интерфейс соответствия данных в jsone с теми,
    // которые мы хотим получить ниже
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo; // приводим к соответствию
    // с интерфейсом - если не соответствует, подсветит ошибкой

    // было:
    // ID, Title, finished

    const id  = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    console.log(`
        Todo ID: ${id} 
        Todo title: ${title}
        Todo finished: ${finished}`
    )

    // было
    //logTodo(id, finished, title)
    // стало
    logTodo(id, title, finished)
})

function logTodo(id:number, title:string, completed:boolean) {   
    console.log(`
        Todo ID: ${id} 
        Todo title: ${title}
        Todo finished: ${completed}`
    )
}

let str: string;
//str = 1; // incorrect
str = 'string'; //good

//TS defines types automatically
let x = true;
let myNumber = 1;
let y = new Date();
let score: number | string; //union

//псевдоним типа
type Score = number | string;
const myScore1: Score = '1';
let myScore0: number | string = 10;

// any - no type, have to be defined

let z:number = JSON.parse('6');
let m:string = JSON.parse('str');

let isOdd: boolean;
if(z % 2 === 0) {
    isOdd = false
} else {
    isOdd = true
}