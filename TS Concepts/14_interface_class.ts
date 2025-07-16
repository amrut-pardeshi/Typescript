interface AnimalInterface {
  speak(): void;
}

class Dog implements AnimalInterface {
  speak(): void {
    console.log("Bark!")
  }
}

class Cat implements AnimalInterface {
  speak(): void {
    console.log("Meow!")
  }
}

const cat = new Cat()
const dog = new Dog()

const animal: AnimalInterface[] = [cat, dog]