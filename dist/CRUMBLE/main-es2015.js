(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+2AF":
/*!************************************************!*\
  !*** ./src/app/subreddit/subreddit.service.ts ***!
  \************************************************/
/*! exports provided: SubredditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubredditService", function() { return SubredditService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let SubredditService = class SubredditService {
    constructor(http) {
        this.http = http;
    }
    getAllSubreddits() {
        return this.http.get('http://localhost:8080/api/subreddit');
    }
    createSubreddit(subredditModel) {
        return this.http.post('http://localhost:8080/api/subreddit', subredditModel);
    }
};
SubredditService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SubredditService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SubredditService);



/***/ }),

/***/ "+w81":
/*!**************************************************************!*\
  !*** ./src/app/auth/user-profile/user-profile.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mrw01f\Documents\Github\CRUMBLE\src\main.ts */"zUnb");


/***/ }),

/***/ "3Goj":
/*!*************************************************************************!*\
  !*** ./src/app/subreddit/list-subreddits/list-subreddits.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXN1YnJlZGRpdHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "4Tle":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"register-section\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-3\"></div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" style=\"text-align: center\">\r\n                    <h4>Register</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\">\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"email_address\" class=\"col-md-4 col-form-label text-md-right\">E-Mail\r\n                                Address</label>\r\n                            <div class=\"col-md-6\">\r\n                                <input type=\"text\" [formControlName]=\"'email'\" id=\"email_address\" class=\"form-control\" name=\"email-address\" required\r\n                                    autofocus>\r\n                                <span *ngIf=\"!signupForm.get('email').valid && signupForm.get('email').touched\">\r\n                                    Please provide a valid email\r\n                                </span>                                    \r\n                            </div>\r\n                        </div>\r\n \r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-md-4 col-form-label text-md-right\">User Name</label>\r\n                            <div class=\"col-md-6\">\r\n                                <input type=\"text\" [formControlName]=\"'username'\"class=\"form-control\" required autofocus>\r\n                                <span *ngIf=\"!signupForm.get('username').valid && signupForm.get('username').touched\">\r\n                                    Please provide a valid username\r\n                                </span>                                 \r\n                            </div>\r\n                        </div>\r\n \r\n                        <div class=\"form-group row\">\r\n                            <label for=\"password\" class=\"col-md-4 col-form-label text-md-right\">Password</label>\r\n                            <div class=\"col-md-6\">\r\n                                <input type=\"password\" [formControlName]=\"'password'\" id=\"password\" class=\"form-control\" name=\"password\" required>\r\n                                <span *ngIf=\"!signupForm.get('password').valid && signupForm.get('password').touched\">\r\n                                    Please provide a valid Password\r\n                                </span>  \r\n                            </div>\r\n                        </div>\r\n \r\n                        <span class=\"col-md-6 offset-md-4\">\r\n                            <button type=\"submit\" class=\"sign-up\">\r\n                                Sign Up\r\n                            </button>\r\n                            <span style=\"padding-left: 15px\">Existing user? <a routerLink=\"/login\">Log In</a></span>\r\n                        </span>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\"></div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "5KxU":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/view-post/view-post.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <hr />\r\n    <div class=\"col-md-9\">\r\n      <div class=\"row post\">\r\n        <div class=\"col-md-1\">\r\n          <app-vote-button [post]=\"post\"></app-vote-button>\r\n        </div>\r\n        <div class=\"col-md-11\">\r\n          <span>\r\n            <span class=\"subreddit-text\"><a class=\"post-url\" href=\"\">{{post.subredditName}}</a></span>\r\n            <span> . Posted\r\n              <span> {{post.duration}} </span>\r\n              by              \r\n              <a class=\"username\" href=\"\">{{post.userName}}</a>\r\n            </span>\r\n          </span>\r\n          <hr />\r\n          <a routerLink=\"post.url\" class=\"post-title\">{{post.postName}}</a>\r\n          <div>\r\n            <p class=\"post-text\" [innerHtml]=\"post.description\"></p>\r\n          </div>\r\n          <div class=\"post-comment\">\r\n            <form [formGroup]=\"commentForm\" (ngSubmit)=\"postComment()\">\r\n              <div class=\"form-group\">\r\n                <textarea class=\"form-control\" [formControlName]=\"'text'\" placeholder=\"Your Thoughts?\"></textarea>\r\n              </div>\r\n              <button type=\"submit\" class=\"login float-right\">Comment</button>\r\n            </form>\r\n          </div>\r\n          <div style=\"margin-top: 60px;\" *ngFor=\"let comment of comments\">\r\n            <div class=\"comment\">\r\n              <div class=\"username\">\r\n                <a routerLink=\"/user/comment.username\">{{comment.userName}}</a>\r\n              </div>\r\n              <div>\r\n                <p>{{comment.duration}}</p>\r\n              </div>\r\n              <b>{{comment.text}}</b>\r\n            </div>\r\n            <hr />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <app-side-bar></app-side-bar>\r\n      <app-subreddit-side-bar></app-subreddit-side-bar>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "RV7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/post.service */ "EthR");





let HomeComponent = class HomeComponent {
    constructor(postService) {
        this.postService = postService;
        this.posts = [];
        this.postService.getAllPosts().subscribe(post => {
            this.posts = post;
        });
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BlVh":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/vote-button/vote-button.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Section to Display Votes-->\r\n<div class=\"col-md-1\">\r\n    <div class=\"d-flex flex-column votebox\">\r\n    <div class=\"p-2\">\r\n        <fa-icon (click)=\"upvotePost()\" class=\"upvote\" [icon]=\"faArrowUp\" [style.color]=\"post.upVote ? 'green':''\">\r\n        </fa-icon>\r\n    </div>\r\n    <div class=\"p-2 votecount\">{{post.voteCount}}</div>\r\n    <div class=\"p-2\">\r\n        <fa-icon (click)=\"downvotePost()\" class=\"downvote\" [icon]=\"faArrowDown\" [style.color]=\"post.downVote ? 'red':''\">\r\n        </fa-icon>\r\n    </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "CYAm":
/*!***************************************************************************!*\
  !*** ./src/app/shared/subreddit-side-bar/subreddit-side-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: SubredditSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubredditSideBarComponent", function() { return SubredditSideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subreddit_side_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subreddit-side-bar.component.html */ "oAXe");
/* harmony import */ var _subreddit_side_bar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subreddit-side-bar.component.css */ "jq6S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/subreddit/subreddit.service */ "+2AF");





let SubredditSideBarComponent = class SubredditSideBarComponent {
    constructor(subredditService) {
        this.subredditService = subredditService;
        this.subreddits = [];
        this.subredditService.getAllSubreddits().subscribe(data => {
            if (data.length > 3) {
                this.subreddits = data.splice(0, 3);
                this.displayViewAll = true;
            }
            else {
                this.subreddits = data;
            }
        });
    }
    ngOnInit() { }
};
SubredditSideBarComponent.ctorParameters = () => [
    { type: src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_4__["SubredditService"] }
];
SubredditSideBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subreddit-side-bar',
        template: _raw_loader_subreddit_side_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subreddit_side_bar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubredditSideBarComponent);



