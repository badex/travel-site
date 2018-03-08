// var $ = require('jquery');
// var Person = require('./modules/Person');
// import is the es6 way of importing a module
/* import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes.");
  }
}
var john = new Person("John Doe", "Blue");
john.greet();

var jane = new Adult ("Jane Smith", "Orange");
jane.greet();
jane.payTaxes(); */

import MobileMenu from './modules/MobileMenu';

var mobileMenu = new MobileMenu();
