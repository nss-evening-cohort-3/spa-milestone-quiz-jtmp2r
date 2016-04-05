"use strict"
var CarLot = (function(showCar) {
  var displayCar = document.getElementById("car-view");
  var carChoice = [];

  showCar.populatePage = function(cars) {
    var inventory = cars.cars
    console.log("Hmmmm", inventory)
    var carString = "";
    for (var i = 0; i < inventory.length; i++) {
      var inventoryList = inventory[i]
      carString += `<div class="col-xs-4"><h2>${inventoryList.make}</h2>`;
      carString += `<h3>${inventoryList.model}</h3>`;
      carString += `<h4>${inventoryList.color}</h4>`;
      carString += `<h4>${inventoryList.year}</h4>`;
      carString += `<p>${inventoryList.description}</p>`;
      carString += `<footer>Price: ${inventoryList.price}</footer></div>`;
    };
    
    displayCar.innerHTML += carString;
  }

  showCar.clearInput = function() {
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
  }


  showCar.styleSheet = function(inventory) {
    console.log("class", inventory)
    for (var i = 0; i < inventory.length; i++) {
      document.getElementByClassName("col-xs-4").style.borderColor = cars[i].color;
    };
  }

  return showCar;

}(CarLot))  