/***/ }),

/***/ "DN7M":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header{\r\n    border-radius: 1px solid;\r\n}\r\n.reddit-icon-svg{\r\n    height: 50px;\r\n    padding: 8px 8px 8px 0;\r\n    width: 50px;\r\n}\r\n.reddit-text{        \r\n    font-weight: 700;\r\n    height: 50px;\r\n    width: 50px;    \r\n}\r\n.logo{\r\n    text-decoration: none;\r\n}\r\n.login, .sign-up{    \r\n    background-color: transparent;\r\n    border-color: #0079D3;\r\n    color: #0079D3;\r\n    fill: #0079D3;\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    line-height: 24px;\r\n    text-transform: uppercase;\r\n    padding: 3px 16px;\r\n    opacity: 1;  \r\n}\r\n.sign-up{\r\n    background-color: #0079D3;\r\n    border-color: #0079D3;\r\n    color: aliceblue;\r\n}\r\n.sign-up:hover{\r\n    opacity: 0.6;\r\n}\r\n.userdetails{    \r\n    background-color: transparent;\r\n    border-color: #0079D3;\r\n    color: #0079D3;\r\n    fill: #0079D3;\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    line-height: 24px;\r\n    text-transform: uppercase;\r\n    padding: 3px 16px;\r\n    opacity: 1;\r\n    border: 0px;\r\n}\r\n.userdetails:hover{\r\n    border: 1px solid;\r\n}\r\n.dropdown-item{\r\n    background-color: #f8f9fa;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 18px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.dropdown-item:hover{\r\n    background-color: #0079D3;\r\n}\r\n.dropdown-menu{\r\n    background-color: #f8f9fa;\r\n}\r\n.account-icon{\r\n    border-radius: 4px;\r\n    float: left;\r\n    margin-right: 5px;\r\n    max-height: 24px;\r\n    max-width: 24px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHggc29saWQ7XHJcbn1cclxuLnJlZGRpdC1pY29uLXN2Z3tcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDA7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLnJlZGRpdC10ZXh0eyAgICAgICAgXHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7ICAgIFxyXG59XHJcbi5sb2dve1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubG9naW4sIC5zaWduLXVweyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3OUQzO1xyXG4gICAgY29sb3I6ICMwMDc5RDM7XHJcbiAgICBmaWxsOiAjMDA3OUQzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDNweCAxNnB4O1xyXG4gICAgb3BhY2l0eTogMTsgIFxyXG59XHJcblxyXG4uc2lnbi11cHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc5RDM7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDc5RDM7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4uc2lnbi11cDpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLnVzZXJkZXRhaWxzeyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3OUQzO1xyXG4gICAgY29sb3I6ICMwMDc5RDM7XHJcbiAgICBmaWxsOiAjMDA3OUQzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDNweCAxNnB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG59XHJcblxyXG4udXNlcmRldGFpbHM6aG92ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OUQzO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5hY2NvdW50LWljb257XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWF4LWhlaWdodDogMjRweDtcclxuICAgIG1heC13aWR0aDogMjRweDtcclxufSJdfQ== */");

/***/ }),

/***/ "EthR":
/*!****************************************!*\
  !*** ./src/app/shared/post.service.ts ***!
  \****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let PostService = class PostService {
    constructor(http) {
        this.http = http;
    }
    getAllPosts() {
        return this.http.get('http://localhost:8080/api/posts/');
    }
    createPost(postPayload) {
        return this.http.post('http://localhost:8080/api/posts/', postPayload);
    }
    getPost(id) {
        return this.http.get('http://localhost:8080/api/posts/' + id);
    }
    getAllPostsByUser(name) {
        return this.http.get('http://localhost:8080/api/posts/by-user/' + name);
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reddit-body\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <hr />\r\n      <div class=\"col-md-9\">\r\n        <app-post-tile [posts]=\"posts\"></app-post-tile>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <app-side-bar></app-side-bar>\r\n        <app-subreddit-side-bar></app-subreddit-side-bar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "Gkp2":
/*!*******************************************************!*\
  !*** ./src/app/post/view-post/view-post.component.ts ***!
  \*******************************************************/
/*! exports provided: ViewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPostComponent", function() { return ViewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_post_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-post.component.html */ "5KxU");
/* harmony import */ var _view_post_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-post.component.css */ "RLl6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/post.service */ "EthR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/comment/comment.service */ "mqg1");









let ViewPostComponent = class ViewPostComponent {
    constructor(postService, activateRoute, commentService, router) {
        this.postService = postService;
        this.activateRoute = activateRoute;
        this.commentService = commentService;
        this.router = router;
        this.postId = this.activateRoute.snapshot.params.id;
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
        this.commentPayload = {
            text: '',
            postId: this.postId
        };
    }
    ngOnInit() {
        this.getPostById();
        this.getCommentsForPost();
    }
    postComment() {
        this.commentPayload.text = this.commentForm.get('text').value;
        this.commentService.postComment(this.commentPayload).subscribe(data => {
            this.commentForm.get('text').setValue('');
            this.getCommentsForPost();
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        });
    }
    getPostById() {
        this.postService.getPost(this.postId).subscribe(data => {
            this.post = data;
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        });
    }
    getCommentsForPost() {
        this.commentService.getAllCommentsForPost(this.postId).subscribe(data => {
            this.comments = data;
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        });
    }
};
ViewPostComponent.ctorParameters = () => [
    { type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_8__["CommentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ViewPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-post',
        template: _raw_loader_view_post_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_post_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewPostComponent);



/***/ }),

/***/ "H9UO":
/*!****************************************!*\
  !*** ./src/app/shared/vote.service.ts ***!
  \****************************************/
/*! exports provided: VoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteService", function() { return VoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let VoteService = class VoteService {
    constructor(http) {
        this.http = http;
    }
    vote(votePayload) {
        return this.http.post('http://localhost:8080/api/votes/', votePayload);
    }
};
VoteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VoteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VoteService);



/***/ }),

/***/ "IVQd":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/list-subreddits/list-subreddits.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n      <hr />\r\n      <div class=\"col-md-9\">\r\n        <h2>List of Subreddits</h2>\r\n        <ul>\r\n          <li *ngFor=\"let subreddit of subreddits\">\r\n              <a routerLink=\"/view-subreddit/{{subreddit.id}}\">{{subreddit.name}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <app-side-bar></app-side-bar>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "JmpU":
/*!**************************************************************!*\
  !*** ./src/app/shared/vote-button/vote-button.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".votebox {    \r\n    display: flex;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    font-size: 1em;    \r\n}\r\n\r\n.votesection{\r\n    margin:0px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.upvote,.downvote {\r\n    cursor: pointer;\r\n    border-radius: 2px solid;        \r\n}\r\n\r\n.upvote:hover {\r\n    color: green;\r\n}\r\n\r\n.downvote:hover {\r\n    color: red;\r\n}\r\n\r\n.votecount{\r\n    font-weight: bold;    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdGUtYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InZvdGUtYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudm90ZWJveCB7ICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDFlbTsgICAgXHJcbn1cclxuXHJcbi52b3Rlc2VjdGlvbntcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi51cHZvdGUsLmRvd252b3RlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweCBzb2xpZDsgICAgICAgIFxyXG59XHJcbi51cHZvdGU6aG92ZXIge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5kb3dudm90ZTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4udm90ZWNvdW50e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxyXG59Il19 */");

