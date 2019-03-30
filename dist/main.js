(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./client/$$_lazy_route_resource lazy recursive":
/*!*************************************************************!*\
  !*** ./client/$$_lazy_route_resource lazy namespace object ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./client/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./client/app/app.component.css":
/*!**************************************!*\
  !*** ./client/app/app.component.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/app/app.component.html":
/*!***************************************!*\
  !*** ./client/app/app.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n\t<router-outlet></router-outlet>\n\n\t<!-- Footer -->\n\t<footer id=\"footer\">\n\t\t<ul class=\"icons\">\n\t\t\t<li><a href=\"#\" class=\"icon fa-twitter\"><span class=\"label\">Twitter</span></a></li>\n\t\t\t<li><a href=\"#\" class=\"icon fa-facebook\"><span class=\"label\">Facebook</span></a></li>\n\t\t\t<li><a href=\"#\" class=\"icon fa-instagram\"><span class=\"label\">Instagram</span></a></li>\n\t\t\t<li><a href=\"#\" class=\"icon fa-dribbble\"><span class=\"label\">Dribbble</span></a></li>\n\t\t\t<li><a href=\"#\" class=\"icon fa-envelope-o\"><span class=\"label\">Email</span></a></li>\n\t\t</ul>\n\t\t<ul class=\"copyright\">\n\t\t\t<li>&copy; Untitled</li>\n\t\t\t<li>Design: <a href=\"http://html5up.net\">HTML5 UP</a></li>\n\t\t</ul>\n\t</footer>\n\t<!-- MODALS -->\n\t<!-- <add-time-modal #addTimeModal (onSave)=\"onAddTimeModalSave($event)\"></add-time-modal> -->\n</div>"

/***/ }),

/***/ "./client/app/app.component.ts":
/*!*************************************!*\
  !*** ./client/app/app.component.ts ***!
  \*************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./client/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./client/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./client/app/app.module.ts":
/*!**********************************!*\
  !*** ./client/app/app.module.ts ***!
  \**********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./client/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./client/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.module */ "./client/app/components/dashboard/dashboard.module.ts");
/* harmony import */ var _components_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.service */ "./client/app/components/dashboard/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components

//import { GiveModal } from './components/modals/give/give.modal';
//Modules

//Services

//import { Survey } from 'survey-angular';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _components_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"],
            ],
            providers: [
                _components_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]
            ],
            //entryComponents: [GiveModal],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./client/app/app.routing.ts":
