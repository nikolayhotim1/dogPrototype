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

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);

// fido.bark();
// fido.run();
// fido.wag();

// fluffy.bark();
// fluffy.run();
// fluffy.wag();

// spot.bark();
// spot.run();
// spot.wag();

// barnaby.bark();
// barnaby.run();
// barnaby.wag();

// barnaby.sit();
// barnaby.sit();
// spot.sit();
// spot.sit();

// console.log(spot.hasOwnProperty('species')); // false
// console.log(fido.hasOwnProperty('species')); // false
// console.log(barnaby.hasOwnProperty('sitting')); // true
// console.log(spot.hasOwnProperty('sitting')); // true
// console.log(fido.hasOwnProperty('sitting')); // false
// console.log(fluffy.hasOwnProperty('sitting')); // false