/***/ }),

/***/ "KrRH":
/*!************************************************************************!*\
  !*** ./src/app/subreddit/list-subreddits/list-subreddits.component.ts ***!
  \************************************************************************/
/*! exports provided: ListSubredditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSubredditsComponent", function() { return ListSubredditsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_subreddits_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-subreddits.component.html */ "IVQd");
/* harmony import */ var _list_subreddits_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-subreddits.component.css */ "3Goj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _subreddit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subreddit.service */ "+2AF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






let ListSubredditsComponent = class ListSubredditsComponent {
    constructor(subredditService) {
        this.subredditService = subredditService;
    }
    ngOnInit() {
        this.subredditService.getAllSubreddits().subscribe(data => {
            this.subreddits = data;
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
        });
    }
};
ListSubredditsComponent.ctorParameters = () => [
    { type: _subreddit_service__WEBPACK_IMPORTED_MODULE_4__["SubredditService"] }
];
ListSubredditsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-subreddits',
        template: _raw_loader_list_subreddits_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_subreddits_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListSubredditsComponent);



/***/ }),

/***/ "LJvn":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register-section {\r\n  margin: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLXNlY3Rpb24ge1xyXG4gIG1hcmdpbjogMTAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "LT7N":
/*!**************************************!*\
  !*** ./src/app/token-interceptor.ts ***!
  \**************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/shared/auth.service */ "XQLn");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let TokenInterceptor = class TokenInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.isTokenRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    intercept(req, next) {
        if (req.url.indexOf('refresh') !== -1 || req.url.indexOf('login') !== -1) {
            return next.handle(req);
        }
        const jwtToken = this.authService.getJwtToken();
        if (jwtToken) {
            return next.handle(this.addToken(req, jwtToken)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]
                    && error.status === 403) {
                    return this.handleAuthErrors(req, next);
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
            }));
        }
        return next.handle(req);
    }
    handleAuthErrors(req, next) {
        if (!this.isTokenRefreshing) {
            this.isTokenRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((refreshTokenResponse) => {
                this.isTokenRefreshing = false;
                this.refreshTokenSubject
                    .next(refreshTokenResponse.authenticationToken);
                return next.handle(this.addToken(req, refreshTokenResponse.authenticationToken));
            }));
        }
        else {
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(result => result !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((res) => {
                return next.handle(this.addToken(req, this.authService.getJwtToken()));
            }));
        }
    }
    addToken(req, jwtToken) {
        return req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + jwtToken)
        });
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenInterceptor);



/***/ }),

/***/ "OxXG":
/*!**************************************************************************!*\
  !*** ./src/app/subreddit/create-subreddit/create-subreddit.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateSubredditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubredditComponent", function() { return CreateSubredditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_subreddit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-subreddit.component.html */ "nVOJ");
/* harmony import */ var _create_subreddit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-subreddit.component.css */ "bFAj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _subreddit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subreddit.service */ "+2AF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");








let CreateSubredditComponent = class CreateSubredditComponent {
    constructor(router, subredditService) {
        this.router = router;
        this.subredditService = subredditService;
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.createSubredditForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.subredditModel = {
            name: '',
            description: ''
        };
    }
    ngOnInit() {
    }
    discard() {
        this.router.navigateByUrl('/');
    }
    createSubreddit() {
        this.subredditModel.name = this.createSubredditForm.get('title')
            .value;
        this.subredditModel.description = this.createSubredditForm.get('description')
            .value;
        this.subredditService.createSubreddit(this.subredditModel).subscribe(data => {
            this.router.navigateByUrl('/list-subreddits');
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(error);
        });
    }
};
CreateSubredditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _subreddit_service__WEBPACK_IMPORTED_MODULE_6__["SubredditService"] }
];
CreateSubredditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-subreddit',
        template: _raw_loader_create_subreddit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_subreddit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateSubredditComponent);



/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/auth.service */ "XQLn");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        const isAuthenticated = this.authService.isLoggedIn();
        if (isAuthenticated) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "P6Mw":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/create-post/create-post.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n      <hr />\r\n      <div class=\"create-post-container col-md-9\">\r\n        <form class=\"post-form\" [formGroup]=\"createPostForm\" (ngSubmit)=\"createPost()\">\r\n          <div class=\"form-group\">\r\n            <div class=\"create-post-heading\">Create Post</div>\r\n            <hr />\r\n            <input type=\"text\" [formControlName]=\"'postName'\" class=\"form-control\" style=\"margin-top: 5px\"\r\n              placeholder=\"Title\">\r\n  \r\n            <input type=\"text\" class=\"form-control\" [formControlName]=\"'url'\" style=\"margin-top: 5px\" placeholder=\"URL\">\r\n  \r\n            <select class=\"form-control\" style=\"margin-top: 10px\" [formControlName]=\"'subredditName'\">\r\n              <option value=\"\" selected disabled>Select Subreddit</option>\r\n              <option *ngFor=\"let subreddit of subreddits\">{{subreddit.name}}</option>\r\n            </select>\r\n  \r\n            <editor [formControlName]=\"'description'\" [init]=\"{\r\n                        height: 500,\r\n                        menubar: false,\r\n                        plugins: [\r\n                          'advlist autolink lists link image charmap print preview anchor',\r\n                          'searchreplace visualblocks code fullscreen',\r\n                          'insertdatetime media table paste code help wordcount'\r\n                        ],\r\n                        toolbar:\r\n                          'undo redo | formatselect | bold italic backcolor | \\\r\n                          alignleft aligncenter alignright alignjustify | \\\r\n                          bullist numlist outdent indent | removeformat | help'\r\n                      }\"></editor>\r\n            <span>\r\n              <div style=\"margin-top: 5px\" class=\"float-right\">\r\n                <button (click)=\"discardPost()\" class=\"btnDiscard\">Discard</button>\r\n                <button class=\"btnCreatePost\">Post</button>\r\n              </div>\r\n            </span>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "Pt3+":
/*!*************************************************!*\
  !*** ./src/app/shared/vote-button/vote-type.ts ***!
  \*************************************************/
/*! exports provided: VoteType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteType", function() { return VoteType; });
var VoteType;
(function (VoteType) {
    VoteType[VoteType["UPVOTE"] = 0] = "UPVOTE";
    VoteType[VoteType["DOWNVOTE"] = 1] = "DOWNVOTE";
})(VoteType || (VoteType = {}));


/***/ }),

