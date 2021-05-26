/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//contact page\n\nconst createAbout = () => {\n    const aboutContainer = document.createElement('div');\n    aboutContainer.id = 'about-container';\n\n    const name = document.createElement('div');\n    name.classList.add('name');\n    const titleName = document.createElement('h2');\n    titleName.innerText = '店舗情報';\n    const pName = document.createElement('p');\n    pName.innerHTML = `店舗名：シューアスバンクコーヒー <br>\n    英　字：South Bank Coffee.`;\n    name.append(titleName, pName);\n\n    const access = document.createElement('div');\n    access.classList.add('access');\n    const titleAccess = document.createElement('h2');\n    titleAccess.innerText = '所在地';\n    const pAccess = document.createElement('p');\n    pAccess.innerHTML = `住所：〒553-0004 大阪府大阪市福島区３丁目３−番１７号 <br>\n    1-10-28 Nishishinsaibashi Chuo Ward, Osaka <br>\n    OPEN：  月－金　9:00 〜 16:00 <br>\n    CLOSED：  土、日`;\n    access.append(titleAccess, pAccess);\n\n    const story = document.createElement('div');\n    story.classList.add('story');\n    const titleStory = document.createElement('h2');\n    titleStory.innerText = 'ストーリー';\n    const pStory = document.createElement('p');\n    pStory.innerHTML = `上いぜ味備たど確法ヱルラ際松づ港期濃シ補欲うしそレ月陸ト長百ほりれ時沖断せ応中ぞ北事ノスキ台女イハ並興ぎげでそ断乗イド。9兵のでも合楡そひ報歳オ上賛カヱヨル意格球ノホ大巨エリユル提転ちは好挑ラニヌヒ成共にンけや投庭けリしド浦得手ょル。新仁82転者庁ぱぐそ職前キソクウ稿15訃唐8分ワ碁況むめ共方なげせお話護ノイチ業方ヌシツヱ的読レそ獲1齢ネ育経得金亡ルえ。<br> \n    <br>\n    従広ス最9景響くづク柱阪54嬌ちばひ計知ぱ聞足マヨロ発中力じぴを区聞ッつよ稿人アロ息費ぞ展躍史ラぴだ。日テトオフ優楽遺オ代品いご性2待る利北ワ折高ヘオト経東レ嘘85賞ょぽ惚見スノタヤ湾害改ゆづひろ百掲ユム財誌ドげ通勢い誠常レイなせ。活ムモチ準話ユワヌカ勝属ロウヤ業説急暮だほっ有4会げの細木アリケ読官フアコ投国ぴれ挙車こなけぽ言府ヘア火券で廣概骨儀とくぱ。<br> \n    <br>\n    職ク囲点オ研蔵さ仏故えフゅに供能9特べしらぞ公替反ヨツホエ分公み回演んイぽ姿表マフシ訓緩部ー尽白ゅぽラう容郡信モロツヘ煙容ゃぐッ。2練善ぱふ気供が撃92毎辺ミハ振勉メカ制98勢お情読リづ書過ぽめ女徴極メヤマ聞毎ルキ携明ラシチ疑一わフー都乱レホワヌ松会ばなじ贈雪旅ひ。<br> `;\n    story.append(titleStory, pStory);\n\n    aboutContainer.append(name, access, story);\n\n    return aboutContainer;\n}\n\nconst loadAbout = () => {\n    const main = document.querySelector('.main');\n    const aboutContentEl = createAbout();\n\n    main.appendChild(aboutContentEl);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//main-image\nconst createHomeImage = () => {\n    const homeImgContainer = document.createElement('div');\n    homeImgContainer.classList.add('home-img-container');\n\n    const img = document.createElement(\"img\");\n    img.src = 'img/home-img.jpg';\n    img.alt = 'Coffee';\n    img.classList.add('home-main-img');\n    \n    homeImgContainer.appendChild(img);\n\n    return homeImgContainer;\n}\n//contact\nconst createHomeContact = () => {\n    const contact = document.createElement('div');\n    contact.innerHTML = `「電話番号」<br> 080-0000-0000 `;\n    contact.classList.add('home-contact');\n\n    return contact;\n}\n//blog content\nconst createBlogContent = () => {\n    const blogContainer = document.createElement('div');\n    blogContainer.id = 'blog-container';\n\n    const blogContent = [\n        {\n            img: 'img/blog-1.jpg',\n            date: '2021年05月25日',\n            title: 'ロノ日等ろで選広',\n            description: '宿じ州万立ざー済務ロノ日等ろで選広マヨ相値え線表壊チワイ牲三らゆ気負ヱ転83娘出スワツメ志52己我洗祝きッが。'\n        },\n        {\n            img: 'img/blog-2.jpg',\n            date: '2021年04月12日',\n            title: 'ミトケワ民',\n            description: '回ケス塞竹ユロミ年棄こやぶお日健びもリ様34志案べけずい。'\n        },\n        {\n            img: 'img/blog-3.jpg',\n            date: '2021年03月03日',\n            title: '受レリぐこ響6紙セナ',\n            description: '教カキ子3提65読シヲ耳京つやだず季難ルリ残観店。'\n        },\n        {\n            img: 'img/blog-4.jpg',\n            date: '2021年02月14日',\n            title: '行ソロカ速児原',\n            description: '上ユト住分よ族評ぽう刊50百シ最束情ロ題年だ談近月イ味段後ヲヒ上予体競シヒ。'\n        }\n    ]; \n\n    blogContent.forEach(post => {\n        const postCard = document.createElement('div');\n        postCard.classList.add('blog-post');\n\n        const img = document.createElement('img');\n        img.src = post.img;\n\n        const legend = document.createElement('span');\n        legend.innerText = post.date;\n\n        const title = document.createElement('h2');\n        title.innerText = post.title;\n\n        const description = document.createElement('p');\n        description.innerText = post.description;\n\n        postCard.append(img, legend, title, description);\n        blogContainer.appendChild(postCard);\n    });\n\n\n    return blogContainer;\n}\n\nconst loadHome = () => {\n    const main = document.querySelector('.main');\n    const homeImgEl = createHomeImage();\n    const homeContactEl = createHomeContact();\n    const blogContentEl = createBlogContent();\n\n    main.append(homeImgEl, homeContactEl, blogContentEl);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome); \n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _websiteCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websiteCore */ \"./src/websiteCore.js\");\n\n\n(0,_websiteCore__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//menu page\nconst createMenuContent = () => {\n    const menuContainer = document.createElement('div');\n    menuContainer.id = 'menu-container';\n\n    const coffeeContent = [\n        {\n            img: 'img/coffee.jpg',\n            price: '400円',\n            title: 'ドリップコーヒー (HOT)',\n        },\n        {\n            img: 'img/coffee.jpg',\n            price: '450円',\n            title: 'ドリップコーヒー (ICE)',\n        },\n        {\n            img: 'img/coffee.jpg',\n            price: '500円',\n            title: 'カフェ・オレ (HOT/ICE)',\n        },\n        {\n            img: 'img/coffee.jpg',\n            price: '300円',\n            title: 'エスプレッソ (1shot)',\n        },\n        {\n            img: 'img/coffee.jpg',\n            price: '550円',\n            title: 'カプチーノ (HOT)',\n        },\n        {\n            img: 'img/coffee.jpg',\n            price: '550円',\n            title: 'カフェラテ (HOT/ICE)',\n        },\n        {\n            img: 'img/coffee.jpg',\n            price: '550円',\n            title: 'キャラメルラテ (HOT/ICE)',\n        },\n        {\n            img: 'img/coffee.jpg',\n            price: '650円',\n            title: 'カフェモカ (HOT/ICE)',\n        },\n        {\n            img: '',\n            price: '',\n            title: '',\n        }\n    ]; \n    const coffee = document.createElement('div');\n    coffee.classList.add('category');\n    const coffeeName = document.createElement('h2');\n    coffeeName.innerText = 'Coffee';\n    const coffeeContainer = document.createElement('div');\n    coffeeContainer.classList.add('category-container');\n    coffee.append(coffeeName, coffeeContainer);\n    coffeeContent.forEach(item => {\n        const itemCard = document.createElement('div');\n        itemCard.classList.add('menu-item');\n\n        const img = document.createElement('img');\n        img.src = item.img;\n\n        const price = document.createElement('span');\n        price.innerText = item.price;\n\n        const title = document.createElement('h2');\n        title.innerText = item.title;\n\n        itemCard.append(img, title, price);\n        coffeeContainer.appendChild(itemCard);\n    });\n\n    const teaContent = [\n        {\n            img: 'img/matcha.jpg',\n            price: '200円',\n            title: 'コーヒー',\n        },\n        {\n            img: 'img/matcha.jpg',\n            price: '100円',\n            title: 'コーヒー',\n        },\n        {\n            img: 'img/matcha.jpg',\n            price: '300円',\n            title: 'コーヒー',\n        },\n        {\n            img: 'img/matcha.jpg',\n            price: '400円',\n            title: 'コーヒー',\n        },\n        {\n            img: 'img/matcha.jpg',\n            price: '400円',\n            title: 'コーヒー',\n        },\n        {\n            img: '',\n            price: '',\n            title: '',\n        }\n    ]; \n    const tea = document.createElement('div');\n    tea.classList.add('category');\n    const teaName = document.createElement('h2');\n    teaName.innerText = 'Tea';\n    const teaContainer = document.createElement('div');\n    teaContainer.classList.add('category-container');\n    tea.append(teaName, teaContainer);\n    teaContent.forEach(item => {\n        const itemCard = document.createElement('div');\n        itemCard.classList.add('menu-item');\n\n        const img = document.createElement('img');\n        img.src = item.img;\n\n        const price = document.createElement('span');\n        price.innerText = item.price;\n\n        const title = document.createElement('h2');\n        title.innerText = item.title;\n\n        itemCard.append(img, title, price);\n        teaContainer.appendChild(itemCard);\n    });\n\n    const softDrinkContent = [\n        {\n            img: 'img/juice.jpg',\n            price: '400円',\n            title: 'ジュース',\n        },\n        {\n            img: 'img/juice.jpg',\n            price: '100円',\n            title: 'コーラ',\n        },\n        {\n            img: 'img/juice.jpg',\n            price: '300円',\n            title: 'コーラ',\n        },\n        {\n            img: 'img/juice.jpg',\n            price: '400円',\n            title: 'コーラ',\n        },\n        {\n            img: 'img/juice.jpg',\n            price: '300円',\n            title: 'コーラ',\n        },\n        {\n            img: 'img/juice.jpg',\n            price: '400円',\n            title: 'コーラ',\n        }\n    ]; \n    const softDrink = document.createElement('div');\n    softDrink.classList.add('category');\n    const softDrinkName = document.createElement('h2');\n    softDrinkName.innerText = 'Soft Drink';\n    const softDrinkContainer = document.createElement('div');\n    softDrinkContainer.classList.add('category-container');\n    softDrink.append(softDrinkName, softDrinkContainer);\n    softDrinkContent.forEach(item => {\n        const itemCard = document.createElement('div');\n        itemCard.classList.add('menu-item');\n\n        const img = document.createElement('img');\n        img.src = item.img;\n\n        const price = document.createElement('span');\n        price.innerText = item.price;\n\n        const title = document.createElement('h2');\n        title.innerText = item.title;\n\n        itemCard.append(img, title, price);\n        softDrinkContainer.appendChild(itemCard);\n    });\n\n    const sweetContent = [\n        {\n            img: 'img/sweet.jpg',\n            price: '200円',\n            title: 'コーヒー',\n        },\n        {\n            img: 'img/sweet.jpg',\n            price: '100円',\n            title: 'コーヒー',\n        },\n        {\n            img: 'img/sweet.jpg',\n            price: '300円',\n            title: 'コーヒー',\n        },\n        {\n            img: 'img/sweet.jpg',\n            price: '400円',\n            title: 'コーヒー',\n        },\n        {\n            img: 'img/sweet.jpg',\n            price: '400円',\n            title: 'コーヒー',\n        },\n        {\n            img: '',\n            price: '',\n            title: '',\n        }\n    ]; \n    const sweet = document.createElement('div');\n    sweet.classList.add('category');\n    const sweetName = document.createElement('h2');\n    sweetName.innerText = 'Sweet';\n    const sweetContainer = document.createElement('div');\n    sweetContainer.classList.add('category-container');\n    sweet.append(sweetName, sweetContainer);\n    sweetContent.forEach(item => {\n        const itemCard = document.createElement('div');\n        itemCard.classList.add('menu-item');\n\n        const img = document.createElement('img');\n        img.src = item.img;\n\n        const price = document.createElement('span');\n        price.innerText = item.price;\n\n        const title = document.createElement('h2');\n        title.innerText = item.title;\n\n        itemCard.append(img, title, price);\n        sweetContainer.appendChild(itemCard);\n    });\n\n    menuContainer.append(coffee, tea, softDrink, sweet);\n\n    return menuContainer;\n}\n\nconst loadMenu = () => {\n    const main = document.querySelector('.main');\n    const menuContentEl = createMenuContent();\n\n    main.appendChild(menuContentEl);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu); \n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/websiteCore.js":
/*!****************************!*\
  !*** ./src/websiteCore.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n//header\nconst createHeader = () => {\n    const header = document.createElement('div');\n    header.innerText = 'South Bank Coffee.';\n    const slogan = document.createElement('p');\n    slogan.innerHTML = 'Osaka, Japan. Fresh to order, for your coffee break.';\n    header.appendChild(slogan);\n    header.classList.add('header');\n\n    return header;\n}\n\n//nav bar\nconst createNavBar = () => {\n    const navBar = document.createElement('div');\n    // navBar.classList.add('nav-bar');\n    navBar.id = 'nav-bar';\n\n    const navBarContent = ['Home', 'About', 'Menu'];\n    navBarContent.forEach(item => {\n        let navBarItem = document.createElement('div');\n        navBarItem.classList.add('nav-bar-item');\n        navBarItem.setAttribute('data-tab', item);\n        navBarItem.innerText = item;\n        if (item == navBarContent[0]) {\n            navBarItem.classList.add('active');\n        }\n        navBar.appendChild(navBarItem);\n    });\n\n    // const icon = document.createElement('div');\n    // icon.id = 'icon';\n    // icon.setAttribute('href', `javascript:void(0);`);\n    // icon.innerHTML = `下`;\n    // icon.classList.add('icon');\n    // icon.addEventListener('click', () => {\n        \n    //     if (navBar.className === \"nav-bar\") {\n    //         navBar.className += \" responsive\";\n    //     } else {\n    //         navBar.className = \"nav-bar\";\n    //     }\n    // });\n    // navBar.appendChild(icon);\n\n    return navBar;\n}\n\n//nav bar items event\nconst clickOnNavItems = () => {\n    const navItems = document.querySelectorAll('.nav-bar-item');\n    navItems.forEach(item => {\n        item.addEventListener('click', handlePage);\n    });\n}\nconst handlePage = (event) => {\n    if (event.target.classList.contains('active')) {\n        return;\n    }\n    const main = document.querySelector('.main');\n    main.innerHTML = '';\n    switch(event.target.dataset.tab) {\n        case 'Home':\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n            break;\n        case 'About':\n            (0,_about_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n            break;\n        case 'Menu':\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n            break;\n    }\n    let activeNavItem = document.querySelector('.active');\n    activeNavItem.classList.remove('active');\n\n    event.target.classList.add('active');\n}\n\n//mainContent\nconst createMainContent = () => {\n    const main = document.createElement('div');\n    main.classList.add('main');\n\n    return main;\n}\n\n//footer\nconst createFooter = () => {\n    const footer = document.createElement('footer');\n    footer.id = 'footer';\n\n    const footerText = document.createElement('div');\n    footerText.classList.add('footer-inner');\n    footerText.innerText = '© South Bank Coffee.';\n\n    footer.appendChild(footerText);\n\n    return footer;\n}\n\n//scroll top button\nconst createScrollTopBtn = () => {\n    const btn = document.createElement('button');\n    btn.setAttribute('title', \"Go to top\");\n    btn.innerText = '上';\n    btn.classList.add('scroll-button');\n    btn.addEventListener('click', () => {\n        document.body.scrollTop = 0; \n        document.documentElement.scrollTop = 0;\n    });\n    window.onscroll = function() {\n        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\n        btn.style.display = \"block\";\n    } else {\n        btn.style.display = \"none\";\n    }};\n\n    return btn;\n}\n\n\n//function initializeWebsite, append all elements to content id html\nconst initializeWebsite = () => {\n    const content = document.getElementById('content');\n    const headerEl = createHeader();\n    const navBarEl = createNavBar();\n    const mainEl = createMainContent();\n    const footerEl = createFooter();\n    const btnEl = createScrollTopBtn();\n    content.append(headerEl, navBarEl, mainEl, footerEl);\n    content.appendChild(btnEl);\n    clickOnNavItems();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite); \n\n//# sourceURL=webpack://restaurant-page/./src/websiteCore.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;