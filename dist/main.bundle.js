webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n  <div id=\"notif-banner\" class=\"row notif-banner hide\">\n    <div class=\"tick-notif\"></div>\n    <div class=\"tick-label\">Maaltijd toegevoegd</div>\n  </div>\n  <div class=\"banner-info\">\n    <div class=\"container\">\n      <div class=\"logo\">\n        <div class=\"ribbon\">\n          <div class=\"ribbon-fold\"><h1> <a>Eethuis Scharlo</a></h1></div>\n        </div>\n        <h2>100% Halal</h2>\n      </div>\n      <!--navigation-->\n      <div class=\"top-nav\">\n        <nav class=\"navbar navbar-default\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n          </div>\n          <!-- Collect the nav links, forms, and other content for toggling -->\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-center cl-effect-14\">\n              <li><a [routerLinkActive]=\"['active']\" [routerLink]=\" ['/home'] \">Huis</a></li>\n              <li><a [routerLinkActive]=\"['active']\" [routerLink]=\" ['/menu'] \">Menu</a></li>\n              <li><a [routerLinkActive]=\"['active']\" [routerLink]=\" ['/winkelwagen'] \">Winkelwagen</a></li>\n              <li><a [routerLinkActive]=\"['active']\" [routerLink]=\" ['/contact'] \">Contact</a></li>\n            </ul>\n            <div class=\"clearfix\"> </div>\n          </div>\n        </nav>\n      </div>\n      <!--navigation-->\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n<ng2-toasty></ng2-toasty>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: 'Roboto-Regular';\n  background-color: #fff; }\n\n/*--baner--*/\n.banner {\n  background: url(" + __webpack_require__("../../../../../src/app/assets/images/1.png") + ") no-repeat 0px 0px;\n  background-size: cover;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  -ms-background-size: cover;\n  min-height: 450px;\n  position: relative; }\n\n.banner-info {\n  background: url(" + __webpack_require__("../../../../../src/app/assets/images/dott.png") + ") repeat 0px 0px;\n  background-size: 4px;\n  -webkit-background-size: 4px;\n  -moz-background-size: 4px;\n  -o-background-size: 4px;\n  -ms-background-size: 4px;\n  min-height: 450px;\n  padding: 2em 0; }\n\n.logo {\n  text-align: center; }\n\n.ribbon {\n  width: 35%;\n  position: relative;\n  background: #fee8ce;\n  height: 70px;\n  margin: 0px auto;\n  left: 0;\n  top: 0; }\n\n.ribbon::before, .ribbon::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 0;\n  border: 35px solid #fee8ce;\n  z-index: 1; }\n\n.ribbon::before {\n  left: -75px;\n  border-right-width: 60px;\n  border-left-color: transparent; }\n\n.ribbon::after {\n  right: -75px;\n  border-left-width: 60px;\n  border-right-color: transparent; }\n\n.logo h1 {\n  font-size: 3.5em;\n  font-family: 'OleoScript-Regular';\n  letter-spacing: 3px;\n  padding: 0.2em 0;\n  text-shadow: 1px 3px 0 #9BC0C7; }\n\n.logo h1 a {\n  color: #fff; }\n\n.logo h2 {\n  font-size: 1.4em;\n  color: #FFF;\n  letter-spacing: 2px;\n  font-family: 'OleoScript-Regular';\n  margin-top: 2em; }\n\n.banner-bottom {\n  background-color: #fee8ce;\n  min-height: 350px;\n  position: relative; }\n\n.banner-text {\n  background-color: #fff;\n  padding: 4em;\n  display: inline-block;\n  text-align: center;\n  position: absolute;\n  top: -16%;\n  left: 34.5%; }\n\n.banner-text h3 {\n  font-size: 4em;\n  font-family: 'OleoScript-Regular';\n  color: #68686a; }\n\n.banner-text p {\n  font-size: 1em;\n  color: #68686a;\n  margin: 1em 0 2em;\n  text-align: center;\n  letter-spacing: 8px;\n  font-weight: 700; }\n\n.banner-text a {\n  font-size: 1.1em;\n  text-align: center;\n  color: #68686a;\n  border: 1px solid #000;\n  padding: .3em 1.5em;\n  position: relative; }\n\n/*--top-nav--*/\nnav.navbar.navbar-default {\n  border: none;\n  background: none; }\n\ndiv#bs-example-navbar-collapse-1 {\n  padding: 0;\n  width: 44%;\n  margin: 7em auto 0; }\n\n.navbar-default .navbar-nav > li > a {\n  color: #FFF;\n  font-size: 1.2em; }\n\n.navbar-nav > li > a {\n  padding: 10px 25px;\n  line-height: 1.5em; }\n\n.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n  color: #AEE3EF; }\n\n.navbar-nav > li > a.active {\n  color: #AEE3EF; }\n\n.tick-notif {\n  content: url(" + __webpack_require__("../../../../../src/app/assets/images/tick-notif.png") + ");\n  max-height: 24px;\n  width: 24px;\n  float: left;\n  padding-bottom: 5px;\n  padding-right: 5px; }\n\n.notif-banner {\n  position: fixed;\n  top: 1em;\n  right: 1em;\n  max-height: 35px;\n  float: right;\n  z-index: 1000;\n  min-width: 180px;\n  margin: 5px;\n  background-color: white;\n  border-radius: 5px;\n  padding: 10px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  transition: all 200ms ease-in-out; }\n\n.tick-label {\n  color: #34b634;\n  font-weight: bold; }\n\n.show {\n  opacity: 1 !important;\n  transition: .1s ease-in-out all; }\n\n.hide {\n  opacity: 0;\n  transition: .1s ease-in-out all; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_webstorage__ = __webpack_require__("../../../../ng2-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu_component__ = __webpack_require__("../../../../../src/app/pages/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_shopping_card_shopping_card_component__ = __webpack_require__("../../../../../src/app/pages/shopping-card/shopping-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_api_calls_service__ = __webpack_require__("../../../../../src/app/providers/api-calls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_notification_service__ = __webpack_require__("../../../../../src/app/providers/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/************** component imports **************/








/************** Providers imports **************/


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_shopping_card_shopping_card_component__["a" /* ShoppingCardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_welcome_welcome_component__["a" /* WelcomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* PreloadAllModules */] }),
                __WEBPACK_IMPORTED_MODULE_5_ng2_webstorage__["b" /* Ng2Webstorage */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_toasty__["b" /* ToastyModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot()
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6_ng2_toasty__["b" /* ToastyModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_16__providers_api_calls_service__["a" /* ApiCallsService */], __WEBPACK_IMPORTED_MODULE_17__providers_notification_service__["a" /* NotificationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* unused harmony export AppRouting */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_menu_menu_component__ = __webpack_require__("../../../../../src/app/pages/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_shopping_card_shopping_card_component__ = __webpack_require__("../../../../../src/app/pages/shopping-card/shopping-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact.component.ts");





var ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_2__pages_menu_menu_component__["a" /* MenuComponent */] },
    { path: 'winkelwagen', component: __WEBPACK_IMPORTED_MODULE_3__pages_shopping_card_shopping_card_component__["a" /* ShoppingCardComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact_component__["a" /* ContactComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__["a" /* HomeComponent */] },
];
var AppRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(ROUTES, { initialNavigation: false, useHash: true });


/***/ }),

