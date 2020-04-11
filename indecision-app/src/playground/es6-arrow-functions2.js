const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}

console.log(44, 1, 1001)

const user = {
  name: 'Andrew',
  cities: ['Baltimore', 'Chicago', 'Mountain Home'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
}

console.log(user.printPlacesLived());

// challenge area
const multiplier = {
  // array of numbers that we want to multiply
  numbers: [10, 20, 30],
  // multiplyBy - is a single number
  multiplyBy() {
    return this.numbers.map((num) => num * 3) 
  }
  // multiply is going to return a new array where the numbers have been multiplie
};




console.log(multiplier.multiplyBy());