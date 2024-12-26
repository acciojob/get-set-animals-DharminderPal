
class Animal{

   constructor(species){
this.species=species;
   }
  
makesound(){
    console.log("Some sound");
}


}

class Cat extends Animal{
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

class Dog extends Animal{
    constructor() {
        super("Dog");  
    }
    
    bark(){
        console.log("woof");
    }
    makeSound() {
        console.log("Bark");
    }
}

window.Animal=Animal;
window.Cat=Cat;
window.Dog=Dog;

