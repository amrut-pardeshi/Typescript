function sum(...num: number[]) {
  let total = 0;
  num.forEach((element) => {
    total += element;
  });
  return total;
}

sum(1, 2, 3, 4, 5);