type StringorNumber = string | number;

function add1(value: StringorNumber): StringorNumber {
  // way 1 using ===
  if (typeof value === "string") return "String";
  return "Number";
}

//way 2 using instanceof
class CatClass {
  firstName: string = "";
}
let value = new CatClass();
if (value instanceof CatClass) {
}

//way 3 using in
if ("firstName" in value) {
}

// way 4 using as
if (value as CatClass) {
}
