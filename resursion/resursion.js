// resursion
let countDownFrom = (num) => {
  // ends function if num equals 0
  if (num === 0) return
  // otherwise calls functions 
  console.log(num);
  countDownFrom(num - 1); 
}

countDownFrom(10);

// More advanced example
// create animal tree from data 
let cat = [
  {id: 'animal', 'parent': null},
  {id: 'mammals', 'parent': 'animals'},
  {id: 'cats', 'parent': 'mammals'},
  {id: 'dogs', 'parent': 'mammals'},
  {id: 'chihuahua', 'parent': 'dogs'},
  {id: 'labrador', 'parent': 'dogs'},
  {id: 'persian', 'parent': 'cats'},
  {id: 'siamese', 'parent': 'cats'}
]

let makeTree = (cat, parent) => {
  let node = {};
  cat
    .filter(c => c.parent === parent)
    .forEach(c => 
      node[c.id] = makeTree(cat, c.id)
    )
    return node
}

console.log(
  JSON.stringify(
    makeTree(cat, null)
    , null, 2
  )
)