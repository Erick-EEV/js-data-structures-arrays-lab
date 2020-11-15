// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(name) {
    const allDrivers = [...drivers, name];
    return allDrivers;
}

function prependDriver(name) {
    const newDrivers = [name, ...drivers];
    return newDrivers;
}

function removeLastDriver() {
    const newArray =  drivers.slice(-3, 2);
    return newArray;
}

function removeFirstDriver() {
    const copyArray = drivers.slice(1, 3);
    return copyArray;
}