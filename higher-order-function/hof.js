// A higher-order functions
// Lots of higher order functions in es6
// This example is looking at the filter function

let animals = [
  {name: 'fluffy', species: 'cat'},
  {name: 'poopsalot', species: 'dog'},
  {name: 'chrisP', species: 'pig'},
  {name: 'sparkles', species: 'pig'},
  {name: 'jed', species: 'dog'},
  {name: 'labrador', species: 'dog'},
  {name: 'persian', species: 'cat'},
  {name: 'siamese', species: 'cat'}
]

const dog = animals.filter(animal => animal.species === 'dog')

console.log(
  JSON.stringify(
    dog
    , null, 2
  )
)