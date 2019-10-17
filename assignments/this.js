/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global binding. when in the global scope "this" will be the window object.
* 2. implicit binding. when an object is called with a dot infront of it "this" refers to the object befre that dot.
* 3. new binding. When you use a constructor function "this" refers to the object created by that function 
* 4. explicit binding. when you use .call() or .apply()
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function greetMe(name) {
    console.log('Hello, ' + name);
    console.log(this);
}

greetMe('John');

// Principle 2

// code example for Implicit Binding
const friendlyGreeting = {
    greeting: 'Howdy,',
    saysHowdy: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHowdy('Jedd');

// Principle 3

// code example for New Binding

function GameObject(attributes)  {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
    }

// Principle 4

// code example for Explicit Binding

function CharacterStats(attributes){
    GameObject.call(this,attributes);
    this.healthPoints = attributes.healthPoints;
    
    
  };