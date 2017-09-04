// * Create a `Food` object.
function Food(){
}

// All food can be juiced. Add a method to `juice()` the food.
Food.prototype.juice = function(){
  console.log('juicing! '+ this.name);
}

// Add a method to print the name of the fruit called `sayName()`.
Food.prototype.sayName = function(){
  console.log('I am food and my name is '+ this.name);
}

// Create a `fruit` object that inherits from Food. Fruits have names. Make sure to save them.
function Fruit(){
}
Fruit.prototype =Object.create(Food.prototype);


// Create an `Apple` object that inherits from fruit.Define an `Apple` constructor that takes the name of the apple. `Apple` needs to have a boolean `hasSkin` member. Add a method to remove the skin and set `hasSkin`. Also, print the variety of the apple and tell the user the skin has been removed.Apples cannot be juiced until their skin is removed. Be careful!

function Apple(name){
  this.name=name;
  this.hasSkin = true
  this.peel = function (){
    console.log("skinning "+this.name);
    this.hasSkin = false
  }
}

Apple.prototype=Object.create(Fruit.prototype)

var Fuji = new Apple("Fuji");
var Gala = new Apple("Gala");

// * Create a `Vegetable` object that inherits from Food. Add a method to `wash()` your vegetables. Print that the vegetable is being washed.

function Vegetable(name){
  this.name=name;
  }
//where it inherits
Vegetable.prototype=Object.create(Food.prototype)

Vegetable.prototype.wash = function(){
  console.log("washing "+this.name);
}
// Create a `Carrot` object that inherits from `Vegetable`.
var Carrot= new Vegetable("Carrots");

var x =
  Fuji.sayName()+
  Gala.sayName()+
  Fuji.peel()+
  Gala.peel()+
  Fuji.juice()+
  Gala.juice()+
  Carrot.sayName()+
  Carrot.wash()+
  Carrot.juice()

