const fn1 = (num: number): string => {
    return String(num)
} // gets number, returns string

type clbck_alias = (num: number) => string;

function fn2(clbck?: clbck_alias) {
    if(clbck === undefined) {
        clbck = String;
    }
    clbck(12);
}

// default parameters are optional
function createPoint(x = 0, y = 0) {
    return [x, y]
}
createPoint(10, 20)
createPoint(30)

// rest parameter
function fn3(...numbs: number[]):string {
    return numbs.join('-');
}

interface Printable {
    label:string;
}
// Printable is a minimal scenario for function, but its optional
function printReport(obj: Printable): void {
    console.log(obj.label);
}

const beverage = {
    label: 'pepsi',
    price: 90,
}
printReport(beverage);

const phone = {
    label: 'Deco',
    category: 'phone',
}
printReport(phone)
//printReport({label: '', price: 100}) // can't send it directly

function pickCard(x: number): {siut: string; card: number};
function pickCard(x: {suit: string; card: number}[]): number;
// may return number or object - two scenario 
function pickCard(x): any {
    if(typeof x === 'object') {
        let pickedCard = Math.floor(Math.random()*x.length);
        return pickedCard;
    } else if (typeof x === 'number') {
        return {suit: '', card: x%13};
    }
}
pickCard(7)
pickCard([{ suit: 'abc', card: 5 }]);