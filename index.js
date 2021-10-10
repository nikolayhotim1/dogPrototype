'use strict';
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

function ShowDog(name, breed, weight, handler) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.handler = handler;
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

ShowDog.prototype = new Dog();

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

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);

ruta.bait();
ruta.bark();
ruta.groom();
ruta.wag();

lusy.gait('Rotary gallop');
lusy.bark();
lusy.run();
lusy.sit();

if (fido instanceof Dog) {
    console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
    console.log("Fido is a ShowDog");
}
// Fido is a Dog
if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
}
// Scotty is a Dog
// Scotty is a ShowDog
console.log("Fido constructor is " + fido.constructor);
// Fido constructor is function Dog(name, breed, weight) {
// this.name = name;
// this.breed = breed;
// this.weight = weight;
// }
console.log("Scotty constructor is " + scotty.constructor);
// Scotty constructor is function Dog(name, breed, weight) {
// this.name = name;
// this.breed = breed;
// this.weight = weight;
// }
