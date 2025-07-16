function add(x: number, y: number): number {
  return x + y;
}

const res = add(5, 7);

// Optional parameter ?
function makeName1(firstName: string, lastName: string, middleName?: string) {
  if (middleName) {
    return firstName + " " + middleName + " " + lastName;
  } else {
    return firstName + " " + lastName;
  }
}

// Another way
function makeName2(
  firstName: string,
  lastName: string,
  middleName: string = ""
) {
  if (middleName) {
    return firstName + " " + middleName + " " + lastName;
  } else {
    return firstName + " " + lastName;
  }
}
