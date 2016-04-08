"use strict"
var CarLot = (function(showCar) {
  var displayCar = document.getElementById("car-view");
  var carChoice = [];

  showCar.populatePage = function(cars) {
    var inventory = cars.cars
    var carString = "";
    for (var i = 0; i < inventory.length; i++) {
      var inventoryList = inventory[i]
      carString += `<div class="col-xs-4" id="track"><h2>${inventoryList.make}</h2>`;
      carString += `<h3>${inventoryList.model}</h3>`;
      carString += `<h4>${inventoryList.color}</h4>`;
      carString += `<h4>${inventoryList.year}</h4>`;
      carString += `<p>${inventoryList.description}</p>`;
      carString += `<footer>Price: ${inventoryList.price}</footer></div>`;
    };
    
    displayCar.innerHTML += carString;
    displayCar.addEventListener("click", function() {
      showCar.clearInput();
      for (var i in inventory) {      
        document.getElementsByClassName("col-xs-4")[i].style.borderWidth = "7px";
        document.getElementsByClassName("col-xs-4")[i].style.borderColor = "blue";
        document.getElementsByClassName("col-xs-4")[i].style.borderStyle = "solid";
      }
    });
  }
  
  showCar.clearInput = function() {
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
  }

  showCar.chooseBorder = function(cars) {
      var inventory = cars.cars;
      for (var i = 0; i < inventory.length; i++) {
        document.getElementsByClassName("col-xs-4")[i].style.borderColor = inventory[i].color;
        document.getElementsByClassName("col-xs-4")[i].style.borderStyle = "dashed";
      };  
  }

  return showCar;
}(CarLot))  
