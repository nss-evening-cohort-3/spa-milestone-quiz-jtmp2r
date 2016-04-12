var CarLot = (function(carColor) {



  carColor.chooseBorder = function() {
  	var carLook = CarLot.getter();
  	console.log(carLook)
    for (var i = 0; i < carLook.length; i++) {
      document.getElementsByClassName("col-xs-4")[i].style.borderColor = carLook[i].color;
      document.getElementsByClassName("col-xs-4")[i].style.borderStyle = "dashed";
    };  
  }

  carColor.clearInput = function() {
	  document.getElementById("input").value = "";
	  document.getElementById("input").focus();
	}


  return carColor;

}(CarLot))