/*!***********************************!*\
  !*** ./client/app/app.routing.ts ***!
  \***********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./client/app/components/dashboard/dashboard.component.ts");


var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
    },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./client/app/components/dashboard/dashboard.component.css":
/*!*****************************************************************!*\
  !*** ./client/app/components/dashboard/dashboard.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,600italic,800,800italic\");\n/* @import url(\"./assets/fonts/font-awesome.min.css\"); */\n/* Banner */\n#banner {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: flex;\n\t-moz-flex-direction: column;\n\tflex-direction: column;\n\t-moz-justify-content: center;\n\t-ms-justify-content: center;\n\tjustify-content: center;\n\tcursor: default;\n\theight: 100vh;\n\tmin-height: 35em;\n\toverflow: hidden;\n\tposition: relative;\n\ttext-align: center;\n}\n#banner h2 {\n\t-webkit-transform: scale(1);\n\ttransform: scale(1);\n\ttransition: opacity 0.5s ease, -webkit-transform 0.5s ease;\n\ttransition: transform 0.5s ease, opacity 0.5s ease;\n\ttransition: transform 0.5s ease, opacity 0.5s ease, -webkit-transform 0.5s ease;\n\tdisplay: inline-block;\n\tfont-size: 1.75em;\n\topacity: 1;\n\tpadding: 0.35em 1em;\n\tposition: relative;\n\tz-index: 1;\n}\n#banner h2:before, #banner h2:after {\n\ttransition: width 0.85s ease;\n\ttransition-delay: 0.25s;\n\tbackground: #fff;\n\tcontent: '';\n\tdisplay: block;\n\theight: 2px;\n\tposition: absolute;\n\twidth: 100%;\n}\n#banner h2:before {\n\ttop: 0;\n\tleft: 0;\n}\n#banner h2:after {\n\tbottom: 0;\n\tright: 0;\n}\n#banner p {\n\tletter-spacing: 0.225em;\n\ttext-transform: uppercase;\n}\n#banner p a {\n\tcolor: inherit;\n}\n#banner .more {\n\ttransition: opacity 0.75s ease, -webkit-transform 0.75s ease;\n\ttransition: transform 0.75s ease, opacity 0.75s ease;\n\ttransition: transform 0.75s ease, opacity 0.75s ease, -webkit-transform 0.75s ease;\n\ttransition-delay: 3.5s;\n\t-webkit-transform: translateY(0);\n\ttransform: translateY(0);\n\tborder: none;\n\tbottom: 0;\n\tcolor: inherit;\n\tfont-size: 0.8em;\n\theight: 8.5em;\n\tleft: 50%;\n\tletter-spacing: 0.225em;\n\tmargin-left: -8.5em;\n\topacity: 1;\n\toutline: 0;\n\tpadding-left: 0.225em;\n\tposition: absolute;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\twidth: 16em;\n\tz-index: 1;\n}\n#banner .more:after {\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2230px%22 height%3D%2230px%22 viewBox%3D%220 0 30 30%22 zoomAndPan%3D%22disable%22 preserveAspectRatio%3D%22none%22%3E    %3Cstyle type%3D%22text%2Fcss%22%3E%3C!%5BCDATA%5B line %7B stroke%3A %23ffffff%3B stroke-width%3A 3%3B %7D %5D%5D%3E%3C%2Fstyle%3E%09%3Cline x1%3D%220%22 y1%3D%2215%22 x2%3D%2215%22 y2%3D%2230%22 %2F%3E%09%3Cline x1%3D%2230%22 y1%3D%2215%22 x2%3D%2215%22 y2%3D%2230%22 %2F%3E%09%3Cline x1%3D%2215%22 y1%3D%2230%22 x2%3D%2215%22 y2%3D%220%22 %2F%3E%3C%2Fsvg%3E\");\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: contain;\n\tbottom: 2em;\n\tcontent: '';\n\tdisplay: block;\n\theight: 1.5em;\n\tleft: 50%;\n\tmargin: 0 0 0 -0.75em;\n\tposition: absolute;\n\twidth: 1.5em;\n}\n#banner:after {\n\t-moz-pointer-events: none;\n\t-webkit-pointer-events: none;\n\t-ms-pointer-events: none;\n\tpointer-events: none;\n\ttransition: opacity 3s ease-in-out;\n\ttransition-delay: 1.25s;\n\tcontent: '';\n\tbackground: #2e3842;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\topacity: 0;\n}\n@media screen and (max-width: 736px) {\n\n\t#banner {\n\t\tpadding: 7em 3em 5em 3em ;\n\t\theight: auto;\n\t\tmin-height: 0;\n\t}\n\n\t\t#banner h2 {\n\t\t\tfont-size: 1.25em;\n\t\t}\n\n\t\t#banner br {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t#banner .more {\n\t\t\tdisplay: none;\n\t\t}\n\n}\nbody.is-loading #banner h2 {\n\t-webkit-transform: scale(0.95);\n\ttransform: scale(0.95);\n\topacity: 0;\n}\nbody.is-loading #banner h2:before, body.is-loading #banner h2:after {\n\twidth: 0;\n}\nbody.is-loading #banner .more {\n\t-webkit-transform: translateY(8.5em);\n\ttransform: translateY(8.5em);\n\topacity: 0;\n}\nbody.is-loading #banner:after {\n\topacity: 1;\n}\n/* CTA */\n#cta .inner {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: flex;\n\tmax-width: 45em;\n}\n#cta .inner header {\n\t-moz-order: 1;\n\t-ms-order: 1;\n\torder: 1;\n\tpadding-right: 3em;\n\twidth: 70%;\n}\n#cta .inner header p {\n\t\tcolor: inherit;\n\t}\n#cta .inner .actions {\n\t-moz-order: 2;\n\t-ms-order: 2;\n\torder: 2;\n\twidth: 30%;\n}\n@media screen and (max-width: 980px) {\n\n\t#cta .inner {\n\t\tdisplay: block;\n\t\ttext-align: center;\n\t}\n\n\t\t#cta .inner header {\n\t\t\tpadding-right: 0;\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t#cta .inner .actions {\n\t\t\tmargin-left: auto;\n\t\t\tmargin-right: auto;\n\t\t\tmax-width: 20em;\n\t\t\twidth: 100%;\n\t\t}\n\n}\n@media screen and (max-width: 736px) {\n\n\t#cta .inner .actions {\n\t\tmax-width: none;\n\t}\n\n}\n/* Landing */\n#page-wrapper {\n\tbackground-image: -webkit-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('banner.jpg');\n\t/* background-image: -ms-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\"./images/banner.jpg\"); */\n\t/* background-image: linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\"./images/banner.jpg\"); */\n\tbackground-attachment: fixed;\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tpadding-top: 0;\n}\nbody.landing #footer {\n\tbackground-color: rgba(29, 36, 42, 0.9);\n}\nbody.is-mobile.landing #page-wrapper {\n\tbackground: none;\n}\n#banner,\n.wrapper.style4 {\n\tbackground-image: -webkit-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('banner.jpg');\n\t/* background-image: -ms-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\"./images/banner.jpg\"); */\n\t/* background-image: linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\"./images/banner.jpg\"); */\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n}\nbody.is-mobile.landing #footer {\n\tbackground-color: #1d242a;\n}\nheader.major {\nmargin: 0 !important;\npadding-top: 1%;\n}\n.wrapper-custom {\n\tbackground-color: #fafafa;\n\tpadding: 0;\n}\n.inner {\n\twidth: 100% !important;\n}\n.status-bar-title {\n\tcolor: #222222;\n    padding-top: 1%;\n    margin: 0 0 1% 0;\n}\n.share-story-title {\n\tcolor: #222222;\n    padding: 1%;\n}\n.social-icon {\n\twidth: 67px;\n\theight: 67px;\n}\n.social-icon:hover {\n\tcursor: pointer;\n}\n.social-icons {\n\tpadding: 0 0 1% 0;\n}\n.status-bar-cnt {\n\tpadding: 5%;\n}\n.scrolling-iframe {\n  margin-top: 35px;\n  display: inline-block;\n  height: 500px;\n}"

