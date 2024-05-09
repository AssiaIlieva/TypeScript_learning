function employees(arr: string []):void {
    for(let employee of arr){
        console.log(`Name: ${employee} -- Personal Number: ${employee.length}`);
        
    }
}
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]    
    )