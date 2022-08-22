function add(x,y) {
  return x + y
}

function multiply(x,y) {
  if(x == 0 || y == 0)
    return 0
  let n = x;
  for(let i = 1; i < y; i++) {
    x = add(x, n)
  }
  return x;
}

function power(x, y) {
  if(y == 0)
    return 1
  let n = x;
  for(let i = 1; i < y; i++) {
    x = multiply(x, n)
  }
  return x;
}

function factorial(x) {
  let v = 1;
  for(let i = 2; i <= x; i++) {
    v = multiply(v, i)
  }
  return v;
}

console.log(add(2,4))
console.log(multiply(6,8))
console.log(power(2,8))
console.log(factorial(4))