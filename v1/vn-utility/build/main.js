webpackJsonp([0],{

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 193:
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
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_db_fire_db__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_msgbox_msgbox__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_session_session__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_post_post__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, storage, fire, msg, session, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.fire = fire;
        this.msg = msg;
        this.session = session;
        this.events = events;
        this.myFavoriteWebsite = "";
        this.mode = "new";
        this.newUsername = "";
        this.newPassword = "";
        this.confirmNewPassword = "";
        this.currentUsername = "";
        this.currentPassword = "";
        this.hideSignUpButton = true;
        this.posts = [];
        this.storage.get('favoriteUser').then(function (val) {
            _this.currentUsername = val;
        });
        this.storage.get('favoritePass').then(function (val) {
            _this.currentPassword = val;
            if (session.debug && _this.currentPassword) {
                _this.signIn();
            }
        });
        if (this.session.getData("currentUser", false)) {
            this.showHomepage();
        }
    }
    HomePage.prototype.updateFavoriteUser = function (user) {
        if (user.username) {
            this.storage.set('favoriteUser', user.username);
            this.storage.set('favoritePass', user.password);
            this.storage.set('favoriteUID', user.uid);
        }
    };
    HomePage.prototype.showCreateNewAccount = function () {
        this.mode = "signup";
    };
    HomePage.prototype.showSignIn = function () {
        this.mode = "new";
    };
    HomePage.prototype.showHomepage = function () {
        var that = this;
        this.mode = "signedIn";
        this.events.publish('user:login');
        this.fire.instance.ref('/posts/').once('value').then(function (snapshot) {
            that.posts = Object.values(snapshot.val());
            ;
        });
    };
    HomePage.prototype.signIn = function () {
        var that = this;
        if (this.currentUsername && this.currentPassword) {
            this.fire.service.auth().signInWithEmailAndPassword(this.currentUsername, this.currentPassword)
                .then(function (result) {
                if (result.uid) {
                    that.updateFavoriteUser({
                        username: result.email,
                        password: that.currentPassword,
                        uid: result.uid,
                    });
                    that.showHomepage();
                    that.session.setData("currentUser", result);
                }
            })
                .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                that.msg.presentAlert(error.message, error.code);
            });
        }
        else {
            this.msg.presentAlert("Missing some fields, please fill full form!");
        }
    };
    HomePage.prototype.createNewAccount = function () {
        var that = this;
        if (this.newUsername && this.newPassword && (this.newPassword == this.confirmNewPassword)) {
            this.fire.service.auth().createUserWithEmailAndPassword(this.newUsername, this.newPassword)
                .then(function (result) {
                if (result.uid) {
                    that.msg.presentAlert("Sign up sucessful");
                    that.showSignIn();
                    that.currentUsername = that.newUsername;
                }
            })
                .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                that.msg.presentAlert(error.message, error.code);
            });
        }
        else {
            that.msg.presentAlert("Missing some fields, please fill full form!");
        }
    };
    HomePage.prototype.openPost = function (post) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_post_post__["a" /* PostPage */], {
            post: post
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/tranthehuy/code/ionic/vn-utility/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngIf="mode==\'new\'">\n    <ion-item>\n      <ion-label color="primary" stacked>Email</ion-label>\n      <ion-input type="email" placeholder="Enter your email" [(ngModel)]="currentUsername"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" stacked>Password</ion-label>\n      <ion-input type="password" placeholder="Enter your password" [(ngModel)]="currentPassword"></ion-input>\n    </ion-item>\n\n    <p>\n      <button ion-button full color="light" (click)="signIn()">Sign In</button>\n    </p>\n\n    <p>\n      <button ion-button full (click) = "showCreateNewAccount()" *ngIf="hideSignUpButton">Create New Account</button>\n    </p>\n\n  </ion-list>\n  <ion-list *ngIf="mode==\'signup\'">\n\n    <ion-item>\n      <ion-label color="primary" stacked>Email</ion-label>\n      <ion-input type="email" placeholder="Enter your email" [(ngModel)]="newUsername"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" stacked>Password</ion-label>\n      <ion-input type="password" placeholder="Enter your password" [(ngModel)]="newPassword"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" stacked>Confirm Password Again</ion-label>\n      <ion-input type="password" placeholder="Enter your password" [(ngModel)]="confirmNewPassword"></ion-input>\n    </ion-item>\n\n    <p>\n      <button ion-button full (click)="createNewAccount()">Sign Up</button>\n    </p>\n\n    <p>\n      <button ion-button full color="light" (click) = "showSignIn()">Cancel</button>\n    </p>\n  </ion-list>\n\n  <ion-list *ngIf="mode==\'signedIn\'">\n    <ion-list-header>\n      News\n    </ion-list-header>\n    <button ion-item *ngFor="let post of posts" (click)="openPost(post)">\n      {{ post.title }}\n    </button>\n  </ion-list>\n  <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n</ion-content>\n'/*ion-inline-end:"/Users/tranthehuy/code/ionic/vn-utility/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_fire_db_fire_db__["a" /* FireDbProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_msgbox_msgbox__["a" /* MsgboxProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostPage = (function () {
    function PostPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.post = navParams.get('post');
    }
    PostPage.prototype.ionViewDidLoad = function () {
    };
    PostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post',template:/*ion-inline-start:"/Users/tranthehuy/code/ionic/vn-utility/src/pages/post/post.html"*/'<!--\n  Generated template for the PostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{post.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <span class="large" [innerHtml]="post.content"></span>\n</ion-content>\n'/*ion-inline-end:"/Users/tranthehuy/code/ionic/vn-utility/src/pages/post/post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PostPage);
    return PostPage;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/tranthehuy/code/ionic/vn-utility/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h3>Tác giả</h3>\n  <p>Trần Thế Huy</p>\n  <h3>Email</h3>\n  <p>tranthehuy.2nd@gmail.com</p>\n</ion-content>\n'/*ion-inline-end:"/Users/tranthehuy/code/ionic/vn-utility/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_add_room_form_add_room_form__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fire_db_fire_db__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_msgbox_msgbox__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_session_session__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_room_room__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the RoomListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomListPage = (function () {
    function RoomListPage(navCtrl, navParams, storage, fire, msg, session) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.fire = fire;
        this.msg = msg;
        this.session = session;
        this.rooms = [];
    }
    RoomListPage.prototype.ionViewDidEnter = function () {
        var that = this;
        this.fire.instance.ref('/rooms/').on('value', function (snapshot) {
            if (snapshot.val()) {
                that.rooms = Object.values(snapshot.val());
            }
            else {
                that.rooms = [];
            }
        });
    };
    RoomListPage.prototype.addNewRoom = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_add_room_form_add_room_form__["a" /* AddRoomFormPage */], {});
    };
    RoomListPage.prototype.openRoom = function (room) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_room_room__["a" /* RoomPage */], {
            room: room
        });
    };
    RoomListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-room-list',template:/*ion-inline-start:"/Users/tranthehuy/code/ionic/vn-utility/src/pages/room-list/room-list.html"*/'<!--\n  Generated template for the RoomListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Rooms</ion-title>\n\n    <ion-buttons end>\n      <button (click)="addNewRoom()" ion-button icon-only>\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let room of rooms" (click)="openRoom(room)">\n      <h1>{{ room.name }}</h1>\n      <p>\n        Manager <ion-badge color="light">  {{ room.author }}</ion-badge>\n      </p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/tranthehuy/code/ionic/vn-utility/src/pages/room-list/room-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_fire_db_fire_db__["a" /* FireDbProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_msgbox_msgbox__["a" /* MsgboxProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_session_session__["a" /* SessionProvider */]])
    ], RoomListPage);
    return RoomListPage;
}());

