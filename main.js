function calc(operation, a, b) {
  if (operation == "add") {
    return (a + b);
  } else if (operation == "multi") {
    return (a * b);
  } else if (operation == "subtract") {
    return (a - b);
  } else {
    return "error"
  }
}
console.log(calc("add", 2, 2));