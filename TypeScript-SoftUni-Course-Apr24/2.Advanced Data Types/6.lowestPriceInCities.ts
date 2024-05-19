type Product = {
    name: string,
    city: string,
    price: number
};

function generateProducts(input: string []): Product []{
    const products: Product [] = [];

    for(let el of input){
        let [city, name, priceAsString] = el.split(' | ');
        const price = Number(priceAsString);

        let isFound = products.find((el) => el.name === name);

        if(isFound){
            if(isFound.price > price){
                isFound.price = price;
                isFound.city = city
            }
        }else{
            products.push({name, city, price})
        }
    }
    return products
}

function printProducts(array: Product[]):void{
    for(let product of array){
        console.log(`${product.name} -> ${product.price} (${product.city})`);
    }
}

printProducts(generateProducts(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
))