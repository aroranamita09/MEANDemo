(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_components/email/email.component.css":
/*!*******************************************************!*\
  !*** ./src/app/_components/email/email.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2VtYWlsL2VtYWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_components/email/email.component.html":
/*!********************************************************!*\
  !*** ./src/app/_components/email/email.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <form class=\"form-inline\" (ngSubmit)='onSubmit()'>\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Enter your mail id\" formControlName=\"emailId\" aria-label=\"Search\" text-align= \"center\">\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" routerLink=\"/register\">Get access to your free events</button>\n  </form>\n</nav>"

/***/ }),

/***/ "./src/app/_components/email/email.component.ts":
/*!******************************************************!*\
  !*** ./src/app/_components/email/email.component.ts ***!
  \******************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailComponent = /** @class */ (function () {
    function EmailComponent(
    // private formBuilder: FormBuilder,
    // private router: Router,
    // private alertService: AlertService,
    // private emailService: EmailService
    ) {
        this.submitted = false;
    }
    EmailComponent.prototype.ngOnInit = function () {
        // this.firstFormGroup = this.formBuilder.group({
        //   emailId: ['', Validators.required]
        // });
    };
    EmailComponent.prototype.onSubmit = function () {
        // this.submitted = true;
        //  // stop here if form is invalid
        //  if (this.firstFormGroup.invalid) {
        //   alert('register form is invalid ');
        //   return;
        // }
        // const object = Object.assign(this.firstFormGroup.value);
        // this.emailService.postUserEmail(object).subscribe(
        //   data=>{
        //     this.alertService.success(data,true);
        //     alert(data);
        //     //Here we can re-route to landing Page
        //     this.router.navigate(['/home']);
        //   },
        //   error => {
        //     this.alertService.error('email already exists');
        //     alert('error');
        //   }
        // );
    };
    EmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/_components/email/email.component.html"),
            styles: [__webpack_require__(/*! ./email.component.css */ "./src/app/_components/email/email.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/_components/footer/footer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/_components/footer/footer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li a {\r\n    font-size: 15px;\r\n  }\r\n  .copyright-text{\r\n    font-size: 20px;\r\n  }\r\n  .credits a{\r\n    font-size: 15px;\r\n  }\r\n  @media only screen and (max-width: 425px) {\r\n    html{\r\n      width: 100%;\r\n    }\r\n  }  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0U7TUFDRSxXQUFXO0lBQ2I7RUFDRiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIGEge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAuY29weXJpZ2h0LXRleHR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC5jcmVkaXRzIGF7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgIGh0bWx7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH0gICJdfQ== */"

/***/ }),

/***/ "./src/app/_components/footer/footer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/_components/footer/footer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>INTELLIMIND</title>\n  <meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\">\n  <meta content=\"\" name=\"keywords\">\n  <meta content=\"\" name=\"description\">\n\n  <meta property=\"og:title\" content=\"\">\n  <meta property=\"og:image\" content=\"\">\n  <meta property=\"og:url\" content=\"\">\n  <meta property=\"og:site_name\" content=\"\">\n  <meta property=\"og:description\" content=\"\">\n\n  <!-- Twitter Cards integration: https://dev.twitter.com/cards/  -->\n  <meta name=\"twitter:card\" content=\"summary\">\n  <meta name=\"twitter:site\" content=\"\">\n  <meta name=\"twitter:title\" content=\"\">\n  <meta name=\"twitter:description\" content=\"\">\n  <meta name=\"twitter:image\" content=\"\">\n  <!-- Google Fonts -->\n  <link href=\"https://fonts.googleapis.com/css?family=Raleway:400,500,700|Roboto:400,900\" rel=\"stylesheet\">\n\n  <!-- Bootstrap CSS File -->\n  <link href=\"/assets/lib/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n  <!-- Libraries CSS Files -->\n  <link href=\"/assets/lib/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n  <!-- Main Stylesheet File -->\n  <link href=\"/assets/css/style.css\" rel=\"stylesheet\">\n\n</head>\n\n<body>\n  <!-- Page Content\n    ================================================== -->\n    <footer class=\"site-footer\">\n      <div class=\"bottom\">\n        <div class=\"container\">\n          <div class=\"row\">\n\n            <div class=\"col-lg-6 col-xs-12 text-lg-left text-center\">\n              <p class=\"copyright-text\">\n                © INTELLIMIND\n              </p>\n              <div class=\"credits\">\n               Designed by <a href=\"https://github.com/aroranamita09\">NAMITA</a>\n              </div>\n            </div>\n\n            <div class=\"col-lg-6 col-xs-12 text-lg-right text-center\">\n              <ul class=\"list-inline\">\n                <li class=\"list-inline-item\">\n                  <a href=\"https://www.intellimind.com/en\">About Us</a>\n                </li>\n\n                <li class=\"list-inline-item\">\n                  <a href=\"#features\">Features</a>\n                </li>\n\n                <li class=\"list-inline-item\">\n                  <a href=\"#team\">Team</a>\n                </li>\n\n                <li class=\"list-inline-item\">\n                  <a href=\"#contact\">Contact Us</a>\n                </li>\n          \n              </ul>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </footer>\n    <a class=\"scrolltop\" href=\"#\"><span class=\"fa fa-angle-up\"></span></a>\n\n  <!-- Required JavaScript Libraries -->\n  <script src=\"/assets/lib/jquery/jquery.min.js\"></script>\n  <script src=\"/assets/lib/jquery/jquery-migrate.min.js\"></script>\n  <script src=\"/assets/lib/superfish/hoverIntent.js\"></script>\n  <script src=\"/assets/lib/superfish/superfish.min.js\"></script>\n  <script src=\"/assets/lib/tether/js/tether.min.js\"></script>\n  <script src=\"/assets/lib/stellar/stellar.min.js\"></script>\n  <script src=\"/assets/lib/bootstrap/js/bootstrap.bundle.min.js\"></script>\n  <script src=\"/assets/lib/counterup/counterup.min.js\"></script>\n  <script src=\"/assets/lib/waypoints/waypoints.min.js\"></script>\n  <script src=\"/assets/lib/easing/easing.js\"></script>\n  <script src=\"/assets/lib/stickyjs/sticky.js\"></script>\n  <script src=\"/assets/lib/parallax/parallax.js\"></script>\n  <script src=\"/assets/lib/lockfixed/lockfixed.min.js\"></script>\n\n  <!-- Template Specisifc Custom Javascript File -->\n  <script src=\"/assets/js/custom.js\"></script>\n\n  <script src=\"/assets/contactform/contactform.js\"></script>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/_components/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/_components/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/_components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/_components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/_components/home/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/_components/home/home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background-image: image('assets/img/bg_page.jpg');\r\n    \r\n   }\r\n   \r\n   \r\n   img {\r\n        /* border-radius: 90%; */\r\n      \r\n        /* border: 1px solid #acacac; */\r\n         padding: 2px;\r\n        width:100%; \r\n    \r\n         display: block;\r\n        margin-left: auto;\r\n        margin-right: auto; \r\n     }\r\n   \r\n   \r\n   /* Container holding the image and the text*/\r\n   \r\n   \r\n   .container {\r\n    position: relative;\r\n    text-align: center;\r\n    color:rgb(233, 129, 69);\r\n    \r\n  }\r\n   \r\n   \r\n   .centered {\r\n    font-size: 150%;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n    position: absolute;\r\n     top: 20%; \r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n   \r\n   \r\n   .center{\r\n   \r\n    font-size: 300%;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n  }\r\n   \r\n   \r\n   .image { \r\n    position: relative; \r\n    width: 100%; /* for IE 6 */\r\n  \r\n }\r\n   \r\n   \r\n   h2 { \r\n    position: absolute; \r\n    top: 60%; \r\n    width: 100%; \r\n    text-align: center;\r\n    font-size: 150%;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpREFBaUQ7O0dBRWxEOzs7R0FHQTtRQUNLLHdCQUF3Qjs7UUFFeEIsK0JBQStCO1NBQzlCLFlBQVk7UUFDYixVQUFVOztTQUVULGNBQWM7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO0tBQ3JCOzs7R0FDQyw0Q0FBNEM7OztHQUNsRDtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCOztFQUV6Qjs7O0dBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7S0FDakIsUUFBUTtJQUNULFNBQVM7SUFDVCxnQ0FBZ0M7RUFDbEM7OztHQUNBOztJQUVFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COzs7R0FHQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXLEVBQUUsYUFBYTs7Q0FFN0I7OztHQUVBO0lBQ0csa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGltYWdlKCdhc3NldHMvaW1nL2JnX3BhZ2UuanBnJyk7XHJcbiAgICBcclxuICAgfVxyXG4gICBcclxuICAgXHJcbiAgIGltZyB7XHJcbiAgICAgICAgLyogYm9yZGVyLXJhZGl1czogOTAlOyAqL1xyXG4gICAgICBcclxuICAgICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjYWNhY2FjOyAqL1xyXG4gICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgd2lkdGg6MTAwJTsgXHJcbiAgICBcclxuICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcclxuICAgICB9ICBcclxuICAgICAgLyogQ29udGFpbmVyIGhvbGRpbmcgdGhlIGltYWdlIGFuZCB0aGUgdGV4dCovXHJcbi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6cmdiKDIzMywgMTI5LCA2OSk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5jZW50ZXJlZCB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDIwJTsgXHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgLmNlbnRlcntcclxuICAgXHJcbiAgICBmb250LXNpemU6IDMwMCU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG5cclxuICAuaW1hZ2UgeyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICB3aWR0aDogMTAwJTsgLyogZm9yIElFIDYgKi9cclxuICBcclxuIH1cclxuIFxyXG4gaDIgeyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICB0b3A6IDYwJTsgXHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/_components/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/_components/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CSS only -->\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\n\n<!-- JS, Popper.js, and jQuery -->\n<script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\" integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\" integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\" crossorigin=\"anonymous\"></script>\n<section>\n<nav class=\"fixed-top\">\n  <app-navbar></app-navbar>\n</nav>\n</section>\n<p class=\"centered\">Welcome to Intelliminds.<br/>Now you can enjoy free campaining of your events free of cost.<br/>\n      We support all types of Campaigns.<br/>\n    Join our community.We have diverse and global approach.</p>\n    <section>\n<div class=\"image\">\n\n    <img src=\"assets/img/pepls.png\" alt=\"People\" />\n    \n    <h2>Passion-Experience-Leadership</h2>\n\n</div>\n</section>\n\n<!--Text to Join -->\n<section>\n<div class=\"container\">\n<div class=\"center\">\n<p>Join the Campaign Today. Enter your e-mail Id to Register and know People ahead of you.</p>\n<app-email></app-email>\n</div>\n</div>\n</section>\n\n<!--corousel ends-->\n\n<!-- <section >\n \n  <img alt=\"People\" class = 'img-backgrnd' src =\"assets/img/img4.webp\"/>\n  <div class=\"centered\">Passion-Experience-Leadership</div>\n \n</section> -->\n<!--Cards-->   \n<div class=\"card-group\" >\n    <div class=\"card\">\n        <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/rq3QXIVR0bs\" frameborder=\"0\" allowfullscreen></iframe>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Click me to watch</h5>\n        <p class=\"card-text\">Campaigning is empowerment.</p>\n      </div>\n      <div class=\"card-footer\">\n        <small class=\"text-muted\">JOIN THE CAMPAIGN TODAY!</small>\n      </div>\n    </div>\n    <div class=\"card\">     \n        <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/NjBxoN4spKo\" frameborder=\"0\" allowfullscreen></iframe>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Click me to watch</h5>\n        <p class=\"card-text\">Be empowered.</p>\n      </div>\n      <div class=\"card-footer\">\n        <small class=\"text-muted\">JOIN THE CAMPAIGN TODAY!</small>\n      </div>\n    </div>\n    <div class=\"card\">\n        \n        <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/MoHeBnuVg5I\" frameborder=\"0\" allowfullscreen></iframe>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Click me to watch</h5>\n        <p class=\"card-text\">Golden Footsteps.</p>\n      </div>\n      <div class=\"card-footer\">\n        <small class=\"text-muted\">JOIN THE CAMPAIGN TODAY!</small>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-group\">\n      <div class=\"card\">\n          <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/PLWTNUqcq_I\" frameborder=\"0\" allowfullscreen></iframe>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Click me to watch</h5>\n          <p class=\"card-text\">Taking one step ahead to shape the society.</p>\n        </div>\n        <div class=\"card-footer\">\n          <small class=\"text-muted\">JOIN THE CAMPAIGN TODAY!</small>\n        </div>\n      </div>\n      <div class=\"card\">     \n          <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/D46t3831Bk0\" frameborder=\"0\" allowfullscreen></iframe>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Click me to watch</h5>\n          <p class=\"card-text\">Better society,Better we.</p>\n        </div>\n        <div class=\"card-footer\">\n          <small class=\"text-muted\">JOIN THE CAMPAIGN TODAY!</small>\n        </div>\n      </div>\n      <div class=\"card\">\n          \n          <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/G9TdA8d5aaU\" frameborder=\"0\" allowfullscreen></iframe>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Click me to watch</h5>\n          <p class=\"card-text\">Four colleagues. Two days. One chance.</p>\n        </div>\n        <div class=\"card-footer\">\n          <small class=\"text-muted\">JOIN THE CAMPAIGN TODAY! </small>\n        </div>\n      </div>\n    </div>\n \n\n\n<!-- <app-landing></app-landing> -->\n<div id=\"band\" class=\"container text-center\">\n</div>\n"

/***/ }),

