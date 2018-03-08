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
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();

new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
