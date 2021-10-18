function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Inventory Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU: \n view - view all products \n update - update existing product in inventory \n exit - exit the program");
    window.console.log("");
}

function view(inventory) {
    "use strict";

    inventory.sort(function(prod1,prod2) {
        return prod1[0]-prod2[0]
    });

    inventory.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ")" + " $" + product[3]);
    });
    window.console.log("");
}

function update(inventory){
    "use strict";
    var users_choice = null;
    
    var skuNumber = parseInt(window.prompt("Enter the sku number of the product"), 10);
    var quantity = parseInt(window.prompt("Enter the new quantity"), 10);
   

    inventory.forEach(function (product){
        if(product[0] === skuNumber){
            users_choice = product;
        }
    });

    if(users_choice != null) {
        if(!isNaN(quantity)){
            users_choice[2] = quantity;
            window.console.log("Updated the Quantity");
        }
        else {
            window.console.log("Enter a valid Quantity number...");
        }
    }
    else{
        window.console.log("Product with sku number:" + skuNumber + " does not exist"); 
    }
}

function main() {
    "use strict";
    var inventory = [
        [4824, "Shirt", 10, 15.99],
        [6343, "Jeans", 22, 39.99],
        [3223, "Socks", 36, 9.99],
        [2233, "Hat", 12, 14.99],
        [9382, "Jacket", 5, 49.99]];
    
    displayMenu();
    var canQuit = false;

    while(!canQuit){
        var command = window.prompt("Enter command:");
        if(command !== null){
            command=command.toLowerCase();
            switch(command){
                case "view":
                    view(inventory);
                    break;
                case "update":
                    update(inventory);
                    break;
                case "exit":
                    canQuit = true;
                    break;
                default:
                    window.alert("You have entered Invalid Command");
                    break;
            }
        }else {
            break;
        }
    }
    window.console.log("Program Terminated!");
}
main();