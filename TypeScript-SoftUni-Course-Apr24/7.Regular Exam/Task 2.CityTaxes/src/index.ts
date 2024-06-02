type City = {
  name: string;
  population: number;
  treasury: number;
  taxRate: number;
  collectTaxes: () => void;
  applyGrowth: (percentage: number) => void;
  applyRecession: (percentage: number) => void;
};

function cityTaxes(name: string, population: number, treasury: number): City {
  const result: City = {
    name,
    population,
    treasury,
    taxRate: 10,

    collectTaxes: function () {
      this.treasury += Math.floor(this.population * this.taxRate);
    },

    applyGrowth: function (percentage: number) {
      const growth = Math.floor((this.population * percentage) / 100);
      this.population += growth;
    },

    applyRecession: function (percentage: number) {
      const recession = Math.floor((this.treasury * percentage) / 100);
      this.treasury -= recession;
    },
  };

  return result;
}

const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(10);
console.log(city.treasury);
