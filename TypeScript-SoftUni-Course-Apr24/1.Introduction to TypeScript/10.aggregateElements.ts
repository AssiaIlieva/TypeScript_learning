function sumElements(array: number []): number{
    return array.reduce((acc, el) => acc + el, 0);
};

function sumInverse(array: number []): number{
    return array.reduce((acc, el) => acc + 1/el, 0);
}

function concat(array: number []): string{
    return array.join('');
}

function solve(array: number []):void{
    console.log(sumElements(array));
    console.log(sumInverse(array));
    console.log(concat(array));    
}
solve([1, 2, 3])