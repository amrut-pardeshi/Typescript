interface Person {
  name: string;
  age: number;
  height?: number;
  hello?: () => void;
}

const person: Person = {
  name: "AP",
  age: 10,
  hello: function () {
    console.log("Hello");
  },
};

//-----------------------Extending multiple interface------------------------------------
interface Employee extends Person {
  empId: number;
}

interface Manager extends Person, Employee {
  dept: string;
}

const worker: Manager = {
  empId: 1,
  name: "AP",
  age: 25,
  dept: "IT",
};

//-------------------------Return interface type object-------------------------------

function getPerson(age: number, name: string): Person {
  return {
    age: age,
    name: name,
  };
}