/***/ }),

/***/ "./client/app/components/dashboard/dashboard.component.html":
/*!******************************************************************!*\
  !*** ./client/app/components/dashboard/dashboard.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <body class=\"landing is-preload\">\t -->\n<!-- Page Wrapper -->\n<div id=\"page-wrapper\">\n\n\t<!-- Banner -->\n\t<section id=\"banner\">\n\t\t<div class=\"inner\">\n\t\t\t<h2>BOGDAPROSTE</h2>\n\t\t\t<p>Ajutam prin a dona cuvinte...<br />\n\t\t\t\tsi nu bani.</p>\n\t\t\t<ul class=\"actions special\">\n\t\t\t\t<li><button class=\"button primary\" (click)=\"donateTime()\">Doneaza 1 minut</button></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<a class=\"more scrolly\">Asculta povestea lui</a>\n\t</section>\n\t<!-- One -->\n\t<section id=\"one\" class=\"wrapper wrapper-custom style1 special\">\n\t\t<div class=\"status-bar-cnt\">\n\t\t\t<p class=\"status-bar-title\">S au strans 4000/ 5000 de formulare </p>\n\t\t\t<div>\n\t\t\t\t<ngb-progressbar class=\"status-bar\" type=\"info\" [value]=\"75\"></ngb-progressbar>\n\t\t\t</div>\n\t\t\t<div class=\"social-cnt\">\n\t\t\t\t<div class=\"title share-story-title\">Povesteste despre noi</div>\n\t\t\t\t<div class=\"social-icons\">\n\t\t\t\t\t<a href=\"https://facebook.com\" target=\"_blank\"><img class=\"social-icon\" src=\"assets/images/facebook.svg\" alt=\"\" /></a>\n\t\t\t\t\t<a href=\"https://instagram.com\" target=\"_blank\"><img class=\"social-icon\" src=\"assets/images/instagram.svg\" alt=\"\" /></a>\n\t\t\t\t\t<a href=\"https://twitter.com\" target=\"_blank\"><img class=\"social-icon\" src=\"assets/images/twitter.svg\" alt=\"\" /></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"inner\">\n\t\t\t<div class=\"embed-video\">\n\t\t\t\t<iframe class=\"scrolling-iframe\" width=\"100%\" height=\"100%\" scrolling=\"yes\" [src]='embedSanitized' allowfullscreen\n\t\t\t\t style=\"overflow:visible;\"></iframe>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<!-- Two -->\n\t<section id=\"two\" class=\"wrapper alt style2\">\n\t\t<section class=\"spotlight\">\n\t\t\t<div class=\"image\"><img src=\"assets/images/parinti.jpg\" alt=\"\" /></div>\n\t\t\t<div class=\"content\">\n\t\t\t\t<div>Parintii</div>\n\t\t\t\t<p>Ne doare sa vedem cum se chinuie micutul nostru.Desi sunt extrem de saraci, parintii reusesc totusi sa-i tina pe\n\t\t\t\t\tcopii curati si sa-i trimita la scoala. Primesc, daca\n\t\t\t\t\tli se ofera, ajutorul unor oameni cu suflet mare, impresionati de soarta lor. Si vor sa gaseasca o sursa de venit\n\t\t\t\t\tpentru tatal familiei, ca sa poata macar sa racordeze locuinta la curent electric.\n\n\t\t\t\t\tIzabela si Gheorghe Rau sunt impreuna de 20 de ani, timp in care au adus pe lume 12 copii. Barbatul a lucrat 15\n\t\t\t\t\tani in\n\t\t\t\t\tmina din Valea Jiului, dar cand aceasta s-a inchis s-au intors cu totii pe meleagurile natale, in comuna Plopana,\n\t\t\t\t\tdin\n\t\t\t\t\tjudetul Bacau.\n\n\t\t\t\t\tPe o bucatica de pamant, care nici nu le apartine, au ridicat 2 camere din chirpici in care se inghesuie cu totii\n\t\t\t\t\tsi\n\t\t\t\t\tisi duc cum pot zilele. Sunt prea departe de oras, asa ca n-au noroc de serviciu, dar nici n-au cerut niciodata\n\t\t\t\t\tnimanui\n\t\t\t\t\tnimic.\n\n\t\t\t\t\tBarbatului i se frange inima cand vede cum copiii lui se chinuie sa invete la lumanare.</p>\n\t\t\t</div>\n\t\t</section>\n\t\t<section class=\"spotlight\">\n\t\t\t<div class=\"image\"><img src=\"assets/images/profesoara.jpg\" alt=\"\" /></div>\n\t\t\t<div class=\"content\">\n\t\t\t\t<p>Este unul dintre cei mai sclipitori copii. Sper din inima ca acest tanar talent sa reuseasca!</p>\n\t\t\t</div>\n\t\t</section>\n\t\t<section class=\"spotlight\">\n\t\t\t<div class=\"image\"><img src=\"assets/images/prin_frig.jpg\" alt=\"\" /></div>\n\t\t\t<div class=\"content\">\n\t\t\t\t<p> ...pe parcursul zilei merge prin frig si neinsotit pe o distanta de 10km </p>\n\t\t\t</div>\n\t\t</section>\n\t</section>\n\n\t<!-- Three -->\n\t<section id=\"three\" class=\"wrapper style3 special\">\n\t\t<div class=\"inner\">\n\t\t\t<header class=\"major\">\n\t\t\t\t<h2>Accumsan mus tortor nunc aliquet</h2>\n\t\t\t\t<p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />\n\t\t\t\t\tfringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>\n\t\t\t</header>\n\t\t\t<ul class=\"features\">\n\t\t\t\t<li class=\"icon fa-paper-plane-o\">\n\t\t\t\t\t<h3>Arcu accumsan</h3>\n\t\t\t\t\t<p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula\n\t\t\t\t\t\tconsequat consequat.</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"icon fa-laptop\">\n\t\t\t\t\t<h3>Ac Augue Eget</h3>\n\t\t\t\t\t<p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula\n\t\t\t\t\t\tconsequat consequat.</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"icon fa-code\">\n\t\t\t\t\t<h3>Mus Scelerisque</h3>\n\t\t\t\t\t<p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula\n\t\t\t\t\t\tconsequat consequat.</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"icon fa-headphones\">\n\t\t\t\t\t<h3>Mauris Imperdiet</h3>\n\t\t\t\t\t<p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula\n\t\t\t\t\t\tconsequat consequat.</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"icon fa-heart-o\">\n\t\t\t\t\t<h3>Aenean Primis</h3>\n\t\t\t\t\t<p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula\n\t\t\t\t\t\tconsequat consequat.</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"icon fa-flag-o\">\n\t\t\t\t\t<h3>Tortor Ut</h3>\n\t\t\t\t\t<p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula\n\t\t\t\t\t\tconsequat consequat.</p>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</section>\n\n\t<!-- CTA -->\n\t<section id=\"cta\" class=\"wrapper style4\">\n\t\t<div class=\"inner\">\n\t\t\t<header>\n\t\t\t\t<h2>Arcue ut vel commodo</h2>\n\t\t\t\t<p>Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.</p>\n\t\t\t</header>\n\t\t\t<ul class=\"actions stacked\">\n\t\t\t\t<li><a href=\"#\" class=\"button fit primary\">Activate</a></li>\n\t\t\t\t<li><a href=\"#\" class=\"button fit\">Learn More</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</section>\n\n</div>\n<!-- </body> -->\n<!-- <give-modal *ngIf=\"showModal\" (onSave)=\"addGive($event)\"></give-modal> -->\n\n\n<!-- Scripts -->\n<script src=\"assets/js/jquery.min.js\"></script>\n<script src=\"assets/js/jquery.scrollex.min.js\"></script>\n<script src=\"assets/js/jquery.scrolly.min.js\"></script>\n<script src=\"assets/js/browser.min.js\"></script>\n<script src=\"assets/js/breakpoints.min.js\"></script>\n<script src=\"assets/js/util.js\"></script>\n<script src=\"assets/js/main.js\"></script>"

/***/ }),

