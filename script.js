//complete this code
// class Animal {}

// class Dog extends Animal {}

// class Cat extends Animal {}

// // Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;



class animal{

   constructor(species){
this.species=species;
   }
   getSpecies() {
        return this.species;
    }
makesound(){
    console.log("Some sound");
}


}

class cat extends animal{
    constructor() {
        super("Cat");  // Call the parent constructor with species "Cat"
    }
    purr(){
        console.log("purr");
    }
    makeSound() {
        console.log("Meow");
    }
}


class dog extends animal{
    constructor() {
        super("Dog");  // Call the parent constructor with species "Dog"
    }

    bark(){
        console.log("woof");
    }
    makeSound() {
        console.log("Bark");
    }
}

// call the all aniamsls

const cat = new Cat();
console.log(cat.getSpecies());  // "Cat"
cat.makeSound();  // "Meow"
cat.purr();  // "purr"

const dog = new Dog();
console.log(dog.getSpecies());  // "Dog"
dog.makeSound();  // "Bark"
dog.bark();  // "woof"