//# sourceMappingURL=room-list.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRoomFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_db_fire_db__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_msgbox_msgbox__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_session_session__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddRoomFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddRoomFormPage = (function () {
    function AddRoomFormPage(navCtrl, navParams, storage, fire, msg, session) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.fire = fire;
        this.msg = msg;
        this.session = session;
        this.roomName = "";
        this.currentUsername = "";
    }
    AddRoomFormPage.prototype.ionViewDidLoad = function () {
    };
    AddRoomFormPage.prototype.create = function () {
        var that = this;
        var today = (new Date()) - 0;
        this.storage.get('favoriteUID').then(function (val) {
            that.currentUsername = val;
            var userRoom = that.fire.instance.ref('/rooms/' + that.roomName + "_" + today);
            userRoom.set({
                name: that.roomName + "_" + today,
                author: that.currentUsername,
                createAt: today,
                comment: 'test',
                status: 'new'
            });
        });
        this.navCtrl.pop();
    };
    AddRoomFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-room-form',template:/*ion-inline-start:"/Users/tranthehuy/code/ionic/vn-utility/src/pages/add-room-form/add-room-form.html"*/'<!--\n  Generated template for the AddRoomFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create New Room</ion-title>\n\n    <ion-buttons end>\n      <button (click)="create()" ion-button icon-only>\n        Create\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary" stacked>Room name</ion-label>\n      <ion-input type="text" placeholder="Enter your new room name" [(ngModel)]="roomName"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/tranthehuy/code/ionic/vn-utility/src/pages/add-room-form/add-room-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_fire_db_fire_db__["a" /* FireDbProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_msgbox_msgbox__["a" /* MsgboxProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_session_session__["a" /* SessionProvider */]])
    ], AddRoomFormPage);
    return AddRoomFormPage;
}());

