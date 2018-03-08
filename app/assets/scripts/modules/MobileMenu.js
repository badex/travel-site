import $ from 'jquery';

class MobileMenu {
  constructor() {
    // $('.site-header__menu-icon').click(function() {
    //   console.log("Mobile Menu Icon clicked");
    // });
    this.siteHeader = $(".site-header");
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  events() {
    // use bind to point 'this' at this object/Class
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    // 'this' no longer would normally refer directly to to the DOM element
    // that was clicked. We use bind in events() to point 'this' at this Class
    // instead
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
}

export default MobileMenu;
