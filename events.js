var Carlot = (function(carEvents) {

	carEvents.activateEvents = function() { 
    var car = CarLot.getter();
    console.log("Length", car.length)
  	for(var i = 0; i < car.length; i++) {
      console.log("somethin", car.length)
		  var carDom = document.getElementById('car-card' + [i])
      document.getElementById("input").addEventListener("keyup", carEvents.editDesc)
    }
  }  

	carEvents.newBorder = function(event) {
    CarLot.clearInput(); 
    carEvents.resetBorder();
    var card = event.currentTarget;
    card.classList.add("currentCard");
  }

  carEvents.resetBorder = function() {
    var card = event.currentTarget;
    var cars = document.getElementsByClassName("origBorder");
    for (var i = 0; i < cars.length; i++) {
      if (cars[i].className.includes("currentCard")) {
        cars[i].classList.remove("currentCard");
      }
    }
  }

  carEvents.editDesc = function(event) {
    var edit = event.currentTarget;
    carEvents.update(edit, input);
  }

  carEvents.update = function(input) {
    input = document.getElementById("input");
    var editTag = document.getElementsByClassName("currentCard");
    var curentId = editTag[0].id.split("car-card")[1];
    var editTag2 = document.getElementById("edit"+curentId);
    console.log(editTag2)
    editTag2.innerHTML = input.value;
  }



  return carEvents;
})(CarLot)