//# sourceMappingURL=add-room-form.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_db_fire_db__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_msgbox_msgbox__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_session_session__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomPage = (function () {
    function RoomPage(navCtrl, storage, fire, msg, session, events, navParams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.fire = fire;
        this.msg = msg;
        this.session = session;
        this.events = events;
        this.navParams = navParams;
        this.roomName = "";
        this.messages = [];
        this.username = "";
        this.newMsg = "";
        this.room = navParams.get('room');
        this.roomName = this.room.name;
        if (this.session.getData("currentUser", false)) {
            this.username = this.session.getData("currentUser", false).uid;
        }
        this.updateMsg();
        var that = this;
        this.fire.instance.ref('/rooms/' + this.roomName + "/").on('value', function (snapshot) {
            that.room = snapshot.val();
            that.updateMsg();
        });
    }
    RoomPage.prototype.ionViewDidLoad = function () {
    };
    RoomPage.prototype.updateMsg = function () {
        if (this.room.messages) {
            var msgs = Object.values(this.room.messages);
            for (var m in msgs) {
                if (msgs[m].sender == this.username) {
                    msgs[m].styleClass = "right";
                }
            }
            this.messages = msgs;
            setTimeout(function () {
                if (document.getElementById("roomHeader")) {
                    var objDiv = document.getElementById("roomHeader").parentElement;
                    objDiv.scrollTop = objDiv.scrollHeight;
                }
            }, 1000);
        }
        else {
            this.messages = [];
        }
    };
    RoomPage.prototype.sendMsg = function () {
        var that = this;
        var today = (new Date()) - 0;
        var roomMsgs = this.fire.instance.ref('/rooms/' + this.roomName + "/messages/" + today);
        roomMsgs.set({
            sender: this.username,
            content: this.newMsg
        });
        this.newMsg = "";
    };
    RoomPage.prototype.onKeyPress = function (keycode) {
        if (keycode == 13) {
            this.sendMsg();
        }
    };
    RoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-room',template:/*ion-inline-start:"/Users/tranthehuy/code/ionic/vn-utility/src/pages/room/room.html"*/'<!--\n  Generated template for the RoomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Room {{ roomName }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="roomHeader" id="roomHeader">\n\n  </div>\n  <div class="talk-bubble {{msg.styleClass}} " *ngFor="let msg of messages">\n    <div class="talktext">\n      <span class="sender"> From {{ msg.sender }} </span>\n      <p> {{ msg.content }} </p>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-item>\n        <ion-input type="text" [(ngModel)]="newMsg" (keypress)="onKeyPress($event.keyCode)" placeholder="Write something here!"></ion-input>\n        <ion-icon item-right name="send"   (click)="sendMsg()"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/tranthehuy/code/ionic/vn-utility/src/pages/room/room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_fire_db_fire_db__["a" /* FireDbProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_msgbox_msgbox__["a" /* MsgboxProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RoomPage);
    return RoomPage;
}());

//# sourceMappingURL=room.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(306);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_post_post__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_room_list_room_list__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_room_form_add_room_form__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_room_room__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_fire_db_fire_db__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_msgbox_msgbox__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_session_session__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_post_post__["a" /* PostPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_room_list_room_list__["a" /* RoomListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_room_form_add_room_form__["a" /* AddRoomFormPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_room_room__["a" /* RoomPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_post_post__["a" /* PostPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_room_list_room_list__["a" /* RoomListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_room_form_add_room_form__["a" /* AddRoomFormPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_room_room__["a" /* RoomPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_fire_db_fire_db__["a" /* FireDbProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_msgbox_msgbox__["a" /* MsgboxProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_session_session__["a" /* SessionProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_session_session__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_room_list_room_list__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, session, events) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.session = session;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] },
        ];
        this.pagesLogedIn = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Rooms', component: __WEBPACK_IMPORTED_MODULE_7__pages_room_list_room_list__["a" /* RoomListPage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] },
        ];
        var that = this;
        events.subscribe('user:login', function () { that.changeMenuAfterLoginIn(that); });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.changeMenuAfterLoginIn = function (obj) {
        obj.pages = obj.pagesLogedIn;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tranthehuy/code/ionic/vn-utility/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/tranthehuy/code/ionic/vn-utility/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SessionProvider = (function () {
    function SessionProvider() {
        this.debug = true;
        this.sessionData = {};
    }
    SessionProvider.prototype.setData = function (key, value) {
        this.sessionData[key] = value;
    };
    SessionProvider.prototype.getData = function (key, defaultValue) {
        if (this.sessionData[key]) {
            return this.sessionData[key];
        }
        else {
            return defaultValue;
        }
    };
    SessionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SessionProvider);
    return SessionProvider;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FireDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FireDbProvider = (function () {
    function FireDbProvider() {
        this.instance = null;
        this.service = null;
        var config = {
            apiKey: "AIzaSyBOKZlstMKI1-i50rtxlQJmx87WEMBMWZ4",
            authDomain: "myblog-f89d9.firebaseapp.com",
            databaseURL: "https://myblog-f89d9.firebaseio.com",
            projectId: "myblog-f89d9",
            storageBucket: "myblog-f89d9.appspot.com",
            messagingSenderId: "584819075341"
        };
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"](config);
        this.instance = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]();
        this.service = __WEBPACK_IMPORTED_MODULE_1_firebase__;
    }
    FireDbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FireDbProvider);
    return FireDbProvider;
}());

//# sourceMappingURL=fire-db.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgboxProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MsgboxProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MsgboxProvider = (function () {
    function MsgboxProvider(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    MsgboxProvider.prototype.presentAlert = function (content, title, btn) {
        if (title === void 0) { title = ""; }
        if (btn === void 0) { btn = "OK"; }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: content,
            buttons: [btn]
        });
        alert.present();
    };
    MsgboxProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MsgboxProvider);
    return MsgboxProvider;
}());

//# sourceMappingURL=msgbox.js.map

/***/ })

},[282]);
//# sourceMappingURL=main.js.map