/***/ "QHtL":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/user-profile.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div>\r\n    Welcome <b>{{name}}</b>.<br /> You have posted <b>{{postLength}}</b> time(s) and commented\r\n    <b>{{commentLength}}</b> time(s).\r\n    You can check your post and comment history below.\r\n  </div>\r\n  <hr />\r\n  <div>\r\n    Your Posts:\r\n  </div>\r\n  <app-post-tile [posts]=\"posts\"></app-post-tile>\r\n  <hr />\r\n  <div>\r\n    Your Comments:\r\n  </div>\r\n  <div *ngFor=\"let comment of comments\">\r\n    <div class=\"comment\">\r\n      <div class=\"username\">\r\n        <a routerLink=\"/user/comment.username\">{{comment.userName}}</a>\r\n      </div>\r\n      <div>\r\n        <p>{{comment.duration}}</p>\r\n      </div>\r\n      <b>{{comment.text}}</b>\r\n    </div>\r\n    <hr />\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "RLl6":
/*!********************************************************!*\
  !*** ./src/app/post/view-post/view-post.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post-title {\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  opacity: 1;\r\n}\r\n\r\n.post-title:hover {\r\n  opacity: 0.6;\r\n}\r\n\r\n.subreddit-text {\r\n  font-weight: bold;\r\n}\r\n\r\n.post-url {\r\n  color: black;\r\n}\r\n\r\n.username{\r\n    color: gray;\r\n}\r\n\r\n.post-text{\r\n    margin-top: 10px;\r\n}\r\n\r\n.post{\r\n    --post-line-color: #ccc;    \r\n    border: 1px solid #ccc;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    overflow: hidden;\r\n    background-color: rgba(255,255,255,0.8);\r\n    color: #878A8C;\r\n    position: relative;\r\n    border-radius: 4px;\r\n    padding:5px;\r\n}\r\n\r\n.comment{    \r\n    --post-line-color: #ccc;    \r\n    border: 1px solid #ccc;    \r\n    margin-bottom: 10px;\r\n    overflow: hidden;\r\n    background-color: rgba(255,255,255,0.8);\r\n    color: #878A8C;\r\n    position: relative;\r\n    border-radius: 4px;\r\n    padding:5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZiIsImZpbGUiOiJ2aWV3LXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LXRpdGxlIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnBvc3QtdGl0bGU6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLnN1YnJlZGRpdC10ZXh0IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnBvc3QtdXJsIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi51c2VybmFtZXtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ucG9zdC10ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBvc3R7XHJcbiAgICAtLXBvc3QtbGluZS1jb2xvcjogI2NjYzsgICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gICAgY29sb3I6ICM4NzhBOEM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOjVweDtcclxufVxyXG5cclxuLmNvbW1lbnR7ICAgIFxyXG4gICAgLS1wb3N0LWxpbmUtY29sb3I6ICNjY2M7ICAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcclxuICAgIGNvbG9yOiAjODc4QThDO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "RV7M":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "SBxm":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.component.html */ "4Tle");
/* harmony import */ var _signup_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component.css */ "LJvn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/auth.service */ "XQLn");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");








let SignupComponent = class SignupComponent {
    constructor(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.signupRequestPayload = {
            username: '',
            email: '',
            password: ''
        };
    }
    ngOnInit() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    signup() {
        this.signupRequestPayload.email = this.signupForm.get('email').value;
        this.signupRequestPayload.username = this.signupForm.get('username').value;
        this.signupRequestPayload.password = this.signupForm.get('password').value;
        this.authService.signup(this.signupRequestPayload)
            .subscribe(data => {
            this.router.navigate(['/login'], { queryParams: { registered: 'true' } });
        }, error => {
            console.log(error);
            this.toastr.error('Registration Failed! Please try again');
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-reddit-clone';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "Tyzf":
/*!************************************************************!*\
  !*** ./src/app/post/create-post/create-post.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btnCreatePost,\r\n.btnCreateSubreddit {\r\n  margin-top: 5px;\r\n}\r\n\r\n.post-form {\r\n  margin: 2px;\r\n}\r\n\r\n.comment-notification {\r\n  margin-top: 5px;\r\n}\r\n\r\n.create-post-container {\r\n  margin-top: 10px;\r\n  --post-line-color: #ccc;\r\n  border: 1px solid #ccc;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  overflow: hidden;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  color: #878A8C;\r\n  position: relative;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n}\r\n\r\n.btnDiscard {\r\n    fill: #0079D3;\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    line-height: 24px;\r\n    text-transform: uppercase;\r\n    padding: 3px 16px;\r\n    opacity: 1;\r\n    width: 288px;\r\n    height: 34px;\r\n    margin-top: 5px;\r\n    color: #0079D3;\r\n    background-color: transparent;\r\n  }\r\n\r\n.create-post-heading {\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  line-height: 22px;\r\n  color: #1c1c1c;\r\n  flex: 1;\r\n}\r\n\r\n.btnCreatePost {\r\n    background-color: #0079D3;\r\n    border-color: #0079D3;\r\n    color: aliceblue;\r\n    fill: #0079D3;\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    line-height: 24px;\r\n    text-transform: uppercase;\r\n    padding: 3px 16px;\r\n    opacity: 1;\r\n    width: 288px;\r\n    height: 34px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCw2QkFBNkI7RUFDL0I7O0FBRUY7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBRWQsT0FBTztBQUNUOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0VBQ2QiLCJmaWxlIjoiY3JlYXRlLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5DcmVhdGVQb3N0LFxyXG4uYnRuQ3JlYXRlU3VicmVkZGl0IHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5wb3N0LWZvcm0ge1xyXG4gIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4uY29tbWVudC1ub3RpZmljYXRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmNyZWF0ZS1wb3N0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAtLXBvc3QtbGluZS1jb2xvcjogI2NjYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBjb2xvcjogIzg3OEE4QztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmJ0bkRpc2NhcmQge1xyXG4gICAgZmlsbDogIzAwNzlEMztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDNweCAxNnB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAyODhweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiAjMDA3OUQzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuLmNyZWF0ZS1wb3N0LWhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGNvbG9yOiAjMWMxYzFjO1xyXG4gIC1tcy1mbGV4OiAxO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5idG5DcmVhdGVQb3N0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc5RDM7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDc5RDM7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZmlsbDogIzAwNzlEMztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDNweCAxNnB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAyODhweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICB9Il19 */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "XQLn":
/*!*********************************************!*\
  !*** ./src/app/auth/shared/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "0uJq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let AuthService = class AuthService {
    constructor(httpClient, localStorage) {
        this.httpClient = httpClient;
        this.localStorage = localStorage;
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.username = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.refreshTokenPayload = {
            refreshToken: this.getRefreshToken(),
            username: this.getUserName()
        };
    }
    signup(signupRequestPayload) {
        return this.httpClient.post('http://localhost:8080/api/auth/signup', signupRequestPayload, { responseType: 'text' });
    }
    login(loginRequestPayload) {
        return this.httpClient.post('http://localhost:8080/api/auth/login', loginRequestPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => {
            this.localStorage.store('authenticationToken', data.authenticationToken);
            this.localStorage.store('username', data.username);
            this.localStorage.store('refreshToken', data.refreshToken);
            this.localStorage.store('expiresAt', data.expiresAt);
            this.loggedIn.emit(true);
            this.username.emit(data.username);
            return true;
        }));
    }
    getJwtToken() {
        return this.localStorage.retrieve('authenticationToken');
    }
    refreshToken() {
        return this.httpClient.post('http://localhost:8080/api/auth/refresh/token', this.refreshTokenPayload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            this.localStorage.clear('authenticationToken');
            this.localStorage.clear('expiresAt');
            this.localStorage.store('authenticationToken', response.authenticationToken);
            this.localStorage.store('expiresAt', response.expiresAt);
        }));
    }
    logout() {
        this.httpClient.post('http://localhost:8080/api/auth/logout', this.refreshTokenPayload, { responseType: 'text' })
            .subscribe(data => {
            console.log(data);
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        });
        this.localStorage.clear('authenticationToken');
        this.localStorage.clear('username');
        this.localStorage.clear('refreshToken');
        this.localStorage.clear('expiresAt');
    }
    getUserName() {
        return this.localStorage.retrieve('username');
    }
    getRefreshToken() {
        return this.localStorage.retrieve('refreshToken');
    }
    isLoggedIn() {
        return this.getJwtToken() != null;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
AuthService.propDecorators = {
    loggedIn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    username: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component */ "SBxm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-webstorage */ "0uJq");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./token-interceptor */ "LT7N");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var _shared_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/post-tile/post-tile.component */ "cmaH");
/* harmony import */ var _shared_vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/vote-button/vote-button.component */ "aUGB");
/* harmony import */ var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/side-bar/side-bar.component */ "yObi");
/* harmony import */ var _shared_subreddit_side_bar_subreddit_side_bar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/subreddit-side-bar/subreddit-side-bar.component */ "CYAm");
/* harmony import */ var _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./subreddit/create-subreddit/create-subreddit.component */ "OxXG");
/* harmony import */ var _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./post/create-post/create-post.component */ "tj9r");
/* harmony import */ var _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./subreddit/list-subreddits/list-subreddits.component */ "KrRH");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "crmZ");
/* harmony import */ var _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./post/view-post/view-post.component */ "Gkp2");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/user-profile/user-profile.component */ "orKW");



























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _shared_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_16__["PostTileComponent"],
            _shared_vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_17__["VoteButtonComponent"],
            _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_18__["SideBarComponent"],
            _shared_subreddit_side_bar_subreddit_side_bar_component__WEBPACK_IMPORTED_MODULE_19__["SubredditSideBarComponent"],
            _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_20__["CreateSubredditComponent"],
            _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_21__["CreatePostComponent"],
            _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_22__["ListSubredditsComponent"],
            _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_24__["ViewPostComponent"],
            _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_26__["UserProfileComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__["NgxWebstorageModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_23__["EditorModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "aUGB":
/*!*************************************************************!*\
  !*** ./src/app/shared/vote-button/vote-button.component.ts ***!
  \*************************************************************/
/*! exports provided: VoteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteButtonComponent", function() { return VoteButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vote_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vote-button.component.html */ "BlVh");
/* harmony import */ var _vote_button_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vote-button.component.css */ "JmpU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _vote_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vote-type */ "Pt3+");
/* harmony import */ var _vote_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vote.service */ "H9UO");
/* harmony import */ var src_app_auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/shared/auth.service */ "XQLn");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post.service */ "EthR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "EApP");