/***/ "../../../../../src/app/assets/images/1.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.444f96e4a5c906f3fc04.png";

/***/ }),

/***/ "../../../../../src/app/assets/images/add-to-cart.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfdCwUJHwoAJLh9AAADpklEQVRIS51WaYhNYRh+zp2dwYw9a9lGlpS9lK0s+WGXJfGDUkrZSkqSkmJEfiiFLKEsifhDyJoUhTAzRllnDGbMjDFjZpjjec57vu419w7DU6d7zve93/O+37tezyfQFLR1/wRQeAv4kA9Ufbb1zPZA5xygz1hg5ELA82w9AZpWcHQ58OA0kJEFJKcBScmUjtie3wD8/AH8qAVqyoFh84AlB2yvEeIV5F0H9s8FWpA4JcOsixVp/C3U1wDVVLTiDNB/QrhoCE0KcfcwsG8G0KYzkNoiXCRE6p5E30mpJr9rInB1r62FiN4g7xrJZwJtewSfARzBnyBXZbQGpm6gy+qB0ldAj6HAgEnBdlTBmnZmeQP9K982F9VfgFUXgd5jwgXizHpg+tbgVqZAAc2n73XVlu3gD5xMJXWh9F/wvRLeAnOLX3ADqCqFd3qdxWLpISpoaPCxmgHN7s7NT8COIkYmKTjwz1idDaRlAumtgPL3wJ5yBvn+SUtF+TvCVCy8bcK134Cip0DJi6af4ufAtzKTLylgOtMDGW3MQHGSOxmFNy3PFYpUpuW9Y0C/cbSkJbBlENC6kxEkwtePwObHdGtb4Mml39NanOSOBBWqIhKS04FHF+xdGL3YrtuqQ/yTyaTI7gZ0pRHCYyoQqYM4yR0Jyl8V6vJaGwqWMIJtoI5FlAj1zLRB08IP4s0Dnk0JPwhxkvv3QhNSWDCKizCYBBUMekVx/FP6Ghg4xeSeXbFCc3XjfgnPzx3vo7LENAb+Yx0w1ZD7IRRpBk6tpWvPR6tfMRAP4xcJuqKq0UGKlAXOTc2B4hbrf0Gc5Pb8e8d9nNtowXRXkwW1VfB7jWZl/7S1RKAh3qeX7KiVVMAUFXRWPFqbtb1RoQmxSmoqaAkrWtYpwxx8KlWdSDadfciRCzonfHkbFpqE1M/Vch0kpAIaMh3+koNADste+ylUJPeppczbBczcRgPY4NS/3DnxSVacfI9vdqBAXTUwfD4we3uwFeDIMotLHS3fySxy0C039WVtdDRyBbeCCbKbiUJE03QFp1cZryWom45aZO8Oo1h0jAt6DgsXQqg1ZHUxYtkqDg2eEFEF/Tks1BXL3nA1ptgcCtht1QrePQkXYlDOG8l6nRVHzFRrYmTOsTSbuxP+gMnwHp4FLufasFfQs7oC8/dYSz++kj2JdaSgJxiZ8QocNCPuHLIGmE43aEa7oS8XatDoV65RS2n20I+FttQ21HH/628L8AuITH1R7O8OtwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/app/assets/images/chef.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "chef.5e4388f1908ee6b5f24a.jpg";

/***/ }),

/***/ "../../../../../src/app/assets/images/doner.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "doner.f861fccc249398a6ec47.jpg";

/***/ }),

