class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }
// es6 allows you to define greet without having to use this.greet = function(){...}
  greet() {
    console.log("Well hello my friend, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

// module.exports adds person to an empty object and sends it to 'require' in another file
// module.exports = Person;
//
// export is the native es6 alternative to module.exports
export default Person;
