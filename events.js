var Carlot = (function(carEvents) {

  carEvents.addClickEvent = function(cars) {
    console.log("hello")
    showCar.clearInput();
    var inventory = cars.cars;
    for (var i in inventory) {      
      document.getElementsByClassName("addBorder")[i].style.borderWidth = "7px";
      document.getElementsByClassName("addBorder")[i].style.borderColor = "blue";
      document.getElementsByClassName("addBorder")[i].style.borderStyle = "solid";
    }
  }  
  
  carEvents.clearInput = function() {
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
  }





  return carEvents;
}(Carlot))