let VoteButtonComponent = class VoteButtonComponent {
    constructor(voteService, authService, postService, toastr) {
        this.voteService = voteService;
        this.authService = authService;
        this.postService = postService;
        this.toastr = toastr;
        this.faArrowUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowUp"];
        this.faArrowDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowDown"];
        this.votePayload = {
            voteType: undefined,
            postId: undefined
        };
        this.authService.loggedIn.subscribe((data) => this.isLoggedIn = data);
    }
    ngOnInit() {
        this.updateVoteDetails();
    }
    upvotePost() {
        this.votePayload.voteType = _vote_type__WEBPACK_IMPORTED_MODULE_5__["VoteType"].UPVOTE;
        this.vote();
        this.downvoteColor = '';
    }
    downvotePost() {
        this.votePayload.voteType = _vote_type__WEBPACK_IMPORTED_MODULE_5__["VoteType"].DOWNVOTE;
        this.vote();
        this.upvoteColor = '';
    }
    vote() {
        this.votePayload.postId = this.post.id;
        this.voteService.vote(this.votePayload).subscribe(() => {
            this.updateVoteDetails();
        }, error => {
            this.toastr.error(error.error.message);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["throwError"])(error);
        });
    }
    updateVoteDetails() {
        this.postService.getPost(this.post.id).subscribe(post => {
            this.post = post;
        });
    }
};
VoteButtonComponent.ctorParameters = () => [
    { type: _vote_service__WEBPACK_IMPORTED_MODULE_6__["VoteService"] },
    { type: src_app_auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_8__["PostService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }
];
VoteButtonComponent.propDecorators = {
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
VoteButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-vote-button',
        template: _raw_loader_vote_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vote_button_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VoteButtonComponent);



/***/ }),

/***/ "bFAj":
/*!***************************************************************************!*\
  !*** ./src/app/subreddit/create-subreddit/create-subreddit.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".create-subreddit-container {\r\n    margin-top: 10px;\r\n    --post-line-color: #ccc;\r\n    border: 1px solid #ccc;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    overflow: hidden;\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    color: #878A8C;\r\n    position: relative;\r\n    border-radius: 4px;\r\n    padding: 5px;\r\n  }\r\n  \r\n  .create-subreddit-heading {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    line-height: 22px;\r\n    color: #1c1c1c;\r\n    flex: 1;\r\n  }\r\n  \r\n  .btnCreateSubreddit {\r\n    background-color: #0079D3;\r\n    border-color: #0079D3;\r\n    color: aliceblue;\r\n    fill: #0079D3;\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    line-height: 24px;\r\n    text-transform: uppercase;\r\n    padding: 3px 16px;\r\n    opacity: 1;\r\n    width: 288px;\r\n    height: 34px;\r\n  }\r\n  \r\n  .btnDiscard {\r\n    fill: #0079D3;\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    line-height: 24px;\r\n    text-transform: uppercase;\r\n    padding: 3px 16px;\r\n    opacity: 1;\r\n    width: 288px;\r\n    height: 34px;\r\n    margin-top: 5px;\r\n    color: #0079D3;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .guidelines {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    line-height: 20px;\r\n    color: #1c1c1c;\r\n  }\r\n  \r\n  .sidebar {\r\n    width: 312px;\r\n    height: 242px;\r\n    --post-line-color: #ccc;\r\n    border: 1px solid #ccc;\r\n    margin-bottom: 10px;\r\n    overflow: hidden;\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    color: #878A8C;\r\n    position: relative;\r\n    border-radius: 4px;\r\n    padding: 5px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1zdWJyZWRkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBRWQsT0FBTztFQUNUOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6ImNyZWF0ZS1zdWJyZWRkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtc3VicmVkZGl0LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLS1wb3N0LWxpbmUtY29sb3I6ICNjY2M7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgY29sb3I6ICM4NzhBOEM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jcmVhdGUtc3VicmVkZGl0LWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICAtbXMtZmxleDogMTtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG5DcmVhdGVTdWJyZWRkaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzlEMztcclxuICAgIGJvcmRlci1jb2xvcjogIzAwNzlEMztcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmaWxsOiAjMDA3OUQzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogM3B4IDE2cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgd2lkdGg6IDI4OHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAuYnRuRGlzY2FyZCB7XHJcbiAgICBmaWxsOiAjMDA3OUQzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogM3B4IDE2cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgd2lkdGg6IDI4OHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3I6ICMwMDc5RDM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmd1aWRlbGluZXMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAzMTJweDtcclxuICAgIGhlaWdodDogMjQycHg7XHJcbiAgICAtLXBvc3QtbGluZS1jb2xvcjogI2NjYztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIGNvbG9yOiAjODc4QThDO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "zu2e");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "wmvV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/auth.service */ "XQLn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");









