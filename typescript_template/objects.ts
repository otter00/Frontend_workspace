const obj = {a: 1, b:2, c:'abc'}

const obj1: {
    a:number;
    b: number;
    c:string;
} = {a:1, b:2, c:'abc'};

type MyObj = {
    a:number;
    b: number;
    c:string;
}

const obj2: object = {};
const obj3: MyObj = {
    a:1,
    b:2,
    c:'abc'
}

interface MyObject {
    readonly a:number;
    b:number;
    c?:string; // optional
    print?: () => number;
    //[key: string]: string | number;
}

const obj4: MyObject = {
    a:1,
    b:2,
    c:'abc',
    //eeee: 'string'
}

const obj5: MyObject = {
    a: 10,
    b: 11,
    // c: 'name',
}

interface IPerson {
    name: string;
}
interface IPerson {
    age: number;
}
// sums
const John: IPerson = {
    name: 'John',
    age: 32,
}

interface IAccount {
    email: string;
    login: string;
    activity: boolean;
}

interface IDeveloper extends IPerson, IAccount {
    skills: string[];
    level: string;
}

const john: IDeveloper = {
    name: 'John',
    age: 35,
    email: '',
    login: '',
    activity: true,
    skills: ['JS', 'TS'],
    level: 'middle',
}


type Person = {
    name: string;
    age: number;
}
type MyAcoount = {
    email: string;
    login: string;
    activity: boolean;
}
type MyDeveloper = {
    skills: string[];
    level: string;
}

type FrontDeveloper = Person & MyAcoount & MyDeveloper;
const jane: FrontDeveloper = {
    name: 'John',
    age: 35,
    email: '',
    login: '',
    activity: true,
    skills: ['JS', 'TS'],
    level: 'middle',
}
const devArr: FrontDeveloper[] = [];