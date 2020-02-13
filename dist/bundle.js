/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_items_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/items/items */ \"./src/modules/items/items.js\");\n/* harmony import */ var _modules_clients_clients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/clients/clients */ \"./src/modules/clients/clients.js\");\n/* harmony import */ var _modules_shop_shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/shop/shop */ \"./src/modules/shop/shop.js\");\n\r\n\r\n//import Sales from './modules/sales/sales';\r\n\r\n\r\nlet myShop = new _modules_shop_shop__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n\r\nlet item01 = new _modules_items_items__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1,'boots','choses',100),\r\nitem02 = new _modules_items_items__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2,'boots','choses',100),\r\nitem03 = new _modules_items_items__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3,'coat','clothes',200),\r\nitem04 = new _modules_items_items__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4,'coat','clothes',300),\r\nitem05 = new _modules_items_items__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5,'car','cars',2000),\r\nitem06 = new _modules_items_items__WEBPACK_IMPORTED_MODULE_0__[\"default\"](6,'fish','fishes',10),\r\nitem07 = new _modules_items_items__WEBPACK_IMPORTED_MODULE_0__[\"default\"](7,'meet','meets',10),\r\nitem08 = new _modules_items_items__WEBPACK_IMPORTED_MODULE_0__[\"default\"](8,'meet','meets',10),\r\nitem09 = new _modules_items_items__WEBPACK_IMPORTED_MODULE_0__[\"default\"](9,'meet','meets',15),\r\nitem10 = new _modules_items_items__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10,'meet','meets',15),\r\nitem11 = new _modules_items_items__WEBPACK_IMPORTED_MODULE_0__[\"default\"](11,'meet','meets',15);\r\n\r\nmyShop.addItems(item01);\r\nmyShop.addItems(item02);\r\nmyShop.addItems(item03);\r\nmyShop.addItems(item04);\r\nmyShop.addItems(item05);\r\nmyShop.addItems(item06);\r\nmyShop.addItems(item07);\r\nmyShop.addItems(item08);\r\nmyShop.addItems(item09);\r\nmyShop.addItems(item10);\r\nmyShop.addItems(item11);\r\n\r\nlet client01 = new _modules_clients_clients__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1,'Jhon','Smith'),\r\nclient02 = new _modules_clients_clients__WEBPACK_IMPORTED_MODULE_1__[\"default\"](2,'Mat','Mating'),\r\nclient03 = new _modules_clients_clients__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3,'Ivan','Ivanov');\r\n\r\nmyShop.addClients(client01);\r\nmyShop.addClients(client02);\r\nmyShop.addClients(client03);\r\nconsole.log(myShop); // первоначальный магазин\r\n\r\nmyShop.sales(client01,'meet',3);\r\nmyShop.sales(client01,'car',2);\r\nconsole.log(myShop); //просле продаж\r\n\r\nconsole.log(myShop.profit()); //наша прибыль\r\nconsole.log(myShop.realSklad()); //наши остатки на складе\r\nconsole.log('Остатки типов товаров на складе:',myShop.itemsSklad());\r\nconsole.log('Продано типов товаров:',myShop.itemsSaled());\r\nconsole.log('Куплено товаров клиентом:',client01.itemClient());\r\nconsole.log(myShop.itemsClient());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/clients/clients.js":
/*!****************************************!*\
  !*** ./src/modules/clients/clients.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Client; });\nclass Client {\r\n  constructor(id,firstname,lastname,summa = 0) { \r\n    this.id = id;\r\n    this.firstname = firstname;\r\n    this.lastname = lastname;\r\n    this.summa = summa;\r\n    this.Items = [];\r\n  }\r\n\r\n  addItems(item) {\r\n    this.Items.push(item);\r\n  }\r\n\r\n  itemClient() {\r\n    let result = {};\r\n    this.Items.forEach(function(p) {result[p.type] = (result[p.type] || 0) + 1;});\r\n  return result;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/modules/clients/clients.js?");

/***/ }),

