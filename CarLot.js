var CarLot = (function() {
	var inventory = [];

	return {

		getter: function() {
      return inventory.cars; 
  	},

		loadInventory: function(callBack) {
			var inventoryLoader = new XMLHttpRequest();

			  inventoryLoader.addEventListener("load", function() {
			  	inventory = JSON.parse(this.responseText);
			  	console.log("My Car", inventory.cars);
			  	callBack(inventory.cars)

			  })

			  inventoryLoader.open("GET", "inventory.json");
			  inventoryLoader.send();
		}
	}
}())
