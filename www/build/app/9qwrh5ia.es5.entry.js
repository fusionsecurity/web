/*! Built with http://stenciljs.com */
var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};App.loadBundle("9qwrh5ia",["require","exports","./chunk-07cd1608.js","./chunk-b760673a.js"],function(e,t,n,r){var i=window.App.h,o=function(){function e(){}return e.prototype.onSWUpdate=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.toastCtrl.create({message:"New version available",showCloseButton:!0,closeButtonText:"Reload"})];case 1:return[4,(e=t.sent()).present()];case 2:return t.sent(),[4,e.onWillDismiss()];case 3:return t.sent(),window.location.reload(),[2]}})})},e.prototype.render=function(){return i("ion-app",null,i("ion-router",{useHash:!1},i("ion-route",{url:"/",component:"app-home"})),i("ion-nav",null))},Object.defineProperty(e,"is",{get:function(){return"app-root"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{toastCtrl:{connect:"ion-toast-controller"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"window:swUpdate",method:"onSWUpdate"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}(),a=function(){function t(){}return t.prototype.componentDidLoad=function(){var t=this;n.rIC(function(){var r=t.win,i=t.config,o=t.queue;i.getBoolean("_testing")||function(t){new Promise(function(t,n){e(["./tap-click.js"],t,n)}).then(function(e){return e.startTapClick(t.document)})}(r),function(t,r){r.getBoolean("inputShims",function(e){return n.isPlatform(e,"ios")&&n.isPlatform(e,"mobile")}(t))&&new Promise(function(t,n){e(["./input-shims.js"],t,n)}).then(function(e){return e.startInputShims(t.document,r)})}(r,i),function(t,r,i){r.getBoolean("statusTap",n.isPlatform(t,"hybrid"))&&new Promise(function(t,n){e(["./status-tap.js"],t,n)}).then(function(e){return e.startStatusTap(t,i)})}(r,i,o),function(t,r){r.getBoolean("hardwareBackButton",n.isPlatform(t,"hybrid"))&&new Promise(function(t,n){e(["./hardware-back-button.js"],t,n)}).then(function(e){return e.startHardwareBackButton(t)})}(r,i)})},t.prototype.hostData=function(){return{class:{"ion-page":!0,"force-statusbar-padding":this.config.getBoolean("_forceStatusbarPadding")}}},Object.defineProperty(t,"is",{get:function(){return"ion-app"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{config:{context:"config"},el:{elementRef:!0},queue:{context:"queue"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"},enumerable:!0,configurable:!0}),t}(),s=function(){return new Promise(function(t,n){e(["./ios.transition.js"],t,n)})},u=function(){return new Promise(function(t,n){e(["./md.transition.js"],t,n)})};function c(e){var t=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")}function l(e,t){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(r){switch(r.label){case 0:return n=(void 0!==e.deepWait?e.deepWait:t)?[v(e.enteringEl),v(e.leavingEl)]:[f(e.enteringEl),f(e.leavingEl)],[4,Promise.all(n)];case 1:return r.sent(),[4,function(e,t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}(e.viewIsReady,e.enteringEl)];case 2:return r.sent(),[2]}})})}function h(e,t){d(t,"ionViewWillLeave"),d(e,"ionViewWillEnter")}function p(e,t){d(e,"ionViewDidEnter"),d(t,"ionViewDidLeave")}function d(e,t){if(e){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}}function f(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()}function v(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return(t=e)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(v))];case 3:n.sent(),n.label=4;case 4:return[2]}})})}function m(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))}var g=function(){function e(e,t){this.component=e,this.params=t,this.state=1}return e.prototype.init=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return this.state=2,this.element?[3,2]:(t=this,[4,function(e,t,n,r,i){return __awaiter(this,void 0,void 0,function(){var o;return __generator(this,function(a){switch(a.label){case 0:if(e)return[2,e.attachViewToDom(t,n,i,r)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return o="string"==typeof n?t.ownerDocument.createElement(n):n,r&&r.forEach(function(e){return o.classList.add(e)}),i&&Object.assign(o,i),t.appendChild(o),o.componentOnReady?[4,o.componentOnReady()]:[3,2];case 1:a.sent(),a.label=2;case 2:return[2,o]}})})}(this.delegate,e,this.component,["ion-page","ion-page-invisible"],this.params)]);case 1:t.element=n.sent(),n.label=2;case 2:return[2]}})})},e.prototype._destroy=function(){n.assert(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3},e}();function w(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var r=e.params;if(r===n)return!0;if(!r&&!n)return!0;if(!r||!n)return!1;var i=Object.keys(r),o=Object.keys(n);if(i.length!==o.length)return!1;for(var a=0,s=i;a<s.length;a++){var u=s[a];if(r[u]!==n[u])return!1}return!0}function b(e,t){return e?e instanceof g?e:new g(e,t):null}var y=function(){function t(){this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}return t.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)},t.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},t.prototype.componentWillLoad=function(){this.useRouter=!!this.win.document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture&&(this.swipeGesture=this.config.getBoolean("swipeBackEnabled","ios"===this.mode)),this.ionNavWillLoad.emit()},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return this.rootChanged(),t=this,[4,new Promise(function(t,n){e(["./swipe-back.js"],t,n)})];case 1:return t.gesture=n.sent().createSwipeBackGesture(this.el,this.queue,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged(),[2]}})})},t.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];d(n.element,"ionViewWillUnload"),n._destroy()}this.gesture&&this.gesture.destroy(),this.transInstr.length=this.views.length=0,this.destroyed=!0},t.prototype.push=function(e,t,n,r){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},r)},t.prototype.insert=function(e,t,n,r,i){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:r},i)},t.prototype.insertPages=function(e,t,n,r){return this.queueTrns({insertStart:e,insertViews:t,opts:n},r)},t.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},t.prototype.popTo=function(e,t,n){var r={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(r.removeView=e,r.removeStart=1):"number"==typeof e&&(r.removeStart=e+1),this.queueTrns(r,n)},t.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},t.prototype.removeIndex=function(e,t,n,r){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},r)},t.prototype.setRoot=function(e,t,n,r){return this.setPages([{page:e,params:t}],n,r)},t.prototype.setPages=function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},t.prototype.setRouteId=function(e,t,n){var r,i=this,o=this.getActiveSync();if(w(o,e,t))return Promise.resolve({changed:!1,element:o.element});var a,s=new Promise(function(e){return r=e}),u={updateURL:!1,viewIsReady:function(e){var t,n=new Promise(function(e){return t=e});return r({changed:!0,element:e,markVisible:function(){return __awaiter(i,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return t(),[4,a];case 1:return e.sent(),[2]}})})}}),n}};if(0===n)a=this.setRoot(e,t,u);else{var c=this.views.find(function(n){return w(n,e,t)});c?a=this.popTo(c,Object.assign({},u,{direction:"back"})):1===n?a=this.push(e,t,u):-1===n&&(a=this.setRoot(e,t,Object.assign({},u,{direction:"back",animated:!0})))}return s},t.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){return[2,(e=this.getActiveSync())?{id:e.element.tagName,params:e.params,element:e.element}:void 0]})})},t.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},t.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},t.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},t.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},t.prototype.getLength=function(){return this.views.length},t.prototype.getActiveSync=function(){return this.views[this.views.length-1]},t.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},t.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},t.prototype.queueTrns=function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise(function(t,n){e.resolve=t,e.reject=n});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n},t.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=this.win.document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?-1:1)}},t.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},t.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},t.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},t.prototype.runTransition=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,i;return __generator(this,function(o){switch(o.label){case 0:if(o.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&1===n.state?[4,n.init(this.el)]:[3,2];case 1:o.sent(),o.label=2;case 2:return this.postViewInit(n,t,e),(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t?[4,this.transition(n,t,e)]:[3,4];case 3:return r=o.sent(),[3,5];case 4:r={hasCompleted:!0,requiresTransition:!1},o.label=5;case 5:return this.success(r,e),this.ionNavDidChange.emit(),[3,7];case 6:return i=o.sent(),this.failed(i,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}})})},t.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){n.assert(void 0!==e.removeStart,"removeView needs removeStart"),n.assert(void 0!==e.removeCount,"removeView needs removeCount");var r=this.views.indexOf(e.removeView);if(r<0)throw new Error("removeView was not found");e.removeStart+=r}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var i=e.insertViews;if(i){n.assert(i.length>0,"length can not be zero");var o=i.map(function(e){return e instanceof g?e:"page"in e?b(e.page,e.params):b(e,void 0)}).filter(function(e){return null!==e});if(0===o.length)throw new Error("invalid views to insert");for(var a=0,s=o;a<s.length;a++){var u=s[a];u.delegate=e.opts.delegate;var c=u.nav;if(c&&c!==this)throw new Error("inserted view was already inserted");if(3===u.state)throw new Error("inserted view was already destroyed")}e.insertViews=o}},t.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var r=e.removeStart;if(void 0!==r)for(var i=this.views,o=r+e.removeCount,a=i.length-1;a>=0;a--){var s=i[a];if((a<r||a>=o)&&s!==t)return s}},t.prototype.postViewInit=function(e,t,r){n.assert(t||e,"Both leavingView and enteringView are null"),n.assert(r.resolve,"resolve must be valid"),n.assert(r.reject,"reject must be valid");var i,o=r.opts,a=r.insertViews,s=r.removeStart,u=r.removeCount;if(void 0!==s&&void 0!==u){n.assert(s>=0,"removeStart can not be negative"),n.assert(u>=0,"removeCount can not be negative"),i=[];for(var c=0;c<u;c++)(b=this.views[c+s])&&b!==e&&b!==t&&i.push(b);o.direction=o.direction||"back"}var l=this.views.length+(void 0!==a?a.length:0)-(void 0!==u?u:0);if(n.assert(l>=0,"final balance can not be negative"),0===l)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(a){for(var h=r.insertStart,p=0,f=a;p<f.length;p++)this.insertViewAt(b=f[p],h),h++;r.enteringRequiresTransition&&(o.direction=o.direction||"forward")}if(i&&i.length>0){for(var v=0,m=i;v<m.length;v++)d((b=m[v]).element,"ionViewWillLeave"),d(b.element,"ionViewDidLeave"),d(b.element,"ionViewWillUnload");for(var g=0,w=i;g<w.length;g++){var b;this.destroyView(b=w[g])}}},t.prototype.transition=function(e,t,n){return __awaiter(this,void 0,void 0,function(){var r,i,o,a,d,f=this;return __generator(this,function(v){switch(v.label){case 0:return i=(r=n.opts).progressAnimation?function(e){return f.sbAni=e}:void 0,o=e.element,a=t&&t.element,[4,function(e){return new Promise(function(t,n){e.queue.write(function(){!function(e){var t=e.enteringEl,n=e.leavingEl;(function(t,n,r){void 0!==t&&(t.style.zIndex="back"===e.direction?"99":"101"),void 0!==n&&(n.style.zIndex="100")})(t,n),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),m(t,!1),n&&m(n,!1)}(e),function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,s()]:[2,void 0];case 1:return t=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,u()];case 3:t=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,t]}})})}(e)];case 1:return[2,(t=n.sent())?function(e,t){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(r){switch(r.label){case 0:return[4,l(t,!0)];case 1:return r.sent(),[4,t.animationCtrl.create(e,t.baseEl,t)];case 2:return n=r.sent(),h(t.enteringEl,t.leavingEl),[4,function(e,t){var n=t.progressCallback,r=new Promise(function(t){return e.onFinish(t)});return n?(e.progressStart(),n(e)):e.play(),r}(n,t)];case 3:return r.sent(),t.progressCallback&&t.progressCallback(void 0),n.hasCompleted&&p(t.enteringEl,t.leavingEl),[2,{hasCompleted:n.hasCompleted,animation:n}]}})})}(t,e):function(e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:return t=e.enteringEl,n=e.leavingEl,[4,l(e,!1)];case 1:return r.sent(),h(t,n),p(t,n),[2,{hasCompleted:!0}]}})})}(e)]}})})}(e).then(function(n){n.animation&&n.animation.destroy(),c(e),t(n)},function(t){c(e),n(t)})})})}(Object.assign({mode:this.mode,showGoBack:this.canGoBackSync(e),animationCtrl:this.animationCtrl,queue:this.queue,window:this.win,baseEl:this.el,animationBuilder:this.animation||r.animationBuilder||this.config.get("navAnimation"),progressCallback:i,animated:this.animated,enteringEl:o,leavingEl:a},r))];case 1:return d=v.sent().hasCompleted,[2,this.transitionFinish(d,e,t,r)]}})})},t.prototype.transitionFinish=function(e,t,n,r){var i=e?t:n;return i&&this.cleanup(i),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:r.direction}},t.prototype.insertViewAt=function(e,t){var r=this.views,i=r.indexOf(e);i>-1?(n.assert(e.nav===this,"view is not part of the nav"),r.splice(t,0,r.splice(i,1)[0])):(n.assert(!e.nav,"nav is used"),e.nav=this,r.splice(t,0,e))},t.prototype.removeView=function(e){n.assert(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,r=t.indexOf(e);n.assert(r>-1,"view must be part of the stack"),r>=0&&t.splice(r,1)},t.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},t.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),r=t.length-1;r>=0;r--){var i=t[r],o=i.element;r>n?(d(o,"ionViewWillUnload"),this.destroyView(i)):r<n&&m(o,!0)}},t.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.canGoBackSync()},t.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},t.prototype.onMove=function(e){this.sbAni&&this.sbAni.progressStep(e)},t.prototype.onEnd=function(e,t,n){this.sbAni&&this.sbAni.progressEnd(e,t,n)},t.prototype.render=function(){return i("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-nav"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animation:{type:"Any",attr:"animation"},animationCtrl:{connect:"ion-animation-controller"},canGoBack:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getActive:{method:!0},getByIndex:{method:!0},getPrevious:{method:!0},getRouteId:{method:!0},insert:{method:!0},insertPages:{method:!0},pop:{method:!0},popTo:{method:!0},popToRoot:{method:!0},push:{method:!0},queue:{context:"queue"},removeIndex:{method:!0},root:{type:String,attr:"root",watchCallbacks:["rootChanged"]},rootParams:{type:"Any",attr:"root-params"},setPages:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},swipeGesture:{type:Boolean,attr:"swipe-gesture",mutable:!0,watchCallbacks:["swipeGestureChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),t}(),_=function(){function e(){this.url=""}return e.prototype.onUpdate=function(e){this.ionRouteDataChanged.emit(e)},e.prototype.onComponentProps=function(e,t){if(e!==t){var n=e?Object.keys(e):[],r=t?Object.keys(t):[];if(n.length===r.length)for(var i=0,o=n;i<o.length;i++){var a=o[i];if(e[a]!==t[a])return void this.onUpdate(e)}else this.onUpdate(e)}},e.prototype.componentDidLoad=function(){this.ionRouteDataChanged.emit()},e.prototype.componentDidUnload=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(e,"is",{get:function(){return"ion-route"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component",watchCallbacks:["onUpdate"]},componentProps:{type:"Any",attr:"component-props",watchCallbacks:["onComponentProps"]},url:{type:String,attr:"url",watchCallbacks:["onUpdate"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionRouteDataChanged",method:"ionRouteDataChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),e}();function C(e){return"/"+e.filter(function(e){return e.length>0}).join("/")}function P(e){if(null==e)return[""];var t=e.split("/").map(function(e){return e.trim()}).filter(function(e){return e.length>0});return 0===t.length?[""]:t}var S=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";function R(e){if(e)return e.matches(S)?e:e.querySelector(S)||void 0}function E(e,t){return t.find(function(t){return function(e,t){var n=t.from;if(void 0===t.to)return!1;if(n.length>e.length)return!1;for(var r=0;r<n.length;r++){var i=n[r];if("*"===i)return!0;if(i!==e[r])return!1}return n.length===e.length}(e,t)})}function k(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n&&e[r].toLowerCase()===t[r].id;r++);return r}function T(e,t){for(var n,r=new j(e),i=!1,o=0;o<t.length;o++){var a=t[o].path;if(""===a[0])i=!0;else{for(var s=0,u=a;s<u.length;s++){var c=u[s],l=r.next();if(":"===c[0]){if(""===l)return null;((n=n||[])[o]||(n[o]={}))[c.slice(1)]=l}else if(l!==c)return null}i=!1}}return i&&i!==(""===r.next())?null:n?t.map(function(e,t){return{id:e.id,path:e.path,params:O(e.params,n[t])}}):t}function O(e,t){return!e&&t?t:e&&!t?e:e&&t?Object.assign({},e,t):void 0}function V(e){for(var t=1,n=1,r=0,i=e;r<i.length;r++)for(var o=0,a=i[r].path;o<a.length;o++){var s=a[o];":"===s[0]?t+=Math.pow(1,n):""!==s&&(t+=Math.pow(2,n)),n++}return t}var j=function(){function e(e){this.path=e.slice()}return e.prototype.next=function(){return this.path.length>0?this.path.shift():""},e}();function B(e){return Array.from(e.children).filter(function(e){return"ION-ROUTE-REDIRECT"===e.tagName}).map(function(e){var t=I(e,"to");return{from:P(I(e,"from")),to:null==t?void 0:P(t)}})}function A(e){return function(e){for(var t=[],n=0,r=e;n<r.length;n++){q([],t,r[n])}return t}(function e(t,n){return void 0===n&&(n=t),Array.from(n.children).filter(function(e){return"ION-ROUTE"===e.tagName&&e.component}).map(function(n){var r=I(n,"component");if(null==r)throw new Error("component missing in ion-route");return{path:P(I(n,"url")),id:r.toLowerCase(),params:n.componentProps,children:e(t,n)}})}(e))}function I(e,t){return t in e?e[t]:e.hasAttribute(t)?e.getAttribute(t):null}function q(e,t,n){var r=e.slice();if(r.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(var i=0,o=n.children;i<o.length;i++)q(r,t,o[i]);else t.push(r)}var x=function(){function e(){this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,(t=this.win,R(t.document.body)?Promise.resolve():new Promise(function(e){t.addEventListener("ionNavWillLoad",e,{once:!0})}))];case 1:return e.sent(),[4,this.onRoutesChanged()];case 2:return e.sent(),[2]}var t})})},e.prototype.componentDidLoad=function(){this.win.addEventListener("ionRouteRedirectChanged",n.debounce(this.onRedirectChanged.bind(this),10)),this.win.addEventListener("ionRouteDataChanged",n.debounce(this.onRoutesChanged.bind(this),100))},e.prototype.onPopState=function(){var e=this.historyDirection(),t=this.getPath();return this.writeNavStateRoot(t,e)},e.prototype.onBackButton=function(e){var t=this;e.detail.register(0,function(){return t.goBack()})},e.prototype.push=function(e,t){void 0===t&&(t="forward"),e.startsWith(".")&&(e=new URL(e,window.location.href).pathname);var n=P(e),r=D[t];return this.setPath(n,r),this.writeNavStateRoot(n,r)},e.prototype.goBack=function(){return this.win.history.back(),Promise.resolve(this.waitPromise)},e.prototype.printDebug=function(){this.getPath(),function(e){console.group("[ion-core] ROUTES["+e.length+"]");for(var t=function(e){var t=[];e.forEach(function(e){return t.push.apply(t,e.path)});var n=e.map(function(e){return e.id});C(t),n.join(", ")},n=0,r=e;n<r.length;n++)t(r[n]);console.groupEnd()}(A(this.el)),function(e){console.group("[ion-core] REDIRECTS["+e.length+"]");for(var t=0,n=e;t<n.length;t++){var r=n[t];r.to&&(C(r.from),C(r.to))}console.groupEnd()}(B(this.el))},e.prototype.navChanged=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,i,o,a;return __generator(this,function(s){switch(s.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,i;return __generator(this,function(o){switch(o.label){case 0:t=[],r=e,o.label=1;case 1:return(n=R(r))?[4,n.getRouteId()]:[3,3];case 2:return(i=o.sent())?(r=i.element,i.element=void 0,t.push(i),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:t,outlet:n}]}})})}(this.win.document.body)];case 1:return t=s.sent(),n=t.ids,r=t.outlet,i=A(this.el),(o=function(e,t){for(var n=null,r=0,i=e.map(function(e){return e.id}),o=0,a=t;o<a.length;o++){var s=a[o],u=k(i,s);u>r&&(n=s,r=u)}return n?n.map(function(t,n){return{id:t.id,path:t.path,params:O(t.params,e[n]&&e[n].params)}}):null}(n,i))?(a=function(e){for(var t=[],n=0,r=e;n<r.length;n++)for(var i=r[n],o=0,a=i.path;o<a.length;o++){var s=a[o];if(":"===s[0]){var u=i.params&&i.params[s.slice(1)];if(!u)return null;t.push(u)}else""!==s&&t.push(s)}return t}(o))?(this.setPath(a,e),[4,this.safeWriteNavState(r,o,0,a,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",n.map(function(e){return e.id})),[2,!1]);case 2:return s.sent(),[2,!0]}})})},e.prototype.onRedirectChanged=function(){var e=this.getPath();e&&E(e,B(this.el))&&this.writeNavStateRoot(e,0)},e.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),0)},e.prototype.historyDirection=function(){null===this.win.history.state&&(this.state++,this.win.history.replaceState(this.state,this.win.document.title,this.win.document.location.href));var e=this.win.history.state,t=this.lastState;return this.lastState=e,e>t?1:e<t?-1:0},e.prototype.writeNavStateRoot=function(e,t){return __awaiter(this,void 0,void 0,function(){var n,r,i,o,a;return __generator(this,function(s){return e?(n=B(this.el),r=E(e,n),i=null,r&&(this.setPath(r.to,t),i=r.from,e=r.to),o=A(this.el),(a=function(e,t){for(var n=null,r=0,i=0,a=o;i<a.length;i++){var s=T(e,a[i]);if(null!==s){var u=V(s);u>r&&(r=u,n=s)}}return n}(e))?[2,this.safeWriteNavState(this.win.document.body,a,t,e,i)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])})})},e.prototype.safeWriteNavState=function(e,t,n,r,i,o){return void 0===o&&(o=0),__awaiter(this,void 0,void 0,function(){var a,s,u;return __generator(this,function(c){switch(c.label){case 0:return[4,this.lock()];case 1:a=c.sent(),s=!1,c.label=2;case 2:return c.trys.push([2,4,,5]),[4,this.writeNavState(e,t,n,r,i,o)];case 3:return s=c.sent(),[3,5];case 4:return u=c.sent(),console.error(u),[3,5];case 5:return a(),[2,s]}})})},e.prototype.lock=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return e=this.waitPromise,this.waitPromise=new Promise(function(e){return t=e}),void 0===e?[3,2]:[4,e];case 1:n.sent(),n.label=2;case 2:return[2,t]}})})},e.prototype.writeNavState=function(e,t,n,r,i,o){return void 0===o&&(o=0),__awaiter(this,void 0,void 0,function(){var a,s;return __generator(this,function(u){switch(u.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(a=this.routeChangeEvent(r,i))&&this.ionRouteWillChange.emit(a),[4,function e(t,n,r,i,o){return void 0===o&&(o=!1),__awaiter(this,void 0,void 0,function(){var a,s,u,c;return __generator(this,function(l){switch(l.label){case 0:return l.trys.push([0,6,,7]),a=R(t),i>=n.length||!a?[2,o]:[4,a.componentOnReady()];case 1:return l.sent(),[4,a.setRouteId((s=n[i]).id,s.params,r)];case 2:return(u=l.sent()).changed&&(r=0,o=!0),[4,e(u.element,n,r,i+1,o)];case 3:return o=l.sent(),u.markVisible?[4,u.markVisible()]:[3,5];case 4:l.sent(),l.label=5;case 5:return[2,o];case 6:return c=l.sent(),console.error(c),[2,!1];case 7:return[2]}})})}(e,t,n,o)]);case 1:return s=u.sent(),this.busy=!1,a&&this.ionRouteDidChange.emit(a),[2,s]}})})},e.prototype.setPath=function(e,t){this.state++,function(e,t,n,r,i,o){var a=C(P(t).concat(r));n&&(a="#"+a),1===i?e.pushState(o,"",a):e.replaceState(o,"",a)}(this.win.history,this.root,this.useHash,e,t,this.state)},e.prototype.getPath=function(){return function(e,t,n){var r=e.pathname;if(n){var i=e.hash;r="#"===i[0]?i.slice(1):""}return function(e,t){if(e.length>t.length)return null;if(e.length<=1&&""===e[0])return t;for(var n=0;n<e.length;n++)if(e[n].length>0&&e[n]!==t[n])return null;return t.length===e.length?[""]:t.slice(e.length)}(P(t),P(r))}(this.win.location,this.root,this.useHash)},e.prototype.routeChangeEvent=function(e,t){var n=this.previousPath,r=C(e);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:t?C(t):null,to:r}},Object.defineProperty(e,"is",{get:function(){return"ion-router"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{config:{context:"config"},el:{elementRef:!0},goBack:{method:!0},navChanged:{method:!0},printDebug:{method:!0},push:{method:!0},queue:{context:"queue"},root:{type:String,attr:"root"},useHash:{type:Boolean,attr:"use-hash"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionRouteWillChange",method:"ionRouteWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRouteDidChange",method:"ionRouteDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"window:popstate",method:"onPopState"},{name:"document:ionBackButton",method:"onBackButton"}]},enumerable:!0,configurable:!0}),e}(),D={back:-1,root:0,forward:1},L=function(){function e(){}return e.prototype.create=function(e){return r.createOverlay(this.doc.createElement("ion-toast"),e)},e.prototype.dismiss=function(e,t,n){return r.dismissOverlay(this.doc,e,t,"ion-toast",n)},e.prototype.getTop=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,r.getOverlay(this.doc,"ion-toast")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}();t.AppRoot=o,t.IonApp=a,t.IonNav=y,t.IonRoute=_,t.IonRouter=x,t.IonToastController=L,Object.defineProperty(t,"__esModule",{value:!0})});