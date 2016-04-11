var Carlot = (function(carEvents) {

	carEvents.activateEvents = function() { 
    var car = CarLot.getter();
    console.log(car.length)
  	for(var i in car) {
		 var carDom = document.getElementById('car-card' + i)
      carDom.addEventListener("click", function() {
      	console.log("somethin", carDom)
      	carEvents.addClickEvent(carDom);
      })	
    }
   }  

	  carEvents.addClickEvent = function(cars) {
	  	console.log("check", cars)
	    CarLot.clearInput();
	    var inventory = cars; 
	      cars.style.borderWidth = "7px";
	      cars.style.borderColor = "blue";
	      cars.style.borderStyle = "solid";
	  }   


  return carEvents;
})(CarLot)