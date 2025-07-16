class PersonClass {
  private name: string;
  protected id: number;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  greet(): void {
    // default public
    console.log(`Hello this is my name: ${this.name}`);
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
}

const p1 = new PersonClass(10, "AP");
p1.getName();

//-----------------------------------------------

class EmployeeClass extends PersonClass {
  callMe() {
    console.log(`My id is:${this.id}`);
  }
}
