// JavaScript file
/*
Blueprints for creating objects
- new objects are called // * instances
 of that class
ex: Cars
class Car: Make, Model, Color
new instances of the Car --> make: ford, model: bronco, color: white

* ENCAPSULATION:
- Key principle in OOP
- It is the concept of bundling data
 (properties/attributes) and related behavior (methods) within an object.

want to make sure our classes are small as possibile to work to avoid bugs / inconsistencies 

* OBJECT LITERAL SYNTAX:
const myFirstCar = {
    make: 'Toyota',
    model: 'Cool',
    color: 'black'
}


If we wanted to make more car objects we wouold need to create entire new objects 
ex
*/




/*
* WANTS AND NEEDS
- input from user about make,model,color
- press create btn, we want to call create class func and create a new instance of the car
- display (render) details about the car

- lets get what is written in the input of th emake input 
when we press the create car btn

- store our values
*/


const myFirstCar = {
  make: "Toyota",
  model: "Corolla",
  color: "black",
};
const mySecondCar = {
  make: "Kia",
  model: "Spectra",
  color: "red",
};

/*
  To avoid having to do this, we create a class

  */

//   defining a class
class Car {
  // predefined method that gets called when we instantiate a class
  constructor(make, color) {
    this.make = make;
    this.model = "Bronco";
    this.isRunning = false;
    this.color = color;
  }
  //   this provides the following func to all future instances of this obj
  start() {
    // refers to the obj calling the method
    this.isRunning = true;
    console.log(`This ${this.make} is running!`);
  }
  stop() {
    // refers to the obj calling the method
    this.isRunning = false;
    console.log(`This ${this.make} has been stopped`);
  }
}

//   instance of the car class
// make an object from the Car class and store it in the car 1 variable
// calling Car invokes the constructor, which builds our object
const car1 = new Car("ford", "Blue");
const car2 = new Car("tesla", "Matte Black");

car2.start();
console.log(car2, "<-- car2");
car2.stop();

console.log(car1, "<-- car1");
console.log(car2, "<-- car2");

///////////////////////////
// using options instead of lising each prop
///////////////////////////
class Car2 {
  // predefined method that gets called when we instantiate a class
  constructor(options) {
    this.make = options.make || "Ford";
    this.model = options.model || "Bronco";
    this.isRunning = false;
    this.color = options.color || "White";
  }
}
const car3 = new Car2({});
console.log(car3, "<-- car3");








/*
* INHERITANCE 
- start with generalize class
- go to more specific classes as we go
ex: General: class Insect {
   constructor(*insect traits*){

   }
}
class Bee extends Insect {
constructor(*insect traits*){
    super(*unqiue to bees*)
}
}
*/

/*
1. General Class: Car
This base class will include properties and methods common to all types of cars.
*/

class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
    console.log(`${this.make} ${this.model} has started.`);
  }

  stop() {
    this.isRunning = false;
    console.log(`${this.make} ${this.model} has stopped.`);
  }
}
/*

2. Specific Class: Tesla
The Tesla class extends Car and adds properties and methods 
specific to electric vehicles, such as battery capacity.
*/

class Tesla extends Car {
  constructor(make, model, color, batteryCapacity) {
    super(make, model, color); // Call the super class constructor with the Car properties
    this.batteryCapacity = batteryCapacity; // Additional property unique to electric cars
  }

  charge() {
    console.log(`${this.make} ${this.model} is charging.`);
  }
}

/*
3. Another Specific Class: Truck
The Truck class also extends Car but adds properties
 relevant to trucks, such as cargo capacity.
*/

class Truck extends Car {
  constructor(make, model, color, payloadCapacity) {
    super(make, model, color); // Inherits properties from Car
    this.payloadCapacity = payloadCapacity; // Additional property specific to trucks
  }

  loadCargo(cargo) {
    if (cargo <= this.payloadCapacity) {
      console.log(
        `Loading ${cargo} units of cargo into ${this.make} ${this.model}.`
      );
    } else {
      console.log(
        `Cannot load ${cargo} units; exceeds capacity of ${this.payloadCapacity} units.`
      );
    }
  }
}

/*
Example Usage
Here's how you might create and use instances of these classes:
*/

// Creating an instance of Car
let myCar = new Car("Toyota", "Corolla", "Blue");
myCar.start(); // Outputs: Toyota Corolla has started.

// Creating an instance of Tesla
let myTesla = new Tesla("Tesla", "Model S", "Red", "100kWh");
myTesla.start(); // Outputs: Tesla Model S has started.
myTesla.charge(); // Outputs: Tesla Model S is charging.

// Creating an instance of Truck
let myTruck = new Truck("Ford", "F-150", "Black", 1300);
myTruck.start(); // Outputs: Ford F-150 has started.
myTruck.loadCargo(1000); // Outputs: Loading 1000 units of cargo into Ford F-150.

/*
Benefits of This Approach
- Modularity: Each class is focused on a specific type of car, making the classes easier to manage and extend.
- Reusability: Common functionalities are written once in the Car class and reused in Tesla and Truck.
- Extendibility: It's easy to add more specialized classes or add more features to existing classes without disturbing other classes.
- This example should help solidify your understanding of how inheritance works in JavaScript and how it can be
 applied to manage complexity in software design effectively.
*/
