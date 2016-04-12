var Carlot = (function(carEvents) {

	carEvents.activateEvents = function() { 
    var car = CarLot.getter();
    console.log(car.length)
  	for(var i = 0; i < car.length; i++) {
     console.log("somethin", car.length)
		 var carDom = document.getElementById('car-card' + [i])
      carDom.addEventListener("click", function() {
      	carEvents.addClickEvent(carDom);
      })  
      document.getElementById("input").addEventListener("keyup", function() {
        carEvents.editDesc();
      })
    }
  }  

	carEvents.addClickEvent = function(cars) {
	    CarLot.clearInput(); 
	      cars.style.borderWidth = "7px";
	      cars.style.borderColor = "blue";
	      cars.style.borderStyle = "solid";
	  }

  carEvents.editDesc = function(event) {
    // edit = event.target;
    carEvents.update(edit)
  }

  carEvents.update = function(input) {
    var car = CarLot.getter();
    input = document.getElementById("input");
      var editTag = document.getElementsByTagName("p");
      editTag.innerHTML = input.value;
  }



  return carEvents;
})(CarLot)