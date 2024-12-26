
class animal{

   constructor(species){
this.species=species;
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
        super("Dog");  
    }
    
    bark(){
        console.log("woof");
    }
    makeSound() {
        console.log("Bark");
    }
}

window.animal=animal;
window.cat=cat;
window.dog=dog;

