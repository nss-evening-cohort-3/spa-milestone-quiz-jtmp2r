var CarLot = (function() {
	var inventory = [];

	return {

		getter: function() {
      return inventory; 
  	},

		loadInventory: function(callBack) {
			var inventoryLoader = new XMLHttpRequest();

			  inventoryLoader.addEventListener("load", function() {
			  	inventory.cars = JSON.parse(this.responseText);
			  	console.log("My Car", inventory.cars);
			  	CarLot.populatePage(inventory.cars);
			  	CarLot.chooseBorder(inventory.cars);
			  })

			  inventoryLoader.open("GET", "inventory.json");
			  inventoryLoader.send();
		}
	}
}())

CarLot.loadInventory();