// resursion
let countDownFrom = (num) => {
  // ends function if num equals 0
  if (num === 0) return
  // otherwise calls functions 
  console.log(num);
  countDownFrom(num - 1); 
}

countDownFrom(10);