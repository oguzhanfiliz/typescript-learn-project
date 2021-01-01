function getAvarage(a:number,b:number,c?:number):string{
    let total = a+b;
    let count = 2;

    if(typeof c !== 'undefined'){
        total += c;
        count++;
    }
    const result = total/3;
    return 'result : ' + result;

}

getAvarage(10,20,30);
getAvarage(10,20);