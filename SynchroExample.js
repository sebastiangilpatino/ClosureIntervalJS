let from = 6, to = 10;

let b = from;

function fun(from, to) {
  
  if (b >= to) {
    clearTimeout(timerId);
  }
  console.log(b);
  b++;
}

let timerId = setInterval(fun, 1000, from, to);