/***/ "./client/app/components/dashboard/dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./client/app/components/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _modals_give_give_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/give/give.modal */ "./client/app/components/modals/give/give.modal.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.service */ "./client/app/components/dashboard/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Modals

//Services

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(modalService, _dashboardService, _sanitizer) {
        this.modalService = modalService;
        this._dashboardService = _dashboardService;
        this._sanitizer = _sanitizer;
        this.showModal = false;
        this.embedVideoString = "https://www.youtube.com/embed/fZsfQ6m9izk";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.embedSanitized = this._sanitizer.bypassSecurityTrustResourceUrl(this.embedVideoString);
    };
    DashboardComponent.prototype.donateTime = function () {
        var _this = this;
        this.showModal = true;
        var modalRef = this.modalService.open(_modals_give_give_modal__WEBPACK_IMPORTED_MODULE_3__["GiveModal"]);
        // modalRef.componentInstance.name = 'World';
        // modalRef.componentInstance.id = 10;
        modalRef.result.then(function (result) {
            _this.showModal = false;
            console.log('should be the same', result);
            _this._dashboardService.addGive(result.quality, result.email, result.price, result.priceToCompetitors, result.priceLimit, result.satisfaction, result.suggestions);
        }).catch(function (error) {
            _this.showModal = false;
            console.log('nodal ref err', error);
        });
    };
    DashboardComponent.prototype.onAddTimeModalSave = function (event) {
        console.log('this is the event data', event);
    };
    DashboardComponent.prototype.addGive = function (event) {
        console.log('the event from dashboard', event);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./client/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./client/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./client/app/components/dashboard/dashboard.module.ts":
/*!*************************************************************!*\
  !*** ./client/app/components/dashboard/dashboard.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dashboard/dashboard.component */ "./client/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _modals_give_give_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/give/give.modal */ "./client/app/components/modals/give/give.modal.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Components


//Modules

//Services

var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot()
            ],
            exports: [
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _modals_give_give_modal__WEBPACK_IMPORTED_MODULE_4__["GiveModal"]
            ],
            declarations: [
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _modals_give_give_modal__WEBPACK_IMPORTED_MODULE_4__["GiveModal"]
            ],
            providers: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]
            ],
            entryComponents: [_modals_give_give_modal__WEBPACK_IMPORTED_MODULE_4__["GiveModal"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./client/app/components/dashboard/dashboard.service.ts":
/*!**************************************************************!*\
  !*** ./client/app/components/dashboard/dashboard.service.ts ***!
  \**************************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
        this.uri = 'business';
    }
    DashboardService.prototype.addGive = function (quality, email, price, priceToCompetitors, priceLimit, satisfaction, suggestions) {
        var obj = {
            // brand_name: brandName,
            // brand_description: brandDescription,
            // user_email: userEmail,
            // user_phone: userPhone
            quality: quality,
            email: email,
            price: price,
            priceToCompetitors: priceToCompetitors,
            priceLimit: priceLimit,
            satisfaction: satisfaction,
            suggestions: suggestions
        };
        console.log(obj);
        this.http.post(this.uri + "/add", obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./client/app/components/modals/give/give.modal.css":
/*!**********************************************************!*\
  !*** ./client/app/components/modals/give/give.modal.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Form */\nh4, p, input {\n    color: #000000;\n}\nform {\n    margin: 0 0 2em 0;\n}\n.close {\n    font-size: 2em;\n    box-shadow: none;\n    background: none;\n    position: relative;\n    margin: 0px 12px 0px 0px;\n    padding: 0px;\n    height: 3%;\n    width: 4%;\n    cursor: pointer;\n    color: #000000;\n    z-index: 3;\n}\n.modal-header {\n    display: block;\n}\n.mega-logo {\n    width: 80px;\n}\n.modal-title {\n    margin: 0.5em 0 0em 0em;\n    text-align: center;\n}\nlabel {\n    color: #000;\n    display: block;\n    font-size: 0.9em;\n    font-weight: 600;\n    margin: 0 0 1em 0;\n}\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"email\"],\nselect,\ntextarea {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    -ms-appearance: none;\n    appearance: none;\n    /* background: rgba(144, 144, 144, 0.25); */\n    border-radius: 3px;\n    border: none;\n    box-shadow: 0 0 0 2px #21b2a6;\n    color: #000;\n    display: block;\n    outline: 0;\n    padding: 0 1em;\n    text-decoration: none;\n    width: 100%;\n}\ninput[type=\"text\"]:invalid,\n    input[type=\"password\"]:invalid,\n    input[type=\"email\"]:invalid,\n    select:invalid,\n    textarea:invalid {\n        box-shadow: none;\n    }\ninput[type=\"text\"]:focus,\n    input[type=\"password\"]:focus,\n    input[type=\"email\"]:focus,\n    select:focus,\n    textarea:focus {\n        box-shadow: 0 0 0 2px #21b2a6;\n    }\n.select-wrapper {\n    text-decoration: none;\n    display: block;\n    position: relative;\n}\n.select-wrapper:before {\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        font-family: FontAwesome;\n        font-style: normal;\n        font-weight: normal;\n        text-transform: none !important;\n    }\n.select-wrapper:before {\n        -moz-pointer-events: none;\n        -webkit-pointer-events: none;\n        -ms-pointer-events: none;\n        pointer-events: none;\n        color: #000;\n        content: '\\f078';\n        display: block;\n        height: 2.75em;\n        line-height: 2.75em;\n        position: absolute;\n        right: 0;\n        text-align: center;\n        top: 0;\n        width: 2.75em;\n    }\n.select-wrapper select::-ms-expand {\n        display: none;\n    }\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"email\"],\nselect {\n    height: 2.75em;\n}\ntextarea {\n    padding: 0.75em 1em;\n}\n.opinion-input-title {\n    text-align: center;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    display: block;\n    float: left;\n    width: 1em;\n    z-index: -1;\n}\ninput[type=\"checkbox\"] + label,\ninput[type=\"radio\"] + label {\n    text-decoration: none;\n    color: #000;\n    cursor: pointer;\n    display: inline-block;\n    font-size: 1em;\n    font-weight: 400;\n    padding-left: 2.4em;\n    padding-right: 0.75em;\n    position: relative;\n}\ninput[type=\"checkbox\"] + label:before,\ninput[type=\"radio\"] + label:before {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-family: FontAwesome;\n    font-style: normal;\n    font-weight: normal;\n    text-transform: none !important;\n}\ninput[type=\"checkbox\"] + label:before,\ninput[type=\"radio\"] + label:before {\n    background: rgba(144, 144, 144, 0.25); \n    color: #000;\n    border-radius: 3px;\n    content: '';\n    display: inline-block;\n    height: 1.65em;\n    left: 0;\n    line-height: 1.58125em;\n    position: absolute;\n    text-align: center;\n    top: 0;\n    width: 1.65em;\n}\ninput[type=\"checkbox\"]:checked + label:before,\ninput[type=\"radio\"]:checked + label:before {\n    background: #2e3842;\n    color: #000;\n    content: '\\f00c';\n}\ninput[type=\"checkbox\"]:focus + label:before,\ninput[type=\"radio\"]:focus + label:before {\n    box-shadow: 0 0 0 2px #21b2a6;\n}\ninput[type=\"checkbox\"] + label:before {\n    border-radius: 3px;\n}\ninput[type=\"radio\"] + label:before {\n    border-radius: 100%;\n}\n/* //////////////////////////////// css for cool gradient pink form*/\n.rb-box {\n    width: 80%;\n    max-width: 420px;\n    margin: 50px auto;\n    padding: 1.3em;\n    background: #292942;\n    border-radius: .75em;\n    -webkit-filter: drop-shadow(1px 2px 5px rgba(0,0,0,.3));\n    filter: drop-shadow(1px 2px 5px rgba(0,0,0,.3));\n    box-shadow: \n      0 2px 2px rgba(243,49,128,.5),\n      0 0px 5px rgba(243,49,128,.15),\n      0 0px 4px rgba(0,0,0,.35),\n      0 5px 20px rgba(243,49,128,.25),\n      0 15px 50px rgba(243,49,128,.75),\n      inset 0 0 15px rgba(255,255,255,.05);\n  }\n/* Custom Radio Button */\np {\n    font-size: .9em;\n  }\n.rb {\n    padding: 16px 0;\n    text-align: center;\n    background: rgba(255,255,255,.03);\n    border-radius: .3em;\n  }\n.rb-tab {\n    display: inline-block;\n    position: relative;\n    width: 20%;\n  }\n.rb-txt {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    font-size: .5em;\n    color: #FFFFFF;\n  }\n.rb-spot {\n    position: absolute;\n    width: 18px;\n    height: 18px;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    background: transparent;\n    border: 2px solid rgba(255,255,255,.3);\n    border-radius: 100%;\n    cursor: pointer;\n    transition: ease .5s;\n  }\n.rb-tab-active .rb-spot {\n    background: rgba(0,0,0,.35);\n    border: 2px solid rgba(243,49,128,.6);\n  }\n/* Submit Button */\n.button-box {\n    padding: 10px 0;\n    text-align: center;\n  }\nbutton {\n    display: inline-block;\n    width: 80%;\n    margin-top: 1.2em;\n    padding: 1em;\n    font-size: .9em;\n    color: #D42D78;\n    text-transform: uppercase;\n    text-decoration: none;\n    letter-spacing: .15em;\n    background: white;\n    border: none;\n    outline: none;\n    border-radius: 5em;\n    box-shadow: 0 15px 20px -10px rgba(0, 0, 0, 0.3);\n    transition: \n      color 0.6s, \n      box-shadow 0.3s, \n      -webkit-transform 0.3s;\n    transition: \n      color 0.6s, \n      box-shadow 0.3s, \n      transform 0.3s;\n    transition: \n      color 0.6s, \n      box-shadow 0.3s, \n      transform 0.3s, \n      -webkit-transform 0.3s;\n    cursor: pointer;\n  }\nbutton:hover {\n    box-shadow: 0 3px 5px -5px rgba(0, 0, 0, 0.3);\n    color: #6f6f6f;\n  }\n.btn-donate {\n      width: 100%;\n  }\n.btn-donate:hover {\n      border: 1px solid #21b2a6;\n      background-color: transparent;\n  }\n.give-modal-cnt {\n      margin: 1.75rem auto;\n  }\n.no-padding {\n      padding: 0;\n  }\n.logo-close {\n    -webkit-transform: skewY(-7deg);\n            transform: skewY(-7deg);\n    width: 50%;\n    padding: 3% 0 0 7%;\n  }\n.title {\n    -webkit-transform: skewY(-7deg);\n            transform: skewY(-7deg);\n    margin: 0 0% 2% 10%;\n    padding: 0% 0 0 7%;\n    width: 80%;\n    border-top: 1px solid #21b2a6;\n  }\ninput[type=\"button\"] .test-class .sv_next_btn {\n    background-color: red !important;\n}\n.sv_custom_text {\n    font-family: fantasy;\n    color: chocolate;\n}\n.table-custom {\n    color: #000000;\n}\n/* #surveyElement {\n   padding-top: 5%;\n} */\n"

/***/ }),

/***/ "./client/app/components/modals/give/give.modal.html":
/*!***********************************************************!*\
  !*** ./client/app/components/modals/give/give.modal.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"give-modal-cnt\">\n  <div class=\"modal-header no-padding\">\n    <button type=\"button\" class=\"close col-md-2\" aria-label=\"Close\" (click)=\"_activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <div class=\"logo-close col-md-12\">\n      <img class=\"mega-logo col-md-12\" src=\"assets/images/mega.png\" alt=\"\" />\n    </div>\n    <div class=\"title col-md-12\">\n      <h4 class=\"modal-title\">Mega Image</h4>\n    </div>\n  </div>\n  <div id='surveyElement'></div>\n  <!-- <form #form=\"ngForm\" [formGroup]=\"giveForm\" novalidate>\n    <div class=\"modal-boy\">\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Numele brandului</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"brand_name\" #brand_name />\n      </div>\n      <div *ngIf=\"giveForm.controls['brand_name'].invalid && (giveForm.controls['brand_name'].dirty || giveForm.controls['brand_name'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"giveForm.controls['brand_name'].errors.required\">\n          Numele brandului este necesar.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">De ce va place/nu va place brandul? </label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"brand_description\" #brand_description />\n      </div>\n      <div *ngIf=\"giveForm.controls['brand_description'].invalid && (giveForm.controls['brand_description'].dirty || giveForm.controls['brand_description'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"giveForm.controls['brand_description'].errors.required\">\n          Este necesara o opinie.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Adresa de email </label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"user_email\" #user_email />\n      </div>\n      <div *ngIf=\"giveForm.controls['user_email'].invalid && (giveForm.controls['user_email'].dirty || giveForm.controls['user_email'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"giveForm.controls['user_email'].errors.required\">\n          Adresa dvs de email va rugam!\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Un numar de telefon </label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"user_phone\" #user_phone />\n      </div>\n      <div *ngIf=\"giveForm.controls['user_phone'].invalid && (giveForm.controls['user_phone'].dirty || giveForm.controls['user_phone'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"giveForm.controls['user_phone'].errors.required\">\n          Numarul dvs de telefon va rugam!\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" [disabled]=\"giveForm.pristine || giveForm.invalid\" class=\"btn btn-success btn-donate\"\n        (click)=\"_activeModal.close(form.value)\">\n        Doneaza cuvinte\n      </button>\n    </div>\n  </form> -->\n</div>\n\n\n<!-- <div class=\"list-group\">\n      <div class=\"list-group-item\">\n        <label class=\"opinion-input-title\" for=\"opinion-input\">Iti place?</label>\n        <input type=\"radio\" class=\"opinion-input\" name=\"opinion\" value=\"da\" checked ngModel />DA\n        <input type=\"radio\" class=\"opinion-input\" name=\"opinion\" value=\"nu\" ngModel />NU\n      </div>\n      <div class=\"list-group-item\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <input type=\"text\" name=\"reason\" placeholder=\"un motiv sau doua pentru care iti place acest brand\" ngModel />\n          </div>\n        </div>\n      </div>\n      <div class=\"list-group-item\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <input type=\"text\" name=\"lastUse\" class=\"form-control\" placeholder=\"cand ai folosit ultima oara acest brand\"\n              ngModel />\n          </div>\n        </div>\n      </div>\n      <div class=\"list-group-item\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"te rugam sa ne dai e-mail-ul tau\"\n              ngModel />\n          </div>\n        </div>\n      </div>\n      <div class=\"list-group-item\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <input type=\"text\" name=\"phone\" class=\"form-control\" placeholder=\"...si telefonul\" ngModel />\n          </div>\n        </div>\n      </div>\n    </div> -->"

/***/ }),