/***/ "./src/app/_components/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_components/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/_components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/_components/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/_components/landing/landing.component.css":
/*!***********************************************************!*\
  !*** ./src/app/_components/landing/landing.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/_components/landing/landing.component.html":
/*!************************************************************!*\
  !*** ./src/app/_components/landing/landing.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_components/landing/landing.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/_components/landing/landing.component.ts ***!
  \**********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/_components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/_components/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/_components/leaderboard/leaderboard.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/_components/leaderboard/leaderboard.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /* Style all font awesome icons */\r\n .fa {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n  }\r\n /* Add a hover effect if you want */\r\n .fa:hover {\r\n    opacity: 0.7;\r\n  }\r\n /* Set a specific color for each brand */\r\n /* Facebook */\r\n .fa-facebook {\r\n    background: #3B5998;\r\n    color: white;\r\n  }\r\n /* Twitter */\r\n .fa-twitter {\r\n    background: #55ACEE;\r\n    color: white;\r\n  }\r\n .fa-linkedin {\r\n    background: rgb(10, 148, 253);\r\n    color: white;\r\n  }\r\n .fa-instagram {\r\n    background: rgb(25, 96, 150);\r\n    color: white;\r\n  }\r\n .socialmediaicons .fa {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 70px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    margin: 5px 2px;\r\n}\r\n .socialmediaicons .fa-android {\r\n    background: #a4c639;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQyxpQ0FBaUM7Q0FDakM7SUFDRyxhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0NBRUEsbUNBQW1DO0NBQ25DO0lBQ0UsWUFBWTtFQUNkO0NBRUEsd0NBQXdDO0NBRXhDLGFBQWE7Q0FDYjtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7Q0FFQSxZQUFZO0NBQ1o7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkO0NBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsWUFBWTtFQUNkO0NBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtFQUNkO0NBQ0E7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7Q0FDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudHMvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAvKiBTdHlsZSBhbGwgZm9udCBhd2Vzb21lIGljb25zICovXHJcbiAuZmEge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSBob3ZlciBlZmZlY3QgaWYgeW91IHdhbnQgKi9cclxuICAuZmE6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgYSBzcGVjaWZpYyBjb2xvciBmb3IgZWFjaCBicmFuZCAqL1xyXG4gIFxyXG4gIC8qIEZhY2Vib29rICovXHJcbiAgLmZhLWZhY2Vib29rIHtcclxuICAgIGJhY2tncm91bmQ6ICMzQjU5OTg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFR3aXR0ZXIgKi9cclxuICAuZmEtdHdpdHRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0gXHJcbiAgLmZhLWxpbmtlZGluIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMCwgMTQ4LCAyNTMpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0gXHJcbiAgLmZhLWluc3RhZ3JhbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUsIDk2LCAxNTApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0gXHJcbiAgLnNvY2lhbG1lZGlhaWNvbnMgLmZhIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbjogNXB4IDJweDtcclxufVxyXG4uc29jaWFsbWVkaWFpY29ucyAuZmEtYW5kcm9pZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTRjNjM5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/_components/leaderboard/leaderboard.component.html":
/*!********************************************************************!*\
  !*** ./src/app/_components/leaderboard/leaderboard.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<section>\n  <nav class=\"fixed-top\">\n    <app-navbar></app-navbar>\n  </nav>\n  </section>\n<div class=\"jumbotron\">\n  <h1 class=\"display-4\">ATTARACT MORE AUDIENCE AND GET REFERRAL MONEY IN YOUR POCKET</h1>\n  <p class=\"lead\">Do you know anybody who may benefit from intelliminds.</p>\n  <hr class=\"my-4\">\n  <p>Invite 5 friends to sign up with this unique link.</p>\n  <div class=\"socialmediaicons\">\n  <a href=\"#\" class=\"fa fa-facebook\"></a>\n<a href=\"#\" class=\"fa fa-twitter\"></a>\n<a href=\"javascript:void(0)\" class=\"fa fa-linkedin\"></a>\n<a href=\"javascript:void(0)\" class=\"fa fa-instagram\"></a></div>\n</div>\n\n<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">TOP ACTIVE CAMPAIGNS.LIKE SHARE AND SUBSCRIBE AND EARN MONEY ON REFERRING TO YOUR FRIENDS</li>\n  </ol>\n</nav>\n\n<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">CORONA FUND RAISING </a></li>\n    <li class=\"breadcrumb-item\"><a href=\"#\">LIKE</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">SHARE</li>\n  </ol>\n</nav>\n\n<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">TRUMP'S VOTING CAMPAIGN</a></li>\n    <li class=\"breadcrumb-item\"><a href=\"#\">LIKE</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">SHARE</li>\n  </ol>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/_components/leaderboard/leaderboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/_components/leaderboard/leaderboard.component.ts ***!
  \******************************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent() {
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
    };
    LeaderboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__(/*! ./leaderboard.component.html */ "./src/app/_components/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__(/*! ./leaderboard.component.css */ "./src/app/_components/leaderboard/leaderboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/_components/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/_components/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_components/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/_components/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/_components/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/_components/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/_components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/_components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/_components/navbar/navbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/_components/navbar/navbar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/_components/navbar/navbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/_components/navbar/navbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CSS only -->\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\n\n<!-- JS, Popper.js, and jQuery -->\n<script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\" integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\" integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\" crossorigin=\"anonymous\"></script>\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Intelliminds</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"  routerLink=\"/leaderboard\">LeaderBoard</a>\n      </li>\n     \n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Select Your Options\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">SignUp</a>\n          <a class=\"dropdown-item\" href=\"#\">Login</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">User Profile</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Add Your Campaign</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/_components/navbar/navbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/_components/navbar/navbar.component.ts ***!
  \********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/_components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/_components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/_components/register/register.component.css":
/*!*************************************************************!*\
  !*** ./src/app/_components/register/register.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nami{\r\n   \r\n    text-align: center;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtaXtcclxuICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/_components/register/register.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_components/register/register.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CSS only -->\n<!-- <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\"> -->\n\n<!-- JS, Popper.js, and jQuery -->\n<!-- <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\" integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\" integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\" crossorigin=\"anonymous\"></script> -->\n\n  \n    <nav class=\"fixed-top\">\n        <app-navbar></app-navbar>\n      </nav>\n\n      <div class=\"nami\">\n          <br/>\n          <br/>\n          <br/>\n          <br/>\n      <p>Thankyou for registration.</p>\n      <p>You are currently in the waiting list. {{x}} People have registered ahead of you.</p>\n      <p>We have sent you an e-mail confirmation for your registration.</p>\n      <p>Proceed here to sign-up and get the latest updates for your events</p>\n    </div>\n    <br/>\n          <br/>\n<form>\n    <div class=\"form-row\">\n      <div class=\"col\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\n      </div>\n      <div class=\"col\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\n      </div>\n    </div>\n  </form>\n  <br/>\n  <br/>\n  <form>\n    <div class=\"form-row\">\n      <div class=\"col\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Gender\">\n      </div>\n      <div class=\"col\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Date-Of-Birth(yyyy-mm-dd)\">\n      </div>\n    </div>\n  </form>\n\n  <br/>\n  <br/>\n  <form>\n    <div class=\"form-row\">\n      <div class=\"col\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Email-Id\">\n      </div>\n      <div class=\"col\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Occupation\">\n      </div>\n    </div>\n  </form>\n  <br/>\n  <br/>\n  <form>\n    <div class=\"form-row\">\n      <div class=\"col\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Interest\">\n      </div>\n      <div class=\"col\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Current-City\">\n      </div>\n    </div>\n  </form>\n  <br/>\n  <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"button\" aria-pressed=\"false\" autocomplete=\"off\">\n      Submit\n    </button>\n    <br/>\n    <div class=\"nami\">\n      <h3>Get Involved</h3>\n      <h3>Get your free oppourtunity  to do something that will impact the community.\n          Help community make a difference.</h3>\n        <h3> There are many ways to volunteer, from walking door to door to hosting fundraising events.\nLet us know how you can help.</h3>     \n</div>    \n\n    "

/***/ }),

