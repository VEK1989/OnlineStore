(()=>{"use strict";var t={705:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},982:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(705),i=n.n(r)()((function(t){return t[1]}));i.push([t.id,"html{\r\n\theight: 100%;\r\n}\r\n\r\nbody{\r\n\tmargin: 0 auto;\r\n\twidth: 1070px;\r\n\tpadding: 0 5px 0 5px;\r\n\talign-items: center;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\nheader{\r\n\twidth: 100%;\r\n\tmargin: 0 0 25px 0;\r\n\tpadding: 10px;\r\n\tbackground-color: greenyellow;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tposition: relative;\r\n\tflex: 0 0 auto;\r\n}\r\n\r\nmain{\r\n\tflex: 1 0 auto;\r\n}\r\n\r\n.goods-list{\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.item{\r\n\tmargin: 10px;\r\n\twidth: 220px;\r\n\tborder: 1px solid black;\r\n\tpadding: 9px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\nh2{\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tmargin: 2px;\r\n}\r\n\r\n.price{\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tmargin: 2px;\r\n}\r\n\r\n.basket-place{\r\n\twidth: 50%;\r\n\tmin-height: 50px;\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\ttop: 64px;\r\n\tright: 0px;\r\n}\r\n\r\n.clicked{\r\n\tdisplay: block;\r\n\tbackground-color: rgba(92, 201, 92, 0.749);\r\n\tborder: 1px solid black;\r\n}\r\n\r\n.btn-place{\r\n\twidth: 100%;\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\talign-items: center;\r\n}\r\n\r\n.btn{\r\n\tmargin: 10px;\r\n\tbackground-color: cornflowerblue;\r\n\tborder: 1px solid cornflowerblue ;\r\n\tborder-radius: 4px;\r\n\tpadding: 3px 5px 3px 5px;\r\n}\r\n\r\n.btn:hover{\r\n\tbackground-color: rgba(107, 20, 220, 0.578);\r\n}\r\n\r\n.register{\r\n\tposition: relative;\r\n}\r\n\r\n.regist-form{\r\n\tleft: 0;\r\n\tright: 0;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n\tbackground-color: rgba(169, 169, 169, 0.817);\r\n}\r\n\r\n.activ{\r\n\tdisplay: block;\r\n}\r\n\r\n.form-body{\r\n\tmargin: 100px auto;\r\n\twidth: 300px;\r\n\tborder-radius: 3px;\r\n\tbackground-color: #fff;\r\n\tpadding: 10px;\r\n\tposition: relative;\r\n}\r\n\r\n.close-button{\r\n\tborder: 1px solid red;\r\n\tborder-radius: 4px;\r\n\tcolor: #fff;\r\n\tbackground-color: red;\r\n\tcursor: pointer;\r\n\tposition: absolute;\r\n\ttop: 5px;\r\n\tright: 5px;\r\n}\r\n\r\n.regist-header{\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tmargin: 5px;\r\n}\r\n\r\nlabel{\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tmargin: 5px;\r\n}\r\n\r\ninput{\r\n\tborder-radius: 3px;\r\n\tborder: 2px solid blue;\r\n}\r\n\r\ninput:invalid{\r\n\tbackground-color: rgba(255, 0, 0, 0.28);\r\n\tborder-color: red;\r\n}\r\n\r\nfooter{\r\n\twidth: 100%;\r\n\tmargin: 25px 0 0 0;\r\n\tpadding: 10px;\r\n\tbackground-color: greenyellow;\r\n\ttext-align: end;\r\n\tflex: 0 0 auto;\r\n}",""]);const o=i},379:(t,e,n)=>{var r,i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function a(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],i=0;i<t.length;i++){var s=t[i],c=e.base?s[0]+e.base:s[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=a(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:d,updater:b(p,e),references:1}),r.push(d)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function u(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function p(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,m=0;function b(t,e){var n,r,i;if(e.singleton){var o=m++;n=h||(h=c(e)),r=u.bind(null,n,o,!1),i=u.bind(null,n,o,!0)}else n=c(e),r=p.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var c=s(t,e),l=0;l<n.length;l++){var d=a(n[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=c}}}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{class t{constructor(t=[]){var e,n;n=[],(e="items")in this?Object.defineProperty(this,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[e]=n,this.item=[]}add(t){const e=this.items.find((e=>e.name===t.name));new Promise((n=>{e?e.counter++:this.items.push(t),n()})).then(this.render.bind(this))}remove(){}render(){this.items.forEach((t=>{t.render()}))}}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class r{constructor(t,n){e(this,"_text",""),e(this,"_onClickClb",null),this.text=t,this._onClickClb=n}onBtnClick(){"function"==typeof this._onClickClb&&this._onClickClb()}getMainTemplate(){const t=document.createElement("button");return t.classList.add("btn"),t}getTemplate(){const t=this.getMainTemplate();return t.innerHTML=this.text,t.addEventListener("click",(()=>{this.onBtnClick()})),t}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class o{constructor({name:t,price:e},n){i(this,"name",""),i(this,"price",0),i(this,"counter",1),i(this,"_bascketList",null),this.name=t,this.price=e,this._bascketList=n}render(t){if(t){const e=document.createElement("div");e.classList.add("item");const n=document.createElement("img");n.classList.add("item-picture"),n.setAttribute("src","#"),n.setAttribute("alt",`${this.name}`),n.setAttribute("width","120px"),n.setAttribute("height","120px");const i=document.createElement("h2");i.innerHTML=`${this.name}`;const o=document.createElement("span");o.classList.add("price"),o.innerHTML=`${this.price} $`;const a=new r("В корзину",(()=>{this._bascketList.add(new GoodItemInBascket(this))}));e.appendChild(n),e.appendChild(i),e.appendChild(o),e.appendChild(a.getTemplate()),t.appendChild(e)}}}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=n(379),c=n.n(s),l=n(982);c()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;const d=new class extends t{constructor(){super(),this.init()}init(){const t=new r("Корзина",(()=>{e.classList.toggle("clicked")})),e=document.createElement("div");e.classList.add("basket-place");const n=document.querySelector(".basket");n&&(n.appendChild(t.getTemplate()),n.appendChild(e))}render(){const t=document.querySelector(".basket-place");t&&(t.innerHTML="",this.items.length?this.items.forEach((e=>{e.render(t)})):t.innerHTML="Нет товаров в корзине!")}};new class extends t{constructor(t){super(),a(this,"_bascketList",null),a(this,"_pageCounter",1),this._bascketList=t,this.fetchGoods().then((()=>{this.render()})),this.addShowMoreBtn()}addShowMoreBtn(){const t=document.querySelector(".btn-place"),e=new r("Показать больше",(()=>{this.fetchGoods().then((()=>{this.render()}))}));t&&t.appendChild(e.getTemplate())}hideShowMoreBtn(){document.querySelector(".btn-place").remove()}fetchGoods(){return fetch(`/database/database${this._pageCounter}.json`).then((t=>t.json())).then((t=>{this._pageCounter++,this.items.push(...t.data.map((t=>new o(t,this._bascketList))))})).catch((t=>{this.hideShowMoreBtn(),console.log(t)}))}render(){const t=document.querySelector(".goods-list");t&&(t.innerHTML="",this.items.forEach((e=>{e.render(t)})))}}(d),new class{constructor(){this.render()}registerPlace(){const t=document.querySelector(".activ"),e=document.createElement("div");e.classList.add("form-body"),e.innerHTML='\n\t\t\t<h3 class="regist-header">Регистрация</h3>\n\t\t\t<form action="">\n\t\t\t\t<label for= "name" >ФИО:</label>\n\t\t\t\t<input type="text" id="name" placeholder="Иванов Иван Иванович" pattern="^[а-яА-ЯёЁa-zA-Z- ]+$" required>\n\t\t\t\t<label for="phone">Номер телефона:</label>\n\t\t\t\t<input type="number" id="phone" placeholder="89990009900" pattern="/^+?(d{7,8})?[- .]?(?(?:d{2,3}))?[- .]?ddd[- .]?dd[- .]?dd$/" required>\n\t\t\t\t<label for="email">Email адресс:</label>\n\t\t\t\t<input type="email" id="email" placeholder="some@mail.com" required>\n\t\t\t\t<br>\n\t\t\t\t<input class= "btn" type="submit" value="Отправить">\n\t\t\t</form>\n\t\t';const n=document.createElement("button");n.classList.add("close-button"),n.innerHTML="&#215;",n.addEventListener("click",(()=>{t.classList.remove("activ"),e.remove(),document.body.style.overflow="scroll"})),e.appendChild(n),t&&(t.appendChild(e),document.body.style.overflow="hidden")}render(){const t=document.querySelector(".basket"),e=document.querySelector("body"),n=document.createElement("button"),r=document.createElement("div");r.classList.add("regist-form"),n.innerHTML="Регистрация",n.classList.add("btn"),n.addEventListener("click",(()=>{r.classList.toggle("activ"),this.registerPlace()})),t&&(t.appendChild(n),e.appendChild(r))}}})()})();