// object construction (you can add string/num/bool/function)
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 295,
  read: false,
  info: function () {
    return `${this.title} by ${this.author} , ${this.pages} pages`;
  },
};
console.log(book.info());

// object construction as function
function Person(name) {
  this.name = name;
}
// object prototypes & prototypal inheritance
Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
Player.prototype.getMarker = function () {
  console.log(`My marker is '${this.marker}'`);
};

// Every prototype object inherits from 'Object.prototype' by default.
// Object.getPrototypeOf(Player.prototype) should
// return the value of "Person.prototype" instead
// of "Object.prototype"
Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'
