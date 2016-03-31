"use strict"
var CarLot = (function(showCar) {
  var displayCar = document.getElementById("car-view");
  var carChoice = [];

  
  showCar.carObj = function(carList) {
    console.log("list", carList)
    for (list in carList) {
      carChoice.push(carList[list]);
    }
  }

  showCar.populatePage = function(inventory) {
    // showCar.carObj(inventory)
    console.log("Hmmmm", inventory)
    var carString = "";
    for (var i = 0; i < inventory.length; i++) {
      var inventoryList = inventory[i];
      carString += `<h3>${inventoryList.make}</h3>`;
    	// cars += "<h3>" + inventoryList.color + inventoryList.make + "</h3> <br />" + "<h5>" + inventoryList.model + "</h5> <br />" + "<div>" + inventoryList.year + "</div> <br />" + "<div>" + inventoryList.description + "</div> <br />" + "<footer>" + "Price: " + inventoryList.price + "</footer>"
    };
    
    displayCar.innerHTML += carString;
  }

  return showCar;

}(CarLot))