/***/ "./src/modules/items/items.js":
/*!************************************!*\
  !*** ./src/modules/items/items.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Item; });\nclass Item {\r\n  constructor(id,name,type,price) { //конструктор товара\r\n    this.id = id;\r\n    this.name = name;\r\n    this.type = type;\r\n    this.price = price;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/modules/items/items.js?");

/***/ }),

/***/ "./src/modules/sales/sales.js":
/*!************************************!*\
  !*** ./src/modules/sales/sales.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sales; });\nclass Sales {\r\n  constructor(nameClient,nameItem,typeItem,kolItem,sumItem, time = new Date()) { //конструктор истории продаж\r\n    this.nameClient = nameClient;\r\n    this.nameItem = nameItem;\r\n    this.typeItem = typeItem;\r\n    this.kolItem = kolItem;\r\n    this.sumItem = sumItem;\r\n    this.time = time;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/modules/sales/sales.js?");

/***/ }),

/***/ "./src/modules/shop/shop.js":
/*!**********************************!*\
  !*** ./src/modules/shop/shop.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Shop; });\n/* harmony import */ var _sales_sales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sales/sales */ \"./src/modules/sales/sales.js\");\n\r\n\r\nclass Shop { \r\n  constructor () {\r\n    this.Items = [];\r\n    this.Clients = [];\r\n    this.Saless = [];\r\n  }\r\n  \r\n  addItems(item) {\r\n    this.Items.push(item);\r\n  }\r\n\r\n  delItems(idItem) {\r\n    this.Items.forEach((item, i) => {\r\n      if (item.id == idItem) this.Items.splice(i,1);\r\n    })\r\n  }\r\n\r\n  addClients(item) {\r\n    this.Clients.push(item);\r\n  }\r\n\r\n  delClients(idClient) {\r\n    this.Clients.forEach((item, i) => {\r\n      if (item.id == idClient) this.Clients.splice(i,1);\r\n    })\r\n  }\r\n\r\n  sales(Client,nameItem,kol) {\r\n    let forSales = this.Items.filter((item) => {\r\n      return item.name == nameItem;\r\n    });\r\n\r\n    if (!forSales) return 'Товара '+idItem+' нет на складе';\r\n\r\n    if (kol > forSales.length) {\r\n      kol = forSales.length;\r\n      console.log('Запрос '+nameItem+' выше остатков. Выдаём сколько есть');\r\n    }\r\n\r\n    let infoItem = forSales[0];\r\n    forSales.splice(kol); //отсекаем конечные, которые поступили позже и продаём первые, принцив FIFO\r\n    //console.log(forSales);\r\n\r\n    let summa = 0\r\n    forSales.forEach((item,i) => {\r\n      summa += item.price; //потому что у товаров с одним наименованием может быть разная цена\r\n      Client.addItems(forSales[i]);\r\n      this.delItems(item.id);\r\n    });\r\n    this.Saless.push(new _sales_sales__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Client.firstname+' '+Client.lastname,infoItem.name,infoItem.type,kol,summa));\r\n    Client.summa += summa;\r\n  }\r\n\r\n    profit() {\r\n      let count = 0;\r\n      let summa = 0;\r\n      this.Saless.forEach((item) => {\r\n          count += item.kolItem;\r\n          summa += item.sumItem;\r\n      })\r\n    return 'Количество проданых товаров - '+count+' шт. на общую сумму - '+summa;\r\n    }\r\n\r\n    realSklad() {\r\n    return 'Количество товаров на складе - '+this.Items.length+' шт.';\r\n    }\r\n\r\n    itemsSklad() {\r\n      let result = {};\r\n      this.Items.forEach(function(p) {result[p.type] = (result[p.type] || 0) + 1;});\r\n    return result;\r\n    }\r\n\r\n    itemsSaled() {\r\n      let result = {};\r\n      this.Saless.forEach(function(p) {result[p.typeItem] = (result[p.typeItem] || 0) + p.sumItem;});\r\n    return result;\r\n    }\r\n\r\n    itemsClient(){\r\n      let result = {};\r\n      this.Clients.forEach(p => result[p.firstname+' '+p.lastname] = p.Items.length);\r\n    return result;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modules/shop/shop.js?");

/***/ })

/******/ });