/***/ "../../../../../src/app/assets/images/dott.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/app/assets/images/raise.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAUzSURBVEhLZVZdiFVVFP72+bvnnvlXr82YYKiVOZLmoA+Z9BJkKkVQkNlLL/09FAQ+mS89REE/Lwk9FIYvRfYfmFAvBSVmDphOUpRaiM4ojnNnxnvP/+lb68y5M+mC4br3Wfvba3/rW2tpChpo8iN/lmXJUi3Pc5wc/xZnJ3/BxMxZtJNrKGDQ5fWjEazE6iWbsWHZdnoaApQ/YnLOGFP+yQVZliFJEvi+rw5JkuKz0/swduU7eE4dJvXgug6MzcsJlMQEcFJkRYwwbmFd40HsGnlNz8ZxrMCu6+ra8LYiiqIO+B/jR3Fw9CUE9S54to80Aiz6ysPSPEUaFqjVPYLwrpx7CV/uhIizFnYNv4M1g/d2XiKBW0JLBX7s3Oc4cOJ59HUvInhdwW3XKHiYzGLAWYFli1ciymZIQ4GM4G7NqK+PAXw4+gJOXPpKscIwnKdINiRyAV/cM8QIjEYq4IbgcdrGusXb8cj6PXr48Jm3cfyfrxF0BUqZXCRm86VT4Th2D7+Ltbdu0T3NaErOD46+iEU9g1yV4NYcuBxtt0NsXLFNXHVjVf8WGDe5AVx4oQCwFB+dfln3xPSCQ0xoUO/mZ4u0lJFXYpLLHNKQF6mu4ygjpR6xS4rESnD68qzj2fC9Oj49tU/3rJyZ+l3Uogmdp0WiSwguHEtC0yxFHGbwfFs/ZnyAmILL9wVnXauOE+cPl7I/eemwSrFUyzwtCQ+4fnm4yAylWYGLFMvXdCK/gVLBqgeB1pB1dvI4ifRgOUJLQbm1MT1zDbHVRCuZwvWoiZnWtfIymkSeZCEiNFl4TUzPTiEqmgizKT2rlNLXtT38ffUXmP0/P1VMR5dhk3SR4t1LHtaE5ki14NIkI7iF5b1ryWcp58xq4+L0GUTtFLVaDTYL0Bgbo+eP4NTVb+C73ayBHH3+LTBv/rCzyAiWsYgG7BV4buv7CiJvjcMUXt3RZRwl3MoVUNedfJSml9H3g1+fwcT0OVawA6/mMChkCiZPk0grE7VU4PlcQivwVqvNwzeDi+UZw6C6HI+wFJDZf3R3MTV7BY5rsUJnMTL0qOrcZzsQFSRMaJKHWNnYCN/pRrsVKkUTrT9hGxet620m1IfDKjt18XvtBt3dvZR1hh6vAfPJyX3FX1d/okON5S8l3tIiKnWuQWlCn918AMuDEaVFuut7x56Gl/fOvZreJMLkHgKqRyyOI9y59D5Yq5ZsQsquKODyNHGou32ooQ8Bf3uCfnS5/QhJQ0WLZcgvwXt7BtTHt/tRM/SfA5cCTLIYqxqbYN0ztIMtt83NXOVVOYhVRZREOauX/JefNQdujcrhv6WjKuc3nM2sFjYM7mAwrI7hxgNsuawOfrup/OeKyLbKtSS0XqdcDWkhuPhLK1l4VnK0fnC7dlNLPjw58rr285SDRKwDvqAvGdJSqUUS+j9wWgVuuVKsIXbevlcvLd9Je2L4LTSjcQJywb2FvcWxalpElRRFLYbVfzOlwHQ4gcfWvFHOGH7WeSBjznM9HL/4Bb4ce1Vbrs2uKJHLUaEps2exrO8u1fmFyTPo7upV0IWRN8PL2HbbHmy9Y5fuiRmONZ3J1Qwdu/AjPh7bw5YbsCuWI1MiNbwqSVNNqIxMsXnOZWS28TgjX7f8ft2TGhJcncmSDDEZc9X4PPTbXoz+e4RzIiDnnMGFgyK1yDlVwwTIkBIpakKHHsLO1a+USqMJeIXVGZl6m2S9mjQ0AZJ2Ll1xYuYc2umk7gfuIizt4n9bGps7alEuyziR8qW2bXPf4D88mcYL9LEsEAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/app/assets/images/reduce.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALeSURBVEhLrVVLaxNRFP7m5v0wSaNFKFqwXfiAoghCXailILqQUoogqPgLXLhx4aabIiK4EUQqIiKIGy2uhELB50qxC60i1EdFsFTb1CaTZycz4zk3EzqZTJJa88GdmXvnnvPde+53zlVMAlpgZkHDt+Uy0kUTQgE2hwV2dnrRk/RaMxqjIcGCquPaqyyez5UQ8CjwCkjnPNmgh6aTMfWH9wRx8VCUvqnjAleCy89UTHwoIEkr9XvYkbuxQaZFDciUDFw6EsXJvrD1Zw11BCP3U1jKG4j6lYaOnWAXKbIZ6Ang6vG4NVpBDQE7X6E4h3zrc+zESsHAYG8AY0dj1giF1Xpj7GlGrnyjzhmJkMDkbBFTX4rWiEUwn9Hx+GNRhuV/sSUiMDqlWj2LgNXCB7remDeDIB8+EsaDd/lKnx8vv5ekWtoFDvOjmYL8Fu8piVjnbqvXSfDlFo2l6oSHfP1IU6IQxBxlKCeRE6WySeMK4kGBWMC9JegfJxwvxA5eq58W/TVVhnJvOmvenc4j7F9j0XRTloHx4YQ10hwDtxcRprDYo5AuGrh+Ig7hoVU6N8kl4VdWl7rmiX/o7dZUyuDPS2VZOpzgIfatTM4WTC4Nm2jLdvC2ubi52NaAIkFhrD/DZcqpiTNJiN1UFVcr51EDZmfpcuVs1ji5nM65OLAAumIeiO6EV+rWTQ0bBR/8gW1++S3jcqovhILWPgJ11cS5/ZXKKgnOH4xKgnbsghXYFRPo327bAePKsRgWc0bLQ20Gjj37uDPSYY3YCAZ7gzi9N4xUTpcT/xVsM68auDEURwcdfBV1F8746xxuvclha1RIJbUCW2ukGL5wbg4l0N9dCU0Vrlfmp98aLjxJUyKZiFCGssqcUuTzYnlnKBF3kdQ56yO2alCFK0EVL+jCf0hV8e1PTYZA8I5oNidhkIgP7wjg7L4QEfgsi3o0JbCDywKXDq73nXSp+L2twwcAfwFgjF51AtKJ6gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/app/assets/images/remove.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAK7SURBVEhLvZbLK+1RFMc/jvejPLqSjIQoM8kAM0V5JEpmBmRAIgOvzAxkIhPFP8BAuhNlgokMhExkoJgjr+T9uvf3PXuf69jnx+3euvdTp/P7rb3Pd+299lprn6gfHnzFzQ1sbMDhIVxcgKanp0N+PpSXQ1qanejP5w729mB8HA4OIDkZYmIgEDBjb2/w8gJ3d5CbC8PDUFpqxhz8HfT3w/o6ZGQY4agoO+Cgn8rR5aVxMDtrB96JdFBbC7e3ZtV/gnYTHQ1ra9Zg+OigocGIJyRYwx/y9GR2u7JiDV5U7TeMjcHV1d+Li7g442RgwBpCDk5O4Pt3SEkJvn5AW1cmuUelnerjotAqTMo6D+NgctIcqHuY2lFrKwwNwenpuxM99/RAR4c5YBdpSdPDOFhdhfj44OMvtNXKSujqgro66OuDszM4P4f2dmhpgbY2qKmBx0f7I0tsLGxuBh8D7O8bcXf1ygjVQgiJNTdDVRV0d1ujx+6uSeVwpJWUBFtbnoOjI+PRRQ6en6G62ho8RkZM8YWorzfnoLkucuppB4IxDFWoi7JChaQQuTQ1GXE3tCGk6Wl/ohyGDjYx0b6EoRC4meVDINi41Fv80OEpdRcXrSGMuTn49g0eHqzBQZqedoC8PBNrl9dXk9NLS9bgMToKvb32xUOOtUCF0UU2TztAcbFZqbtdOVCnDDE9bdJ5exsmJqzRo7DQzA1HWirQsjLbiwYHYWcnsk1cX0NjI+TkwNQUZGYau2qhs9OEZ34+8k5QDRUUwMyMdaBWoYLJzo6sh/t7E0+3u2qFmuuXAMfHsLAQvJRMFmVlmSJSz3GRgF/rVhb5iSt1VYy68Tz+Y7sWyhiJ+3XJ36GQaa1h4iKy0JaXoaTEtHClb9gGI9CY5qi7FhVF3GYi8soM8U8v/XC++ttSUQGpqXaiH/ATHQkqyASxbBoAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/app/assets/images/tick-notif.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAvCAYAAAChd5n0AAAABHNCSVQICAgIfAhkiAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAACXBIWXMAABJ0AAASdAHeZh94AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABQRJREFUaEPVmE1MU1kUx/+vfA4gdgYCCqMtOpQP5cPYjFEjkiAmbowLo241ETckujDRxIQFCxfGhS40UWNi3BnDzsQQWYgxkYXM8GmhKN8TYCAQIBVqgTfnvHc7vL6nldLX0v6SF3rPLe+d/zn3nHv7JJlAHHN29Czal9sR10IyPmXA4/MgNSkVFmGLK6ZXpiF1SfCseoA1oMXeEn9CWj2tyOnOgeL5KtCQ34CjaUcBXlrxwr2ZezLaIaObrk7INUM1YkaW46ZGLv5zEc/+fQYk0YA8zk7KxnTxtDpJxIWQI4NH8GHxA5BIA/aWLrks0O2YF2Jz2zC6PAok0IA99QFz5XOwJliVeT8xXexpn9IMIloKWwwimJgVIvVIWFpdUkUwK8CtvFuoyagRhkBicmlJ3ZL6wR9marOHMg6hbU+bMBiJOSEGEbThJVgSsLKPUhKEmFpaBhEcYsqGt9SrjoMQM0K4JhS0Iqi4WwtbkSD5C+XHxIQQq4u6EDuu9YYycW3HNVSlVwlDcLa8RkoHSuFacq13J4bqwp5ix5BjSBh+zpZm5MLYBbi+6kRwWElIKCKYLRPyZO4JXsy8UI8dfkRddBR1qOMQ2BIhI99GUDdUpx4AtVBd1O+oR0VqhTBsnC2pEf5RpIRQNCoFWk6ZiZmYL5kXhtCIekYODx5WP2hFcChpv9Mey0MlqkJezr9E2wIdM/TbAol4aHuIZClZGEInqktL6qA0cHHrllRBSgEGHYPCsDmilpHa4VpjXYglFa4IxsLnG75uTt3EmkzhiQAurwstcy3GsFGXurvrrhiEh+RwO2T3sluNDt3YmenE7dzbqM2gCJpEVl8WZn2zgULoedsStmGhZEEYwsPyruCdsgkpUF//+PUjTn4+qWTpxtQNMbF5Xi++xuyyUQQ/s2tvlzo2AUtuYi58B3w4tf1UgCBey3em7kD6W0L1UDX6vf3qXIicGz8XuHsztIJPZ52GPdkuDOET0LWmVqbg/OLE+NL4enfhWb6oKG3pNjTtasLBXw6S4ee897zHsYFjgTu4uJdc+f9jTSGg/Dg7Y0VjeG5/rjyMI6eI4W+RMyPeETj7nHAMODCzMkPG4FyZuGLcM6gOG/IaxMA8gu4j7PCAZ+C7vZ+F1uXW4VHeI9Wmg9/PKq82xTJV4CfR/8rl5maD0TfEANyFbjTmN6q1o322yNDj6cew9Fowv2o8HymNgrOhDQBl48HvD8TAXDa0s/cs96Csr0x1TC9dZOet4y2Opx9XbYTUSQq0QvgpdOnfEJpF0Iz42Z+6Xy1Odood1yKyU91fjaaFJsX0avGV8lefjft598XAfEI+a+3s34lJ76SxiPku34C+fX24OnkVzQvN62HiORIiV0QmG8yGMqJlomgCpWmlimMBcPTp8Fo8UIzmRRKhzQZl8XrudTGIDJs+/VZ+qUSnp/P7mWG0tUHNQj4QuWwwIWfET8fejh9nRpsN8r/KurFXOuGwaSFM7x+9yE/JN4rRQnONOdTCI8yml5aWxN5ErK6Rx/qw8J0jtAHqCSsjfpQXzNyW9f6S7XL2ZTGILKYIYYZLho0nABJS/1u9GEQW04TYkm14an+qHjYZFkR3L08tV8cRxjQhzKVfL+GE9YRa/CTkjPWMOhEFTBXCvLG/Ue9KYs5vP68ao4ApXUvPqG8Utr9s8P3pQ6Kk/3kYGUzPCLM7aTca9zRGTQQA/AfecXmGwgBwRwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--footer-->\n<div class=\"footer\" itemscope=\"\" itemtype=\"http://schema.org/Restaurant\">\n  <div class=\"container\">\n    <div class=\"col-xs-4 footer-left\" itemprop=\"address\" itemscope=\"\" itemtype=\"http://schema.org/PostalAddress\">\n      <h4>Adres</h4>\n      <ul>\n        <li itemprop=\"name\">Eethuis Scharlo</li>\n        <li itemprop=\"streetAddress\">Scharlo 32</li>\n        <li><span itemprop=\"addressLocality\">itemprop=\"postalCode\">1815 CP</span><span itemprop=\"addressLocality\"> Alkmaar</span></li>\n        <li itemprop=\"telephone\">072 515 10 81</li>\n      </ul>\n    </div>\n    <div class=\"col-xs-4 footer-left\">\n      <h4>Populaire</h4>\n      <ul>\n        <li><a [routerLinkActive]=\"['active']\" [routerLink]=\" ['/menu'] \">Kapsalon</a></li>\n        <li><a [routerLinkActive]=\"['active']\" [routerLink]=\" ['/menu'] \">Broodjes</a></li>\n        <li><a [routerLinkActive]=\"['active']\" [routerLink]=\" ['/menu'] \">Turkse Pizza's & Durum</a></li>\n        <li><a [routerLinkActive]=\"['active']\" [routerLink]=\" ['/menu'] \">Schotels</a></li>\n      </ul>\n    </div>\n    <div class=\"col-xs-4 footer-left\">\n      <h4>Nuttige links</h4>\n      <ul>\n        <li><a [routerLinkActive]=\"['active']\" [routerLink]=\" ['/home'] \">Huis</a></li>\n        <li><a [routerLinkActive]=\"['active']\" [routerLink]=\" ['/menu'] \">Menu</a></li>\n        <li><a [routerLinkActive]=\"['active']\" [routerLink]=\" ['/winkelwagen'] \">Winkelwagen</a></li>\n        <li><a [routerLinkActive]=\"['active']\" [routerLink]=\" ['/contact'] \">Contact</a></li>\n      </ul>\n    </div>\n    <div class=\"col-xs-12 footer-right rights\">\n      <p> © 2017 Eethuis Scharlo . Alle rechten voorbehouden</p>\n      <div class=\"icons\">\n        <ul>\n          <li><a href=\"https://www.facebook.com/Scharlo-food-1698619000390160/\" class=\"twitter facebook\"> </a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"clearfix\"> </div>\n  </div>\n</div>\n<div itemprop=\"geo\" itemscope=\"\" itemtype=\"http://schema.org/GeoCoordinates\">\n  <meta itemprop=\"latitude\" content=\"52.6355770\">\n  <meta itemprop=\"longitude\" content=\"4.7382562\">\n</div>\n<script type=\"application/ld+json\">\n\t{\n\t\"@context\": \"http://schema.org/\",\n\t\"@type\": \"Organization\",\n    \"url\" : \"http://eethuisscharlo.nl\",\n\t\t\t\"logo\": \"/http://eethuisscharlo.nl/eethuis-scharlo.png\",\n\t\t\t\"sameAs\": [\n\t\t\t\t\"https://www.facebook.com/Scharlo-food-1698619000390160/\"\n\t\t\t\t],\n\t\t\t\"contactPoint\": {\n\t\t\t\t\"@type\": \"ContactPoint\",\n\t\t\t\t\"telephone\": \"+31 72 515 10 81\",\n\t\t\t\t\"contactType\": \"telefoonnummer\"\n\t\t\t\t}\n\t}\n</script>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--footer--*/\n.footer {\n  background: #555;\n  padding: 1em 0;\n  bottom: 0;\n  width: 100%; }\n\n.footer h4 {\n  font-size: 2.8em;\n  font-family: 'OleoScript-Regular';\n  line-height: 1em;\n  color: #AEE3EF;\n  margin-bottom: 0.5em; }\n\n.footer-left ul {\n  padding: 0;\n  margin: 0; }\n\n.footer-left ul li {\n  display: block;\n  font-size: 1em;\n  color: #fff;\n  font-weight: 300;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.5em; }\n\n.footer-left ul li:nth-child(2), .footer-left ul li:nth-child(3) {\n  font-weight: 100;\n  color: #ebebeb; }\n\n.footer-left ul li a {\n  color: #fff;\n  text-decoration: none; }\n\n.footer-left ul li a:hover {\n  color: #AEE3EF; }\n\n.footer-right a {\n  display: inline-block; }\n\n.footer-right p {\n  color: #fff;\n  font-size: 1em;\n  letter-spacing: 1px;\n  margin: 1em 0 0; }\n\n.footer-right p a {\n  color: #AEE3EF;\n  font-size: 1em;\n  letter-spacing: 1px; }\n\n.footer-right p a:hover {\n  color: #fff; }\n\n.rights {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"welcome\">\n  <div class=\"banner-bottom\">\n    <div class=\"container\">\n      <!--welcome-->\n      <div class=\"welcome\">\n        <h3 class=\"title\">Welkom</h3>\n        <p>Welkom bij Eethuis Scharlo Food restaurant, de specialist in Italiaanse pizza en Turkse gerechten</p>\n        <div class=\"welcome-info\">\n          <div class=\"col-md-6 welcome-grids\">\n            <div class=\"welcome-img1\">\n              <!--<img src=\"../../assets/images/doner.jpg\" class=\"img-responsive zoom-img\" alt=\"\"/>-->\n            </div>\n          </div>\n          <div class=\"col-md-6 welcome-grids\">\n            <div class=\"welcome-img2\">\n              <!--<img src=\"./app/assets/images/turkish_pizza.jpeg\" class=\"img-responsive zoom-img\" alt=\"\"/>-->\n            </div>\n          </div>\n          <div class=\"clearfix\"> </div>\n        </div>\n      </div>\n      <!--//welcome-->\n    </div>\n  </div>\n  <!--//banner-bottom-->\n  <!--//menu-->\n  <!-- testimonial -->\n  <div class=\"testimonial\">\n    <!-- container -->\n    <div class=\"container\">\n      <h3 class=\"title\">Informatie</h3>\n      <!-- banner-text Slider starts Here -->\n      <!--//End-slider-script -->\n      <div  id=\"top\" class=\"callbacks_container\">\n        <ul class=\"rslides\" id=\"slider3\">\n          <li>\n            <div class=\"testimonial-grids\">\n              <div class=\"testimonial-left\">\n                <!--<img src=\"../../assets/images/t1.jpg\" alt=\"\" />-->\n              </div>\n              <div class=\"testimonial-right\">\n                <h5>Amgad Gandy</h5>\n                <p><span>\"</span> Chef-kok Amgad heeft een 30-jarige ervaring in Italiaanse en Turkse keuken. Het heeft de lachende en gastvrije karakter, waardoor u zich thuis voelt<span>\"</span>\n                </p>\n              </div>\n              <div class=\"clearfix\"> </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!-- //container -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".welcome p {\n  font-size: 1em;\n  margin-top: .5em;\n  color: #555;\n  line-height: 1.8em;\n  text-align: center; }\n\n.welcome img {\n  width: 100%; }\n\n.welcome-info {\n  margin: 3em 0; }\n\n.testimonial-left {\n  background: url(" + __webpack_require__("../../../../../src/app/assets/images/chef.jpg") + ") no-repeat 0px 0px;\n  height: 125px; }\n\n.welcome-img1 {\n  overflow: hidden;\n  border: 8px solid #FFF;\n  background: url(" + __webpack_require__("../../../../../src/app/assets/images/1.png") + ") no-repeat center center;\n  background-size: cover;\n  min-height: 245px; }\n\n.welcome-img2 {\n  overflow: hidden;\n  border: 8px solid #FFF;\n  background: url(" + __webpack_require__("../../../../../src/app/assets/images/doner.jpg") + ") no-repeat 0px 0px;\n  background-size: cover;\n  min-height: 245px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/components/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\" class=\"contact-top\">\n  <!-- container -->\n  <div class=\"container\">\n    <div class=\"contact-info\">\n      <h3 class=\"title\">Hoe vindt u ons</h3>\n      <!-- \t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipiscing elit in id malesuada lectus aenean convallis interdum gravida donec faucibus bibendum tortor vel facilisis.</p> -->\n    </div>\n    <div class=\"map\">\n      <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d512.7143448554258!2d4.738858045161196!3d52.63563786847968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8c7c9b46b21e20!2sScharlo+Food!5e0!3m2!1sen!2snl!4v1501355803544\" allowfullscreen></iframe>\n    </div>\n    <div class=\"mail-grids\">\n      <div class=\"col-md-6 mail-grid-left\">\n        <h3 class=\"title\">Adres</h3>\n        <h4>Verhuur</h4>\n        <p>Scharlo 32\n          <span>1815 CP Alkmaar</span>\n          Nederland\n        </p>\n        <h4>Neem contact op</h4>\n        <p>Telefoon: 072 515 10 81\n          <span>\tE-mail: <a href=\"mailto:eethuisscharloorders@gmail.com\">eethuisscharloorders@gmail.com</a></span>\n        </p>\n      </div>\n      <div class=\"col-md-6 contact-form\">\n        <form>\n          <input type=\"text\" placeholder=\"Naam\" [(ngModel)]=\"comment['name']\" name=\"name\">\n          <input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"comment['email']\" name=\"email\">\n          <input type=\"text\" placeholder=\"Onderwerp\" [(ngModel)]=\"comment['subject']\" name=\"subject\">\n          <textarea placeholder=\"Bericht\" [(ngModel)]=\"comment['message']\"  name=\"message\"></textarea>\n          <button (click)=\"sendComments()\" class=\"order-btn\">Verzenden</button>\n        </form>\n      </div>\n      <div class=\"clearfix\"> </div>\n    </div>\n  </div>\n  <!-- //container -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".order-btn {\n  border: none;\n  outline: none;\n  color: #fff;\n  padding: .5em 3.5em;\n  font-size: 1em;\n  margin: 0.5em 0 0 0;\n  -webkit-appearance: none;\n  background: #AEE3EF;\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  -o-border-radius: 3px;\n  -ms-border-radius: 3px; }\n\nbutton:hover {\n  background: #4D4D4D;\n  color: #FFF;\n  transition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -o-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -ms-transition: 0.5s all; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_calls_service__ = __webpack_require__("../../../../../src/app/providers/api-calls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notification_service__ = __webpack_require__("../../../../../src/app/providers/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(apiCallsService, notificationService) {
        this.apiCallsService = apiCallsService;
        this.notificationService = notificationService;
        this.comment = {};
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.sendComments = function () {
        var _this = this;
        if (!this.comment['name'] || !this.comment['email'] || !this.comment['message'] || !this.comment['subject']) {
            return;
        }
        this.apiCallsService.postData('contact', this.comment).subscribe(function (data) {
            _this.notificationService.notification.next({
                msgType: 'success',
                msgTitle: 'E-mail verzonden',
                msgContent: 'Uw e-mail was, met succes, verzonden.',
            });
            _this.comment['name'] = null;
            _this.comment['email'] = null;
            _this.comment['message'] = null;
            _this.comment['subject'] = null;
        }, function (error) {
            _this.notificationService.notification.next({
                msgType: 'error',
                msgTitle: 'E-mail mislukt',
                msgContent: 'Uw e-mail is niet verzonden. Probeer het later nog eens.',
            });
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_api_calls_service__["a" /* ApiCallsService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_notification_service__["a" /* NotificationService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-welcome></app-welcome>"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--baner--*/\n.banner {\n  background: url(" + __webpack_require__("../../../../../src/app/assets/images/1.png") + ") no-repeat 0px 0px;\n  background-size: cover;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  -ms-background-size: cover;\n  min-height: 450px;\n  position: relative; }\n\n.banner-info {\n  background: url(" + __webpack_require__("../../../../../src/app/assets/images/dott.png") + ") repeat 0px 0px;\n  background-size: 4px;\n  -webkit-background-size: 4px;\n  -moz-background-size: 4px;\n  -o-background-size: 4px;\n  -ms-background-size: 4px;\n  min-height: 450px;\n  padding: 2em 0; }\n\n.logo {\n  text-align: center; }\n\n.ribbon {\n  width: 35%;\n  position: relative;\n  background: #CADDE1;\n  height: 70px;\n  margin: 0px auto;\n  left: 0;\n  top: 0; }\n\n.ribbon::before, .ribbon::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 0;\n  border: 35px solid #CADDE1;\n  z-index: 1; }\n\n.ribbon::before {\n  left: -75px;\n  border-right-width: 60px;\n  border-left-color: transparent; }\n\n.ribbon::after {\n  right: -75px;\n  border-left-width: 60px;\n  border-right-color: transparent; }\n\n.logo h1 {\n  font-size: 3.5em;\n  font-family: 'OleoScript-Regular';\n  letter-spacing: 3px;\n  padding: 0.2em 0;\n  text-shadow: 1px 3px 0 #9BC0C7; }\n\n.logo h1 a {\n  color: #fff; }\n\n.logo h2 {\n  font-size: 1.4em;\n  color: #FFF;\n  letter-spacing: 2px;\n  font-family: 'OleoScript-Regular';\n  margin-top: 2em; }\n\n.banner-bottom {\n  background-color: #CADDE1;\n  min-height: 350px;\n  position: relative; }\n\n.banner-text {\n  background-color: #fff;\n  padding: 4em;\n  display: inline-block;\n  text-align: center;\n  position: absolute;\n  top: -16%;\n  left: 34.5%; }\n\n.banner-text h3 {\n  font-size: 4em;\n  font-family: 'OleoScript-Regular';\n  color: #68686a; }\n\n.banner-text p {\n  font-size: 1em;\n  color: #68686a;\n  margin: 1em 0 2em;\n  text-align: center;\n  letter-spacing: 8px;\n  font-weight: 700; }\n\n.banner-text a {\n  font-size: 1.1em;\n  text-align: center;\n  color: #68686a;\n  border: 1px solid #000;\n  padding: .3em 1.5em;\n  position: relative; }\n\n/*--top-nav--*/\nnav.navbar.navbar-default {\n  border: none;\n  background: none; }\n\ndiv#bs-example-navbar-collapse-1 {\n  padding: 0;\n  width: 44%;\n  margin: 7em auto 0; }\n\n.navbar-default .navbar-nav > li > a {\n  color: #FFF;\n  font-size: 1.2em; }\n\n.navbar-nav > li > a {\n  padding: 10px 25px;\n  line-height: 1.5em; }\n\n.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n  color: #AEE3EF; }\n\n.navbar-nav > li > a.active {\n  color: #AEE3EF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu row\">\n  <div class=\"col-md-3 left-side\"></div>\n  <div class=\"col-md-6\">\n\n    <div class=\"menu_category row\" *ngFor=\"let menu of menuList\">\n      <div class=\"row\">\n        <div class=\"category-name row\">{{menu.categoryName}}</div>\n        <ul class=\"category-content row list-unstyled\">\n          <li itemtype=\"http://schema.org/Product\" itemscope *ngFor=\"let menuItem of menu.menuItems\">\n            <div itemtype=\"http://schema.org/Offer\" itemscope itemprop=\"offers\" class=\"row meal-item\">\n              <div class=\"col-md-8\">\n                <div itemprop=\"name\" class=\"row meal-name\">{{menuItem.rank}}. {{menuItem.name}}</div>\n                <!-- <div class=\"row\">desc: {{menuItem.description}}</div> -->\n                <!-- <div class=\"row\">Ingredients: {{menuItem.ingredients}}</div> -->\n              </div>\n              <div class=\"col-md-4 padding-top-10\" itemtype=\"http://schema.org/Offer\">\n                <div itemprop=\"price\" class=\"price col-md-5\">€ {{menuItem.price}}</div>\n                <div title=\"Bestellen\" class=\"add-to-cart\" (click)=\"addToShop(menu.categoryName, menuItem)\"></div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 right-side\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu_category {\n  background-color: white;\n  border-radius: 16px;\n  padding: 20px;\n  margin-bottom: 10px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); }\n\n.category-name {\n  font-size: 26px;\n  font-weight: bold;\n  padding-bottom: 10px;\n  margin-left: 1rem !important; }\n\n.category-content {\n  margin-left: 1rem !important; }\n\nli {\n  font-size: 18px;\n  padding-bottom: 10px; }\n\n.meal-name {\n  font-size: 18px;\n  font-weight: bold;\n  color: #1a5ca3; }\n\n.meal-item {\n  color: black !important;\n  margin-left: 2rem !important;\n  transition: all 200ms ease-in-out;\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n  .meal-item :hover {\n    transition: all 500ms ease-in-out;\n    -webkit-transform: scale(1.1, 1.3);\n            transform: scale(1.1, 1.3); }\n\n.price {\n  color: orangered;\n  float: right; }\n\n.add-to-cart {\n  content: url(" + __webpack_require__("../../../../../src/app/assets/images/add-to-cart.png") + ");\n  max-height: 24px;\n  width: 24px;\n  float: right;\n  cursor: pointer; }\n\n.padding-top-10 {\n  padding-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_webstorage__ = __webpack_require__("../../../../ng2-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_calls_service__ = __webpack_require__("../../../../../src/app/providers/api-calls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_service__ = __webpack_require__("../../../../../src/app/providers/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = (function () {
    function MenuComponent(apiCallsService, localSt, notificationService) {
        this.apiCallsService = apiCallsService;
        this.localSt = localSt;
        this.notificationService = notificationService;
        this.menuList = [];
        this.selectedMenuList = [];
        var menuListlocalSt = this.localSt.retrieve('shop-card-list');
        if (!menuListlocalSt) {
            this.localSt.store('shop-card-list', this.selectedMenuList);
        }
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.getMenu();
    };
    MenuComponent.prototype.getMenu = function () {
        var _this = this;
        this.getMenuObs = this.apiCallsService.getData('menu').subscribe(function (data) {
            _this.menuList = data['jsonContent'];
        }, function (error) {
            console.log('********* error', error);
        });
    };
    MenuComponent.prototype.addToShop = function (menuCategory, menuItem) {
        var selectedMenu = { menuCategory: menuCategory, menuItem: menuItem };
        if (this.alreadyExists(selectedMenu, this.selectedMenuList)) {
            return;
        }
        menuItem['totalPrice'] = menuItem['price'];
        menuItem['quantity'] = 1;
        this.selectedMenuList = this.localSt.retrieve('shop-card-list');
        this.selectedMenuList.push(selectedMenu);
        this.localSt.store('shop-card-list', this.selectedMenuList);
        this.notificationService.notification.next({
            msgType: 'success',
            msgTitle: 'Artikel toegevoegd',
            msgContent: 'Uw artikel is toegevoegd, met succes, aan de winkelwagen',
        });
    };
    MenuComponent.prototype.alreadyExists = function (menu, list) {
        var exist = false;
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            exist = (menu['menuItem']['name'] === item['menuItem']['name']);
        }
        return exist;
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/pages/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_calls_service__["a" /* ApiCallsService */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_webstorage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_notification_service__["a" /* NotificationService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/shopping-card/shopping-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu row\">\n  <div class=\"col-md-3 left-side\"></div>\n  <div class=\"col-md-6\">\n    <div class=\"menu_category row\">\n      <div class=\"row\">\n        <div [hidden]=\"!selectedMenuList.length\" class=\"category-name row\">Winkelwagen</div>\n        <div [hidden]=\"selectedMenuList.length\" class=\"category-name row\"> Winkelwagen is leeg</div>\n        <ul class=\"category-content row list-unstyled\">\n          <li *ngFor=\"let item of selectedMenuList\">\n            <div class=\"row meal-item\">\n              <div class=\"col-md-3\">\n                <div class=\"row meal-name\">{{item.menuItem.name}}</div>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"price\"><b>Stukprijs</b> : € {{item.menuItem.price | number : '1.2-2'}}</div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"item-quantity-input col-md-3\">\n                  <input type=\"number\" min=\"1\"\n                         (change)=\"getItemTotalPrice(item.menuItem,null)\"\n                         [(ngModel)]=\"item.menuItem.quantity\" />\n                </div>\n                <div class=\"col-md-7\">\n                  <div class=\"raise-quantiy\" title=\"Aantal verhogen\" (click)=\"getItemTotalPrice(item.menuItem, true)\">raise</div>\n                  <div class=\"reduce-quantity\" title=\"Verminder hoeveelheid\" (click)=\"getItemTotalPrice(item.menuItem,false)\">reduce</div>\n                  <div class=\"remove-from-cart\" title=\"Verwijderen\" (click)=\"deleteMenu(item)\">delete</div>\n                </div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div [hidden]=\"!selectedMenuList.length\" class=\"row\">\n        <div class=\"row\" style=\"margin-left: 30px;margin-top: 20px; margin-bottom: 10px;\">\n          <div class=\"price col-md-5 order-section\"><b>Totale orderprijs </b></div>\n          <div class=\"col-md-4 order-section\"><b>: € {{totalPrice | number : '1.2-2'}}</b></div>\n      </div>\n        <div class=\"row\" style=\"margin-left: 30px; margin-bottom: 10px;\">\n          <div class=\"price col-md-5 order-section\"><b>Korting </b></div>\n          <div class=\"order-section col-md-4\"><b>: 10%</b></div>\n        </div>\n        <div class=\"row\" style=\"margin-left: 30px; margin-bottom: 10px;\">\n          <div class=\"col-md-5 discount\"><b>Totale prijs na korting </b></div>\n          <div class=\"col-md-3 discount\"><b>: € {{discountPrice | number : '1.2-2'}}</b></div>\n          <div class=\"col-md-3\">\n            <button (click)=\"staticModal.show()\" class=\"order-btn\">Bestel nu</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  <div class=\"col-md-3 right-side\"></div>\n</div>\n\n  <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"staticModal.show()\">Static modal</button>-->\n\n  <div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: true}\"\n       tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">Klant informatie</h4>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"mail-grids\">\n            <div class=\"contact-form\">\n              <form>\n                <input type=\"text\" placeholder=\"Naam\" [(ngModel)]=\"menuOrder['customer']['name']\" name=\"name\">\n                <input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"menuOrder['customer']['email']\" name=\"email\">\n                <input type=\"text\" placeholder=\"Adres\" [(ngModel)]=\"menuOrder['customer']['address']\" name=\"address\">\n                <input type=\"number\" placeholder=\"Telefoon\" [(ngModel)]=\"menuOrder['customer']['telephone']\" name=\"telephone\">\n                <textarea placeholder=\"Bericht\" [(ngModel)]=\"menuOrder['customer']['comment']\" name=\"comment\"></textarea>\n                <button (click)=\"orderMenus()\" class=\"order-btn\">Bestel nu</button>\n              </form>\n            </div>\n            <div class=\"clearfix\"> </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/shopping-card/shopping-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu_category {\n  background-color: white;\n  border-radius: 16px;\n  padding: 20px;\n  margin-bottom: 10px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); }\n\n.category-name {\n  font-size: 26px;\n  font-weight: bold;\n  padding-bottom: 10px;\n  margin-left: 1rem !important; }\n\n.category-content {\n  margin-left: 1rem !important; }\n\nli {\n  font-size: 18px;\n  padding-bottom: 10px; }\n\n.meal-name {\n  font-size: 18px;\n  font-weight: bold; }\n\n.meal-item {\n  color: black !important;\n  margin-left: 2rem !important;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.price {\n  color: orangered;\n  float: right; }\n\n.padding-top-10 {\n  padding-top: 10px; }\n\ninput {\n  color: #777;\n  width: 100px;\n  font-size: 2em;\n  border-radius: 10px;\n  border: 2px solid #ccc;\n  padding-left: 10px; }\n\ninput[type=number]::-webkit-inner-spin-button {\n  opacity: 0.3; }\n\ninput[type=number]::-webkit-outer-spin-button {\n  opacity: 0.3; }\n\n.remove-from-cart {\n  content: url(" + __webpack_require__("../../../../../src/app/assets/images/remove.png") + ");\n  max-height: 24px;\n  width: 24px;\n  float: left;\n  cursor: pointer; }\n\n.raise-quantiy {\n  content: url(" + __webpack_require__("../../../../../src/app/assets/images/raise.png") + ");\n  max-height: 24px;\n  width: 24px;\n  float: left;\n  cursor: pointer;\n  margin-right: 30px;\n  margin-left: 20px; }\n\n.reduce-quantity {\n  content: url(" + __webpack_require__("../../../../../src/app/assets/images/reduce.png") + ");\n  max-height: 24px;\n  width: 24px;\n  float: left;\n  cursor: pointer;\n  margin-right: 30px; }\n\n.item-quantity-input {\n  margin-top: -15px; }\n\n.order-section {\n  float: left;\n  font-size: 20px;\n  color: orangered; }\n\n.discount {\n  float: left;\n  font-size: 26px;\n  color: orangered; }\n\n.order-btn {\n  float: right;\n  padding-top: 20px;\n  border: none;\n  outline: none;\n  color: #fff;\n  padding: .5em 3.5em;\n  font-size: 1em;\n  margin: 0.5em 0 0 0;\n  -webkit-appearance: none;\n  background: #AEE3EF;\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  -o-border-radius: 3px;\n  -ms-border-radius: 3px; }\n\nbutton:hover {\n  background: #4D4D4D;\n  color: #FFF;\n  transition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -o-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -ms-transition: 0.5s all; }\n\ninput {\n  width: 100%;\n  color: #999;\n  background: none;\n  outline: none;\n  font-size: 0.9em;\n  padding: .6em .8em;\n  margin-bottom: 1em;\n  border: solid 1px #999;\n  -webkit-appearance: none;\n  border-radius: 3px;\n  -webkit-border-radius: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/shopping-card/shopping-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_webstorage__ = __webpack_require__("../../../../ng2-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_calls_service__ = __webpack_require__("../../../../../src/app/providers/api-calls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_service__ = __webpack_require__("../../../../../src/app/providers/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingCardComponent = (function () {
    function ShoppingCardComponent(localSt, apiCallsService, notificationService) {
        this.localSt = localSt;
        this.apiCallsService = apiCallsService;
        this.notificationService = notificationService;
        this.menuOrder = {};
        this.totalPrice = 0;
        this.discountPrice = 0;
        this.menuOrder['customer'] = {
            name: null,
            email: '',
            address: null,
            telephone: null,
            comment: ''
        };
    }
    ShoppingCardComponent.prototype.ngOnInit = function () {
        this.getSelectedMenuList();
        this.calculateTotalPrice();
    };
    ShoppingCardComponent.prototype.getSelectedMenuList = function () {
        this.selectedMenuList = this.localSt.retrieve('shop-card-list');
    };
    ShoppingCardComponent.prototype.deleteMenu = function (item) {
        var index = this.selectedMenuList.indexOf(item);
        if (index > -1) {
            this.selectedMenuList.splice(index, 1);
            this.localSt.store('shop-card-list', this.selectedMenuList);
        }
        this.calculateTotalPrice();
    };
    ShoppingCardComponent.prototype.deleteAllMenus = function () {
        this.selectedMenuList = [];
        this.localSt.store('shop-card-list', this.selectedMenuList);
        this.calculateTotalPrice();
    };
    ShoppingCardComponent.prototype.orderMenus = function () {
        var _this = this;
        if (!this.menuOrder['customer']['name'] || !this.menuOrder['customer']['address'] || !this.menuOrder['customer']['telephone']) {
            return;
        }
        // this.menuOrder['customer'] = {
        //   name: 'hamza jridi',
        //   address: 'Tunis',
        //   tel: '22428402',
        //   email: 'hamza@me.com'
        // };
        this.menuOrder['order'] = this.calculatePrices(this.selectedMenuList, false);
        this.calculateTotalPrice();
        this.apiCallsService.postData('order', this.menuOrder).subscribe(function (data) {
            _this.notificationService.notification.next({
                msgType: 'success',
                msgTitle: 'Bestellen bevestiging',
                msgContent: 'Wij hebben uw bestellen ontvangen!',
            });
            _this.deleteAllMenus();
            _this.staticModal.hide();
        }, function (error) {
            _this.notificationService.notification.next({
                msgType: 'error',
                msgTitle: 'Fout bij bestellen',
                msgContent: 'Sorry, een fout opgetreden, probeer het opnieuw of bel ons',
            });
        });
    };
    ShoppingCardComponent.prototype.calculateTotalPrice = function () {
        this.menuOrder['totalPrice'] = this.calculatePrices(this.selectedMenuList, true);
        this.totalPrice = this.menuOrder['totalPrice'];
        this.menuOrder['discountPrice'] = (this.menuOrder['totalPrice'] * 0.9).toFixed(2);
        this.discountPrice = this.menuOrder['discountPrice'];
    };
    ShoppingCardComponent.prototype.getItemTotalPrice = function (item, raiseFlag) {
        if (raiseFlag == false) {
            item['quantity'] = Math.floor(item['quantity'] - 1);
        }
        else if (raiseFlag == true) {
            item['quantity'] = Math.floor(item['quantity'] + 1);
        }
        else {
            item['quantity'] = Math.floor(item['quantity']);
        }
        if (item['quantity'] < 1) {
            item['quantity'] = 1;
        }
        item['totalPrice'] = (item['price'] * item['quantity']).toFixed(2);
        this.calculateTotalPrice();
    };
    ShoppingCardComponent.prototype.calculatePrices = function (orderList, price) {
        var totalPrice = 0;
        for (var _i = 0, orderList_1 = orderList; _i < orderList_1.length; _i++) {
            var item = orderList_1[_i];
            item['menuItem']['totalPrice'] = item['menuItem']['price'] * item['menuItem']['quantity'];
            totalPrice += item['menuItem']['totalPrice'];
        }
        // orderList.push({totalPrice});
        return price ? (totalPrice).toFixed(2) : orderList;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('staticModal'),
        __metadata("design:type", Object)
    ], ShoppingCardComponent.prototype, "staticModal", void 0);
    ShoppingCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shopping-card',
            template: __webpack_require__("../../../../../src/app/pages/shopping-card/shopping-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/shopping-card/shopping-card.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_webstorage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_calls_service__["a" /* ApiCallsService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_notification_service__["a" /* NotificationService */]])
    ], ShoppingCardComponent);
    return ShoppingCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/providers/api-calls.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiCallsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// const baseUrl = (process.env.NODE_ENV === 'production') ? '/eethuisshcarlo/' : '/';
// const apiPort = (process.env.NODE_ENV === 'development') ? ':3000' : '';
var ApiCallsService = (function () {
    function ApiCallsService(httpClient) {
        this.httpClient = httpClient;
        this.port = (window.location.port === '3000') ? '3000' : window.location.port;
        this.apiUrl = {
            domaine: window.location.protocol + "//" + window.location.hostname,
            path: '/api/',
            port: this.port
        };
        this.rootUrl = this.apiUrl.domaine + ":" + this.apiUrl.port + this.apiUrl.path;
    }
    ApiCallsService.prototype.getData = function (url) {
        return this.httpClient.get("" + this.rootUrl + url);
        // return this.httpClient.get('../assets/data/menu.json');
    };
    ApiCallsService.prototype.postData = function (url, data) {
        return this.httpClient.post("" + this.rootUrl + url, data);
    };
    ApiCallsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiCallsService);
    return ApiCallsService;
}());



/***/ }),

