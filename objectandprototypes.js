// * Create a `Food` object.
function Food(whattoeat){
  this.whattoeat =whattoeat;
}

// All food can be juiced. Add a method to `juice()` the food.
//all methods need to be lowercased. So in this case it would be "juice"
Food.prototype.juice = function(){
  console.log('juicing! '+ this.strain);
}

Food.prototype.sayName = function(){
  console.log('I am food and my name is '+ this.strain);
}

Fuji = new Apple("Fuji");
Gala = new Apple("Gala");

// Create a `fruit` object that inherits from Food. Fruits have names. Make sure to save them.
//Object constructors should be uppercased

//one fruit has one name so 'name' would be a better argument and
//property name. It's a small different but it makes things a lot clearer for
//others reading your code.

function Fruit(name){
  this.name=name;

}

//where it inherits
Fruit.prototype =Object.create(Food.prototype);

// Add a method to print the name of the fruit called `sayName()`.

Fruit.prototype.peel = function(){
  console.log("skinning "+this.strain);
}
// Create an `Apple` object that inherits from fruit.Define an `Apple` constructor that takes the name of the apple. `Apple` needs to have a boolean `hasSkin` member. Add a method to remove the skin and set `hasSkin`. Also, print the variety of the apple and tell the user the skin has been removed.Apples cannot be juiced until their skin is removed. Be careful!
function Apple(strain){
  this.strain=strain;
}
//where it inherits
Apple.prototype=Object.create(Fruit.prototype)


// * Create a `Vegetable` object that inherits from Food. Add a method to `wash()` your vegetables. Print that the vegetable is being washed.

function Vegetable(strain){
  this.strain=strain;
  }
//where it inherits
Vegetable.prototype=Object.create(Food.prototype)


Vegetable.prototype.wash = function(){
  console.log("washing "+this.strain);
}
// Create a `Carrot` object that inherits from `Vegetable`.
Carrot= new Vegetable("Carrots");


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
