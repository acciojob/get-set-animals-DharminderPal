class Animal {
    constructor(species) {
        this._species = species; // Private property to store species
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to log the sound the animal makes
    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Subclass Cat that extends Animal
class Cat extends Animal {
    constructor(species) {
        super(species); // Call the parent class constructor
    }

    // Method to log "purr"
    purr() {
        console.log("purr");
    }
}

// Subclass Dog that extends Animal
class Dog extends Animal {
    constructor(species) {
        super(species); // Call the parent class constructor
    }

    // Method to log "woof"
    bark() {
        console.log("woof");
    }
}
window.Animal=Animal;
window.Cat=Cat;
window.Dog=Dog;