/***/ "../../../../../src/app/providers/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationService = (function () {
    function NotificationService(toastyService, toastyConfig) {
        var _this = this;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.notification = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.toastyConfig.theme = 'material';
        this.notification.subscribe(function (data) {
            var NotifType = data.msgType.toLocaleLowerCase();
            var toastOptions = {
                title: data.msgTitle,
                msg: data.msgContent,
                showClose: true,
                timeout: data.delay || 3000,
                theme: 'material',
                onAdd: function (toast) {
                    // delete previous toast instance
                    // const prevToast = toast.id - 1;
                    // if (prevToast > 0) {
                    //   this.toastyService.clear(prevToast);
                    // }
                }
            };
            // display notification based on its type
            switch (NotifType) {
                case 'info':
                    _this.toastyService.info(toastOptions);
                    break;
                case 'success':
                    _this.toastyService.success(toastOptions);
                    break;
                case 'wait':
                    _this.toastyService.wait(toastOptions);
                    break;
                case 'error':
                    _this.toastyService.error(toastOptions);
                    break;
                case 'warning':
                    _this.toastyService.warning(toastOptions);
                    break;
                default:
                    _this.toastyService.info(toastOptions);
            }
        });
    }
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_toasty__["c" /* ToastyService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_toasty__["a" /* ToastyConfig */]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map