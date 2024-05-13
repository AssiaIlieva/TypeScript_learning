type Person = {
    firstName: string,
    lastName: string,
    age: number,
}

const getPersonInfo = (firstName: string, lastName: string, age: string): object => {
    const personInfo: Person = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age),
    }
    return personInfo
}

console.log(getPersonInfo("Peter", 
"Pan",
"20"
));
