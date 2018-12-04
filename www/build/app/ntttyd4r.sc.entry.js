/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{a as e,b as o,c as s,d as i}from"./chunk-f49656cd.js";import{i as l,d as n,e as r}from"./chunk-bbc0ff40.js";class a{constructor(){this.state=!1}formattedName(){return this.name?this.name.substr(0,1).toUpperCase()+this.name.substr(1).toLowerCase():""}render(){return[t("ion-header",null,t("ion-toolbar",{color:"primary"},t("ion-buttons",{slot:"start"},t("ion-back-button",{defaultHref:"/"})),t("ion-title",null,"Profile: ",this.name))),t("ion-content",{padding:!0},t("p",null,Math.random()<.5?"Hello":"Hola","! My name is ",this.formattedName(),". My name was passed in through a route param!"),t("ion-item",null,t("ion-label",null,"Setting (",this.state.toString(),")"),t("ion-toggle",{checked:this.state,onIonChange:t=>this.state=t.detail.checked})))]}static get is(){return"app-profile"}static get properties(){return{name:{type:String,attr:"name"},state:{state:!0}}}static get style(){return""}}class c{async onClick(t){const e=this.el.closest("ion-nav");return t.preventDefault(),e&&await e.canGoBack()?e.pop({skipIfBusy:!0}):o(this.win,this.defaultHref,t,"back")}hostData(){const t=void 0!==this.defaultHref;return{"ion-activatable":!0,class:Object.assign({},e(this.color),{button:!0,"show-back-button":t})}}render(){const e="ios"===this.mode?"Back":null,o=null!=this.icon?this.icon:this.config.get("backButtonIcon","arrow-back"),s=null!=this.text?this.text:this.config.get("backButtonText",e);return t("button",{type:"button",class:"button-native",onClick:t=>this.onClick(t)},t("span",{class:"button-inner"},o&&t("ion-icon",{icon:o,lazy:!1}),s&&t("span",{class:"button-text"},s),"md"===this.mode&&t("ion-ripple-effect",null)),"md"===this.mode&&t("ion-ripple-effect",null))}static get is(){return"ion-back-button"}static get encapsulation(){return"scoped"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:String,attr:"mode"},text:{type:String,attr:"text"},win:{context:"window"}}}static get style(){return".sc-ion-back-button-md-h{--background:transparent;--ripple-color:currentColor;--transition:background-color,opacity 100ms linear;--opacity:1;display:none;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.ion-color.sc-ion-back-button-md-h   .button-native.sc-ion-back-button-md{color:var(--ion-color-base)}.activated.sc-ion-back-button-md-h   .button-native.sc-ion-back-button-md{opacity:.4}.show-back-button.sc-ion-back-button-md-h, .can-go-back.sc-ion-back-button-md-h > ion-header.sc-ion-back-button-md, .can-go-back > ion-header   .sc-ion-back-button-md-h{display:block}.button-native.sc-ion-back-button-md{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;min-width:var(--min-width);min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner.sc-ion-back-button-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}ion-icon.sc-ion-back-button-md{padding:var(--icon-padding-top) var(--icon-padding-end) var(--icon-padding-bottom) var(--icon-padding-start);margin:var(--icon-margin-top) var(--icon-margin-end) var(--icon-margin-bottom) var(--icon-margin-start);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}.sc-ion-back-button-md-h{--color:currentColor;--margin-top:1px;--margin-end:6px;--margin-bottom:0;--margin-start:0;--padding-top:0;--padding-end:5px;--padding-bottom:0;--padding-start:5px;--min-height:32px;--min-width:44px;--icon-padding-end:.3em;--icon-padding-start:.3em;--icon-margin-top:0;--icon-margin-end:6px;--icon-margin-bottom:0;--icon-margin-start:6px;--icon-font-size:24px;--icon-font-weight:normal;font-size:14px;font-weight:500;text-transform:uppercase}.button-native.sc-ion-back-button-md{-webkit-box-shadow:none;box-shadow:none}ion-icon.sc-ion-back-button-md{line-height:.67;text-align:start}"}static get styleMode(){return"md"}}class h{static get is(){return"ion-buttons"}static get encapsulation(){return"scoped"}static get style(){return".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;--padding-start:0;--padding-end:0;margin-left:2px;margin-right:2px;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--height:32px;--box-shadow:none;font-size:14px;font-weight:500}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:initial;--color-activated:initial}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background,#f8f8f8);--color-activated:var(--ion-toolbar-background,#f8f8f8);--background:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-activated:var(--ion-toolbar-color,var(--ion-text-color,#424242))}.sc-ion-buttons-md-s  .button-outline {--color:initial;--color-activated:currentColor;--background:transparent;--background-activated:transparent;--border-color:currentColor}.sc-ion-buttons-md-s  .button-clear {--color:initial;--color-activated:currentColor;--background:transparent}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin:0;margin-right:.3em;font-size:1.4em}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin:0;margin-left:.4em;font-size:1.4em}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding:0;margin:0;font-size:1.8em}[slot=start].sc-ion-buttons-md-h{-ms-flex-order:2;order:2}[slot=secondary].sc-ion-buttons-md-h{-ms-flex-order:4;order:4}[slot=primary].sc-ion-buttons-md-h{-ms-flex-order:5;order:5;text-align:end}[slot=end].sc-ion-buttons-md-h{-ms-flex-order:6;order:6;text-align:end}"}static get styleMode(){return"md"}}class d{constructor(){this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}onNavChanged(){this.resize()}componentWillLoad(){void 0===this.forceOverscroll&&(this.forceOverscroll="ios"===this.mode&&l(this.win,"mobile"))}componentDidLoad(){this.resize()}componentDidUnload(){this.watchDog&&clearInterval(this.watchDog)}resize(){this.fullscreen?this.queue.read(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())}readDimensions(){const t=function(t){const e=t.closest("ion-tabs");if(e)return e;const o=t.closest("ion-app,ion-page,.ion-page,page-inner");return o||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)}(this.el),e=Math.max(this.el.offsetTop,0),o=Math.max(t.offsetHeight-e-this.el.offsetHeight,0);(e!==this.cTop||o!==this.cBottom)&&(this.cTop=e,this.cBottom=o,this.el.forceUpdate())}onScroll(t){const e=Date.now(),o=!this.isScrolling;this.lastScroll=e,o&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,this.queue.read(e=>{this.queued=!1,this.detail.event=t,function(t,e,o,s){const i=t.currentX,l=t.currentY,n=t.timeStamp,r=e.scrollLeft,a=e.scrollTop;s&&(t.startTimeStamp=o,t.startX=r,t.startY=a,t.velocityX=t.velocityY=0),t.timeStamp=o,t.currentX=t.scrollLeft=r,t.currentY=t.scrollTop=a,t.deltaX=r-t.startX,t.deltaY=a-t.startY;const c=o-n;if(c>0&&c<100){const e=(a-l)/c;t.velocityX=.7*((r-i)/c)+.3*t.velocityX,t.velocityY=.7*e+.3*t.velocityY}}(this.detail,this.scrollEl,e,o),this.ionScroll.emit(this.detail)}))}getScrollElement(){return Promise.resolve(this.scrollEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}scrollToBottom(t=0){return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}scrollByPoint(t,e,o){return this.scrollToPoint(t+this.scrollEl.scrollLeft,e+this.scrollEl.scrollTop,o)}async scrollToPoint(t,e,o=0){const s=this.scrollEl;if(o<32)return null!=e&&(s.scrollTop=e),void(null!=t&&(s.scrollLeft=t));let i,l=0;const n=new Promise(t=>i=t),r=s.scrollTop,a=s.scrollLeft,c=null!=e?e-r:0,h=null!=t?t-a:0,d=t=>{const e=Math.min(1,(t-l)/o)-1,n=Math.pow(e,3)+1;0!==c&&(s.scrollTop=Math.floor(n*c+r)),0!==h&&(s.scrollLeft=Math.floor(n*h+a)),n<1?requestAnimationFrame(d):i()};return requestAnimationFrame(t=>{l=t,d(t)}),n}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()},100)}onScrollEnd(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1})}hostData(){return{class:Object.assign({},e(this.color),{"content-sizing":s("ion-popover",this.el),overscroll:!!this.forceOverscroll}),style:{"--offset-top":`${this.cTop}px`,"--offset-bottom":`${this.cBottom}px`}}}render(){const{scrollX:e,scrollY:o,forceOverscroll:s}=this;return this.resize(),[t("div",{class:{"inner-scroll":!0,"scroll-x":e,"scroll-y":o,overscroll:(e||o)&&!!s},ref:t=>this.scrollEl=t,onScroll:t=>this.onScroll(t)},t("slot",null)),t("slot",{name:"fixed"})]}static get is(){return"ion-content"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},forceOverscroll:{type:Boolean,attr:"force-overscroll",mutable:!0},fullscreen:{type:Boolean,attr:"fullscreen"},getScrollElement:{method:!0},queue:{context:"queue"},scrollByPoint:{method:!0},scrollEvents:{type:Boolean,attr:"scroll-events"},scrollToBottom:{method:!0},scrollToPoint:{method:!0},scrollToTop:{method:!0},scrollX:{type:Boolean,attr:"scroll-x"},scrollY:{type:Boolean,attr:"scroll-y"},win:{context:"window"}}}static get events(){return[{name:"ionScrollStart",method:"ionScrollStart",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScroll",method:"ionScroll",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScrollEnd",method:"ionScrollEnd",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"body:ionNavDidChange",method:"onNavChanged"}]}static get style(){return".sc-ion-content-h{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:layout size style}.ion-color.sc-ion-content-h   .inner-scroll.sc-ion-content{background:var(--ion-color-base);color:var(--ion-color-contrast)}.outer-content.sc-ion-content-h{--background:var(--ion-background-color-step-50,#f2f2f2)}.inner-scroll.sc-ion-content{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding:calc(var(--padding-top) + var(--offset-top)) var(--padding-end) calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom)) var(--padding-start);position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.scroll-x.sc-ion-content, .scroll-y.sc-ion-content{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y.sc-ion-content{overflow-y:var(--overflow)}.scroll-x.sc-ion-content{overflow-x:var(--overflow)}.overscroll.sc-ion-content:after, .overscroll.sc-ion-content:before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll.sc-ion-content:before{bottom:-1px}.overscroll.sc-ion-content:after{top:-1px}.content-sizing.sc-ion-content-h{contain:none}.content-sizing.sc-ion-content-h   .inner-scroll.sc-ion-content{position:relative}"}}class u{constructor(){this.translucent=!1}hostData(){const t=i(this.mode,"header"),e=this.translucent?i(this.mode,"header-translucent"):null;return{class:Object.assign({},t,e)}}static get is(){return"ion-header"}static get properties(){return{mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}}static get style(){return"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-8px;background-position:left 0 top 0;position:absolute;width:100%;height:8px;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAIBAMAAAACWGKkAAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAASAQCkAAAAB3RSTlMFTEIzJBcOYhQUIwAAAB9JREFUCNdjEIQCBiUoYDCGAgYXKGAIhQKGNChgwAAAorMLKSCkL40AAAAASUVORK5CYII=\");background-repeat:repeat-x;content:\"\"}.header-md[no-border]:after{display:none}"}static get styleMode(){return"md"}}class p{constructor(){this.itemStyles=new Map,this.multipleInputs=!1,this.button=!1,this.detailIcon="ios-arrow-forward",this.disabled=!1,this.routerDirection="forward",this.type="button"}itemStyle(t){t.stopPropagation();const e=t.target.tagName,o=t.detail,s={},i=this.itemStyles.get(e)||{};let l=!1;Object.keys(o).forEach(t=>{const e=`item-${t}`,n=o[t];n!==i[e]&&(l=!0),n&&(s[e]=!0)}),l&&(this.itemStyles.set(e,s),this.el.forceUpdate())}componentDidLoad(){Array.from(this.el.querySelectorAll("ion-button")).forEach(t=>{t.size||(t.size="small")});const t=this.el.querySelectorAll("ion-select, ion-datetime");this.multipleInputs=t.length>1}isClickable(){return void 0!==this.href||this.button}hostData(){const t={};return this.itemStyles.forEach(e=>{Object.assign(t,e)}),{"ion-activatable":this.isClickable(),"aria-disabled":this.disabled?"true":null,class:Object.assign({},t,e(this.color),{[`item-lines-${this.lines}`]:!!this.lines,"item-disabled":this.disabled,"in-list":s("ion-list",this.el),item:!0,"item-multiple-inputs":this.multipleInputs})}}render(){const{href:e,detail:s,mode:i,win:l,detailIcon:n,routerDirection:r,type:a}=this,c=this.isClickable(),h=c?void 0===e?"button":"a":"div",d=void 0!==s?s:"ios"===i&&c;return[t(h,Object.assign({},"button"===h?{type:a}:{href:e},{class:"item-native",onClick:t=>o(l,e,t,r)}),t("slot",{name:"start"}),t("div",{class:"item-inner"},t("div",{class:"input-wrapper"},t("slot",null)),t("slot",{name:"end"}),d&&t("ion-icon",{icon:n,lazy:!1,class:"item-detail-icon"}),t("div",{class:"item-inner-highlight"})),c&&"md"===i&&t("ion-ripple-effect",null)),t("div",{class:"item-highlight"})]}static get is(){return"ion-item"}static get encapsulation(){return"shadow"}static get properties(){return{button:{type:Boolean,attr:"button"},color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},detailIcon:{type:String,attr:"detail-icon"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"},multipleInputs:{state:!0},routerDirection:{type:String,attr:"router-direction"},type:{type:String,attr:"type"},win:{context:"window"}}}static get listeners(){return[{name:"ionStyle",method:"itemStyle"}]}static get style(){return".sc-ion-item-md-h{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--box-shadow:none;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-item-md-h   .item-native.sc-ion-item-md{background:var(--ion-color-base);color:var(--ion-color-contrast)}.ion-color.sc-ion-item-md-h   .item-inner.sc-ion-item-md, .ion-color.sc-ion-item-md-h   .item-native.sc-ion-item-md{border-color:var(--ion-color-shade)}.activated.sc-ion-item-md-h   .item-native.sc-ion-item-md{background:var(--background-activated)}.ion-color.activated.sc-ion-item-md-h   .item-native.sc-ion-item-md{background:var(--ion-color-tint)}.item-disabled.sc-ion-item-md-h{cursor:default;opacity:.3;pointer-events:none}.item-native.sc-ion-item-md{border-radius:var(--border-radius);margin:0;padding:var(--padding-top) var(--padding-end) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left, 0px));font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}a.sc-ion-item-md, button.sc-ion-item-md{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner.sc-ion-item-md{margin:0;padding:var(--inner-padding-top) calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end)) var(--inner-padding-bottom) var(--inner-padding-start);display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.item-detail-icon.sc-ion-item-md{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}.sc-ion-item-md-s > ion-icon{font-size:1.6em}.sc-ion-item-md-s > ion-button{--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}.item-input.sc-ion-item-md-h, [vertical-align-top].sc-ion-item-md-h{-ms-flex-align:start;align-items:flex-start}.input-wrapper.sc-ion-item-md{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.item-label-floating.sc-ion-item-md-h   .input-wrapper.sc-ion-item-md, .item-label-stacked.sc-ion-item-md-h   .input-wrapper.sc-ion-item-md{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight.sc-ion-item-md, .item-inner-highlight.sc-ion-item-md{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background)}.item-highlight.sc-ion-item-md{height:var(--full-highlight-height)}.item-inner-highlight.sc-ion-item-md{height:var(--inset-highlight-height)}.item-interactive.item-has-focus.sc-ion-item-md-h{--highlight-background:var(--highlight-color-focused);--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}.item-interactive.ion-valid.sc-ion-item-md-h{--highlight-background:var(--highlight-color-valid)}.item-interactive.ion-invalid.sc-ion-item-md-h{--highlight-background:var(--highlight-color-invalid)}.sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-select, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-select{--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}.sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-datetime, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-datetime{--padding-start:0;width:100%}.sc-ion-item-md-h.item-multiple-inputs .sc-ion-item-md-s > ion-datetime, .sc-ion-item-md-h.item-multiple-inputs .sc-ion-item-md-s > ion-select{position:relative}.item-textarea.sc-ion-item-md-h{-ms-flex-align:stretch;align-items:stretch}.sc-ion-item-md-s > ion-reorder[slot]{margin-top:0;margin-bottom:0}.sc-ion-item-md-h{--min-height:48px;--background:var(--ion-item-background,transparent);--background-activated:var(--background);--transition:background-color 300ms cubic-bezier(.4,0,.2,1);--padding-start:16px;--color:var(--ion-item-color,var(--ion-text-color,#000));--border-color:var(--ion-item-border-color,var(--ion-border-color,rgba(0,0,0,0.13)));--inner-padding-end:16px;--inner-border-width:0 0 1px 0;--highlight-height:2px;--highlight-color-focused:var(--ion-color-primary,#3880ff);--highlight-color-valid:var(--ion-color-success,#10dc60);--highlight-color-invalid:var(--ion-color-danger,#f04141);font-size:16px;font-weight:400;text-transform:none}.item-interactive.sc-ion-item-md-h{--inner-border-width:0}.item-interactive.sc-ion-item-md-h, .item-lines-full.sc-ion-item-md-h{--border-width:0 0 1px 0;--show-full-highlight:1;--show-inset-highlight:0}.item-lines-inset.sc-ion-item-md-h{--inner-border-width:0 0 1px 0;--show-full-highlight:0;--show-inset-highlight:1}.item-lines-inset.sc-ion-item-md-h, .item-lines-none.sc-ion-item-md-h{--border-width:0;--show-full-highlight:0}.item-lines-full.sc-ion-item-md-h, .item-lines-none.sc-ion-item-md-h{--inner-border-width:0;--show-inset-highlight:0}.sc-ion-item-md-h.item-multi-line .sc-ion-item-md-s > [slot=end], .sc-ion-item-md-h.item-multi-line .sc-ion-item-md-s > [slot=start]{margin-top:16px;margin-bottom:16px;-ms-flex-item-align:start;align-self:flex-start}.sc-ion-item-md-s > :not(.interactive)[slot=start]{margin-right:32px}.sc-ion-item-md-s > :not(.interactive)[slot=end]{margin-left:32px}.sc-ion-item-md-s > ion-icon{color:rgba(var(--ion-text-color-rgb,0,0,0),.54);font-size:24px}.sc-ion-item-md-s > ion-icon[slot]{margin-top:12px;margin-bottom:12px}.sc-ion-item-md-s > ion-icon[slot=start]{margin-right:32px}.sc-ion-item-md-s > ion-icon[slot=end]{margin-left:16px}.sc-ion-item-md-s > ion-note{margin:0;-ms-flex-item-align:start;align-self:flex-start;font-size:11px}.sc-ion-item-md-s > ion-note[slot]{padding:18px 0 10px}.sc-ion-item-md-s > ion-note[slot=start]{padding-right:16px}.sc-ion-item-md-s > ion-note[slot=end]{padding-left:16px}.sc-ion-item-md-s > ion-avatar{width:40px;height:40px}.sc-ion-item-md-s > ion-thumbnail{width:56px;height:56px}.sc-ion-item-md-s > ion-avatar, .sc-ion-item-md-s > ion-thumbnail{margin-top:8px;margin-bottom:8px}.sc-ion-item-md-s > ion-avatar[slot=start], .sc-ion-item-md-s > ion-thumbnail[slot=start]{margin-right:16px}.sc-ion-item-md-s > ion-avatar[slot=end], .sc-ion-item-md-s > ion-thumbnail[slot=end]{margin-left:16px}.sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > [slot=end], .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > [slot=end]{margin-top:7px;margin-bottom:7px}.sc-ion-item-md-h.item-radio .sc-ion-item-md-s > ion-label, .sc-ion-item-md-h.item-toggle .sc-ion-item-md-s > ion-label{margin-left:0}.sc-ion-item-md-s > .button-small-md{--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;--height:25px;font-size:12px}.sc-ion-item-md-s > .button-small-md ion-icon[slot=icon-only]{padding:0}.item-label-floating.sc-ion-item-md-h, .item-label-stacked.sc-ion-item-md-h{--min-height:65px}.sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-input, .sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-select, .sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-textarea, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-input, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-select, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-textarea{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.sc-ion-item-md-h:not(.item-label) .sc-ion-item-md-s > ion-input, .sc-ion-item-md-h:not(.item-label) .sc-ion-item-md-s > ion-textarea{--padding-start:0}.sc-ion-item-md-h.item-has-focus:not(.ion-color) .sc-ion-item-md-s > .label-floating, .sc-ion-item-md-h.item-has-focus:not(.ion-color) .sc-ion-item-md-s > .label-stacked{color:var(--ion-color-primary,#3880ff)}"}static get styleMode(){return"md"}}class m{constructor(){this.noAnimate=!1}componentWillLoad(){this.noAnimate="floating"===this.position,this.emitStyle()}componentDidLoad(){this.noAnimate&&setTimeout(()=>{this.noAnimate=!1},1e3)}positionChanged(){this.emitStyle()}emitStyle(){const t=this.position;this.ionStyle.emit({label:!0,[`label-${t}`]:!!t})}hostData(){const t=this.position;return{class:Object.assign({},e(this.color),{[`label-${t}`]:!!t,"label-no-animate":this.noAnimate})}}static get is(){return"ion-label"}static get encapsulation(){return"scoped"}static get properties(){return{color:{type:String,attr:"color"},el:{elementRef:!0},mode:{type:String,attr:"mode"},noAnimate:{state:!0},position:{type:String,attr:"position",watchCallbacks:["positionChanged"]}}}static get events(){return[{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".item.sc-ion-label-md-h, .item   .sc-ion-label-md-h{--color:initial;margin:0;display:block;-ms-flex:1;flex:1;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}[text-wrap].sc-ion-label-md-h{white-space:normal}.item-interactive-disabled.sc-ion-label-md-h, .item-interactive-disabled   .sc-ion-label-md-h{cursor:default;opacity:.3;pointer-events:none}.item-input.sc-ion-label-md-h, .item-input   .sc-ion-label-md-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.label-fixed.sc-ion-label-md-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h{-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus   .label-floating.sc-ion-label-md-h, .item-has-placeholder.label-floating.sc-ion-label-md-h, .item-has-placeholder   .label-floating.sc-ion-label-md-h, .item-has-value.label-floating.sc-ion-label-md-h, .item-has-value   .label-floating.sc-ion-label-md-h{-webkit-transform:translateZ(0) scale(.8);transform:translateZ(0) scale(.8)}.label-no-animate.label-floating.sc-ion-label-md-h{-webkit-transition:none;transition:none}.item.sc-ion-label-md-h, .item   .sc-ion-label-md-h{margin:13px 0 10px}[text-wrap].sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h{font-size:12.8px}.label-floating.sc-ion-label-md-h{-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform .15s ease-in-out;transition:-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out;transition:transform .15s ease-in-out,-webkit-transform .15s ease-in-out}.label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h{margin-left:0;margin-bottom:0}.sc-ion-label-md-s  h1 {margin:0 0 2px;font-size:24px;font-weight:400}.sc-ion-label-md-s  h2 {margin:2px 0;font-size:16px;font-weight:400}.sc-ion-label-md-s  h3 , .sc-ion-label-md-s  h4 , .sc-ion-label-md-s  h5 , .sc-ion-label-md-s  h6 {margin:2px 0;font-size:14px;font-weight:400;line-height:normal}.sc-ion-label-md-s  p {margin:0 0 2px;font-size:14px;line-height:20px;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s > p{color:var(--ion-text-color-step-400,#666)}.sc-ion-label-md-h.ion-color.sc-ion-label-md-s > p, .ion-color .sc-ion-label-md-h.sc-ion-label-md-s > p{color:inherit}"}static get styleMode(){return"md"}}class g{getMode(){const t=this.el.closest("ion-toolbar");return t&&t.mode||this.mode}hostData(){const t=this.getMode();return{class:Object.assign({},e(this.color),{[`title-${t}`]:!0})}}render(){return[t("div",{class:"toolbar-title"},t("slot",null))]}static get is(){return"ion-title"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},el:{elementRef:!0}}}static get style(){return".sc-ion-title-h{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;color:var(--color)}.sc-ion-title-h, .title-ios.sc-ion-title-h{-webkit-transform:translateZ(0);transform:translateZ(0)}.title-ios.sc-ion-title-h{left:0;top:0;padding:0 90px;position:absolute;width:100%;height:100%;font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}.title-md.sc-ion-title-h{padding:0 12px;font-size:20px;font-weight:500}.ion-color.sc-ion-title-h{color:var(--ion-color-base)}.toolbar-title.sc-ion-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"}}function b(){const t=window.TapticEngine;t&&t.selection()}class y{constructor(){this.inputId=`ion-tg-${S++}`,this.pivotX=0,this.activated=!1,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on"}checkedChanged(t){this.ionChange.emit({checked:t,value:this.value})}disabledChanged(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)}onClick(){this.checked=!this.checked}onKeyUp(){this.keyFocus=!0}onFocus(){this.ionFocus.emit()}onBlur(){this.keyFocus=!1,this.ionBlur.emit()}componentWillLoad(){this.emitStyle()}async componentDidLoad(){this.gesture=(await import("./gesture.js")).createGesture({el:this.el,queue:this.queue,gestureName:"toggle",gesturePriority:100,threshold:0,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.disabledChanged()}emitStyle(){this.ionStyle.emit({"interactive-disabled":this.disabled})}onStart(t){return this.pivotX=t.currentX,this.activated=!0,t.event.preventDefault(),!0}onMove(t){const e=t.currentX;f(this.checked,e-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=e,b())}onEnd(t){f(this.checked,t.currentX-this.pivotX,4)&&(this.checked=!this.checked,b()),this.activated=!1}getValue(){return this.value||""}hostData(){const t=this.inputId+"-lbl",o=n(this.el);return o&&(o.id=t),{role:"checkbox",tabindex:"0","aria-disabled":this.disabled?"true":null,"aria-checked":`${this.checked}`,"aria-labelledby":t,class:Object.assign({},e(this.color),{"in-item":s("ion-item",this.el),"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus,interactive:!0})}}render(){const e=this.getValue();return r(!0,this.el,this.name,this.checked?e:"",this.disabled),t("div",{class:"toggle-icon"},t("div",{class:"toggle-inner"}))}static get is(){return"ion-toggle"}static get encapsulation(){return"shadow"}static get properties(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},queue:{context:"queue"},value:{type:String,attr:"value"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"click",method:"onClick"},{name:"keyup",method:"onKeyUp"},{name:"focus",method:"onFocus"},{name:"blur",method:"onBlur"}]}static get style(){return".sc-ion-toggle-md-h{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.toggle-key.sc-ion-toggle-md-h   input.sc-ion-toggle-md{border:2px solid #5e9ed6}.toggle-disabled.sc-ion-toggle-md-h, input.sc-ion-toggle-md{pointer-events:none}input.sc-ion-toggle-md{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.sc-ion-toggle-md-h{--background:var(--ion-color-medium-tint,#a2a4ab);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--handle-background:var(--ion-background-color,#fff);--handle-background-checked:var(--ion-color-primary,#3880ff);padding:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}.ion-color.toggle-checked.sc-ion-toggle-md-h   .toggle-icon.sc-ion-toggle-md{background:rgba(var(--ion-color-base-rgb),.5)}.ion-color.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{background:var(--ion-color-base)}.toggle-icon.sc-ion-toggle-md{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .16s;transition:background-color .16s;background:var(--background);pointer-events:none}.toggle-inner.sc-ion-toggle-md{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.16s;transition-duration:.16s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}.toggle-checked.sc-ion-toggle-md-h   .toggle-icon.sc-ion-toggle-md{background:var(--background-checked)}.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}.toggle-disabled.sc-ion-toggle-md-h{opacity:.3}.in-item[slot].sc-ion-toggle-md-h{margin:0;padding:12px 0 12px 16px;cursor:pointer}.in-item[slot=start].sc-ion-toggle-md-h{padding:12px 18px 12px 2px}"}static get styleMode(){return"md"}}function f(t,e,o){const s="rtl"===document.dir;return t?!s&&o>e||s&&-o<e:!s&&-o<e||s&&o>e}let S=0;class v{constructor(){this.childrenStyles=new Map}childrenStyle(t){t.stopPropagation();const e=t.target.tagName,o=t.detail,s={},i=this.childrenStyles.get(e)||{};let l=!1;Object.keys(o).forEach(t=>{const e=`toolbar-${t}`,n=o[t];n!==i[e]&&(l=!0),n&&(s[e]=!0)}),l&&(this.childrenStyles.set(e,s),this.el.forceUpdate())}hostData(){const t={};return this.childrenStyles.forEach(e=>{Object.assign(t,e)}),{class:Object.assign({},t,e(this.color))}}render(){return[t("div",{class:"toolbar-background"}),t("div",{class:"toolbar-container"},t("slot",{name:"start"}),t("slot",{name:"secondary"}),t("div",{class:"toolbar-content"},t("slot",null)),t("slot",{name:"primary"}),t("slot",{name:"end"}))]}static get is(){return"ion-toolbar"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},mode:{type:String,attr:"mode"}}}static get listeners(){return[{name:"ionStyle",method:"childrenStyle"}]}static get style(){return".sc-ion-toolbar-md-h{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-toolbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-toolbar-md-h   .toolbar-background.sc-ion-toolbar-md{background:var(--ion-color-base)}.toolbar-container.sc-ion-toolbar-md{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background.sc-ion-toolbar-md{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-segment.sc-ion-toolbar-md-h{--min-height:auto}.sc-ion-toolbar-md-h{--background:var(--ion-toolbar-background,#f8f8f8);--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,#c1c4cd));--padding-top:4px;--padding-bottom:4px;--padding-start:4px;--padding-end:4px;--min-height:56px}.toolbar-content.sc-ion-toolbar-md{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}.toolbar-segment.sc-ion-toolbar-md-h{--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0}"}static get styleMode(){return"md"}}export{a as AppProfile,c as IonBackButton,h as IonButtons,d as IonContent,u as IonHeader,p as IonItem,m as IonLabel,g as IonTitle,y as IonToggle,v as IonToolbar};