let LoginComponent = class LoginComponent {
    constructor(authService, activatedRoute, router, toastr) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastr = toastr;
        this.loginRequestPayload = {
            username: '',
            password: ''
        };
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.activatedRoute.queryParams
            .subscribe(params => {
            if (params.registered !== undefined && params.registered === 'true') {
                this.toastr.success('Signup Successful');
                this.registerSuccessMessage = 'Please Check your inbox for activation email '
                    + 'activate your account before you Login!';
            }
        });
    }
    login() {
        this.loginRequestPayload.username = this.loginForm.get('username').value;
        this.loginRequestPayload.password = this.loginForm.get('password').value;
        this.authService.login(this.loginRequestPayload).subscribe(data => {
            this.isError = false;
            this.router.navigateByUrl('');
            this.toastr.success('Login Successful');
        }, error => {
            this.isError = true;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "cmaH":
/*!*********************************************************!*\
  !*** ./src/app/shared/post-tile/post-tile.component.ts ***!
  \*********************************************************/
/*! exports provided: PostTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTileComponent", function() { return PostTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_tile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post-tile.component.html */ "qfZM");
/* harmony import */ var _post_tile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-tile.component.css */ "dnJ0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");






let PostTileComponent = class PostTileComponent {
    constructor(router) {
        this.router = router;
        this.faComments = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faComments"];
    }
    ngOnInit() {
    }
    goToPost(id) {
        this.router.navigateByUrl('/view-post/' + id);
    }
};
PostTileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PostTileComponent.propDecorators = {
    posts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PostTileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-tile',
        template: _raw_loader_post_tile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_post_tile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostTileComponent);



/***/ }),

/***/ "dnJ0":
/*!**********************************************************!*\
  !*** ./src/app/shared/post-tile/post-tile.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post{\r\n    --post-line-color: #ccc;    \r\n    border: 1px solid #ccc;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    overflow: hidden;\r\n    background-color: rgba(255,255,255,0.8);\r\n    color: #878A8C;\r\n    position: relative;\r\n    border-radius: 4px;\r\n    padding:5px;\r\n}\r\n\r\n.btnCommments{\r\n    border-radius: 2px solid;\r\n    color: #878A8C;\r\n    opacity: 1;\r\n}\r\n\r\n.btnCommments:hover{\r\n    opacity: 0.65;\r\n    cursor: pointer;\r\n}\r\n\r\n.post-title{\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    opacity: 1;\r\n}\r\n\r\n.posturl, .postname{    \r\n    color: black;\r\n}\r\n\r\n.subreddit-text{\r\n    font-weight: bold;\r\n}\r\n\r\n.post-text{\r\n    margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtdGlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwb3N0LXRpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0e1xyXG4gICAgLS1wb3N0LWxpbmUtY29sb3I6ICNjY2M7ICAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcclxuICAgIGNvbG9yOiAjODc4QThDO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbn1cclxuXHJcbi5idG5Db21tbWVudHN7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHggc29saWQ7XHJcbiAgICBjb2xvcjogIzg3OEE4QztcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5idG5Db21tbWVudHM6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjY1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucG9zdC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnBvc3R1cmwsIC5wb3N0bmFtZXsgICAgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zdWJyZWRkaXQtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucG9zdC10ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "enAQ":
/*!********************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar{\r\n    width: 312px;\r\n    height: 242px;\r\n    --post-line-color: #ccc;    \r\n    border: 1px solid #ccc;\r\n    margin-bottom: 10px;\r\n    overflow: hidden;\r\n    background-color: rgba(255,255,255,0.8);\r\n    color: #878A8C;\r\n    position: relative;\r\n    border-radius: 4px;\r\n    padding:5px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.btnCreatePost, .btnCreateSubreddit{\r\n    background-color: #0079D3;\r\n    border-color: #0079D3;\r\n    color: aliceblue;\r\n    fill: #0079D3;\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    line-height: 24px;\r\n    text-transform: uppercase;\r\n    padding: 3px 16px;    \r\n    opacity: 1;\r\n    width: 288px;\r\n    height: 34px;\r\n}\r\n\r\n.btnCreateSubreddit{\r\n    margin-top: 5px;\r\n    color: #0079D3;\r\n    background-color: transparent;\r\n}\r\n\r\n.sidebar>ul>li{\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    line-height: 20px;\r\n    color: #1c1c1c;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEIiLCJmaWxlIjoic2lkZS1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFye1xyXG4gICAgd2lkdGg6IDMxMnB4O1xyXG4gICAgaGVpZ2h0OiAyNDJweDtcclxuICAgIC0tcG9zdC1saW5lLWNvbG9yOiAjY2NjOyAgICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcclxuICAgIGNvbG9yOiAjODc4QThDO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmJ0bkNyZWF0ZVBvc3QsIC5idG5DcmVhdGVTdWJyZWRkaXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OUQzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3OUQzO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZpbGw6ICMwMDc5RDM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiAzcHggMTZweDsgICAgXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgd2lkdGg6IDI4OHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcblxyXG4uYnRuQ3JlYXRlU3VicmVkZGl0e1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3I6ICMwMDc5RDM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnNpZGViYXI+dWw+bGl7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxufSJdfQ== */");

/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.css */ "DN7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/shared/auth.service */ "XQLn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");







