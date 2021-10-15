'use strict';
class Dog {
    constructor(name, breed, weight) {
        this.name = name;
        this.breed = breed;
        this.weight = weight;
    }
}

class ShowDog extends Dog {
    constructor(name, breed, weight, handler) {
        super(name, breed, weight);
        this.handler = handler;
    }
}

Dog.prototype.species = 'Canine';

Dog.prototype.bark = function () {
    if (this.weight > 25) {
        console.log(this.name + ' says Woof!');
    } else {
        console.log(this.name + ' says Yip!');
    }
};

Dog.prototype.run = function () {
    console.log('Run!');
};

Dog.prototype.wag = function () {
    console.log('Wag!');
};

Dog.prototype.sitting = false;

Dog.prototype.sit = function () {
    if (this.sitting) {
        console.log(this.name + ' is already sitting');
    } else {
        this.sitting = true;
        console.log(this.name + ' is now sitting');
    }
};

ShowDog.prototype.league = 'Webville';

ShowDog.prototype.stack = function () {
    console.log('Stack');
};

ShowDog.prototype.bait = function () {
    console.log('Bait');
};

ShowDog.prototype.gait = function (kind) {
    console.log(kind + 'ing');
};

ShowDog.prototype.groom = function () {
    console.log('Groom');
};

let fido = new Dog('Fido', 'Mixed', 38);
let fluffy = new Dog('Fluffy', 'Poodle', 30);
let spot = new Dog('Spot', 'Chihuahua', 10);

spot.bark = function () {
    console.log(this.name + ' says WOOF!');
};

let barnaby = new Dog('Barnaby', 'Basset Hound', 55);
let scotty = new ShowDog('Scotty', 'Scottish Terrier', 15, 'Cookie');
let ruta = new ShowDog('Ruta', 'Maltese lapdog', 8, 'N1kolay');
let lusy = new ShowDog('Lusy', 'Cocker spaniel', 28, 'Rainbow');
let beatrice = new ShowDog('Beatrice', 'Pomeranian', 5, 'Hamilton');

fido.bark();
fluffy.bark();
spot.bark();
barnaby.bark();

scotty.bark();
console.log(scotty.species);
console.log(scotty.league);
scotty.stack();

ruta.bark();
ruta.run();
ruta.bait();
ruta.groom();

beatrice.bark();
beatrice.wag();
beatrice.gait('Walk');
beatrice.gait('Trot');

lusy.bark();
lusy.sit();
lusy.gait('Canter');
lusy.gait('Rotary gallop');
