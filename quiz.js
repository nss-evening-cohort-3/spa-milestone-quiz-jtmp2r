"use strict"
var CarLot = (function(showCar) {
  var displayCar = document.getElementById("car-view");
  var inputBox = document.getElementById("input");

  var carChoice = [];

  showCar.populatePage = function(cars) {
    var inventory = cars
    for (var i = 0; i < inventory.length; i++) {
      var carString = "";
      var inventoryList = inventory[i]
      carString += `<div class="col-xs-4" id="car-card${i}"><h2>${inventoryList.make}</h2>`;
      carString += `<h3>${inventoryList.model}</h3>`;
      carString += `<h4>${inventoryList.color}</h4>`;
      carString += `<h4>${inventoryList.year}</h4>`;
      carString += `<p>${inventoryList.description}</p>`;
      carString += `<footer>Price: ${inventoryList.price}</footer></div>`;
      var loadCar = document.createElement("div");
      loadCar.innerHTML = carString;
      displayCar.appendChild(loadCar);
    };
    CarLot.activateEvents();  
    CarLot.chooseBorder();
  }
   

  CarLot.loadInventory(showCar.populatePage);

  return showCar;
}(CarLot))  