let HeaderComponent = class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"];
    }
    ngOnInit() {
        this.authService.loggedIn.subscribe((data) => this.isLoggedIn = data);
        this.authService.username.subscribe((data) => this.username = data);
        this.isLoggedIn = this.authService.isLoggedIn();
        this.username = this.authService.getUserName();
    }
    goToUserProfile() {
        this.router.navigateByUrl('/user-profile/' + this.username);
    }
    logout() {
        this.authService.logout();
        this.isLoggedIn = false;
        this.router.navigateByUrl('');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "gXhy":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/side-bar/side-bar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar\">\r\n    <img src=\"https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png\">\r\n    <div style=\"text-align: center; font-size: 1em\">Welcome to Spring Reddit Clone home page. Come here to\r\n        check in with your favorite subreddits.</div>\r\n    <div style=\"text-align: center\">\r\n        <button class=\"btnCreatePost\" (click)=\"goToCreatePost()\">Create Post</button>\r\n    </div>\r\n    <div style=\"text-align: center\">\r\n        <button class=\"btnCreateSubreddit\" (click)=\"goToCreateSubreddit()\">Create Subreddit</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "jq6S":
/*!****************************************************************************!*\
  !*** ./src/app/shared/subreddit-side-bar/subreddit-side-bar.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar-view-subreddit {\r\n    width: 312px;\r\n    height: 242px;\r\n    --post-line-color: #ccc;\r\n    border: 1px solid #ccc;\r\n    margin-bottom: 10px;\r\n    overflow: hidden;\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    color: #878A8C;\r\n    position: relative;\r\n    border-radius: 4px;\r\n    padding: 5px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .sidebar-view-subreddit {\r\n    height: 280px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnJlZGRpdC1zaWRlLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InN1YnJlZGRpdC1zaWRlLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXItdmlldy1zdWJyZWRkaXQge1xyXG4gICAgd2lkdGg6IDMxMnB4O1xyXG4gICAgaGVpZ2h0OiAyNDJweDtcclxuICAgIC0tcG9zdC1saW5lLWNvbG9yOiAjY2NjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgY29sb3I6ICM4NzhBOEM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItdmlldy1zdWJyZWRkaXQge1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light\">\r\n        <div class=\"flex-grow-1\">\r\n            <a aria-label=\"Home\" class=\"logo\" routerLink=\"/\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" class=\"reddit-icon-svg\">\r\n                    <g>\r\n                        <circle fill=\"#FF4500\" cx=\"10\" cy=\"10\" r=\"10\"></circle>\r\n                        <path fill=\"#FFF\"\r\n                            d=\"M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z\">\r\n                        </path>\r\n                    </g>\r\n                </svg>\r\n                <span class=\"reddit-text\">\r\n                    Spring Reddit Clone\r\n                </span>\r\n            </a>\r\n        </div>\r\n        <div class=\"flex-grow-1 float-right\">\r\n            <div *ngIf=\"isLoggedIn\" ngbDropdown class=\"float-right\">\r\n                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                    <button (click)=\"goToUserProfile()\" ngbDropdownItem>Profile</button>\r\n                    <button (click)=\"logout()\" ngbDropdownItem>Logout</button>\r\n                </div>\r\n                <button class=\"userdetails\" id=\"dropdownBasic1\" ngbDropdownToggle>\r\n                    <img class=\"account-icon\" src=\"https://www.redditstatic.com/avatars/avatar_default_08_D4E815.png\">\r\n                    {{username}}\r\n                </button>\r\n            </div>            \r\n            <div *ngIf=\"!isLoggedIn\">\r\n                <a routerLink=\"/sign-up\" class=\"float-right sign-up mr-2\">Sign up</a>\r\n                <a routerLink=\"/login\" class=\"float-right login mr-2\">Login</a>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>");

/***/ }),

/***/ "mqg1":
/*!********************************************!*\
  !*** ./src/app/comment/comment.service.ts ***!
  \********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let CommentService = class CommentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllCommentsForPost(postId) {
        return this.httpClient.get('http://localhost:8080/api/comments/by-post/' + postId);
    }
    postComment(commentPayload) {
        return this.httpClient.post('http://localhost:8080/api/comments/', commentPayload);
    }
    getAllCommentsByUser(name) {
        return this.httpClient.get('http://localhost:8080/api/comments/by-user/' + name);
    }
};
CommentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommentService);



/***/ }),

/***/ "nVOJ":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/create-subreddit/create-subreddit.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"create-subreddit-container\">\r\n        <form class=\"post-form\" [formGroup]=\"createSubredditForm\" (ngSubmit)=\"createSubreddit()\">\r\n          <div class=\"form-group\">\r\n            <div class=\"create-subreddit-heading\">Create Subreddit</div>\r\n            <hr />\r\n            <input type=\"text\" [formControlName]=\"'title'\" class=\"form-control\" style=\"margin-top: 5px\"\r\n              placeholder=\"Title\">\r\n            <textarea type=\"text\" [formControlName]=\"'description'\" style=\"width: 100%; margin-top: 5px\"\r\n              placeholder=\"Description\"></textarea>\r\n            <div>\r\n              <div style=\"margin-top: 5px\" class=\"float-right\">\r\n                <button (click)=\"discard()\" class=\"btnDiscard\">Discard</button>\r\n                <button class=\"btnCreateSubreddit\">Create</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"sidebar\">\r\n          <h5 class=\"guidelines\">Posting to Spring Reddit</h5>\r\n          <hr />\r\n          <ul>\r\n            <li>Remember the human</li>\r\n            <hr />\r\n            <li>Behave like you would in real life</li>\r\n            <hr />\r\n            <li>Don't spam</li>\r\n            <hr />\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "oAXe":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/subreddit-side-bar/subreddit-side-bar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar-view-subreddit\">\r\n    <div style=\"color: black; font-weight: bold\">Browse Subreddits</div>\r\n    <hr />\r\n    <span *ngFor=\"let subreddit of subreddits\">\r\n        <span class=\"subreddit-text\"><a href=\"/view-subreddit/{{subreddit.id}}\">{{subreddit.name}}</a></span>\r\n        <hr />\r\n    </span>\r\n    <div style=\"text-align: center\" *ngIf=\"displayViewAll\">\r\n        <a style=\"font-weight: bold\" routerLink=\"/list-subreddits\">View All</a>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "orKW":
/*!*************************************************************!*\
  !*** ./src/app/auth/user-profile/user-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-profile.component.html */ "QHtL");
/* harmony import */ var _user_profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.component.css */ "+w81");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/post.service */ "EthR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/comment/comment.service */ "mqg1");







let UserProfileComponent = class UserProfileComponent {
    constructor(activatedRoute, postService, commentService) {
        this.activatedRoute = activatedRoute;
        this.postService = postService;
        this.commentService = commentService;
        this.name = this.activatedRoute.snapshot.params.name;
        this.postService.getAllPostsByUser(this.name).subscribe(data => {
            this.posts = data;
            this.postLength = data.length;
        });
        this.commentService.getAllCommentsByUser(this.name).subscribe(data => {
            this.comments = data;
            this.commentLength = data.length;
        });
    }
    ngOnInit() {
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_6__["CommentService"] }
];
UserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-profile',
        template: _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserProfileComponent);



