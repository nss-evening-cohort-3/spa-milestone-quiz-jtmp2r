"use strict"
var CarLot = (function(showCar) {
  var displayCar = document.getElementById("car-view");
  var inputBox = document.getElementById("input");

  var carChoice = [];

  showCar.populatePage = function(cars) {
    cars.forEach(function(cars, i) {
      var carHold = carBuilder(cars, i);
      var loadCar = document.createElement("div");
      loadCar.innerHTML = (carHold);
      displayCar.appendChild(loadCar);
      // var car = document.getElementById(`car-card${i}`);
      // showCar.addClickEvent(car);
    });  
    CarLot.activateEvents();  
    CarLot.chooseBorder();
  }


    function carBuilder(cars, i) {
      var inventoryList = cars
      var carString = "";
      carString += `<div class="col-xs-4" id="car-card${i}"><h2>${inventoryList.make}</h2>`;
      carString += `<h3>${inventoryList.model}</h3>`;
      carString += `<h4>${inventoryList.color}</h4>`;
      carString += `<h4>${inventoryList.year}</h4>`;
      carString += `<p>${inventoryList.description}</p>`;
      carString += `<footer>Price: ${inventoryList.price}</footer></div>`;
      return carString;
    }
   

  CarLot.loadInventory(showCar.populatePage);

  return showCar;
}(CarLot))  
