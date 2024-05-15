/*
* WANTS AND NEEDS
- input from user about make,model,color
- press create btn, we want to call create class func and create a new instance of the car
- display (render) details about the car

- lets get what is written in the input of th emake input 
when we press the create car btn

- store our values
*/
cars = [];

const makeInputEl = document.querySelector("#make");
const modelInputEl = document.querySelector("#model");
const colorInputEl = document.querySelector("#color");
const priceInputEl = document.querySelector("#price");
const generalInputEls = document.querySelectorAll("input");
const createCarBtn = document.querySelector("button");
const carListUlEl = document.querySelector("ul");
const sortBySelectEl = document.querySelector("select");

createCarBtn.addEventListener("click", function () {
  if (
    !makeInputEl.value ||
    !modelInputEl.value ||
    !colorInputEl.value ||
    !priceInputEl.value
  )
    return alert("please fill out all info about the car");
  const car = new Car(
    makeInputEl.value,
    modelInputEl.value,
    colorInputEl.value,
    priceInputEl.value
  );

  cars.push(car);
  console.log(cars);
  makeInputEl.value = "";
  modelInputEl.value = "";
  colorInputEl.value = "";
  priceInputEl.value = "";
  const carEl = car.addCarToList();
  carListUlEl.appendChild(carEl);
});

class Car {
  // predefined method that gets called when we instantiate a class
  constructor(make, model, color, price) {
    this.make = make;
    this.model = model;
    this.isRunning = false;
    this.color = color;
    this.price = price;
    this.id = Car.nextCarId;
    Car.nextCarId++;
  }

  // variable on class itself
  // actual property that exist on the CLASS itself, not the instance of the obj
  // static is the syntax for creating a variable in classes
  static nextCarId = 1;

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
  //   add car to list
  addCarToList() {
    const newCarEl = document.createElement("li");
    newCarEl.innerText = `Car #${this.id}\n\n Make: ${this.make} \n Model: ${this.model} \n Color: ${this.color} \n Price: $${this.price}`;
    return newCarEl;
  }
}
console.log(cars);
// remove list item
carListUlEl.addEventListener("click", (e) => {
  console.log(e.target);
  e.target.remove();
});

sortBySelectEl.addEventListener("change", (e) => {
  if (e.target.value === "highest") {
    cars.sort((a, b) => b["price"] - a["price"]);
    console.log(cars)
  }
  if (e.target.value === "lowest") {
    cars.sort((a, b) => a["price"] - b["price"]);
    console.log(cars)
  }
  if (e.target.value === "id") {
    cars.sort((a, b) => a["id"] - b["id"]);
    console.log(cars)
  }
});
/*
2x2 grid
* Grid
left side form right side list of cars

- click on a car to delete it
hints: listen for clicks on ul, the el you click on will be available inside yhour click called
e.target. log this variable to see it 
- display car id
- add a price property and display that on the page as well 
- sort cars on the page by price or filter by certain properties 
- btn called paint next to the car and it will change the color of the car instance 

*/
