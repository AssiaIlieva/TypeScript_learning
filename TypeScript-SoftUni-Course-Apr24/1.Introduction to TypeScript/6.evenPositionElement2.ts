function evenPositionEl(array: string[]):void{
   let result = array.filter((el, i) => i % 2 === 0)

    console.log(result.join(' '));
    
}

evenPositionEl(['10', '30', '20', '50', '10'])