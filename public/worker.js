onmessage = function (e) {
  const num = e.data
  postMessage(fib(num))
}

const fib = (n) => (n < 2 ? 1 : fib(n - 1) + fib(n - 2))
