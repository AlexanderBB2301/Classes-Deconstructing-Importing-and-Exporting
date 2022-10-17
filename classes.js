// Create a class then represents anything you like
// Create a class that extends the first class
// Create a class that extends the second class
// Make sure each class has at least one method and one piece of data unique to it
// Create an instance of the final class

class Trains {
  constructor(type) {
    this._type = type;
  }
  get type() {
    return this._type;
  }
}

const type1 = new Trains("Passenger");
console.log(type1);

class PassengerTrains extends Trains {
  constructor(type, distance) {
    super(type);
    this._distance = distance;
  }
  get distance() {
    return this._distance;
  }
}
const journey = new PassengerTrains("Passenger", "long");
console.log(journey);

class Freight extends Trains {
  constructor(type, load) {
    super(type);
    this._load = load;
  }
  get load() {
    return this._load;
  }
}
const freightTrain = new Freight("Freight", "coal");
console.log(freightTrain);

class JourneyTime extends PassengerTrains {
  constructor(type, distance, journeyTime) {
    super(type, distance);
    this._journeyTime = journeyTime;
  }
  get journeyTime() {
    return this._journeyTime;
  }
}
const howLong = new JourneyTime("Passenger", "long", "several days");
console.log(howLong);

// Write out an example of the following syntax
// import/export of a function/variable from another file (both default and named)
// fat arrow function
// fat arrow function with default parameters
// object destructuring
// array destructuring

import { subtract } from "./utils.js";
console.log(subtract(6, 4));

import something from "./utils.js";
console.log(something.Breed);

const sum = (x, y) => {
  return x + y;
};
console.log(sum(3, 1));

const getWeather = (country, season, month = " ") => {
  return country + " " + season + " " + month;
};
console.log(getWeather("Puerto Rico", "Winter", "January"));
console.log(getWeather("Puerto Rico", "Winter"));

var animal = {
  species: "dog",
  breed: { longName: "English Border Collie", shortName: "Collie" },
  sex: "male",
  age: "6",
  firstName: "Joey",
};

const shortName = animal.breed.shortName;
console.log(shortName);
const longName = animal.breed.longName;
console.log(longName);
const dog = animal.species;
console.log(dog);
console.log(
  `The ${dog} you are searching for is a ${longName}, also known as a ${shortName}.`
);

const clothes = ["shoes", "t-shirts", "jumpers", "gloves", "scarves", "jeans"];
const [item1] = clothes;
console.log(item1);

const weather = "Snow Wind Rain Sun Wind";
const [weather1, weather2, weather3, weather4, weather5] = weather.split(" ");
console.log(weather1);
console.log(weather2);
console.log(weather3);
console.log(weather4);
console.log(weather5);
