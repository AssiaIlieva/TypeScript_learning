type Town = {town: string, latitude: number | string, longitude: number |string }

function generateTowns(townsArray: string []):Town[] {
    let towns: Town [] = [];
    for(let town of townsArray){
        let [name, latitudeAsString, longitudeAsString] = town.split(' | ');
        const latitude = Number(latitudeAsString).toFixed(2);
        const longitude = Number(longitudeAsString).toFixed(2);
        const currentTown: Town = {
            town: name,
            latitude: latitude,
            longitude: longitude,
        }
        towns.push(currentTown)
    }
    return towns;
}

function printTownsObj(arr: Town []):void{
    for(let town of arr){
        console.log(town);
        
    }
}

printTownsObj(generateTowns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
))