/***/ "./src/app/_components/register/register.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_components/register/register.component.ts ***!
  \************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    // firstFormGroup: FormGroup;
    // secondFormGroup: FormGroup;
    function RegisterComponent(
    // private formBuilder: FormBuilder,
    // private router: Router,
    // private emailService: EmailService,
    // private alertService: AlertService
    ) {
        // submitted = false;
        this.x = 5;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // this.firstFormGroup = this.formBuilder.group({
        //   firstName: ['', Validators.required],
        //   lastName: ['', Validators.required],
        //   emailId: ['', Validators.required],
        //   password: ['', [Validators.required, Validators.minLength(7)]],
        //   interest: ['', Validators.required],
        //   username: ['', Validators.required],
        // });
        // this.secondFormGroup = this.formBuilder.group({
        //   gender: [''],
        //   age: [''],
        //   college: [''],
        //   course: [''],
        //   discipline: [''],
        //   company: ['']
        // });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/_components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/_components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/register/register.component */ "./src/app/_components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/home/home.component */ "./src/app/_components/home/home.component.ts");
/* harmony import */ var _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/leaderboard/leaderboard.component */ "./src/app/_components/leaderboard/leaderboard.component.ts");






var routes = [
    { path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        data: { state: 'isHome' }
    },
    {
        path: 'leaderboard',
        component: _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_5__["LeaderboardComponent"],
        data: { state: 'isHome' }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Site {\r\n    display: flex;\r\n    min-height: 100vh;\r\n    flex-direction: column;\r\n    position: relative;\r\n   \r\n  }\r\n  \r\n  .Site-content {\r\n    flex: 1;\r\n  }\r\n \r\n   \r\n    \r\n   \r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7O0VBRXBCOztFQUVBO0lBQ0UsT0FBTztFQUNUIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU2l0ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLlNpdGUtY29udGVudCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuIFxyXG4gICBcclxuICAgIFxyXG4gICBcclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body class=\"Site\">\n    \n  <main class=\"Site-content\">\n      <router-outlet></router-outlet>\n  </main>\n  <app-footer></app-footer>\n  </body>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/footer/footer.component */ "./src/app/_components/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/home/home.component */ "./src/app/_components/home/home.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/landing/landing.component */ "./src/app/_components/landing/landing.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/login/login.component */ "./src/app/_components/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/register/register.component */ "./src/app/_components/register/register.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_components/navbar/navbar.component */ "./src/app/_components/navbar/navbar.component.ts");
/* harmony import */ var _components_email_email_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_components/email/email.component */ "./src/app/_components/email/email.component.ts");
/* harmony import */ var _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/leaderboard/leaderboard.component */ "./src/app/_components/leaderboard/leaderboard.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_email_email_component__WEBPACK_IMPORTED_MODULE_12__["EmailComponent"],
                _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_13__["LeaderboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yh336e\Downloads\flask-app\flask-single-page-app-master\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map