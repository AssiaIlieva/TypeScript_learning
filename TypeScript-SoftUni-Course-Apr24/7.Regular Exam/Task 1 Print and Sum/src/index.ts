function printAndSum(startNum: number, endNum: number): void {
  let sum: number = 0;
  const numArray: number[] = [];

  for (let i = startNum; i <= endNum; i++) {
    sum += i;
    numArray.push(i);
  }

  console.log(numArray.join(" "));
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
