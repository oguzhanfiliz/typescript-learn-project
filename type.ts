let a:number;
let b: string;
let e:number[] = [1,2,3];
let f: Array<number> = [1,2,3];
let g: any[] = [1,'a',true];

const krediPayment = 0;
const havalePayment = 1;
const eftPayment =2;



enum Payment {krediPayment,havale,eft,doorPayment=4};

let kredi = Payment.krediPayment;//0
let havale = Payment.havale;//1
let eft  = Payment.eft;//2
let doorPayment  = Payment.doorPayment;//2
