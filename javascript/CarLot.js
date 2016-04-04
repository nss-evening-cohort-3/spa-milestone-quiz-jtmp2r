var CarLot = (function() {
	var inventory = [];

	return {

		getter: function() {
      return inventory; 
  	},

		loadInventory: function() {
			var inventoryLoader = new XMLHttpRequest();

			  inventoryLoader.addEventListener("load", function() {
			  	inventory = JSON.parse(this.responseText);
			  	console.log("My Car", inventory);
			  	CarLot.populatePage(inventory)
			  })

			  inventoryLoader.open("GET", "inventory.json");
			  inventoryLoader.send();
		}
	}
}())

CarLot.loadInventory();