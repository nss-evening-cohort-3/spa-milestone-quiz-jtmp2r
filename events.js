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
    var card = event.currentTarget;
    card.classList.toggle("currentCard");
    console.log("event", event.currentTarget)
  }

  carEvents.editDesc = function(event) {
    var edit = event.currentTarget;
    carEvents.update(edit, input);
  }

  carEvents.update = function(input) {
    input = document.getElementById("input");
    var editTag = document.getElementsByClassName("currentCard");
    console.log("edit", editTag)
    var curentId = editTag[0].id.split("car-card")[1];
    console.log("id", curentId)
    var editTag2 = document.getElementById("edit"+curentId);
    console.log(editTag2)
    editTag2.innerHTML = input.value;
  }



  return carEvents;
})(CarLot)