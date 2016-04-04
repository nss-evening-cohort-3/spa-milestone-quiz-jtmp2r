"use strict"
var CarLot = (function(showCar) {
  var displayCar = document.getElementById("car-view");
  var carChoice = [];

  
  showCar.carObj = function(carList) {
    for (var list in carList) {
      carChoice.push(carList[list]);
    }
  }

  showCar.populatePage = function(cars) {
    // showCar.carObj(inventory)
    var inventory = cars.cars
    console.log("Hmmmm", inventory)
    var carString = "";
    for (var i = 0; i < inventory.length; i++) {
      var inventoryList = inventory[i]
      carString += `<h2>${inventoryList.make}</h2>`;
      carString += `<h3>${inventoryList.model}</h3>`;
      carString += `<h4>${inventoryList.color}</h4>`;
      carString += `<h4>${inventoryList.year}</h4>`;
      carString += `<p>${inventoryList.description}</p>`;
      carString += `<footer>Price: ${inventoryList.price}</footer>`;

    	// cars += "<h3>" + inventoryList.color + inventoryList.make + "</h3> <br />" + "<h5>" + inventoryList.model + "</h5> <br />" + "<div>" + inventoryList.year + "</div> <br />" + "<div>" + inventoryList.description + "</div> <br />" + "<footer>" + "Price: " + inventoryList.price + "</footer>"
    };
    
    displayCar.innerHTML += carString;
  }

  return showCar;

}(CarLot))