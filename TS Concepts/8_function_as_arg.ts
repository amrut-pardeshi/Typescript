function makeName(
  firstName: string,
  lastName: string,
  middleName?: string
): string {
  if (middleName) {
    return firstName + " " + middleName + " " + lastName;
  }
  return firstName + " " + lastName;
}

function callFunction(
  func: (f: string, l: string, m?: string) => string,
  param1: string,
  param2: string,
  param3?: string
) {
  func(param1, param2, param3);
}

callFunction(makeName, "A", "P");

//-----------------------------------------------------------------------------

function mul(x: number, y: number) {
  return x * y;
}

function div(x: number, y: number) {
  return x / y;
}

function applyFunction(
  func: ((a: number, b: number) => number)[],
  array: [number, number][]
): number[] {
  const results: number[] = [];
  for (let i = 0; i < func.length; i++) {
    let res = func[i](array[i][0], array[i][1]);
    results.push(res);
  }
  return results;
}

applyFunction(
  [mul, div],
  [
    [4, 2],
    [6, 1],
  ]
);
