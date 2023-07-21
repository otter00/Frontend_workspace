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