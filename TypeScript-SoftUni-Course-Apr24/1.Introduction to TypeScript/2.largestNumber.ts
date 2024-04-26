function largestNumber(a:number, b:number, c:number){
    if(a > b && a> c){
       console.log(`The largest number is ${a}.`);
       
    }else if(b > a && b > c){
        console.log(`The largest number is ${b}.`);
    }else{
        console.log(`The largest number is ${c}.`);
        
    }
}
largestNumber(-3, -5, -22.5)