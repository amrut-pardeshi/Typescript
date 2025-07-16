abstract class Animal {
  abstract makeSound(duration: number): void;
  move() {
    console.log("Moving along...!");
  }
}

class Lion extends Animal {
  makeSound(duration: number): void {
    console.log(`Roar for ${duration} time`);
  }
}

const lion = new Lion()
lion.makeSound(12);
lion.move();