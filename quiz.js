"use strict"
var CarLot = (function(showCar) {
  var displayCar = document.getElementById("car-view");
  var inputBox = document.getElementById("input");

  // var edit = ;
  var carChoice = [];

  showCar.populatePage = function(cars) {
    var inventory = cars.cars
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
      loadCar.className = "addBorder";
      loadCar.innerHTML = carString;
      displayCar.appendChild(loadCar);
      var car = document.getElementById('car-card' + i)
      car.addEventListener("click", showCar.addClickEvent)
    };
  }
  
  showCar.addClickEvent = function(cars) {
      console.log("hello", cars)
      showCar.clearInput();    
      var inventory = cars.cars;
      for (var i in inventory) {      
        document.getElementsByClassName("addBorder")[i].style.borderWidth = "7px";
        document.getElementsByClassName("addBorder")[i].style.borderColor = "blue";
        document.getElementsByClassName("addBorder")[i].style.borderStyle = "solid";
      }
  }  
  
  showCar.editDesc = function() {
    edit.innerHTML = inputBox.value;
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
