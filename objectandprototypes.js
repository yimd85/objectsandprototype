// * Create a `Food` object.
function Food(whattoeat){
  this.whattoeat =whattoeat;
}

// All food can be juiced. Add a method to `juice()` the food.
Food.prototype.Juice = function(){
  console.log('juicing! '+ this.strain);
}

// Create a `fruit` object that inherits from Food. Fruits have names. Make sure to save them.
function fruit(name){
  this.name=name;
}

//where it inherits
fruit.prototype =Object.create(Food.prototype);

// Add a method to print the name of the fruit called `sayName()`.
Food.prototype.sayName = function(){
  console.log('I am food and my name is '+ this.strain);
}

// Create an `Apple` object that inherits from fruit.Define an `Apple` constructor that takes the name of the apple. `Apple` needs to have a boolean `hasSkin` member. Add a method to remove the skin and set `hasSkin`. Also, print the variety of the apple and tell the user the skin has been removed.Apples cannot be juiced until their skin is removed. Be careful!
function Apple(strain){
  this.strain=strain;
}
//where it inherits
Apple.prototype=Object.create(fruit.prototype)

Food.prototype.hasSkin = function(){
  console.log("skinning "+this.strain);
}

Fuji = new Apple("Fuji");
Gala = new Apple("Gala");

// * Create a `Vegetable` object that inherits from Food. Add a method to `wash()` your vegetables. Print that the vegetable is being washed.

function Vegetable(strain){
  this.strain=strain;
  }
//where it inherits
Vegetable.prototype=Object.create(Food.prototype)

Food.prototype.wash = function(){
  console.log("washing "+this.strain);
}

// Create a `Carrot` object that inherits from `Vegetable`.
Carrot= new Vegetable("Carrots");


var x =
  Fuji.sayName()+
  Gala.sayName()+
  Fuji.hasSkin()+
  Gala.hasSkin()+
  Fuji.Juice()+
  Gala.Juice()+
  Carrot.sayName()+
  Carrot.wash()+
  Carrot.Juice()
