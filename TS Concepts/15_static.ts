class DogClass {
  static instanceCount = 0;
  name: string;
  constructor(name: string) {
    DogClass.instanceCount++;
    this.name = name;
  }
}