/***/ }),

/***/ "qfZM":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-tile/post-tile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Display Posts-->\r\n<div class=\"row post\" *ngFor=\"let post of posts\">\r\n  <app-vote-button [post]=\"post\"></app-vote-button>\r\n  <!-- Section to Display Post Information-->\r\n  <div class=\"col-md-11\">\r\n    <span class=\"subreddit-info\">\r\n      <span class=\"subreddit-text\"><a class=\"posturl\" routerLink=\"\">{{post.subredditName}}</a></span>\r\n      <span> . Posted by <a class=\"username\" routerLink=\"/user/{{post.userName}}\">{{post.userName}}</a></span>\r\n      <span> . {{post.duration}}</span>\r\n    </span>\r\n    <hr />\r\n    <div class=\"post-title\">\r\n      <a class=\"postname\" href=\"{{post.url}}\">{{post.postName}}</a>\r\n    </div>\r\n    <div>\r\n      <p class=\"post-text\" [innerHtml]=\"post.description\"></p>\r\n    </div>\r\n    <hr />\r\n    <span>\r\n      <a class=\"btnCommments\" role=\"button\">\r\n        <fa-icon [icon]=\"faComments\"></fa-icon>\r\n        Comments({{post.commentCount}})\r\n      </a>\r\n      <button class=\"login\" (click)=\"goToPost(post.id)\">\r\n        Read Post\r\n      </button>\r\n    </span>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "tj9r":
/*!***********************************************************!*\
  !*** ./src/app/post/create-post/create-post.component.ts ***!
  \***********************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_post_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-post.component.html */ "P6Mw");
/* harmony import */ var _create_post_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-post.component.css */ "Tyzf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/post.service */ "EthR");
/* harmony import */ var src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/subreddit/subreddit.service */ "+2AF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");









let CreatePostComponent = class CreatePostComponent {
    constructor(router, postService, subredditService) {
        this.router = router;
        this.postService = postService;
        this.subredditService = subredditService;
        this.postPayload = {
            postName: '',
            url: '',
            description: '',
            subredditName: ''
        };
    }
    ngOnInit() {
        this.createPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            postName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            subredditName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        this.subredditService.getAllSubreddits().subscribe((data) => {
            this.subreddits = data;
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(error);
        });
    }
    createPost() {
        this.postPayload.postName = this.createPostForm.get('postName').value;
        this.postPayload.subredditName = this.createPostForm.get('subredditName').value;
        this.postPayload.url = this.createPostForm.get('url').value;
        this.postPayload.description = this.createPostForm.get('description').value;
        this.postService.createPost(this.postPayload).subscribe((data) => {
            this.router.navigateByUrl('/');
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(error);
        });
    }
    discardPost() {
        this.router.navigateByUrl('/');
    }
};
CreatePostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"] },
    { type: src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_7__["SubredditService"] }
];
CreatePostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-post',
        template: _raw_loader_create_post_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_post_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreatePostComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/signup/signup.component */ "SBxm");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/create-post/create-post.component */ "tj9r");
/* harmony import */ var _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subreddit/create-subreddit/create-subreddit.component */ "OxXG");
/* harmony import */ var _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subreddit/list-subreddits/list-subreddits.component */ "KrRH");
/* harmony import */ var _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/view-post/view-post.component */ "Gkp2");
/* harmony import */ var _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/user-profile/user-profile.component */ "orKW");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");












const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'view-post/:id', component: _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_9__["ViewPostComponent"] },
    { path: 'user-profile/:name', component: _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'list-subreddits', component: _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_8__["ListSubredditsComponent"] },
    { path: 'create-post', component: _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__["CreatePostComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'create-subreddit', component: _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_7__["CreateSubredditComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'sign-up', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "wmvV":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-section{\r\n    margin: 100px;\r\n}\r\n\r\n.login-failed, .register-success{\r\n    text-align: center;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    border: 2px solid black;\r\n    width: 65%;    \r\n    background-color: red;\r\n}\r\n\r\n.login-failed-text, .register-success-text{\r\n    text-align: center;\r\n    margin-top: 5px;\r\n    font-weight: bold;    \r\n    color: aliceblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1zZWN0aW9ue1xyXG4gICAgbWFyZ2luOiAxMDBweDtcclxufVxyXG5cclxuLmxvZ2luLWZhaWxlZCwgLnJlZ2lzdGVyLXN1Y2Nlc3N7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogNjUlOyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmxvZ2luLWZhaWxlZC10ZXh0LCAucmVnaXN0ZXItc3VjY2Vzcy10ZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "yObi":
/*!*******************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.ts ***!
  \*******************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_side_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./side-bar.component.html */ "gXhy");
/* harmony import */ var _side_bar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-bar.component.css */ "enAQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");





let SideBarComponent = class SideBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToCreatePost() {
        this.router.navigateByUrl('/create-post');
    }
    goToCreateSubreddit() {
        this.router.navigateByUrl('/create-subreddit');
    }
};
SideBarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SideBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-side-bar',
        template: _raw_loader_side_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_side_bar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SideBarComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zu2e":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-section\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-3\"></div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" style=\"text-align: center\"><h4>Login</h4></div>\r\n                <div class=\"card-body\">\r\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"user_name\" class=\"col-md-4 col-form-label text-md-right\">Username</label>\r\n                            <div class=\"col-md-6\">\r\n                                <input type=\"text\" id=\"user_name\" class=\"form-control\" [formControlName]=\"'username'\" name=\"user_name\" required\r\n                                    autofocus>\r\n                                <span *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\">\r\n                                   Please provide a valid username\r\n                                </span>                                    \r\n                            </div>\r\n                        </div>\r\n \r\n                        <div class=\"form-group row\">\r\n                            <label for=\"password\" class=\"col-md-4 col-form-label text-md-right\">Password</label>\r\n                            <div class=\"col-md-6\">\r\n                                <input type=\"password\" id=\"password\" class=\"form-control\" [formControlName]=\"'password'\" name=\"password\" required>\r\n                                <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">\r\n                                  Password cannot be empty\r\n                                </span>                                \r\n                            </div>\r\n                        </div>\r\n \r\n                        <span class=\"col-md-6 offset-md-4\">\r\n                            <button type=\"submit\" class=\"login\">\r\n                                Login\r\n                            </button>\r\n                            <span style=\"padding-left: 15px\">New User? <a routerLink=\"/signup\">SIGN UP</a></span>\r\n                        </span>   \r\n                        <div class=\"login-failed\" *ngIf='this.isError'>\r\n                             <p class=\"login-failed-text\">Login Failed. Please check your credentials and try again.</p>   \r\n                        </div>\r\n                        <div class=\"login-failed\" [ngStyle]=\"{'background-color': 'green'}\" *ngIf=\"this.registerSuccessMessage.length > 0\">\r\n                            <p class=\"register-success-text\">{{registerSuccessMessage}}</p>   \r\n                       </div>                       \r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\"></div>\r\n    </div>\r\n</div>");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map