/***/ "./client/app/components/modals/give/give.modal.ts":
/*!*********************************************************!*\
  !*** ./client/app/components/modals/give/give.modal.ts ***!
  \*********************************************************/
/*! exports provided: GiveModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiveModal", function() { return GiveModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-angular */ "./node_modules/survey-angular/survey.angular.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_angular__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GiveModal = /** @class */ (function () {
    function GiveModal(_activeModal, _formBuilder) {
        this._activeModal = _activeModal;
        this._formBuilder = _formBuilder;
        this.surveyJSON = {
            // locale: "ro",
            pages: [
                {
                    name: "page1", elements: [
                        {
                            type: "matrix",
                            name: "quality",
                            title: "Va rugam exprimati-va acordul/ dezacordul cu urmatoarele",
                            columns: [
                                // { value: 1, text: "Strongly Disagree" },
                                { value: 1, text: "Nu sunt" },
                                { value: 2, text: "Indiferent" },
                                { value: 3, text: "Sunt" },
                            ],
                            rows: [
                                { value: "affordable", text: "Produsul are pret accesibil" },
                                { value: "doesWhatItClaims", text: "Produsul face ofera ce pretinde" },
                                { value: "betterThenOthers", text: "Produsul este mai bun ca altele similare din piata" },
                                { value: "easyToUse", text: "Produsul este usor de folosit" }
                            ]
                        },
                        {
                            type: "rating",
                            name: "satisfaction",
                            title: "Cat de satisfacut sunteti de produs?",
                            minRateDescription: "Nesatisfacut",
                            maxRateDescription: "Satisfacut"
                        },
                        {
                            type: "rating",
                            name: "recommend friends",
                            visible: false,
                            visibleIf: "{satisfaction} > 3",
                            title: "Cat de probabil este ca sa recomandati produsul unui coleg de munca?",
                            minRateDescription: "Nu recomand",
                            maxRateDescription: "Da, recomand"
                        },
                        {
                            type: "comment",
                            name: "suggestions",
                            title: "Ce v-ar face mai satisfacut de catre produs?"
                        }
                    ]
                },
                {
                    name: "page2", elements: [
                        {
                            type: "radiogroup",
                            name: "priceToCompetitors",
                            title: "Raportat la competitorii nostri considerati ca produsul are pretul",
                            choices: ["Mai Ieftin", "Similat", "Mai Scump", "Nu stiu"]
                        },
                        {
                            type: "radiogroup",
                            name: "price",
                            title: "Considerati ca pretul curent este meritat?",
                            choices: [
                                { value: "correct", text: "Da, pretul este corect" },
                                { value: "low", text: "Nu, pretul este prea mic" },
                                { value: "high", text: "Nu, pretul este prea mare" }
                            ]
                        },
                        {
                            type: "multipletext",
                            name: "priceLimit",
                            title: "Care este... ",
                            items: [
                                {
                                    name: "leastAmount",
                                    title: "Cea mai mica suma rezonabila pentru dvs"
                                },
                                {
                                    name: "mostAmount",
                                    title: "Cea mai mare suma pe care o puteti plati pentru un pradus ca al nostru"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "page3", elements: [
                        {
                            type: "text",
                            name: "email",
                            title: "Multumim pentru timpul daruit! Va rugam sa ne impartasiti adresa dvs de email"
                        }
                    ]
                }
            ]
        };
        this.surveyCustomCss = {
            root: "sv_main sv_default_css",
            header: "sv_header",
            body: "sv_body",
            footer: "sv_nav",
            matrix: {
                root: "table-custom"
            },
            navigationButton: "",
            navigation: {
                "complete": "btn sv_complete_btn",
                "prev": "btn sv_prev_btn",
                "next": "btn sv_next_btn",
                "start": "btn sv_start_btn"
            },
            question: {
                "mainRoot": "sv-question",
                "title": "sv-title",
                "description": "sv-description"
            },
            progress: "progress center-block mx-auto mb-4",
            progressBar: "progress-bar",
        };
        this.createForm();
    }
    GiveModal.prototype.ngOnInit = function () {
        var _this = this;
        survey_angular__WEBPACK_IMPORTED_MODULE_3__["StylesManager"]
            .applyTheme("bootstrap");
        var model = new survey_angular__WEBPACK_IMPORTED_MODULE_3__["Model"](this.surveyJSON);
        model.showProgressBar = 'bottom';
        survey_angular__WEBPACK_IMPORTED_MODULE_3__["SurveyNG"].render('surveyElement', { model: model, css: this.surveyCustomCss });
        console.log('hit give.modal.ts');
        model.onComplete.add(function (res) {
            _this._activeModal.close(res.data);
        });
    };
    GiveModal.prototype.testFunc = function () {
        console.log('we get in test func');
    };
    GiveModal.prototype.createForm = function () {
        this.giveForm = this._formBuilder.group({
            brand_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            brand_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            user_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            user_phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    GiveModal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'give-modal',
            template: __webpack_require__(/*! ./give.modal.html */ "./client/app/components/modals/give/give.modal.html"),
            styles: [__webpack_require__(/*! ./give.modal.css */ "./client/app/components/modals/give/give.modal.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], GiveModal);
    return GiveModal;
}());



/***/ }),

/***/ "./client/environments/environment.ts":
/*!********************************************!*\
  !*** ./client/environments/environment.ts ***!
  \********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./client/main.ts":
/*!************************!*\
  !*** ./client/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./client/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./client/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./client/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/claudiu.ungureanu/Documents/Repos/bogdaproste/client/main.ts */"./client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map