(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/configs.ts":
/*!************************!*\
  !*** ./src/configs.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description default configurations in NetV
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.label = exports.link = exports.node = exports.lazyUpdateThreshold = exports.linkLimit = exports.nodeLimit = exports.enablePanZoom = exports.backgroundColor = exports.height = exports.width = void 0;
exports.width = 800;
exports.height = 600;
exports.backgroundColor = { r: 1, g: 1, b: 1, a: 1 };
exports.enablePanZoom = true;
exports.nodeLimit = 100;
exports.linkLimit = 1000;
exports.lazyUpdateThreshold = 10;
exports.node = {
    r: 5,
    fill: { r: 0.2, g: 0.6, b: 0.2, a: 0.8 },
    // strokeColor: { r: 0.6, g: 0.6, b: 0.6, a: 0.5 },
    strokeColor: { r: 0.9, g: 0.9, b: 0.9, a: 0.6 },
    strokeWidth: 2,
    showLabel: false,
    // textOffset: { x: 8, y: 0 }, put in label config instead of each node
    clickCallback: (node) => { },
    hoverCallback: (node) => { }
};
exports.link = {
    // strokeColor: { r: 0.5, g: 0.5, b: 0.5, a: 0.2 },
    strokeColor: { r: 0.4, g: 0.6, b: 0.8, a: 0.5 },
    strokeWidth: 2,
    clickCallback: (link) => { },
    hoverCallback: (node) => { }
};
exports.label = {
    offset: { x: 8, y: 0 },
    fontSize: 18,
    strokeWidth: 0.5
};


/***/ }),

/***/ "./src/dataset/index.ts":
/*!******************************!*\
  !*** ./src/dataset/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description build-in dataset in NetV
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.patents = exports.miserables = void 0;
const miserables_1 = __webpack_require__(/*! ./miserables */ "./src/dataset/miserables.ts");
Object.defineProperty(exports, "miserables", { enumerable: true, get: function () { return miserables_1.miserables; } });
const patents_1 = __webpack_require__(/*! ./patents */ "./src/dataset/patents.ts");
Object.defineProperty(exports, "patents", { enumerable: true, get: function () { return patents_1.patents; } });


/***/ }),

/***/ "./src/dataset/miserables.ts":
/*!***********************************!*\
  !*** ./src/dataset/miserables.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Les Miserables relation dataset.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.miserables = void 0;
/**
 * @description generated by d3-force: https://observablehq.com/@d3/force-directed-graph
 */
exports.miserables = {
    nodes: [
        { id: 'Myriel', x: 293.47145117553623, y: 356.4335718104138, group: 1 },
        { id: 'Napoleon', x: 253.9025088618656, y: 374.3058116536445, group: 1 },
        { id: 'Mlle.Baptistine', x: 350.92724989918077, y: 332.3325539999943, group: 1 },
        { id: 'Mme.Magloire', x: 356.0916156539997, y: 352.7885799116015, group: 1 },
        { id: 'CountessdeLo', x: 254.29291520989335, y: 357.3175734076417, group: 1 },
        { id: 'Geborand', x: 257.857293626201, y: 335.85427628358957, group: 1 },
        { id: 'Champtercier', x: 259.6255563825028, y: 383.83027469832814, group: 1 },
        { id: 'Cravatte', x: 249.8596459829139, y: 346.18225516832496, group: 1 },
        { id: 'Count', x: 269.96793951350924, y: 390.6800842321571, group: 1 },
        { id: 'OldMan', x: 246.73952311277665, y: 364.59357494432066, group: 1 },
        { id: 'Labarre', x: 443.516583315026, y: 358.29204789477683, group: 2 },
        { id: 'Valjean', x: 442.16894757641506, y: 320.8315532160861, group: 2 },
        { id: 'Marguerite', x: 413.3816851007931, y: 240.04091559296504, group: 3 },
        { id: 'Mme.deR', x: 427.2361715950254, y: 355.10211589979514, group: 2 },
        { id: 'Isabeau', x: 405.85082858191834, y: 330.5201512205085, group: 2 },
        { id: 'Gervais', x: 405.2113121906881, y: 316.29125359396136, group: 2 },
        { id: 'Tholomyes', x: 422.4125307781646, y: 126.07649449775806, group: 3 },
        { id: 'Listolier', x: 363.1729422677979, y: 102.77890368289785, group: 3 },
        { id: 'Fameuil', x: 381.7947103094028, y: 66.58133724043948, group: 3 },
        { id: 'Blacheville', x: 383.1792676740261, y: 94.80320315500154, group: 3 },
        { id: 'Favourite', x: 361.893731644285, y: 70.38696381384074, group: 3 },
        { id: 'Dahlia', x: 398.75350988351653, y: 77.09700751527119, group: 3 },
        { id: 'Zephine', x: 349.0495914601376, y: 88.80888613372713, group: 3 },
        { id: 'Fantine', x: 398.01411438702473, y: 173.76444196945977, group: 3 },
        { id: 'Mme.Thenardier', x: 471.2516533386725, y: 262.218701666645, group: 4 },
        { id: 'Thenardier', x: 504.81672085603066, y: 283.04638900481723, group: 4 },
        { id: 'Cosette', x: 472.3346941487192, y: 228.68779443303478, group: 5 },
        { id: 'Javert', x: 460.05257689332836, y: 295.5578154268904, group: 4 },
        { id: 'Fauchelevent', x: 385.43935764589986, y: 302.12824588622857, group: 0 },
        { id: 'Bamatabois', x: 393.19041590383597, y: 345.4971667690817, group: 2 },
        { id: 'Perpetue', x: 367.53833132893976, y: 194.5556482306271, group: 3 },
        { id: 'Simplice', x: 401.3622252354655, y: 242.9982847994576, group: 2 },
        { id: 'Scaufflaire', x: 414.67072799627573, y: 344.0547720945736, group: 2 },
        { id: 'Woman1', x: 421.4167414392426, y: 293.31120219129394, group: 2 },
        { id: 'Judge', x: 420.04392007841335, y: 401.03233609152744, group: 2 },
        { id: 'Champmathieu', x: 377.79524254621833, y: 383.8105787115102, group: 2 },
        { id: 'Brevet', x: 401.9529844469992, y: 388.8684782987411, group: 2 },
        { id: 'Chenildieu', x: 400.6685707133538, y: 413.49417790523466, group: 2 },
        { id: 'Cochepaille', x: 379.04969704462354, y: 404.26974059233163, group: 2 },
        { id: 'Pontmercy', x: 553.1137401750198, y: 244.92830027360765, group: 4 },
        { id: 'Boulatruelle', x: 490.1571086086932, y: 249.2101923835803, group: 6 },
        { id: 'Eponine', x: 549.7584267571892, y: 302.9031065228431, group: 4 },
        { id: 'Anzelma', x: 515.3807399395134, y: 257.0179688983911, group: 4 },
        { id: 'Woman2', x: 433.6608665340514, y: 265.8174673886634, group: 5 },
        { id: 'MotherInnocent', x: 403.02536257416523, y: 289.03312200121326, group: 0 },
        { id: 'Gribier', x: 341.80973227456775, y: 294.212396148023, group: 0 },
        { id: 'Jondrette', x: 565.1965303422186, y: 470.65950349375856, group: 7 },
        { id: 'Mme.Burgon', x: 569.1896269242101, y: 426.66185053824563, group: 7 },
        { id: 'Gavroche', x: 572.1619393936826, y: 364.22606766497563, group: 8 },
        { id: 'Gillenormand', x: 524.5914505208005, y: 257.4012214828336, group: 5 },
        { id: 'Magnon', x: 492.548393202341, y: 222.5966351328885, group: 5 },
        { id: 'Mlle.Gillenormand', x: 514.3692655023644, y: 229.09670062389281, group: 5 },
        { id: 'Mme.Pontmercy', x: 549.3250508171474, y: 196.14056833084936, group: 5 },
        { id: 'Mlle.Vaubois', x: 517.8593572394071, y: 186.2488309111565, group: 5 },
        { id: 'Lt.Gillenormand', x: 543.274961139455, y: 223.68184285180976, group: 5 },
        { id: 'Marius', x: 574.2576699056139, y: 283.85211708310334, group: 8 },
        { id: 'BaronessT', x: 573.7140909650625, y: 245.59311909245818, group: 5 },
        { id: 'Mabeuf', x: 628.5432532486191, y: 314.22078408627164, group: 8 },
        { id: 'Enjolras', x: 588.2395498093626, y: 342.0594469923279, group: 8 },
        { id: 'Combeferre', x: 637.7370664614637, y: 351.69235762788395, group: 8 },
        { id: 'Prouvaire', x: 650.8833522869903, y: 386.83918103509916, group: 8 },
        { id: 'Feuilly', x: 626.8556606438109, y: 365.9084164593141, group: 8 },
        { id: 'Courfeyrac', x: 628.3448989975013, y: 336.7666454119022, group: 8 },
        { id: 'Bahorel', x: 656.7717772764985, y: 362.5885882509189, group: 8 },
        { id: 'Bossuet', x: 599.0185765743107, y: 363.8286723407053, group: 8 },
        { id: 'Joly', x: 656.6182923735408, y: 343.2375733559165, group: 8 },
        { id: 'Grantaire', x: 638.4375855314988, y: 402.4387250378995, group: 8 },
        { id: 'MotherPlutarch', x: 664.556723861883, y: 298.0336964526786, group: 9 },
        { id: 'Gueulemer', x: 508.16450525817805, y: 330.4502907444367, group: 4 },
        { id: 'Babet', x: 492.56005279882095, y: 325.9834092848427, group: 4 },
        { id: 'Claquesous', x: 510.93855506250077, y: 309.2869380697328, group: 4 },
        { id: 'Montparnasse', x: 502.7190894173557, y: 350.9275183133438, group: 4 },
        { id: 'Toussaint', x: 445.1254802056807, y: 266.46242665022004, group: 5 },
        { id: 'Child1', x: 588.0351552386961, y: 410.2195555961996, group: 10 },
        { id: 'Child2', x: 559.2777814782705, y: 408.3533184893569, group: 10 },
        { id: 'Brujon', x: 537.1787383904656, y: 337.86922775917947, group: 4 },
        { id: 'Mme.Hucheloup', x: 626.3775850466164, y: 384.35202066894516, group: 8 }
    ],
    links: [
        { source: 'Napoleon', target: 'Myriel', value: 1 },
        { source: 'Mlle.Baptistine', target: 'Myriel', value: 8 },
        { source: 'Mme.Magloire', target: 'Myriel', value: 10 },
        { source: 'Mme.Magloire', target: 'Mlle.Baptistine', value: 6 },
        { source: 'CountessdeLo', target: 'Myriel', value: 1 },
        { source: 'Geborand', target: 'Myriel', value: 1 },
        { source: 'Champtercier', target: 'Myriel', value: 1 },
        { source: 'Cravatte', target: 'Myriel', value: 1 },
        { source: 'Count', target: 'Myriel', value: 2 },
        { source: 'OldMan', target: 'Myriel', value: 1 },
        { source: 'Valjean', target: 'Labarre', value: 1 },
        { source: 'Valjean', target: 'Mme.Magloire', value: 3 },
        { source: 'Valjean', target: 'Mlle.Baptistine', value: 3 },
        { source: 'Valjean', target: 'Myriel', value: 5 },
        { source: 'Marguerite', target: 'Valjean', value: 1 },
        { source: 'Mme.deR', target: 'Valjean', value: 1 },
        { source: 'Isabeau', target: 'Valjean', value: 1 },
        { source: 'Gervais', target: 'Valjean', value: 1 },
        { source: 'Listolier', target: 'Tholomyes', value: 4 },
        { source: 'Fameuil', target: 'Tholomyes', value: 4 },
        { source: 'Fameuil', target: 'Listolier', value: 4 },
        { source: 'Blacheville', target: 'Tholomyes', value: 4 },
        { source: 'Blacheville', target: 'Listolier', value: 4 },
        { source: 'Blacheville', target: 'Fameuil', value: 4 },
        { source: 'Favourite', target: 'Tholomyes', value: 3 },
        { source: 'Favourite', target: 'Listolier', value: 3 },
        { source: 'Favourite', target: 'Fameuil', value: 3 },
        { source: 'Favourite', target: 'Blacheville', value: 4 },
        { source: 'Dahlia', target: 'Tholomyes', value: 3 },
        { source: 'Dahlia', target: 'Listolier', value: 3 },
        { source: 'Dahlia', target: 'Fameuil', value: 3 },
        { source: 'Dahlia', target: 'Blacheville', value: 3 },
        { source: 'Dahlia', target: 'Favourite', value: 5 },
        { source: 'Zephine', target: 'Tholomyes', value: 3 },
        { source: 'Zephine', target: 'Listolier', value: 3 },
        { source: 'Zephine', target: 'Fameuil', value: 3 },
        { source: 'Zephine', target: 'Blacheville', value: 3 },
        { source: 'Zephine', target: 'Favourite', value: 4 },
        { source: 'Zephine', target: 'Dahlia', value: 4 },
        { source: 'Fantine', target: 'Tholomyes', value: 3 },
        { source: 'Fantine', target: 'Listolier', value: 3 },
        { source: 'Fantine', target: 'Fameuil', value: 3 },
        { source: 'Fantine', target: 'Blacheville', value: 3 },
        { source: 'Fantine', target: 'Favourite', value: 4 },
        { source: 'Fantine', target: 'Dahlia', value: 4 },
        { source: 'Fantine', target: 'Zephine', value: 4 },
        { source: 'Fantine', target: 'Marguerite', value: 2 },
        { source: 'Fantine', target: 'Valjean', value: 9 },
        { source: 'Mme.Thenardier', target: 'Fantine', value: 2 },
        { source: 'Mme.Thenardier', target: 'Valjean', value: 7 },
        { source: 'Thenardier', target: 'Mme.Thenardier', value: 13 },
        { source: 'Thenardier', target: 'Fantine', value: 1 },
        { source: 'Thenardier', target: 'Valjean', value: 12 },
        { source: 'Cosette', target: 'Mme.Thenardier', value: 4 },
        { source: 'Cosette', target: 'Valjean', value: 31 },
        { source: 'Cosette', target: 'Tholomyes', value: 1 },
        { source: 'Cosette', target: 'Thenardier', value: 1 },
        { source: 'Javert', target: 'Valjean', value: 17 },
        { source: 'Javert', target: 'Fantine', value: 5 },
        { source: 'Javert', target: 'Thenardier', value: 5 },
        { source: 'Javert', target: 'Mme.Thenardier', value: 1 },
        { source: 'Javert', target: 'Cosette', value: 1 },
        { source: 'Fauchelevent', target: 'Valjean', value: 8 },
        { source: 'Fauchelevent', target: 'Javert', value: 1 },
        { source: 'Bamatabois', target: 'Fantine', value: 1 },
        { source: 'Bamatabois', target: 'Javert', value: 1 },
        { source: 'Bamatabois', target: 'Valjean', value: 2 },
        { source: 'Perpetue', target: 'Fantine', value: 1 },
        { source: 'Simplice', target: 'Perpetue', value: 2 },
        { source: 'Simplice', target: 'Valjean', value: 3 },
        { source: 'Simplice', target: 'Fantine', value: 2 },
        { source: 'Simplice', target: 'Javert', value: 1 },
        { source: 'Scaufflaire', target: 'Valjean', value: 1 },
        { source: 'Woman1', target: 'Valjean', value: 2 },
        { source: 'Woman1', target: 'Javert', value: 1 },
        { source: 'Judge', target: 'Valjean', value: 3 },
        { source: 'Judge', target: 'Bamatabois', value: 2 },
        { source: 'Champmathieu', target: 'Valjean', value: 3 },
        { source: 'Champmathieu', target: 'Judge', value: 3 },
        { source: 'Champmathieu', target: 'Bamatabois', value: 2 },
        { source: 'Brevet', target: 'Judge', value: 2 },
        { source: 'Brevet', target: 'Champmathieu', value: 2 },
        { source: 'Brevet', target: 'Valjean', value: 2 },
        { source: 'Brevet', target: 'Bamatabois', value: 1 },
        { source: 'Chenildieu', target: 'Judge', value: 2 },
        { source: 'Chenildieu', target: 'Champmathieu', value: 2 },
        { source: 'Chenildieu', target: 'Brevet', value: 2 },
        { source: 'Chenildieu', target: 'Valjean', value: 2 },
        { source: 'Chenildieu', target: 'Bamatabois', value: 1 },
        { source: 'Cochepaille', target: 'Judge', value: 2 },
        { source: 'Cochepaille', target: 'Champmathieu', value: 2 },
        { source: 'Cochepaille', target: 'Brevet', value: 2 },
        { source: 'Cochepaille', target: 'Chenildieu', value: 2 },
        { source: 'Cochepaille', target: 'Valjean', value: 2 },
        { source: 'Cochepaille', target: 'Bamatabois', value: 1 },
        { source: 'Pontmercy', target: 'Thenardier', value: 1 },
        { source: 'Boulatruelle', target: 'Thenardier', value: 1 },
        { source: 'Eponine', target: 'Mme.Thenardier', value: 2 },
        { source: 'Eponine', target: 'Thenardier', value: 3 },
        { source: 'Anzelma', target: 'Eponine', value: 2 },
        { source: 'Anzelma', target: 'Thenardier', value: 2 },
        { source: 'Anzelma', target: 'Mme.Thenardier', value: 1 },
        { source: 'Woman2', target: 'Valjean', value: 3 },
        { source: 'Woman2', target: 'Cosette', value: 1 },
        { source: 'Woman2', target: 'Javert', value: 1 },
        { source: 'MotherInnocent', target: 'Fauchelevent', value: 3 },
        { source: 'MotherInnocent', target: 'Valjean', value: 1 },
        { source: 'Gribier', target: 'Fauchelevent', value: 2 },
        { source: 'Mme.Burgon', target: 'Jondrette', value: 1 },
        { source: 'Gavroche', target: 'Mme.Burgon', value: 2 },
        { source: 'Gavroche', target: 'Thenardier', value: 1 },
        { source: 'Gavroche', target: 'Javert', value: 1 },
        { source: 'Gavroche', target: 'Valjean', value: 1 },
        { source: 'Gillenormand', target: 'Cosette', value: 3 },
        { source: 'Gillenormand', target: 'Valjean', value: 2 },
        { source: 'Magnon', target: 'Gillenormand', value: 1 },
        { source: 'Magnon', target: 'Mme.Thenardier', value: 1 },
        { source: 'Mlle.Gillenormand', target: 'Gillenormand', value: 9 },
        { source: 'Mlle.Gillenormand', target: 'Cosette', value: 2 },
        { source: 'Mlle.Gillenormand', target: 'Valjean', value: 2 },
        { source: 'Mme.Pontmercy', target: 'Mlle.Gillenormand', value: 1 },
        { source: 'Mme.Pontmercy', target: 'Pontmercy', value: 1 },
        { source: 'Mlle.Vaubois', target: 'Mlle.Gillenormand', value: 1 },
        { source: 'Lt.Gillenormand', target: 'Mlle.Gillenormand', value: 2 },
        { source: 'Lt.Gillenormand', target: 'Gillenormand', value: 1 },
        { source: 'Lt.Gillenormand', target: 'Cosette', value: 1 },
        { source: 'Marius', target: 'Mlle.Gillenormand', value: 6 },
        { source: 'Marius', target: 'Gillenormand', value: 12 },
        { source: 'Marius', target: 'Pontmercy', value: 1 },
        { source: 'Marius', target: 'Lt.Gillenormand', value: 1 },
        { source: 'Marius', target: 'Cosette', value: 21 },
        { source: 'Marius', target: 'Valjean', value: 19 },
        { source: 'Marius', target: 'Tholomyes', value: 1 },
        { source: 'Marius', target: 'Thenardier', value: 2 },
        { source: 'Marius', target: 'Eponine', value: 5 },
        { source: 'Marius', target: 'Gavroche', value: 4 },
        { source: 'BaronessT', target: 'Gillenormand', value: 1 },
        { source: 'BaronessT', target: 'Marius', value: 1 },
        { source: 'Mabeuf', target: 'Marius', value: 1 },
        { source: 'Mabeuf', target: 'Eponine', value: 1 },
        { source: 'Mabeuf', target: 'Gavroche', value: 1 },
        { source: 'Enjolras', target: 'Marius', value: 7 },
        { source: 'Enjolras', target: 'Gavroche', value: 7 },
        { source: 'Enjolras', target: 'Javert', value: 6 },
        { source: 'Enjolras', target: 'Mabeuf', value: 1 },
        { source: 'Enjolras', target: 'Valjean', value: 4 },
        { source: 'Combeferre', target: 'Enjolras', value: 15 },
        { source: 'Combeferre', target: 'Marius', value: 5 },
        { source: 'Combeferre', target: 'Gavroche', value: 6 },
        { source: 'Combeferre', target: 'Mabeuf', value: 2 },
        { source: 'Prouvaire', target: 'Gavroche', value: 1 },
        { source: 'Prouvaire', target: 'Enjolras', value: 4 },
        { source: 'Prouvaire', target: 'Combeferre', value: 2 },
        { source: 'Feuilly', target: 'Gavroche', value: 2 },
        { source: 'Feuilly', target: 'Enjolras', value: 6 },
        { source: 'Feuilly', target: 'Prouvaire', value: 2 },
        { source: 'Feuilly', target: 'Combeferre', value: 5 },
        { source: 'Feuilly', target: 'Mabeuf', value: 1 },
        { source: 'Feuilly', target: 'Marius', value: 1 },
        { source: 'Courfeyrac', target: 'Marius', value: 9 },
        { source: 'Courfeyrac', target: 'Enjolras', value: 17 },
        { source: 'Courfeyrac', target: 'Combeferre', value: 13 },
        { source: 'Courfeyrac', target: 'Gavroche', value: 7 },
        { source: 'Courfeyrac', target: 'Mabeuf', value: 2 },
        { source: 'Courfeyrac', target: 'Eponine', value: 1 },
        { source: 'Courfeyrac', target: 'Feuilly', value: 6 },
        { source: 'Courfeyrac', target: 'Prouvaire', value: 3 },
        { source: 'Bahorel', target: 'Combeferre', value: 5 },
        { source: 'Bahorel', target: 'Gavroche', value: 5 },
        { source: 'Bahorel', target: 'Courfeyrac', value: 6 },
        { source: 'Bahorel', target: 'Mabeuf', value: 2 },
        { source: 'Bahorel', target: 'Enjolras', value: 4 },
        { source: 'Bahorel', target: 'Feuilly', value: 3 },
        { source: 'Bahorel', target: 'Prouvaire', value: 2 },
        { source: 'Bahorel', target: 'Marius', value: 1 },
        { source: 'Bossuet', target: 'Marius', value: 5 },
        { source: 'Bossuet', target: 'Courfeyrac', value: 12 },
        { source: 'Bossuet', target: 'Gavroche', value: 5 },
        { source: 'Bossuet', target: 'Bahorel', value: 4 },
        { source: 'Bossuet', target: 'Enjolras', value: 10 },
        { source: 'Bossuet', target: 'Feuilly', value: 6 },
        { source: 'Bossuet', target: 'Prouvaire', value: 2 },
        { source: 'Bossuet', target: 'Combeferre', value: 9 },
        { source: 'Bossuet', target: 'Mabeuf', value: 1 },
        { source: 'Bossuet', target: 'Valjean', value: 1 },
        { source: 'Joly', target: 'Bahorel', value: 5 },
        { source: 'Joly', target: 'Bossuet', value: 7 },
        { source: 'Joly', target: 'Gavroche', value: 3 },
        { source: 'Joly', target: 'Courfeyrac', value: 5 },
        { source: 'Joly', target: 'Enjolras', value: 5 },
        { source: 'Joly', target: 'Feuilly', value: 5 },
        { source: 'Joly', target: 'Prouvaire', value: 2 },
        { source: 'Joly', target: 'Combeferre', value: 5 },
        { source: 'Joly', target: 'Mabeuf', value: 1 },
        { source: 'Joly', target: 'Marius', value: 2 },
        { source: 'Grantaire', target: 'Bossuet', value: 3 },
        { source: 'Grantaire', target: 'Enjolras', value: 3 },
        { source: 'Grantaire', target: 'Combeferre', value: 1 },
        { source: 'Grantaire', target: 'Courfeyrac', value: 2 },
        { source: 'Grantaire', target: 'Joly', value: 2 },
        { source: 'Grantaire', target: 'Gavroche', value: 1 },
        { source: 'Grantaire', target: 'Bahorel', value: 1 },
        { source: 'Grantaire', target: 'Feuilly', value: 1 },
        { source: 'Grantaire', target: 'Prouvaire', value: 1 },
        { source: 'MotherPlutarch', target: 'Mabeuf', value: 3 },
        { source: 'Gueulemer', target: 'Thenardier', value: 5 },
        { source: 'Gueulemer', target: 'Valjean', value: 1 },
        { source: 'Gueulemer', target: 'Mme.Thenardier', value: 1 },
        { source: 'Gueulemer', target: 'Javert', value: 1 },
        { source: 'Gueulemer', target: 'Gavroche', value: 1 },
        { source: 'Gueulemer', target: 'Eponine', value: 1 },
        { source: 'Babet', target: 'Thenardier', value: 6 },
        { source: 'Babet', target: 'Gueulemer', value: 6 },
        { source: 'Babet', target: 'Valjean', value: 1 },
        { source: 'Babet', target: 'Mme.Thenardier', value: 1 },
        { source: 'Babet', target: 'Javert', value: 2 },
        { source: 'Babet', target: 'Gavroche', value: 1 },
        { source: 'Babet', target: 'Eponine', value: 1 },
        { source: 'Claquesous', target: 'Thenardier', value: 4 },
        { source: 'Claquesous', target: 'Babet', value: 4 },
        { source: 'Claquesous', target: 'Gueulemer', value: 4 },
        { source: 'Claquesous', target: 'Valjean', value: 1 },
        { source: 'Claquesous', target: 'Mme.Thenardier', value: 1 },
        { source: 'Claquesous', target: 'Javert', value: 1 },
        { source: 'Claquesous', target: 'Eponine', value: 1 },
        { source: 'Claquesous', target: 'Enjolras', value: 1 },
        { source: 'Montparnasse', target: 'Javert', value: 1 },
        { source: 'Montparnasse', target: 'Babet', value: 2 },
        { source: 'Montparnasse', target: 'Gueulemer', value: 2 },
        { source: 'Montparnasse', target: 'Claquesous', value: 2 },
        { source: 'Montparnasse', target: 'Valjean', value: 1 },
        { source: 'Montparnasse', target: 'Gavroche', value: 1 },
        { source: 'Montparnasse', target: 'Eponine', value: 1 },
        { source: 'Montparnasse', target: 'Thenardier', value: 1 },
        { source: 'Toussaint', target: 'Cosette', value: 2 },
        { source: 'Toussaint', target: 'Javert', value: 1 },
        { source: 'Toussaint', target: 'Valjean', value: 1 },
        { source: 'Child1', target: 'Gavroche', value: 2 },
        { source: 'Child2', target: 'Gavroche', value: 2 },
        { source: 'Child2', target: 'Child1', value: 3 },
        { source: 'Brujon', target: 'Babet', value: 3 },
        { source: 'Brujon', target: 'Gueulemer', value: 3 },
        { source: 'Brujon', target: 'Thenardier', value: 3 },
        { source: 'Brujon', target: 'Gavroche', value: 1 },
        { source: 'Brujon', target: 'Eponine', value: 1 },
        { source: 'Brujon', target: 'Claquesous', value: 1 },
        { source: 'Brujon', target: 'Montparnasse', value: 1 },
        { source: 'Mme.Hucheloup', target: 'Bossuet', value: 1 },
        { source: 'Mme.Hucheloup', target: 'Joly', value: 1 },
        { source: 'Mme.Hucheloup', target: 'Grantaire', value: 1 },
        { source: 'Mme.Hucheloup', target: 'Bahorel', value: 1 },
        { source: 'Mme.Hucheloup', target: 'Courfeyrac', value: 1 },
        { source: 'Mme.Hucheloup', target: 'Gavroche', value: 1 },
        { source: 'Mme.Hucheloup', target: 'Enjolras', value: 1 }
    ]
};


/***/ }),

/***/ "./src/dataset/patents.ts":
/*!********************************!*\
  !*** ./src/dataset/patents.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Patents dataset, from https://www.patentsview.org/web/#viz/relationships
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.patents = void 0;
exports.patents = {
    nodes: [
        {
            type: 'patent',
            id: '6516227',
            name: 'Rechargeable spinal cord stimulator system',
            numCitations: 1363,
            x: -146.50722772206416,
            y: 237.7898848864182
        },
        {
            type: 'patent',
            id: '6535909',
            name: 'System and method for record and playback of collaborative Web browsing session',
            numCitations: 1438,
            x: 301.0880840740178,
            y: 78.3544919158754
        },
        {
            type: 'patent',
            id: '6549908',
            name: 'Methods and apparatus for interpreting user selections in the context of a relation distributed as a set of orthogonalized sub-relations',
            numCitations: 1268,
            x: -13.814856590741202,
            y: -183.5501679350274
        },
        {
            type: 'patent',
            id: '6553563',
            name: 'Development tool, method, and system for client server applications',
            numCitations: 1351,
            x: -0.5224312790142777,
            y: -247.1495779627279
        },
        {
            type: 'patent',
            id: '6558320',
            name: 'Handheld personal data assistant (PDA) with a medical device and method of using the same',
            numCitations: 1514,
            x: -204.64071894654788,
            y: 71.57055284512312
        },
        {
            type: 'patent',
            id: '6558351',
            name: 'Closed loop system for controlling insulin infusion',
            numCitations: 1369,
            x: -212.97816000219387,
            y: 14.71564053417009
        },
        {
            type: 'patent',
            id: '6560461',
            name: 'Authorized location reporting paging system',
            numCitations: 1479,
            x: -250.43543062905093,
            y: -191.43720062406038
        },
        {
            type: 'patent',
            id: '6563174',
            name: 'Thin film transistor and matrix display device',
            numCitations: 3284,
            x: -12.588249503652401,
            y: -3.606638925074952
        },
        {
            type: 'patent',
            id: '6565509',
            name: 'Analyte monitoring device and methods of use',
            numCitations: 1333,
            x: -105.25511612362045,
            y: 157.11713360602621
        },
        {
            type: 'patent',
            id: '6571282',
            name: 'Block-based communication in a communication services patterns environment',
            numCitations: 1467,
            x: 139.669746748281,
            y: 253.01406501471942
        },
        {
            type: 'patent',
            id: '6574635',
            name: 'Application instantiation based upon attributes and values stored in a meta data repository, including tiering of application layers objects and components',
            numCitations: 1368,
            x: 11.002027627782116,
            y: -234.9180529832358
        },
        {
            type: 'patent',
            id: '6577726',
            name: 'Computer telephony integration hotelling method and system',
            numCitations: 1270,
            x: -87.19153245841262,
            y: -173.97644755929284
        },
        {
            type: 'patent',
            id: '6587835',
            name: 'Shopping assistance with handheld computing device',
            numCitations: 1471,
            x: -279.2865813378465,
            y: 110.1587912501507
        },
        {
            type: 'patent',
            id: '6601087',
            name: 'Instant document sharing',
            numCitations: 1397,
            x: 210.94821350137184,
            y: 92.53188786911404
        },
        {
            type: 'patent',
            id: '6602252',
            name: 'Combined dissecting, cauterizing, and stapling device',
            numCitations: 1503,
            x: 147.94977165043258,
            y: 170.08888855631307
        },
        {
            type: 'patent',
            id: '6604117',
            name: 'Method of maintaining a network of partially replicated database system',
            numCitations: 1261,
            x: -0.888555802742035,
            y: -218.23048820307227
        },
        {
            type: 'patent',
            id: '6604128',
            name: 'Method and system for distributing objects over a network',
            numCitations: 1261,
            x: -56.73872742120841,
            y: -243.3483841066443
        },
        {
            type: 'patent',
            id: '6606744',
            name: 'Providing collaborative installation management in a network-based supply chain environment',
            numCitations: 1271,
            x: 153.9948251850397,
            y: 231.46579888120272
        },
        {
            type: 'patent',
            id: '6609150',
            name: 'Web client-server system and method for incompatible page markup and presentation languages',
            numCitations: 1336,
            x: 13.182867607321255,
            y: -184.8342643188157
        },
        {
            type: 'patent',
            id: '6621834',
            name: 'System and method for voice transmission over network protocols',
            numCitations: 1265,
            x: 85.08228149344369,
            y: 105.43464571232896
        },
        {
            type: 'patent',
            id: '6641533',
            name: 'Handheld personal data assistant (PDA) with a medical device and method of using the same',
            numCitations: 1431,
            x: -218.09766118001224,
            y: 39.85760035797989
        },
        {
            type: 'patent',
            id: '6644532',
            name: 'Surgical stapling apparatus',
            numCitations: 1267,
            x: 304.6630925316294,
            y: -29.709611573491397
        },
        {
            type: 'patent',
            id: '6654032',
            name: 'Instant sharing of documents on a remote server',
            numCitations: 1413,
            x: 159.30050355296015,
            y: 108.98389585627005
        },
        {
            type: 'patent',
            id: '6656193',
            name: 'Device for attachment of buttress material to a surgical fastening device',
            numCitations: 1279,
            x: 116.90914153158597,
            y: -78.76626936858557
        },
        {
            type: 'patent',
            id: '6665648',
            name: 'State models for monitoring process',
            numCitations: 1288,
            x: -19.75185273935374,
            y: -126.65338912269928
        },
        {
            type: 'patent',
            id: '6665655',
            name: 'Implicit rating of retrieved information in an information search system',
            numCitations: 1294,
            x: -205.5103612199467,
            y: -62.615175772923976
        },
        {
            type: 'patent',
            id: '6684438',
            name: 'Method of using cache to determine the visibility to a remote database client of a plurality of database transactions',
            numCitations: 1265,
            x: -70.89621190805329,
            y: -211.65898126469475
        },
        {
            type: 'patent',
            id: '6690387',
            name: 'Touch-screen image scrolling system and method',
            numCitations: 1361,
            x: -96.0833335861014,
            y: 257.188666044209
        },
        {
            type: 'patent',
            id: '6693232',
            name: 'Inbred corn line LH295',
            numCitations: 1585,
            x: 225.21362396634333,
            y: -181.7023120873901
        },
        {
            type: 'patent',
            id: '6698643',
            name: 'Expanding parallel jaw device for use with an electromechanical driver device',
            numCitations: 1355,
            x: 116.93380088200308,
            y: 220.21419705439607
        },
        {
            type: 'patent',
            id: '6711565',
            name: 'Method, apparatus, and system for previewing search results',
            numCitations: 1388,
            x: -37.50448129076735,
            y: -273.41169584791356
        },
        {
            type: 'patent',
            id: '6716233',
            name: 'Electromechanical driver and remote surgical instrument attachment having computer assisted control capabilities',
            numCitations: 1244,
            x: 99.98744927740107,
            y: 212.59527229962606
        },
        {
            type: 'patent',
            id: '6718361',
            name: 'Method and apparatus for reliable and scalable distribution of data files in distributed networks',
            numCitations: 1349,
            x: -214.4706454200155,
            y: 179.76445383311545
        },
        {
            type: 'patent',
            id: '6724399',
            name: 'Methods and apparatus for enabling keyboard accelerators in applications implemented via a browser',
            numCitations: 1271,
            x: -3.865437098036597,
            y: -168.04665075977616
        },
        {
            type: 'patent',
            id: '6727522',
            name: 'Transistor and semiconductor device',
            numCitations: 3301,
            x: 45.493009086533476,
            y: -18.399336761865555
        },
        {
            type: 'patent',
            id: '6728702',
            name: 'System and method to implement an integrated search center supporting a full-text search and query on a database',
            numCitations: 1290,
            x: -50.77651269647964,
            y: -265.6439416642619
        },
        {
            type: 'patent',
            id: '6728960',
            name: 'Techniques for managing multiple threads in a browser environment',
            numCitations: 1287,
            x: -31.86098260027274,
            y: -177.09627925166075
        },
        {
            type: 'patent',
            id: '6732095',
            name: 'Method and apparatus for mapping between XML and relational representations',
            numCitations: 1318,
            x: -45.17430826877544,
            y: -152.23938355298804
        },
        {
            type: 'patent',
            id: '6732100',
            name: 'Database access method and system for user role defined access',
            numCitations: 1347,
            x: -59.210136806292674,
            y: -174.83877990849572
        },
        {
            type: 'patent',
            id: '6732111',
            name: 'Method, apparatus, system, and program product for attaching files and other objects to a partially replicated database',
            numCitations: 1294,
            x: -90.7397050479451,
            y: -244.71990328774314
        },
        {
            type: 'patent',
            id: '6754681',
            name: 'Partially replicated distributed database with multiple levels of remote clients',
            numCitations: 1269,
            x: -79.58083870312655,
            y: -228.1724054173842
        },
        {
            type: 'patent',
            id: '6763351',
            name: 'Method, apparatus, and system for attaching search results',
            numCitations: 1487,
            x: -25.243474733492743,
            y: -263.25740794021067
        },
        {
            type: 'patent',
            id: '6763501',
            name: 'Remote document serving',
            numCitations: 1319,
            x: 158.3253837620942,
            y: 93.49546231516919
        },
        {
            type: 'patent',
            id: '6768904',
            name: 'Data communication method using mobile terminal',
            numCitations: 1256,
            x: -307.97606158133414,
            y: 18.769756679797396
        },
        {
            type: 'patent',
            id: '6782383',
            name: 'System and method to implement a persistent and dismissible search center frame',
            numCitations: 1282,
            x: -12.976177557835852,
            y: -272.9194404073791
        },
        {
            type: 'patent',
            id: '6783524',
            name: 'Robotic surgical tool with ultrasound cauterizing and cutting instrument',
            numCitations: 1505,
            x: 43.38231098694066,
            y: 279.08217801147714
        },
        {
            type: 'patent',
            id: '6786382',
            name: 'Surgical stapling instrument incorporating an articulation joint for a firing bar track',
            numCitations: 1371,
            x: 134.94078164502835,
            y: -65.10082373566381
        },
        {
            type: 'patent',
            id: '6804330',
            name: 'Method and system for accessing CRM data via voice',
            numCitations: 1348,
            x: 41.445251723842865,
            y: -236.9915648109865
        },
        {
            type: 'patent',
            id: '6809653',
            name: 'Telemetered characteristic monitor system and method of using the same',
            numCitations: 1250,
            x: -192.3665947756808,
            y: 85.20039713859154
        },
        {
            type: 'patent',
            id: '6826565',
            name: 'Method and apparatus for serving files to browsing clients',
            numCitations: 1253,
            x: -187.202078612142,
            y: -205.8028067140975
        },
        {
            type: 'patent',
            id: '6826582',
            name: 'Method and system for using file systems for content management',
            numCitations: 1262,
            x: -173.39071713434592,
            y: -84.74810645391052
        },
        {
            type: 'patent',
            id: '6826745',
            name: 'System and method for smart scripting call centers and configuration thereof',
            numCitations: 1290,
            x: -76.78126433121005,
            y: -189.22148175125054
        },
        {
            type: 'patent',
            id: '6829655',
            name: 'Method and system for server synchronization with a computing device via a companion device',
            numCitations: 1292,
            x: 54.15067210701869,
            y: -193.55954311545358
        },
        {
            type: 'patent',
            id: '6830174',
            name: 'Medical instrument',
            numCitations: 1345,
            x: 241.6836563040002,
            y: 178.8101554942473
        },
        {
            type: 'patent',
            id: '6842748',
            name: 'Usage based strength between related information in an information retrieval system',
            numCitations: 1273,
            x: -255.7671401763918,
            y: -89.30941490160309
        },
        {
            type: 'patent',
            id: '6843403',
            name: 'Surgical clamping, cutting and stapling device',
            numCitations: 1278,
            x: 80.62267888317515,
            y: 204.67249292957572
        },
        {
            type: 'patent',
            id: '6850252',
            name: 'Intelligent electronic appliance system and method',
            numCitations: 1784,
            x: -269.0939625716982,
            y: 80.79152540917103
        },
        {
            type: 'patent',
            id: '6850895',
            name: 'Assignment manager',
            numCitations: 1429,
            x: -104.71523172899978,
            y: -237.67489051495383
        },
        {
            type: 'patent',
            id: '6850949',
            name: 'System and method for generating a dynamic interface via a communications network',
            numCitations: 1276,
            x: 170.8948478666423,
            y: -157.1623996387279
        },
        {
            type: 'patent',
            id: '6852915',
            name: 'Inbred corn line LH283BtMON810',
            numCitations: 1584,
            x: 214.2878252666797,
            y: -221.65064590625735
        },
        {
            type: 'patent',
            id: '6905057',
            name: 'Surgical stapling instrument incorporating a firing mechanism having a linked rack transmission',
            numCitations: 1398,
            x: 204.244314091743,
            y: -78.10023672232607
        },
        {
            type: 'patent',
            id: '6959852',
            name: 'Surgical stapling instrument with multistroke firing incorporating an anti-backup mechanism',
            numCitations: 1279,
            x: 214.47741140236582,
            y: -56.291587636591125
        },
        {
            type: 'patent',
            id: '6964363',
            name: 'Surgical stapling instrument having articulation joint support plates for supporting a firing bar',
            numCitations: 1330,
            x: 171.89247270898028,
            y: -97.41002462550293
        },
        {
            type: 'patent',
            id: '6978921',
            name: 'Surgical stapling instrument incorporating an E-beam firing mechanism',
            numCitations: 1271,
            x: 220.9998003804044,
            y: -71.42078135636545
        },
        {
            type: 'patent',
            id: '6981628',
            name: 'Surgical instrument with a lateral-moving articulation control',
            numCitations: 1588,
            x: 155.12209667738722,
            y: -93.69628751460294
        },
        {
            type: 'patent',
            id: '7000818',
            name: 'Surgical stapling instrument having separate distinct closing and firing systems',
            numCitations: 1422,
            x: 227.01768845379692,
            y: 7.024056611463051
        },
        {
            type: 'patent',
            id: '7025743',
            name: 'External infusion device with remote programming, bolus estimator and/or vibration alarm capabilities',
            numCitations: 1348,
            x: -139.33487275744275,
            y: 46.52061115334398
        },
        {
            type: 'patent',
            id: '7049190',
            name: 'Method for forming ZnO film, method for forming ZnO semiconductor layer, method for fabricating semiconductor device, and semiconductor device',
            numCitations: 3234,
            x: -289.10918833611,
            y: -97.96776938549537
        },
        {
            type: 'patent',
            id: '7055731',
            name: 'Surgical stapling instrument incorporating a tapered firing bar for increased flexibility around the articulation joint',
            numCitations: 1325,
            x: 230.49518386439988,
            y: -59.64224567858248
        },
        {
            type: 'patent',
            id: '7061014',
            name: 'Natural-superlattice homologous single crystal thin film, method for preparation thereof, and device using said single crystal thin film',
            numCitations: 3339,
            x: -5.800882044901439,
            y: 68.52641595031525
        },
        {
            type: 'patent',
            id: '7064346',
            name: 'Transistor and semiconductor device',
            numCitations: 3268,
            x: -3.4003031519913716,
            y: 25.981356836043688
        },
        {
            type: 'patent',
            id: '7105868',
            name: 'High-electron mobility transistor with zinc oxide',
            numCitations: 3233,
            x: -17.835785749785817,
            y: 199.91883720210305
        },
        {
            type: 'patent',
            id: '7111769',
            name: 'Surgical instrument incorporating an articulation mechanism having rotation about the longitudinal axis',
            numCitations: 1278,
            x: 151.22579832524045,
            y: -37.17099074749013
        },
        {
            type: 'patent',
            id: '7147138',
            name: 'Surgical stapling instrument having an electroactive polymer actuated buttress deployment mechanism',
            numCitations: 1428,
            x: 189.086143238575,
            y: -73.69130392683924
        },
        {
            type: 'patent',
            id: '7159750',
            name: 'Surgical stapling device',
            numCitations: 1258,
            x: -41.29995186519443,
            y: 292.8462674537822
        },
        {
            type: 'patent',
            id: '7211825',
            name: 'Indium oxide-based thin film transistors and circuits',
            numCitations: 3245,
            x: -312.3839057221477,
            y: -5.614541567133007
        },
        {
            type: 'patent',
            id: '7246734',
            name: 'Rotary hydraulic pump actuated multi-stroke surgical instrument',
            numCitations: 1288,
            x: 200.44563380086515,
            y: -63.18865588076886
        },
        {
            type: 'patent',
            id: '7282782',
            name: 'Combined binary oxide semiconductor device',
            numCitations: 3273,
            x: -125.8309041477986,
            y: -31.277877893580488
        },
        {
            type: 'patent',
            id: '7297977',
            name: 'Semiconductor device',
            numCitations: 3318,
            x: -128.28288629696726,
            y: -55.26147557803329
        },
        {
            type: 'patent',
            id: '7323356',
            name: 'LnCuO(S,Se,Te)monocrystalline thin film, its manufacturing method, and optical device or electronic device using the monocrystalline thin film',
            numCitations: 3251,
            x: -18.59755305395574,
            y: 88.95531610838968
        },
        {
            type: 'patent',
            id: '7340411',
            name: 'System and method for generating, capturing, and managing customer lead information over a computer network',
            numCitations: 1282,
            x: 171.1408315591698,
            y: -202.24883708044808
        },
        {
            type: 'patent',
            id: '7380695',
            name: 'Surgical stapling instrument having a single lockout mechanism for prevention of firing',
            numCitations: 1386,
            x: 186.25833530110194,
            y: -21.66321873245209
        },
        {
            type: 'patent',
            id: '7380696',
            name: 'Articulating surgical stapling instrument incorporating a two-piece E-beam firing mechanism',
            numCitations: 1388,
            x: 207.9029593903179,
            y: -8.531533737621885
        },
        {
            type: 'patent',
            id: '7385224',
            name: 'Thin film transistor having an etching protection film and manufacturing method thereof',
            numCitations: 3224,
            x: -209.82230482555335,
            y: -138.5100409900293
        },
        {
            type: 'patent',
            id: '7402506',
            name: 'Methods of making thin film transistors comprising zinc-oxide-based semiconductor materials and transistors made thereby',
            numCitations: 3258,
            x: 205.02475667447774,
            y: 185.67878066443038
        },
        {
            type: 'patent',
            id: '7404508',
            name: 'Surgical stapling and cutting device',
            numCitations: 1517,
            x: 142.8534886173237,
            y: 1.3325885281748553
        },
        {
            type: 'patent',
            id: '7411209',
            name: 'Field-effect transistor and method for manufacturing the same',
            numCitations: 3255,
            x: 98.46207221183528,
            y: 123.03084775370279
        },
        {
            type: 'patent',
            id: '7453065',
            name: 'Sensor and image pickup device',
            numCitations: 3230,
            x: -0.16573743942671854,
            y: 141.28922935299022
        },
        {
            type: 'patent',
            id: '7453087',
            name: 'Thin-film transistor and thin-film diode having amorphous-oxide semiconductor layer',
            numCitations: 3242,
            x: 64.92619908272222,
            y: 181.84593665090443
        },
        {
            type: 'patent',
            id: '7462862',
            name: 'Transistor using an isovalent semiconductor oxide as the active channel layer',
            numCitations: 3244,
            x: -69.61679142848251,
            y: -17.951431766711924
        },
        {
            type: 'patent',
            id: '7464846',
            name: 'Surgical instrument having a removable battery',
            numCitations: 1287,
            x: 181.84194955991686,
            y: -6.130356644541759
        },
        {
            type: 'patent',
            id: '7468304',
            name: 'Method of fabricating oxide semiconductor device',
            numCitations: 3240,
            x: 43.14447422876499,
            y: 84.30857449883901
        },
        {
            type: 'patent',
            id: '7501293',
            name: 'Semiconductor device in which zinc oxide is used as a semiconductor material and method for manufacturing the semiconductor device',
            numCitations: 3216,
            x: 100.75984495619763,
            y: 263.93928117765387
        },
        {
            type: 'patent',
            id: '7506791',
            name: 'Surgical stapling instrument with mechanical mechanism for limiting maximum tissue compression',
            numCitations: 1257,
            x: 162.8994374938383,
            y: -13.50766436461125
        },
        {
            type: 'patent',
            id: '7620655',
            name: 'Method, device and computer program product for identifying visitors of websites',
            numCitations: 1243,
            x: 273.7453257058471,
            y: -134.11969716806783
        },
        {
            type: 'patent',
            id: '7632985',
            name: 'Soybean event MON89788 and methods for detection thereof',
            numCitations: 1477,
            x: 25.156412731130995,
            y: 232.6383745363165
        },
        {
            type: 'patent',
            id: '7663607',
            name: 'Multipoint touchscreen',
            numCitations: 2217,
            x: 148.31729075714412,
            y: -252.1205411729562
        },
        {
            type: 'patent',
            id: '7674650',
            name: 'Semiconductor device and manufacturing method thereof',
            numCitations: 3439,
            x: 265.20775273511885,
            y: 97.08753175649879
        },
        {
            type: 'patent',
            id: '7732819',
            name: 'Semiconductor device and manufacturing method thereof',
            numCitations: 3288,
            x: 241.27432475696145,
            y: 92.57917159661595
        },
        {
            type: 'patent',
            id: '8053184',
            name: 'Soybean event MON89788 and methods for detection thereof',
            numCitations: 1249,
            x: 12.74173927451986,
            y: 223.33050946853854
        },
        {
            type: 'inventor',
            id: '4082602-2',
            name: 'Adam Heller',
            numPatents: 278,
            x: -78.97918367878395,
            y: 175.83458551945697
        },
        {
            type: 'inventor',
            id: '6551276-11',
            name: 'Adrian Gut',
            numPatents: 14,
            x: -126.49163896882082,
            y: 77.05392542894437
        },
        {
            type: 'inventor',
            id: '6551276-3',
            name: 'Alan Haubach',
            numPatents: 15,
            x: -133.54480618517556,
            y: 13.73644337954243
        },
        {
            type: 'inventor',
            id: '6732095-1',
            name: 'Alex Warshavsky',
            numPatents: 38,
            x: -41.43006091014681,
            y: -115.69468137064817
        },
        {
            type: 'inventor',
            id: '4082097-1',
            name: 'Alfred E. Mann',
            numPatents: 73,
            x: -166.25127823417688,
            y: 64.21424556623339
        },
        {
            type: 'inventor',
            id: '7402506-2',
            name: 'Andrea C. Scuderi',
            numPatents: 2,
            x: 232.021013564944,
            y: 201.54360553214553
        },
        {
            type: 'inventor',
            id: '6295530-1',
            name: 'Andrew M. Ritchie',
            numPatents: 3,
            x: -180.13270109380883,
            y: -175.89335875039285
        },
        {
            type: 'inventor',
            id: '5944791-1',
            name: 'Andrew W. Scherpbier',
            numPatents: 8,
            x: 89.03596788702271,
            y: 73.41966601562058
        },
        {
            type: 'inventor',
            id: '6665648-4',
            name: 'Andrzej P. Mazur',
            numPatents: 1,
            x: -17.75957738133269,
            y: -90.04327884141138
        },
        {
            type: 'inventor',
            id: '6577726-4',
            name: 'Anil K. Annadata',
            numPatents: 19,
            x: -90.27237726758581,
            y: -142.1198155312784
        },
        {
            type: 'inventor',
            id: '6336137-3',
            name: 'Anil Mukundan',
            numPatents: 24,
            x: 44.97570003882059,
            y: -173.1912630521635
        },
        {
            type: 'inventor',
            id: '6829655-3',
            name: 'Anupam Singhal',
            numPatents: 12,
            x: 68.03341497080808,
            y: -159.6164090183031
        },
        {
            type: 'inventor',
            id: '5276262-2',
            name: 'Arthur L. Johnson',
            numPatents: 9,
            x: 185.5095664352228,
            y: -228.8419915898405
        },
        {
            type: 'inventor',
            id: '7082832-4',
            name: 'Ayanori Endo',
            numPatents: 5,
            x: 116.09261573010951,
            y: 149.17176081875573
        },
        {
            type: 'inventor',
            id: '6370584-1',
            name: 'Azer Bestavros',
            numPatents: 8,
            x: -240.41292415194087,
            y: 197.40201072984638
        },
        {
            type: 'inventor',
            id: '5722997-2',
            name: 'Behrad Aria',
            numPatents: 75,
            x: -76.88639579899268,
            y: 140.59743480285144
        },
        {
            type: 'inventor',
            id: '4972224-1',
            name: 'Bennie Thompson',
            numPatents: 46,
            x: 129.80735052389812,
            y: -4.481972559839983
        },
        {
            type: 'inventor',
            id: '7620655-2',
            name: 'Björn Sperling',
            numPatents: 1,
            x: 265.69802466021343,
            y: -163.1748759268247
        },
        {
            type: 'inventor',
            id: '6551276-12',
            name: 'Bob Murtfeldt',
            numPatents: 14,
            x: -104.57602641605023,
            y: 43.21929386017491
        },
        {
            type: 'inventor',
            id: '6809653-9',
            name: 'Brad T. Hite',
            numPatents: 4,
            x: -178.740694429597,
            y: 114.56430107100311
        },
        {
            type: 'inventor',
            id: '6665648-5',
            name: 'Brian Groves',
            numPatents: 3,
            x: -4.063703727593559,
            y: -93.24666021615177
        },
        {
            type: 'inventor',
            id: '7000818-3',
            name: 'Brian J. Hemmelgarn',
            numPatents: 2,
            x: 251.87825271692208,
            y: 28.28980319526008
        },
        {
            type: 'inventor',
            id: '6658577-1',
            name: 'Brian Q. Huppi',
            numPatents: 94,
            x: 123.19631987835258,
            y: -269.5549552777111
        },
        {
            type: 'inventor',
            id: '5465895-1',
            name: 'Bryan D. Knodel',
            numPatents: 147,
            x: 249.27159352509696,
            y: 149.8942269653444
        },
        {
            type: 'inventor',
            id: '5948006-1',
            name: 'Carla M. Mann',
            numPatents: 30,
            x: -148.41153476987805,
            y: 268.2102368533701
        },
        {
            type: 'inventor',
            id: '6558351-8',
            name: 'Cary D. Talbot',
            numPatents: 51,
            x: -242.1201373960085,
            y: 1.0809105861722483
        },
        {
            type: 'inventor',
            id: '5176644-1',
            name: 'Chad Srisathapat',
            numPatents: 28,
            x: -106.59780325645289,
            y: 56.72415996247363
        },
        {
            type: 'inventor',
            id: '6732095-2',
            name: 'Chandrakant Ramkrishna Bhavsar',
            numPatents: 7,
            x: -56.44692423602858,
            y: -114.38936355952521
        },
        {
            type: 'inventor',
            id: '6804330-5',
            name: 'Chris Haven',
            numPatents: 8,
            x: 76.58996926607027,
            y: -233.59376421774968
        },
        {
            type: 'inventor',
            id: '5859916-3',
            name: 'Christopher A. Julian',
            numPatents: 35,
            x: 32.49529202915526,
            y: 307.85587157329917
        },
        {
            type: 'inventor',
            id: '5963953-3',
            name: 'Christopher Stauber',
            numPatents: 3,
            x: 38.876499177308936,
            y: -254.6853371485407
        },
        {
            type: 'inventor',
            id: '6593834-2',
            name: 'Chunong Qiu',
            numPatents: 30,
            x: -299.51357073275767,
            y: 28.693586133179505
        },
        {
            type: 'inventor',
            id: '5703357-3',
            name: 'Cindy Xing Qiu',
            numPatents: 37,
            x: -307.60494602088494,
            y: -36.09974297692554
        },
        {
            type: 'inventor',
            id: '5382232-1',
            name: 'Cliff Hague',
            numPatents: 25,
            x: -158.94889170792217,
            y: 75.57366125967091
        },
        {
            type: 'inventor',
            id: '6535909-1',
            name: 'David Bradley Rust',
            numPatents: 10,
            x: 293.89378266881215,
            y: 108.24045592690449
        },
        {
            type: 'inventor',
            id: '5713911-1',
            name: 'David C. Racenet',
            numPatents: 117,
            x: -70.73199996729076,
            y: 283.6884502132661
        },
        {
            type: 'inventor',
            id: '5512426-1',
            name: 'David H. Levy',
            numPatents: 97,
            x: 175.62273346829593,
            y: 195.03348092042785
        },
        {
            type: 'inventor',
            id: '5755737-3',
            name: 'David Karl Lee Peterson',
            numPatents: 10,
            x: -116.19997593920681,
            y: 235.42317467768706
        },
        {
            type: 'inventor',
            id: '6004276-13',
            name: 'David L. Rabbers',
            numPatents: 9,
            x: 90.05455138839467,
            y: -199.76724302660992
        },
        {
            type: 'inventor',
            id: '4127227-1',
            name: 'David T. Green',
            numPatents: 253,
            x: 320.0538956493474,
            y: -2.5674406983783777
        },
        {
            type: 'inventor',
            id: '5329655-1',
            name: 'Dean L. Garner',
            numPatents: 9,
            x: 82.9868378665844,
            y: -75.01472155002138
        },
        {
            type: 'inventor',
            id: '6551276-9',
            name: 'Deborah Ruppert',
            numPatents: 22,
            x: -118.26552937451507,
            y: 20.131481189101695
        },
        {
            type: 'inventor',
            id: '6551276-10',
            name: 'Dennis P. Bishop',
            numPatents: 16,
            x: -113.04138432659943,
            y: 68.5347918156229
        },
        {
            type: 'inventor',
            id: '5918159-2',
            name: 'Denzil Willoughby Chesney',
            numPatents: 8,
            x: -221.3438163197732,
            y: -180.31258868435725
        },
        {
            type: 'inventor',
            id: '6912839-2',
            name: 'Derek Dee Deville',
            numPatents: 127,
            x: 124.00562369714609,
            y: 30.303518573213328
        },
        {
            type: 'inventor',
            id: '6718361-8',
            name: 'Domenic J. LaRosa',
            numPatents: 7,
            x: -185.1634027151588,
            y: 191.49880558090896
        },
        {
            type: 'inventor',
            id: '6850949-1',
            name: 'Doug Warner',
            numPatents: 1,
            x: 197.4109586624888,
            y: -141.51137425901277
        },
        {
            type: 'inventor',
            id: '6530932-2',
            name: 'Douglas B. Hoffman',
            numPatents: 41,
            x: 112.65902202678886,
            y: -41.95179419340801
        },
        {
            type: 'inventor',
            id: '6434550-1',
            name: 'Douglas K. Warner',
            numPatents: 11,
            x: -240.213051803147,
            y: -58.38534522176044
        },
        {
            type: 'inventor',
            id: '6850895-5',
            name: 'Duane Wandless',
            numPatents: 3,
            x: -141.77120370957505,
            y: -235.84945888555336
        },
        {
            type: 'inventor',
            id: '7632985-4',
            name: 'Ellen Dickinson',
            numPatents: 5,
            x: -6.650712953659232,
            y: 243.85922494977996
        },
        {
            type: 'inventor',
            id: '5616532-3',
            name: 'Ephraim Heller',
            numPatents: 125,
            x: -136.66276931786788,
            y: 148.50833287306844
        },
        {
            type: 'inventor',
            id: '6724399-1',
            name: 'Ernst Katchour',
            numPatents: 2,
            x: 20.460705177816816,
            y: -138.6316174346047
        },
        {
            type: 'inventor',
            id: '4403687-2',
            name: 'Eugene L. Timperman',
            numPatents: 69,
            x: 167.81405976240322,
            y: 23.653794348670516
        },
        {
            type: 'inventor',
            id: '6905057-2',
            name: 'Frederick E. Shelton, IV',
            numPatents: 1047,
            x: 206.94055601161958,
            y: -33.63794401922105
        },
        {
            type: 'inventor',
            id: '5041086-4',
            name: 'Fredric C. Colman',
            numPatents: 119,
            x: -93.07141522233565,
            y: 187.61382791214774
        },
        {
            type: 'inventor',
            id: '6433921-2',
            name: 'G. Victor Treyz',
            numPatents: 19,
            x: -250.2141922087249,
            y: 117.70936188128789
        },
        {
            type: 'inventor',
            id: '6558351-1',
            name: 'Garry M. Steil',
            numPatents: 21,
            x: -197.55033843707088,
            y: -14.969054157255261
        },
        {
            type: 'inventor',
            id: '5707369-2',
            name: 'Geoffrey C. Hueil',
            numPatents: 37,
            x: 88.77732129975968,
            y: -59.34294469090431
        },
        {
            type: 'inventor',
            id: '6826582-2',
            name: 'George Ericsson',
            numPatents: 1,
            x: -158.02070855249937,
            y: -111.41355666075413
        },
        {
            type: 'inventor',
            id: 'RE28932-2',
            name: 'Graham W. Bryan',
            numPatents: 17,
            x: 302.15197174981995,
            y: 2.971153301217186
        },
        {
            type: 'inventor',
            id: '6144679-1',
            name: 'Gregory S Herman',
            numPatents: 70,
            x: -107.08721212438253,
            y: -22.999325980475344
        },
        {
            type: 'inventor',
            id: '6601087-2',
            name: 'Guanghong Yang',
            numPatents: 8,
            x: 181.9400868080221,
            y: 77.6677862338119
        },
        {
            type: 'inventor',
            id: '6577726-3',
            name: 'Henry D. Jay',
            numPatents: 7,
            x: -122.02320476982499,
            y: -157.95566732418285
        },
        {
            type: 'inventor',
            id: '4283024-1',
            name: 'Henry R. Sienkiewicz',
            numPatents: 35,
            x: 274.60415603712727,
            y: -27.27330962584567
        },
        {
            type: 'inventor',
            id: '7323356-5',
            name: 'Hidenori Hiramatsu',
            numPatents: 4,
            x: -36.605424251950446,
            y: 115.850089319988
        },
        {
            type: 'inventor',
            id: '4703019-2',
            name: 'Hideo Hosono',
            numPatents: 68,
            x: -9.859457094237333,
            y: 112.18374696348913
        },
        {
            type: 'inventor',
            id: '4253061-3',
            name: 'Hideo Ohno',
            numPatents: 55,
            x: 16.424397835913993,
            y: 1.5981290321141162
        },
        {
            type: 'inventor',
            id: '5272069-6',
            name: 'Hiromichi Ota',
            numPatents: 19,
            x: -42.930231233299565,
            y: 72.03081578296118
        },
        {
            type: 'inventor',
            id: '5041200-1',
            name: 'Hiromitsu Ishii',
            numPatents: 40,
            x: -240.4509629339296,
            y: -150.27601265988352
        },
        {
            type: 'inventor',
            id: '6863363-1',
            name: 'Hisato Yabuta',
            numPatents: 40,
            x: 60.4372147665455,
            y: 56.49664921881387
        },
        {
            type: 'inventor',
            id: '7385224-2',
            name: 'Hitoshi Hokari',
            numPatents: 3,
            x: -241.8310333799511,
            y: -133.54049779295428
        },
        {
            type: 'inventor',
            id: '5041200-4',
            name: 'Ikuhiro Yamaguchi',
            numPatents: 10,
            x: -228.78086701719153,
            y: -162.3667158856017
        },
        {
            type: 'inventor',
            id: '4997262-1',
            name: 'Ikuo Sakono',
            numPatents: 9,
            x: -22.451556652393943,
            y: -34.04750168418211
        },
        {
            type: 'inventor',
            id: '5081422-1',
            name: 'Ishiang Shih',
            numPatents: 28,
            x: -286.3270775940396,
            y: -23.733105119458497
        },
        {
            type: 'inventor',
            id: '6281898-2',
            name: 'Jacquelyn A. Martino',
            numPatents: 43,
            x: -77.40426674630258,
            y: 233.14366209397406
        },
        {
            type: 'inventor',
            id: '6665648-3',
            name: 'Jai-Jein Yu',
            numPatents: 3,
            x: -31.84005286492673,
            y: -91.62375747364119
        },
        {
            type: 'inventor',
            id: '4809697-1',
            name: 'James D. Causey, III',
            numPatents: 108,
            x: -178.265216120422,
            y: 51.755680930746685
        },
        {
            type: 'inventor',
            id: '4863425-2',
            name: 'James L. Henke',
            numPatents: 25,
            x: -229.82632326693144,
            y: 81.1483918350451
        },
        {
            type: 'inventor',
            id: '5533238-1',
            name: 'James Say',
            numPatents: 115,
            x: -110.26514650550313,
            y: 189.73841907261374
        },
        {
            type: 'inventor',
            id: '6711565-2',
            name: 'Jason Zoss',
            numPatents: 14,
            x: -36.79763583041338,
            y: -303.3606293140057
        },
        {
            type: 'inventor',
            id: '6551276-8',
            name: 'Jay Yonemoto',
            numPatents: 26,
            x: -108.39060115065696,
            y: 30.667530964984817
        },
        {
            type: 'inventor',
            id: '5863326-1',
            name: 'Jeffrey E. Nause',
            numPatents: 7,
            x: -34.97468782651399,
            y: 225.53781276672427
        },
        {
            type: 'inventor',
            id: '4951278-2',
            name: 'Jeffrey I. Cohen',
            numPatents: 45,
            x: -106.67729256003422,
            y: -275.96655765182123
        },
        {
            type: 'inventor',
            id: '6393605-1',
            name: 'Jeffrey Loomans',
            numPatents: 4,
            x: -12.089523280862164,
            y: -146.87295689250564
        },
        {
            type: 'inventor',
            id: '5243622-2',
            name: 'Jeffrey M. Fischer',
            numPatents: 23,
            x: -69.11510576403663,
            y: -121.59596238278911
        },
        {
            type: 'inventor',
            id: '5897563-4',
            name: 'Jeffrey S. Swayze',
            numPatents: 237,
            x: 182.7575218770712,
            y: -42.652264875397925
        },
        {
            type: 'inventor',
            id: '7608761-4',
            name: 'Jennifer Rinehart',
            numPatents: 9,
            x: 14.603033717644877,
            y: 258.01693807943076
        },
        {
            type: 'inventor',
            id: '7380696-3',
            name: 'Jerry R. Morgan',
            numPatents: 1,
            x: 240.77923512539172,
            y: 0.756185655222625
        },
        {
            type: 'inventor',
            id: '5715450-1',
            name: 'Jesse Ambrose',
            numPatents: 19,
            x: 36.180423514508206,
            y: -271.11815189166657
        },
        {
            type: 'inventor',
            id: '6711565-3',
            name: 'Jian-Jung Ying',
            numPatents: 15,
            x: -52.40594362916027,
            y: -298.6209852446577
        },
        {
            type: 'inventor',
            id: '6516227-4',
            name: 'Joey Chen',
            numPatents: 50,
            x: -154.54667136290993,
            y: 208.95072280734337
        },
        {
            type: 'inventor',
            id: '6233617-2',
            name: 'John Coker',
            numPatents: 29,
            x: -107.81893815632144,
            y: -170.9074676231656
        },
        {
            type: 'inventor',
            id: '4561444-1',
            name: 'John H. Livingston',
            numPatents: 31,
            x: -152.85300444583956,
            y: 85.10940008964967
        },
        {
            type: 'inventor',
            id: '5237178-2',
            name: 'John J. Mastrototaro',
            numPatents: 77,
            x: -205.49739590958532,
            y: 50.31477970484868
        },
        {
            type: 'inventor',
            id: '6424847-3',
            name: 'John J. Shin',
            numPatents: 6,
            x: -185.37446355710384,
            y: -3.2872027106235895
        },
        {
            type: 'inventor',
            id: '5713911-2',
            name: 'John W. Beardsley',
            numPatents: 110,
            x: -33.81475988638202,
            y: 262.88267211113725
        },
        {
            type: 'inventor',
            id: '6690387-1',
            name: 'John Zimmerman',
            numPatents: 16,
            x: -103.86436428501,
            y: 287.0324152077035
        },
        {
            type: 'inventor',
            id: '6295530-2',
            name: 'Jonathan Bradshaw',
            numPatents: 7,
            x: -211.8714260910478,
            y: -224.50904787445123
        },
        {
            type: 'inventor',
            id: '6964363-2',
            name: 'Joseph Charles Heuil',
            numPatents: 1,
            x: 157.89490960975428,
            y: -126.44781831975064
        },
        {
            type: 'inventor',
            id: '6804330-4',
            name: 'Joseph Harb',
            numPatents: 16,
            x: 61.12664822458566,
            y: -268.1908816611899
        },
        {
            type: 'inventor',
            id: '7154477-2',
            name: 'Joshua A. Strickon',
            numPatents: 31,
            x: 143.607727645999,
            y: -281.669369261142
        },
        {
            type: 'inventor',
            id: '6665648-1',
            name: 'Karen Brodersen',
            numPatents: 2,
            x: -52.887761617406746,
            y: -135.25324601212748
        },
        {
            type: 'inventor',
            id: '6914182-1',
            name: 'Katsutoshi Takeda',
            numPatents: 12,
            x: -301.89433487691184,
            y: -70.43324650808906
        },
        {
            type: 'inventor',
            id: '5925224-1',
            name: 'Kazuki Kobayashi',
            numPatents: 22,
            x: -41.900676918096416,
            y: 7.301358596622912
        },
        {
            type: 'inventor',
            id: '7061014-4',
            name: 'Kazushige Ueda',
            numPatents: 8,
            x: -37.66496363448323,
            y: 59.62475565738286
        },
        {
            type: 'inventor',
            id: '4356455-3',
            name: 'Keishi Saito',
            numPatents: 60,
            x: 10.219140633910085,
            y: 114.60611008460567
        },
        {
            type: 'inventor',
            id: '6175752-9',
            name: 'Keith A. Friedman',
            numPatents: 56,
            x: -72.76478399432692,
            y: 157.96280246014734
        },
        {
            type: 'inventor',
            id: 'D263987-1',
            name: 'Keith L. Milliman',
            numPatents: 148,
            x: 285.27055146309806,
            y: -4.161607699952845
        },
        {
            type: 'inventor',
            id: 'D304234-2',
            name: 'Keith Ratcliff',
            numPatents: 76,
            x: 298.25438655644587,
            y: -62.037733990730615
        },
        {
            type: 'inventor',
            id: '6838397-3',
            name: 'Kengo Akimoto',
            numPatents: 301,
            x: 233.30591089284124,
            y: 118.12865814744283
        },
        {
            type: 'inventor',
            id: '4072236-1',
            name: 'Kenji Nomura',
            numPatents: 72,
            x: -18.491573620748454,
            y: 164.3319743882085
        },
        {
            type: 'inventor',
            id: '4890611-3',
            name: 'Kenneth H. Mollenauer',
            numPatents: 139,
            x: 171.12139099125284,
            y: 149.8278932183207
        },
        {
            type: 'inventor',
            id: '5409498-4',
            name: 'Kenneth S. Wales',
            numPatents: 34,
            x: 151.61506500486365,
            y: -68.1715301096975
        },
        {
            type: 'inventor',
            id: '6558351-2',
            name: 'Kerstin Rebrin',
            numPatents: 8,
            x: -213.99832648219893,
            y: -18.21020350970695
        },
        {
            type: 'inventor',
            id: '7083075-3',
            name: 'Kevin R. Doll',
            numPatents: 33,
            x: 195.17161861296412,
            y: 21.82757190718286
        },
        {
            type: 'inventor',
            id: '6826745-3',
            name: 'Kevin R. Nix',
            numPatents: 5,
            x: -113.52318349679786,
            y: -186.65850464097767
        },
        {
            type: 'inventor',
            id: '4682596-2',
            name: 'Kevin W. Smith',
            numPatents: 245,
            x: 142.01517052619224,
            y: 35.31713032040018
        },
        {
            type: 'inventor',
            id: '6336137-1',
            name: 'King-Hwa Lee',
            numPatents: 7,
            x: 29.136416821389545,
            y: -152.83892279100135
        },
        {
            type: 'inventor',
            id: '6553563-3',
            name: 'Klaus W. Strobel',
            numPatents: 3,
            x: 18.502269802896187,
            y: -277.84229119164485
        },
        {
            type: 'inventor',
            id: '5715675-2',
            name: 'Korey Kline',
            numPatents: 67,
            x: 107.3928086404656,
            y: 0.12497168391208881
        },
        {
            type: 'inventor',
            id: '6718361-2',
            name: 'Krishna Mangiapudi',
            numPatents: 2,
            x: -221.42351181095376,
            y: 210.68462107621696
        },
        {
            type: 'inventor',
            id: '6577726-1',
            name: 'Kuang-Yang Huang',
            numPatents: 7,
            x: -110.90293474419634,
            y: -144.1107477274019
        },
        {
            type: 'inventor',
            id: '7159750-5',
            name: 'Lee Ann Olson',
            numPatents: 102,
            x: -12.291045729816593,
            y: 284.322824027671
        },
        {
            type: 'inventor',
            id: '6718361-4',
            name: 'Leroy R. Karge',
            numPatents: 6,
            x: -246.56898495901828,
            y: 176.8643082489128
        },
        {
            type: 'inventor',
            id: '6551276-4',
            name: 'Luis J. Malave',
            numPatents: 25,
            x: -150.46955158412106,
            y: 15.466681355594043
        },
        {
            type: 'inventor',
            id: '6048110-3',
            name: 'Lyn M. Irving',
            numPatents: 50,
            x: 185.89368255203638,
            y: 211.73497316837444
        },
        {
            type: 'inventor',
            id: '6718361-3',
            name: 'Lynne M. Murach',
            numPatents: 6,
            x: -184.59731612599379,
            y: 168.95459030128404
        },
        {
            type: 'inventor',
            id: '5948789-1',
            name: 'Magnus Larsson',
            numPatents: 32,
            x: 282.3498743492304,
            y: -105.85390576839409
        },
        {
            type: 'inventor',
            id: '6829655-2',
            name: 'Magnus Vejlstrup',
            numPatents: 5,
            x: 84.57683420505849,
            y: -211.60546591129122
        },
        {
            type: 'inventor',
            id: '6711565-4',
            name: 'Marc Caltabiano',
            numPatents: 18,
            x: -21.572503547031765,
            y: -303.25001204800884
        },
        {
            type: 'inventor',
            id: '7078503-3',
            name: 'Marianne Malven',
            numPatents: 24,
            x: 39.36478912183982,
            y: 204.50761088237962
        },
        {
            type: 'inventor',
            id: '6223205-2',
            name: 'Mark E. Crovella',
            numPatents: 11,
            x: -239.130673392076,
            y: 159.5386268120703
        },
        {
            type: 'inventor',
            id: '6621834-2',
            name: 'Mark Randle Boyns',
            numPatents: 9,
            x: 92.9515991340844,
            y: 139.72491699418129
        },
        {
            type: 'inventor',
            id: '5534132-1',
            name: 'Mark S. Vreeke',
            numPatents: 99,
            x: -126.17414240825202,
            y: 182.14886801748534
        },
        {
            type: 'inventor',
            id: '4892244-4',
            name: 'Mark S. Zeiner',
            numPatents: 112,
            x: 87.86551233944792,
            y: -93.61435949906866
        },
        {
            type: 'inventor',
            id: '6829655-6',
            name: 'Martin Susser',
            numPatents: 8,
            x: 86.5166449716311,
            y: -176.3680568624842
        },
        {
            type: 'inventor',
            id: '4486720-1',
            name: 'Masahiro Hirano',
            numPatents: 64,
            x: -26.473941021328834,
            y: 50.583877501287475
        },
        {
            type: 'inventor',
            id: '5622653-1',
            name: 'Masahiro Orita',
            numPatents: 13,
            x: -43.311943512469504,
            y: 88.05852401092362
        },
        {
            type: 'inventor',
            id: '6080998-3',
            name: 'Masao Isomura',
            numPatents: 3,
            x: -277.1673968733419,
            y: -69.16313590358769
        },
        {
            type: 'inventor',
            id: '4902671-3',
            name: 'Masashi Kawasaki',
            numPatents: 44,
            x: 25.499834981751505,
            y: 12.458835962907768
        },
        {
            type: 'inventor',
            id: '5117838-1',
            name: 'Matthew A. Palmer',
            numPatents: 213,
            x: 111.84440719512871,
            y: 17.55352243854731
        },
        {
            type: 'inventor',
            id: '6577726-2',
            name: 'Matthew S. Malden',
            numPatents: 15,
            x: -89.77281715762112,
            y: -212.5200099480745
        },
        {
            type: 'inventor',
            id: '6665655-2',
            name: 'Michael A. Myer',
            numPatents: 3,
            x: -222.1548984266278,
            y: -91.88370779987125
        },
        {
            type: 'inventor',
            id: '5632432-4',
            name: 'Michael E. Setser',
            numPatents: 46,
            x: 236.1453486905915,
            y: -29.533043437416676
        },
        {
            type: 'inventor',
            id: '5306623-3',
            name: 'Michael F. Tomasco',
            numPatents: 89,
            x: -136.35034022301926,
            y: 166.87376786095362
        },
        {
            type: 'inventor',
            id: '6606744-1',
            name: 'Michael G. Mikurak',
            numPatents: 14,
            x: 143.06107123828787,
            y: 203.68650030864686
        },
        {
            type: 'inventor',
            id: '6264087-1',
            name: 'Michael P. Whitman',
            numPatents: 134,
            x: 88.31330790988822,
            y: 237.10476528058422
        },
        {
            type: 'inventor',
            id: '6665648-2',
            name: 'Michael Tsunghsi Yu',
            numPatents: 2,
            x: 7.3045597411881005,
            y: -101.62893346986323
        },
        {
            type: 'inventor',
            id: '6081518-1',
            name: 'Michel K. Bowman-Amuah',
            numPatents: 56,
            x: 153.55805703292674,
            y: 278.7584163590403
        },
        {
            type: 'inventor',
            id: '4224725-1',
            name: 'Michio Kadota',
            numPatents: 173,
            x: 70.25249110067011,
            y: 260.17630684500784
        },
        {
            type: 'inventor',
            id: '6850949-2',
            name: 'Mike Myer',
            numPatents: 1,
            x: 200.98410027290677,
            y: -165.1800994159187
        },
        {
            type: 'inventor',
            id: '5261037-2',
            name: 'Min Zhu',
            numPatents: 119,
            x: 187.21787990519445,
            y: 119.18052322241124
        },
        {
            type: 'inventor',
            id: '6732100-4',
            name: 'Mingte J. Chen',
            numPatents: 1,
            x: -74.89396821135054,
            y: -144.48151011840986
        },
        {
            type: 'inventor',
            id: '5176502-3',
            name: 'Mitchell J. Palmer',
            numPatents: 40,
            x: 315.79092621337537,
            y: -58.79666939419763
        },
        {
            type: 'inventor',
            id: '7385224-3',
            name: 'Motohiko Yoshida',
            numPatents: 5,
            x: -231.18768324847443,
            y: -116.45107756791272
        },
        {
            type: 'inventor',
            id: '5918159-1',
            name: 'Mundi Fomukong',
            numPatents: 12,
            x: -221.62526815353186,
            y: -201.75317388265475
        },
        {
            type: 'inventor',
            id: '7632985-3',
            name: 'Nancy Taylor',
            numPatents: 5,
            x: 50.015886492956845,
            y: 227.2759540780497
        },
        {
            type: 'inventor',
            id: '7468304-1',
            name: 'Nobuyuki Kaji',
            numPatents: 16,
            x: 41.822376082161696,
            y: 52.514246752854255
        },
        {
            type: 'inventor',
            id: '7205716-5',
            name: 'Norihito Sone',
            numPatents: 19,
            x: 269.115065567314,
            y: 70.01224836249358
        },
        {
            type: 'inventor',
            id: '5358514-3',
            name: 'Paul M. Meadows',
            numPatents: 70,
            x: -171.2697553163847,
            y: 256.54794390887173
        },
        {
            type: 'inventor',
            id: '6558351-3',
            name: 'Paul V. Goode',
            numPatents: 154,
            x: -230.16114196390936,
            y: -13.410314845001913
        },
        {
            type: 'inventor',
            id: '6711565-1',
            name: 'Pavitra Subramaniam',
            numPatents: 20,
            x: -6.372748347947338,
            y: -297.9670264909068
        },
        {
            type: 'inventor',
            id: 'D423761-3',
            name: 'Peter Hong',
            numPatents: 25,
            x: -207.02913444458756,
            y: 113.2044477207746
        },
        {
            type: 'inventor',
            id: '6152987-2',
            name: 'Peter Mardilovich',
            numPatents: 110,
            x: -113.70541462763414,
            y: -71.63866878448928
        },
        {
            type: 'inventor',
            id: '5873096-1',
            name: 'Peter S. Lim',
            numPatents: 19,
            x: -41.4971575994779,
            y: -229.8634738486308
        },
        {
            type: 'inventor',
            id: '6732111-4',
            name: 'Peter Siam Sy Lim III',
            numPatents: 1,
            x: -119.68776087181291,
            y: -264.7441153149242
        },
        {
            type: 'inventor',
            id: '6850895-3',
            name: 'Peter Siam Sy Lim, III',
            numPatents: 3,
            x: -137.51327861868992,
            y: -253.05015263416013
        },
        {
            type: 'inventor',
            id: '7159750-4',
            name: 'Philip Roy',
            numPatents: 45,
            x: -55.915331837334584,
            y: 265.4527399859059
        },
        {
            type: 'inventor',
            id: '6103033-7',
            name: 'Phillip John Plante',
            numPatents: 76,
            x: -89.56172634273938,
            y: 128.49359954020937
        },
        {
            type: 'inventor',
            id: '5978829-1',
            name: 'Pi-Yu Chung',
            numPatents: 15,
            x: 79.03330309768333,
            y: -166.89620301402695
        },
        {
            type: 'inventor',
            id: '6092083-2',
            name: 'Prashant Chatterjee',
            numPatents: 12,
            x: -127.98166248978045,
            y: -226.09590322983067
        },
        {
            type: 'inventor',
            id: '7340411-1',
            name: 'Rachael L. Cook',
            numPatents: 1,
            x: 145.5816434953685,
            y: -185.9115227848251
        },
        {
            type: 'inventor',
            id: '4872603-1',
            name: 'Ralph Stearns',
            numPatents: 82,
            x: -17.638261139740077,
            y: 311.87440096016235
        },
        {
            type: 'inventor',
            id: '6836540-6',
            name: 'Randy Hoffman',
            numPatents: 66,
            x: -96.67915062271523,
            y: -18.863267642338357
        },
        {
            type: 'inventor',
            id: '4798594-1',
            name: 'Richard A. Hillstead',
            numPatents: 56,
            x: 220.9404304325887,
            y: 155.9212493217171
        },
        {
            type: 'inventor',
            id: '5097122-2',
            name: 'Richard E. Purvis',
            numPatents: 22,
            x: -231.6221173485312,
            y: 58.532788593406465
        },
        {
            type: 'inventor',
            id: '6268803-3',
            name: 'Richard Gorman',
            numPatents: 10,
            x: 76.71667439228202,
            y: -247.40756847543366
        },
        {
            type: 'inventor',
            id: '5271543-1',
            name: 'Richard L. Grant',
            numPatents: 22,
            x: 108.37790261638156,
            y: -109.53429774011205
        },
        {
            type: 'inventor',
            id: '6092083-1',
            name: 'Robert A. Brodersen',
            numPatents: 21,
            x: -116.78677329380332,
            y: -211.74312172754898
        },
        {
            type: 'inventor',
            id: '5873096-2',
            name: 'Robert Broderson',
            numPatents: 3,
            x: 32.470564362710334,
            y: -212.3565037616904
        },
        {
            type: 'inventor',
            id: '5963953-1',
            name: 'Robert Cram',
            numPatents: 3,
            x: 39.731656228036044,
            y: -159.70117419662853
        },
        {
            type: 'inventor',
            id: '4362387-1',
            name: 'Roy Clark',
            numPatents: 23,
            x: -143.38065467805583,
            y: -83.18646932332894
        },
        {
            type: 'inventor',
            id: '5417770-8',
            name: 'Ryo Hayashi',
            numPatents: 71,
            x: 109.56900270181322,
            y: 94.2690776193339
        },
        {
            type: 'inventor',
            id: '6081875-2',
            name: 'Sanjoy Chatterjee',
            numPatents: 2,
            x: -168.55351719373274,
            y: -55.00391327710072
        },
        {
            type: 'inventor',
            id: '5416255-1',
            name: 'Scott A. Bergemann',
            numPatents: 106,
            x: 236.9843658437831,
            y: -154.5385328936314
        },
        {
            type: 'inventor',
            id: '6724399-2',
            name: 'Shankar S. Nathan',
            numPatents: 1,
            x: 8.017651326713803,
            y: -132.67439205632664
        },
        {
            type: 'inventor',
            id: '6804330-1',
            name: 'Shannon Jones',
            numPatents: 5,
            x: 71.13206981844631,
            y: -258.49934239941376
        },
        {
            type: 'inventor',
            id: '6887736-4',
            name: 'Shanthi Ganesan',
            numPatents: 4,
            x: -36.994882107564074,
            y: 176.4435210395316
        },
        {
            type: 'inventor',
            id: '6183589-1',
            name: 'Shin Kim',
            numPatents: 47,
            x: -287.672664666798,
            y: 45.812611641390674
        },
        {
            type: 'inventor',
            id: '6654032-4',
            name: 'Songxiang Wei',
            numPatents: 7,
            x: 132.3199171044082,
            y: 86.33369201811875
        },
        {
            type: 'inventor',
            id: '6783524-1',
            name: 'Stephen C. Anderson',
            numPatents: 1,
            x: 62.6200720139505,
            y: 302.49618857083027
        },
        {
            type: 'inventor',
            id: '5774357-1',
            name: 'Steven M. Hoffberg',
            numPatents: 106,
            x: -298.14981578939944,
            y: 88.5680351045039
        },
        {
            type: 'inventor',
            id: '5594169-2',
            name: 'Steven P. Hotelling',
            numPatents: 306,
            x: 178.31356224420756,
            y: -255.43042507480578
        },
        {
            type: 'inventor',
            id: '6526335-2',
            name: 'Susan M. Treyz',
            numPatents: 15,
            x: -279.2338471304183,
            y: 139.99257336727945
        },
        {
            type: 'inventor',
            id: '6639246-1',
            name: 'Tatsuya Honda',
            numPatents: 109,
            x: 250.0602077201684,
            y: 66.33401322268637
        },
        {
            type: 'inventor',
            id: '5345639-6',
            name: 'Tatsuya Iwasaki',
            numPatents: 116,
            x: 86.3336134471773,
            y: 157.82593462060743
        },
        {
            type: 'inventor',
            id: '6324568-1',
            name: 'Thanh Diec',
            numPatents: 3,
            x: -78.03147469125184,
            y: -272.5886606861718
        },
        {
            type: 'inventor',
            id: '5715450-2',
            name: 'Thomas M. Rothwein',
            numPatents: 13,
            x: -19.165101013241493,
            y: -208.1804640840619
        },
        {
            type: 'inventor',
            id: 'RE39841-4',
            name: 'Todd Phillip Omaits',
            numPatents: 7,
            x: 129.99306854625007,
            y: -22.049901615038408
        },
        {
            type: 'inventor',
            id: '6850949-3',
            name: 'Tom Abshire',
            numPatents: 1,
            x: 140.26566902715228,
            y: -153.3917294843958
        },
        {
            type: 'inventor',
            id: '7061014-6',
            name: 'Toshio Kamiya',
            numPatents: 25,
            x: 9.126271276254377,
            y: 101.82298630556326
        },
        {
            type: 'inventor',
            id: '6718361-1',
            name: 'Vijay R. Basani',
            numPatents: 9,
            x: -201.38227173205027,
            y: 208.74327049926328
        },
        {
            type: 'inventor',
            id: '6718361-5',
            name: 'Vitaly S. Revsin',
            numPatents: 13,
            x: -198.70473078024983,
            y: 152.4052211665943
        },
        {
            type: 'inventor',
            id: '6978921-3',
            name: 'William B. Weisenburgh, II',
            numPatents: 152,
            x: 248.24393906293733,
            y: -90.29342524369324
        },
        {
            type: 'inventor',
            id: '5257971-2',
            name: 'William P. Van Antwerp',
            numPatents: 69,
            x: -243.520991916779,
            y: 23.417679977911327
        },
        {
            type: 'inventor',
            id: '6829655-1',
            name: 'Xiaofei Huang',
            numPatents: 5,
            x: 89.9887416103856,
            y: -187.79413998163483
        },
        {
            type: 'inventor',
            id: '5283452-1',
            name: 'Yi-Chi Shih',
            numPatents: 33,
            x: -323.71359641871163,
            y: 23.908936586494086
        },
        {
            type: 'inventor',
            id: '5901896-1',
            name: 'Yoram Gal',
            numPatents: 76,
            x: -107.23225510620489,
            y: 124.73541739026112
        },
        {
            type: 'inventor',
            id: '4573472-1',
            name: 'Yoshihiro Ito',
            numPatents: 189,
            x: 118.20250938383892,
            y: 287.9615326434283
        },
        {
            type: 'inventor',
            id: '5855957-1',
            name: 'Zheng Yuan',
            numPatents: 58,
            x: 138.0920695217319,
            y: 124.0644011797693
        },
        {
            type: 'assignee',
            id: 'org_Z59aUBGtZ9P5QzdFiKmZ',
            name: 'Ablaise Limited',
            numPatents: 2,
            x: -190.4821130010742,
            y: -236.53619698539487
        },
        {
            type: 'assignee',
            id: 'org_4zO2Bc08x56XjDq5TeBp',
            name: 'Accenture LLP',
            numPatents: 210,
            x: 172.86602300833957,
            y: 253.70330815416585
        },
        {
            type: 'assignee',
            id: 'org_bwq83jbccKqF4jJrPcaR',
            name: 'Advanced Bionics AG',
            numPatents: 633,
            x: -176.91468472981555,
            y: 233.6338835259619
        },
        {
            type: 'assignee',
            id: 'org_IDUbS09ZR0JhJ8jFEptT',
            name: 'Apple Inc.',
            numPatents: 21023,
            x: 151.68246641578867,
            y: -222.1248748814489
        },
        {
            type: 'assignee',
            id: 'org_EhYFPIJEmYQYRoYvsnpy',
            name: 'Canon Kabushiki Kaisha',
            numPatents: 74596,
            x: 49.48223920573296,
            y: 134.09228873115592
        },
        {
            type: 'assignee',
            id: 'org_Imeg9W6P1TE6I2QutS4y',
            name: 'Casio Computer Co., Ltd.',
            numPatents: 4521,
            x: -179.8175934120515,
            y: -142.71828852921044
        },
        {
            type: 'assignee',
            id: 'org_8csMgtgnN0mREZpNP1Ji',
            name: 'Cerebral Vascular Applications, Inc.',
            numPatents: 4,
            x: 268.8004541444387,
            y: 164.52369478315683
        },
        {
            type: 'assignee',
            id: 'org_0eTr3XIBjAKpXkC6823r',
            name: 'Cermet, Inc.',
            numPatents: 7,
            x: -48.40372768955156,
            y: 205.44025883826066
        },
        {
            type: 'assignee',
            id: 'org_107WKNPbvDDKrZBlmw8U',
            name: 'Contigo Software, Inc.',
            numPatents: 2,
            x: 299.3174359095953,
            y: 48.03492469800833
        },
        {
            type: 'assignee',
            id: 'org_ppElkEtQvFtG6A4754UI',
            name: 'Eastman Kodak Company',
            numPatents: 21539,
            x: 211.37525941352786,
            y: 217.58287786532108
        },
        {
            type: 'assignee',
            id: 'org_0jPWM7YqhtXm0lm3fm1Y',
            name: 'EMC Corporation',
            numPatents: 4976,
            x: -189.70156274838973,
            y: -110.01559890437628
        },
        {
            type: 'assignee',
            id: 'org_Wh2cnOIzKlhzjuqVmOqY',
            name: 'Enecto AB',
            numPatents: 1,
            x: 243.6765412246258,
            y: -131.2090311866099
        },
        {
            type: 'assignee',
            id: 'org_Xu6gXSsltDBZTAhMFBWD',
            name: 'Ethicon Endo-Surger, Inc.',
            numPatents: 3,
            x: 224.71243580316477,
            y: 39.60984252547865
        },
        {
            type: 'assignee',
            id: 'org_NfKBB9TWF4As8TSasJ5n',
            name: 'Ethicon Endo-Surgery, Inc.',
            numPatents: 2194,
            x: 171.0743702247664,
            y: -55.03680709894609
        },
        {
            type: 'assignee',
            id: 'org_vS6rcKyc2qN3rFdX0P2K',
            name: 'Hewlett-Packard Development Company, L.P.',
            numPatents: 35118,
            x: -90.3103968526694,
            y: -50.0521628929454
        },
        {
            type: 'assignee',
            id: 'per_tX2e2yVLgyNgobEpzWKT',
            name: 'Hideo Ohno',
            numPatents: 4,
            x: -39.53612842704436,
            y: -20.270273354977252
        },
        {
            type: 'assignee',
            id: 'org_MKvbnCcyPudXexUvsSwF',
            name: "Holden's Foundation Seeds, Inc.",
            numPatents: 83,
            x: 240.0999059851908,
            y: -206.02637614806125
        },
        {
            type: 'assignee',
            id: 'org_fA0azqoBGEzoPoy85Jyv',
            name: 'INTUITIVE SURGICAL OPERATIONS, INC.',
            numPatents: 1202,
            x: 15.378862865447624,
            y: 290.2178222875223
        },
        {
            type: 'assignee',
            id: 'org_DttZMvkyvW3fV6oCUMTF',
            name: 'Japan Science and Technology Agency',
            numPatents: 1157,
            x: 13.173450731061086,
            y: 56.48614099577767
        },
        {
            type: 'assignee',
            id: 'org_c5vyBzK7iikkU4DjQFHT',
            name: 'Japan Science and Technology Corporation',
            numPatents: 418,
            x: 63.56317058275,
            y: 6.273673519090753
        },
        {
            type: 'assignee',
            id: 'org_FvgvGFe8JZ0iYlZ80weF',
            name: 'Koninklijke Philips Electronics N.V.',
            numPatents: 17138,
            x: -123.24179123790191,
            y: 270.99746548441016
        },
        {
            type: 'assignee',
            id: 'org_XcqCjtT8pi8Mk3UjQlDt',
            name: 'LG Electronics Inc.',
            numPatents: 32725,
            x: -277.3460229984558,
            y: 7.13369822254301
        },
        {
            type: 'assignee',
            id: 'per_DIjUTM7lHhDsAz2u8jiO',
            name: 'Masashi Kawasaki',
            numPatents: 3,
            x: 19.895436596662908,
            y: -10.717178250900918
        },
        {
            type: 'assignee',
            id: 'org_GVMlLVbwCDSiqP9Og8Tn',
            name: 'Medtronic MiniMed, Inc.',
            numPatents: 800,
            x: -183.74023419057417,
            y: 37.687218769839085
        },
        {
            type: 'assignee',
            id: 'org_Qw8EsrN0M52nVQUM6vsV',
            name: 'Monsanto Technology LLC',
            numPatents: 8689,
            x: 19.763901488352673,
            y: 196.62236862589774
        },
        {
            type: 'assignee',
            id: 'org_j5U5IEa1FIbgtr7iNsQM',
            name: 'Murata Manufacturing Co., Ltd.',
            numPatents: 7342,
            x: 87.64878197108817,
            y: 291.1023195872352
        },
        {
            type: 'assignee',
            id: 'org_1p4FWEoItjyKbwTpCJol',
            name: 'Network Appliance, Inc.',
            numPatents: 530,
            x: -222.2920372118052,
            y: 149.08372155272062
        },
        {
            type: 'assignee',
            id: 'org_ATOWHd4GGaoh14zutXq7',
            name: 'Power Medical Interventions, Inc.',
            numPatents: 30,
            x: 108.88110399749706,
            y: 186.8533878262659
        },
        {
            type: 'assignee',
            id: 'org_k8V7c5gnmC7SVmup5Vu7',
            name: 'Raindance Communications, Inc.',
            numPatents: 3,
            x: 65.15717694264417,
            y: 83.41943637820401
        },
        {
            type: 'assignee',
            id: 'org_242hJegwfQCeP9hsfwpW',
            name: 'Right Now Technologies, Inc.',
            numPatents: 2,
            x: 186.81965281602268,
            y: -183.4017025145853
        },
        {
            type: 'assignee',
            id: 'org_6r9t7ZA6YT031Od4kMPg',
            name: 'Rightnow Technologies, Inc.',
            numPatents: 10,
            x: -231.73615880122236,
            y: -74.09916970934252
        },
        {
            type: 'assignee',
            id: 'org_2IF97zVymSuraSnUAXmq',
            name: 'Sanyo Electric Co., Ltd.',
            numPatents: 8383,
            x: -283.9028253608946,
            y: -127.87253381969171
        },
        {
            type: 'assignee',
            id: 'org_plZbLxiysESbaI9pOeym',
            name: 'SEMICONDUCTOR ENERGY LABORATORY CO., LTD.',
            numPatents: 13885,
            x: 256.2283987637905,
            y: 124.46141696066522
        },
        {
            type: 'assignee',
            id: 'org_CMWcoCJWPOfisLWrKvyd',
            name: 'Sharp Kabushiki Kaisha',
            numPatents: 22540,
            x: 4.095560406482671,
            y: -32.13618482579938
        },
        {
            type: 'assignee',
            id: 'org_83NNgJrP5lkIN876kNeG',
            name: 'Siebel Systems, Inc.',
            numPatents: 298,
            x: -33.91994752314842,
            y: -212.5994288988811
        },
        {
            type: 'assignee',
            id: 'org_J8VnAzFqEjWgxq4ev71z',
            name: 'Starion Instruments Corporation',
            numPatents: 20,
            x: 178.98416654116346,
            y: 169.54821211190276
        },
        {
            type: 'assignee',
            id: 'org_m2tNPJkA2g1AWOc7uzS1',
            name: 'TheraSense, Inc.',
            numPatents: 53,
            x: -125.9145998460851,
            y: 132.41739054516117
        },
        {
            type: 'assignee',
            id: 'org_JjrM6UmeOY0Q5MmoNiP8',
            name: 'TOKYO INSTITUTE OF TECHNOLOGY',
            numPatents: 395,
            x: 18.61413008116646,
            y: 165.21253699554214
        },
        {
            type: 'assignee',
            id: 'org_ewVsCutpRzD9pT07kBoE',
            name: 'Tyco Healtcare Group LP',
            numPatents: 5,
            x: -67.25430526742107,
            y: 308.6149282041579
        },
        {
            type: 'assignee',
            id: 'org_5wNNrJ4zFQ5KQ8OWnzRC',
            name: 'United States Surtical Corporation',
            numPatents: 1,
            x: 282.781009224431,
            y: -52.981590115087144
        },
        {
            type: 'assignee',
            id: 'org_3vI2Z5kC1SaSlbUBoOBT',
            name: 'WebEx Communications, Inc.',
            numPatents: 22,
            x: 187.36763951128714,
            y: 101.20849847080181
        }
    ],
    links: [
        { source: '6516227', target: '5358514-3' },
        { source: '6516227', target: '5755737-3' },
        { source: '6516227', target: '5948006-1' },
        { source: '6516227', target: '6516227-4' },
        { source: '6516227', target: 'org_bwq83jbccKqF4jJrPcaR' },
        { source: '6535909', target: '6535909-1' },
        { source: '6535909', target: 'org_107WKNPbvDDKrZBlmw8U' },
        { source: '6549908', target: '6393605-1' },
        { source: '6549908', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6553563', target: '5715450-1' },
        { source: '6553563', target: '5715450-2' },
        { source: '6553563', target: '6553563-3' },
        { source: '6553563', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6558320', target: '4809697-1' },
        { source: '6558320', target: '4863425-2' },
        { source: '6558320', target: '5097122-2' },
        { source: '6558320', target: 'org_GVMlLVbwCDSiqP9Og8Tn' },
        { source: '6558351', target: '5097122-2' },
        { source: '6558351', target: '5237178-2' },
        { source: '6558351', target: '5257971-2' },
        { source: '6558351', target: '6424847-3' },
        { source: '6558351', target: '6558351-1' },
        { source: '6558351', target: '6558351-2' },
        { source: '6558351', target: '6558351-3' },
        { source: '6558351', target: '6558351-8' },
        { source: '6558351', target: 'org_GVMlLVbwCDSiqP9Og8Tn' },
        { source: '6560461', target: '5918159-1' },
        { source: '6560461', target: '5918159-2' },
        { source: '6563174', target: '4253061-3' },
        { source: '6563174', target: '4902671-3' },
        { source: '6563174', target: '4997262-1' },
        { source: '6563174', target: '5925224-1' },
        { source: '6563174', target: 'org_CMWcoCJWPOfisLWrKvyd' },
        { source: '6563174', target: 'per_DIjUTM7lHhDsAz2u8jiO' },
        { source: '6563174', target: 'per_tX2e2yVLgyNgobEpzWKT' },
        { source: '6565509', target: '4082602-2' },
        { source: '6565509', target: '5041086-4' },
        { source: '6565509', target: '5306623-3' },
        { source: '6565509', target: '5533238-1' },
        { source: '6565509', target: '5534132-1' },
        { source: '6565509', target: '5616532-3' },
        { source: '6565509', target: '5722997-2' },
        { source: '6565509', target: '5901896-1' },
        { source: '6565509', target: '6103033-7' },
        { source: '6565509', target: '6175752-9' },
        { source: '6565509', target: 'org_m2tNPJkA2g1AWOc7uzS1' },
        { source: '6571282', target: '6081518-1' },
        { source: '6571282', target: 'org_4zO2Bc08x56XjDq5TeBp' },
        { source: '6574635', target: '5715450-1' },
        { source: '6574635', target: '5715450-2' },
        { source: '6574635', target: '5963953-3' },
        { source: '6574635', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6577726', target: '6577726-1' },
        { source: '6577726', target: '6577726-2' },
        { source: '6577726', target: '6577726-3' },
        { source: '6577726', target: '6577726-4' },
        { source: '6577726', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6587835', target: '6433921-2' },
        { source: '6587835', target: '6526335-2' },
        { source: '6601087', target: '5261037-2' },
        { source: '6601087', target: '6601087-2' },
        { source: '6601087', target: 'org_3vI2Z5kC1SaSlbUBoOBT' },
        { source: '6602252', target: '4890611-3' },
        { source: '6602252', target: 'org_J8VnAzFqEjWgxq4ev71z' },
        { source: '6604117', target: '5873096-1' },
        { source: '6604117', target: '5873096-2' },
        { source: '6604117', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6604128', target: '6324568-1' },
        { source: '6604128', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6606744', target: '6606744-1' },
        { source: '6606744', target: 'org_4zO2Bc08x56XjDq5TeBp' },
        { source: '6609150', target: '5963953-1' },
        { source: '6609150', target: '6336137-1' },
        { source: '6609150', target: '6336137-3' },
        { source: '6609150', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6621834', target: '5944791-1' },
        { source: '6621834', target: '6621834-2' },
        { source: '6621834', target: 'org_k8V7c5gnmC7SVmup5Vu7' },
        { source: '6641533', target: '4809697-1' },
        { source: '6641533', target: '4863425-2' },
        { source: '6641533', target: '5097122-2' },
        { source: '6641533', target: 'org_GVMlLVbwCDSiqP9Og8Tn' },
        { source: '6644532', target: '4127227-1' },
        { source: '6644532', target: '4283024-1' },
        { source: '6644532', target: '5176502-3' },
        { source: '6644532', target: 'D263987-1' },
        { source: '6644532', target: 'D304234-2' },
        { source: '6644532', target: 'RE28932-2' },
        { source: '6644532', target: 'org_5wNNrJ4zFQ5KQ8OWnzRC' },
        { source: '6654032', target: '5261037-2' },
        { source: '6654032', target: '5855957-1' },
        { source: '6654032', target: '6601087-2' },
        { source: '6654032', target: '6654032-4' },
        { source: '6654032', target: 'org_3vI2Z5kC1SaSlbUBoOBT' },
        { source: '6656193', target: '4892244-4' },
        { source: '6656193', target: '5271543-1' },
        { source: '6656193', target: '5329655-1' },
        { source: '6656193', target: '5409498-4' },
        { source: '6656193', target: '5707369-2' },
        { source: '6656193', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '6665648', target: '6665648-1' },
        { source: '6665648', target: '6665648-2' },
        { source: '6665648', target: '6665648-3' },
        { source: '6665648', target: '6665648-4' },
        { source: '6665648', target: '6665648-5' },
        { source: '6665648', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6665655', target: '6434550-1' },
        { source: '6665655', target: '6665655-2' },
        { source: '6665655', target: 'org_6r9t7ZA6YT031Od4kMPg' },
        { source: '6684438', target: '5873096-1' },
        { source: '6684438', target: '6092083-1' },
        { source: '6684438', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6690387', target: '6281898-2' },
        { source: '6690387', target: '6690387-1' },
        { source: '6690387', target: 'org_FvgvGFe8JZ0iYlZ80weF' },
        { source: '6693232', target: '5416255-1' },
        { source: '6693232', target: 'org_MKvbnCcyPudXexUvsSwF' },
        { source: '6698643', target: '6264087-1' },
        { source: '6698643', target: 'org_ATOWHd4GGaoh14zutXq7' },
        { source: '6711565', target: '6711565-1' },
        { source: '6711565', target: '6711565-2' },
        { source: '6711565', target: '6711565-3' },
        { source: '6711565', target: '6711565-4' },
        { source: '6711565', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6716233', target: '6264087-1' },
        { source: '6716233', target: 'org_ATOWHd4GGaoh14zutXq7' },
        { source: '6718361', target: '6223205-2' },
        { source: '6718361', target: '6370584-1' },
        { source: '6718361', target: '6718361-1' },
        { source: '6718361', target: '6718361-2' },
        { source: '6718361', target: '6718361-3' },
        { source: '6718361', target: '6718361-4' },
        { source: '6718361', target: '6718361-5' },
        { source: '6718361', target: '6718361-8' },
        { source: '6718361', target: 'org_1p4FWEoItjyKbwTpCJol' },
        { source: '6724399', target: '6724399-1' },
        { source: '6724399', target: '6724399-2' },
        { source: '6724399', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6727522', target: '4253061-3' },
        { source: '6727522', target: '4902671-3' },
        { source: '6727522', target: 'org_c5vyBzK7iikkU4DjQFHT' },
        { source: '6728702', target: '6577726-2' },
        { source: '6728702', target: '6711565-1' },
        { source: '6728702', target: '6711565-2' },
        { source: '6728702', target: '6711565-3' },
        { source: '6728702', target: '6711565-4' },
        { source: '6728702', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6728960', target: '6393605-1' },
        { source: '6728960', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6732095', target: '5243622-2' },
        { source: '6732095', target: '6732095-1' },
        { source: '6732095', target: '6732095-2' },
        { source: '6732095', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6732100', target: '5715450-2' },
        { source: '6732100', target: '6577726-2' },
        { source: '6732100', target: '6577726-4' },
        { source: '6732100', target: '6665648-1' },
        { source: '6732100', target: '6732100-4' },
        { source: '6732100', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6732111', target: '4951278-2' },
        { source: '6732111', target: '6092083-1' },
        { source: '6732111', target: '6092083-2' },
        { source: '6732111', target: '6732111-4' },
        { source: '6732111', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6754681', target: '5873096-1' },
        { source: '6754681', target: '6092083-1' },
        { source: '6754681', target: '6092083-2' },
        { source: '6754681', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6763351', target: '6711565-1' },
        { source: '6763351', target: '6711565-2' },
        { source: '6763351', target: '6711565-3' },
        { source: '6763351', target: '6711565-4' },
        { source: '6763351', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6763501', target: '5261037-2' },
        { source: '6763501', target: '5855957-1' },
        { source: '6763501', target: '6601087-2' },
        { source: '6763501', target: '6654032-4' },
        { source: '6763501', target: 'org_3vI2Z5kC1SaSlbUBoOBT' },
        { source: '6768904', target: '6183589-1' },
        { source: '6768904', target: 'org_XcqCjtT8pi8Mk3UjQlDt' },
        { source: '6782383', target: '6711565-1' },
        { source: '6782383', target: '6711565-2' },
        { source: '6782383', target: '6711565-3' },
        { source: '6782383', target: '6711565-4' },
        { source: '6782383', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6783524', target: '5859916-3' },
        { source: '6783524', target: '6783524-1' },
        { source: '6783524', target: 'org_fA0azqoBGEzoPoy85Jyv' },
        { source: '6786382', target: '6530932-2' },
        { source: '6786382', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '6804330', target: '5715450-1' },
        { source: '6804330', target: '6268803-3' },
        { source: '6804330', target: '6804330-1' },
        { source: '6804330', target: '6804330-4' },
        { source: '6804330', target: '6804330-5' },
        { source: '6804330', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6809653', target: '4082097-1' },
        { source: '6809653', target: '4561444-1' },
        { source: '6809653', target: '4809697-1' },
        { source: '6809653', target: '4863425-2' },
        { source: '6809653', target: '5097122-2' },
        { source: '6809653', target: '5237178-2' },
        { source: '6809653', target: '5382232-1' },
        { source: '6809653', target: '6809653-9' },
        { source: '6809653', target: 'D423761-3' },
        { source: '6809653', target: 'org_GVMlLVbwCDSiqP9Og8Tn' },
        { source: '6826565', target: '6295530-1' },
        { source: '6826565', target: '6295530-2' },
        { source: '6826565', target: 'org_Z59aUBGtZ9P5QzdFiKmZ' },
        { source: '6826582', target: '4362387-1' },
        { source: '6826582', target: '6081875-2' },
        { source: '6826582', target: '6826582-2' },
        { source: '6826582', target: 'org_0jPWM7YqhtXm0lm3fm1Y' },
        { source: '6826745', target: '6233617-2' },
        { source: '6826745', target: '6577726-2' },
        { source: '6826745', target: '6826745-3' },
        { source: '6826745', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6829655', target: '5978829-1' },
        { source: '6829655', target: '6004276-13' },
        { source: '6829655', target: '6829655-1' },
        { source: '6829655', target: '6829655-2' },
        { source: '6829655', target: '6829655-3' },
        { source: '6829655', target: '6829655-6' },
        { source: '6829655', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6830174', target: '4798594-1' },
        { source: '6830174', target: '5465895-1' },
        { source: '6830174', target: 'org_8csMgtgnN0mREZpNP1Ji' },
        { source: '6842748', target: '6434550-1' },
        { source: '6842748', target: '6665655-2' },
        { source: '6842748', target: 'org_6r9t7ZA6YT031Od4kMPg' },
        { source: '6843403', target: '6264087-1' },
        { source: '6843403', target: 'org_ATOWHd4GGaoh14zutXq7' },
        { source: '6850252', target: '5774357-1' },
        { source: '6850895', target: '6092083-1' },
        { source: '6850895', target: '6092083-2' },
        { source: '6850895', target: '6577726-2' },
        { source: '6850895', target: '6850895-3' },
        { source: '6850895', target: '6850895-5' },
        { source: '6850895', target: 'org_83NNgJrP5lkIN876kNeG' },
        { source: '6850949', target: '6850949-1' },
        { source: '6850949', target: '6850949-2' },
        { source: '6850949', target: '6850949-3' },
        { source: '6850949', target: 'org_242hJegwfQCeP9hsfwpW' },
        { source: '6852915', target: '5276262-2' },
        { source: '6852915', target: 'org_MKvbnCcyPudXexUvsSwF' },
        { source: '6905057', target: '5897563-4' },
        { source: '6905057', target: '6905057-2' },
        { source: '6905057', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '6959852', target: '5632432-4' },
        { source: '6959852', target: '6905057-2' },
        { source: '6959852', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '6964363', target: '5409498-4' },
        { source: '6964363', target: '6964363-2' },
        { source: '6964363', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '6978921', target: '5632432-4' },
        { source: '6978921', target: '6905057-2' },
        { source: '6978921', target: '6978921-3' },
        { source: '6978921', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '6981628', target: '5409498-4' },
        { source: '6981628', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7000818', target: '5632432-4' },
        { source: '7000818', target: '6905057-2' },
        { source: '7000818', target: '7000818-3' },
        { source: '7000818', target: 'org_Xu6gXSsltDBZTAhMFBWD' },
        { source: '7025743', target: '4082097-1' },
        { source: '7025743', target: '4561444-1' },
        { source: '7025743', target: '4809697-1' },
        { source: '7025743', target: '5176644-1' },
        { source: '7025743', target: '5382232-1' },
        { source: '7025743', target: '6551276-10' },
        { source: '7025743', target: '6551276-11' },
        { source: '7025743', target: '6551276-12' },
        { source: '7025743', target: '6551276-3' },
        { source: '7025743', target: '6551276-4' },
        { source: '7025743', target: '6551276-8' },
        { source: '7025743', target: '6551276-9' },
        { source: '7025743', target: 'org_GVMlLVbwCDSiqP9Og8Tn' },
        { source: '7049190', target: '6080998-3' },
        { source: '7049190', target: '6914182-1' },
        { source: '7049190', target: 'org_2IF97zVymSuraSnUAXmq' },
        { source: '7055731', target: '5632432-4' },
        { source: '7055731', target: '6905057-2' },
        { source: '7055731', target: '6978921-3' },
        { source: '7055731', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7061014', target: '4486720-1' },
        { source: '7061014', target: '4703019-2' },
        { source: '7061014', target: '5272069-6' },
        { source: '7061014', target: '5622653-1' },
        { source: '7061014', target: '7061014-4' },
        { source: '7061014', target: '7061014-6' },
        { source: '7061014', target: 'org_DttZMvkyvW3fV6oCUMTF' },
        { source: '7064346', target: '4253061-3' },
        { source: '7064346', target: '4902671-3' },
        { source: '7064346', target: 'org_DttZMvkyvW3fV6oCUMTF' },
        { source: '7105868', target: '5863326-1' },
        { source: '7105868', target: '6887736-4' },
        { source: '7105868', target: 'org_0eTr3XIBjAKpXkC6823r' },
        { source: '7111769', target: '5409498-4' },
        { source: '7111769', target: '5897563-4' },
        { source: '7111769', target: '6530932-2' },
        { source: '7111769', target: '6905057-2' },
        { source: '7111769', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7147138', target: '6905057-2' },
        { source: '7147138', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7159750', target: '4872603-1' },
        { source: '7159750', target: '5713911-1' },
        { source: '7159750', target: '5713911-2' },
        { source: '7159750', target: '7159750-4' },
        { source: '7159750', target: '7159750-5' },
        { source: '7159750', target: 'org_ewVsCutpRzD9pT07kBoE' },
        { source: '7211825', target: '5081422-1' },
        { source: '7211825', target: '5283452-1' },
        { source: '7211825', target: '5703357-3' },
        { source: '7211825', target: '6593834-2' },
        { source: '7246734', target: '6905057-2' },
        { source: '7246734', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7282782', target: '6144679-1' },
        { source: '7282782', target: '6152987-2' },
        { source: '7282782', target: '6836540-6' },
        { source: '7282782', target: 'org_vS6rcKyc2qN3rFdX0P2K' },
        { source: '7297977', target: '6144679-1' },
        { source: '7297977', target: '6152987-2' },
        { source: '7297977', target: '6836540-6' },
        { source: '7297977', target: 'org_vS6rcKyc2qN3rFdX0P2K' },
        { source: '7323356', target: '4486720-1' },
        { source: '7323356', target: '4703019-2' },
        { source: '7323356', target: '5272069-6' },
        { source: '7323356', target: '5622653-1' },
        { source: '7323356', target: '7061014-4' },
        { source: '7323356', target: '7323356-5' },
        { source: '7323356', target: 'org_DttZMvkyvW3fV6oCUMTF' },
        { source: '7340411', target: '7340411-1' },
        { source: '7380695', target: '5409498-4' },
        { source: '7380695', target: '5632432-4' },
        { source: '7380695', target: '6905057-2' },
        { source: '7380695', target: '7083075-3' },
        { source: '7380695', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7380696', target: '5632432-4' },
        { source: '7380696', target: '6905057-2' },
        { source: '7380696', target: '7083075-3' },
        { source: '7380696', target: '7380696-3' },
        { source: '7380696', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7385224', target: '5041200-1' },
        { source: '7385224', target: '5041200-4' },
        { source: '7385224', target: '7385224-2' },
        { source: '7385224', target: '7385224-3' },
        { source: '7385224', target: 'org_Imeg9W6P1TE6I2QutS4y' },
        { source: '7402506', target: '5512426-1' },
        { source: '7402506', target: '6048110-3' },
        { source: '7402506', target: '7402506-2' },
        { source: '7402506', target: 'org_ppElkEtQvFtG6A4754UI' },
        { source: '7404508', target: '4682596-2' },
        { source: '7404508', target: '5117838-1' },
        { source: '7404508', target: '5715675-2' },
        { source: '7404508', target: '6912839-2' },
        { source: '7404508', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7411209', target: '5345639-6' },
        { source: '7411209', target: '5417770-8' },
        { source: '7411209', target: '7082832-4' },
        { source: '7411209', target: 'org_EhYFPIJEmYQYRoYvsnpy' },
        { source: '7453065', target: '4072236-1' },
        { source: '7453065', target: '4356455-3' },
        { source: '7453065', target: '4703019-2' },
        { source: '7453065', target: '7061014-6' },
        { source: '7453065', target: 'org_EhYFPIJEmYQYRoYvsnpy' },
        { source: '7453065', target: 'org_JjrM6UmeOY0Q5MmoNiP8' },
        { source: '7453087', target: '5345639-6' },
        { source: '7453087', target: 'org_EhYFPIJEmYQYRoYvsnpy' },
        { source: '7462862', target: '6144679-1' },
        { source: '7462862', target: '6836540-6' },
        { source: '7462862', target: 'org_vS6rcKyc2qN3rFdX0P2K' },
        { source: '7464846', target: '4403687-2' },
        { source: '7464846', target: '5897563-4' },
        { source: '7464846', target: '6905057-2' },
        { source: '7464846', target: '7083075-3' },
        { source: '7464846', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7468304', target: '6863363-1' },
        { source: '7468304', target: '7468304-1' },
        { source: '7468304', target: 'org_EhYFPIJEmYQYRoYvsnpy' },
        { source: '7501293', target: '4224725-1' },
        { source: '7501293', target: '4573472-1' },
        { source: '7501293', target: 'org_j5U5IEa1FIbgtr7iNsQM' },
        { source: '7506791', target: '4403687-2' },
        { source: '7506791', target: '4972224-1' },
        { source: '7506791', target: '6905057-2' },
        { source: '7506791', target: 'RE39841-4' },
        { source: '7506791', target: 'org_NfKBB9TWF4As8TSasJ5n' },
        { source: '7620655', target: '5948789-1' },
        { source: '7620655', target: '7620655-2' },
        { source: '7620655', target: 'org_Wh2cnOIzKlhzjuqVmOqY' },
        { source: '7632985', target: '7078503-3' },
        { source: '7632985', target: '7608761-4' },
        { source: '7632985', target: '7632985-3' },
        { source: '7632985', target: '7632985-4' },
        { source: '7632985', target: 'org_Qw8EsrN0M52nVQUM6vsV' },
        { source: '7663607', target: '5594169-2' },
        { source: '7663607', target: '6658577-1' },
        { source: '7663607', target: '7154477-2' },
        { source: '7663607', target: 'org_IDUbS09ZR0JhJ8jFEptT' },
        { source: '7674650', target: '6639246-1' },
        { source: '7674650', target: '6838397-3' },
        { source: '7674650', target: '7205716-5' },
        { source: '7674650', target: 'org_plZbLxiysESbaI9pOeym' },
        { source: '7732819', target: '6639246-1' },
        { source: '7732819', target: '6838397-3' },
        { source: '7732819', target: '7205716-5' },
        { source: '7732819', target: 'org_plZbLxiysESbaI9pOeym' },
        { source: '8053184', target: '7078503-3' },
        { source: '8053184', target: '7608761-4' },
        { source: '8053184', target: '7632985-3' },
        { source: '8053184', target: '7632985-4' },
        { source: '8053184', target: 'org_Qw8EsrN0M52nVQUM6vsV' }
    ]
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide the entrance of NetV.js.
 * @dependences interfaces.ts, utils/map2.js, node.ts, link.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetV = void 0;
const map2_1 = __webpack_require__(/*! ./utils/map2 */ "./src/utils/map2.ts");
const node_1 = __webpack_require__(/*! ./node */ "./src/node.ts");
const link_1 = __webpack_require__(/*! ./link */ "./src/link.ts");
const defaultConfigs = __webpack_require__(/*! ./configs */ "./src/configs.ts");
const dataset = __webpack_require__(/*! ./dataset */ "./src/dataset/index.ts");
const renderer_1 = __webpack_require__(/*! ./renderer */ "./src/renderer/index.ts");
const interaction_1 = __webpack_require__(/*! ./interaction/interaction */ "./src/interaction/interaction.ts");
const Utils = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
const label_1 = __webpack_require__(/*! ./label/label */ "./src/label/label.ts");
class NetV {
    /**
     * @description create NetV object.
     * @param configs configurations of NetV, must include a `container: HTMLDivElement` term
     */
    constructor(configs) {
        this.Utils = Utils;
        this.$_id2node = new Map();
        this.$_ends2link = new map2_1.default();
        this.$_sourceId2links = new Map();
        this.$_targetId2links = new Map();
        this.$_configs = JSON.parse(JSON.stringify(defaultConfigs)); // NOTE: deep copy configs
        this.$_transform = { x: 0, y: 0, k: 1 };
        this.$_lazyUpdate = false; // flag to control lazy update
        this.$_data = { nodes: [], links: [] };
        this.$_modifiedLinkCount = 0; // record modified link num to control lazy update
        if (!('container' in configs) || configs.container.tagName !== 'DIV') {
            throw Error('Container should be specified as a div element!');
        }
        this.$_container = configs.container;
        // override configs
        for (const key in configs) {
            if (key === 'container')
                continue; // NOTE: exclude container in configs
            if (configs[key] === Object(configs[key])) {
                this.$_configs[key] = Object.assign(Object.assign({}, this.$_configs[key]), configs[key]);
            }
            else {
                this.$_configs[key] = configs[key];
            }
        }
        const canvas = document.createElement('canvas'); // TODO: consider node enviroment, document not defined
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.style.width = this.$_configs.width + 'px';
        canvas.style.height = this.$_configs.height + 'px';
        canvas.setAttribute('width', String(this.$_configs.width * pixelRatio));
        canvas.setAttribute('height', String(this.$_configs.height * pixelRatio));
        this.$_container.appendChild(canvas);
        this.$_renderer = new renderer_1.Renderer({
            canvas,
            width: this.$_configs.width,
            height: this.$_configs.height,
            backgroundColor: this.$_configs.backgroundColor,
            nodeLimit: this.$_configs.nodeLimit,
            linkLimit: this.$_configs.linkLimit
        });
        this.labelManager = new label_1.LabelManager(this);
        this.$_interaction = new interaction_1.InteractionManager(this);
        if (this.$_configs.enablePanZoom) {
            this.$_interaction.initZoom();
        }
        this.$_interaction.initMouse();
    }
    /**
     * get/set canvas's background color
     * @param color
     */
    backgroundColor(color) {
        if (color) {
            this.$_configs.backgroundColor = color;
            this.$_renderer.setBackgroundColor(color);
        }
        return this.$_configs.backgroundColor;
    }
    $_addModifiedLinkCount(n) {
        this.$_modifiedLinkCount += n;
        if (this.$_modifiedLinkCount > this.$_configs.lazyUpdateThreshold) {
            this.$_lazyUpdate = true;
        }
    }
    /**
     * @description data getter setter
     * @param nodeLinkData? the node-link-data of a graph, provided?setter:getter;
     */
    data(nodeLinkData) {
        if (nodeLinkData === undefined) {
            return this.$_data;
        }
        else {
            // delete old data
            this.$_data = Object.assign(Object.assign({}, this.$_data), nodeLinkData);
            this.$_id2node = new Map();
            this.$_ends2link = new map2_1.default();
            this.$_sourceId2links = new Map();
            this.$_targetId2links = new Map();
            this.$_renderer.clearData();
            this.addNodes(this.$_data.nodes);
            this.addLinks(this.$_data.links);
        }
    }
    /**
     * @description initialize and add a node
     * @param nodeData the data of a node, include id, styles...
     */
    addNode(nodeData) {
        return this.addNodes([nodeData])[0];
    }
    /**
     * @description initialize and add a link
     * @param linkData the data of a link, include source, target, and styles...
     */
    addLink(linkData) {
        return this.addLinks([linkData])[0];
    }
    /**
     * @description initialize and add an array of nodes.
     * @param {interfaces.NodeData[]} nodesData: a data array of nodes tobe added
     * @memberof NetV
     */
    addNodes(nodesData) {
        const newNodes = nodesData.map((nodeData) => {
            nodeData.id = nodeData.id.toString();
            const node = new node_1.default(this, nodeData);
            return node;
        });
        this.$_renderer.addNodes(newNodes);
        return newNodes;
    }
    /**
     * @description initialize and add an array of links.
     * @param {interfaces.LinkData[]} linksData: a data array of links tobe added
     * @memberof NetV
     */
    addLinks(linksData) {
        const newLinks = linksData.map((linkData) => {
            linkData.source = linkData.source.toString();
            linkData.target = linkData.target.toString();
            const link = new link_1.default(this, linkData);
            return link;
        });
        // this.$_renderer.addLinks(newLinks)
        this.$_renderer.addLinks([...this.$_ends2link.values()]); // NOTE: preserve link order, not elegant
        return newLinks;
    }
    /**
     * @description get a Node object from the id2node Map data structure
     * @param id node id
     */
    getNodeById(id) {
        return this.$_id2node.get(id);
    }
    /**
     * @description get a Link object from the ends2link Map2 data structure
     * @param endId1 one end id of the link (source or target)
     * @param endId2 another end id of the link (source or target)
     */
    getLinkByEnds(endId1, endId2) {
        return this.$_ends2link.get([endId1, endId2]);
    }
    /**
     * @description get all nodes
     */
    nodes() {
        return [...this.$_id2node.values()];
    }
    /**
     * @description get all links
     */
    links() {
        return [...this.$_ends2link.values()];
    }
    /**
     * @description wipe all the data in the instance
     * @memberof NetV
     */
    wipe() {
        this.$_data = undefined;
        this.$_id2node = new Map();
        this.$_ends2link = new map2_1.default();
        this.$_sourceId2links = new Map();
        this.$_targetId2links = new Map();
        this.$_renderer.clearData();
    }
    /**
     * @description return build-in dataset according to name
     * @param name dataset name
     */
    loadDataset(name) {
        if (name in dataset)
            return dataset[name];
        console.error(`NetV does not have build-in dataset: ${name}`);
        return { nodes: [], links: [] };
    }
    /**
     * given position, return element on this pixel if exists
     * @param x x pos
     * @param y y pos
     */
    getElementByPosition(position) {
        const id = this.$_renderer.getIdByPosition(position);
        if (id) {
            if (typeof id === 'string') {
                const node = this.getNodeById(id);
                return {
                    type: 'node',
                    element: node
                };
            }
            if (Array.isArray(id)) {
                const link = this.getLinkByEnds(id[0], id[1]);
                return {
                    type: 'link',
                    element: link
                };
            }
        }
    }
    /**
     * @description draw elements
     */
    draw() {
        if (this.$_lazyUpdate) {
            this.$_renderer.nodeManager.refreshPosition([...this.$_id2node.values()]);
            // TODO: maybe need more efficient and reliable way to store and get all links
            this.$_renderer.linkManager.refreshPosition([...this.$_ends2link.values()]);
            this.$_lazyUpdate = false;
            this.$_modifiedLinkCount = 0;
        }
        this.$_renderer.draw();
    }
    /**
     * pan on canvas to get given node centered
     * @param node
     */
    centerOn(node) {
        const pos = node.position();
        this.$_interaction.centerPosition(pos);
    }
    /**
     * progmatically pan
     * @param x
     * @param y
     */
    panBy(x, y) {
        this.$_interaction.panBy(x, y);
        this.draw();
    }
    /**
     * progmatically zoom
     * @param factor zoom factor
     * @param center optional, zoom center position
     */
    zoomBy(factor, center) {
        this.$_interaction.zoomBy(factor, center);
        this.draw();
    }
    /**
     * get/set netv's transform
     * @param value optional, transform to set
     */
    transform(value) {
        if (value === undefined) {
            return this.$_transform;
        }
        this.$_transform = value;
        this.$_renderer.setTransform(this.$_transform);
        this.labelManager.setTransform(this.$_transform);
        this.draw();
    }
}
exports.NetV = NetV;


/***/ }),

/***/ "./src/interaction/interaction.ts":
/*!****************************************!*\
  !*** ./src/interaction/interaction.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description handle all interaction in NetV
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionManager = void 0;
class InteractionManager {
    constructor(netv) {
        this.isMouseDown = false;
        this.isMouseMove = false;
        this.netv = netv;
    }
    /**
     * progmatically pan
     * @param x
     * @param y
     */
    panBy(x, y) {
        const newTransform = Object.assign({}, this.netv.$_transform);
        newTransform.x += x;
        newTransform.y += y;
        this.netv.transform(newTransform);
    }
    /**
     * progmatically zoom
     * @param factor zoom factor
     * @param center optional, zoom center position
     */
    zoomBy(factor, center) {
        const newTransform = Object.assign({}, this.netv.$_transform);
        let centerPos = center;
        if (!centerPos) {
            centerPos = { x: this.netv.$_configs.width / 2, y: this.netv.$_configs.height / 2 };
        }
        const { x, y } = centerPos;
        newTransform.x = (1 - factor) * x + factor * newTransform.x;
        newTransform.y = (1 - factor) * y + factor * newTransform.y;
        newTransform.k *= factor;
        this.netv.transform(newTransform);
    }
    /**
     * move current position to center of canvas
     * @param pos
     */
    centerPosition(pos) {
        const newTransform = Object.assign({}, this.netv.$_transform);
        const x = pos.x * newTransform.k + newTransform.x;
        const y = pos.y * newTransform.k + newTransform.y;
        const center = {
            x: this.netv.$_configs.width / 2,
            y: this.netv.$_configs.height / 2
        };
        // newTransform.x += center.x - x
        // newTransform.y += center.y - y
        // interpolation
        const stepCount = 20;
        const difference = {
            x: center.x - x,
            y: center.y - y
        };
        const originTranslate = {
            x: newTransform.x,
            y: newTransform.y
        };
        const ease = (x) => {
            return x * x;
        };
        let steps = 1;
        const animation = setInterval(() => {
            newTransform.x = originTranslate.x + difference.x * ease(steps / stepCount);
            newTransform.y = originTranslate.y + difference.y * ease(steps / stepCount);
            this.netv.transform(newTransform);
            steps += 1;
            if (steps > stepCount)
                clearInterval(animation);
        }, 500 / stepCount);
    }
    /**
     * init zoom&pan interaction
     * currently no callback
     */
    initZoom() {
        const canvas = this.netv.$_container.querySelector('canvas');
        const handleScroll = (evt) => {
            const newTransform = Object.assign({}, this.netv.$_transform);
            const x = evt.offsetX || evt.pageX - canvas.offsetLeft;
            const y = evt.offsetY || evt.pageY - canvas.offsetTop;
            const delta = evt.deltaY ? evt.deltaY / 40 : evt.detail ? -evt.detail : 0;
            if (delta) {
                const k = Math.pow(1.1, delta);
                newTransform.x = (1 - k) * x + k * newTransform.x;
                newTransform.y = (1 - k) * y + k * newTransform.y;
                newTransform.k *= k;
                this.netv.transform(newTransform);
            }
            evt.preventDefault();
        };
        canvas.addEventListener('DOMMouseScroll', handleScroll, false);
        canvas.addEventListener('mousewheel', handleScroll, false);
    }
    /**
     * setup click utility
     */
    initMouse() {
        let newTransform = Object.assign({}, this.netv.$_transform);
        const canvas = this.netv.$_container.querySelector('canvas');
        const handleMouseDown = (evt) => {
            var _a;
            newTransform = Object.assign({}, this.netv.$_transform);
            const x = evt.offsetX || evt.pageX - canvas.offsetLeft;
            const y = evt.offsetY || evt.pageY - canvas.offsetTop;
            const yInv = this.netv.$_configs.height - y;
            this.isMouseDown = true;
            this.mouseDownPos = { x, y };
            this.dragStartTransform = JSON.parse(JSON.stringify(newTransform));
            this.mouseDownElement = this.netv.getElementByPosition({
                x,
                y: yInv
            });
            if ((_a = this.mouseDownElement) === null || _a === void 0 ? void 0 : _a.element.position) {
                // record orgin position for drag
                this.mouseDownElementOriginPos = Object.assign({}, this.mouseDownElement.element.position());
            }
        };
        const handleMouseMove = (evt) => {
            const x = evt.offsetX || evt.pageX - canvas.offsetLeft;
            const y = evt.offsetY || evt.pageY - canvas.offsetTop;
            if (this.isMouseDown) {
                this.isMouseMove = true;
                if (!this.mouseDownElement || !this.mouseDownElement.element.position) {
                    // pan, when not dragging node
                    newTransform.x = this.dragStartTransform.x + x - this.mouseDownPos.x;
                    newTransform.y = this.dragStartTransform.y + y - this.mouseDownPos.y;
                    this.netv.transform(newTransform);
                }
                else {
                    // drag node
                    this.mouseDownElement.element.position({
                        x: this.mouseDownElementOriginPos.x +
                            (x - this.mouseDownPos.x) / newTransform.k,
                        y: this.mouseDownElementOriginPos.y +
                            (y - this.mouseDownPos.y) / newTransform.k
                    });
                    this.netv.draw();
                    // when dragging, dynamic change label's position. because only operate on single element, it's ok to remove and recreate
                    this.mouseDownElement.element.showLabel(false);
                    this.mouseDownElement.element.showLabel(true);
                }
            }
            else {
                const yInv = this.netv.$_configs.height - y;
                const element = this.netv.getElementByPosition({ x, y: yInv });
                if (element === null || element === void 0 ? void 0 : element.element.$_hoverCallback) {
                    element.element.$_hoverCallback(element.element);
                }
                return; // currently not support hover
            }
        };
        const handleMouseUp = (evt) => {
            var _a;
            if (!this.isMouseMove && this.mouseDownElement) {
                // click
                if ((_a = this.mouseDownElement) === null || _a === void 0 ? void 0 : _a.element.$_clickCallback) {
                    this.mouseDownElement.element.$_clickCallback(this.mouseDownElement.element); // TODO: not elegant
                }
            }
            this.isMouseDown = false;
            this.isMouseMove = false;
            this.mouseDownElement = undefined;
        };
        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);
    }
}
exports.InteractionManager = InteractionManager;


/***/ }),

/***/ "./src/label/label.ts":
/*!****************************!*\
  !*** ./src/label/label.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description graph label related class or method
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelManager = void 0;
class LabelManager {
    constructor(core) {
        this.$_core = core;
        this.$_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        core.$_container.prepend(this.$_svg);
        this.$_svg.setAttribute('width', core.$_configs.width);
        this.$_svg.setAttribute('height', core.$_configs.height);
        core.$_container.style.position = 'relative';
        core.$_container.style.overflow = 'hidden';
        core.$_container.style.width = core.$_configs.width;
        core.$_container.style.height = core.$_configs.height;
        this.$_svg.style.position = 'absolute';
        this.$_svg.style.overflow = 'visible';
        this.$_svg.style.pointerEvents = 'none';
        this.$_offset = this.$_core.$_configs.label.offset;
        this.$_fontSize = this.$_core.$_configs.label.fontSize;
        this.$_strokeWidth = this.$_core.$_configs.label.strokeWidth;
        this.$_svg.setAttribute('transform', `translate(${this.$_offset.x} ${this.$_offset.y})`);
        this.$_svg.setAttribute('font-size', `${this.$_fontSize}px`);
        this.$_svg.setAttribute('stroke', `white`);
        this.$_svg.setAttribute('stroke-width', `${this.$_strokeWidth}px`);
    }
    /**
     * draw node's label
     * @param node node to add label
     */
    drawLabel(node) {
        const pos = node.position();
        const text = node.text();
        if (!text)
            return;
        const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        textElement.setAttribute('id', node.id());
        textElement.setAttribute('x', String(pos.x));
        textElement.setAttribute('y', String(pos.y));
        textElement.setAttribute('text-anchor', 'start');
        textElement.setAttribute('alignment-baseline', 'middle');
        textElement.style.userSelect = 'none'; // NOTE: prevent unexpected selection when dragging node(delete and recreate textElement)
        textElement.innerHTML = text;
        this.$_svg.prepend(textElement); // NOTE: make last added text at top
    }
    /**
     * remove node's label
     * @param node node to delete label
     */
    removeLabel(node) {
        var _a;
        // @ts-ignore
        (_a = this.$_svg.getElementById(node.id())) === null || _a === void 0 ? void 0 : _a.remove();
    }
    /**
     * set viewport transform
     * @param transform
     */
    setTransform(transform) {
        this.$_svg.setAttribute('transform', `translate(${this.$_offset.x +
            (1 - transform.k) * -(this.$_core.$_configs.width / 2) +
            transform.x}
             ${this.$_offset.y +
            (1 - transform.k) * -(this.$_core.$_configs.height / 2) +
            transform.y})
             scale(${transform.k})`);
        this.$_svg.setAttribute('font-size', `${this.$_fontSize / transform.k}px`);
        this.$_svg.setAttribute('stroke-width', `${this.$_strokeWidth / transform.k}px`);
    }
}
exports.LabelManager = LabelManager;


/***/ }),

/***/ "./src/link.ts":
/*!*********************!*\
  !*** ./src/link.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Link class.
 * @dependences interfaces.ts, utils/is.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Link {
    constructor(core, linkData) {
        this.$_core = core;
        const defaultConfigs = this.$_core.$_configs;
        const data = Object.assign({
            strokeWidth: defaultConfigs.link.strokeWidth,
            strokeColor: defaultConfigs.link.strokeColor,
            clickCallback: defaultConfigs.link.clickCallback,
            hoverCallback: defaultConfigs.link.hoverCallback
        }, linkData);
        const sourceNode = this.$_core.getNodeById(data.source);
        const targetNode = this.$_core.getNodeById(data.target);
        this.sourceTarget({
            source: sourceNode,
            target: targetNode
        });
        this.$_strokeWidth = data.strokeWidth;
        this.$_strokeColor = data.strokeColor;
        this.setClickCallback(data.clickCallback);
        this.setHoverCallback(data.hoverCallback);
    }
    /**
     * getter/setter of the source
     * @param {Node} [node]
     * @returns {Node} a source Node Object
     * @memberof Link
     */
    source(node) {
        if (arguments.length === 1) {
            // setter
            this.sourceTarget({
                source: node,
                target: this.$_target
            });
        }
        return this.$_source;
    }
    /**
     * getter/setter of the target
     * @param {Node} [node]
     * @returns {Node} a target Node Object
     * @memberof Link
     */
    target(node) {
        if (arguments.length === 1) {
            // setter
            this.sourceTarget({
                source: this.$_source,
                target: node
            });
        }
        return this.$_target;
    }
    /**
     * getter/setter of source and target
     *
     * @param {sourceTargetObj} [{source: Node, target: Node}]
     * @returns Object {source: Node, target: Node}
     * @memberof Link
     */
    sourceTarget(sourceTargetObj) {
        var _a, _b;
        if (arguments.length > 0) {
            const oldSource = this.$_source;
            const oldTarget = this.$_target;
            const newSource = sourceTargetObj.source;
            const newTarget = sourceTargetObj.target;
            const newSourceId = newSource.id();
            const newTargetId = newTarget.id();
            if (newSource === newTarget) {
                // error: self loop
                throw new Error(`Self loop (${newSourceId} <=> ${newTargetId}) is not allowed.`);
            }
            if (this.$_core.$_ends2link.has([newSourceId, newTargetId])) {
                // error: multiple link
                throw new Error(`Multiple link (${newSourceId} <=> ${newTargetId}) is not allowd.`);
            }
            if (oldSource && oldTarget) {
                // delete old Map
                this.$_core.$_ends2link.delete([oldSource.id(), oldTarget.id()]);
                (_a = this.$_core.$_sourceId2links.get(oldSource.id())) === null || _a === void 0 ? void 0 : _a.delete(this);
                (_b = this.$_core.$_targetId2links.get(oldTarget.id())) === null || _b === void 0 ? void 0 : _b.delete(this);
            }
            this.$_source = newSource;
            this.$_target = newTarget;
            this.$_core.$_ends2link.set([newSourceId, newTargetId], this);
            if (!this.$_core.$_sourceId2links.has(newSourceId)) {
                this.$_core.$_sourceId2links.set(newSourceId, new Set([this]));
            }
            else {
                this.$_core.$_sourceId2links.get(newSourceId).add(this);
            }
            if (!this.$_core.$_targetId2links.has(newTargetId)) {
                this.$_core.$_targetId2links.set(newTargetId, new Set([this]));
            }
            else {
                this.$_core.$_targetId2links.get(newTargetId).add(this);
            }
        }
        return {
            source: this.$_source,
            target: this.$_target
        };
    }
    /**
     * set/get stroke width of a node
     * @param {number} [value]
     * @memberof Node
     */
    strokeWidth(value) {
        if (arguments.length === 1) {
            this.$_strokeWidth = value;
            this.$_core.$_renderer.linkManager.changeAttribute(this, 'strokeWidth');
        }
        return this.$_strokeWidth;
    }
    /**
     * set/get stroke color of a node
     * @param {Color} [value]
     */
    strokeColor(value) {
        if (arguments.length === 1) {
            this.$_strokeColor = value;
            this.$_core.$_renderer.linkManager.changeAttribute(this, 'strokeColor');
        }
        return this.$_strokeColor;
    }
    /**
     * set hover callback function
     * @param callback hover callback function
     */
    setHoverCallback(callback) {
        this.$_hoverCallback = callback;
    }
    /**
     * set click callback function
     * @param callback click callback function
     */
    setClickCallback(callback) {
        this.$_clickCallback = callback;
    }
}
exports.default = Link;


/***/ }),

/***/ "./src/node.ts":
/*!*********************!*\
  !*** ./src/node.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Provide a Node class.
 * @dependences interfaces.ts, utils/is.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = __webpack_require__(/*! ./utils/is */ "./src/utils/is.ts");
class Node {
    constructor(core, nodeData) {
        this.$_position = {
            x: 0,
            y: 0
        };
        this.$_core = core;
        const defaultConfigs = this.$_core.$_configs;
        const data = Object.assign({
            x: this.$_position.x,
            y: this.$_position.y,
            strokeWidth: defaultConfigs.node.strokeWidth,
            strokeColor: defaultConfigs.node.strokeColor,
            r: defaultConfigs.node.r,
            fill: defaultConfigs.node.fill,
            showLabel: defaultConfigs.node.showLabel,
            text: defaultConfigs.node.text,
            clickCallback: defaultConfigs.node.clickCallback,
            hoverCallback: defaultConfigs.node.hoverCallback
        }, nodeData);
        this.$_setId(data.id);
        this.$_position = {
            x: data.x,
            y: data.y
        };
        this.$_strokeWidth = data.strokeWidth;
        this.$_strokeColor = data.strokeColor;
        this.$_fill = data.fill;
        this.$_r = data.r;
        this.$_showLabel = data.showLabel;
        this.$_text = data.text;
        if (this.$_showLabel) {
            this.showLabel(true);
        }
        this.setClickCallback(data.clickCallback);
        this.setHoverCallback(data.hoverCallback);
    }
    /**
     * getter of private property $_id
     * @memberof Node
     */
    id() {
        return this.$_id;
    }
    /**
     * set/get x postion
     * @param {number} [value]
     * @memberof Node
     */
    x(value) {
        if (arguments.length > 0) {
            this.position({
                x: value
            });
        }
        return this.$_position.x;
    }
    /**
     * set/get y postion
     * @param {number} [value]
     * @memberof Node
     */
    y(value) {
        if (arguments.length > 0) {
            this.position({
                y: value
            });
        }
        return this.$_position.y;
    }
    /**
     * set/get postion
     * @memberof Node
     */
    position(position) {
        let linkSets = {};
        // e.g. setOnePosition('x', 1) means set x position with value 1
        const setOnePosition = (key, value) => {
            this.$_position[key] = value; // key: 'x' or 'y'
            Object.entries(linkSets).forEach((entry) => {
                // entry[0]: 'source' / 'target'
                // entry[1]: the link set
                const key = entry[0];
                const set = entry[1];
                if (set) {
                    this.$_core.$_addModifiedLinkCount(set.size);
                    for (const link of set) {
                        this.$_core.$_renderer.linkManager.changeAttribute(link, key);
                    }
                }
            });
        };
        if (arguments.length > 0 && ('x' in position || 'y' in position)) {
            if (this.$_core.$_lazyUpdate) {
                if ('x' in position) {
                    this.$_position['x'] = position.x;
                }
                if ('y' in position) {
                    this.$_position['y'] = position.y;
                }
                return this.$_position;
            }
            linkSets = {
                // find links from/to this node
                source: this.$_core.$_sourceId2links.get(this.$_id),
                target: this.$_core.$_targetId2links.get(this.$_id)
            };
            if ('x' in position) {
                setOnePosition('x', position.x);
            }
            if ('y' in position) {
                setOnePosition('y', position.y);
            }
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'position');
        }
        return this.$_position;
    }
    /**
     * set/get stroke width of a node
     * @param {number} [value]
     * @memberof Node
     */
    strokeWidth(value) {
        if (arguments.length === 1) {
            this.$_strokeWidth = value;
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'strokeWidth');
        }
        return this.$_strokeWidth;
    }
    /**
     * set/get stroke color of a node
     * @param {Color} [value]
     */
    strokeColor(value) {
        if (arguments.length === 1) {
            this.$_strokeColor = value;
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'strokeColor');
        }
        return this.$_strokeColor;
    }
    /**
     * set/get fill color of a node
     * @param {Color} [value]
     */
    fill(value) {
        if (arguments.length === 1) {
            this.$_fill = value;
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'fill');
        }
        return this.$_fill;
    }
    /**
     * set/get radius of a node
     * @param {number} [r]
     */
    r(value) {
        if (arguments.length === 1) {
            this.$_r = value;
            this.$_core.$_renderer.nodeManager.changeAttribute(this, 'radius');
        }
        return this.$_r;
    }
    /**
     * control label show or not
     * @param value
     */
    showLabel(value) {
        this.$_showLabel = value;
        if (value) {
            this.$_core.labelManager.drawLabel(this);
        }
        else {
            this.$_core.labelManager.removeLabel(this);
        }
    }
    /**
     * get/set node's label
     * @param value label text
     */
    text(value) {
        if (value) {
            this.$_text = value;
        }
        return this.$_text;
    }
    /**
     * get/set offset value
     * @param value offset value
     * @deprecated not used currently, not support set node's label offset individually
     */
    textOffset(value) {
        if (value) {
            this.$_textOffset = value;
        }
        return this.$_textOffset;
    }
    /**
     * set the id of this node.
     * it is only used for constructor
     * because a node's id is not allowed to be changed.
     * @private
     * @param {string} value
     * @returns nothing
     * @memberof Node
     */
    $_setId(value) {
        if (is_1.isValidId(value)) {
            if (this.$_core.$_id2node.has(value)) {
                throw new Error(`Duplicate node (${value}) is not allowed.`);
            }
            if (is_1.isValidId(this.$_id)) {
                throw new Error('Can not change the id of an exist node.');
            }
            this.$_core.$_id2node.set(value, this);
            this.$_id = value;
        }
        else {
            throw new Error(`Invalid ID ${value}`);
        }
    }
    /**
     * set hover callback function
     * @param callback hover callback function
     */
    setHoverCallback(callback) {
        this.$_hoverCallback = callback;
    }
    /**
     * set click callback function
     * @param callback click callback function
     */
    setClickCallback(callback) {
        this.$_clickCallback = callback;
    }
}
exports.default = Node;


/***/ }),

/***/ "./src/renderer/elements/link/fragment.glsl":
/*!**************************************************!*\
  !*** ./src/renderer/elements/link/fragment.glsl ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec4 color;\r\n\r\nout vec4 fragmentColor;\r\n\r\nvoid main(void) {\r\n    fragmentColor = vec4(color.rgb * color.a, color.a);\r\n}");

/***/ }),

/***/ "./src/renderer/elements/link/id-fragment.glsl":
/*!*****************************************************!*\
  !*** ./src/renderer/elements/link/id-fragment.glsl ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec4 color;\r\n\r\nin vec4 id;\r\n\r\n// TODO: all id related shader need clean up\r\nout vec4 fragmentColor;\r\n\r\nvoid main(void) {\r\n    fragmentColor = id;\r\n}");

/***/ }),

/***/ "./src/renderer/elements/link/id-vertex.glsl":
/*!***************************************************!*\
  !*** ./src/renderer/elements/link/id-vertex.glsl ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin vec2 inSourcePosition;\r\nin vec2 inTargetPosition;\r\nin float inStrokeWidth;\r\nin vec4 inStrokeColor;\r\n\r\nin vec4 inId;\r\n\r\nout vec4 color;\r\n\r\nout vec4 id;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\n\r\nvoid main(void) {\r\n    id = inId;\r\n\r\n    color = inStrokeColor;\r\n\r\n    vec2 source = inSourcePosition * scale + translate;\r\n    vec2 target = inTargetPosition * scale + translate;\r\n    vec2 delta = source - target;\r\n    vec2 center = 0.5 * (source + target);\r\n    float len = length(delta);\r\n    float phi = atan(delta.y / delta.x);\r\n\r\n    mat3 line_scale = mat3(\r\n        len, 0, 0,\r\n        0, inStrokeWidth, 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_rotate = mat3(\r\n        cos(phi), sin(phi), 0,\r\n        -sin(phi), cos(phi), 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_translate = mat3(\r\n        1, 0, 0,\r\n        0, 1, 0,\r\n        center.x, center.y, 1\r\n    );\r\n    \r\n    mat3 transform = line_translate * line_rotate * line_scale;\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}");

/***/ }),

/***/ "./src/renderer/elements/link/render-link.ts":
/*!***************************************************!*\
  !*** ./src/renderer/elements/link/render-link.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Link used in renderer
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderLinkManager = void 0;
const vertex_glsl_1 = __webpack_require__(/*! ./vertex.glsl */ "./src/renderer/elements/link/vertex.glsl");
const fragment_glsl_1 = __webpack_require__(/*! ./fragment.glsl */ "./src/renderer/elements/link/fragment.glsl");
const id_vertex_glsl_1 = __webpack_require__(/*! ./id-vertex.glsl */ "./src/renderer/elements/link/id-vertex.glsl");
const id_fragment_glsl_1 = __webpack_require__(/*! ./id-fragment.glsl */ "./src/renderer/elements/link/id-fragment.glsl");
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/renderer/utils.ts");
const map2_1 = __webpack_require__(/*! ../../../utils/map2 */ "./src/utils/map2.ts");
var LinkAttrKey;
(function (LinkAttrKey) {
    LinkAttrKey[LinkAttrKey["TEMPLATE"] = 0] = "TEMPLATE";
    LinkAttrKey[LinkAttrKey["SOURCE"] = 1] = "SOURCE";
    LinkAttrKey[LinkAttrKey["TARGET"] = 2] = "TARGET";
    LinkAttrKey[LinkAttrKey["WIDTH"] = 3] = "WIDTH";
    LinkAttrKey[LinkAttrKey["COLOR"] = 4] = "COLOR";
})(LinkAttrKey || (LinkAttrKey = {}));
var LinkIdAttrKey;
(function (LinkIdAttrKey) {
    LinkIdAttrKey[LinkIdAttrKey["TEMPLATE"] = 0] = "TEMPLATE";
    LinkIdAttrKey[LinkIdAttrKey["SOURCE"] = 1] = "SOURCE";
    LinkIdAttrKey[LinkIdAttrKey["TARGET"] = 2] = "TARGET";
    LinkIdAttrKey[LinkIdAttrKey["WIDTH"] = 3] = "WIDTH";
    LinkIdAttrKey[LinkIdAttrKey["COLOR"] = 4] = "COLOR";
    LinkIdAttrKey[LinkIdAttrKey["ID"] = 5] = "ID";
})(LinkIdAttrKey || (LinkIdAttrKey = {}));
const LinkAttrMap = {
    source: LinkAttrKey.SOURCE,
    target: LinkAttrKey.TARGET,
    strokeWidth: LinkAttrKey.WIDTH,
    strokeColor: LinkAttrKey.COLOR
};
class RenderLinkManager {
    /**
     * create render link manager
     * @param gl WebGL context
     * @param params nessesary configs for link manager
     * @param idTexture texture store elements id of each pixel
     */
    constructor(gl, params, idTexture) {
        this.count = 0;
        this.idsToIndex = new map2_1.default();
        const { limit, width, height } = params;
        this.gl = gl;
        this.limit = limit;
        this.width = width;
        this.height = height;
        this.pixelRatio = window.devicePixelRatio || 1;
        this.attributes = utils_1.extractAttributesFromShader(vertex_glsl_1.default);
        this.program = utils_1.createProgram(this.gl, vertex_glsl_1.default, fragment_glsl_1.default, this.attributes);
        this.idAttributes = utils_1.extractAttributesFromShader(id_vertex_glsl_1.default);
        this.idProgram = utils_1.createProgram(this.gl, id_vertex_glsl_1.default, id_fragment_glsl_1.default, this.idAttributes);
        this.idTexture = idTexture;
        this.renderIdToIds = {};
        // init arrays
        // prettier-ignore
        this.attributes[LinkAttrKey.TEMPLATE].array = new Float32Array([
            -0.5, 0.5, 1.0,
            -0.5, -0.5, 1.0,
            0.5, 0.5, 1.0,
            0.5, -0.5, 1.0,
        ]);
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn)
                attr.array = new Float32Array(attr.size * this.limit);
        });
        // init buffers
        this.attributes.forEach((attr) => {
            attr.buffer = utils_1.createArrayBuffer(this.gl, attr.array);
        });
        // init id attributes and buffers
        // TODO: hardcode check, need refactor
        this.idAttributes.forEach((attr, idx) => {
            if (idx < this.attributes.length) {
                this.idAttributes[idx] = this.attributes[idx];
            }
            else {
                if (!attr.isBuildIn)
                    attr.array = new Float32Array(attr.size * this.limit);
                attr.buffer = utils_1.createArrayBuffer(this.gl, attr.array);
            }
        });
        // init uniforms
        this.gl.useProgram(this.program);
        const projectionLoc = this.gl.getUniformLocation(this.program, 'projection');
        const scaleLoc = this.gl.getUniformLocation(this.program, 'scale');
        const translateLoc = this.gl.getUniformLocation(this.program, 'translate');
        // this.gl.viewport(0, 0, this.width, this.height) // TODO: viewport set, not needed? put here in case bug appear
        // prettier-ignore
        const projection = new Float32Array([
            2 / this.width, 0, 0,
            0, -2 / this.height, 0,
            -1, 1, 1
        ]);
        this.gl.uniformMatrix3fv(projectionLoc, false, projection);
        const scale = new Float32Array([1, 1]);
        this.gl.uniform2fv(scaleLoc, scale);
        const translate = new Float32Array([0, 0]);
        this.gl.uniform2fv(translateLoc, translate);
        // id uniforms, identical to link
        // TODO: need refactor too
        this.gl.useProgram(this.idProgram);
        const idProjectionLoc = this.gl.getUniformLocation(this.idProgram, 'projection');
        const idScaleLoc = this.gl.getUniformLocation(this.idProgram, 'scale');
        const idTranslateLoc = this.gl.getUniformLocation(this.idProgram, 'translate');
        this.gl.uniformMatrix3fv(idProjectionLoc, false, projection);
        this.gl.uniform2fv(idScaleLoc, scale);
        this.gl.uniform2fv(idTranslateLoc, translate);
    }
    /**
     * change link's attribute
     * @param link link data
     * @param attribute attribute key to change
     */
    changeAttribute(link, attribute) {
        const key = LinkAttrMap[attribute];
        const attr = this.attributes[key];
        const nodes = link.sourceTarget();
        const index = this.idsToIndex.get([nodes.source.id(), nodes.target.id()]);
        let data = null;
        if (attribute === 'source') {
            const pos = nodes.source.position();
            data = [pos.x, pos.y];
        }
        else if (attribute === 'target') {
            const pos = nodes.target.position();
            data = [pos.x, pos.y];
        }
        else if (attribute === 'strokeWidth') {
            data = [link.strokeWidth() * this.pixelRatio];
        }
        else if (attribute === 'strokeColor') {
            const col = link.strokeColor();
            data = [col.r, col.g, col.b, col.a];
        }
        else {
            console.error('Link attribute not supported.');
            return; // early return, skip following buffer change
        }
        attr.array.set(data, attr.size * index);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * index * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * index, attr.size);
    }
    /**
     * refresh all position of edges
     * @param links all link data
     */
    refreshPosition(links) {
        let count = 0; // TODO: useless count
        links.forEach((link, i) => {
            // TODO: consider link and render link attribute mapping
            const source = link.source();
            const sourcePosition = source.position();
            this.attributes[LinkAttrKey.SOURCE].array[2 * (count + i)] = sourcePosition.x;
            this.attributes[LinkAttrKey.SOURCE].array[2 * (count + i) + 1] = sourcePosition.y;
            const target = link.target();
            const targetPosition = target.position();
            this.attributes[LinkAttrKey.TARGET].array[2 * (count + i)] = targetPosition.x;
            this.attributes[LinkAttrKey.TARGET].array[2 * (count + i) + 1] = targetPosition.y;
            // currently no need for color&renderId change
            /*
            this.attributes[LinkAttrKey.WIDTH].array[this.count + i] =
                link.strokeWidth() * this.pixelRatio

            const color = link.strokeColor()
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i)] = color.r
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 1] = color.g
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 2] = color.b
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 3] = color.a

            const renderIdColor = encodeRenderId(2 * (this.count + i) + 1) // NOTE: link render id, use odd integer
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i)] = renderIdColor.r
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 1] = renderIdColor.g
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 2] = renderIdColor.b
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 3] = renderIdColor.a
            */
        });
        const sourceAttr = this.attributes[LinkAttrKey.SOURCE];
        const targetAttr = this.attributes[LinkAttrKey.TARGET];
        const arr = [sourceAttr, targetAttr];
        arr.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * count * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * count, attr.size * links.length);
            }
        });
    }
    /**
     * clear link data
     * not actually erase data, but reset count
     */
    clearData() {
        this.count = 0;
    }
    /**
     * add links data to engine
     * @param links links data
     */
    addData(links) {
        // set array
        links.forEach((link, i) => {
            // TODO: consider link and render link attribute mapping
            const source = link.source();
            const sourcePosition = source.position();
            this.attributes[LinkAttrKey.SOURCE].array[2 * (this.count + i)] = sourcePosition.x;
            this.attributes[LinkAttrKey.SOURCE].array[2 * (this.count + i) + 1] = sourcePosition.y;
            const target = link.target();
            const targetPosition = target.position();
            this.attributes[LinkAttrKey.TARGET].array[2 * (this.count + i)] = targetPosition.x;
            this.attributes[LinkAttrKey.TARGET].array[2 * (this.count + i) + 1] = targetPosition.y;
            this.attributes[LinkAttrKey.WIDTH].array[this.count + i] =
                link.strokeWidth() * this.pixelRatio;
            const color = link.strokeColor();
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i)] = color.r;
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 1] = color.g;
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 2] = color.b;
            this.attributes[LinkAttrKey.COLOR].array[4 * (this.count + i) + 3] = color.a;
            const renderIdColor = utils_1.encodeRenderId(2 * (this.count + i) + 1); // NOTE: link render id, use odd integer
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i)] = renderIdColor.r;
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 1] = renderIdColor.g;
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 2] = renderIdColor.b;
            this.idAttributes[LinkIdAttrKey.ID].array[4 * (this.count + i) + 3] = renderIdColor.a;
            const sourceTarget = link.sourceTarget();
            this.renderIdToIds[2 * (this.count + i) + 1] = [
                sourceTarget.source.id(),
                sourceTarget.target.id()
            ];
            this.idsToIndex.set([sourceTarget.source.id(), sourceTarget.target.id()], this.count + i);
        });
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * this.count * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * this.count, attr.size * links.length);
            }
        });
        // id buffer data
        const attr = this.idAttributes[LinkIdAttrKey.ID];
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * this.count * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * this.count, attr.size * links.length);
        this.count += links.length;
    }
    /**
     * set Transform in Render Link
     * @param transform current transform(pan&zoom condition)
     */
    setTransform(transform) {
        this.gl.useProgram(this.program);
        const scaleLoc = this.gl.getUniformLocation(this.program, 'scale');
        const translateLoc = this.gl.getUniformLocation(this.program, 'translate');
        const scale = new Float32Array([transform.k, transform.k]);
        this.gl.uniform2fv(scaleLoc, scale);
        const translate = new Float32Array([transform.x, transform.y]);
        this.gl.uniform2fv(translateLoc, translate);
        // id uniforms, identical to link
        // TODO: need refactor too
        this.gl.useProgram(this.idProgram);
        const idScaleLoc = this.gl.getUniformLocation(this.idProgram, 'scale');
        const idTranslateLoc = this.gl.getUniformLocation(this.idProgram, 'translate');
        this.gl.uniform2fv(idScaleLoc, scale);
        this.gl.uniform2fv(idTranslateLoc, translate);
    }
    /**
     * render id to link ids(source and target)
     * @param renderId
     */
    getIdsByRenderId(renderId) {
        return this.renderIdToIds[renderId];
    }
    /**
     * draw links
     */
    draw() {
        if (this.count > 0) {
            this.gl.enable(this.gl.BLEND);
            this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
            this.gl.useProgram(this.program);
            this.attributes.forEach((attr) => {
                this.gl.enableVertexAttribArray(attr.index);
            });
            this.attributes.forEach((attr, i) => {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.vertexAttribPointer(attr.index, attr.size, this.gl.FLOAT, false, attr.isBuildIn ? 0 : attr.size * attr.array.BYTES_PER_ELEMENT, 0);
                if (!attr.isBuildIn)
                    this.gl.vertexAttribDivisor(attr.index, 1);
            });
        }
        this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count);
        // draw id
        this.gl.blendFunc(this.gl.ONE, this.gl.ZERO);
        this.gl.useProgram(this.idProgram);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.idTexture);
        this.idAttributes.forEach((attr) => {
            this.gl.enableVertexAttribArray(attr.index);
        });
        const attr = this.idAttributes[LinkIdAttrKey.ID];
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
        this.gl.vertexAttribPointer(attr.index, attr.size, this.gl.FLOAT, false, attr.size * attr.array.BYTES_PER_ELEMENT, 0);
        this.gl.vertexAttribDivisor(attr.index, 1);
        this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
    }
}
exports.RenderLinkManager = RenderLinkManager;


/***/ }),

/***/ "./src/renderer/elements/link/vertex.glsl":
/*!************************************************!*\
  !*** ./src/renderer/elements/link/vertex.glsl ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin vec2 inSourcePosition;\r\nin vec2 inTargetPosition;\r\nin float inStrokeWidth;\r\nin vec4 inStrokeColor;\r\n\r\nout vec4 color;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\n\r\nvoid main(void) {\r\n    color = inStrokeColor;\r\n\r\n    vec2 source = inSourcePosition * scale + translate;\r\n    vec2 target = inTargetPosition * scale + translate;\r\n    vec2 delta = source - target;\r\n    vec2 center = 0.5 * (source + target);\r\n    float len = length(delta);\r\n    float phi = atan(delta.y / delta.x);\r\n\r\n    mat3 line_scale = mat3(\r\n        len, 0, 0,\r\n        0, inStrokeWidth, 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_rotate = mat3(\r\n        cos(phi), sin(phi), 0,\r\n        -sin(phi), cos(phi), 0,\r\n        0, 0, 1\r\n    );\r\n    mat3 line_translate = mat3(\r\n        1, 0, 0,\r\n        0, 1, 0,\r\n        center.x, center.y, 1\r\n    );\r\n    \r\n    mat3 transform = line_translate * line_rotate * line_scale;\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}");

/***/ }),

/***/ "./src/renderer/elements/node/fragment.glsl":
/*!**************************************************!*\
  !*** ./src/renderer/elements/node/fragment.glsl ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec2 pos;\r\nin float radius;\r\nin vec4 color;\r\nin float strokeWidth;\r\nin vec4 strokeColor;\r\n\r\nout vec4 fragmentColor;\r\n\r\nuniform vec2 viewport;\r\nuniform float pixelRatio;\r\n\r\nfloat inCircle() {\r\n  vec2 flip_pos = pos;\r\n  flip_pos.y = viewport.y - pos.y;\r\n  float r = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n  float draw = 1. - step(radius - strokeWidth / 2., r);\r\n  return draw;\r\n}\r\n\r\nfloat inBorder() {\r\n  if (strokeWidth == 0.) {\r\n    return 0.;\r\n  }\r\n  vec2 flip_pos = pos;\r\n  flip_pos.y = viewport.y - pos.y;\r\n  float r = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n  float drawOuter = 1. - smoothstep((radius + strokeWidth / 2.) * 0.95, (radius + strokeWidth / 2.) * 1.05, r);\r\n  float drawInner = 1. - step(radius - strokeWidth / 2., r);\r\n  return drawOuter * (1. - drawInner);\r\n  // return drawOuter;\r\n}\r\n\r\nvoid main(void) {\r\n    // border check, using 0.5(center of smoothstep)\r\n    if (inCircle() < 1. && (strokeWidth < 0.8 || inBorder() < 0.5)) {\r\n        discard;\r\n    }\r\n    fragmentColor = inBorder() * vec4(strokeColor.rgb * strokeColor.a, strokeColor.a) + inCircle() * vec4(color.rgb * color.a, color.a);\r\n}");

/***/ }),

/***/ "./src/renderer/elements/node/id-fragment.glsl":
/*!*****************************************************!*\
  !*** ./src/renderer/elements/node/id-fragment.glsl ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec2 pos;\r\nin float radius;\r\nin vec4 color;\r\nin float strokeWidth;\r\nin vec4 strokeColor;\r\n\r\nin vec4 id;\r\n\r\nout vec4 fragmentColor;\r\n\r\nuniform vec2 viewport;\r\nuniform float pixelRatio;\r\n\r\nfloat inCircle() {\r\n  vec2 flip_pos = pos;\r\n  flip_pos.y = viewport.y - pos.y;\r\n  float r = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n  float draw = 1. - step(radius - strokeWidth / 2., r);\r\n  return draw;\r\n}\r\n\r\nfloat inBorder() {\r\n  if (strokeWidth == 0.) {\r\n    return 0.;\r\n  }\r\n  vec2 flip_pos = pos;\r\n  flip_pos.y = viewport.y - pos.y;\r\n  float r = distance(gl_FragCoord.xy / pixelRatio, flip_pos);\r\n  float drawOuter = 1. - smoothstep((radius + strokeWidth / 2.) * 0.95, (radius + strokeWidth / 2.) * 1.05, r);\r\n  float drawInner = 1. - step(radius - strokeWidth / 2., r);\r\n  return drawOuter * (1. - drawInner);\r\n  // return drawOuter;\r\n}\r\n\r\nvoid main(void) {\r\n    // border check, using 0.5(center of smoothstep)\r\n    if (inCircle() < 1. && (strokeWidth < 0.8 || inBorder() < 0.5)) {\r\n        discard;\r\n    }\r\n    fragmentColor = id;\r\n}");

/***/ }),

/***/ "./src/renderer/elements/node/id-vertex.glsl":
/*!***************************************************!*\
  !*** ./src/renderer/elements/node/id-vertex.glsl ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin vec2 inPosition;\r\nin float inRadius;\r\nin vec4 inFill;\r\nin float inStrokeWidth;\r\nin vec4 inStrokeColor;\r\n\r\nin vec4 inId;\r\n\r\nout vec2 pos;\r\nout float radius;\r\nout vec4 color;\r\nout float strokeWidth;\r\nout vec4 strokeColor;\r\n\r\nout vec4 id;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\nuniform vec2 viewport;\r\n\r\nvoid main(void) {\r\n    id = inId;\r\n\r\n    float size = inRadius + inStrokeWidth / 2.;\r\n    radius = inRadius;\r\n    color = inFill;\r\n    strokeWidth = inStrokeWidth;\r\n    strokeColor = inStrokeColor;\r\n    float vertexSize = size * (2. * sqrt(2.)) * 1.5; // NOTE: x 1.5 to prevent border factor\r\n    pos = scale * inPosition + translate;\r\n    mat3 transform = mat3(\r\n        vertexSize, 0, 0,\r\n        0, vertexSize, 0,\r\n        pos.x, pos.y, 1\r\n    );\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}");

/***/ }),

/***/ "./src/renderer/elements/node/render-node.ts":
/*!***************************************************!*\
  !*** ./src/renderer/elements/node/render-node.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description Node using in Renderer
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderNodeManager = void 0;
const vertex_glsl_1 = __webpack_require__(/*! ./vertex.glsl */ "./src/renderer/elements/node/vertex.glsl");
const fragment_glsl_1 = __webpack_require__(/*! ./fragment.glsl */ "./src/renderer/elements/node/fragment.glsl");
const id_vertex_glsl_1 = __webpack_require__(/*! ./id-vertex.glsl */ "./src/renderer/elements/node/id-vertex.glsl");
const id_fragment_glsl_1 = __webpack_require__(/*! ./id-fragment.glsl */ "./src/renderer/elements/node/id-fragment.glsl");
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/renderer/utils.ts");
var NodeAttrKey;
(function (NodeAttrKey) {
    NodeAttrKey[NodeAttrKey["TEMPLATE"] = 0] = "TEMPLATE";
    NodeAttrKey[NodeAttrKey["POSITION"] = 1] = "POSITION";
    NodeAttrKey[NodeAttrKey["RADIUS"] = 2] = "RADIUS";
    NodeAttrKey[NodeAttrKey["COLOR"] = 3] = "COLOR";
    NodeAttrKey[NodeAttrKey["STROKE_WIDTH"] = 4] = "STROKE_WIDTH";
    NodeAttrKey[NodeAttrKey["STROKE_COLOR"] = 5] = "STROKE_COLOR";
})(NodeAttrKey || (NodeAttrKey = {}));
var NodeIdAttrKey;
(function (NodeIdAttrKey) {
    NodeIdAttrKey[NodeIdAttrKey["TEMPLATE"] = 0] = "TEMPLATE";
    NodeIdAttrKey[NodeIdAttrKey["POSITION"] = 1] = "POSITION";
    NodeIdAttrKey[NodeIdAttrKey["RADIUS"] = 2] = "RADIUS";
    NodeIdAttrKey[NodeIdAttrKey["COLOR"] = 3] = "COLOR";
    NodeIdAttrKey[NodeIdAttrKey["STROKE_WIDTH"] = 4] = "STROKE_WIDTH";
    NodeIdAttrKey[NodeIdAttrKey["STROKE_COLOR"] = 5] = "STROKE_COLOR";
    NodeIdAttrKey[NodeIdAttrKey["ID"] = 6] = "ID";
})(NodeIdAttrKey || (NodeIdAttrKey = {}));
const NodeAttrMap = {
    position: NodeAttrKey.POSITION,
    radius: NodeAttrKey.RADIUS,
    fill: NodeAttrKey.COLOR,
    strokeWidth: NodeAttrKey.STROKE_WIDTH,
    strokeColor: NodeAttrKey.STROKE_COLOR
};
class RenderNodeManager {
    /**
     * create render node manager
     * @param gl WebGL context
     * @param params nessesary configs for node manager
     * @param idTexture texture store elements id of each pixel
     */
    constructor(gl, params, idTexture) {
        this.count = 0;
        const { limit, width, height } = params;
        this.gl = gl;
        this.limit = limit;
        this.width = width;
        this.height = height;
        this.pixelRatio = window.devicePixelRatio || 1;
        this.attributes = utils_1.extractAttributesFromShader(vertex_glsl_1.default);
        this.program = utils_1.createProgram(this.gl, vertex_glsl_1.default, fragment_glsl_1.default, this.attributes);
        this.idAttributes = utils_1.extractAttributesFromShader(id_vertex_glsl_1.default);
        this.idProgram = utils_1.createProgram(this.gl, id_vertex_glsl_1.default, id_fragment_glsl_1.default, this.idAttributes);
        this.idTexture = idTexture;
        this.renderIdToId = {};
        this.idToIndex = {};
        // init arrays
        // prettier-ignore
        this.attributes[NodeAttrKey.TEMPLATE].array = new Float32Array([
            -0.5, 0.0, 1.0,
            0.0, -0.5, 1.0,
            0.0, 0.5, 1.0,
            0.5, 0.0, 1.0,
        ]);
        // TODO: combine the following two loop?
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn)
                attr.array = new Float32Array(attr.size * this.limit);
        });
        // init buffers
        this.attributes.forEach((attr) => {
            attr.buffer = utils_1.createArrayBuffer(this.gl, attr.array);
        });
        // init id attributes and buffers
        // TODO: hardcode check, need refactor
        this.idAttributes.forEach((attr, idx) => {
            if (idx < this.attributes.length) {
                this.idAttributes[idx] = this.attributes[idx];
            }
            else {
                if (!attr.isBuildIn)
                    attr.array = new Float32Array(attr.size * this.limit);
                attr.buffer = utils_1.createArrayBuffer(this.gl, attr.array);
            }
        });
        // init uniforms
        this.gl.useProgram(this.program);
        const projectionLoc = this.gl.getUniformLocation(this.program, 'projection');
        const scaleLoc = this.gl.getUniformLocation(this.program, 'scale');
        const translateLoc = this.gl.getUniformLocation(this.program, 'translate');
        const viewportLoc = this.gl.getUniformLocation(this.program, 'viewport');
        const pixelRatioLoc = this.gl.getUniformLocation(this.program, 'pixelRatio');
        // this.gl.viewport(0, 0, this.width, this.height) // TODO: viewport set, not needed? put here in case bug appear
        // prettier-ignore
        const projection = new Float32Array([
            2 / this.width, 0, 0,
            0, -2 / this.height, 0,
            -1, 1, 1
        ]);
        this.gl.uniformMatrix3fv(projectionLoc, false, projection);
        const scale = new Float32Array([1, 1]);
        this.gl.uniform2fv(scaleLoc, scale);
        const translate = new Float32Array([0, 0]);
        this.gl.uniform2fv(translateLoc, translate);
        const viewport = new Float32Array([this.width, this.height]);
        this.gl.uniform2fv(viewportLoc, viewport);
        this.gl.uniform1f(pixelRatioLoc, this.pixelRatio);
        // id uniforms, identical to node
        // TODO: need refactor too
        this.gl.useProgram(this.idProgram);
        const idProjectionLoc = this.gl.getUniformLocation(this.idProgram, 'projection');
        const idScaleLoc = this.gl.getUniformLocation(this.idProgram, 'scale');
        const idTranslateLoc = this.gl.getUniformLocation(this.idProgram, 'translate');
        const idViewportLoc = this.gl.getUniformLocation(this.idProgram, 'viewport');
        const idPixelRatioLoc = this.gl.getUniformLocation(this.idProgram, 'pixelRatio');
        this.gl.uniformMatrix3fv(idProjectionLoc, false, projection);
        this.gl.uniform2fv(idScaleLoc, scale);
        this.gl.uniform2fv(idTranslateLoc, translate);
        this.gl.uniform2fv(idViewportLoc, viewport);
        this.gl.uniform1f(idPixelRatioLoc, this.pixelRatio);
    }
    /**
     * set Transform in Render Node
     * @param transform current transform(pan&zoom condition)
     */
    setTransform(transform) {
        this.gl.useProgram(this.program);
        const scaleLoc = this.gl.getUniformLocation(this.program, 'scale');
        const translateLoc = this.gl.getUniformLocation(this.program, 'translate');
        const scale = new Float32Array([transform.k, transform.k]);
        this.gl.uniform2fv(scaleLoc, scale);
        const translate = new Float32Array([transform.x, transform.y]);
        this.gl.uniform2fv(translateLoc, translate);
        // id uniforms, identical to node
        // TODO: need refactor too
        this.gl.useProgram(this.idProgram);
        const idScaleLoc = this.gl.getUniformLocation(this.idProgram, 'scale');
        const idTranslateLoc = this.gl.getUniformLocation(this.idProgram, 'translate');
        this.gl.uniform2fv(idScaleLoc, scale);
        this.gl.uniform2fv(idTranslateLoc, translate);
    }
    /**
     * change node's attribute
     * @param node node data
     * @param attribute attribute key to change
     */
    changeAttribute(node, attribute) {
        const key = NodeAttrMap[attribute];
        const attr = this.attributes[key];
        const index = this.idToIndex[node.id()];
        let data = null;
        if (attribute === 'position') {
            const pos = node.position();
            data = [pos.x, pos.y];
        }
        else if (attribute === 'fill') {
            const col = node.fill();
            data = [col.r, col.g, col.b, col.a];
        }
        else if (attribute === 'radius') {
            data = [node.r() * this.pixelRatio];
        }
        else if (attribute === 'strokeWidth') {
            data = [node.strokeWidth() * this.pixelRatio];
        }
        else if (attribute === 'strokeColor') {
            const col = node.strokeColor();
            data = [col.r, col.g, col.b, col.a];
        }
        else {
            console.error('Not supported Node attribute.');
            return;
        }
        attr.array.set(data, attr.size * index);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * index * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * index, attr.size);
    }
    /**
     * refresh all nodes position after lazy update
     * @param nodes all node data
     */
    refreshPosition(nodes) {
        // set array
        nodes.forEach((node, i) => {
            // TODO: consider node and render node attribute mapping
            const position = node.position();
            this.attributes[NodeAttrKey.POSITION].array[2 * i] = position.x;
            this.attributes[NodeAttrKey.POSITION].array[2 * i + 1] = position.y;
        });
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, attr.array, 0, attr.size * nodes.length);
            }
        });
    }
    /**
     * clear node data
     * not actually erase data, but reset count
     */
    clearData() {
        this.count = 0;
    }
    /**
     * add nodes data to engine
     * @param nodes nodes data
     */
    addData(nodes) {
        // set array
        nodes.forEach((node, i) => {
            // TODO: consider node and render node attribute mapping
            const position = node.position();
            this.attributes[NodeAttrKey.POSITION].array[2 * (this.count + i)] = position.x;
            this.attributes[NodeAttrKey.POSITION].array[2 * (this.count + i) + 1] = position.y;
            this.attributes[NodeAttrKey.RADIUS].array[this.count + i] = node.r() * this.pixelRatio;
            const fill = node.fill();
            this.attributes[NodeAttrKey.COLOR].array[4 * (this.count + i)] = fill.r;
            this.attributes[NodeAttrKey.COLOR].array[4 * (this.count + i) + 1] = fill.g;
            this.attributes[NodeAttrKey.COLOR].array[4 * (this.count + i) + 2] = fill.b;
            this.attributes[NodeAttrKey.COLOR].array[4 * (this.count + i) + 3] = fill.a;
            this.attributes[NodeAttrKey.STROKE_WIDTH].array[this.count + i] =
                node.strokeWidth() * this.pixelRatio;
            const strokeColor = node.strokeColor();
            this.attributes[NodeAttrKey.STROKE_COLOR].array[4 * (this.count + i)] = strokeColor.r;
            this.attributes[NodeAttrKey.STROKE_COLOR].array[4 * (this.count + i) + 1] =
                strokeColor.g;
            this.attributes[NodeAttrKey.STROKE_COLOR].array[4 * (this.count + i) + 2] =
                strokeColor.b;
            this.attributes[NodeAttrKey.STROKE_COLOR].array[4 * (this.count + i) + 3] =
                strokeColor.a;
            const renderIdColor = utils_1.encodeRenderId(2 * (this.count + i)); // NOTE: node render id, use even integer
            this.idAttributes[NodeIdAttrKey.ID].array[4 * (this.count + i)] = renderIdColor.r;
            this.idAttributes[NodeIdAttrKey.ID].array[4 * (this.count + i) + 1] = renderIdColor.g;
            this.idAttributes[NodeIdAttrKey.ID].array[4 * (this.count + i) + 2] = renderIdColor.b;
            this.idAttributes[NodeIdAttrKey.ID].array[4 * (this.count + i) + 3] = renderIdColor.a;
            this.renderIdToId[2 * (this.count + i)] = node.id();
            this.idToIndex[node.id()] = this.count + i;
        });
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * this.count * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * this.count, attr.size * nodes.length);
            }
        });
        // id buffer data
        const attr = this.idAttributes[NodeIdAttrKey.ID];
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, attr.size * this.count * attr.array.BYTES_PER_ELEMENT, attr.array, attr.size * this.count, attr.size * nodes.length);
        this.count += nodes.length;
    }
    /**
     * render id to id
     * @param renderId render id in number
     */
    getIdByRenderId(renderId) {
        return this.renderIdToId[renderId];
    }
    /**
     * draw nodes
     */
    draw() {
        if (this.count > 0) {
            this.gl.enable(this.gl.BLEND);
            this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
            this.gl.useProgram(this.program);
            this.attributes.forEach((attr) => {
                this.gl.enableVertexAttribArray(attr.index);
            });
            this.attributes.forEach((attr, i) => {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
                this.gl.vertexAttribPointer(attr.index, attr.size, this.gl.FLOAT, false, attr.size * attr.array.BYTES_PER_ELEMENT, 0);
                if (!attr.isBuildIn)
                    this.gl.vertexAttribDivisor(attr.index, 1);
            });
        }
        this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count);
        // draw id
        this.gl.blendFunc(this.gl.ONE, this.gl.ZERO);
        this.gl.useProgram(this.idProgram);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.idTexture);
        this.idAttributes.forEach((attr) => {
            this.gl.enableVertexAttribArray(attr.index);
        });
        const attr = this.idAttributes[NodeIdAttrKey.ID];
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer);
        this.gl.vertexAttribPointer(attr.index, attr.size, this.gl.FLOAT, false, attr.size * attr.array.BYTES_PER_ELEMENT, 0);
        this.gl.vertexAttribDivisor(attr.index, 1);
        this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
    }
}
exports.RenderNodeManager = RenderNodeManager;


/***/ }),

/***/ "./src/renderer/elements/node/vertex.glsl":
/*!************************************************!*\
  !*** ./src/renderer/elements/node/vertex.glsl ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\nin vec3 inVertexPos;\r\nin vec2 inPosition;\r\nin float inRadius;\r\nin vec4 inFill;\r\nin float inStrokeWidth;\r\nin vec4 inStrokeColor;\r\n\r\nout vec2 pos;\r\nout float radius;\r\nout vec4 color;\r\nout float strokeWidth;\r\nout vec4 strokeColor;\r\n\r\nuniform mat3 projection;\r\nuniform vec2 scale;\r\nuniform vec2 translate;\r\nuniform vec2 viewport;\r\n\r\nvoid main(void) {\r\n    float size = inRadius + inStrokeWidth / 2.;\r\n    radius = inRadius;\r\n    color = inFill;\r\n    strokeWidth = inStrokeWidth;\r\n    strokeColor = inStrokeColor;\r\n    float vertexSize = size * (2. * sqrt(2.)) * 1.5; // NOTE: x 1.5 to prevent border factor\r\n    pos = scale * inPosition + translate;\r\n    mat3 transform = mat3(\r\n        vertexSize, 0, 0,\r\n        0, vertexSize, 0,\r\n        pos.x, pos.y, 1\r\n    );\r\n\r\n    gl_Position = vec4(projection * transform * inVertexPos, 1.);\r\n}");

/***/ }),

/***/ "./src/renderer/index.ts":
/*!*******************************!*\
  !*** ./src/renderer/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description render graph using webgl
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
const render_node_1 = __webpack_require__(/*! ./elements/node/render-node */ "./src/renderer/elements/node/render-node.ts");
const render_link_1 = __webpack_require__(/*! ./elements/link/render-link */ "./src/renderer/elements/link/render-link.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/renderer/utils.ts");
class Renderer {
    /**
     * create renderer object
     * @param configs {canvas: HTMLCanvasElement, width: number, height: number, backgroundColor: Color, defaultConfigs: Object} configs passed to renderer
     */
    constructor(configs) {
        const { canvas, width, height, backgroundColor, nodeLimit, linkLimit } = configs;
        try {
            this.gl = canvas.getContext('webgl2');
        }
        catch (_a) {
            throw new Error('NetV requires WebGL2 supported by your browser');
        }
        this.backgroundColor = backgroundColor;
        this.width = width;
        this.height = height;
        this.initIdTexture();
        this.nodeManager = new render_node_1.RenderNodeManager(this.gl, { width, height, limit: nodeLimit }, this.idTexture);
        this.linkManager = new render_link_1.RenderLinkManager(this.gl, { width, height, limit: linkLimit }, this.idTexture);
    }
    /**
     * set clearColor for renderer
     * @param color
     */
    setBackgroundColor(color) {
        this.backgroundColor = color;
    }
    /**
     * clear data in renderer
     */
    clearData() {
        this.nodeManager.clearData();
        this.linkManager.clearData();
    }
    /**
     * add nodes to node manager
     * @param nodes node data in NetV
     */
    addNodes(nodes) {
        this.nodeManager.addData(nodes);
    }
    /**
     * add links to link manager
     * @param links link data in NetV
     */
    addLinks(links) {
        this.linkManager.addData(links);
    }
    setTransform(transform) {
        this.nodeManager.setTransform(transform);
        this.linkManager.setTransform(transform);
        this.draw();
    }
    /**
     * draw all elements
     */
    draw() {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.idTexture);
        this.gl.clearColor(1, 1, 1, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.clearColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, this.backgroundColor.a);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.linkManager.draw();
        this.nodeManager.draw();
    }
    /**
     * get element's id at (x, y) of canvas if exists
     * @param x x pos
     * @param y y pos
     */
    getIdByPosition(position) {
        const renderId = this.readIdTexture(position);
        if (renderId >= 0) {
            if (renderId % 2 === 0) {
                // NOTE: node has even render id, link has odd render id
                const nodeId = this.nodeManager.getIdByRenderId(renderId);
                return nodeId;
            }
            else {
                const linkIds = this.linkManager.getIdsByRenderId(renderId);
                return linkIds;
            }
        }
    }
    /**
     * read pixel value at (x, y) of texture
     * @param x x pos
     * @param y y pos
     */
    readIdTexture(position) {
        const ratio = window.devicePixelRatio || 1;
        this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, this.idTexture);
        const readPixelBuffer = new Uint8Array([255, 255, 255, 255]); // -1
        this.gl.readPixels(
        // !Warning: x and y are optional in Position, need to check them
        position.x * ratio, position.y * ratio, 1, 1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, readPixelBuffer);
        const objectID = utils_1.decodeRenderId(readPixelBuffer);
        return objectID;
    }
    /**
     * init WebGL texture for recording position of elements
     */
    initIdTexture() {
        const gl = this.gl;
        const pixelRatio = window.devicePixelRatio || 1;
        const screenWidth = this.width * pixelRatio;
        const screenHeight = this.height * pixelRatio;
        const fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        const idTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, idTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, screenWidth, screenHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, idTexture, 0);
        // TODO: need simplify
        gl.drawBuffers([0].map((v) => v + gl.COLOR_ATTACHMENT0));
        const rbo = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, rbo);
        gl.clearColor(1, 1, 1, 1);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH24_STENCIL8, screenWidth, screenHeight);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, rbo);
        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
            throw new Error('Framebuffer generate failed');
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        this.idTexture = fbo;
    }
}
exports.Renderer = Renderer;


/***/ }),

/***/ "./src/renderer/utils.ts":
/*!*******************************!*\
  !*** ./src/renderer/utils.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description utility functions for renderer
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeRenderId = exports.encodeRenderId = exports.extractAttributesFromShader = exports.createArrayBuffer = exports.createProgram = exports.compileShader = void 0;
/**
 * compile webgl shader
 * @param gl WebGL instance
 * @param shaderStr shader file in string
 * @param shaderType vertex or fragment shader
 */
function compileShader(gl, shaderStr, shaderType) {
    const shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderStr);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error('Shader compile failed: ' + gl.getShaderInfoLog(shader));
    }
    return shader;
}
exports.compileShader = compileShader;
/**
 * generate WebGL program
 * @param gl WebGL instance
 * @param vertShaderStr vertex shader in string format
 * @param fragShaderStr fragment shader in string format
 * @param attributes attributes
 */
function createProgram(gl, vertShaderStr, fragShaderStr, attributes) {
    const vertShader = compileShader(gl, vertShaderStr, gl.VERTEX_SHADER);
    const fragShader = compileShader(gl, fragShaderStr, gl.FRAGMENT_SHADER);
    const program = gl.createProgram();
    attributes.forEach((attr) => {
        gl.bindAttribLocation(program, attr.index, attr.name);
    });
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(`Could not link shaders: ${gl.getProgramInfoLog(program)}`);
    }
    return program;
}
exports.createProgram = createProgram;
/**
 * create WebGL array buffer given data array
 * @param gl WebGL context
 * @param data data to store in buffer
 * @returns WebGL buffer store given data
 */
function createArrayBuffer(gl, data) {
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);
    return buffer;
}
exports.createArrayBuffer = createArrayBuffer;
/**
 * extract attributes from a shader sring
 * @param {string} shaderStr
 * @returns {RenderAttribute[]} attributes array
 */
function extractAttributesFromShader(shaderStr) {
    const matchings = shaderStr.match(/in\s.*;/g);
    return matchings.map((match, index) => {
        const name = match.split(' ')[2].slice(0, -1);
        const type = match.split(' ')[1];
        let size = 1;
        if (type.slice(0, 3) === 'vec') {
            size = Number(type.slice(-1));
        }
        let isBuildIn = false;
        if (name === 'inVertexPos') {
            isBuildIn = true;
        }
        return {
            name,
            size,
            index,
            isBuildIn
        };
    });
}
exports.extractAttributesFromShader = extractAttributesFromShader;
/**
 * encode a render id as color to pass in texture
 * @param id render id
 */
function encodeRenderId(id) {
    // split a large number by 8-bit: id = concat(a, b, g, r), and normalize them into (0, 1)
    const r = (id & 255) / 255.0;
    const g = ((id >> 8) & 255) / 255.0;
    const b = ((id >> 16) & 255) / 255.0;
    const a = ((id >> 24) & 255) / 255.0;
    return { r, g, b, a };
}
exports.encodeRenderId = encodeRenderId;
/**
 * decode pixel value to number
 * @param pixelVal a pixel's value on texture
 */
function decodeRenderId(pixelVal) {
    // parse normalized parts of id number, bit shift to origin position and concat
    const renderId = pixelVal[0] | (pixelVal[1] << 8) | (pixelVal[2] << 16) | (pixelVal[3] << 24);
    return renderId;
}
exports.decodeRenderId = decodeRenderId;


/***/ }),

/***/ "./src/utils/is.ts":
/*!*************************!*\
  !*** ./src/utils/is.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidId = void 0;
/**
 * Test whether a string can be a valid id of a Node.
 * @param {string} value: the string tobe tested
 * @returns {boolean}
 */
function isValidId(value) {
    return value !== undefined && typeof value === 'string' && value.length > 0;
}
exports.isValidId = isValidId;


/***/ }),

/***/ "./src/utils/map2.ts":
/*!***************************!*\
  !*** ./src/utils/map2.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Jiacheng Pan <jackieanxis@gmail.com>
 * @description Map2 is a Map data structure which maps two keys to one value.
 * @Usage same to Map data structure in ES6.
 * @dependences None
 */
Object.defineProperty(exports, "__esModule", { value: true });
const JOIN = String.fromCharCode(7);
const isKeys = (keys) => {
    return (keys instanceof Array &&
        keys.length === 2 &&
        keys.every((key) => key !== undefined && key !== null));
};
class Map2 {
    constructor(entries) {
        this.map = new Map();
        if (entries instanceof Array) {
            entries.forEach((entry) => {
                let [key, value] = entry;
                this.set(key, value);
            });
        }
    }
    get size() {
        return this.map.size;
    }
    delete(keys) {
        if (isKeys(keys)) {
            const key = keys.join(JOIN);
            const key_ = keys[1] + JOIN + keys[0];
            let map = this.map;
            map.delete(key);
            map.delete(key_);
        }
    }
    set(keys, value) {
        if (isKeys(keys)) {
            const key = keys.join(JOIN);
            const key_ = keys[1] + JOIN + keys[0];
            let map = this.map;
            if (!map.has(key_)) {
                map.set(key, value);
            }
            else {
                map.set(key_, value);
            }
        }
        return this;
    }
    get(keys) {
        if (isKeys(keys)) {
            const key = keys.join(JOIN);
            const key_ = keys[1] + JOIN + keys[0];
            return this.map.get(key) || this.map.get(key_);
        }
        else {
            return undefined;
        }
    }
    has(keys) {
        if (isKeys(keys)) {
            const key = keys.join(JOIN);
            const key_ = keys[1] + JOIN + keys[0];
            return this.map.has(key) || this.map.has(key_);
        }
        else {
            return false;
        }
    }
    forEach(func) {
        this.map.forEach((value, key) => {
            let keys = key.split(JOIN);
            func(value, keys, this);
        });
    }
    entries() {
        return [...this.map.entries()].map((entry) => {
            const key = entry[0].split(JOIN);
            const value = entry[1];
            return [key, value];
        });
    }
    keys() {
        let keys = [...this.map.keys()];
        return keys.map((key) => key.split(JOIN));
    }
    values() {
        return [...this.map.values()];
    }
}
exports.default = Map2;


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description some utility functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformGraphPosition = void 0;
/**
 * given a graph data with position, return a copy of graph, with position transformed to center of given size
 * @param graph node link graph data
 * @param size graph size (max(width, height))
 * @param centerX x pos of graph center
 * @param centerY y pos of graph center
 */
function transformGraphPosition(graph, size, centerX, centerY) {
    const targetGraph = JSON.parse(JSON.stringify(graph));
    const xs = targetGraph.nodes.map((node) => node.x);
    const ys = targetGraph.nodes.map((node) => node.y);
    const xMin = Math.min(...xs);
    const xMax = Math.max(...xs);
    const yMin = Math.min(...ys);
    const yMax = Math.max(...ys);
    const xMid = (xMin + xMax) / 2;
    const yMid = (yMin + yMax) / 2;
    targetGraph.nodes.forEach((node) => {
        node.x = ((node.x - xMid) / (xMax - xMin)) * size + centerX;
        node.y = ((node.y - yMid) / (yMax - yMin)) * size + centerY;
    });
    return targetGraph;
}
exports.transformGraphPosition = transformGraphPosition;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXNldC9taXNlcmFibGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhc2V0L3BhdGVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmFjdGlvbi9pbnRlcmFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFiZWwvbGFiZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2VsZW1lbnRzL2xpbmsvZnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbGluay9pZC1mcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9saW5rL2lkLXZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9saW5rL3JlbmRlci1saW5rLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9saW5rL3ZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9lbGVtZW50cy9ub2RlL2ZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL2VsZW1lbnRzL25vZGUvaWQtZnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbm9kZS9pZC12ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbm9kZS9yZW5kZXItbm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvZWxlbWVudHMvbm9kZS92ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbWFwMi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7R0FHRzs7O0FBS1UsYUFBSyxHQUFHLEdBQUc7QUFDWCxjQUFNLEdBQUcsR0FBRztBQUNaLHVCQUFlLEdBQUcsRUFBRSxD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RUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzNFLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekUsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM1RSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JFLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRixFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzlFLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDNUUsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9FLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZFLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMzRSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMxRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FB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USxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQzdELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0s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QUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDeEQsRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pFLEVBQUUsTUFBTSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM1RCxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDNUQsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xFLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pFLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BFLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvRCxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzNELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNuRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdEQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbEQsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM5QyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzlDLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzNELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNoRCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDbkQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN2RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM1RCxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDdkQsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN4RCxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZELEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDMUQsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwRCxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2xELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDaEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxL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QUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1FBQzNDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUU7UUFDM0MsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUU7UUFDM0MsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUU7UUFDM0MsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUU7UUFDekQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRTtRQUN6RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1FBQ3pELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQzFDLEVBQUUsTUFBTSxFQUFF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UUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVO1FBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7UUFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTtRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVTtRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsU0FBUztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsTUFBTTtRQUV2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVztRQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsYUFBYSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQztRQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO1FB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QVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBRTVFLE1BQU0sYUFBYSxHQUFHLHNCQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyx3Q0FBd0M7WUFDdkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FB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QUVsRixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVU7WUFFdEYsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBRTNFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVO1lBRXhDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxX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QUM7SUFDNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRTVCLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDOUIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUU5QixXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsT0FBTztRQUMzRCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLE9BQU87SUFDL0QsQ0FBQyxDQUFDO0lBRUYsT0FBTyxXQUFXO0FBQ3RCLENBQUM7QUF2QkQsd0RBdUJDIiwiZmlsZSI6Ik5ldFYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gZGVmYXVsdCBjb25maWd1cmF0aW9ucyBpbiBOZXRWXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqL1xyXG5cclxuaW1wb3J0IE5vZGUgZnJvbSAnLi9ub2RlJ1xyXG5pbXBvcnQgTGluayBmcm9tICcuL2xpbmsnXHJcblxyXG5leHBvcnQgY29uc3Qgd2lkdGggPSA4MDBcclxuZXhwb3J0IGNvbnN0IGhlaWdodCA9IDYwMFxyXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAxLCBhOiAxIH1cclxuZXhwb3J0IGNvbnN0IGVuYWJsZVBhblpvb20gPSB0cnVlXHJcbmV4cG9ydCBjb25zdCBub2RlTGltaXQgPSAxMDBcclxuZXhwb3J0IGNvbnN0IGxpbmtMaW1pdCA9IDEwMDBcclxuZXhwb3J0IGNvbnN0IGxhenlVcGRhdGVUaHJlc2hvbGQgPSAxMFxyXG5cclxuZXhwb3J0IGNvbnN0IG5vZGUgPSB7XHJcbiAgICByOiA1LFxyXG4gICAgZmlsbDogeyByOiAwLjIsIGc6IDAuNiwgYjogMC4yLCBhOiAwLjggfSxcclxuICAgIC8vIHN0cm9rZUNvbG9yOiB7IHI6IDAuNiwgZzogMC42LCBiOiAwLjYsIGE6IDAuNSB9LFxyXG4gICAgc3Ryb2tlQ29sb3I6IHsgcjogMC45LCBnOiAwLjksIGI6IDAuOSwgYTogMC42IH0sXHJcbiAgICBzdHJva2VXaWR0aDogMixcclxuICAgIHNob3dMYWJlbDogZmFsc2UsXHJcbiAgICAvLyB0ZXh0T2Zmc2V0OiB7IHg6IDgsIHk6IDAgfSwgcHV0IGluIGxhYmVsIGNvbmZpZyBpbnN0ZWFkIG9mIGVhY2ggbm9kZVxyXG4gICAgY2xpY2tDYWxsYmFjazogKG5vZGU6IE5vZGUpID0+IHt9LFxyXG4gICAgaG92ZXJDYWxsYmFjazogKG5vZGU6IE5vZGUpID0+IHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rID0ge1xyXG4gICAgLy8gc3Ryb2tlQ29sb3I6IHsgcjogMC41LCBnOiAwLjUsIGI6IDAuNSwgYTogMC4yIH0sXHJcbiAgICBzdHJva2VDb2xvcjogeyByOiAwLjQsIGc6IDAuNiwgYjogMC44LCBhOiAwLjUgfSxcclxuICAgIHN0cm9rZVdpZHRoOiAyLFxyXG4gICAgY2xpY2tDYWxsYmFjazogKGxpbms6IExpbmspID0+IHt9LFxyXG4gICAgaG92ZXJDYWxsYmFjazogKG5vZGU6IE5vZGUpID0+IHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsYWJlbCA9IHtcclxuICAgIG9mZnNldDogeyB4OiA4LCB5OiAwIH0sXHJcbiAgICBmb250U2l6ZTogMTgsXHJcbiAgICBzdHJva2VXaWR0aDogMC41XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBidWlsZC1pbiBkYXRhc2V0IGluIE5ldFZcclxuICovXHJcblxyXG5pbXBvcnQgeyBtaXNlcmFibGVzIH0gZnJvbSAnLi9taXNlcmFibGVzJ1xyXG5pbXBvcnQgeyBwYXRlbnRzIH0gZnJvbSAnLi9wYXRlbnRzJ1xyXG5cclxuZXhwb3J0IHsgbWlzZXJhYmxlcywgcGF0ZW50cyB9XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gTGVzIE1pc2VyYWJsZXMgcmVsYXRpb24gZGF0YXNldC5cclxuICovXHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIGdlbmVyYXRlZCBieSBkMy1mb3JjZTogaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BkMy9mb3JjZS1kaXJlY3RlZC1ncmFwaFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBtaXNlcmFibGVzID0ge1xyXG4gICAgbm9kZXM6IFtcclxuICAgICAgICB7IGlkOiAnTXlyaWVsJywgeDogMjkzLjQ3MTQ1MTE3NTUzNjIzLCB5OiAzNTYuNDMzNTcxODEwNDEzOCwgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnTmFwb2xlb24nLCB4OiAyNTMuOTAyNTA4ODYxODY1NiwgeTogMzc0LjMwNTgxMTY1MzY0NDUsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ01sbGUuQmFwdGlzdGluZScsIHg6IDM1MC45MjcyNDk4OTkxODA3NywgeTogMzMyLjMzMjU1Mzk5OTk5NDMsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ01tZS5NYWdsb2lyZScsIHg6IDM1Ni4wOTE2MTU2NTM5OTk3LCB5OiAzNTIuNzg4NTc5OTExNjAxNSwgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnQ291bnRlc3NkZUxvJywgeDogMjU0LjI5MjkxNTIwOTg5MzM1LCB5OiAzNTcuMzE3NTczNDA3NjQxNywgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnR2Vib3JhbmQnLCB4OiAyNTcuODU3MjkzNjI2MjAxLCB5OiAzMzUuODU0Mjc2MjgzNTg5NTcsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0NoYW1wdGVyY2llcicsIHg6IDI1OS42MjU1NTYzODI1MDI4LCB5OiAzODMuODMwMjc0Njk4MzI4MTQsIGdyb3VwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ0NyYXZhdHRlJywgeDogMjQ5Ljg1OTY0NTk4MjkxMzksIHk6IDM0Ni4xODIyNTUxNjgzMjQ5NiwgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnQ291bnQnLCB4OiAyNjkuOTY3OTM5NTEzNTA5MjQsIHk6IDM5MC42ODAwODQyMzIxNTcxLCBncm91cDogMSB9LFxyXG4gICAgICAgIHsgaWQ6ICdPbGRNYW4nLCB4OiAyNDYuNzM5NTIzMTEyNzc2NjUsIHk6IDM2NC41OTM1NzQ5NDQzMjA2NiwgZ3JvdXA6IDEgfSxcclxuICAgICAgICB7IGlkOiAnTGFiYXJyZScsIHg6IDQ0My41MTY1ODMzMTUwMjYsIHk6IDM1OC4yOTIwNDc4OTQ3NzY4MywgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnVmFsamVhbicsIHg6IDQ0Mi4xNjg5NDc1NzY0MTUwNiwgeTogMzIwLjgzMTU1MzIxNjA4NjEsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ01hcmd1ZXJpdGUnLCB4OiA0MTMuMzgxNjg1MTAwNzkzMSwgeTogMjQwLjA0MDkxNTU5Mjk2NTA0LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuZGVSJywgeDogNDI3LjIzNjE3MTU5NTAyNTQsIHk6IDM1NS4xMDIxMTU4OTk3OTUxNCwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnSXNhYmVhdScsIHg6IDQwNS44NTA4Mjg1ODE5MTgzNCwgeTogMzMwLjUyMDE1MTIyMDUwODUsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0dlcnZhaXMnLCB4OiA0MDUuMjExMzEyMTkwNjg4MSwgeTogMzE2LjI5MTI1MzU5Mzk2MTM2LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdUaG9sb215ZXMnLCB4OiA0MjIuNDEyNTMwNzc4MTY0NiwgeTogMTI2LjA3NjQ5NDQ5Nzc1ODA2LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdMaXN0b2xpZXInLCB4OiAzNjMuMTcyOTQyMjY3Nzk3OSwgeTogMTAyLjc3ODkwMzY4Mjg5Nzg1LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdGYW1ldWlsJywgeDogMzgxLjc5NDcxMDMwOTQwMjgsIHk6IDY2LjU4MTMzNzI0MDQzOTQ4LCBncm91cDogMyB9LFxyXG4gICAgICAgIHsgaWQ6ICdCbGFjaGV2aWxsZScsIHg6IDM4My4xNzkyNjc2NzQwMjYxLCB5OiA5NC44MDMyMDMxNTUwMDE1NCwgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnRmF2b3VyaXRlJywgeDogMzYxLjg5MzczMTY0NDI4NSwgeTogNzAuMzg2OTYzODEzODQwNzQsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ0RhaGxpYScsIHg6IDM5OC43NTM1MDk4ODM1MTY1MywgeTogNzcuMDk3MDA3NTE1MjcxMTksIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ1plcGhpbmUnLCB4OiAzNDkuMDQ5NTkxNDYwMTM3NiwgeTogODguODA4ODg2MTMzNzI3MTMsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ0ZhbnRpbmUnLCB4OiAzOTguMDE0MTE0Mzg3MDI0NzMsIHk6IDE3My43NjQ0NDE5Njk0NTk3NywgZ3JvdXA6IDMgfSxcclxuICAgICAgICB7IGlkOiAnTW1lLlRoZW5hcmRpZXInLCB4OiA0NzEuMjUxNjUzMzM4NjcyNSwgeTogMjYyLjIxODcwMTY2NjY0NSwgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnVGhlbmFyZGllcicsIHg6IDUwNC44MTY3MjA4NTYwMzA2NiwgeTogMjgzLjA0NjM4OTAwNDgxNzIzLCBncm91cDogNCB9LFxyXG4gICAgICAgIHsgaWQ6ICdDb3NldHRlJywgeDogNDcyLjMzNDY5NDE0ODcxOTIsIHk6IDIyOC42ODc3OTQ0MzMwMzQ3OCwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnSmF2ZXJ0JywgeDogNDYwLjA1MjU3Njg5MzMyODM2LCB5OiAyOTUuNTU3ODE1NDI2ODkwNCwgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnRmF1Y2hlbGV2ZW50JywgeDogMzg1LjQzOTM1NzY0NTg5OTg2LCB5OiAzMDIuMTI4MjQ1ODg2MjI4NTcsIGdyb3VwOiAwIH0sXHJcbiAgICAgICAgeyBpZDogJ0JhbWF0YWJvaXMnLCB4OiAzOTMuMTkwNDE1OTAzODM1OTcsIHk6IDM0NS40OTcxNjY3NjkwODE3LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdQZXJwZXR1ZScsIHg6IDM2Ny41MzgzMzEzMjg5Mzk3NiwgeTogMTk0LjU1NTY0ODIzMDYyNzEsIGdyb3VwOiAzIH0sXHJcbiAgICAgICAgeyBpZDogJ1NpbXBsaWNlJywgeDogNDAxLjM2MjIyNTIzNTQ2NTUsIHk6IDI0Mi45OTgyODQ3OTk0NTc2LCBncm91cDogMiB9LFxyXG4gICAgICAgIHsgaWQ6ICdTY2F1ZmZsYWlyZScsIHg6IDQxNC42NzA3Mjc5OTYyNzU3MywgeTogMzQ0LjA1NDc3MjA5NDU3MzYsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ1dvbWFuMScsIHg6IDQyMS40MTY3NDE0MzkyNDI2LCB5OiAyOTMuMzExMjAyMTkxMjkzOTQsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0p1ZGdlJywgeDogNDIwLjA0MzkyMDA3ODQxMzM1LCB5OiA0MDEuMDMyMzM2MDkxNTI3NDQsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0NoYW1wbWF0aGlldScsIHg6IDM3Ny43OTUyNDI1NDYyMTgzMywgeTogMzgzLjgxMDU3ODcxMTUxMDIsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0JyZXZldCcsIHg6IDQwMS45NTI5ODQ0NDY5OTkyLCB5OiAzODguODY4NDc4Mjk4NzQxMSwgZ3JvdXA6IDIgfSxcclxuICAgICAgICB7IGlkOiAnQ2hlbmlsZGlldScsIHg6IDQwMC42Njg1NzA3MTMzNTM4LCB5OiA0MTMuNDk0MTc3OTA1MjM0NjYsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ0NvY2hlcGFpbGxlJywgeDogMzc5LjA0OTY5NzA0NDYyMzU0LCB5OiA0MDQuMjY5NzQwNTkyMzMxNjMsIGdyb3VwOiAyIH0sXHJcbiAgICAgICAgeyBpZDogJ1BvbnRtZXJjeScsIHg6IDU1My4xMTM3NDAxNzUwMTk4LCB5OiAyNDQuOTI4MzAwMjczNjA3NjUsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ0JvdWxhdHJ1ZWxsZScsIHg6IDQ5MC4xNTcxMDg2MDg2OTMyLCB5OiAyNDkuMjEwMTkyMzgzNTgwMywgZ3JvdXA6IDYgfSxcclxuICAgICAgICB7IGlkOiAnRXBvbmluZScsIHg6IDU0OS43NTg0MjY3NTcxODkyLCB5OiAzMDIuOTAzMTA2NTIyODQzMSwgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnQW56ZWxtYScsIHg6IDUxNS4zODA3Mzk5Mzk1MTM0LCB5OiAyNTcuMDE3OTY4ODk4MzkxMSwgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnV29tYW4yJywgeDogNDMzLjY2MDg2NjUzNDA1MTQsIHk6IDI2NS44MTc0NjczODg2NjM0LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNb3RoZXJJbm5vY2VudCcsIHg6IDQwMy4wMjUzNjI1NzQxNjUyMywgeTogMjg5LjAzMzEyMjAwMTIxMzI2LCBncm91cDogMCB9LFxyXG4gICAgICAgIHsgaWQ6ICdHcmliaWVyJywgeDogMzQxLjgwOTczMjI3NDU2Nzc1LCB5OiAyOTQuMjEyMzk2MTQ4MDIzLCBncm91cDogMCB9LFxyXG4gICAgICAgIHsgaWQ6ICdKb25kcmV0dGUnLCB4OiA1NjUuMTk2NTMwMzQyMjE4NiwgeTogNDcwLjY1OTUwMzQ5Mzc1ODU2LCBncm91cDogNyB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbWUuQnVyZ29uJywgeDogNTY5LjE4OTYyNjkyNDIxMDEsIHk6IDQyNi42NjE4NTA1MzgyNDU2MywgZ3JvdXA6IDcgfSxcclxuICAgICAgICB7IGlkOiAnR2F2cm9jaGUnLCB4OiA1NzIuMTYxOTM5MzkzNjgyNiwgeTogMzY0LjIyNjA2NzY2NDk3NTYzLCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdHaWxsZW5vcm1hbmQnLCB4OiA1MjQuNTkxNDUwNTIwODAwNSwgeTogMjU3LjQwMTIyMTQ4MjgzMzYsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01hZ25vbicsIHg6IDQ5Mi41NDgzOTMyMDIzNDEsIHk6IDIyMi41OTY2MzUxMzI4ODg1LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHg6IDUxNC4zNjkyNjU1MDIzNjQ0LCB5OiAyMjkuMDk2NzAwNjIzODkyODEsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ01tZS5Qb250bWVyY3knLCB4OiA1NDkuMzI1MDUwODE3MTQ3NCwgeTogMTk2LjE0MDU2ODMzMDg0OTM2LCBncm91cDogNSB9LFxyXG4gICAgICAgIHsgaWQ6ICdNbGxlLlZhdWJvaXMnLCB4OiA1MTcuODU5MzU3MjM5NDA3MSwgeTogMTg2LjI0ODgzMDkxMTE1NjUsIGdyb3VwOiA1IH0sXHJcbiAgICAgICAgeyBpZDogJ0x0LkdpbGxlbm9ybWFuZCcsIHg6IDU0My4yNzQ5NjExMzk0NTUsIHk6IDIyMy42ODE4NDI4NTE4MDk3NiwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTWFyaXVzJywgeDogNTc0LjI1NzY2OTkwNTYxMzksIHk6IDI4My44NTIxMTcwODMxMDMzNCwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnQmFyb25lc3NUJywgeDogNTczLjcxNDA5MDk2NTA2MjUsIHk6IDI0NS41OTMxMTkwOTI0NTgxOCwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnTWFiZXVmJywgeDogNjI4LjU0MzI1MzI0ODYxOTEsIHk6IDMxNC4yMjA3ODQwODYyNzE2NCwgZ3JvdXA6IDggfSxcclxuICAgICAgICB7IGlkOiAnRW5qb2xyYXMnLCB4OiA1ODguMjM5NTQ5ODA5MzYyNiwgeTogMzQyLjA1OTQ0Njk5MjMyNzksIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ0NvbWJlZmVycmUnLCB4OiA2MzcuNzM3MDY2NDYxNDYzNywgeTogMzUxLjY5MjM1NzYyNzg4Mzk1LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdQcm91dmFpcmUnLCB4OiA2NTAuODgzMzUyMjg2OTkwMywgeTogMzg2LjgzOTE4MTAzNTA5OTE2LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdGZXVpbGx5JywgeDogNjI2Ljg1NTY2MDY0MzgxMDksIHk6IDM2NS45MDg0MTY0NTkzMTQxLCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdDb3VyZmV5cmFjJywgeDogNjI4LjM0NDg5ODk5NzUwMTMsIHk6IDMzNi43NjY2NDU0MTE5MDIyLCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCYWhvcmVsJywgeDogNjU2Ljc3MTc3NzI3NjQ5ODUsIHk6IDM2Mi41ODg1ODgyNTA5MTg5LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdCb3NzdWV0JywgeDogNTk5LjAxODU3NjU3NDMxMDcsIHk6IDM2My44Mjg2NzIzNDA3MDUzLCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdKb2x5JywgeDogNjU2LjYxODI5MjM3MzU0MDgsIHk6IDM0My4yMzc1NzMzNTU5MTY1LCBncm91cDogOCB9LFxyXG4gICAgICAgIHsgaWQ6ICdHcmFudGFpcmUnLCB4OiA2MzguNDM3NTg1NTMxNDk4OCwgeTogNDAyLjQzODcyNTAzNzg5OTUsIGdyb3VwOiA4IH0sXHJcbiAgICAgICAgeyBpZDogJ01vdGhlclBsdXRhcmNoJywgeDogNjY0LjU1NjcyMzg2MTg4MywgeTogMjk4LjAzMzY5NjQ1MjY3ODYsIGdyb3VwOiA5IH0sXHJcbiAgICAgICAgeyBpZDogJ0d1ZXVsZW1lcicsIHg6IDUwOC4xNjQ1MDUyNTgxNzgwNSwgeTogMzMwLjQ1MDI5MDc0NDQzNjcsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ0JhYmV0JywgeDogNDkyLjU2MDA1Mjc5ODgyMDk1LCB5OiAzMjUuOTgzNDA5Mjg0ODQyNywgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnQ2xhcXVlc291cycsIHg6IDUxMC45Mzg1NTUwNjI1MDA3NywgeTogMzA5LjI4NjkzODA2OTczMjgsIGdyb3VwOiA0IH0sXHJcbiAgICAgICAgeyBpZDogJ01vbnRwYXJuYXNzZScsIHg6IDUwMi43MTkwODk0MTczNTU3LCB5OiAzNTAuOTI3NTE4MzEzMzQzOCwgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnVG91c3NhaW50JywgeDogNDQ1LjEyNTQ4MDIwNTY4MDcsIHk6IDI2Ni40NjI0MjY2NTAyMjAwNCwgZ3JvdXA6IDUgfSxcclxuICAgICAgICB7IGlkOiAnQ2hpbGQxJywgeDogNTg4LjAzNTE1NTIzODY5NjEsIHk6IDQxMC4yMTk1NTU1OTYxOTk2LCBncm91cDogMTAgfSxcclxuICAgICAgICB7IGlkOiAnQ2hpbGQyJywgeDogNTU5LjI3Nzc4MTQ3ODI3MDUsIHk6IDQwOC4zNTMzMTg0ODkzNTY5LCBncm91cDogMTAgfSxcclxuICAgICAgICB7IGlkOiAnQnJ1am9uJywgeDogNTM3LjE3ODczODM5MDQ2NTYsIHk6IDMzNy44NjkyMjc3NTkxNzk0NywgZ3JvdXA6IDQgfSxcclxuICAgICAgICB7IGlkOiAnTW1lLkh1Y2hlbG91cCcsIHg6IDYyNi4zNzc1ODUwNDY2MTY0LCB5OiAzODQuMzUyMDIwNjY4OTQ1MTYsIGdyb3VwOiA4IH1cclxuICAgIF0sXHJcblxyXG4gICAgbGlua3M6IFtcclxuICAgICAgICB7IHNvdXJjZTogJ05hcG9sZW9uJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01sbGUuQmFwdGlzdGluZScsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiA4IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuTWFnbG9pcmUnLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMTAgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5NYWdsb2lyZScsIHRhcmdldDogJ01sbGUuQmFwdGlzdGluZScsIHZhbHVlOiA2IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VudGVzc2RlTG8nLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2Vib3JhbmQnLCB0YXJnZXQ6ICdNeXJpZWwnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hhbXB0ZXJjaWVyJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NyYXZhdHRlJywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdW50JywgdGFyZ2V0OiAnTXlyaWVsJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ09sZE1hbicsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdWYWxqZWFuJywgdGFyZ2V0OiAnTGFiYXJyZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdWYWxqZWFuJywgdGFyZ2V0OiAnTW1lLk1hZ2xvaXJlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1ZhbGplYW4nLCB0YXJnZXQ6ICdNbGxlLkJhcHRpc3RpbmUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVmFsamVhbicsIHRhcmdldDogJ015cmllbCcsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJndWVyaXRlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuZGVSJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdJc2FiZWF1JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHZXJ2YWlzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdMaXN0b2xpZXInLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFtZXVpbCcsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW1ldWlsJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JsYWNoZXZpbGxlJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JsYWNoZXZpbGxlJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JsYWNoZXZpbGxlJywgdGFyZ2V0OiAnRmFtZXVpbCcsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXZvdXJpdGUnLCB0YXJnZXQ6ICdUaG9sb215ZXMnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF2b3VyaXRlJywgdGFyZ2V0OiAnTGlzdG9saWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Zhdm91cml0ZScsIHRhcmdldDogJ0ZhbWV1aWwnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmF2b3VyaXRlJywgdGFyZ2V0OiAnQmxhY2hldmlsbGUnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRGFobGlhJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0RhaGxpYScsIHRhcmdldDogJ0xpc3RvbGllcicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdEYWhsaWEnLCB0YXJnZXQ6ICdGYW1ldWlsJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0RhaGxpYScsIHRhcmdldDogJ0JsYWNoZXZpbGxlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0RhaGxpYScsIHRhcmdldDogJ0Zhdm91cml0ZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdaZXBoaW5lJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ0ZhbWV1aWwnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ0JsYWNoZXZpbGxlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1plcGhpbmUnLCB0YXJnZXQ6ICdGYXZvdXJpdGUnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnWmVwaGluZScsIHRhcmdldDogJ0RhaGxpYScsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnVGhvbG9teWVzJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdMaXN0b2xpZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ0ZhbWV1aWwnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ0JsYWNoZXZpbGxlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhbnRpbmUnLCB0YXJnZXQ6ICdGYXZvdXJpdGUnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmFudGluZScsIHRhcmdldDogJ0RhaGxpYScsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnWmVwaGluZScsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnTWFyZ3Vlcml0ZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYW50aW5lJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiA5IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuVGhlbmFyZGllcicsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLlRoZW5hcmRpZXInLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1RoZW5hcmRpZXInLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVGhlbmFyZGllcicsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVGhlbmFyZGllcicsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMTIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Nvc2V0dGUnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3NldHRlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAzMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29zZXR0ZScsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3NldHRlJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKYXZlcnQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDE3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKYXZlcnQnLCB0YXJnZXQ6ICdGYW50aW5lJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0phdmVydCcsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSmF2ZXJ0JywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSmF2ZXJ0JywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGYXVjaGVsZXZlbnQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDggfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZhdWNoZWxldmVudCcsIHRhcmdldDogJ0phdmVydCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYW1hdGFib2lzJywgdGFyZ2V0OiAnRmFudGluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYW1hdGFib2lzJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhbWF0YWJvaXMnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1BlcnBldHVlJywgdGFyZ2V0OiAnRmFudGluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdTaW1wbGljZScsIHRhcmdldDogJ1BlcnBldHVlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1NpbXBsaWNlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdTaW1wbGljZScsIHRhcmdldDogJ0ZhbnRpbmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnU2ltcGxpY2UnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnU2NhdWZmbGFpcmUnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1dvbWFuMScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnV29tYW4xJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0p1ZGdlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKdWRnZScsIHRhcmdldDogJ0JhbWF0YWJvaXMnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hhbXBtYXRoaWV1JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGFtcG1hdGhpZXUnLCB0YXJnZXQ6ICdKdWRnZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGFtcG1hdGhpZXUnLCB0YXJnZXQ6ICdCYW1hdGFib2lzJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JyZXZldCcsIHRhcmdldDogJ0p1ZGdlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JyZXZldCcsIHRhcmdldDogJ0NoYW1wbWF0aGlldScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcmV2ZXQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JyZXZldCcsIHRhcmdldDogJ0JhbWF0YWJvaXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ0p1ZGdlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NoZW5pbGRpZXUnLCB0YXJnZXQ6ICdDaGFtcG1hdGhpZXUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ2hlbmlsZGlldScsIHRhcmdldDogJ0JyZXZldCcsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGVuaWxkaWV1JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGVuaWxkaWV1JywgdGFyZ2V0OiAnQmFtYXRhYm9pcycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ0p1ZGdlJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvY2hlcGFpbGxlJywgdGFyZ2V0OiAnQ2hhbXBtYXRoaWV1JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvY2hlcGFpbGxlJywgdGFyZ2V0OiAnQnJldmV0JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvY2hlcGFpbGxlJywgdGFyZ2V0OiAnQ2hlbmlsZGlldScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb2NoZXBhaWxsZScsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29jaGVwYWlsbGUnLCB0YXJnZXQ6ICdCYW1hdGFib2lzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1BvbnRtZXJjeScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm91bGF0cnVlbGxlJywgdGFyZ2V0OiAnVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFcG9uaW5lJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRXBvbmluZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQW56ZWxtYScsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQW56ZWxtYScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQW56ZWxtYScsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ1dvbWFuMicsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnV29tYW4yJywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdXb21hbjInLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW90aGVySW5ub2NlbnQnLCB0YXJnZXQ6ICdGYXVjaGVsZXZlbnQnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW90aGVySW5ub2NlbnQnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyaWJpZXInLCB0YXJnZXQ6ICdGYXVjaGVsZXZlbnQnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLkJ1cmdvbicsIHRhcmdldDogJ0pvbmRyZXR0ZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHYXZyb2NoZScsIHRhcmdldDogJ01tZS5CdXJnb24nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR2F2cm9jaGUnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dhdnJvY2hlJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dhdnJvY2hlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHaWxsZW5vcm1hbmQnLCB0YXJnZXQ6ICdDb3NldHRlJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dpbGxlbm9ybWFuZCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFnbm9uJywgdGFyZ2V0OiAnR2lsbGVub3JtYW5kJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hZ25vbicsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01sbGUuR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnR2lsbGVub3JtYW5kJywgdmFsdWU6IDkgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01sbGUuR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbGxlLkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW1lLlBvbnRtZXJjeScsIHRhcmdldDogJ01sbGUuR2lsbGVub3JtYW5kJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5Qb250bWVyY3knLCB0YXJnZXQ6ICdQb250bWVyY3knLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWxsZS5WYXVib2lzJywgdGFyZ2V0OiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTHQuR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTHQuR2lsbGVub3JtYW5kJywgdGFyZ2V0OiAnR2lsbGVub3JtYW5kJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0x0LkdpbGxlbm9ybWFuZCcsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnTWxsZS5HaWxsZW5vcm1hbmQnLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnR2lsbGVub3JtYW5kJywgdmFsdWU6IDEyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdQb250bWVyY3knLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnTHQuR2lsbGVub3JtYW5kJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0Nvc2V0dGUnLCB2YWx1ZTogMjEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMTkgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ1Rob2xvbXllcycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYXJpdXMnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01hcml1cycsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFyaXVzJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFyb25lc3NUJywgdGFyZ2V0OiAnR2lsbGVub3JtYW5kJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jhcm9uZXNzVCcsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYWJldWYnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTWFiZXVmJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNYWJldWYnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ01hcml1cycsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdFbmpvbHJhcycsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vuam9scmFzJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vuam9scmFzJywgdGFyZ2V0OiAnTWFiZXVmJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Vuam9scmFzJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb21iZWZlcnJlJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMTUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvbWJlZmVycmUnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ29tYmVmZXJyZScsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvbWJlZmVycmUnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnUHJvdXZhaXJlJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnUHJvdXZhaXJlJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnUHJvdXZhaXJlJywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0ZldWlsbHknLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnRmV1aWxseScsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdGZXVpbGx5JywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogOSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDE3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDb3VyZmV5cmFjJywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiAxMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NvdXJmZXlyYWMnLCB0YXJnZXQ6ICdNYWJldWYnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ0ZldWlsbHknLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQ291cmZleXJhYycsIHRhcmdldDogJ1Byb3V2YWlyZScsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0NvdXJmZXlyYWMnLCB2YWx1ZTogNiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogNCB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ0ZldWlsbHknLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFob3JlbCcsIHRhcmdldDogJ1Byb3V2YWlyZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWhvcmVsJywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdNYXJpdXMnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0NvdXJmZXlyYWMnLCB2YWx1ZTogMTIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnQmFob3JlbCcsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMTAgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdGZXVpbGx5JywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0Jvc3N1ZXQnLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogOSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQm9zc3VldCcsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCb3NzdWV0JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnQmFob3JlbCcsIHZhbHVlOiA1IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnQm9zc3VldCcsIHZhbHVlOiA3IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0NvdXJmZXlyYWMnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0Vuam9scmFzJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdGZXVpbGx5JywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0pvbHknLCB0YXJnZXQ6ICdQcm91dmFpcmUnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ0NvbWJlZmVycmUnLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnSm9seScsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdKb2x5JywgdGFyZ2V0OiAnTWFyaXVzJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0Jvc3N1ZXQnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnQ29tYmVmZXJyZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ0pvbHknLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3JhbnRhaXJlJywgdGFyZ2V0OiAnQmFob3JlbCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHcmFudGFpcmUnLCB0YXJnZXQ6ICdGZXVpbGx5JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0dyYW50YWlyZScsIHRhcmdldDogJ1Byb3V2YWlyZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb3RoZXJQbHV0YXJjaCcsIHRhcmdldDogJ01hYmV1ZicsIHZhbHVlOiAzIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdHdWV1bGVtZXInLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDUgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ1ZhbGplYW4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3VldWxlbWVyJywgdGFyZ2V0OiAnTW1lLlRoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnR3VldWxlbWVyJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ0dhdnJvY2hlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0d1ZXVsZW1lcicsIHRhcmdldDogJ0Vwb25pbmUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnR3VldWxlbWVyJywgdmFsdWU6IDYgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCYWJldCcsIHRhcmdldDogJ01tZS5UaGVuYXJkaWVyJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JhYmV0JywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQmFiZXQnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdUaGVuYXJkaWVyJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdCYWJldCcsIHZhbHVlOiA0IH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnR3VldWxlbWVyJywgdmFsdWU6IDQgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdWYWxqZWFuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdNbWUuVGhlbmFyZGllcicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDbGFxdWVzb3VzJywgdGFyZ2V0OiAnSmF2ZXJ0JywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0NsYXF1ZXNvdXMnLCB0YXJnZXQ6ICdFbmpvbHJhcycsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnQmFiZXQnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnR3VldWxlbWVyJywgdmFsdWU6IDIgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ0NsYXF1ZXNvdXMnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnTW9udHBhcm5hc3NlJywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNb250cGFybmFzc2UnLCB0YXJnZXQ6ICdFcG9uaW5lJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01vbnRwYXJuYXNzZScsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVG91c3NhaW50JywgdGFyZ2V0OiAnQ29zZXR0ZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdUb3Vzc2FpbnQnLCB0YXJnZXQ6ICdKYXZlcnQnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnVG91c3NhaW50JywgdGFyZ2V0OiAnVmFsamVhbicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGlsZDEnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGlsZDInLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdDaGlsZDInLCB0YXJnZXQ6ICdDaGlsZDEnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnQmFiZXQnLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnR3VldWxlbWVyJywgdmFsdWU6IDMgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ1RoZW5hcmRpZXInLCB2YWx1ZTogMyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnR2F2cm9jaGUnLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnQnJ1am9uJywgdGFyZ2V0OiAnRXBvbmluZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdCcnVqb24nLCB0YXJnZXQ6ICdDbGFxdWVzb3VzJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ0JydWpvbicsIHRhcmdldDogJ01vbnRwYXJuYXNzZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnQm9zc3VldCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnSm9seScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnR3JhbnRhaXJlJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdCYWhvcmVsJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdDb3VyZmV5cmFjJywgdmFsdWU6IDEgfSxcclxuICAgICAgICB7IHNvdXJjZTogJ01tZS5IdWNoZWxvdXAnLCB0YXJnZXQ6ICdHYXZyb2NoZScsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICdNbWUuSHVjaGVsb3VwJywgdGFyZ2V0OiAnRW5qb2xyYXMnLCB2YWx1ZTogMSB9XHJcbiAgICBdXHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBQYXRlbnRzIGRhdGFzZXQsIGZyb20gaHR0cHM6Ly93d3cucGF0ZW50c3ZpZXcub3JnL3dlYi8jdml6L3JlbGF0aW9uc2hpcHNcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgcGF0ZW50cyA9IHtcclxuICAgIG5vZGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTE2MjI3JyxcclxuICAgICAgICAgICAgbmFtZTogJ1JlY2hhcmdlYWJsZSBzcGluYWwgY29yZCBzdGltdWxhdG9yIHN5c3RlbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM2MyxcclxuICAgICAgICAgICAgeDogLTE0Ni41MDcyMjc3MjIwNjQxNixcclxuICAgICAgICAgICAgeTogMjM3Ljc4OTg4NDg4NjQxODJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjUzNTkwOScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTeXN0ZW0gYW5kIG1ldGhvZCBmb3IgcmVjb3JkIGFuZCBwbGF5YmFjayBvZiBjb2xsYWJvcmF0aXZlIFdlYiBicm93c2luZyBzZXNzaW9uJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDM4LFxyXG4gICAgICAgICAgICB4OiAzMDEuMDg4MDg0MDc0MDE3OCxcclxuICAgICAgICAgICAgeTogNzguMzU0NDkxOTE1ODc1NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTQ5OTA4JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2RzIGFuZCBhcHBhcmF0dXMgZm9yIGludGVycHJldGluZyB1c2VyIHNlbGVjdGlvbnMgaW4gdGhlIGNvbnRleHQgb2YgYSByZWxhdGlvbiBkaXN0cmlidXRlZCBhcyBhIHNldCBvZiBvcnRob2dvbmFsaXplZCBzdWItcmVsYXRpb25zJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjY4LFxyXG4gICAgICAgICAgICB4OiAtMTMuODE0ODU2NTkwNzQxMjAyLFxyXG4gICAgICAgICAgICB5OiAtMTgzLjU1MDE2NzkzNTAyNzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1MzU2MycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEZXZlbG9wbWVudCB0b29sLCBtZXRob2QsIGFuZCBzeXN0ZW0gZm9yIGNsaWVudCBzZXJ2ZXIgYXBwbGljYXRpb25zJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzUxLFxyXG4gICAgICAgICAgICB4OiAtMC41MjI0MzEyNzkwMTQyNzc3LFxyXG4gICAgICAgICAgICB5OiAtMjQ3LjE0OTU3Nzk2MjcyNzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1ODMyMCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnSGFuZGhlbGQgcGVyc29uYWwgZGF0YSBhc3Npc3RhbnQgKFBEQSkgd2l0aCBhIG1lZGljYWwgZGV2aWNlIGFuZCBtZXRob2Qgb2YgdXNpbmcgdGhlIHNhbWUnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1MTQsXHJcbiAgICAgICAgICAgIHg6IC0yMDQuNjQwNzE4OTQ2NTQ3ODgsXHJcbiAgICAgICAgICAgIHk6IDcxLjU3MDU1Mjg0NTEyMzEyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NTgzNTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2xvc2VkIGxvb3Agc3lzdGVtIGZvciBjb250cm9sbGluZyBpbnN1bGluIGluZnVzaW9uJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzY5LFxyXG4gICAgICAgICAgICB4OiAtMjEyLjk3ODE2MDAwMjE5Mzg3LFxyXG4gICAgICAgICAgICB5OiAxNC43MTU2NDA1MzQxNzAwOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTYwNDYxJyxcclxuICAgICAgICAgICAgbmFtZTogJ0F1dGhvcml6ZWQgbG9jYXRpb24gcmVwb3J0aW5nIHBhZ2luZyBzeXN0ZW0nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0NzksXHJcbiAgICAgICAgICAgIHg6IC0yNTAuNDM1NDMwNjI5MDUwOTMsXHJcbiAgICAgICAgICAgIHk6IC0xOTEuNDM3MjAwNjI0MDYwMzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU2MzE3NCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUaGluIGZpbG0gdHJhbnNpc3RvciBhbmQgbWF0cml4IGRpc3BsYXkgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjg0LFxyXG4gICAgICAgICAgICB4OiAtMTIuNTg4MjQ5NTAzNjUyNDAxLFxyXG4gICAgICAgICAgICB5OiAtMy42MDY2Mzg5MjUwNzQ5NTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU2NTUwOScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmFseXRlIG1vbml0b3JpbmcgZGV2aWNlIGFuZCBtZXRob2RzIG9mIHVzZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMzMyxcclxuICAgICAgICAgICAgeDogLTEwNS4yNTUxMTYxMjM2MjA0NSxcclxuICAgICAgICAgICAgeTogMTU3LjExNzEzMzYwNjAyNjIxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY1NzEyODInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQmxvY2stYmFzZWQgY29tbXVuaWNhdGlvbiBpbiBhIGNvbW11bmljYXRpb24gc2VydmljZXMgcGF0dGVybnMgZW52aXJvbm1lbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0NjcsXHJcbiAgICAgICAgICAgIHg6IDEzOS42Njk3NDY3NDgyODEsXHJcbiAgICAgICAgICAgIHk6IDI1My4wMTQwNjUwMTQ3MTk0MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NTc0NjM1JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdBcHBsaWNhdGlvbiBpbnN0YW50aWF0aW9uIGJhc2VkIHVwb24gYXR0cmlidXRlcyBhbmQgdmFsdWVzIHN0b3JlZCBpbiBhIG1ldGEgZGF0YSByZXBvc2l0b3J5LCBpbmNsdWRpbmcgdGllcmluZyBvZiBhcHBsaWNhdGlvbiBsYXllcnMgb2JqZWN0cyBhbmQgY29tcG9uZW50cycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM2OCxcclxuICAgICAgICAgICAgeDogMTEuMDAyMDI3NjI3NzgyMTE2LFxyXG4gICAgICAgICAgICB5OiAtMjM0LjkxODA1Mjk4MzIzNThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU3NzcyNicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDb21wdXRlciB0ZWxlcGhvbnkgaW50ZWdyYXRpb24gaG90ZWxsaW5nIG1ldGhvZCBhbmQgc3lzdGVtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjcwLFxyXG4gICAgICAgICAgICB4OiAtODcuMTkxNTMyNDU4NDEyNjIsXHJcbiAgICAgICAgICAgIHk6IC0xNzMuOTc2NDQ3NTU5MjkyODRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjU4NzgzNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaG9wcGluZyBhc3Npc3RhbmNlIHdpdGggaGFuZGhlbGQgY29tcHV0aW5nIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQ3MSxcclxuICAgICAgICAgICAgeDogLTI3OS4yODY1ODEzMzc4NDY1LFxyXG4gICAgICAgICAgICB5OiAxMTAuMTU4NzkxMjUwMTUwN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjAxMDg3JyxcclxuICAgICAgICAgICAgbmFtZTogJ0luc3RhbnQgZG9jdW1lbnQgc2hhcmluZycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM5NyxcclxuICAgICAgICAgICAgeDogMjEwLjk0ODIxMzUwMTM3MTg0LFxyXG4gICAgICAgICAgICB5OiA5Mi41MzE4ODc4NjkxMTQwNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjAyMjUyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NvbWJpbmVkIGRpc3NlY3RpbmcsIGNhdXRlcml6aW5nLCBhbmQgc3RhcGxpbmcgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNTAzLFxyXG4gICAgICAgICAgICB4OiAxNDcuOTQ5NzcxNjUwNDMyNTgsXHJcbiAgICAgICAgICAgIHk6IDE3MC4wODg4ODg1NTYzMTMwN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjA0MTE3JyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBvZiBtYWludGFpbmluZyBhIG5ldHdvcmsgb2YgcGFydGlhbGx5IHJlcGxpY2F0ZWQgZGF0YWJhc2Ugc3lzdGVtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjYxLFxyXG4gICAgICAgICAgICB4OiAtMC44ODg1NTU4MDI3NDIwMzUsXHJcbiAgICAgICAgICAgIHk6IC0yMTguMjMwNDg4MjAzMDcyMjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwNDEyOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2QgYW5kIHN5c3RlbSBmb3IgZGlzdHJpYnV0aW5nIG9iamVjdHMgb3ZlciBhIG5ldHdvcmsnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjEsXHJcbiAgICAgICAgICAgIHg6IC01Ni43Mzg3Mjc0MjEyMDg0MSxcclxuICAgICAgICAgICAgeTogLTI0My4zNDgzODQxMDY2NDQzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2MDY3NDQnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1Byb3ZpZGluZyBjb2xsYWJvcmF0aXZlIGluc3RhbGxhdGlvbiBtYW5hZ2VtZW50IGluIGEgbmV0d29yay1iYXNlZCBzdXBwbHkgY2hhaW4gZW52aXJvbm1lbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzEsXHJcbiAgICAgICAgICAgIHg6IDE1My45OTQ4MjUxODUwMzk3LFxyXG4gICAgICAgICAgICB5OiAyMzEuNDY1Nzk4ODgxMjAyNzJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjYwOTE1MCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnV2ViIGNsaWVudC1zZXJ2ZXIgc3lzdGVtIGFuZCBtZXRob2QgZm9yIGluY29tcGF0aWJsZSBwYWdlIG1hcmt1cCBhbmQgcHJlc2VudGF0aW9uIGxhbmd1YWdlcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTMzNixcclxuICAgICAgICAgICAgeDogMTMuMTgyODY3NjA3MzIxMjU1LFxyXG4gICAgICAgICAgICB5OiAtMTg0LjgzNDI2NDMxODgxNTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjYyMTgzNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTeXN0ZW0gYW5kIG1ldGhvZCBmb3Igdm9pY2UgdHJhbnNtaXNzaW9uIG92ZXIgbmV0d29yayBwcm90b2NvbHMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNjUsXHJcbiAgICAgICAgICAgIHg6IDg1LjA4MjI4MTQ5MzQ0MzY5LFxyXG4gICAgICAgICAgICB5OiAxMDUuNDM0NjQ1NzEyMzI4OTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY0MTUzMycsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnSGFuZGhlbGQgcGVyc29uYWwgZGF0YSBhc3Npc3RhbnQgKFBEQSkgd2l0aCBhIG1lZGljYWwgZGV2aWNlIGFuZCBtZXRob2Qgb2YgdXNpbmcgdGhlIHNhbWUnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0MzEsXHJcbiAgICAgICAgICAgIHg6IC0yMTguMDk3NjYxMTgwMDEyMjQsXHJcbiAgICAgICAgICAgIHk6IDM5Ljg1NzYwMDM1Nzk3OTg5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2NDQ1MzInLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3VyZ2ljYWwgc3RhcGxpbmcgYXBwYXJhdHVzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjY3LFxyXG4gICAgICAgICAgICB4OiAzMDQuNjYzMDkyNTMxNjI5NCxcclxuICAgICAgICAgICAgeTogLTI5LjcwOTYxMTU3MzQ5MTM5N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjU0MDMyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0luc3RhbnQgc2hhcmluZyBvZiBkb2N1bWVudHMgb24gYSByZW1vdGUgc2VydmVyJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDEzLFxyXG4gICAgICAgICAgICB4OiAxNTkuMzAwNTAzNTUyOTYwMTUsXHJcbiAgICAgICAgICAgIHk6IDEwOC45ODM4OTU4NTYyNzAwNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjU2MTkzJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RldmljZSBmb3IgYXR0YWNobWVudCBvZiBidXR0cmVzcyBtYXRlcmlhbCB0byBhIHN1cmdpY2FsIGZhc3RlbmluZyBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzksXHJcbiAgICAgICAgICAgIHg6IDExNi45MDkxNDE1MzE1ODU5NyxcclxuICAgICAgICAgICAgeTogLTc4Ljc2NjI2OTM2ODU4NTU3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2NjU2NDgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3RhdGUgbW9kZWxzIGZvciBtb25pdG9yaW5nIHByb2Nlc3MnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyODgsXHJcbiAgICAgICAgICAgIHg6IC0xOS43NTE4NTI3MzkzNTM3NCxcclxuICAgICAgICAgICAgeTogLTEyNi42NTMzODkxMjI2OTkyOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjU1JyxcclxuICAgICAgICAgICAgbmFtZTogJ0ltcGxpY2l0IHJhdGluZyBvZiByZXRyaWV2ZWQgaW5mb3JtYXRpb24gaW4gYW4gaW5mb3JtYXRpb24gc2VhcmNoIHN5c3RlbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI5NCxcclxuICAgICAgICAgICAgeDogLTIwNS41MTAzNjEyMTk5NDY3LFxyXG4gICAgICAgICAgICB5OiAtNjIuNjE1MTc1NzcyOTIzOTc2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2ODQ0MzgnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZCBvZiB1c2luZyBjYWNoZSB0byBkZXRlcm1pbmUgdGhlIHZpc2liaWxpdHkgdG8gYSByZW1vdGUgZGF0YWJhc2UgY2xpZW50IG9mIGEgcGx1cmFsaXR5IG9mIGRhdGFiYXNlIHRyYW5zYWN0aW9ucycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2NSxcclxuICAgICAgICAgICAgeDogLTcwLjg5NjIxMTkwODA1MzI5LFxyXG4gICAgICAgICAgICB5OiAtMjExLjY1ODk4MTI2NDY5NDc1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY2OTAzODcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVG91Y2gtc2NyZWVuIGltYWdlIHNjcm9sbGluZyBzeXN0ZW0gYW5kIG1ldGhvZCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM2MSxcclxuICAgICAgICAgICAgeDogLTk2LjA4MzMzMzU4NjEwMTQsXHJcbiAgICAgICAgICAgIHk6IDI1Ny4xODg2NjYwNDQyMDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjY5MzIzMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbmJyZWQgY29ybiBsaW5lIExIMjk1JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNTg1LFxyXG4gICAgICAgICAgICB4OiAyMjUuMjEzNjIzOTY2MzQzMzMsXHJcbiAgICAgICAgICAgIHk6IC0xODEuNzAyMzEyMDg3MzkwMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2Njk4NjQzJyxcclxuICAgICAgICAgICAgbmFtZTogJ0V4cGFuZGluZyBwYXJhbGxlbCBqYXcgZGV2aWNlIGZvciB1c2Ugd2l0aCBhbiBlbGVjdHJvbWVjaGFuaWNhbCBkcml2ZXIgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzU1LFxyXG4gICAgICAgICAgICB4OiAxMTYuOTMzODAwODgyMDAzMDgsXHJcbiAgICAgICAgICAgIHk6IDIyMC4yMTQxOTcwNTQzOTYwN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzExNTY1JyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCwgYXBwYXJhdHVzLCBhbmQgc3lzdGVtIGZvciBwcmV2aWV3aW5nIHNlYXJjaCByZXN1bHRzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzg4LFxyXG4gICAgICAgICAgICB4OiAtMzcuNTA0NDgxMjkwNzY3MzUsXHJcbiAgICAgICAgICAgIHk6IC0yNzMuNDExNjk1ODQ3OTEzNTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxNjIzMycsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnRWxlY3Ryb21lY2hhbmljYWwgZHJpdmVyIGFuZCByZW1vdGUgc3VyZ2ljYWwgaW5zdHJ1bWVudCBhdHRhY2htZW50IGhhdmluZyBjb21wdXRlciBhc3Npc3RlZCBjb250cm9sIGNhcGFiaWxpdGllcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI0NCxcclxuICAgICAgICAgICAgeDogOTkuOTg3NDQ5Mjc3NDAxMDcsXHJcbiAgICAgICAgICAgIHk6IDIxMi41OTUyNzIyOTk2MjYwNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2QgYW5kIGFwcGFyYXR1cyBmb3IgcmVsaWFibGUgYW5kIHNjYWxhYmxlIGRpc3RyaWJ1dGlvbiBvZiBkYXRhIGZpbGVzIGluIGRpc3RyaWJ1dGVkIG5ldHdvcmtzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzQ5LFxyXG4gICAgICAgICAgICB4OiAtMjE0LjQ3MDY0NTQyMDAxNTUsXHJcbiAgICAgICAgICAgIHk6IDE3OS43NjQ0NTM4MzMxMTU0NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzI0Mzk5JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2RzIGFuZCBhcHBhcmF0dXMgZm9yIGVuYWJsaW5nIGtleWJvYXJkIGFjY2VsZXJhdG9ycyBpbiBhcHBsaWNhdGlvbnMgaW1wbGVtZW50ZWQgdmlhIGEgYnJvd3NlcicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3MSxcclxuICAgICAgICAgICAgeDogLTMuODY1NDM3MDk4MDM2NTk3LFxyXG4gICAgICAgICAgICB5OiAtMTY4LjA0NjY1MDc1OTc3NjE2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3Mjc1MjInLFxyXG4gICAgICAgICAgICBuYW1lOiAnVHJhbnNpc3RvciBhbmQgc2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMzMDEsXHJcbiAgICAgICAgICAgIHg6IDQ1LjQ5MzAwOTA4NjUzMzQ3NixcclxuICAgICAgICAgICAgeTogLTE4LjM5OTMzNjc2MTg2NTU1NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzI4NzAyJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTeXN0ZW0gYW5kIG1ldGhvZCB0byBpbXBsZW1lbnQgYW4gaW50ZWdyYXRlZCBzZWFyY2ggY2VudGVyIHN1cHBvcnRpbmcgYSBmdWxsLXRleHQgc2VhcmNoIGFuZCBxdWVyeSBvbiBhIGRhdGFiYXNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjkwLFxyXG4gICAgICAgICAgICB4OiAtNTAuNzc2NTEyNjk2NDc5NjQsXHJcbiAgICAgICAgICAgIHk6IC0yNjUuNjQzOTQxNjY0MjYxOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzI4OTYwJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RlY2huaXF1ZXMgZm9yIG1hbmFnaW5nIG11bHRpcGxlIHRocmVhZHMgaW4gYSBicm93c2VyIGVudmlyb25tZW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjg3LFxyXG4gICAgICAgICAgICB4OiAtMzEuODYwOTgyNjAwMjcyNzQsXHJcbiAgICAgICAgICAgIHk6IC0xNzcuMDk2Mjc5MjUxNjYwNzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjczMjA5NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2QgYW5kIGFwcGFyYXR1cyBmb3IgbWFwcGluZyBiZXR3ZWVuIFhNTCBhbmQgcmVsYXRpb25hbCByZXByZXNlbnRhdGlvbnMnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzMTgsXHJcbiAgICAgICAgICAgIHg6IC00NS4xNzQzMDgyNjg3NzU0NCxcclxuICAgICAgICAgICAgeTogLTE1Mi4yMzkzODM1NTI5ODgwNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzMyMTAwJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdGFiYXNlIGFjY2VzcyBtZXRob2QgYW5kIHN5c3RlbSBmb3IgdXNlciByb2xlIGRlZmluZWQgYWNjZXNzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzQ3LFxyXG4gICAgICAgICAgICB4OiAtNTkuMjEwMTM2ODA2MjkyNjc0LFxyXG4gICAgICAgICAgICB5OiAtMTc0LjgzODc3OTkwODQ5NTcyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3MzIxMTEnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZCwgYXBwYXJhdHVzLCBzeXN0ZW0sIGFuZCBwcm9ncmFtIHByb2R1Y3QgZm9yIGF0dGFjaGluZyBmaWxlcyBhbmQgb3RoZXIgb2JqZWN0cyB0byBhIHBhcnRpYWxseSByZXBsaWNhdGVkIGRhdGFiYXNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjk0LFxyXG4gICAgICAgICAgICB4OiAtOTAuNzM5NzA1MDQ3OTQ1MSxcclxuICAgICAgICAgICAgeTogLTI0NC43MTk5MDMyODc3NDMxNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzU0NjgxJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdQYXJ0aWFsbHkgcmVwbGljYXRlZCBkaXN0cmlidXRlZCBkYXRhYmFzZSB3aXRoIG11bHRpcGxlIGxldmVscyBvZiByZW1vdGUgY2xpZW50cycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI2OSxcclxuICAgICAgICAgICAgeDogLTc5LjU4MDgzODcwMzEyNjU1LFxyXG4gICAgICAgICAgICB5OiAtMjI4LjE3MjQwNTQxNzM4NDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjc2MzM1MScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2QsIGFwcGFyYXR1cywgYW5kIHN5c3RlbSBmb3IgYXR0YWNoaW5nIHNlYXJjaCByZXN1bHRzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNDg3LFxyXG4gICAgICAgICAgICB4OiAtMjUuMjQzNDc0NzMzNDkyNzQzLFxyXG4gICAgICAgICAgICB5OiAtMjYzLjI1NzQwNzk0MDIxMDY3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY3NjM1MDEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmVtb3RlIGRvY3VtZW50IHNlcnZpbmcnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzMTksXHJcbiAgICAgICAgICAgIHg6IDE1OC4zMjUzODM3NjIwOTQyLFxyXG4gICAgICAgICAgICB5OiA5My40OTU0NjIzMTUxNjkxOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2NzY4OTA0JyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdGEgY29tbXVuaWNhdGlvbiBtZXRob2QgdXNpbmcgbW9iaWxlIHRlcm1pbmFsJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjU2LFxyXG4gICAgICAgICAgICB4OiAtMzA3Ljk3NjA2MTU4MTMzNDE0LFxyXG4gICAgICAgICAgICB5OiAxOC43Njk3NTY2Nzk3OTczOTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjc4MjM4MycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTeXN0ZW0gYW5kIG1ldGhvZCB0byBpbXBsZW1lbnQgYSBwZXJzaXN0ZW50IGFuZCBkaXNtaXNzaWJsZSBzZWFyY2ggY2VudGVyIGZyYW1lJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjgyLFxyXG4gICAgICAgICAgICB4OiAtMTIuOTc2MTc3NTU3ODM1ODUyLFxyXG4gICAgICAgICAgICB5OiAtMjcyLjkxOTQ0MDQwNzM3OTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjc4MzUyNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSb2JvdGljIHN1cmdpY2FsIHRvb2wgd2l0aCB1bHRyYXNvdW5kIGNhdXRlcml6aW5nIGFuZCBjdXR0aW5nIGluc3RydW1lbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1MDUsXHJcbiAgICAgICAgICAgIHg6IDQzLjM4MjMxMDk4Njk0MDY2LFxyXG4gICAgICAgICAgICB5OiAyNzkuMDgyMTc4MDExNDc3MTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjc4NjM4MicsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBpbmNvcnBvcmF0aW5nIGFuIGFydGljdWxhdGlvbiBqb2ludCBmb3IgYSBmaXJpbmcgYmFyIHRyYWNrJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzcxLFxyXG4gICAgICAgICAgICB4OiAxMzQuOTQwNzgxNjQ1MDI4MzUsXHJcbiAgICAgICAgICAgIHk6IC02NS4xMDA4MjM3MzU2NjM4MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODA0MzMwJyxcclxuICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgc3lzdGVtIGZvciBhY2Nlc3NpbmcgQ1JNIGRhdGEgdmlhIHZvaWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzQ4LFxyXG4gICAgICAgICAgICB4OiA0MS40NDUyNTE3MjM4NDI4NjUsXHJcbiAgICAgICAgICAgIHk6IC0yMzYuOTkxNTY0ODEwOTg2NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODA5NjUzJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RlbGVtZXRlcmVkIGNoYXJhY3RlcmlzdGljIG1vbml0b3Igc3lzdGVtIGFuZCBtZXRob2Qgb2YgdXNpbmcgdGhlIHNhbWUnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNTAsXHJcbiAgICAgICAgICAgIHg6IC0xOTIuMzY2NTk0Nzc1NjgwOCxcclxuICAgICAgICAgICAgeTogODUuMjAwMzk3MTM4NTkxNTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyNjU2NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZXRob2QgYW5kIGFwcGFyYXR1cyBmb3Igc2VydmluZyBmaWxlcyB0byBicm93c2luZyBjbGllbnRzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjUzLFxyXG4gICAgICAgICAgICB4OiAtMTg3LjIwMjA3ODYxMjE0MixcclxuICAgICAgICAgICAgeTogLTIwNS44MDI4MDY3MTQwOTc1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4MjY1ODInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIGFuZCBzeXN0ZW0gZm9yIHVzaW5nIGZpbGUgc3lzdGVtcyBmb3IgY29udGVudCBtYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjYyLFxyXG4gICAgICAgICAgICB4OiAtMTczLjM5MDcxNzEzNDM0NTkyLFxyXG4gICAgICAgICAgICB5OiAtODQuNzQ4MTA2NDUzOTEwNTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyNjc0NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTeXN0ZW0gYW5kIG1ldGhvZCBmb3Igc21hcnQgc2NyaXB0aW5nIGNhbGwgY2VudGVycyBhbmQgY29uZmlndXJhdGlvbiB0aGVyZW9mJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjkwLFxyXG4gICAgICAgICAgICB4OiAtNzYuNzgxMjY0MzMxMjEwMDUsXHJcbiAgICAgICAgICAgIHk6IC0xODkuMjIxNDgxNzUxMjUwNTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyOTY1NScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kIGFuZCBzeXN0ZW0gZm9yIHNlcnZlciBzeW5jaHJvbml6YXRpb24gd2l0aCBhIGNvbXB1dGluZyBkZXZpY2UgdmlhIGEgY29tcGFuaW9uIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI5MixcclxuICAgICAgICAgICAgeDogNTQuMTUwNjcyMTA3MDE4NjksXHJcbiAgICAgICAgICAgIHk6IC0xOTMuNTU5NTQzMTE1NDUzNThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjgzMDE3NCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZWRpY2FsIGluc3RydW1lbnQnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEzNDUsXHJcbiAgICAgICAgICAgIHg6IDI0MS42ODM2NTYzMDQwMDAyLFxyXG4gICAgICAgICAgICB5OiAxNzguODEwMTU1NDk0MjQ3M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2ODQyNzQ4JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdVc2FnZSBiYXNlZCBzdHJlbmd0aCBiZXR3ZWVuIHJlbGF0ZWQgaW5mb3JtYXRpb24gaW4gYW4gaW5mb3JtYXRpb24gcmV0cmlldmFsIHN5c3RlbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3MyxcclxuICAgICAgICAgICAgeDogLTI1NS43NjcxNDAxNzYzOTE4LFxyXG4gICAgICAgICAgICB5OiAtODkuMzA5NDE0OTAxNjAzMDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjg0MzQwMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBjbGFtcGluZywgY3V0dGluZyBhbmQgc3RhcGxpbmcgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjc4LFxyXG4gICAgICAgICAgICB4OiA4MC42MjI2Nzg4ODMxNzUxNSxcclxuICAgICAgICAgICAgeTogMjA0LjY3MjQ5MjkyOTU3NTcyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4NTAyNTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSW50ZWxsaWdlbnQgZWxlY3Ryb25pYyBhcHBsaWFuY2Ugc3lzdGVtIGFuZCBtZXRob2QnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE3ODQsXHJcbiAgICAgICAgICAgIHg6IC0yNjkuMDkzOTYyNTcxNjk4MixcclxuICAgICAgICAgICAgeTogODAuNzkxNTI1NDA5MTcxMDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDg5NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBc3NpZ25tZW50IG1hbmFnZXInLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0MjksXHJcbiAgICAgICAgICAgIHg6IC0xMDQuNzE1MjMxNzI4OTk5NzgsXHJcbiAgICAgICAgICAgIHk6IC0yMzcuNjc0ODkwNTE0OTUzODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDk0OScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3lzdGVtIGFuZCBtZXRob2QgZm9yIGdlbmVyYXRpbmcgYSBkeW5hbWljIGludGVyZmFjZSB2aWEgYSBjb21tdW5pY2F0aW9ucyBuZXR3b3JrJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjc2LFxyXG4gICAgICAgICAgICB4OiAxNzAuODk0ODQ3ODY2NjQyMyxcclxuICAgICAgICAgICAgeTogLTE1Ny4xNjIzOTk2Mzg3Mjc5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY4NTI5MTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSW5icmVkIGNvcm4gbGluZSBMSDI4M0J0TU9OODEwJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNTg0LFxyXG4gICAgICAgICAgICB4OiAyMTQuMjg3ODI1MjY2Njc5NyxcclxuICAgICAgICAgICAgeTogLTIyMS42NTA2NDU5MDYyNTczNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2OTA1MDU3JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGluY29ycG9yYXRpbmcgYSBmaXJpbmcgbWVjaGFuaXNtIGhhdmluZyBhIGxpbmtlZCByYWNrIHRyYW5zbWlzc2lvbicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM5OCxcclxuICAgICAgICAgICAgeDogMjA0LjI0NDMxNDA5MTc0MyxcclxuICAgICAgICAgICAgeTogLTc4LjEwMDIzNjcyMjMyNjA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzY5NTk4NTInLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgd2l0aCBtdWx0aXN0cm9rZSBmaXJpbmcgaW5jb3Jwb3JhdGluZyBhbiBhbnRpLWJhY2t1cCBtZWNoYW5pc20nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyNzksXHJcbiAgICAgICAgICAgIHg6IDIxNC40Nzc0MTE0MDIzNjU4MixcclxuICAgICAgICAgICAgeTogLTU2LjI5MTU4NzYzNjU5MTEyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2OTY0MzYzJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGhhdmluZyBhcnRpY3VsYXRpb24gam9pbnQgc3VwcG9ydCBwbGF0ZXMgZm9yIHN1cHBvcnRpbmcgYSBmaXJpbmcgYmFyJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzMwLFxyXG4gICAgICAgICAgICB4OiAxNzEuODkyNDcyNzA4OTgwMjgsXHJcbiAgICAgICAgICAgIHk6IC05Ny40MTAwMjQ2MjU1MDI5M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2OTc4OTIxJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaW5jb3Jwb3JhdGluZyBhbiBFLWJlYW0gZmlyaW5nIG1lY2hhbmlzbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI3MSxcclxuICAgICAgICAgICAgeDogMjIwLjk5OTgwMDM4MDQwNDQsXHJcbiAgICAgICAgICAgIHk6IC03MS40MjA3ODEzNTYzNjU0NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc2OTgxNjI4JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1cmdpY2FsIGluc3RydW1lbnQgd2l0aCBhIGxhdGVyYWwtbW92aW5nIGFydGljdWxhdGlvbiBjb250cm9sJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxNTg4LFxyXG4gICAgICAgICAgICB4OiAxNTUuMTIyMDk2Njc3Mzg3MjIsXHJcbiAgICAgICAgICAgIHk6IC05My42OTYyODc1MTQ2MDI5NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MDAwODE4JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGhhdmluZyBzZXBhcmF0ZSBkaXN0aW5jdCBjbG9zaW5nIGFuZCBmaXJpbmcgc3lzdGVtcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQyMixcclxuICAgICAgICAgICAgeDogMjI3LjAxNzY4ODQ1Mzc5NjkyLFxyXG4gICAgICAgICAgICB5OiA3LjAyNDA1NjYxMTQ2MzA1MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MDI1NzQzJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdFeHRlcm5hbCBpbmZ1c2lvbiBkZXZpY2Ugd2l0aCByZW1vdGUgcHJvZ3JhbW1pbmcsIGJvbHVzIGVzdGltYXRvciBhbmQvb3IgdmlicmF0aW9uIGFsYXJtIGNhcGFiaWxpdGllcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTM0OCxcclxuICAgICAgICAgICAgeDogLTEzOS4zMzQ4NzI3NTc0NDI3NSxcclxuICAgICAgICAgICAgeTogNDYuNTIwNjExMTUzMzQzOThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzA0OTE5MCcsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTWV0aG9kIGZvciBmb3JtaW5nIFpuTyBmaWxtLCBtZXRob2QgZm9yIGZvcm1pbmcgWm5PIHNlbWljb25kdWN0b3IgbGF5ZXIsIG1ldGhvZCBmb3IgZmFicmljYXRpbmcgc2VtaWNvbmR1Y3RvciBkZXZpY2UsIGFuZCBzZW1pY29uZHVjdG9yIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzIzNCxcclxuICAgICAgICAgICAgeDogLTI4OS4xMDkxODgzMzYxMSxcclxuICAgICAgICAgICAgeTogLTk3Ljk2Nzc2OTM4NTQ5NTM3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcwNTU3MzEnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1N1cmdpY2FsIHN0YXBsaW5nIGluc3RydW1lbnQgaW5jb3Jwb3JhdGluZyBhIHRhcGVyZWQgZmlyaW5nIGJhciBmb3IgaW5jcmVhc2VkIGZsZXhpYmlsaXR5IGFyb3VuZCB0aGUgYXJ0aWN1bGF0aW9uIGpvaW50JyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzI1LFxyXG4gICAgICAgICAgICB4OiAyMzAuNDk1MTgzODY0Mzk5ODgsXHJcbiAgICAgICAgICAgIHk6IC01OS42NDIyNDU2Nzg1ODI0OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MDYxMDE0JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdOYXR1cmFsLXN1cGVybGF0dGljZSBob21vbG9nb3VzIHNpbmdsZSBjcnlzdGFsIHRoaW4gZmlsbSwgbWV0aG9kIGZvciBwcmVwYXJhdGlvbiB0aGVyZW9mLCBhbmQgZGV2aWNlIHVzaW5nIHNhaWQgc2luZ2xlIGNyeXN0YWwgdGhpbiBmaWxtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMzM5LFxyXG4gICAgICAgICAgICB4OiAtNS44MDA4ODIwNDQ5MDE0MzksXHJcbiAgICAgICAgICAgIHk6IDY4LjUyNjQxNTk1MDMxNTI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzcwNjQzNDYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVHJhbnNpc3RvciBhbmQgc2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNjgsXHJcbiAgICAgICAgICAgIHg6IC0zLjQwMDMwMzE1MTk5MTM3MTYsXHJcbiAgICAgICAgICAgIHk6IDI1Ljk4MTM1NjgzNjA0MzY4OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MTA1ODY4JyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpZ2gtZWxlY3Ryb24gbW9iaWxpdHkgdHJhbnNpc3RvciB3aXRoIHppbmMgb3hpZGUnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyMzMsXHJcbiAgICAgICAgICAgIHg6IC0xNy44MzU3ODU3NDk3ODU4MTcsXHJcbiAgICAgICAgICAgIHk6IDE5OS45MTg4MzcyMDIxMDMwNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MTExNzY5JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBpbnN0cnVtZW50IGluY29ycG9yYXRpbmcgYW4gYXJ0aWN1bGF0aW9uIG1lY2hhbmlzbSBoYXZpbmcgcm90YXRpb24gYWJvdXQgdGhlIGxvbmdpdHVkaW5hbCBheGlzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjc4LFxyXG4gICAgICAgICAgICB4OiAxNTEuMjI1Nzk4MzI1MjQwNDUsXHJcbiAgICAgICAgICAgIHk6IC0zNy4xNzA5OTA3NDc0OTAxM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MTQ3MTM4JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTdXJnaWNhbCBzdGFwbGluZyBpbnN0cnVtZW50IGhhdmluZyBhbiBlbGVjdHJvYWN0aXZlIHBvbHltZXIgYWN0dWF0ZWQgYnV0dHJlc3MgZGVwbG95bWVudCBtZWNoYW5pc20nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE0MjgsXHJcbiAgICAgICAgICAgIHg6IDE4OS4wODYxNDMyMzg1NzUsXHJcbiAgICAgICAgICAgIHk6IC03My42OTEzMDM5MjY4MzkyNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MTU5NzUwJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1cmdpY2FsIHN0YXBsaW5nIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI1OCxcclxuICAgICAgICAgICAgeDogLTQxLjI5OTk1MTg2NTE5NDQzLFxyXG4gICAgICAgICAgICB5OiAyOTIuODQ2MjY3NDUzNzgyMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MjExODI1JyxcclxuICAgICAgICAgICAgbmFtZTogJ0luZGl1bSBveGlkZS1iYXNlZCB0aGluIGZpbG0gdHJhbnNpc3RvcnMgYW5kIGNpcmN1aXRzJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjQ1LFxyXG4gICAgICAgICAgICB4OiAtMzEyLjM4MzkwNTcyMjE0NzcsXHJcbiAgICAgICAgICAgIHk6IC01LjYxNDU0MTU2NzEzMzAwN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MjQ2NzM0JyxcclxuICAgICAgICAgICAgbmFtZTogJ1JvdGFyeSBoeWRyYXVsaWMgcHVtcCBhY3R1YXRlZCBtdWx0aS1zdHJva2Ugc3VyZ2ljYWwgaW5zdHJ1bWVudCcsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI4OCxcclxuICAgICAgICAgICAgeDogMjAwLjQ0NTYzMzgwMDg2NTE1LFxyXG4gICAgICAgICAgICB5OiAtNjMuMTg4NjU1ODgwNzY4ODZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzI4Mjc4MicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDb21iaW5lZCBiaW5hcnkgb3hpZGUgc2VtaWNvbmR1Y3RvciBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNzMsXHJcbiAgICAgICAgICAgIHg6IC0xMjUuODMwOTA0MTQ3Nzk4NixcclxuICAgICAgICAgICAgeTogLTMxLjI3Nzg3Nzg5MzU4MDQ4OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3Mjk3OTc3JyxcclxuICAgICAgICAgICAgbmFtZTogJ1NlbWljb25kdWN0b3IgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMzE4LFxyXG4gICAgICAgICAgICB4OiAtMTI4LjI4Mjg4NjI5Njk2NzI2LFxyXG4gICAgICAgICAgICB5OiAtNTUuMjYxNDc1NTc4MDMzMjlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzMyMzM1NicsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnTG5DdU8oUyxTZSxUZSltb25vY3J5c3RhbGxpbmUgdGhpbiBmaWxtLCBpdHMgbWFudWZhY3R1cmluZyBtZXRob2QsIGFuZCBvcHRpY2FsIGRldmljZSBvciBlbGVjdHJvbmljIGRldmljZSB1c2luZyB0aGUgbW9ub2NyeXN0YWxsaW5lIHRoaW4gZmlsbScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI1MSxcclxuICAgICAgICAgICAgeDogLTE4LjU5NzU1MzA1Mzk1NTc0LFxyXG4gICAgICAgICAgICB5OiA4OC45NTUzMTYxMDgzODk2OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MzQwNDExJyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdTeXN0ZW0gYW5kIG1ldGhvZCBmb3IgZ2VuZXJhdGluZywgY2FwdHVyaW5nLCBhbmQgbWFuYWdpbmcgY3VzdG9tZXIgbGVhZCBpbmZvcm1hdGlvbiBvdmVyIGEgY29tcHV0ZXIgbmV0d29yaycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI4MixcclxuICAgICAgICAgICAgeDogMTcxLjE0MDgzMTU1OTE2OTgsXHJcbiAgICAgICAgICAgIHk6IC0yMDIuMjQ4ODM3MDgwNDQ4MDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzM4MDY5NScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBoYXZpbmcgYSBzaW5nbGUgbG9ja291dCBtZWNoYW5pc20gZm9yIHByZXZlbnRpb24gb2YgZmlyaW5nJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzg2LFxyXG4gICAgICAgICAgICB4OiAxODYuMjU4MzM1MzAxMTAxOTQsXHJcbiAgICAgICAgICAgIHk6IC0yMS42NjMyMTg3MzI0NTIwOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3MzgwNjk2JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdBcnRpY3VsYXRpbmcgc3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCBpbmNvcnBvcmF0aW5nIGEgdHdvLXBpZWNlIEUtYmVhbSBmaXJpbmcgbWVjaGFuaXNtJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMzg4LFxyXG4gICAgICAgICAgICB4OiAyMDcuOTAyOTU5MzkwMzE3OSxcclxuICAgICAgICAgICAgeTogLTguNTMxNTMzNzM3NjIxODg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzczODUyMjQnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1RoaW4gZmlsbSB0cmFuc2lzdG9yIGhhdmluZyBhbiBldGNoaW5nIHByb3RlY3Rpb24gZmlsbSBhbmQgbWFudWZhY3R1cmluZyBtZXRob2QgdGhlcmVvZicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzIyNCxcclxuICAgICAgICAgICAgeDogLTIwOS44MjIzMDQ4MjU1NTMzNSxcclxuICAgICAgICAgICAgeTogLTEzOC41MTAwNDA5OTAwMjkzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0MDI1MDYnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ01ldGhvZHMgb2YgbWFraW5nIHRoaW4gZmlsbSB0cmFuc2lzdG9ycyBjb21wcmlzaW5nIHppbmMtb3hpZGUtYmFzZWQgc2VtaWNvbmR1Y3RvciBtYXRlcmlhbHMgYW5kIHRyYW5zaXN0b3JzIG1hZGUgdGhlcmVieScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI1OCxcclxuICAgICAgICAgICAgeDogMjA1LjAyNDc1NjY3NDQ3Nzc0LFxyXG4gICAgICAgICAgICB5OiAxODUuNjc4NzgwNjY0NDMwMzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQwNDUwOCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXJnaWNhbCBzdGFwbGluZyBhbmQgY3V0dGluZyBkZXZpY2UnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDE1MTcsXHJcbiAgICAgICAgICAgIHg6IDE0Mi44NTM0ODg2MTczMjM3LFxyXG4gICAgICAgICAgICB5OiAxLjMzMjU4ODUyODE3NDg1NTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzQxMTIwOScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdGaWVsZC1lZmZlY3QgdHJhbnNpc3RvciBhbmQgbWV0aG9kIGZvciBtYW51ZmFjdHVyaW5nIHRoZSBzYW1lJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjU1LFxyXG4gICAgICAgICAgICB4OiA5OC40NjIwNzIyMTE4MzUyOCxcclxuICAgICAgICAgICAgeTogMTIzLjAzMDg0Nzc1MzcwMjc5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0NTMwNjUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2Vuc29yIGFuZCBpbWFnZSBwaWNrdXAgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjMwLFxyXG4gICAgICAgICAgICB4OiAtMC4xNjU3Mzc0Mzk0MjY3MTg1NCxcclxuICAgICAgICAgICAgeTogMTQxLjI4OTIyOTM1Mjk5MDIyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0NTMwODcnLFxyXG4gICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgJ1RoaW4tZmlsbSB0cmFuc2lzdG9yIGFuZCB0aGluLWZpbG0gZGlvZGUgaGF2aW5nIGFtb3JwaG91cy1veGlkZSBzZW1pY29uZHVjdG9yIGxheWVyJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjQyLFxyXG4gICAgICAgICAgICB4OiA2NC45MjYxOTkwODI3MjIyMixcclxuICAgICAgICAgICAgeTogMTgxLjg0NTkzNjY1MDkwNDQzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0NjI4NjInLFxyXG4gICAgICAgICAgICBuYW1lOiAnVHJhbnNpc3RvciB1c2luZyBhbiBpc292YWxlbnQgc2VtaWNvbmR1Y3RvciBveGlkZSBhcyB0aGUgYWN0aXZlIGNoYW5uZWwgbGF5ZXInLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDMyNDQsXHJcbiAgICAgICAgICAgIHg6IC02OS42MTY3OTE0Mjg0ODI1MSxcclxuICAgICAgICAgICAgeTogLTE3Ljk1MTQzMTc2NjcxMTkyNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NDY0ODQ2JyxcclxuICAgICAgICAgICAgbmFtZTogJ1N1cmdpY2FsIGluc3RydW1lbnQgaGF2aW5nIGEgcmVtb3ZhYmxlIGJhdHRlcnknLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDEyODcsXHJcbiAgICAgICAgICAgIHg6IDE4MS44NDE5NDk1NTk5MTY4NixcclxuICAgICAgICAgICAgeTogLTYuMTMwMzU2NjQ0NTQxNzU5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc0NjgzMDQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWV0aG9kIG9mIGZhYnJpY2F0aW5nIG94aWRlIHNlbWljb25kdWN0b3IgZGV2aWNlJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAzMjQwLFxyXG4gICAgICAgICAgICB4OiA0My4xNDQ0NzQyMjg3NjQ5OSxcclxuICAgICAgICAgICAgeTogODQuMzA4NTc0NDk4ODM5MDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzUwMTI5MycsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU2VtaWNvbmR1Y3RvciBkZXZpY2UgaW4gd2hpY2ggemluYyBveGlkZSBpcyB1c2VkIGFzIGEgc2VtaWNvbmR1Y3RvciBtYXRlcmlhbCBhbmQgbWV0aG9kIGZvciBtYW51ZmFjdHVyaW5nIHRoZSBzZW1pY29uZHVjdG9yIGRldmljZScsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzIxNixcclxuICAgICAgICAgICAgeDogMTAwLjc1OTg0NDk1NjE5NzYzLFxyXG4gICAgICAgICAgICB5OiAyNjMuOTM5MjgxMTc3NjUzODdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzUwNjc5MScsXHJcbiAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgc3RhcGxpbmcgaW5zdHJ1bWVudCB3aXRoIG1lY2hhbmljYWwgbWVjaGFuaXNtIGZvciBsaW1pdGluZyBtYXhpbXVtIHRpc3N1ZSBjb21wcmVzc2lvbicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI1NyxcclxuICAgICAgICAgICAgeDogMTYyLjg5OTQzNzQ5MzgzODMsXHJcbiAgICAgICAgICAgIHk6IC0xMy41MDc2NjQzNjQ2MTEyNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NjIwNjU1JyxcclxuICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICdNZXRob2QsIGRldmljZSBhbmQgY29tcHV0ZXIgcHJvZ3JhbSBwcm9kdWN0IGZvciBpZGVudGlmeWluZyB2aXNpdG9ycyBvZiB3ZWJzaXRlcycsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTI0MyxcclxuICAgICAgICAgICAgeDogMjczLjc0NTMyNTcwNTg0NzEsXHJcbiAgICAgICAgICAgIHk6IC0xMzQuMTE5Njk3MTY4MDY3ODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzYzMjk4NScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTb3liZWFuIGV2ZW50IE1PTjg5Nzg4IGFuZCBtZXRob2RzIGZvciBkZXRlY3Rpb24gdGhlcmVvZicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMTQ3NyxcclxuICAgICAgICAgICAgeDogMjUuMTU2NDEyNzMxMTMwOTk1LFxyXG4gICAgICAgICAgICB5OiAyMzIuNjM4Mzc0NTM2MzE2NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc3NjYzNjA3JyxcclxuICAgICAgICAgICAgbmFtZTogJ011bHRpcG9pbnQgdG91Y2hzY3JlZW4nLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDIyMTcsXHJcbiAgICAgICAgICAgIHg6IDE0OC4zMTcyOTA3NTcxNDQxMixcclxuICAgICAgICAgICAgeTogLTI1Mi4xMjA1NDExNzI5NTYyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXRlbnQnLFxyXG4gICAgICAgICAgICBpZDogJzc2NzQ2NTAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2VtaWNvbmR1Y3RvciBkZXZpY2UgYW5kIG1hbnVmYWN0dXJpbmcgbWV0aG9kIHRoZXJlb2YnLFxyXG4gICAgICAgICAgICBudW1DaXRhdGlvbnM6IDM0MzksXHJcbiAgICAgICAgICAgIHg6IDI2NS4yMDc3NTI3MzUxMTg4NSxcclxuICAgICAgICAgICAgeTogOTcuMDg3NTMxNzU2NDk4NzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhdGVudCcsXHJcbiAgICAgICAgICAgIGlkOiAnNzczMjgxOScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTZW1pY29uZHVjdG9yIGRldmljZSBhbmQgbWFudWZhY3R1cmluZyBtZXRob2QgdGhlcmVvZicsXHJcbiAgICAgICAgICAgIG51bUNpdGF0aW9uczogMzI4OCxcclxuICAgICAgICAgICAgeDogMjQxLjI3NDMyNDc1Njk2MTQ1LFxyXG4gICAgICAgICAgICB5OiA5Mi41NzkxNzE1OTY2MTU5NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAncGF0ZW50JyxcclxuICAgICAgICAgICAgaWQ6ICc4MDUzMTg0JyxcclxuICAgICAgICAgICAgbmFtZTogJ1NveWJlYW4gZXZlbnQgTU9OODk3ODggYW5kIG1ldGhvZHMgZm9yIGRldGVjdGlvbiB0aGVyZW9mJyxcclxuICAgICAgICAgICAgbnVtQ2l0YXRpb25zOiAxMjQ5LFxyXG4gICAgICAgICAgICB4OiAxMi43NDE3MzkyNzQ1MTk4NixcclxuICAgICAgICAgICAgeTogMjIzLjMzMDUwOTQ2ODUzODU0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDA4MjYwMi0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FkYW0gSGVsbGVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjc4LFxyXG4gICAgICAgICAgICB4OiAtNzguOTc5MTgzNjc4NzgzOTUsXHJcbiAgICAgICAgICAgIHk6IDE3NS44MzQ1ODU1MTk0NTY5N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtMTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWRyaWFuIEd1dCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE0LFxyXG4gICAgICAgICAgICB4OiAtMTI2LjQ5MTYzODk2ODgyMDgyLFxyXG4gICAgICAgICAgICB5OiA3Ny4wNTM5MjU0Mjg5NDQzN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbGFuIEhhdWJhY2gnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNSxcclxuICAgICAgICAgICAgeDogLTEzMy41NDQ4MDYxODUxNzU1NixcclxuICAgICAgICAgICAgeTogMTMuNzM2NDQzMzc5NTQyNDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzMyMDk1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWxleCBXYXJzaGF2c2t5JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzgsXHJcbiAgICAgICAgICAgIHg6IC00MS40MzAwNjA5MTAxNDY4MSxcclxuICAgICAgICAgICAgeTogLTExNS42OTQ2ODEzNzA2NDgxN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQwODIwOTctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbGZyZWQgRS4gTWFubicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDczLFxyXG4gICAgICAgICAgICB4OiAtMTY2LjI1MTI3ODIzNDE3Njg4LFxyXG4gICAgICAgICAgICB5OiA2NC4yMTQyNDU1NjYyMzMzOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzc0MDI1MDYtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmRyZWEgQy4gU2N1ZGVyaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IDIzMi4wMjEwMTM1NjQ5NDQsXHJcbiAgICAgICAgICAgIHk6IDIwMS41NDM2MDU1MzIxNDU1M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYyOTU1MzAtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmRyZXcgTS4gUml0Y2hpZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC0xODAuMTMyNzAxMDkzODA4ODMsXHJcbiAgICAgICAgICAgIHk6IC0xNzUuODkzMzU4NzUwMzkyODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTQ0NzkxLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW5kcmV3IFcuIFNjaGVycGJpZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiA4OS4wMzU5Njc4ODcwMjI3MSxcclxuICAgICAgICAgICAgeTogNzMuNDE5NjY2MDE1NjIwNThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjQ4LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW5kcnplaiBQLiBNYXp1cicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IC0xNy43NTk1NzczODEzMzI2OSxcclxuICAgICAgICAgICAgeTogLTkwLjA0MzI3ODg0MTQxMTM4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU3NzcyNi00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0FuaWwgSy4gQW5uYWRhdGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxOSxcclxuICAgICAgICAgICAgeDogLTkwLjI3MjM3NzI2NzU4NTgxLFxyXG4gICAgICAgICAgICB5OiAtMTQyLjExOTgxNTUzMTI3ODRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MzM2MTM3LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQW5pbCBNdWt1bmRhbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI0LFxyXG4gICAgICAgICAgICB4OiA0NC45NzU3MDAwMzg4MjA1OSxcclxuICAgICAgICAgICAgeTogLTE3My4xOTEyNjMwNTIxNjM1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyOTY1NS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FudXBhbSBTaW5naGFsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTIsXHJcbiAgICAgICAgICAgIHg6IDY4LjAzMzQxNDk3MDgwODA4LFxyXG4gICAgICAgICAgICB5OiAtMTU5LjYxNjQwOTAxODMwMzFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1Mjc2MjYyLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQXJ0aHVyIEwuIEpvaG5zb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxyXG4gICAgICAgICAgICB4OiAxODUuNTA5NTY2NDM1MjIyOCxcclxuICAgICAgICAgICAgeTogLTIyOC44NDE5OTE1ODk4NDA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzA4MjgzMi00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0F5YW5vcmkgRW5kbycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IDExNi4wOTI2MTU3MzAxMDk1MSxcclxuICAgICAgICAgICAgeTogMTQ5LjE3MTc2MDgxODc1NTczXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjM3MDU4NC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0F6ZXIgQmVzdGF2cm9zJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogLTI0MC40MTI5MjQxNTE5NDA4NyxcclxuICAgICAgICAgICAgeTogMTk3LjQwMjAxMDcyOTg0NjM4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcyMjk5Ny0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0JlaHJhZCBBcmlhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzUsXHJcbiAgICAgICAgICAgIHg6IC03Ni44ODYzOTU3OTg5OTI2OCxcclxuICAgICAgICAgICAgeTogMTQwLjU5NzQzNDgwMjg1MTQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDk3MjIyNC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0Jlbm5pZSBUaG9tcHNvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ2LFxyXG4gICAgICAgICAgICB4OiAxMjkuODA3MzUwNTIzODk4MTIsXHJcbiAgICAgICAgICAgIHk6IC00LjQ4MTk3MjU1OTgzOTk4M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzc2MjA2NTUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCasO2cm4gU3BlcmxpbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAyNjUuNjk4MDI0NjYwMjEzNDMsXHJcbiAgICAgICAgICAgIHk6IC0xNjMuMTc0ODc1OTI2ODI0N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtMTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQm9iIE11cnRmZWxkdCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE0LFxyXG4gICAgICAgICAgICB4OiAtMTA0LjU3NjAyNjQxNjA1MDIzLFxyXG4gICAgICAgICAgICB5OiA0My4yMTkyOTM4NjAxNzQ5MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MDk2NTMtOScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdCcmFkIFQuIEhpdGUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxyXG4gICAgICAgICAgICB4OiAtMTc4Ljc0MDY5NDQyOTU5NyxcclxuICAgICAgICAgICAgeTogMTE0LjU2NDMwMTA3MTAwMzExXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY0OC01JyxcclxuICAgICAgICAgICAgbmFtZTogJ0JyaWFuIEdyb3ZlcycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC00LjA2MzcwMzcyNzU5MzU1OSxcclxuICAgICAgICAgICAgeTogLTkzLjI0NjY2MDIxNjE1MTc3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzAwMDgxOC0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0JyaWFuIEouIEhlbW1lbGdhcm4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAyNTEuODc4MjUyNzE2OTIyMDgsXHJcbiAgICAgICAgICAgIHk6IDI4LjI4OTgwMzE5NTI2MDA4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY1ODU3Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0JyaWFuIFEuIEh1cHBpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOTQsXHJcbiAgICAgICAgICAgIHg6IDEyMy4xOTYzMTk4NzgzNTI1OCxcclxuICAgICAgICAgICAgeTogLTI2OS41NTQ5NTUyNzc3MTExXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTQ2NTg5NS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0JyeWFuIEQuIEtub2RlbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE0NyxcclxuICAgICAgICAgICAgeDogMjQ5LjI3MTU5MzUyNTA5Njk2LFxyXG4gICAgICAgICAgICB5OiAxNDkuODk0MjI2OTY1MzQ0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5NDgwMDYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDYXJsYSBNLiBNYW5uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzAsXHJcbiAgICAgICAgICAgIHg6IC0xNDguNDExNTM0NzY5ODc4MDUsXHJcbiAgICAgICAgICAgIHk6IDI2OC4yMTAyMzY4NTMzNzAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1ODM1MS04JyxcclxuICAgICAgICAgICAgbmFtZTogJ0NhcnkgRC4gVGFsYm90JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTEsXHJcbiAgICAgICAgICAgIHg6IC0yNDIuMTIwMTM3Mzk2MDA4NSxcclxuICAgICAgICAgICAgeTogMS4wODA5MTA1ODYxNzIyNDgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTE3NjY0NC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NoYWQgU3Jpc2F0aGFwYXQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyOCxcclxuICAgICAgICAgICAgeDogLTEwNi41OTc4MDMyNTY0NTI4OSxcclxuICAgICAgICAgICAgeTogNTYuNzI0MTU5OTYyNDczNjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzMyMDk1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2hhbmRyYWthbnQgUmFta3Jpc2huYSBCaGF2c2FyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogLTU2LjQ0NjkyNDIzNjAyODU4LFxyXG4gICAgICAgICAgICB5OiAtMTE0LjM4OTM2MzU1OTUyNTIxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgwNDMzMC01JyxcclxuICAgICAgICAgICAgbmFtZTogJ0NocmlzIEhhdmVuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogNzYuNTg5OTY5MjY2MDcwMjcsXHJcbiAgICAgICAgICAgIHk6IC0yMzMuNTkzNzY0MjE3NzQ5NjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1ODU5OTE2LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2hyaXN0b3BoZXIgQS4gSnVsaWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzUsXHJcbiAgICAgICAgICAgIHg6IDMyLjQ5NTI5MjAyOTE1NTI2LFxyXG4gICAgICAgICAgICB5OiAzMDcuODU1ODcxNTczMjk5MTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTYzOTUzLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2hyaXN0b3BoZXIgU3RhdWJlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IDM4Ljg3NjQ5OTE3NzMwODkzNixcclxuICAgICAgICAgICAgeTogLTI1NC42ODUzMzcxNDg1NDA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU5MzgzNC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NodW5vbmcgUWl1JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzAsXHJcbiAgICAgICAgICAgIHg6IC0yOTkuNTEzNTcwNzMyNzU3NjcsXHJcbiAgICAgICAgICAgIHk6IDI4LjY5MzU4NjEzMzE3OTUwNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3MDMzNTctMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDaW5keSBYaW5nIFFpdScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM3LFxyXG4gICAgICAgICAgICB4OiAtMzA3LjYwNDk0NjAyMDg4NDk0LFxyXG4gICAgICAgICAgICB5OiAtMzYuMDk5NzQyOTc2OTI1NTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MzgyMjMyLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2xpZmYgSGFndWUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNSxcclxuICAgICAgICAgICAgeDogLTE1OC45NDg4OTE3MDc5MjIxNyxcclxuICAgICAgICAgICAgeTogNzUuNTczNjYxMjU5NjcwOTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTM1OTA5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF2aWQgQnJhZGxleSBSdXN0JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTAsXHJcbiAgICAgICAgICAgIHg6IDI5My44OTM3ODI2Njg4MTIxNSxcclxuICAgICAgICAgICAgeTogMTA4LjI0MDQ1NTkyNjkwNDQ5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcxMzkxMS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdmlkIEMuIFJhY2VuZXQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTcsXHJcbiAgICAgICAgICAgIHg6IC03MC43MzE5OTk5NjcyOTA3NixcclxuICAgICAgICAgICAgeTogMjgzLjY4ODQ1MDIxMzI2NjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NTEyNDI2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGF2aWQgSC4gTGV2eScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDk3LFxyXG4gICAgICAgICAgICB4OiAxNzUuNjIyNzMzNDY4Mjk1OTMsXHJcbiAgICAgICAgICAgIHk6IDE5NS4wMzM0ODA5MjA0Mjc4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU3NTU3MzctMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBLYXJsIExlZSBQZXRlcnNvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwLFxyXG4gICAgICAgICAgICB4OiAtMTE2LjE5OTk3NTkzOTIwNjgxLFxyXG4gICAgICAgICAgICB5OiAyMzUuNDIzMTc0Njc3Njg3MDZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MDA0Mjc2LTEzJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RhdmlkIEwuIFJhYmJlcnMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxyXG4gICAgICAgICAgICB4OiA5MC4wNTQ1NTEzODgzOTQ2NyxcclxuICAgICAgICAgICAgeTogLTE5OS43NjcyNDMwMjY2MDk5MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQxMjcyMjctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEYXZpZCBULiBHcmVlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI1MyxcclxuICAgICAgICAgICAgeDogMzIwLjA1Mzg5NTY0OTM0NzQsXHJcbiAgICAgICAgICAgIHk6IC0yLjU2NzQ0MDY5ODM3ODM3NzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MzI5NjU1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGVhbiBMLiBHYXJuZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxyXG4gICAgICAgICAgICB4OiA4Mi45ODY4Mzc4NjY1ODQ0LFxyXG4gICAgICAgICAgICB5OiAtNzUuMDE0NzIxNTUwMDIxMzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTknLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGVib3JhaCBSdXBwZXJ0JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjIsXHJcbiAgICAgICAgICAgIHg6IC0xMTguMjY1NTI5Mzc0NTE1MDcsXHJcbiAgICAgICAgICAgIHk6IDIwLjEzMTQ4MTE4OTEwMTY5NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtMTAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGVubmlzIFAuIEJpc2hvcCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE2LFxyXG4gICAgICAgICAgICB4OiAtMTEzLjA0MTM4NDMyNjU5OTQzLFxyXG4gICAgICAgICAgICB5OiA2OC41MzQ3OTE4MTU2MjI5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTkxODE1OS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RlbnppbCBXaWxsb3VnaGJ5IENoZXNuZXknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiAtMjIxLjM0MzgxNjMxOTc3MzIsXHJcbiAgICAgICAgICAgIHk6IC0xODAuMzEyNTg4Njg0MzU3MjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2OTEyODM5LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGVyZWsgRGVlIERldmlsbGUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMjcsXHJcbiAgICAgICAgICAgIHg6IDEyNC4wMDU2MjM2OTcxNDYwOSxcclxuICAgICAgICAgICAgeTogMzAuMzAzNTE4NTczMjEzMzI4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxODM2MS04JyxcclxuICAgICAgICAgICAgbmFtZTogJ0RvbWVuaWMgSi4gTGFSb3NhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogLTE4NS4xNjM0MDI3MTUxNTg4LFxyXG4gICAgICAgICAgICB5OiAxOTEuNDk4ODA1NTgwOTA4OTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwOTQ5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRG91ZyBXYXJuZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAxOTcuNDEwOTU4NjYyNDg4OCxcclxuICAgICAgICAgICAgeTogLTE0MS41MTEzNzQyNTkwMTI3N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1MzA5MzItMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEb3VnbGFzIEIuIEhvZmZtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0MSxcclxuICAgICAgICAgICAgeDogMTEyLjY1OTAyMjAyNjc4ODg2LFxyXG4gICAgICAgICAgICB5OiAtNDEuOTUxNzk0MTkzNDA4MDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NDM0NTUwLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRG91Z2xhcyBLLiBXYXJuZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMSxcclxuICAgICAgICAgICAgeDogLTI0MC4yMTMwNTE4MDMxNDcsXHJcbiAgICAgICAgICAgIHk6IC01OC4zODUzNDUyMjE3NjA0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4NTA4OTUtNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEdWFuZSBXYW5kbGVzcycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC0xNDEuNzcxMjAzNzA5NTc1MDUsXHJcbiAgICAgICAgICAgIHk6IC0yMzUuODQ5NDU4ODg1NTUzMzZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3NjMyOTg1LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRWxsZW4gRGlja2luc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogLTYuNjUwNzEyOTUzNjU5MjMyLFxyXG4gICAgICAgICAgICB5OiAyNDMuODU5MjI0OTQ5Nzc5OTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NjE2NTMyLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRXBocmFpbSBIZWxsZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMjUsXHJcbiAgICAgICAgICAgIHg6IC0xMzYuNjYyNzY5MzE3ODY3ODgsXHJcbiAgICAgICAgICAgIHk6IDE0OC41MDgzMzI4NzMwNjg0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MjQzOTktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFcm5zdCBLYXRjaG91cicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IDIwLjQ2MDcwNTE3NzgxNjgxNixcclxuICAgICAgICAgICAgeTogLTEzOC42MzE2MTc0MzQ2MDQ3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDQwMzY4Ny0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0V1Z2VuZSBMLiBUaW1wZXJtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2OSxcclxuICAgICAgICAgICAgeDogMTY3LjgxNDA1OTc2MjQwMzIyLFxyXG4gICAgICAgICAgICB5OiAyMy42NTM3OTQzNDg2NzA1MTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2OTA1MDU3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnRnJlZGVyaWNrIEUuIFNoZWx0b24sIElWJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTA0NyxcclxuICAgICAgICAgICAgeDogMjA2Ljk0MDU1NjAxMTYxOTU4LFxyXG4gICAgICAgICAgICB5OiAtMzMuNjM3OTQ0MDE5MjIxMDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MDQxMDg2LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRnJlZHJpYyBDLiBDb2xtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTksXHJcbiAgICAgICAgICAgIHg6IC05My4wNzE0MTUyMjIzMzU2NSxcclxuICAgICAgICAgICAgeTogMTg3LjYxMzgyNzkxMjE0Nzc0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjQzMzkyMS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0cuIFZpY3RvciBUcmV5eicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE5LFxyXG4gICAgICAgICAgICB4OiAtMjUwLjIxNDE5MjIwODcyNDksXHJcbiAgICAgICAgICAgIHk6IDExNy43MDkzNjE4ODEyODc4OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTgzNTEtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHYXJyeSBNLiBTdGVpbCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIxLFxyXG4gICAgICAgICAgICB4OiAtMTk3LjU1MDMzODQzNzA3MDg4LFxyXG4gICAgICAgICAgICB5OiAtMTQuOTY5MDU0MTU3MjU1MjYxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcwNzM2OS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0dlb2ZmcmV5IEMuIEh1ZWlsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzcsXHJcbiAgICAgICAgICAgIHg6IDg4Ljc3NzMyMTI5OTc1OTY4LFxyXG4gICAgICAgICAgICB5OiAtNTkuMzQyOTQ0NjkwOTA0MzFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI2NTgyLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnR2VvcmdlIEVyaWNzc29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogLTE1OC4wMjA3MDg1NTI0OTkzNyxcclxuICAgICAgICAgICAgeTogLTExMS40MTM1NTY2NjA3NTQxM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJ1JFMjg5MzItMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHcmFoYW0gVy4gQnJ5YW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNyxcclxuICAgICAgICAgICAgeDogMzAyLjE1MTk3MTc0OTgxOTk1LFxyXG4gICAgICAgICAgICB5OiAyLjk3MTE1MzMwMTIxNzE4NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYxNDQ2NzktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHcmVnb3J5IFMgSGVybWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzAsXHJcbiAgICAgICAgICAgIHg6IC0xMDcuMDg3MjEyMTI0MzgyNTMsXHJcbiAgICAgICAgICAgIHk6IC0yMi45OTkzMjU5ODA0NzUzNDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjAxMDg3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnR3Vhbmdob25nIFlhbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiAxODEuOTQwMDg2ODA4MDIyMSxcclxuICAgICAgICAgICAgeTogNzcuNjY3Nzg2MjMzODExOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1Nzc3MjYtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIZW5yeSBELiBKYXknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3LFxyXG4gICAgICAgICAgICB4OiAtMTIyLjAyMzIwNDc2OTgyNDk5LFxyXG4gICAgICAgICAgICB5OiAtMTU3Ljk1NTY2NzMyNDE4Mjg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDI4MzAyNC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hlbnJ5IFIuIFNpZW5raWV3aWN6JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzUsXHJcbiAgICAgICAgICAgIHg6IDI3NC42MDQxNTYwMzcxMjcyNyxcclxuICAgICAgICAgICAgeTogLTI3LjI3MzMwOTYyNTg0NTY3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzMyMzM1Ni01JyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpZGVub3JpIEhpcmFtYXRzdScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQsXHJcbiAgICAgICAgICAgIHg6IC0zNi42MDU0MjQyNTE5NTA0NDYsXHJcbiAgICAgICAgICAgIHk6IDExNS44NTAwODkzMTk5ODhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0NzAzMDE5LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlkZW8gSG9zb25vJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjgsXHJcbiAgICAgICAgICAgIHg6IC05Ljg1OTQ1NzA5NDIzNzMzMyxcclxuICAgICAgICAgICAgeTogMTEyLjE4Mzc0Njk2MzQ4OTEzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDI1MzA2MS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpZGVvIE9obm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1NSxcclxuICAgICAgICAgICAgeDogMTYuNDI0Mzk3ODM1OTEzOTkzLFxyXG4gICAgICAgICAgICB5OiAxLjU5ODEyOTAzMjExNDExNjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MjcyMDY5LTYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGlyb21pY2hpIE90YScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE5LFxyXG4gICAgICAgICAgICB4OiAtNDIuOTMwMjMxMjMzMjk5NTY1LFxyXG4gICAgICAgICAgICB5OiA3Mi4wMzA4MTU3ODI5NjExOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzUwNDEyMDAtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdIaXJvbWl0c3UgSXNoaWknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0MCxcclxuICAgICAgICAgICAgeDogLTI0MC40NTA5NjI5MzM5Mjk2LFxyXG4gICAgICAgICAgICB5OiAtMTUwLjI3NjAxMjY1OTg4MzUyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjg2MzM2My0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpc2F0byBZYWJ1dGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0MCxcclxuICAgICAgICAgICAgeDogNjAuNDM3MjE0NzY2NTQ1NSxcclxuICAgICAgICAgICAgeTogNTYuNDk2NjQ5MjE4ODEzODdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3Mzg1MjI0LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGl0b3NoaSBIb2thcmknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtMjQxLjgzMTAzMzM3OTk1MTEsXHJcbiAgICAgICAgICAgIHk6IC0xMzMuNTQwNDk3NzkyOTU0MjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MDQxMjAwLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSWt1aGlybyBZYW1hZ3VjaGknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMCxcclxuICAgICAgICAgICAgeDogLTIyOC43ODA4NjcwMTcxOTE1MyxcclxuICAgICAgICAgICAgeTogLTE2Mi4zNjY3MTU4ODU2MDE3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDk5NzI2Mi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0lrdW8gU2Frb25vJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcclxuICAgICAgICAgICAgeDogLTIyLjQ1MTU1NjY1MjM5Mzk0MyxcclxuICAgICAgICAgICAgeTogLTM0LjA0NzUwMTY4NDE4MjExXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTA4MTQyMi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0lzaGlhbmcgU2hpaCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI4LFxyXG4gICAgICAgICAgICB4OiAtMjg2LjMyNzA3NzU5NDAzOTYsXHJcbiAgICAgICAgICAgIHk6IC0yMy43MzMxMDUxMTk0NTg0OTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MjgxODk4LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFjcXVlbHluIEEuIE1hcnRpbm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0MyxcclxuICAgICAgICAgICAgeDogLTc3LjQwNDI2Njc0NjMwMjU4LFxyXG4gICAgICAgICAgICB5OiAyMzMuMTQzNjYyMDkzOTc0MDZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjQ4LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFpLUplaW4gWXUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtMzEuODQwMDUyODY0OTI2NzMsXHJcbiAgICAgICAgICAgIHk6IC05MS42MjM3NTc0NzM2NDExOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ4MDk2OTctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYW1lcyBELiBDYXVzZXksIElJSScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwOCxcclxuICAgICAgICAgICAgeDogLTE3OC4yNjUyMTYxMjA0MjIsXHJcbiAgICAgICAgICAgIHk6IDUxLjc1NTY4MDkzMDc0NjY4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ4NjM0MjUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYW1lcyBMLiBIZW5rZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI1LFxyXG4gICAgICAgICAgICB4OiAtMjI5LjgyNjMyMzI2NjkzMTQ0LFxyXG4gICAgICAgICAgICB5OiA4MS4xNDgzOTE4MzUwNDUxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTUzMzIzOC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phbWVzIFNheScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExNSxcclxuICAgICAgICAgICAgeDogLTExMC4yNjUxNDY1MDU1MDMxMyxcclxuICAgICAgICAgICAgeTogMTg5LjczODQxOTA3MjYxMzc0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxMTU2NS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0phc29uIFpvc3MnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNCxcclxuICAgICAgICAgICAgeDogLTM2Ljc5NzYzNTgzMDQxMzM4LFxyXG4gICAgICAgICAgICB5OiAtMzAzLjM2MDYyOTMxNDAwNTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTUxMjc2LTgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmF5IFlvbmVtb3RvJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjYsXHJcbiAgICAgICAgICAgIHg6IC0xMDguMzkwNjAxMTUwNjU2OTYsXHJcbiAgICAgICAgICAgIHk6IDMwLjY2NzUzMDk2NDk4NDgxN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU4NjMzMjYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZWZmcmV5IEUuIE5hdXNlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogLTM0Ljk3NDY4NzgyNjUxMzk5LFxyXG4gICAgICAgICAgICB5OiAyMjUuNTM3ODEyNzY2NzI0MjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0OTUxMjc4LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVmZnJleSBJLiBDb2hlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ1LFxyXG4gICAgICAgICAgICB4OiAtMTA2LjY3NzI5MjU2MDAzNDIyLFxyXG4gICAgICAgICAgICB5OiAtMjc1Ljk2NjU1NzY1MTgyMTIzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjM5MzYwNS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0plZmZyZXkgTG9vbWFucycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQsXHJcbiAgICAgICAgICAgIHg6IC0xMi4wODk1MjMyODA4NjIxNjQsXHJcbiAgICAgICAgICAgIHk6IC0xNDYuODcyOTU2ODkyNTA1NjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MjQzNjIyLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVmZnJleSBNLiBGaXNjaGVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjMsXHJcbiAgICAgICAgICAgIHg6IC02OS4xMTUxMDU3NjQwMzY2MyxcclxuICAgICAgICAgICAgeTogLTEyMS41OTU5NjIzODI3ODkxMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU4OTc1NjMtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZWZmcmV5IFMuIFN3YXl6ZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIzNyxcclxuICAgICAgICAgICAgeDogMTgyLjc1NzUyMTg3NzA3MTIsXHJcbiAgICAgICAgICAgIHk6IC00Mi42NTIyNjQ4NzUzOTc5MjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3NjA4NzYxLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmVubmlmZXIgUmluZWhhcnQnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxyXG4gICAgICAgICAgICB4OiAxNC42MDMwMzM3MTc2NDQ4NzcsXHJcbiAgICAgICAgICAgIHk6IDI1OC4wMTY5MzgwNzk0MzA3NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzczODA2OTYtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKZXJyeSBSLiBNb3JnYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAyNDAuNzc5MjM1MTI1MzkxNzIsXHJcbiAgICAgICAgICAgIHk6IDAuNzU2MTg1NjU1MjIyNjI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcxNTQ1MC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0plc3NlIEFtYnJvc2UnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxOSxcclxuICAgICAgICAgICAgeDogMzYuMTgwNDIzNTE0NTA4MjA2LFxyXG4gICAgICAgICAgICB5OiAtMjcxLjExODE1MTg5MTY2NjU3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxMTU2NS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0ppYW4tSnVuZyBZaW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTUsXHJcbiAgICAgICAgICAgIHg6IC01Mi40MDU5NDM2MjkxNjAyNyxcclxuICAgICAgICAgICAgeTogLTI5OC42MjA5ODUyNDQ2NTc3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjUxNjIyNy00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvZXkgQ2hlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUwLFxyXG4gICAgICAgICAgICB4OiAtMTU0LjU0NjY3MTM2MjkwOTkzLFxyXG4gICAgICAgICAgICB5OiAyMDguOTUwNzIyODA3MzQzMzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MjMzNjE3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBDb2tlcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI5LFxyXG4gICAgICAgICAgICB4OiAtMTA3LjgxODkzODE1NjMyMTQ0LFxyXG4gICAgICAgICAgICB5OiAtMTcwLjkwNzQ2NzYyMzE2NTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc0NTYxNDQ0LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBILiBMaXZpbmdzdG9uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzEsXHJcbiAgICAgICAgICAgIHg6IC0xNTIuODUzMDA0NDQ1ODM5NTYsXHJcbiAgICAgICAgICAgIHk6IDg1LjEwOTQwMDA4OTY0OTY3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTIzNzE3OC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvaG4gSi4gTWFzdHJvdG90YXJvJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzcsXHJcbiAgICAgICAgICAgIHg6IC0yMDUuNDk3Mzk1OTA5NTg1MzIsXHJcbiAgICAgICAgICAgIHk6IDUwLjMxNDc3OTcwNDg0ODY4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjQyNDg0Ny0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvaG4gSi4gU2hpbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDYsXHJcbiAgICAgICAgICAgIHg6IC0xODUuMzc0NDYzNTU3MTAzODQsXHJcbiAgICAgICAgICAgIHk6IC0zLjI4NzIwMjcxMDYyMzU4OTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NzEzOTExLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9obiBXLiBCZWFyZHNsZXknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMTAsXHJcbiAgICAgICAgICAgIHg6IC0zMy44MTQ3NTk4ODYzODIwMixcclxuICAgICAgICAgICAgeTogMjYyLjg4MjY3MjExMTEzNzI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY5MDM4Ny0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvaG4gWmltbWVybWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTYsXHJcbiAgICAgICAgICAgIHg6IC0xMDMuODY0MzY0Mjg1MDEsXHJcbiAgICAgICAgICAgIHk6IDI4Ny4wMzI0MTUyMDc3MDM1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjI5NTUzMC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvbmF0aGFuIEJyYWRzaGF3JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogLTIxMS44NzE0MjYwOTEwNDc4LFxyXG4gICAgICAgICAgICB5OiAtMjI0LjUwOTA0Nzg3NDQ1MTIzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjk2NDM2My0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvc2VwaCBDaGFybGVzIEhldWlsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMTU3Ljg5NDkwOTYwOTc1NDI4LFxyXG4gICAgICAgICAgICB5OiAtMTI2LjQ0NzgxODMxOTc1MDY0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgwNDMzMC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ0pvc2VwaCBIYXJiJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTYsXHJcbiAgICAgICAgICAgIHg6IDYxLjEyNjY0ODIyNDU4NTY2LFxyXG4gICAgICAgICAgICB5OiAtMjY4LjE5MDg4MTY2MTE4OTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MTU0NDc3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnSm9zaHVhIEEuIFN0cmlja29uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzEsXHJcbiAgICAgICAgICAgIHg6IDE0My42MDc3Mjc2NDU5OTksXHJcbiAgICAgICAgICAgIHk6IC0yODEuNjY5MzY5MjYxMTQyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY0OC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0thcmVuIEJyb2RlcnNlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IC01Mi44ODc3NjE2MTc0MDY3NDYsXHJcbiAgICAgICAgICAgIHk6IC0xMzUuMjUzMjQ2MDEyMTI3NDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2OTE0MTgyLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2F0c3V0b3NoaSBUYWtlZGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMixcclxuICAgICAgICAgICAgeDogLTMwMS44OTQzMzQ4NzY5MTE4NCxcclxuICAgICAgICAgICAgeTogLTcwLjQzMzI0NjUwODA4OTA2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTkyNTIyNC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0thenVraSBLb2JheWFzaGknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMixcclxuICAgICAgICAgICAgeDogLTQxLjkwMDY3NjkxODA5NjQxNixcclxuICAgICAgICAgICAgeTogNy4zMDEzNTg1OTY2MjI5MTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MDYxMDE0LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2F6dXNoaWdlIFVlZGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA4LFxyXG4gICAgICAgICAgICB4OiAtMzcuNjY0OTYzNjM0NDgzMjMsXHJcbiAgICAgICAgICAgIHk6IDU5LjYyNDc1NTY1NzM4Mjg2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDM1NjQ1NS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlaXNoaSBTYWl0bycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDYwLFxyXG4gICAgICAgICAgICB4OiAxMC4yMTkxNDA2MzM5MTAwODUsXHJcbiAgICAgICAgICAgIHk6IDExNC42MDYxMTAwODQ2MDU2N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYxNzU3NTItOScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZWl0aCBBLiBGcmllZG1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDU2LFxyXG4gICAgICAgICAgICB4OiAtNzIuNzY0NzgzOTk0MzI2OTIsXHJcbiAgICAgICAgICAgIHk6IDE1Ny45NjI4MDI0NjAxNDczNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJ0QyNjM5ODctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZWl0aCBMLiBNaWxsaW1hbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE0OCxcclxuICAgICAgICAgICAgeDogMjg1LjI3MDU1MTQ2MzA5ODA2LFxyXG4gICAgICAgICAgICB5OiAtNC4xNjE2MDc2OTk5NTI4NDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICdEMzA0MjM0LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2VpdGggUmF0Y2xpZmYnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3NixcclxuICAgICAgICAgICAgeDogMjk4LjI1NDM4NjU1NjQ0NTg3LFxyXG4gICAgICAgICAgICB5OiAtNjIuMDM3NzMzOTkwNzMwNjE1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgzODM5Ny0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlbmdvIEFraW1vdG8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMDEsXHJcbiAgICAgICAgICAgIHg6IDIzMy4zMDU5MTA4OTI4NDEyNCxcclxuICAgICAgICAgICAgeTogMTE4LjEyODY1ODE0NzQ0MjgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDA3MjIzNi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlbmppIE5vbXVyYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcyLFxyXG4gICAgICAgICAgICB4OiAtMTguNDkxNTczNjIwNzQ4NDU0LFxyXG4gICAgICAgICAgICB5OiAxNjQuMzMxOTc0Mzg4MjA4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ4OTA2MTEtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZW5uZXRoIEguIE1vbGxlbmF1ZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMzksXHJcbiAgICAgICAgICAgIHg6IDE3MS4xMjEzOTA5OTEyNTI4NCxcclxuICAgICAgICAgICAgeTogMTQ5LjgyNzg5MzIxODMyMDdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NDA5NDk4LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnS2VubmV0aCBTLiBXYWxlcycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDM0LFxyXG4gICAgICAgICAgICB4OiAxNTEuNjE1MDY1MDA0ODYzNjUsXHJcbiAgICAgICAgICAgIHk6IC02OC4xNzE1MzAxMDk2OTc1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1ODM1MS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tlcnN0aW4gUmVicmluJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogLTIxMy45OTgzMjY0ODIxOTg5MyxcclxuICAgICAgICAgICAgeTogLTE4LjIxMDIwMzUwOTcwNjk1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzA4MzA3NS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tldmluIFIuIERvbGwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMyxcclxuICAgICAgICAgICAgeDogMTk1LjE3MTYxODYxMjk2NDEyLFxyXG4gICAgICAgICAgICB5OiAyMS44Mjc1NzE5MDcxODI4NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MjY3NDUtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLZXZpbiBSLiBOaXgnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiAtMTEzLjUyMzE4MzQ5Njc5Nzg2LFxyXG4gICAgICAgICAgICB5OiAtMTg2LjY1ODUwNDY0MDk3NzY3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDY4MjU5Ni0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tldmluIFcuIFNtaXRoJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjQ1LFxyXG4gICAgICAgICAgICB4OiAxNDIuMDE1MTcwNTI2MTkyMjQsXHJcbiAgICAgICAgICAgIHk6IDM1LjMxNzEzMDMyMDQwMDE4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjMzNjEzNy0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tpbmctSHdhIExlZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IDI5LjEzNjQxNjgyMTM4OTU0NSxcclxuICAgICAgICAgICAgeTogLTE1Mi44Mzg5MjI3OTEwMDEzNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTM1NjMtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLbGF1cyBXLiBTdHJvYmVsJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogMTguNTAyMjY5ODAyODk2MTg3LFxyXG4gICAgICAgICAgICB5OiAtMjc3Ljg0MjI5MTE5MTY0NDg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcxNTY3NS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tvcmV5IEtsaW5lJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjcsXHJcbiAgICAgICAgICAgIHg6IDEwNy4zOTI4MDg2NDA0NjU2LFxyXG4gICAgICAgICAgICB5OiAwLjEyNDk3MTY4MzkxMjA4ODgxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxODM2MS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tyaXNobmEgTWFuZ2lhcHVkaScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IC0yMjEuNDIzNTExODEwOTUzNzYsXHJcbiAgICAgICAgICAgIHk6IDIxMC42ODQ2MjEwNzYyMTY5NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1Nzc3MjYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdLdWFuZy1ZYW5nIEh1YW5nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogLTExMC45MDI5MzQ3NDQxOTYzNCxcclxuICAgICAgICAgICAgeTogLTE0NC4xMTA3NDc3Mjc0MDE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzE1OTc1MC01JyxcclxuICAgICAgICAgICAgbmFtZTogJ0xlZSBBbm4gT2xzb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMDIsXHJcbiAgICAgICAgICAgIHg6IC0xMi4yOTEwNDU3Mjk4MTY1OTMsXHJcbiAgICAgICAgICAgIHk6IDI4NC4zMjI4MjQwMjc2NzFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTGVyb3kgUi4gS2FyZ2UnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2LFxyXG4gICAgICAgICAgICB4OiAtMjQ2LjU2ODk4NDk1OTAxODI4LFxyXG4gICAgICAgICAgICB5OiAxNzYuODY0MzA4MjQ4OTEyOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1NTEyNzYtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdMdWlzIEouIE1hbGF2ZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI1LFxyXG4gICAgICAgICAgICB4OiAtMTUwLjQ2OTU1MTU4NDEyMTA2LFxyXG4gICAgICAgICAgICB5OiAxNS40NjY2ODEzNTU1OTQwNDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MDQ4MTEwLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTHluIE0uIElydmluZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUwLFxyXG4gICAgICAgICAgICB4OiAxODUuODkzNjgyNTUyMDM2MzgsXHJcbiAgICAgICAgICAgIHk6IDIxMS43MzQ5NzMxNjgzNzQ0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdMeW5uZSBNLiBNdXJhY2gnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2LFxyXG4gICAgICAgICAgICB4OiAtMTg0LjU5NzMxNjEyNTk5Mzc5LFxyXG4gICAgICAgICAgICB5OiAxNjguOTU0NTkwMzAxMjg0MDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1OTQ4Nzg5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFnbnVzIExhcnNzb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMixcclxuICAgICAgICAgICAgeDogMjgyLjM0OTg3NDM0OTIzMDQsXHJcbiAgICAgICAgICAgIHk6IC0xMDUuODUzOTA1NzY4Mzk0MDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODI5NjU1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFnbnVzIFZlamxzdHJ1cCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDUsXHJcbiAgICAgICAgICAgIHg6IDg0LjU3NjgzNDIwNTA1ODQ5LFxyXG4gICAgICAgICAgICB5OiAtMjExLjYwNTQ2NTkxMTI5MTIyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjcxMTU2NS00JyxcclxuICAgICAgICAgICAgbmFtZTogJ01hcmMgQ2FsdGFiaWFubycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE4LFxyXG4gICAgICAgICAgICB4OiAtMjEuNTcyNTAzNTQ3MDMxNzY1LFxyXG4gICAgICAgICAgICB5OiAtMzAzLjI1MDAxMjA0ODAwODg0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzA3ODUwMy0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hcmlhbm5lIE1hbHZlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDI0LFxyXG4gICAgICAgICAgICB4OiAzOS4zNjQ3ODkxMjE4Mzk4MixcclxuICAgICAgICAgICAgeTogMjA0LjUwNzYxMDg4MjM3OTYyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjIyMzIwNS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hcmsgRS4gQ3JvdmVsbGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMSxcclxuICAgICAgICAgICAgeDogLTIzOS4xMzA2NzMzOTIwNzYsXHJcbiAgICAgICAgICAgIHk6IDE1OS41Mzg2MjY4MTIwNzAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjYyMTgzNC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hcmsgUmFuZGxlIEJveW5zJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOSxcclxuICAgICAgICAgICAgeDogOTIuOTUxNTk5MTM0MDg0NCxcclxuICAgICAgICAgICAgeTogMTM5LjcyNDkxNjk5NDE4MTI5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTUzNDEzMi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hcmsgUy4gVnJlZWtlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOTksXHJcbiAgICAgICAgICAgIHg6IC0xMjYuMTc0MTQyNDA4MjUyMDIsXHJcbiAgICAgICAgICAgIHk6IDE4Mi4xNDg4NjgwMTc0ODUzNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ4OTIyNDQtNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXJrIFMuIFplaW5lcicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExMixcclxuICAgICAgICAgICAgeDogODcuODY1NTEyMzM5NDQ3OTIsXHJcbiAgICAgICAgICAgIHk6IC05My42MTQzNTk0OTkwNjg2NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4Mjk2NTUtNicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXJ0aW4gU3Vzc2VyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogOCxcclxuICAgICAgICAgICAgeDogODYuNTE2NjQ0OTcxNjMxMSxcclxuICAgICAgICAgICAgeTogLTE3Ni4zNjgwNTY4NjI0ODQyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDQ4NjcyMC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hc2FoaXJvIEhpcmFubycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY0LFxyXG4gICAgICAgICAgICB4OiAtMjYuNDczOTQxMDIxMzI4ODM0LFxyXG4gICAgICAgICAgICB5OiA1MC41ODM4Nzc1MDEyODc0NzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NjIyNjUzLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFzYWhpcm8gT3JpdGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMyxcclxuICAgICAgICAgICAgeDogLTQzLjMxMTk0MzUxMjQ2OTUwNCxcclxuICAgICAgICAgICAgeTogODguMDU4NTI0MDEwOTIzNjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MDgwOTk4LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFzYW8gSXNvbXVyYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC0yNzcuMTY3Mzk2ODczMzQxOSxcclxuICAgICAgICAgICAgeTogLTY5LjE2MzEzNTkwMzU4NzY5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDkwMjY3MS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ01hc2FzaGkgS2F3YXNha2knLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0NCxcclxuICAgICAgICAgICAgeDogMjUuNDk5ODM0OTgxNzUxNTA1LFxyXG4gICAgICAgICAgICB5OiAxMi40NTg4MzU5NjI5MDc3NjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MTE3ODM4LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWF0dGhldyBBLiBQYWxtZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMTMsXHJcbiAgICAgICAgICAgIHg6IDExMS44NDQ0MDcxOTUxMjg3MSxcclxuICAgICAgICAgICAgeTogMTcuNTUzNTIyNDM4NTQ3MzFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NTc3NzI2LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWF0dGhldyBTLiBNYWxkZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNSxcclxuICAgICAgICAgICAgeDogLTg5Ljc3MjgxNzE1NzYyMTEyLFxyXG4gICAgICAgICAgICB5OiAtMjEyLjUyMDAwOTk0ODA3NDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NjY1NjU1LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBBLiBNeWVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogLTIyMi4xNTQ4OTg0MjY2Mjc4LFxyXG4gICAgICAgICAgICB5OiAtOTEuODgzNzA3Nzk5ODcxMjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1NjMyNDMyLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBFLiBTZXRzZXInLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0NixcclxuICAgICAgICAgICAgeDogMjM2LjE0NTM0ODY5MDU5MTUsXHJcbiAgICAgICAgICAgIHk6IC0yOS41MzMwNDM0Mzc0MTY2NzZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MzA2NjIzLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBGLiBUb21hc2NvJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogODksXHJcbiAgICAgICAgICAgIHg6IC0xMzYuMzUwMzQwMjIzMDE5MjYsXHJcbiAgICAgICAgICAgIHk6IDE2Ni44NzM3Njc4NjA5NTM2MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2MDY3NDQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWNoYWVsIEcuIE1pa3VyYWsnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNCxcclxuICAgICAgICAgICAgeDogMTQzLjA2MTA3MTIzODI4Nzg3LFxyXG4gICAgICAgICAgICB5OiAyMDMuNjg2NTAwMzA4NjQ2ODZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MjY0MDg3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBQLiBXaGl0bWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTM0LFxyXG4gICAgICAgICAgICB4OiA4OC4zMTMzMDc5MDk4ODgyMixcclxuICAgICAgICAgICAgeTogMjM3LjEwNDc2NTI4MDU4NDIyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjY2NTY0OC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hhZWwgVHN1bmdoc2kgWXUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiA3LjMwNDU1OTc0MTE4ODEwMDUsXHJcbiAgICAgICAgICAgIHk6IC0xMDEuNjI4OTMzNDY5ODYzMjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MDgxNTE4LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWljaGVsIEsuIEJvd21hbi1BbXVhaCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDU2LFxyXG4gICAgICAgICAgICB4OiAxNTMuNTU4MDU3MDMyOTI2NzQsXHJcbiAgICAgICAgICAgIHk6IDI3OC43NTg0MTYzNTkwNDAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDIyNDcyNS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01pY2hpbyBLYWRvdGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNzMsXHJcbiAgICAgICAgICAgIHg6IDcwLjI1MjQ5MTEwMDY3MDExLFxyXG4gICAgICAgICAgICB5OiAyNjAuMTc2MzA2ODQ1MDA3ODRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODUwOTQ5LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWlrZSBNeWVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMjAwLjk4NDEwMDI3MjkwNjc3LFxyXG4gICAgICAgICAgICB5OiAtMTY1LjE4MDA5OTQxNTkxODdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MjYxMDM3LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWluIFpodScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExOSxcclxuICAgICAgICAgICAgeDogMTg3LjIxNzg3OTkwNTE5NDQ1LFxyXG4gICAgICAgICAgICB5OiAxMTkuMTgwNTIzMjIyNDExMjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzMyMTAwLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWluZ3RlIEouIENoZW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAtNzQuODkzOTY4MjExMzUwNTQsXHJcbiAgICAgICAgICAgIHk6IC0xNDQuNDgxNTEwMTE4NDA5ODZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MTc2NTAyLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWl0Y2hlbGwgSi4gUGFsbWVyJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNDAsXHJcbiAgICAgICAgICAgIHg6IDMxNS43OTA5MjYyMTMzNzUzNyxcclxuICAgICAgICAgICAgeTogLTU4Ljc5NjY2OTM5NDE5NzYzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzM4NTIyNC0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ01vdG9oaWtvIFlvc2hpZGEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiAtMjMxLjE4NzY4MzI0ODQ3NDQzLFxyXG4gICAgICAgICAgICB5OiAtMTE2LjQ1MTA3NzU2NzkxMjcyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTkxODE1OS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ011bmRpIEZvbXVrb25nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTIsXHJcbiAgICAgICAgICAgIHg6IC0yMjEuNjI1MjY4MTUzNTMxODYsXHJcbiAgICAgICAgICAgIHk6IC0yMDEuNzUzMTczODgyNjU0NzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3NjMyOTg1LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTmFuY3kgVGF5bG9yJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogNTAuMDE1ODg2NDkyOTU2ODQ1LFxyXG4gICAgICAgICAgICB5OiAyMjcuMjc1OTU0MDc4MDQ5N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzc0NjgzMDQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdOb2J1eXVraSBLYWppJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTYsXHJcbiAgICAgICAgICAgIHg6IDQxLjgyMjM3NjA4MjE2MTY5NixcclxuICAgICAgICAgICAgeTogNTIuNTE0MjQ2NzUyODU0MjU1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzIwNTcxNi01JyxcclxuICAgICAgICAgICAgbmFtZTogJ05vcmloaXRvIFNvbmUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxOSxcclxuICAgICAgICAgICAgeDogMjY5LjExNTA2NTU2NzMxNCxcclxuICAgICAgICAgICAgeTogNzAuMDEyMjQ4MzYyNDkzNThcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MzU4NTE0LTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGF1bCBNLiBNZWFkb3dzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzAsXHJcbiAgICAgICAgICAgIHg6IC0xNzEuMjY5NzU1MzE2Mzg0NyxcclxuICAgICAgICAgICAgeTogMjU2LjU0Nzk0MzkwODg3MTczXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjU1ODM1MS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ1BhdWwgVi4gR29vZGUnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxNTQsXHJcbiAgICAgICAgICAgIHg6IC0yMzAuMTYxMTQxOTYzOTA5MzYsXHJcbiAgICAgICAgICAgIHk6IC0xMy40MTAzMTQ4NDUwMDE5MTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzExNTY1LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGF2aXRyYSBTdWJyYW1hbmlhbScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIwLFxyXG4gICAgICAgICAgICB4OiAtNi4zNzI3NDgzNDc5NDczMzgsXHJcbiAgICAgICAgICAgIHk6IC0yOTcuOTY3MDI2NDkwOTA2OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJ0Q0MjM3NjEtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQZXRlciBIb25nJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjUsXHJcbiAgICAgICAgICAgIHg6IC0yMDcuMDI5MTM0NDQ0NTg3NTYsXHJcbiAgICAgICAgICAgIHk6IDExMy4yMDQ0NDc3MjA3NzQ2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjE1Mjk4Ny0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1BldGVyIE1hcmRpbG92aWNoJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTEwLFxyXG4gICAgICAgICAgICB4OiAtMTEzLjcwNTQxNDYyNzYzNDE0LFxyXG4gICAgICAgICAgICB5OiAtNzEuNjM4NjY4Nzg0NDg5MjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1ODczMDk2LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGV0ZXIgUy4gTGltJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTksXHJcbiAgICAgICAgICAgIHg6IC00MS40OTcxNTc1OTk0Nzc5LFxyXG4gICAgICAgICAgICB5OiAtMjI5Ljg2MzQ3Mzg0ODYzMDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzMyMTExLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGV0ZXIgU2lhbSBTeSBMaW0gSUlJJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogLTExOS42ODc3NjA4NzE4MTI5MSxcclxuICAgICAgICAgICAgeTogLTI2NC43NDQxMTUzMTQ5MjQyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjg1MDg5NS0zJyxcclxuICAgICAgICAgICAgbmFtZTogJ1BldGVyIFNpYW0gU3kgTGltLCBJSUknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAtMTM3LjUxMzI3ODYxODY4OTkyLFxyXG4gICAgICAgICAgICB5OiAtMjUzLjA1MDE1MjYzNDE2MDEzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzE1OTc1MC00JyxcclxuICAgICAgICAgICAgbmFtZTogJ1BoaWxpcCBSb3knLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0NSxcclxuICAgICAgICAgICAgeDogLTU1LjkxNTMzMTgzNzMzNDU4NCxcclxuICAgICAgICAgICAgeTogMjY1LjQ1MjczOTk4NTkwNTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MTAzMDMzLTcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGhpbGxpcCBKb2huIFBsYW50ZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDc2LFxyXG4gICAgICAgICAgICB4OiAtODkuNTYxNzI2MzQyNzM5MzgsXHJcbiAgICAgICAgICAgIHk6IDEyOC40OTM1OTk1NDAyMDkzN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5Nzg4MjktMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQaS1ZdSBDaHVuZycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1LFxyXG4gICAgICAgICAgICB4OiA3OS4wMzMzMDMwOTc2ODMzMyxcclxuICAgICAgICAgICAgeTogLTE2Ni44OTYyMDMwMTQwMjY5NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYwOTIwODMtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQcmFzaGFudCBDaGF0dGVyamVlJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTIsXHJcbiAgICAgICAgICAgIHg6IC0xMjcuOTgxNjYyNDg5NzgwNDUsXHJcbiAgICAgICAgICAgIHk6IC0yMjYuMDk1OTAzMjI5ODMwNjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc3MzQwNDExLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmFjaGFlbCBMLiBDb29rJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMTQ1LjU4MTY0MzQ5NTM2ODUsXHJcbiAgICAgICAgICAgIHk6IC0xODUuOTExNTIyNzg0ODI1MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ4NzI2MDMtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSYWxwaCBTdGVhcm5zJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogODIsXHJcbiAgICAgICAgICAgIHg6IC0xNy42MzgyNjExMzk3NDAwNzcsXHJcbiAgICAgICAgICAgIHk6IDMxMS44NzQ0MDA5NjAxNjIzNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MzY1NDAtNicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSYW5keSBIb2ZmbWFuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNjYsXHJcbiAgICAgICAgICAgIHg6IC05Ni42NzkxNTA2MjI3MTUyMyxcclxuICAgICAgICAgICAgeTogLTE4Ljg2MzI2NzY0MjMzODM1N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQ3OTg1OTQtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSaWNoYXJkIEEuIEhpbGxzdGVhZCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDU2LFxyXG4gICAgICAgICAgICB4OiAyMjAuOTQwNDMwNDMyNTg4NyxcclxuICAgICAgICAgICAgeTogMTU1LjkyMTI0OTMyMTcxNzFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MDk3MTIyLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmljaGFyZCBFLiBQdXJ2aXMnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMixcclxuICAgICAgICAgICAgeDogLTIzMS42MjIxMTczNDg1MzEyLFxyXG4gICAgICAgICAgICB5OiA1OC41MzI3ODg1OTM0MDY0NjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MjY4ODAzLTMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmljaGFyZCBHb3JtYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMCxcclxuICAgICAgICAgICAgeDogNzYuNzE2Njc0MzkyMjgyMDIsXHJcbiAgICAgICAgICAgIHk6IC0yNDcuNDA3NTY4NDc1NDMzNjZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MjcxNTQzLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmljaGFyZCBMLiBHcmFudCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyLFxyXG4gICAgICAgICAgICB4OiAxMDguMzc3OTAyNjE2MzgxNTYsXHJcbiAgICAgICAgICAgIHk6IC0xMDkuNTM0Mjk3NzQwMTEyMDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MDkyMDgzLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUm9iZXJ0IEEuIEJyb2RlcnNlbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIxLFxyXG4gICAgICAgICAgICB4OiAtMTE2Ljc4Njc3MzI5MzgwMzMyLFxyXG4gICAgICAgICAgICB5OiAtMjExLjc0MzEyMTcyNzU0ODk4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTg3MzA5Ni0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JvYmVydCBCcm9kZXJzb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiAzMi40NzA1NjQzNjI3MTAzMzQsXHJcbiAgICAgICAgICAgIHk6IC0yMTIuMzU2NTAzNzYxNjkwNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5NjM5NTMtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSb2JlcnQgQ3JhbScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IDM5LjczMTY1NjIyODAzNjA0NCxcclxuICAgICAgICAgICAgeTogLTE1OS43MDExNzQxOTY2Mjg1M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzQzNjIzODctMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSb3kgQ2xhcmsnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMyxcclxuICAgICAgICAgICAgeDogLTE0My4zODA2NTQ2NzgwNTU4MyxcclxuICAgICAgICAgICAgeTogLTgzLjE4NjQ2OTMyMzMyODk0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTQxNzc3MC04JyxcclxuICAgICAgICAgICAgbmFtZTogJ1J5byBIYXlhc2hpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzEsXHJcbiAgICAgICAgICAgIHg6IDEwOS41NjkwMDI3MDE4MTMyMixcclxuICAgICAgICAgICAgeTogOTQuMjY5MDc3NjE5MzMzOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzYwODE4NzUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTYW5qb3kgQ2hhdHRlcmplZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IC0xNjguNTUzNTE3MTkzNzMyNzQsXHJcbiAgICAgICAgICAgIHk6IC01NS4wMDM5MTMyNzcxMDA3MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU0MTYyNTUtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTY290dCBBLiBCZXJnZW1hbm4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxMDYsXHJcbiAgICAgICAgICAgIHg6IDIzNi45ODQzNjU4NDM3ODMxLFxyXG4gICAgICAgICAgICB5OiAtMTU0LjUzODUzMjg5MzYzMTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzI0Mzk5LTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2hhbmthciBTLiBOYXRoYW4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiA4LjAxNzY1MTMyNjcxMzgwMyxcclxuICAgICAgICAgICAgeTogLTEzMi42NzQzOTIwNTYzMjY2NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4MDQzMzAtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaGFubm9uIEpvbmVzJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNSxcclxuICAgICAgICAgICAgeDogNzEuMTMyMDY5ODE4NDQ2MzEsXHJcbiAgICAgICAgICAgIHk6IC0yNTguNDk5MzQyMzk5NDEzNzZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2ODg3NzM2LTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2hhbnRoaSBHYW5lc2FuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNCxcclxuICAgICAgICAgICAgeDogLTM2Ljk5NDg4MjEwNzU2NDA3NCxcclxuICAgICAgICAgICAgeTogMTc2LjQ0MzUyMTAzOTUzMTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MTgzNTg5LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2hpbiBLaW0nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0NyxcclxuICAgICAgICAgICAgeDogLTI4Ny42NzI2NjQ2NjY3OTgsXHJcbiAgICAgICAgICAgIHk6IDQ1LjgxMjYxMTY0MTM5MDY3NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2NTQwMzItNCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTb25neGlhbmcgV2VpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNyxcclxuICAgICAgICAgICAgeDogMTMyLjMxOTkxNzEwNDQwODIsXHJcbiAgICAgICAgICAgIHk6IDg2LjMzMzY5MjAxODExODc1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjc4MzUyNC0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N0ZXBoZW4gQy4gQW5kZXJzb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiA2Mi42MjAwNzIwMTM5NTA1LFxyXG4gICAgICAgICAgICB5OiAzMDIuNDk2MTg4NTcwODMwMjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1Nzc0MzU3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU3RldmVuIE0uIEhvZmZiZXJnJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTA2LFxyXG4gICAgICAgICAgICB4OiAtMjk4LjE0OTgxNTc4OTM5OTQ0LFxyXG4gICAgICAgICAgICB5OiA4OC41NjgwMzUxMDQ1MDM5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTU5NDE2OS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1N0ZXZlbiBQLiBIb3RlbGxpbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMDYsXHJcbiAgICAgICAgICAgIHg6IDE3OC4zMTM1NjIyNDQyMDc1NixcclxuICAgICAgICAgICAgeTogLTI1NS40MzA0MjUwNzQ4MDU3OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY1MjYzMzUtMicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdXNhbiBNLiBUcmV5eicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1LFxyXG4gICAgICAgICAgICB4OiAtMjc5LjIzMzg0NzEzMDQxODMsXHJcbiAgICAgICAgICAgIHk6IDEzOS45OTI1NzMzNjcyNzk0NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY2MzkyNDYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUYXRzdXlhIEhvbmRhJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTA5LFxyXG4gICAgICAgICAgICB4OiAyNTAuMDYwMjA3NzIwMTY4NCxcclxuICAgICAgICAgICAgeTogNjYuMzM0MDEzMjIyNjg2MzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MzQ1NjM5LTYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGF0c3V5YSBJd2FzYWtpJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTE2LFxyXG4gICAgICAgICAgICB4OiA4Ni4zMzM2MTM0NDcxNzczLFxyXG4gICAgICAgICAgICB5OiAxNTcuODI1OTM0NjIwNjA3NDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2MzI0NTY4LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGhhbmggRGllYycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IC03OC4wMzE0NzQ2OTEyNTE4NCxcclxuICAgICAgICAgICAgeTogLTI3Mi41ODg2NjA2ODYxNzE4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTcxNTQ1MC0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1Rob21hcyBNLiBSb3Rod2VpbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEzLFxyXG4gICAgICAgICAgICB4OiAtMTkuMTY1MTAxMDEzMjQxNDkzLFxyXG4gICAgICAgICAgICB5OiAtMjA4LjE4MDQ2NDA4NDA2MTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICdSRTM5ODQxLTQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVG9kZCBQaGlsbGlwIE9tYWl0cycsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IDEyOS45OTMwNjg1NDYyNTAwNyxcclxuICAgICAgICAgICAgeTogLTIyLjA0OTkwMTYxNTAzODQwOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY4NTA5NDktMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb20gQWJzaGlyZScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEsXHJcbiAgICAgICAgICAgIHg6IDE0MC4yNjU2NjkwMjcxNTIyOCxcclxuICAgICAgICAgICAgeTogLTE1My4zOTE3Mjk0ODQzOTU4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNzA2MTAxNC02JyxcclxuICAgICAgICAgICAgbmFtZTogJ1Rvc2hpbyBLYW1peWEnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyNSxcclxuICAgICAgICAgICAgeDogOS4xMjYyNzEyNzYyNTQzNzcsXHJcbiAgICAgICAgICAgIHk6IDEwMS44MjI5ODYzMDU1NjMyNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY3MTgzNjEtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdWaWpheSBSLiBCYXNhbmknLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA5LFxyXG4gICAgICAgICAgICB4OiAtMjAxLjM4MjI3MTczMjA1MDI3LFxyXG4gICAgICAgICAgICB5OiAyMDguNzQzMjcwNDk5MjYzMjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc2NzE4MzYxLTUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVml0YWx5IFMuIFJldnNpbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEzLFxyXG4gICAgICAgICAgICB4OiAtMTk4LjcwNDczMDc4MDI0OTgzLFxyXG4gICAgICAgICAgICB5OiAxNTIuNDA1MjIxMTY2NTk0M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzY5Nzg5MjEtMycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdXaWxsaWFtIEIuIFdlaXNlbmJ1cmdoLCBJSScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE1MixcclxuICAgICAgICAgICAgeDogMjQ4LjI0MzkzOTA2MjkzNzMzLFxyXG4gICAgICAgICAgICB5OiAtOTAuMjkzNDI1MjQzNjkzMjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1MjU3OTcxLTInLFxyXG4gICAgICAgICAgICBuYW1lOiAnV2lsbGlhbSBQLiBWYW4gQW50d2VycCcsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDY5LFxyXG4gICAgICAgICAgICB4OiAtMjQzLjUyMDk5MTkxNjc3OSxcclxuICAgICAgICAgICAgeTogMjMuNDE3Njc5OTc3OTExMzI3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNjgyOTY1NS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1hpYW9mZWkgSHVhbmcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiA4OS45ODg3NDE2MTAzODU2LFxyXG4gICAgICAgICAgICB5OiAtMTg3Ljc5NDEzOTk4MTYzNDgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNTI4MzQ1Mi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1lpLUNoaSBTaGloJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMzMsXHJcbiAgICAgICAgICAgIHg6IC0zMjMuNzEzNTk2NDE4NzExNjMsXHJcbiAgICAgICAgICAgIHk6IDIzLjkwODkzNjU4NjQ5NDA4NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW52ZW50b3InLFxyXG4gICAgICAgICAgICBpZDogJzU5MDE4OTYtMScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdZb3JhbSBHYWwnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA3NixcclxuICAgICAgICAgICAgeDogLTEwNy4yMzIyNTUxMDYyMDQ4OSxcclxuICAgICAgICAgICAgeTogMTI0LjczNTQxNzM5MDI2MTEyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnZlbnRvcicsXHJcbiAgICAgICAgICAgIGlkOiAnNDU3MzQ3Mi0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ1lvc2hpaGlybyBJdG8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxODksXHJcbiAgICAgICAgICAgIHg6IDExOC4yMDI1MDkzODM4Mzg5MixcclxuICAgICAgICAgICAgeTogMjg3Ljk2MTUzMjY0MzQyODNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ludmVudG9yJyxcclxuICAgICAgICAgICAgaWQ6ICc1ODU1OTU3LTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnWmhlbmcgWXVhbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDU4LFxyXG4gICAgICAgICAgICB4OiAxMzguMDkyMDY5NTIxNzMxOSxcclxuICAgICAgICAgICAgeTogMTI0LjA2NDQwMTE3OTc2OTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfWjU5YVVCR3RaOVA1UXpkRmlLbVonLFxyXG4gICAgICAgICAgICBuYW1lOiAnQWJsYWlzZSBMaW1pdGVkJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMixcclxuICAgICAgICAgICAgeDogLTE5MC40ODIxMTMwMDEwNzQyLFxyXG4gICAgICAgICAgICB5OiAtMjM2LjUzNjE5Njk4NTM5NDg3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzR6TzJCYzA4eDU2WGpEcTVUZUJwJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FjY2VudHVyZSBMTFAnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMTAsXHJcbiAgICAgICAgICAgIHg6IDE3Mi44NjYwMjMwMDgzMzk1NyxcclxuICAgICAgICAgICAgeTogMjUzLjcwMzMwODE1NDE2NTg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX2J3cTgzamJjY0txRjRqSnJQY2FSJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FkdmFuY2VkIEJpb25pY3MgQUcnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA2MzMsXHJcbiAgICAgICAgICAgIHg6IC0xNzYuOTE0Njg0NzI5ODE1NTUsXHJcbiAgICAgICAgICAgIHk6IDIzMy42MzM4ODM1MjU5NjE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0lEVWJTMDlaUjBKaEo4akZFcHRUJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FwcGxlIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyMTAyMyxcclxuICAgICAgICAgICAgeDogMTUxLjY4MjQ2NjQxNTc4ODY3LFxyXG4gICAgICAgICAgICB5OiAtMjIyLjEyNDg3NDg4MTQ0ODlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfRWhZRlBJSkVtWVFZUm9ZdnNucHknLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2Fub24gS2FidXNoaWtpIEthaXNoYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDc0NTk2LFxyXG4gICAgICAgICAgICB4OiA0OS40ODIyMzkyMDU3MzI5NixcclxuICAgICAgICAgICAgeTogMTM0LjA5MjI4ODczMTE1NTkyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0ltZWc5VzZQMVRFNkkyUXV0UzR5JyxcclxuICAgICAgICAgICAgbmFtZTogJ0Nhc2lvIENvbXB1dGVyIENvLiwgTHRkLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ1MjEsXHJcbiAgICAgICAgICAgIHg6IC0xNzkuODE3NTkzNDEyMDUxNSxcclxuICAgICAgICAgICAgeTogLTE0Mi43MTgyODg1MjkyMTA0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ184Y3NNZ3Rnbk4wbVJFWnBOUDFKaScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDZXJlYnJhbCBWYXNjdWxhciBBcHBsaWNhdGlvbnMsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxyXG4gICAgICAgICAgICB4OiAyNjguODAwNDU0MTQ0NDM4NyxcclxuICAgICAgICAgICAgeTogMTY0LjUyMzY5NDc4MzE1NjgzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzBlVHIzWElCakFLcFhrQzY4MjNyJyxcclxuICAgICAgICAgICAgbmFtZTogJ0Nlcm1ldCwgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDcsXHJcbiAgICAgICAgICAgIHg6IC00OC40MDM3Mjc2ODk1NTE1NixcclxuICAgICAgICAgICAgeTogMjA1LjQ0MDI1ODgzODI2MDY2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzEwN1dLTlBidkRES3JaQmxtdzhVJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NvbnRpZ28gU29mdHdhcmUsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAyLFxyXG4gICAgICAgICAgICB4OiAyOTkuMzE3NDM1OTA5NTk1MyxcclxuICAgICAgICAgICAgeTogNDguMDM0OTI0Njk4MDA4MzNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfcHBFbGtFdFF2RnRHNkE0NzU0VUknLFxyXG4gICAgICAgICAgICBuYW1lOiAnRWFzdG1hbiBLb2RhayBDb21wYW55JyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjE1MzksXHJcbiAgICAgICAgICAgIHg6IDIxMS4zNzUyNTk0MTM1Mjc4NixcclxuICAgICAgICAgICAgeTogMjE3LjU4Mjg3Nzg2NTMyMTA4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzBqUFdNN1lxaHRYbTBsbTNmbTFZJyxcclxuICAgICAgICAgICAgbmFtZTogJ0VNQyBDb3Jwb3JhdGlvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQ5NzYsXHJcbiAgICAgICAgICAgIHg6IC0xODkuNzAxNTYyNzQ4Mzg5NzMsXHJcbiAgICAgICAgICAgIHk6IC0xMTAuMDE1NTk4OTA0Mzc2MjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfV2gyY25PSXpLbGh6anVxVm1PcVknLFxyXG4gICAgICAgICAgICBuYW1lOiAnRW5lY3RvIEFCJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMSxcclxuICAgICAgICAgICAgeDogMjQzLjY3NjU0MTIyNDYyNTgsXHJcbiAgICAgICAgICAgIHk6IC0xMzEuMjA5MDMxMTg2NjA5OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19YdTZnWFNzbHREQlpUQWhNRkJXRCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFdGhpY29uIEVuZG8tU3VyZ2VyLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMyxcclxuICAgICAgICAgICAgeDogMjI0LjcxMjQzNTgwMzE2NDc3LFxyXG4gICAgICAgICAgICB5OiAzOS42MDk4NDI1MjU0Nzg2NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFdGhpY29uIEVuZG8tU3VyZ2VyeSwgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIxOTQsXHJcbiAgICAgICAgICAgIHg6IDE3MS4wNzQzNzAyMjQ3NjY0LFxyXG4gICAgICAgICAgICB5OiAtNTUuMDM2ODA3MDk4OTQ2MDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfdlM2cmNLeWMycU4zckZkWDBQMksnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSGV3bGV0dC1QYWNrYXJkIERldmVsb3BtZW50IENvbXBhbnksIEwuUC4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzNTExOCxcclxuICAgICAgICAgICAgeDogLTkwLjMxMDM5Njg1MjY2OTQsXHJcbiAgICAgICAgICAgIHk6IC01MC4wNTIxNjI4OTI5NDU0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAncGVyX3RYMmUyeVZMZ3lOZ29iRXB6V0tUJyxcclxuICAgICAgICAgICAgbmFtZTogJ0hpZGVvIE9obm8nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA0LFxyXG4gICAgICAgICAgICB4OiAtMzkuNTM2MTI4NDI3MDQ0MzYsXHJcbiAgICAgICAgICAgIHk6IC0yMC4yNzAyNzMzNTQ5NzcyNTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfTUt2Ym5DY3lQdWRYZXhVdnNTd0YnLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkhvbGRlbidzIEZvdW5kYXRpb24gU2VlZHMsIEluYy5cIixcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogODMsXHJcbiAgICAgICAgICAgIHg6IDI0MC4wOTk5MDU5ODUxOTA4LFxyXG4gICAgICAgICAgICB5OiAtMjA2LjAyNjM3NjE0ODA2MTI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX2ZBMGF6cW9CR0V6b1BveTg1Snl2JyxcclxuICAgICAgICAgICAgbmFtZTogJ0lOVFVJVElWRSBTVVJHSUNBTCBPUEVSQVRJT05TLCBJTkMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTIwMixcclxuICAgICAgICAgICAgeDogMTUuMzc4ODYyODY1NDQ3NjI0LFxyXG4gICAgICAgICAgICB5OiAyOTAuMjE3ODIyMjg3NTIyM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19EdHRaTXZreXZXM2ZWNm9DVU1URicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKYXBhbiBTY2llbmNlIGFuZCBUZWNobm9sb2d5IEFnZW5jeScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDExNTcsXHJcbiAgICAgICAgICAgIHg6IDEzLjE3MzQ1MDczMTA2MTA4NixcclxuICAgICAgICAgICAgeTogNTYuNDg2MTQwOTk1Nzc3NjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfYzV2eUJ6SzdpaWtrVTREalFGSFQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSmFwYW4gU2NpZW5jZSBhbmQgVGVjaG5vbG9neSBDb3Jwb3JhdGlvbicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDQxOCxcclxuICAgICAgICAgICAgeDogNjMuNTYzMTcwNTgyNzUsXHJcbiAgICAgICAgICAgIHk6IDYuMjczNjczNTE5MDkwNzUzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX0Z2Z3ZHRmU4SlowaVlsWjgwd2VGJyxcclxuICAgICAgICAgICAgbmFtZTogJ0tvbmlua2xpamtlIFBoaWxpcHMgRWxlY3Ryb25pY3MgTi5WLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDE3MTM4LFxyXG4gICAgICAgICAgICB4OiAtMTIzLjI0MTc5MTIzNzkwMTkxLFxyXG4gICAgICAgICAgICB5OiAyNzAuOTk3NDY1NDg0NDEwMTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfWGNxQ2p0VDhwaThNazNValFsRHQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnTEcgRWxlY3Ryb25pY3MgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMyNzI1LFxyXG4gICAgICAgICAgICB4OiAtMjc3LjM0NjAyMjk5ODQ1NTgsXHJcbiAgICAgICAgICAgIHk6IDcuMTMzNjk4MjIyNTQzMDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdwZXJfRElqVVRNN2xIaERzQXoydThqaU8nLFxyXG4gICAgICAgICAgICBuYW1lOiAnTWFzYXNoaSBLYXdhc2FraScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDMsXHJcbiAgICAgICAgICAgIHg6IDE5Ljg5NTQzNjU5NjY2MjkwOCxcclxuICAgICAgICAgICAgeTogLTEwLjcxNzE3ODI1MDkwMDkxOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19HVk1sTFZid0NEU2lxUDlPZzhUbicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdNZWR0cm9uaWMgTWluaU1lZCwgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDgwMCxcclxuICAgICAgICAgICAgeDogLTE4My43NDAyMzQxOTA1NzQxNyxcclxuICAgICAgICAgICAgeTogMzcuNjg3MjE4NzY5ODM5MDg1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX1F3OEVzck4wTTUyblZRVU02dnNWJyxcclxuICAgICAgICAgICAgbmFtZTogJ01vbnNhbnRvIFRlY2hub2xvZ3kgTExDJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogODY4OSxcclxuICAgICAgICAgICAgeDogMTkuNzYzOTAxNDg4MzUyNjczLFxyXG4gICAgICAgICAgICB5OiAxOTYuNjIyMzY4NjI1ODk3NzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfajVVNUlFYTFGSWJndHI3aU5zUU0nLFxyXG4gICAgICAgICAgICBuYW1lOiAnTXVyYXRhIE1hbnVmYWN0dXJpbmcgQ28uLCBMdGQuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNzM0MixcclxuICAgICAgICAgICAgeDogODcuNjQ4NzgxOTcxMDg4MTcsXHJcbiAgICAgICAgICAgIHk6IDI5MS4xMDIzMTk1ODcyMzUyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzFwNEZXRW9JdGp5S2J3VHBDSm9sJyxcclxuICAgICAgICAgICAgbmFtZTogJ05ldHdvcmsgQXBwbGlhbmNlLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogNTMwLFxyXG4gICAgICAgICAgICB4OiAtMjIyLjI5MjAzNzIxMTgwNTIsXHJcbiAgICAgICAgICAgIHk6IDE0OS4wODM3MjE1NTI3MjA2MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19BVE9XSGQ0R0dhb2gxNHp1dFhxNycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQb3dlciBNZWRpY2FsIEludGVydmVudGlvbnMsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzMCxcclxuICAgICAgICAgICAgeDogMTA4Ljg4MTEwMzk5NzQ5NzA2LFxyXG4gICAgICAgICAgICB5OiAxODYuODUzMzg3ODI2MjY1OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19rOFY3YzVnbm1DN1NWbXVwNVZ1NycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdSYWluZGFuY2UgQ29tbXVuaWNhdGlvbnMsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzLFxyXG4gICAgICAgICAgICB4OiA2NS4xNTcxNzY5NDI2NDQxNyxcclxuICAgICAgICAgICAgeTogODMuNDE5NDM2Mzc4MjA0MDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfMjQyaEplZ3dmUUNlUDloc2Z3cFcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmlnaHQgTm93IFRlY2hub2xvZ2llcywgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIsXHJcbiAgICAgICAgICAgIHg6IDE4Ni44MTk2NTI4MTYwMjI2OCxcclxuICAgICAgICAgICAgeTogLTE4My40MDE3MDI1MTQ1ODUzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzZyOXQ3WkE2WVQwMzFPZDRrTVBnJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JpZ2h0bm93IFRlY2hub2xvZ2llcywgSW5jLicsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDEwLFxyXG4gICAgICAgICAgICB4OiAtMjMxLjczNjE1ODgwMTIyMjM2LFxyXG4gICAgICAgICAgICB5OiAtNzQuMDk5MTY5NzA5MzQyNTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfMklGOTd6VnltU3VyYVNuVUFYbXEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2FueW8gRWxlY3RyaWMgQ28uLCBMdGQuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogODM4MyxcclxuICAgICAgICAgICAgeDogLTI4My45MDI4MjUzNjA4OTQ2LFxyXG4gICAgICAgICAgICB5OiAtMTI3Ljg3MjUzMzgxOTY5MTcxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX3BsWmJMeGl5c0VTYmFJOXBPZXltJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NFTUlDT05EVUNUT1IgRU5FUkdZIExBQk9SQVRPUlkgQ08uLCBMVEQuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMTM4ODUsXHJcbiAgICAgICAgICAgIHg6IDI1Ni4yMjgzOTg3NjM3OTA1LFxyXG4gICAgICAgICAgICB5OiAxMjQuNDYxNDE2OTYwNjY1MjJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfQ01XY29DSldQT2Zpc0xXckt2eWQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnU2hhcnAgS2FidXNoaWtpIEthaXNoYScsXHJcbiAgICAgICAgICAgIG51bVBhdGVudHM6IDIyNTQwLFxyXG4gICAgICAgICAgICB4OiA0LjA5NTU2MDQwNjQ4MjY3MSxcclxuICAgICAgICAgICAgeTogLTMyLjEzNjE4NDgyNTc5OTM4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyxcclxuICAgICAgICAgICAgbmFtZTogJ1NpZWJlbCBTeXN0ZW1zLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjk4LFxyXG4gICAgICAgICAgICB4OiAtMzMuOTE5OTQ3NTIzMTQ4NDIsXHJcbiAgICAgICAgICAgIHk6IC0yMTIuNTk5NDI4ODk4ODgxMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXNzaWduZWUnLFxyXG4gICAgICAgICAgICBpZDogJ29yZ19KOFZuQXpGcUVqV2d4cTRldjcxeicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTdGFyaW9uIEluc3RydW1lbnRzIENvcnBvcmF0aW9uJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjAsXHJcbiAgICAgICAgICAgIHg6IDE3OC45ODQxNjY1NDExNjM0NixcclxuICAgICAgICAgICAgeTogMTY5LjU0ODIxMjExMTkwMjc2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnX20ydE5QSmtBMmcxQVdPYzd1elMxJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RoZXJhU2Vuc2UsIEluYy4nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1MyxcclxuICAgICAgICAgICAgeDogLTEyNS45MTQ1OTk4NDYwODUxLFxyXG4gICAgICAgICAgICB5OiAxMzIuNDE3MzkwNTQ1MTYxMTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfSmpyTTZVbWVPWTBRNU1tb05pUDgnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVE9LWU8gSU5TVElUVVRFIE9GIFRFQ0hOT0xPR1knLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAzOTUsXHJcbiAgICAgICAgICAgIHg6IDE4LjYxNDEzMDA4MTE2NjQ2LFxyXG4gICAgICAgICAgICB5OiAxNjUuMjEyNTM2OTk1NTQyMTRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Fzc2lnbmVlJyxcclxuICAgICAgICAgICAgaWQ6ICdvcmdfZXdWc0N1dHBSekQ5cFQwN2tCb0UnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVHljbyBIZWFsdGNhcmUgR3JvdXAgTFAnLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiA1LFxyXG4gICAgICAgICAgICB4OiAtNjcuMjU0MzA1MjY3NDIxMDcsXHJcbiAgICAgICAgICAgIHk6IDMwOC42MTQ5MjgyMDQxNTc5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzV3Tk5ySjR6RlE1S1E4T1duelJDJyxcclxuICAgICAgICAgICAgbmFtZTogJ1VuaXRlZCBTdGF0ZXMgU3VydGljYWwgQ29ycG9yYXRpb24nLFxyXG4gICAgICAgICAgICBudW1QYXRlbnRzOiAxLFxyXG4gICAgICAgICAgICB4OiAyODIuNzgxMDA5MjI0NDMxLFxyXG4gICAgICAgICAgICB5OiAtNTIuOTgxNTkwMTE1MDg3MTQ0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhc3NpZ25lZScsXHJcbiAgICAgICAgICAgIGlkOiAnb3JnXzN2STJaNWtDMVNhU2xiVUJvT0JUJyxcclxuICAgICAgICAgICAgbmFtZTogJ1dlYkV4IENvbW11bmljYXRpb25zLCBJbmMuJyxcclxuICAgICAgICAgICAgbnVtUGF0ZW50czogMjIsXHJcbiAgICAgICAgICAgIHg6IDE4Ny4zNjc2Mzk1MTEyODcxNCxcclxuICAgICAgICAgICAgeTogMTAxLjIwODQ5ODQ3MDgwMTgxXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTE2MjI3JywgdGFyZ2V0OiAnNTM1ODUxNC0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjUxNjIyNycsIHRhcmdldDogJzU3NTU3MzctMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1MTYyMjcnLCB0YXJnZXQ6ICc1OTQ4MDA2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTE2MjI3JywgdGFyZ2V0OiAnNjUxNjIyNy00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjUxNjIyNycsIHRhcmdldDogJ29yZ19id3E4M2piY2NLcUY0akpyUGNhUicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1MzU5MDknLCB0YXJnZXQ6ICc2NTM1OTA5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTM1OTA5JywgdGFyZ2V0OiAnb3JnXzEwN1dLTlBidkRES3JaQmxtdzhVJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU0OTkwOCcsIHRhcmdldDogJzYzOTM2MDUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NDk5MDgnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTUzNTYzJywgdGFyZ2V0OiAnNTcxNTQ1MC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1MzU2MycsIHRhcmdldDogJzU3MTU0NTAtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTM1NjMnLCB0YXJnZXQ6ICc2NTUzNTYzLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTUzNTYzJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODMyMCcsIHRhcmdldDogJzQ4MDk2OTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzMjAnLCB0YXJnZXQ6ICc0ODYzNDI1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzIwJywgdGFyZ2V0OiAnNTA5NzEyMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODMyMCcsIHRhcmdldDogJ29yZ19HVk1sTFZid0NEU2lxUDlPZzhUbicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc1MDk3MTIyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNTIzNzE3OC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzUyNTc5NzEtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc2NDI0ODQ3LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNjU1ODM1MS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJzY1NTgzNTEtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NTgzNTEnLCB0YXJnZXQ6ICc2NTU4MzUxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTU4MzUxJywgdGFyZ2V0OiAnNjU1ODM1MS04JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU1ODM1MScsIHRhcmdldDogJ29yZ19HVk1sTFZid0NEU2lxUDlPZzhUbicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjA0NjEnLCB0YXJnZXQ6ICc1OTE4MTU5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYwNDYxJywgdGFyZ2V0OiAnNTkxODE1OS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJzQyNTMwNjEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICc0OTAyNjcxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAnNDk5NzI2Mi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJzU5MjUyMjQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjMxNzQnLCB0YXJnZXQ6ICdvcmdfQ01XY29DSldQT2Zpc0xXckt2eWQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTYzMTc0JywgdGFyZ2V0OiAncGVyX0RJalVUTTdsSGhEc0F6MnU4amlPJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2MzE3NCcsIHRhcmdldDogJ3Blcl90WDJlMnlWTGd5TmdvYkVweldLVCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc0MDgyNjAyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTA0MTA4Ni00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzUzMDY2MjMtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1NTMzMjM4LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTUzNDEzMi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzU2MTY1MzItMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc1NzIyOTk3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnNTkwMTg5Ni0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU2NTUwOScsIHRhcmdldDogJzYxMDMwMzMtNycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NjU1MDknLCB0YXJnZXQ6ICc2MTc1NzUyLTknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTY1NTA5JywgdGFyZ2V0OiAnb3JnX20ydE5QSmtBMmcxQVdPYzd1elMxJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3MTI4MicsIHRhcmdldDogJzYwODE1MTgtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NzEyODInLCB0YXJnZXQ6ICdvcmdfNHpPMkJjMDh4NTZYakRxNVRlQnAnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc0NjM1JywgdGFyZ2V0OiAnNTcxNTQ1MC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NDYzNScsIHRhcmdldDogJzU3MTU0NTAtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1NzQ2MzUnLCB0YXJnZXQ6ICc1OTYzOTUzLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc0NjM1JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NzcyNicsIHRhcmdldDogJzY1Nzc3MjYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1Nzc3MjYnLCB0YXJnZXQ6ICc2NTc3NzI2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTc3NzI2JywgdGFyZ2V0OiAnNjU3NzcyNi0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU3NzcyNicsIHRhcmdldDogJzY1Nzc3MjYtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY1Nzc3MjYnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NTg3ODM1JywgdGFyZ2V0OiAnNjQzMzkyMS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjU4NzgzNScsIHRhcmdldDogJzY1MjYzMzUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDEwODcnLCB0YXJnZXQ6ICc1MjYxMDM3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjAxMDg3JywgdGFyZ2V0OiAnNjYwMTA4Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwMTA4NycsIHRhcmdldDogJ29yZ18zdkkyWjVrQzFTYVNsYlVCb09CVCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDIyNTInLCB0YXJnZXQ6ICc0ODkwNjExLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjAyMjUyJywgdGFyZ2V0OiAnb3JnX0o4Vm5BekZxRWpXZ3hxNGV2NzF6JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwNDExNycsIHRhcmdldDogJzU4NzMwOTYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDQxMTcnLCB0YXJnZXQ6ICc1ODczMDk2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA0MTE3JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwNDEyOCcsIHRhcmdldDogJzYzMjQ1NjgtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDQxMjgnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA2NzQ0JywgdGFyZ2V0OiAnNjYwNjc0NC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwNjc0NCcsIHRhcmdldDogJ29yZ180ek8yQmMwOHg1NlhqRHE1VGVCcCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDkxNTAnLCB0YXJnZXQ6ICc1OTYzOTUzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjA5MTUwJywgdGFyZ2V0OiAnNjMzNjEzNy0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYwOTE1MCcsIHRhcmdldDogJzYzMzYxMzctMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MDkxNTAnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjIxODM0JywgdGFyZ2V0OiAnNTk0NDc5MS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjYyMTgzNCcsIHRhcmdldDogJzY2MjE4MzQtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2MjE4MzQnLCB0YXJnZXQ6ICdvcmdfazhWN2M1Z25tQzdTVm11cDVWdTcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQxNTMzJywgdGFyZ2V0OiAnNDgwOTY5Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0MTUzMycsIHRhcmdldDogJzQ4NjM0MjUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDE1MzMnLCB0YXJnZXQ6ICc1MDk3MTIyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQxNTMzJywgdGFyZ2V0OiAnb3JnX0dWTWxMVmJ3Q0RTaXFQOU9nOFRuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJzQxMjcyMjctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICc0MjgzMDI0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnNTE3NjUwMi0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJ0QyNjM5ODctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NDQ1MzInLCB0YXJnZXQ6ICdEMzA0MjM0LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjQ0NTMyJywgdGFyZ2V0OiAnUkUyODkzMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY0NDUzMicsIHRhcmdldDogJ29yZ181d05Ocko0ekZRNUtROE9XbnpSQycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTQwMzInLCB0YXJnZXQ6ICc1MjYxMDM3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU0MDMyJywgdGFyZ2V0OiAnNTg1NTk1Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NDAzMicsIHRhcmdldDogJzY2MDEwODctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTQwMzInLCB0YXJnZXQ6ICc2NjU0MDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU0MDMyJywgdGFyZ2V0OiAnb3JnXzN2STJaNWtDMVNhU2xiVUJvT0JUJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NjE5MycsIHRhcmdldDogJzQ4OTIyNDQtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTYxOTMnLCB0YXJnZXQ6ICc1MjcxNTQzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU2MTkzJywgdGFyZ2V0OiAnNTMyOTY1NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY1NjE5MycsIHRhcmdldDogJzU0MDk0OTgtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NTYxOTMnLCB0YXJnZXQ6ICc1NzA3MzY5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjU2MTkzJywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY0OCcsIHRhcmdldDogJzY2NjU2NDgtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NDgnLCB0YXJnZXQ6ICc2NjY1NjQ4LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjQ4JywgdGFyZ2V0OiAnNjY2NTY0OC0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY0OCcsIHRhcmdldDogJzY2NjU2NDgtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NDgnLCB0YXJnZXQ6ICc2NjY1NjQ4LTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjQ4JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY2NTY1NScsIHRhcmdldDogJzY0MzQ1NTAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2NjU2NTUnLCB0YXJnZXQ6ICc2NjY1NjU1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjY1NjU1JywgdGFyZ2V0OiAnb3JnXzZyOXQ3WkE2WVQwMzFPZDRrTVBnJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY4NDQzOCcsIHRhcmdldDogJzU4NzMwOTYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2ODQ0MzgnLCB0YXJnZXQ6ICc2MDkyMDgzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2Njg0NDM4JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY5MDM4NycsIHRhcmdldDogJzYyODE4OTgtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2OTAzODcnLCB0YXJnZXQ6ICc2NjkwMzg3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NjkwMzg3JywgdGFyZ2V0OiAnb3JnX0Z2Z3ZHRmU4SlowaVlsWjgwd2VGJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY5MzIzMicsIHRhcmdldDogJzU0MTYyNTUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY2OTMyMzInLCB0YXJnZXQ6ICdvcmdfTUt2Ym5DY3lQdWRYZXhVdnNTd0YnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2Njk4NjQzJywgdGFyZ2V0OiAnNjI2NDA4Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjY5ODY0MycsIHRhcmdldDogJ29yZ19BVE9XSGQ0R0dhb2gxNHp1dFhxNycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTE1NjUnLCB0YXJnZXQ6ICc2NzExNTY1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzExNTY1JywgdGFyZ2V0OiAnNjcxMTU2NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxMTU2NScsIHRhcmdldDogJzY3MTE1NjUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTE1NjUnLCB0YXJnZXQ6ICc2NzExNTY1LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzExNTY1JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxNjIzMycsIHRhcmdldDogJzYyNjQwODctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTYyMzMnLCB0YXJnZXQ6ICdvcmdfQVRPV0hkNEdHYW9oMTR6dXRYcTcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjIyMzIwNS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzYzNzA1ODQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2NzE4MzYxLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjcxODM2MS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzY3MTgzNjEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICc2NzE4MzYxLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzE4MzYxJywgdGFyZ2V0OiAnNjcxODM2MS01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcxODM2MScsIHRhcmdldDogJzY3MTgzNjEtOCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MTgzNjEnLCB0YXJnZXQ6ICdvcmdfMXA0RldFb0l0anlLYndUcENKb2wnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI0Mzk5JywgdGFyZ2V0OiAnNjcyNDM5OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyNDM5OScsIHRhcmdldDogJzY3MjQzOTktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MjQzOTknLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI3NTIyJywgdGFyZ2V0OiAnNDI1MzA2MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyNzUyMicsIHRhcmdldDogJzQ5MDI2NzEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjc1MjInLCB0YXJnZXQ6ICdvcmdfYzV2eUJ6SzdpaWtrVTREalFGSFQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4NzAyJywgdGFyZ2V0OiAnNjU3NzcyNi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODcwMicsIHRhcmdldDogJzY3MTE1NjUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg3MDInLCB0YXJnZXQ6ICc2NzExNTY1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4NzAyJywgdGFyZ2V0OiAnNjcxMTU2NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODcwMicsIHRhcmdldDogJzY3MTE1NjUtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Mjg3MDInLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzI4OTYwJywgdGFyZ2V0OiAnNjM5MzYwNS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjcyODk2MCcsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIwOTUnLCB0YXJnZXQ6ICc1MjQzNjIyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMDk1JywgdGFyZ2V0OiAnNjczMjA5NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjA5NScsIHRhcmdldDogJzY3MzIwOTUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIwOTUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTAwJywgdGFyZ2V0OiAnNTcxNTQ1MC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjEwMCcsIHRhcmdldDogJzY1Nzc3MjYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMDAnLCB0YXJnZXQ6ICc2NTc3NzI2LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTAwJywgdGFyZ2V0OiAnNjY2NTY0OC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjEwMCcsIHRhcmdldDogJzY3MzIxMDAtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMDAnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTExJywgdGFyZ2V0OiAnNDk1MTI3OC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjExMScsIHRhcmdldDogJzYwOTIwODMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3MzIxMTEnLCB0YXJnZXQ6ICc2MDkyMDgzLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzMyMTExJywgdGFyZ2V0OiAnNjczMjExMS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjczMjExMScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NTQ2ODEnLCB0YXJnZXQ6ICc1ODczMDk2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzU0NjgxJywgdGFyZ2V0OiAnNjA5MjA4My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc1NDY4MScsIHRhcmdldDogJzYwOTIwODMtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NTQ2ODEnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzMzUxJywgdGFyZ2V0OiAnNjcxMTU2NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzM1MScsIHRhcmdldDogJzY3MTE1NjUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjMzNTEnLCB0YXJnZXQ6ICc2NzExNTY1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzMzUxJywgdGFyZ2V0OiAnNjcxMTU2NS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzM1MScsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjM1MDEnLCB0YXJnZXQ6ICc1MjYxMDM3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzNTAxJywgdGFyZ2V0OiAnNTg1NTk1Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2MzUwMScsIHRhcmdldDogJzY2MDEwODctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3NjM1MDEnLCB0YXJnZXQ6ICc2NjU0MDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzYzNTAxJywgdGFyZ2V0OiAnb3JnXzN2STJaNWtDMVNhU2xiVUJvT0JUJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc2ODkwNCcsIHRhcmdldDogJzYxODM1ODktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3Njg5MDQnLCB0YXJnZXQ6ICdvcmdfWGNxQ2p0VDhwaThNazNValFsRHQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgyMzgzJywgdGFyZ2V0OiAnNjcxMTU2NS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MjM4MycsIHRhcmdldDogJzY3MTE1NjUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODIzODMnLCB0YXJnZXQ6ICc2NzExNTY1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgyMzgzJywgdGFyZ2V0OiAnNjcxMTU2NS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MjM4MycsIHRhcmdldDogJ29yZ184M05OZ0pyUDVsa0lOODc2a05lRycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODM1MjQnLCB0YXJnZXQ6ICc1ODU5OTE2LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2NzgzNTI0JywgdGFyZ2V0OiAnNjc4MzUyNC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjc4MzUyNCcsIHRhcmdldDogJ29yZ19mQTBhenFvQkdFem9Qb3k4NUp5dicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY3ODYzODInLCB0YXJnZXQ6ICc2NTMwOTMyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2Nzg2MzgyJywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwNDMzMCcsIHRhcmdldDogJzU3MTU0NTAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDQzMzAnLCB0YXJnZXQ6ICc2MjY4ODAzLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA0MzMwJywgdGFyZ2V0OiAnNjgwNDMzMC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwNDMzMCcsIHRhcmdldDogJzY4MDQzMzAtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDQzMzAnLCB0YXJnZXQ6ICc2ODA0MzMwLTUnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA0MzMwJywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzQwODIwOTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc0NTYxNDQ0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNDgwOTY5Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzQ4NjM0MjUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc1MDk3MTIyLTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnNTIzNzE3OC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJzUzODIyMzItMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MDk2NTMnLCB0YXJnZXQ6ICc2ODA5NjUzLTknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODA5NjUzJywgdGFyZ2V0OiAnRDQyMzc2MS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgwOTY1MycsIHRhcmdldDogJ29yZ19HVk1sTFZid0NEU2lxUDlPZzhUbicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1NjUnLCB0YXJnZXQ6ICc2Mjk1NTMwLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTY1JywgdGFyZ2V0OiAnNjI5NTUzMC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU2NScsIHRhcmdldDogJ29yZ19aNTlhVUJHdFo5UDVRemRGaUttWicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1ODInLCB0YXJnZXQ6ICc0MzYyMzg3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NTgyJywgdGFyZ2V0OiAnNjA4MTg3NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjU4MicsIHRhcmdldDogJzY4MjY1ODItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY1ODInLCB0YXJnZXQ6ICdvcmdfMGpQV003WXFodFhtMGxtM2ZtMVknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NzQ1JywgdGFyZ2V0OiAnNjIzMzYxNy0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyNjc0NScsIHRhcmdldDogJzY1Nzc3MjYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MjY3NDUnLCB0YXJnZXQ6ICc2ODI2NzQ1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI2NzQ1JywgdGFyZ2V0OiAnb3JnXzgzTk5nSnJQNWxrSU44NzZrTmVHJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJzU5Nzg4MjktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICc2MDA0Mjc2LTEzJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJzY4Mjk2NTUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICc2ODI5NjU1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODI5NjU1JywgdGFyZ2V0OiAnNjgyOTY1NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgyOTY1NScsIHRhcmdldDogJzY4Mjk2NTUtNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4Mjk2NTUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODMwMTc0JywgdGFyZ2V0OiAnNDc5ODU5NC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjgzMDE3NCcsIHRhcmdldDogJzU0NjU4OTUtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4MzAxNzQnLCB0YXJnZXQ6ICdvcmdfOGNzTWd0Z25OMG1SRVpwTlAxSmknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODQyNzQ4JywgdGFyZ2V0OiAnNjQzNDU1MC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg0Mjc0OCcsIHRhcmdldDogJzY2NjU2NTUtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NDI3NDgnLCB0YXJnZXQ6ICdvcmdfNnI5dDdaQTZZVDAzMU9kNGtNUGcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODQzNDAzJywgdGFyZ2V0OiAnNjI2NDA4Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg0MzQwMycsIHRhcmdldDogJ29yZ19BVE9XSGQ0R0dhb2gxNHp1dFhxNycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTAyNTInLCB0YXJnZXQ6ICc1Nzc0MzU3LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwODk1JywgdGFyZ2V0OiAnNjA5MjA4My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDg5NScsIHRhcmdldDogJzYwOTIwODMtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA4OTUnLCB0YXJnZXQ6ICc2NTc3NzI2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwODk1JywgdGFyZ2V0OiAnNjg1MDg5NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDg5NScsIHRhcmdldDogJzY4NTA4OTUtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA4OTUnLCB0YXJnZXQ6ICdvcmdfODNOTmdKclA1bGtJTjg3NmtOZUcnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwOTQ5JywgdGFyZ2V0OiAnNjg1MDk0OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MDk0OScsIHRhcmdldDogJzY4NTA5NDktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTA5NDknLCB0YXJnZXQ6ICc2ODUwOTQ5LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2ODUwOTQ5JywgdGFyZ2V0OiAnb3JnXzI0MmhKZWd3ZlFDZVA5aHNmd3BXJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjg1MjkxNScsIHRhcmdldDogJzUyNzYyNjItMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY4NTI5MTUnLCB0YXJnZXQ6ICdvcmdfTUt2Ym5DY3lQdWRYZXhVdnNTd0YnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTA1MDU3JywgdGFyZ2V0OiAnNTg5NzU2My00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjkwNTA1NycsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5MDUwNTcnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTU5ODUyJywgdGFyZ2V0OiAnNTYzMjQzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk1OTg1MicsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5NTk4NTInLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTY0MzYzJywgdGFyZ2V0OiAnNTQwOTQ5OC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk2NDM2MycsIHRhcmdldDogJzY5NjQzNjMtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5NjQzNjMnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTc4OTIxJywgdGFyZ2V0OiAnNTYzMjQzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk3ODkyMScsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5Nzg5MjEnLCB0YXJnZXQ6ICc2OTc4OTIxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc2OTc4OTIxJywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNjk4MTYyOCcsIHRhcmdldDogJzU0MDk0OTgtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzY5ODE2MjgnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDAwODE4JywgdGFyZ2V0OiAnNTYzMjQzMi00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAwMDgxOCcsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMDA4MTgnLCB0YXJnZXQ6ICc3MDAwODE4LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDAwODE4JywgdGFyZ2V0OiAnb3JnX1h1NmdYU3NsdERCWlRBaE1GQldEJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzQwODIwOTctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc0NTYxNDQ0LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNDgwOTY5Ny0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzUxNzY2NDQtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc1MzgyMjMyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNjU1MTI3Ni0xMCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc2NTUxMjc2LTExJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtMTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNjU1MTI3Ni0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJzY1NTEyNzYtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwMjU3NDMnLCB0YXJnZXQ6ICc2NTUxMjc2LTgnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDI1NzQzJywgdGFyZ2V0OiAnNjU1MTI3Ni05JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzAyNTc0MycsIHRhcmdldDogJ29yZ19HVk1sTFZid0NEU2lxUDlPZzhUbicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNDkxOTAnLCB0YXJnZXQ6ICc2MDgwOTk4LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDQ5MTkwJywgdGFyZ2V0OiAnNjkxNDE4Mi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA0OTE5MCcsIHRhcmdldDogJ29yZ18ySUY5N3pWeW1TdXJhU25VQVhtcScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNTU3MzEnLCB0YXJnZXQ6ICc1NjMyNDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDU1NzMxJywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA1NTczMScsIHRhcmdldDogJzY5Nzg5MjEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNTU3MzEnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnNDQ4NjcyMC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJzQ3MDMwMTktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICc1MjcyMDY5LTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnNTYyMjY1My0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2MTAxNCcsIHRhcmdldDogJzcwNjEwMTQtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjEwMTQnLCB0YXJnZXQ6ICc3MDYxMDE0LTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDYxMDE0JywgdGFyZ2V0OiAnb3JnX0R0dFpNdmt5dlczZlY2b0NVTVRGJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzA2NDM0NicsIHRhcmdldDogJzQyNTMwNjEtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcwNjQzNDYnLCB0YXJnZXQ6ICc0OTAyNjcxLTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MDY0MzQ2JywgdGFyZ2V0OiAnb3JnX0R0dFpNdmt5dlczZlY2b0NVTVRGJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzEwNTg2OCcsIHRhcmdldDogJzU4NjMzMjYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMDU4NjgnLCB0YXJnZXQ6ICc2ODg3NzM2LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTA1ODY4JywgdGFyZ2V0OiAnb3JnXzBlVHIzWElCakFLcFhrQzY4MjNyJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzExMTc2OScsIHRhcmdldDogJzU0MDk0OTgtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMTE3NjknLCB0YXJnZXQ6ICc1ODk3NTYzLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTExNzY5JywgdGFyZ2V0OiAnNjUzMDkzMi0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzExMTc2OScsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxMTE3NjknLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTQ3MTM4JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE0NzEzOCcsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNTk3NTAnLCB0YXJnZXQ6ICc0ODcyNjAzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTU5NzUwJywgdGFyZ2V0OiAnNTcxMzkxMS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE1OTc1MCcsIHRhcmdldDogJzU3MTM5MTEtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcxNTk3NTAnLCB0YXJnZXQ6ICc3MTU5NzUwLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MTU5NzUwJywgdGFyZ2V0OiAnNzE1OTc1MC01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzE1OTc1MCcsIHRhcmdldDogJ29yZ19ld1ZzQ3V0cFJ6RDlwVDA3a0JvRScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyMTE4MjUnLCB0YXJnZXQ6ICc1MDgxNDIyLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjExODI1JywgdGFyZ2V0OiAnNTI4MzQ1Mi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzIxMTgyNScsIHRhcmdldDogJzU3MDMzNTctMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyMTE4MjUnLCB0YXJnZXQ6ICc2NTkzODM0LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjQ2NzM0JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI0NjczNCcsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyODI3ODInLCB0YXJnZXQ6ICc2MTQ0Njc5LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MjgyNzgyJywgdGFyZ2V0OiAnNjE1Mjk4Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI4Mjc4MicsIHRhcmdldDogJzY4MzY1NDAtNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyODI3ODInLCB0YXJnZXQ6ICdvcmdfdlM2cmNLeWMycU4zckZkWDBQMksnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mjk3OTc3JywgdGFyZ2V0OiAnNjE0NDY3OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzI5Nzk3NycsIHRhcmdldDogJzYxNTI5ODctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzcyOTc5NzcnLCB0YXJnZXQ6ICc2ODM2NTQwLTYnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mjk3OTc3JywgdGFyZ2V0OiAnb3JnX3ZTNnJjS3ljMnFOM3JGZFgwUDJLJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJzQ0ODY3MjAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICc0NzAzMDE5LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnNTI3MjA2OS02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJzU2MjI2NTMtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczMjMzNTYnLCB0YXJnZXQ6ICc3MDYxMDE0LTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzIzMzU2JywgdGFyZ2V0OiAnNzMyMzM1Ni01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzMyMzM1NicsIHRhcmdldDogJ29yZ19EdHRaTXZreXZXM2ZWNm9DVU1URicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczNDA0MTEnLCB0YXJnZXQ6ICc3MzQwNDExLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk1JywgdGFyZ2V0OiAnNTQwOTQ5OC00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NScsIHRhcmdldDogJzU2MzI0MzItNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTUnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk1JywgdGFyZ2V0OiAnNzA4MzA3NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NScsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTYnLCB0YXJnZXQ6ICc1NjMyNDMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk2JywgdGFyZ2V0OiAnNjkwNTA1Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4MDY5NicsIHRhcmdldDogJzcwODMwNzUtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODA2OTYnLCB0YXJnZXQ6ICc3MzgwNjk2LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3MzgwNjk2JywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4NTIyNCcsIHRhcmdldDogJzUwNDEyMDAtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODUyMjQnLCB0YXJnZXQ6ICc1MDQxMjAwLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Mzg1MjI0JywgdGFyZ2V0OiAnNzM4NTIyNC0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzM4NTIyNCcsIHRhcmdldDogJzczODUyMjQtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzczODUyMjQnLCB0YXJnZXQ6ICdvcmdfSW1lZzlXNlAxVEU2STJRdXRTNHknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDAyNTA2JywgdGFyZ2V0OiAnNTUxMjQyNi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwMjUwNicsIHRhcmdldDogJzYwNDgxMTAtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDI1MDYnLCB0YXJnZXQ6ICc3NDAyNTA2LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDAyNTA2JywgdGFyZ2V0OiAnb3JnX3BwRWxrRXRRdkZ0RzZBNDc1NFVJJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwNDUwOCcsIHRhcmdldDogJzQ2ODI1OTYtMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDQ1MDgnLCB0YXJnZXQ6ICc1MTE3ODM4LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDA0NTA4JywgdGFyZ2V0OiAnNTcxNTY3NS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQwNDUwOCcsIHRhcmdldDogJzY5MTI4MzktMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MDQ1MDgnLCB0YXJnZXQ6ICdvcmdfTmZLQkI5VFdGNEFzOFRTYXNKNW4nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDExMjA5JywgdGFyZ2V0OiAnNTM0NTYzOS02JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQxMTIwOScsIHRhcmdldDogJzU0MTc3NzAtOCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0MTEyMDknLCB0YXJnZXQ6ICc3MDgyODMyLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDExMjA5JywgdGFyZ2V0OiAnb3JnX0VoWUZQSUpFbVlRWVJvWXZzbnB5JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA2NScsIHRhcmdldDogJzQwNzIyMzYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwNjUnLCB0YXJnZXQ6ICc0MzU2NDU1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDY1JywgdGFyZ2V0OiAnNDcwMzAxOS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA2NScsIHRhcmdldDogJzcwNjEwMTQtNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwNjUnLCB0YXJnZXQ6ICdvcmdfRWhZRlBJSkVtWVFZUm9ZdnNucHknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDUzMDY1JywgdGFyZ2V0OiAnb3JnX0pqck02VW1lT1kwUTVNbW9OaVA4JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ1MzA4NycsIHRhcmdldDogJzUzNDU2MzktNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NTMwODcnLCB0YXJnZXQ6ICdvcmdfRWhZRlBJSkVtWVFZUm9ZdnNucHknIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDYyODYyJywgdGFyZ2V0OiAnNjE0NDY3OS0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2Mjg2MicsIHRhcmdldDogJzY4MzY1NDAtNicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjI4NjInLCB0YXJnZXQ6ICdvcmdfdlM2cmNLeWMycU4zckZkWDBQMksnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY0ODQ2JywgdGFyZ2V0OiAnNDQwMzY4Ny0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2NDg0NicsIHRhcmdldDogJzU4OTc1NjMtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjQ4NDYnLCB0YXJnZXQ6ICc2OTA1MDU3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY0ODQ2JywgdGFyZ2V0OiAnNzA4MzA3NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2NDg0NicsIHRhcmdldDogJ29yZ19OZktCQjlUV0Y0QXM4VFNhc0o1bicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc0NjgzMDQnLCB0YXJnZXQ6ICc2ODYzMzYzLTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NDY4MzA0JywgdGFyZ2V0OiAnNzQ2ODMwNC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzQ2ODMwNCcsIHRhcmdldDogJ29yZ19FaFlGUElKRW1ZUVlSb1l2c25weScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDEyOTMnLCB0YXJnZXQ6ICc0MjI0NzI1LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTAxMjkzJywgdGFyZ2V0OiAnNDU3MzQ3Mi0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwMTI5MycsIHRhcmdldDogJ29yZ19qNVU1SUVhMUZJYmd0cjdpTnNRTScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDY3OTEnLCB0YXJnZXQ6ICc0NDAzNjg3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTA2NzkxJywgdGFyZ2V0OiAnNDk3MjIyNC0xJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzUwNjc5MScsIHRhcmdldDogJzY5MDUwNTctMicgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc1MDY3OTEnLCB0YXJnZXQ6ICdSRTM5ODQxLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NTA2NzkxJywgdGFyZ2V0OiAnb3JnX05mS0JCOVRXRjRBczhUU2FzSjVuJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYyMDY1NScsIHRhcmdldDogJzU5NDg3ODktMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MjA2NTUnLCB0YXJnZXQ6ICc3NjIwNjU1LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjIwNjU1JywgdGFyZ2V0OiAnb3JnX1doMmNuT0l6S2xoemp1cVZtT3FZJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYzMjk4NScsIHRhcmdldDogJzcwNzg1MDMtMycgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MzI5ODUnLCB0YXJnZXQ6ICc3NjA4NzYxLTQnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjMyOTg1JywgdGFyZ2V0OiAnNzYzMjk4NS0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzYzMjk4NScsIHRhcmdldDogJzc2MzI5ODUtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2MzI5ODUnLCB0YXJnZXQ6ICdvcmdfUXc4RXNyTjBNNTJuVlFVTTZ2c1YnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjYzNjA3JywgdGFyZ2V0OiAnNTU5NDE2OS0yJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY2MzYwNycsIHRhcmdldDogJzY2NTg1NzctMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NjM2MDcnLCB0YXJnZXQ6ICc3MTU0NDc3LTInIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NjYzNjA3JywgdGFyZ2V0OiAnb3JnX0lEVWJTMDlaUjBKaEo4akZFcHRUJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY3NDY1MCcsIHRhcmdldDogJzY2MzkyNDYtMScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc2NzQ2NTAnLCB0YXJnZXQ6ICc2ODM4Mzk3LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3Njc0NjUwJywgdGFyZ2V0OiAnNzIwNTcxNi01JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzY3NDY1MCcsIHRhcmdldDogJ29yZ19wbFpiTHhpeXNFU2JhSTlwT2V5bScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc3MzI4MTknLCB0YXJnZXQ6ICc2NjM5MjQ2LTEnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc3NzMyODE5JywgdGFyZ2V0OiAnNjgzODM5Ny0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnNzczMjgxOScsIHRhcmdldDogJzcyMDU3MTYtNScgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzc3MzI4MTknLCB0YXJnZXQ6ICdvcmdfcGxaYkx4aXlzRVNiYUk5cE9leW0nIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc4MDUzMTg0JywgdGFyZ2V0OiAnNzA3ODUwMy0zJyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnODA1MzE4NCcsIHRhcmdldDogJzc2MDg3NjEtNCcgfSxcclxuICAgICAgICB7IHNvdXJjZTogJzgwNTMxODQnLCB0YXJnZXQ6ICc3NjMyOTg1LTMnIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6ICc4MDUzMTg0JywgdGFyZ2V0OiAnNzYzMjk4NS00JyB9LFxyXG4gICAgICAgIHsgc291cmNlOiAnODA1MzE4NCcsIHRhcmdldDogJ29yZ19RdzhFc3JOME01Mm5WUVVNNnZzVicgfVxyXG4gICAgXVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIEppYWNoZW5nIFBhbiA8amFja2llYW54aXNAZ21haWwuY29tPlxyXG4gKiBAZGVzY3JpcHRpb24gUHJvdmlkZSB0aGUgZW50cmFuY2Ugb2YgTmV0Vi5qcy5cclxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL21hcDIuanMsIG5vZGUudHMsIGxpbmsudHNcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IE1hcDIgZnJvbSAnLi91dGlscy9tYXAyJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuL25vZGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluaydcclxuaW1wb3J0ICogYXMgZGVmYXVsdENvbmZpZ3MgZnJvbSAnLi9jb25maWdzJ1xyXG5pbXBvcnQgKiBhcyBkYXRhc2V0IGZyb20gJy4vZGF0YXNldCdcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVyJ1xyXG5pbXBvcnQgeyBJbnRlcmFjdGlvbk1hbmFnZXIgfSBmcm9tICcuL2ludGVyYWN0aW9uL2ludGVyYWN0aW9uJ1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzL3V0aWxzJ1xyXG5pbXBvcnQgeyBMYWJlbE1hbmFnZXIgfSBmcm9tICcuL2xhYmVsL2xhYmVsJ1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlcydcclxuXHJcbmNsYXNzIE5ldFYge1xyXG4gICAgcHVibGljIFV0aWxzID0gVXRpbHNcclxuXHJcbiAgICBwdWJsaWMgbGFiZWxNYW5hZ2VyOiBMYWJlbE1hbmFnZXJcclxuXHJcbiAgICBwdWJsaWMgJF9pZDJub2RlID0gbmV3IE1hcCgpXHJcbiAgICBwdWJsaWMgJF9lbmRzMmxpbmsgPSBuZXcgTWFwMigpXHJcbiAgICBwdWJsaWMgJF9zb3VyY2VJZDJsaW5rczogTWFwPHN0cmluZywgU2V0PExpbms+PiA9IG5ldyBNYXAoKVxyXG4gICAgcHVibGljICRfdGFyZ2V0SWQybGlua3M6IE1hcDxzdHJpbmcsIFNldDxMaW5rPj4gPSBuZXcgTWFwKClcclxuICAgIHB1YmxpYyAkX2NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnRcclxuICAgIHB1YmxpYyAkX3JlbmRlcmVyOiBSZW5kZXJlclxyXG4gICAgcHVibGljICRfY29uZmlncyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGVmYXVsdENvbmZpZ3MpKSAvLyBOT1RFOiBkZWVwIGNvcHkgY29uZmlnc1xyXG4gICAgcHVibGljICRfaW50ZXJhY3Rpb246IEludGVyYWN0aW9uTWFuYWdlclxyXG5cclxuICAgIHB1YmxpYyAkX3RyYW5zZm9ybTogaW50ZXJmYWNlcy5UcmFuc2Zvcm0gPSB7IHg6IDAsIHk6IDAsIGs6IDEgfVxyXG5cclxuICAgIHB1YmxpYyAkX2xhenlVcGRhdGUgPSBmYWxzZSAvLyBmbGFnIHRvIGNvbnRyb2wgbGF6eSB1cGRhdGVcclxuXHJcbiAgICBwcml2YXRlICRfZGF0YTogaW50ZXJmYWNlcy5Ob2RlTGlua0RhdGEgPSB7IG5vZGVzOiBbXSwgbGlua3M6IFtdIH1cclxuXHJcbiAgICBwcml2YXRlICRfbW9kaWZpZWRMaW5rQ291bnQgPSAwIC8vIHJlY29yZCBtb2RpZmllZCBsaW5rIG51bSB0byBjb250cm9sIGxhenkgdXBkYXRlXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gY3JlYXRlIE5ldFYgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIGNvbmZpZ3MgY29uZmlndXJhdGlvbnMgb2YgTmV0ViwgbXVzdCBpbmNsdWRlIGEgYGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnRgIHRlcm1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZ3M6IGFueSkge1xyXG4gICAgICAgIGlmICghKCdjb250YWluZXInIGluIGNvbmZpZ3MpIHx8IGNvbmZpZ3MuY29udGFpbmVyLnRhZ05hbWUgIT09ICdESVYnKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdDb250YWluZXIgc2hvdWxkIGJlIHNwZWNpZmllZCBhcyBhIGRpdiBlbGVtZW50IScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJF9jb250YWluZXIgPSBjb25maWdzLmNvbnRhaW5lclxyXG4gICAgICAgIC8vIG92ZXJyaWRlIGNvbmZpZ3NcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb25maWdzKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdjb250YWluZXInKSBjb250aW51ZSAvLyBOT1RFOiBleGNsdWRlIGNvbnRhaW5lciBpbiBjb25maWdzXHJcbiAgICAgICAgICAgIGlmIChjb25maWdzW2tleV0gPT09IE9iamVjdChjb25maWdzW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29uZmlnc1trZXldID0geyAuLi50aGlzLiRfY29uZmlnc1trZXldLCAuLi5jb25maWdzW2tleV0gfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvbmZpZ3Nba2V5XSA9IGNvbmZpZ3Nba2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSAvLyBUT0RPOiBjb25zaWRlciBub2RlIGVudmlyb21lbnQsIGRvY3VtZW50IG5vdCBkZWZpbmVkXHJcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB0aGlzLiRfY29uZmlncy53aWR0aCArICdweCdcclxuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy4kX2NvbmZpZ3MuaGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgU3RyaW5nKHRoaXMuJF9jb25maWdzLndpZHRoICogcGl4ZWxSYXRpbykpXHJcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgU3RyaW5nKHRoaXMuJF9jb25maWdzLmhlaWdodCAqIHBpeGVsUmF0aW8pKVxyXG4gICAgICAgIHRoaXMuJF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKVxyXG5cclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICBjYW52YXMsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLiRfY29uZmlncy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLiRfY29uZmlncy5oZWlnaHQsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy4kX2NvbmZpZ3MuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBub2RlTGltaXQ6IHRoaXMuJF9jb25maWdzLm5vZGVMaW1pdCxcclxuICAgICAgICAgICAgbGlua0xpbWl0OiB0aGlzLiRfY29uZmlncy5saW5rTGltaXRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmxhYmVsTWFuYWdlciA9IG5ldyBMYWJlbE1hbmFnZXIodGhpcylcclxuXHJcbiAgICAgICAgdGhpcy4kX2ludGVyYWN0aW9uID0gbmV3IEludGVyYWN0aW9uTWFuYWdlcih0aGlzKVxyXG4gICAgICAgIGlmICh0aGlzLiRfY29uZmlncy5lbmFibGVQYW5ab29tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbi5pbml0Wm9vbSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb24uaW5pdE1vdXNlKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldC9zZXQgY2FudmFzJ3MgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICogQHBhcmFtIGNvbG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IoY29sb3I/OiBpbnRlcmZhY2VzLkNvbG9yKSB7XHJcbiAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9jb25maWdzLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXHJcbiAgICAgICAgICAgIHRoaXMuJF9yZW5kZXJlci5zZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfY29uZmlncy5iYWNrZ3JvdW5kQ29sb3JcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgJF9hZGRNb2RpZmllZExpbmtDb3VudChuOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLiRfbW9kaWZpZWRMaW5rQ291bnQgKz0gblxyXG4gICAgICAgIGlmICh0aGlzLiRfbW9kaWZpZWRMaW5rQ291bnQgPiB0aGlzLiRfY29uZmlncy5sYXp5VXBkYXRlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9sYXp5VXBkYXRlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBkYXRhIGdldHRlciBzZXR0ZXJcclxuICAgICAqIEBwYXJhbSBub2RlTGlua0RhdGE/IHRoZSBub2RlLWxpbmstZGF0YSBvZiBhIGdyYXBoLCBwcm92aWRlZD9zZXR0ZXI6Z2V0dGVyO1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGF0YShub2RlTGlua0RhdGE/OiBpbnRlcmZhY2VzLk5vZGVMaW5rRGF0YSkge1xyXG4gICAgICAgIGlmIChub2RlTGlua0RhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kX2RhdGFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgb2xkIGRhdGFcclxuICAgICAgICAgICAgdGhpcy4kX2RhdGEgPSB7IC4uLnRoaXMuJF9kYXRhLCAuLi5ub2RlTGlua0RhdGEgfVxyXG4gICAgICAgICAgICB0aGlzLiRfaWQybm9kZSA9IG5ldyBNYXAoKVxyXG4gICAgICAgICAgICB0aGlzLiRfZW5kczJsaW5rID0gbmV3IE1hcDIoKVxyXG4gICAgICAgICAgICB0aGlzLiRfc291cmNlSWQybGlua3MgPSBuZXcgTWFwKClcclxuICAgICAgICAgICAgdGhpcy4kX3RhcmdldElkMmxpbmtzID0gbmV3IE1hcCgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLiRfcmVuZGVyZXIuY2xlYXJEYXRhKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZXModGhpcy4kX2RhdGEubm9kZXMpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkTGlua3ModGhpcy4kX2RhdGEubGlua3MpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXRpYWxpemUgYW5kIGFkZCBhIG5vZGVcclxuICAgICAqIEBwYXJhbSBub2RlRGF0YSB0aGUgZGF0YSBvZiBhIG5vZGUsIGluY2x1ZGUgaWQsIHN0eWxlcy4uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTm9kZShub2RlRGF0YTogaW50ZXJmYWNlcy5Ob2RlRGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZE5vZGVzKFtub2RlRGF0YV0pWzBdXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGEgbGlua1xyXG4gICAgICogQHBhcmFtIGxpbmtEYXRhIHRoZSBkYXRhIG9mIGEgbGluaywgaW5jbHVkZSBzb3VyY2UsIHRhcmdldCwgYW5kIHN0eWxlcy4uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTGluayhsaW5rRGF0YTogaW50ZXJmYWNlcy5MaW5rRGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZExpbmtzKFtsaW5rRGF0YV0pWzBdXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGFuIGFycmF5IG9mIG5vZGVzLlxyXG4gICAgICogQHBhcmFtIHtpbnRlcmZhY2VzLk5vZGVEYXRhW119IG5vZGVzRGF0YTogYSBkYXRhIGFycmF5IG9mIG5vZGVzIHRvYmUgYWRkZWRcclxuICAgICAqIEBtZW1iZXJvZiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGROb2Rlcyhub2Rlc0RhdGE6IGludGVyZmFjZXMuTm9kZURhdGFbXSkge1xyXG4gICAgICAgIGNvbnN0IG5ld05vZGVzID0gbm9kZXNEYXRhLm1hcCgobm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgbm9kZURhdGEuaWQgPSBub2RlRGF0YS5pZC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCBub2RlRGF0YSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuYWRkTm9kZXMobmV3Tm9kZXMpXHJcbiAgICAgICAgcmV0dXJuIG5ld05vZGVzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBhbmQgYWRkIGFuIGFycmF5IG9mIGxpbmtzLlxyXG4gICAgICogQHBhcmFtIHtpbnRlcmZhY2VzLkxpbmtEYXRhW119IGxpbmtzRGF0YTogYSBkYXRhIGFycmF5IG9mIGxpbmtzIHRvYmUgYWRkZWRcclxuICAgICAqIEBtZW1iZXJvZiBOZXRWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRMaW5rcyhsaW5rc0RhdGE6IGludGVyZmFjZXMuTGlua0RhdGFbXSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0xpbmtzID0gbGlua3NEYXRhLm1hcCgobGlua0RhdGEpID0+IHtcclxuICAgICAgICAgICAgbGlua0RhdGEuc291cmNlID0gbGlua0RhdGEuc291cmNlLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgbGlua0RhdGEudGFyZ2V0ID0gbGlua0RhdGEudGFyZ2V0LnRvU3RyaW5nKClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBuZXcgTGluayh0aGlzLCBsaW5rRGF0YSlcclxuICAgICAgICAgICAgcmV0dXJuIGxpbmtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHRoaXMuJF9yZW5kZXJlci5hZGRMaW5rcyhuZXdMaW5rcylcclxuICAgICAgICB0aGlzLiRfcmVuZGVyZXIuYWRkTGlua3MoWy4uLnRoaXMuJF9lbmRzMmxpbmsudmFsdWVzKCldKSAvLyBOT1RFOiBwcmVzZXJ2ZSBsaW5rIG9yZGVyLCBub3QgZWxlZ2FudFxyXG4gICAgICAgIHJldHVybiBuZXdMaW5rc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGdldCBhIE5vZGUgb2JqZWN0IGZyb20gdGhlIGlkMm5vZGUgTWFwIGRhdGEgc3RydWN0dXJlXHJcbiAgICAgKiBAcGFyYW0gaWQgbm9kZSBpZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Tm9kZUJ5SWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRfaWQybm9kZS5nZXQoaWQpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZ2V0IGEgTGluayBvYmplY3QgZnJvbSB0aGUgZW5kczJsaW5rIE1hcDIgZGF0YSBzdHJ1Y3R1cmVcclxuICAgICAqIEBwYXJhbSBlbmRJZDEgb25lIGVuZCBpZCBvZiB0aGUgbGluayAoc291cmNlIG9yIHRhcmdldClcclxuICAgICAqIEBwYXJhbSBlbmRJZDIgYW5vdGhlciBlbmQgaWQgb2YgdGhlIGxpbmsgKHNvdXJjZSBvciB0YXJnZXQpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRMaW5rQnlFbmRzKGVuZElkMTogc3RyaW5nLCBlbmRJZDI6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRfZW5kczJsaW5rLmdldChbZW5kSWQxLCBlbmRJZDJdKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIGdldCBhbGwgbm9kZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vZGVzKCkge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy4kX2lkMm5vZGUudmFsdWVzKCldXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZ2V0IGFsbCBsaW5rc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlua3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLiRfZW5kczJsaW5rLnZhbHVlcygpXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIHdpcGUgYWxsIHRoZSBkYXRhIGluIHRoZSBpbnN0YW5jZVxyXG4gICAgICogQG1lbWJlcm9mIE5ldFZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdpcGUoKSB7XHJcbiAgICAgICAgdGhpcy4kX2RhdGEgPSB1bmRlZmluZWRcclxuICAgICAgICB0aGlzLiRfaWQybm9kZSA9IG5ldyBNYXAoKVxyXG4gICAgICAgIHRoaXMuJF9lbmRzMmxpbmsgPSBuZXcgTWFwMigpXHJcbiAgICAgICAgdGhpcy4kX3NvdXJjZUlkMmxpbmtzID0gbmV3IE1hcCgpXHJcbiAgICAgICAgdGhpcy4kX3RhcmdldElkMmxpbmtzID0gbmV3IE1hcCgpXHJcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyLmNsZWFyRGF0YSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gcmV0dXJuIGJ1aWxkLWluIGRhdGFzZXQgYWNjb3JkaW5nIHRvIG5hbWVcclxuICAgICAqIEBwYXJhbSBuYW1lIGRhdGFzZXQgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZERhdGFzZXQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgaW4gZGF0YXNldCkgcmV0dXJuIGRhdGFzZXRbbmFtZV1cclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgTmV0ViBkb2VzIG5vdCBoYXZlIGJ1aWxkLWluIGRhdGFzZXQ6ICR7bmFtZX1gKVxyXG4gICAgICAgIHJldHVybiB7IG5vZGVzOiBbXSwgbGlua3M6IFtdIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdpdmVuIHBvc2l0aW9uLCByZXR1cm4gZWxlbWVudCBvbiB0aGlzIHBpeGVsIGlmIGV4aXN0c1xyXG4gICAgICogQHBhcmFtIHggeCBwb3NcclxuICAgICAqIEBwYXJhbSB5IHkgcG9zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRFbGVtZW50QnlQb3NpdGlvbihcclxuICAgICAgICBwb3NpdGlvbjogaW50ZXJmYWNlcy5Qb3NpdGlvblxyXG4gICAgKTogeyB0eXBlOiAnbm9kZScgfCAnbGluayc7IGVsZW1lbnQ6IE5vZGUgfCBMaW5rIH0gfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy4kX3JlbmRlcmVyLmdldElkQnlQb3NpdGlvbihwb3NpdGlvbilcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGVCeUlkKGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogbm9kZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGlkKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IHRoaXMuZ2V0TGlua0J5RW5kcyhpZFswXSwgaWRbMV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBsaW5rXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gZHJhdyBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICBpZiAodGhpcy4kX2xhenlVcGRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy4kX3JlbmRlcmVyLm5vZGVNYW5hZ2VyLnJlZnJlc2hQb3NpdGlvbihbLi4udGhpcy4kX2lkMm5vZGUudmFsdWVzKCldKVxyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogbWF5YmUgbmVlZCBtb3JlIGVmZmljaWVudCBhbmQgcmVsaWFibGUgd2F5IHRvIHN0b3JlIGFuZCBnZXQgYWxsIGxpbmtzXHJcbiAgICAgICAgICAgIHRoaXMuJF9yZW5kZXJlci5saW5rTWFuYWdlci5yZWZyZXNoUG9zaXRpb24oWy4uLnRoaXMuJF9lbmRzMmxpbmsudmFsdWVzKCldKVxyXG4gICAgICAgICAgICB0aGlzLiRfbGF6eVVwZGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuJF9tb2RpZmllZExpbmtDb3VudCA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kX3JlbmRlcmVyLmRyYXcoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcGFuIG9uIGNhbnZhcyB0byBnZXQgZ2l2ZW4gbm9kZSBjZW50ZXJlZFxyXG4gICAgICogQHBhcmFtIG5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNlbnRlck9uKG5vZGU6IE5vZGUpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBub2RlLnBvc2l0aW9uKClcclxuICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb24uY2VudGVyUG9zaXRpb24ocG9zKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHJvZ21hdGljYWxseSBwYW5cclxuICAgICAqIEBwYXJhbSB4XHJcbiAgICAgKiBAcGFyYW0geVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGFuQnkoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLiRfaW50ZXJhY3Rpb24ucGFuQnkoeCwgeSlcclxuICAgICAgICB0aGlzLmRyYXcoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHJvZ21hdGljYWxseSB6b29tXHJcbiAgICAgKiBAcGFyYW0gZmFjdG9yIHpvb20gZmFjdG9yXHJcbiAgICAgKiBAcGFyYW0gY2VudGVyIG9wdGlvbmFsLCB6b29tIGNlbnRlciBwb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgem9vbUJ5KGZhY3RvcjogbnVtYmVyLCBjZW50ZXI/OiBQb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuJF9pbnRlcmFjdGlvbi56b29tQnkoZmFjdG9yLCBjZW50ZXIpXHJcbiAgICAgICAgdGhpcy5kcmF3KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldC9zZXQgbmV0didzIHRyYW5zZm9ybVxyXG4gICAgICogQHBhcmFtIHZhbHVlIG9wdGlvbmFsLCB0cmFuc2Zvcm0gdG8gc2V0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU/OiBpbnRlcmZhY2VzLlRyYW5zZm9ybSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRfdHJhbnNmb3JtXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJF90cmFuc2Zvcm0gPSB2YWx1ZVxyXG4gICAgICAgIHRoaXMuJF9yZW5kZXJlci5zZXRUcmFuc2Zvcm0odGhpcy4kX3RyYW5zZm9ybSlcclxuICAgICAgICB0aGlzLmxhYmVsTWFuYWdlci5zZXRUcmFuc2Zvcm0odGhpcy4kX3RyYW5zZm9ybSlcclxuICAgICAgICB0aGlzLmRyYXcoKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBOZXRWIH1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBoYW5kbGUgYWxsIGludGVyYWN0aW9uIGluIE5ldFZcclxuICovXHJcblxyXG5pbXBvcnQgeyBOZXRWIH0gZnJvbSAnc3JjJ1xyXG5pbXBvcnQgeyBQb3NpdGlvbiwgVHJhbnNmb3JtIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGlvbk1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBuZXR2OiBOZXRWXHJcbiAgICBwcml2YXRlIGlzTW91c2VEb3duID0gZmFsc2VcclxuICAgIHByaXZhdGUgaXNNb3VzZU1vdmUgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBtb3VzZURvd25FbGVtZW50XHJcbiAgICBwcml2YXRlIG1vdXNlRG93bkVsZW1lbnRPcmlnaW5Qb3M6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSAvLyBOT1RFOiByZWNvcmQgcG9zLCBvbmx5IHN1cHBvcnQgbm9kZSdzIGRyYWdcclxuXHJcbiAgICBwcml2YXRlIG1vdXNlRG93blBvczogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XHJcbiAgICBwcml2YXRlIGRyYWdTdGFydFRyYW5zZm9ybTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgazogbnVtYmVyIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmV0djogTmV0Vikge1xyXG4gICAgICAgIHRoaXMubmV0diA9IG5ldHZcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHByb2dtYXRpY2FsbHkgcGFuXHJcbiAgICAgKiBAcGFyYW0geFxyXG4gICAgICogQHBhcmFtIHlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhbkJ5KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgIG5ld1RyYW5zZm9ybS54ICs9IHhcclxuICAgICAgICBuZXdUcmFuc2Zvcm0ueSArPSB5XHJcbiAgICAgICAgdGhpcy5uZXR2LnRyYW5zZm9ybShuZXdUcmFuc2Zvcm0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwcm9nbWF0aWNhbGx5IHpvb21cclxuICAgICAqIEBwYXJhbSBmYWN0b3Igem9vbSBmYWN0b3JcclxuICAgICAqIEBwYXJhbSBjZW50ZXIgb3B0aW9uYWwsIHpvb20gY2VudGVyIHBvc2l0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB6b29tQnkoZmFjdG9yOiBudW1iZXIsIGNlbnRlcj86IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgIGxldCBjZW50ZXJQb3MgPSBjZW50ZXJcclxuICAgICAgICBpZiAoIWNlbnRlclBvcykge1xyXG4gICAgICAgICAgICBjZW50ZXJQb3MgPSB7IHg6IHRoaXMubmV0di4kX2NvbmZpZ3Mud2lkdGggLyAyLCB5OiB0aGlzLm5ldHYuJF9jb25maWdzLmhlaWdodCAvIDIgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGNlbnRlclBvc1xyXG5cclxuICAgICAgICBuZXdUcmFuc2Zvcm0ueCA9ICgxIC0gZmFjdG9yKSAqIHggKyBmYWN0b3IgKiBuZXdUcmFuc2Zvcm0ueFxyXG4gICAgICAgIG5ld1RyYW5zZm9ybS55ID0gKDEgLSBmYWN0b3IpICogeSArIGZhY3RvciAqIG5ld1RyYW5zZm9ybS55XHJcblxyXG4gICAgICAgIG5ld1RyYW5zZm9ybS5rICo9IGZhY3RvclxyXG5cclxuICAgICAgICB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1vdmUgY3VycmVudCBwb3NpdGlvbiB0byBjZW50ZXIgb2YgY2FudmFzXHJcbiAgICAgKiBAcGFyYW0gcG9zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjZW50ZXJQb3NpdGlvbihwb3M6IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgIGNvbnN0IHggPSBwb3MueCAqIG5ld1RyYW5zZm9ybS5rICsgbmV3VHJhbnNmb3JtLnhcclxuICAgICAgICBjb25zdCB5ID0gcG9zLnkgKiBuZXdUcmFuc2Zvcm0uayArIG5ld1RyYW5zZm9ybS55XHJcbiAgICAgICAgY29uc3QgY2VudGVyID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLm5ldHYuJF9jb25maWdzLndpZHRoIC8gMixcclxuICAgICAgICAgICAgeTogdGhpcy5uZXR2LiRfY29uZmlncy5oZWlnaHQgLyAyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG5ld1RyYW5zZm9ybS54ICs9IGNlbnRlci54IC0geFxyXG4gICAgICAgIC8vIG5ld1RyYW5zZm9ybS55ICs9IGNlbnRlci55IC0geVxyXG4gICAgICAgIC8vIGludGVycG9sYXRpb25cclxuICAgICAgICBjb25zdCBzdGVwQ291bnQgPSAyMFxyXG4gICAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB7XHJcbiAgICAgICAgICAgIHg6IGNlbnRlci54IC0geCxcclxuICAgICAgICAgICAgeTogY2VudGVyLnkgLSB5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9yaWdpblRyYW5zbGF0ZSA9IHtcclxuICAgICAgICAgICAgeDogbmV3VHJhbnNmb3JtLngsXHJcbiAgICAgICAgICAgIHk6IG5ld1RyYW5zZm9ybS55XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlYXNlID0gKHgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHggKiB4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RlcHMgPSAxXHJcblxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnggPSBvcmlnaW5UcmFuc2xhdGUueCArIGRpZmZlcmVuY2UueCAqIGVhc2Uoc3RlcHMgLyBzdGVwQ291bnQpXHJcbiAgICAgICAgICAgIG5ld1RyYW5zZm9ybS55ID0gb3JpZ2luVHJhbnNsYXRlLnkgKyBkaWZmZXJlbmNlLnkgKiBlYXNlKHN0ZXBzIC8gc3RlcENvdW50KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5uZXR2LnRyYW5zZm9ybShuZXdUcmFuc2Zvcm0pXHJcblxyXG4gICAgICAgICAgICBzdGVwcyArPSAxXHJcbiAgICAgICAgICAgIGlmIChzdGVwcyA+IHN0ZXBDb3VudCkgY2xlYXJJbnRlcnZhbChhbmltYXRpb24pXHJcbiAgICAgICAgfSwgNTAwIC8gc3RlcENvdW50KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaW5pdCB6b29tJnBhbiBpbnRlcmFjdGlvblxyXG4gICAgICogY3VycmVudGx5IG5vIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0Wm9vbSgpIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLm5ldHYuJF9jb250YWluZXIucXVlcnlTZWxlY3RvcignY2FudmFzJylcclxuICAgICAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoZXZ0OiBNb3VzZVdoZWVsRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0geyAuLi50aGlzLm5ldHYuJF90cmFuc2Zvcm0gfVxyXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZ0Lm9mZnNldFggfHwgZXZ0LnBhZ2VYIC0gY2FudmFzLm9mZnNldExlZnRcclxuICAgICAgICAgICAgY29uc3QgeSA9IGV2dC5vZmZzZXRZIHx8IGV2dC5wYWdlWSAtIGNhbnZhcy5vZmZzZXRUb3BcclxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBldnQuZGVsdGFZID8gZXZ0LmRlbHRhWSAvIDQwIDogZXZ0LmRldGFpbCA/IC1ldnQuZGV0YWlsIDogMFxyXG4gICAgICAgICAgICBpZiAoZGVsdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGsgPSBNYXRoLnBvdygxLjEsIGRlbHRhKVxyXG4gICAgICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnggPSAoMSAtIGspICogeCArIGsgKiBuZXdUcmFuc2Zvcm0ueFxyXG4gICAgICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnkgPSAoMSAtIGspICogeSArIGsgKiBuZXdUcmFuc2Zvcm0ueVxyXG5cclxuICAgICAgICAgICAgICAgIG5ld1RyYW5zZm9ybS5rICo9IGtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ldHYudHJhbnNmb3JtKG5ld1RyYW5zZm9ybSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIGhhbmRsZVNjcm9sbCwgZmFsc2UpXHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBoYW5kbGVTY3JvbGwsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0dXAgY2xpY2sgdXRpbGl0eVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdE1vdXNlKCkge1xyXG4gICAgICAgIGxldCBuZXdUcmFuc2Zvcm0gPSB7IC4uLnRoaXMubmV0di4kX3RyYW5zZm9ybSB9XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5uZXR2LiRfY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpXHJcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBuZXdUcmFuc2Zvcm0gPSB7IC4uLnRoaXMubmV0di4kX3RyYW5zZm9ybSB9XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldnQub2Zmc2V0WCB8fCBldnQucGFnZVggLSBjYW52YXMub2Zmc2V0TGVmdFxyXG4gICAgICAgICAgICBjb25zdCB5ID0gZXZ0Lm9mZnNldFkgfHwgZXZ0LnBhZ2VZIC0gY2FudmFzLm9mZnNldFRvcFxyXG4gICAgICAgICAgICBjb25zdCB5SW52ID0gdGhpcy5uZXR2LiRfY29uZmlncy5oZWlnaHQgLSB5XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzTW91c2VEb3duID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93blBvcyA9IHsgeCwgeSB9XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0VHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShuZXdUcmFuc2Zvcm0pKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50ID0gdGhpcy5uZXR2LmdldEVsZW1lbnRCeVBvc2l0aW9uKHtcclxuICAgICAgICAgICAgICAgIHgsXHJcbiAgICAgICAgICAgICAgICB5OiB5SW52XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vdXNlRG93bkVsZW1lbnQ/LmVsZW1lbnQucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIC8vIHJlY29yZCBvcmdpbiBwb3NpdGlvbiBmb3IgZHJhZ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50T3JpZ2luUG9zID0geyAuLi50aGlzLm1vdXNlRG93bkVsZW1lbnQuZWxlbWVudC5wb3NpdGlvbigpIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZ0Lm9mZnNldFggfHwgZXZ0LnBhZ2VYIC0gY2FudmFzLm9mZnNldExlZnRcclxuICAgICAgICAgICAgY29uc3QgeSA9IGV2dC5vZmZzZXRZIHx8IGV2dC5wYWdlWSAtIGNhbnZhcy5vZmZzZXRUb3BcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW91c2VEb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW91c2VNb3ZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tb3VzZURvd25FbGVtZW50IHx8ICF0aGlzLm1vdXNlRG93bkVsZW1lbnQuZWxlbWVudC5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhbiwgd2hlbiBub3QgZHJhZ2dpbmcgbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RyYW5zZm9ybS54ID0gdGhpcy5kcmFnU3RhcnRUcmFuc2Zvcm0ueCArIHggLSB0aGlzLm1vdXNlRG93blBvcy54XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VHJhbnNmb3JtLnkgPSB0aGlzLmRyYWdTdGFydFRyYW5zZm9ybS55ICsgeSAtIHRoaXMubW91c2VEb3duUG9zLnlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXR2LnRyYW5zZm9ybShuZXdUcmFuc2Zvcm0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRyYWcgbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudC5lbGVtZW50LnBvc2l0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudE9yaWdpblBvcy54ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh4IC0gdGhpcy5tb3VzZURvd25Qb3MueCkgLyBuZXdUcmFuc2Zvcm0uayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudE9yaWdpblBvcy55ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh5IC0gdGhpcy5tb3VzZURvd25Qb3MueSkgLyBuZXdUcmFuc2Zvcm0ua1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXR2LmRyYXcoKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gZHJhZ2dpbmcsIGR5bmFtaWMgY2hhbmdlIGxhYmVsJ3MgcG9zaXRpb24uIGJlY2F1c2Ugb25seSBvcGVyYXRlIG9uIHNpbmdsZSBlbGVtZW50LCBpdCdzIG9rIHRvIHJlbW92ZSBhbmQgcmVjcmVhdGVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQuZWxlbWVudC5zaG93TGFiZWwoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25FbGVtZW50LmVsZW1lbnQuc2hvd0xhYmVsKHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5SW52ID0gdGhpcy5uZXR2LiRfY29uZmlncy5oZWlnaHQgLSB5XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5uZXR2LmdldEVsZW1lbnRCeVBvc2l0aW9uKHsgeCwgeTogeUludiB9KVxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQ/LmVsZW1lbnQuJF9ob3ZlckNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbGVtZW50LiRfaG92ZXJDYWxsYmFjayhlbGVtZW50LmVsZW1lbnQgYXMgYW55KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC8vIGN1cnJlbnRseSBub3Qgc3VwcG9ydCBob3ZlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNNb3VzZU1vdmUgJiYgdGhpcy5tb3VzZURvd25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGlja1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW91c2VEb3duRWxlbWVudD8uZWxlbWVudC4kX2NsaWNrQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkVsZW1lbnQuZWxlbWVudC4kX2NsaWNrQ2FsbGJhY2soXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudC5lbGVtZW50IGFzIGFueVxyXG4gICAgICAgICAgICAgICAgICAgICkgLy8gVE9ETzogbm90IGVsZWdhbnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzTW91c2VEb3duID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc01vdXNlTW92ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duRWxlbWVudCA9IHVuZGVmaW5lZFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZU1vdXNlRG93bilcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKVxyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2VVcClcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIGdyYXBoIGxhYmVsIHJlbGF0ZWQgY2xhc3Mgb3IgbWV0aG9kXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTmV0ViB9IGZyb20gJ3NyYydcclxuaW1wb3J0IE5vZGUgZnJvbSAnc3JjL25vZGUnXHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcblxyXG5leHBvcnQgY2xhc3MgTGFiZWxNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgJF9jb3JlOiBOZXRWXHJcbiAgICBwcml2YXRlICRfc3ZnOiBTVkdFbGVtZW50XHJcbiAgICBwcml2YXRlICRfb2Zmc2V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cclxuICAgIHByaXZhdGUgJF9mb250U2l6ZTogbnVtYmVyXHJcbiAgICBwcml2YXRlICRfc3Ryb2tlV2lkdGg6IG51bWJlclxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3JlOiBOZXRWKSB7XHJcbiAgICAgICAgdGhpcy4kX2NvcmUgPSBjb3JlXHJcblxyXG4gICAgICAgIHRoaXMuJF9zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpIGFzIFNWR0VsZW1lbnRcclxuICAgICAgICBjb3JlLiRfY29udGFpbmVyLnByZXBlbmQodGhpcy4kX3N2ZylcclxuICAgICAgICB0aGlzLiRfc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBjb3JlLiRfY29uZmlncy53aWR0aClcclxuICAgICAgICB0aGlzLiRfc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgY29yZS4kX2NvbmZpZ3MuaGVpZ2h0KVxyXG4gICAgICAgIGNvcmUuJF9jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXHJcbiAgICAgICAgY29yZS4kX2NvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXHJcbiAgICAgICAgY29yZS4kX2NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGNvcmUuJF9jb25maWdzLndpZHRoXHJcbiAgICAgICAgY29yZS4kX2NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBjb3JlLiRfY29uZmlncy5oZWlnaHRcclxuICAgICAgICB0aGlzLiRfc3ZnLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gICAgICAgIHRoaXMuJF9zdmcuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSdcclxuICAgICAgICB0aGlzLiRfc3ZnLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSdcclxuXHJcbiAgICAgICAgdGhpcy4kX29mZnNldCA9IHRoaXMuJF9jb3JlLiRfY29uZmlncy5sYWJlbC5vZmZzZXRcclxuICAgICAgICB0aGlzLiRfZm9udFNpemUgPSB0aGlzLiRfY29yZS4kX2NvbmZpZ3MubGFiZWwuZm9udFNpemVcclxuICAgICAgICB0aGlzLiRfc3Ryb2tlV2lkdGggPSB0aGlzLiRfY29yZS4kX2NvbmZpZ3MubGFiZWwuc3Ryb2tlV2lkdGhcclxuICAgICAgICB0aGlzLiRfc3ZnLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RoaXMuJF9vZmZzZXQueH0gJHt0aGlzLiRfb2Zmc2V0Lnl9KWApXHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zZXRBdHRyaWJ1dGUoJ2ZvbnQtc2l6ZScsIGAke3RoaXMuJF9mb250U2l6ZX1weGApXHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIGB3aGl0ZWApXHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIGAke3RoaXMuJF9zdHJva2VXaWR0aH1weGApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkcmF3IG5vZGUncyBsYWJlbFxyXG4gICAgICogQHBhcmFtIG5vZGUgbm9kZSB0byBhZGQgbGFiZWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRyYXdMYWJlbChub2RlOiBOb2RlKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gbm9kZS5wb3NpdGlvbigpXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IG5vZGUudGV4dCgpXHJcblxyXG4gICAgICAgIGlmICghdGV4dCkgcmV0dXJuXHJcblxyXG4gICAgICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd0ZXh0JylcclxuICAgICAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgbm9kZS5pZCgpKVxyXG4gICAgICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgneCcsIFN0cmluZyhwb3MueCkpXHJcbiAgICAgICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKCd5JywgU3RyaW5nKHBvcy55KSlcclxuICAgICAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcclxuICAgICAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKVxyXG4gICAgICAgIHRleHRFbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZScgLy8gTk9URTogcHJldmVudCB1bmV4cGVjdGVkIHNlbGVjdGlvbiB3aGVuIGRyYWdnaW5nIG5vZGUoZGVsZXRlIGFuZCByZWNyZWF0ZSB0ZXh0RWxlbWVudClcclxuICAgICAgICB0ZXh0RWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0XHJcblxyXG4gICAgICAgIHRoaXMuJF9zdmcucHJlcGVuZCh0ZXh0RWxlbWVudCkgLy8gTk9URTogbWFrZSBsYXN0IGFkZGVkIHRleHQgYXQgdG9wXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW1vdmUgbm9kZSdzIGxhYmVsXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBub2RlIHRvIGRlbGV0ZSBsYWJlbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlTGFiZWwobm9kZTogTm9kZSkge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLiRfc3ZnLmdldEVsZW1lbnRCeUlkKG5vZGUuaWQoKSk/LnJlbW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgdmlld3BvcnQgdHJhbnNmb3JtXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNmb3JtXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRUcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcclxuICAgICAgICB0aGlzLiRfc3ZnLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICAgIGB0cmFuc2xhdGUoJHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9vZmZzZXQueCArXHJcbiAgICAgICAgICAgICAgICAoMSAtIHRyYW5zZm9ybS5rKSAqIC0odGhpcy4kX2NvcmUuJF9jb25maWdzLndpZHRoIC8gMikgK1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLnhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICB0aGlzLiRfb2Zmc2V0LnkgK1xyXG4gICAgICAgICAgICAgICAgICgxIC0gdHJhbnNmb3JtLmspICogLSh0aGlzLiRfY29yZS4kX2NvbmZpZ3MuaGVpZ2h0IC8gMikgK1xyXG4gICAgICAgICAgICAgICAgIHRyYW5zZm9ybS55XHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgc2NhbGUoJHt0cmFuc2Zvcm0ua30pYFxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLiRfc3ZnLnNldEF0dHJpYnV0ZSgnZm9udC1zaXplJywgYCR7dGhpcy4kX2ZvbnRTaXplIC8gdHJhbnNmb3JtLmt9cHhgKVxyXG4gICAgICAgIHRoaXMuJF9zdmcuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCBgJHt0aGlzLiRfc3Ryb2tlV2lkdGggLyB0cmFuc2Zvcm0ua31weGApXHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlIGEgTGluayBjbGFzcy5cclxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL2lzLnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0IE5vZGUgZnJvbSAnLi9ub2RlJ1xyXG5pbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgTmV0ViB9IGZyb20gJy4vaW5kZXgnXHJcblxyXG5jbGFzcyBMaW5rIHtcclxuICAgIHB1YmxpYyAkX2NsaWNrQ2FsbGJhY2s6IChsaW5rOiBMaW5rKSA9PiB2b2lkXHJcbiAgICBwdWJsaWMgJF9ob3ZlckNhbGxiYWNrOiAobGluazogTGluaykgPT4gdm9pZFxyXG5cclxuICAgIHByaXZhdGUgJF9jb3JlOiBOZXRWXHJcbiAgICBwcml2YXRlICRfc291cmNlOiBOb2RlXHJcbiAgICBwcml2YXRlICRfdGFyZ2V0OiBOb2RlXHJcbiAgICBwcml2YXRlICRfc3Ryb2tlV2lkdGg6IG51bWJlclxyXG4gICAgcHJpdmF0ZSAkX3N0cm9rZUNvbG9yOiBpbnRlcmZhY2VzLkNvbG9yXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvcmUsIGxpbmtEYXRhOiBpbnRlcmZhY2VzLkxpbmtEYXRhKSB7XHJcbiAgICAgICAgdGhpcy4kX2NvcmUgPSBjb3JlXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbmZpZ3MgPSB0aGlzLiRfY29yZS4kX2NvbmZpZ3NcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogZGVmYXVsdENvbmZpZ3MubGluay5zdHJva2VXaWR0aCxcclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBkZWZhdWx0Q29uZmlncy5saW5rLnN0cm9rZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tDYWxsYmFjazogZGVmYXVsdENvbmZpZ3MubGluay5jbGlja0NhbGxiYWNrLFxyXG4gICAgICAgICAgICAgICAgaG92ZXJDYWxsYmFjazogZGVmYXVsdENvbmZpZ3MubGluay5ob3ZlckNhbGxiYWNrXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC4uLmxpbmtEYXRhXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzb3VyY2VOb2RlID0gdGhpcy4kX2NvcmUuZ2V0Tm9kZUJ5SWQoZGF0YS5zb3VyY2UpXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMuJF9jb3JlLmdldE5vZGVCeUlkKGRhdGEudGFyZ2V0KVxyXG4gICAgICAgIHRoaXMuc291cmNlVGFyZ2V0KHtcclxuICAgICAgICAgICAgc291cmNlOiBzb3VyY2VOb2RlLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldE5vZGVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLiRfc3Ryb2tlV2lkdGggPSBkYXRhLnN0cm9rZVdpZHRoXHJcbiAgICAgICAgdGhpcy4kX3N0cm9rZUNvbG9yID0gZGF0YS5zdHJva2VDb2xvclxyXG5cclxuICAgICAgICB0aGlzLnNldENsaWNrQ2FsbGJhY2soZGF0YS5jbGlja0NhbGxiYWNrKVxyXG4gICAgICAgIHRoaXMuc2V0SG92ZXJDYWxsYmFjayhkYXRhLmhvdmVyQ2FsbGJhY2spXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXR0ZXIvc2V0dGVyIG9mIHRoZSBzb3VyY2VcclxuICAgICAqIEBwYXJhbSB7Tm9kZX0gW25vZGVdXHJcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gYSBzb3VyY2UgTm9kZSBPYmplY3RcclxuICAgICAqIEBtZW1iZXJvZiBMaW5rXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzb3VyY2Uobm9kZT86IE5vZGUpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBzZXR0ZXJcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VUYXJnZXQoe1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBub2RlLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLiRfdGFyZ2V0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfc291cmNlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXR0ZXIvc2V0dGVyIG9mIHRoZSB0YXJnZXRcclxuICAgICAqIEBwYXJhbSB7Tm9kZX0gW25vZGVdXHJcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gYSB0YXJnZXQgTm9kZSBPYmplY3RcclxuICAgICAqIEBtZW1iZXJvZiBMaW5rXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0YXJnZXQobm9kZT86IE5vZGUpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBzZXR0ZXJcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VUYXJnZXQoe1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLiRfc291cmNlLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBub2RlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfdGFyZ2V0XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXR0ZXIvc2V0dGVyIG9mIHNvdXJjZSBhbmQgdGFyZ2V0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzb3VyY2VUYXJnZXRPYmp9IFt7c291cmNlOiBOb2RlLCB0YXJnZXQ6IE5vZGV9XVxyXG4gICAgICogQHJldHVybnMgT2JqZWN0IHtzb3VyY2U6IE5vZGUsIHRhcmdldDogTm9kZX1cclxuICAgICAqIEBtZW1iZXJvZiBMaW5rXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzb3VyY2VUYXJnZXQoc291cmNlVGFyZ2V0T2JqPzogeyBzb3VyY2U6IE5vZGU7IHRhcmdldDogTm9kZSB9KSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZFNvdXJjZTogTm9kZSA9IHRoaXMuJF9zb3VyY2VcclxuICAgICAgICAgICAgY29uc3Qgb2xkVGFyZ2V0OiBOb2RlID0gdGhpcy4kX3RhcmdldFxyXG4gICAgICAgICAgICBjb25zdCBuZXdTb3VyY2UgPSBzb3VyY2VUYXJnZXRPYmouc291cmNlXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RhcmdldCA9IHNvdXJjZVRhcmdldE9iai50YXJnZXRcclxuICAgICAgICAgICAgY29uc3QgbmV3U291cmNlSWQgPSBuZXdTb3VyY2UuaWQoKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdUYXJnZXRJZCA9IG5ld1RhcmdldC5pZCgpXHJcblxyXG4gICAgICAgICAgICBpZiAobmV3U291cmNlID09PSBuZXdUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVycm9yOiBzZWxmIGxvb3BcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2VsZiBsb29wICgke25ld1NvdXJjZUlkfSA8PT4gJHtuZXdUYXJnZXRJZH0pIGlzIG5vdCBhbGxvd2VkLmApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX2VuZHMybGluay5oYXMoW25ld1NvdXJjZUlkLCBuZXdUYXJnZXRJZF0pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlcnJvcjogbXVsdGlwbGUgbGlua1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBsaW5rICgke25ld1NvdXJjZUlkfSA8PT4gJHtuZXdUYXJnZXRJZH0pIGlzIG5vdCBhbGxvd2QuYClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG9sZFNvdXJjZSAmJiBvbGRUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBvbGQgTWFwXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRfY29yZS4kX2VuZHMybGluay5kZWxldGUoW29sZFNvdXJjZS5pZCgpLCBvbGRUYXJnZXQuaWQoKV0pXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5nZXQob2xkU291cmNlLmlkKCkpPy5kZWxldGUodGhpcylcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3MuZ2V0KG9sZFRhcmdldC5pZCgpKT8uZGVsZXRlKHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuJF9zb3VyY2UgPSBuZXdTb3VyY2VcclxuICAgICAgICAgICAgdGhpcy4kX3RhcmdldCA9IG5ld1RhcmdldFxyXG4gICAgICAgICAgICB0aGlzLiRfY29yZS4kX2VuZHMybGluay5zZXQoW25ld1NvdXJjZUlkLCBuZXdUYXJnZXRJZF0sIHRoaXMpXHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuaGFzKG5ld1NvdXJjZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5zZXQobmV3U291cmNlSWQsIG5ldyBTZXQoW3RoaXNdKSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfc291cmNlSWQybGlua3MuZ2V0KG5ld1NvdXJjZUlkKS5hZGQodGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3MuaGFzKG5ld1RhcmdldElkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5zZXQobmV3VGFyZ2V0SWQsIG5ldyBTZXQoW3RoaXNdKSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfdGFyZ2V0SWQybGlua3MuZ2V0KG5ld1RhcmdldElkKS5hZGQodGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzb3VyY2U6IHRoaXMuJF9zb3VyY2UsXHJcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy4kX3RhcmdldFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgc3Ryb2tlIHdpZHRoIG9mIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdHJva2VXaWR0aCh2YWx1ZT86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9zdHJva2VXaWR0aCA9IHZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubGlua01hbmFnZXIuY2hhbmdlQXR0cmlidXRlKHRoaXMsICdzdHJva2VXaWR0aCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfc3Ryb2tlV2lkdGhcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgc3Ryb2tlIGNvbG9yIG9mIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIHtDb2xvcn0gW3ZhbHVlXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3Ryb2tlQ29sb3IodmFsdWU/OiBpbnRlcmZhY2VzLkNvbG9yKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy4kX3N0cm9rZUNvbG9yID0gdmFsdWVcclxuICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9yZW5kZXJlci5saW5rTWFuYWdlci5jaGFuZ2VBdHRyaWJ1dGUodGhpcywgJ3N0cm9rZUNvbG9yJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9zdHJva2VDb2xvclxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IGhvdmVyIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgaG92ZXIgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXRIb3ZlckNhbGxiYWNrKGNhbGxiYWNrOiAobGluazogTGluaykgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuJF9ob3ZlckNhbGxiYWNrID0gY2FsbGJhY2tcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBjbGljayBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIGNsaWNrIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0Q2xpY2tDYWxsYmFjayhjYWxsYmFjazogKGxpbms6IExpbmspID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLiRfY2xpY2tDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgSmlhY2hlbmcgUGFuIDxqYWNraWVhbnhpc0BnbWFpbC5jb20+XHJcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlIGEgTm9kZSBjbGFzcy5cclxuICogQGRlcGVuZGVuY2VzIGludGVyZmFjZXMudHMsIHV0aWxzL2lzLnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0ICogYXMgaW50ZXJmYWNlcyBmcm9tICcuL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IGlzVmFsaWRJZCB9IGZyb20gJy4vdXRpbHMvaXMnXHJcbmltcG9ydCB7IE5ldFYgfSBmcm9tICcuL2luZGV4J1xyXG5pbXBvcnQgeyBMaW5rQXR0ciB9IGZyb20gJy4vcmVuZGVyZXIvaW50ZXJmYWNlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJ1xyXG5cclxuY2xhc3MgTm9kZSB7XHJcbiAgICBwdWJsaWMgJF9jbGlja0NhbGxiYWNrOiAobm9kZTogTm9kZSkgPT4gdm9pZFxyXG4gICAgcHVibGljICRfaG92ZXJDYWxsYmFjazogKG5vZGU6IE5vZGUpID0+IHZvaWRcclxuXHJcbiAgICBwcml2YXRlICRfY29yZTogTmV0VlxyXG4gICAgcHJpdmF0ZSAkX2lkOiBzdHJpbmdcclxuICAgIHByaXZhdGUgJF9wb3NpdGlvbiA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH1cclxuICAgIHByaXZhdGUgJF9zdHJva2VXaWR0aDogbnVtYmVyXHJcbiAgICBwcml2YXRlICRfc3Ryb2tlQ29sb3I6IGludGVyZmFjZXMuQ29sb3JcclxuICAgIHByaXZhdGUgJF9maWxsOiBpbnRlcmZhY2VzLkNvbG9yXHJcbiAgICBwcml2YXRlICRfcjogbnVtYmVyIC8vIHJhZGl1c1xyXG4gICAgcHJpdmF0ZSAkX3Nob3dMYWJlbDogYm9vbGVhblxyXG4gICAgcHJpdmF0ZSAkX3RleHQ6IHN0cmluZ1xyXG4gICAgcHJpdmF0ZSAkX3RleHRPZmZzZXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSAvLyBOT1RFOiBkZXByZWNhdGVkLCBjdXJyZW50IG5vdCB1c2VkXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvcmUsIG5vZGVEYXRhOiBpbnRlcmZhY2VzLk5vZGVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy4kX2NvcmUgPSBjb3JlXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbmZpZ3MgPSB0aGlzLiRfY29yZS4kX2NvbmZpZ3NcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLiRfcG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuJF9wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IGRlZmF1bHRDb25maWdzLm5vZGUuc3Ryb2tlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogZGVmYXVsdENvbmZpZ3Mubm9kZS5zdHJva2VDb2xvcixcclxuICAgICAgICAgICAgICAgIHI6IGRlZmF1bHRDb25maWdzLm5vZGUucixcclxuICAgICAgICAgICAgICAgIGZpbGw6IGRlZmF1bHRDb25maWdzLm5vZGUuZmlsbCxcclxuICAgICAgICAgICAgICAgIHNob3dMYWJlbDogZGVmYXVsdENvbmZpZ3Mubm9kZS5zaG93TGFiZWwsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBkZWZhdWx0Q29uZmlncy5ub2RlLnRleHQsXHJcbiAgICAgICAgICAgICAgICBjbGlja0NhbGxiYWNrOiBkZWZhdWx0Q29uZmlncy5ub2RlLmNsaWNrQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICBob3ZlckNhbGxiYWNrOiBkZWZhdWx0Q29uZmlncy5ub2RlLmhvdmVyQ2FsbGJhY2tcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLi4ubm9kZURhdGFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJF9zZXRJZChkYXRhLmlkKVxyXG4gICAgICAgIHRoaXMuJF9wb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgeDogZGF0YS54LFxyXG4gICAgICAgICAgICB5OiBkYXRhLnlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kX3N0cm9rZVdpZHRoID0gZGF0YS5zdHJva2VXaWR0aFxyXG4gICAgICAgIHRoaXMuJF9zdHJva2VDb2xvciA9IGRhdGEuc3Ryb2tlQ29sb3JcclxuICAgICAgICB0aGlzLiRfZmlsbCA9IGRhdGEuZmlsbFxyXG4gICAgICAgIHRoaXMuJF9yID0gZGF0YS5yXHJcbiAgICAgICAgdGhpcy4kX3Nob3dMYWJlbCA9IGRhdGEuc2hvd0xhYmVsXHJcbiAgICAgICAgdGhpcy4kX3RleHQgPSBkYXRhLnRleHRcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJF9zaG93TGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGFiZWwodHJ1ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q2xpY2tDYWxsYmFjayhkYXRhLmNsaWNrQ2FsbGJhY2spXHJcbiAgICAgICAgdGhpcy5zZXRIb3ZlckNhbGxiYWNrKGRhdGEuaG92ZXJDYWxsYmFjaylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldHRlciBvZiBwcml2YXRlIHByb3BlcnR5ICRfaWRcclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kX2lkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHggcG9zdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB4KHZhbHVlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24oe1xyXG4gICAgICAgICAgICAgICAgeDogdmFsdWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9wb3NpdGlvbi54XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHkgcG9zdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB5KHZhbHVlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24oe1xyXG4gICAgICAgICAgICAgICAgeTogdmFsdWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9wb3NpdGlvbi55XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHBvc3Rpb25cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3NpdGlvbihwb3NpdGlvbj86IGludGVyZmFjZXMuUG9zaXRpb24pIHtcclxuICAgICAgICBsZXQgbGlua1NldHMgPSB7fVxyXG5cclxuICAgICAgICAvLyBlLmcuIHNldE9uZVBvc2l0aW9uKCd4JywgMSkgbWVhbnMgc2V0IHggcG9zaXRpb24gd2l0aCB2YWx1ZSAxXHJcbiAgICAgICAgY29uc3Qgc2V0T25lUG9zaXRpb24gPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRfcG9zaXRpb25ba2V5XSA9IHZhbHVlIC8vIGtleTogJ3gnIG9yICd5J1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhsaW5rU2V0cykuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGVudHJ5WzBdOiAnc291cmNlJyAvICd0YXJnZXQnXHJcbiAgICAgICAgICAgICAgICAvLyBlbnRyeVsxXTogdGhlIGxpbmsgc2V0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbnRyeVswXSBhcyBMaW5rQXR0clxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0ID0gZW50cnlbMV0gYXMgU2V0PExpbms+XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9hZGRNb2RpZmllZExpbmtDb3VudChzZXQuc2l6ZSlcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubGlua01hbmFnZXIuY2hhbmdlQXR0cmlidXRlKGxpbmssIGtleSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgKCd4JyBpbiBwb3NpdGlvbiB8fCAneScgaW4gcG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX2xhenlVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICgneCcgaW4gcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRfcG9zaXRpb25bJ3gnXSA9IHBvc2l0aW9uLnhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgneScgaW4gcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRfcG9zaXRpb25bJ3knXSA9IHBvc2l0aW9uLnlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRfcG9zaXRpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaW5rU2V0cyA9IHtcclxuICAgICAgICAgICAgICAgIC8vIGZpbmQgbGlua3MgZnJvbS90byB0aGlzIG5vZGVcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogdGhpcy4kX2NvcmUuJF9zb3VyY2VJZDJsaW5rcy5nZXQodGhpcy4kX2lkKSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy4kX2NvcmUuJF90YXJnZXRJZDJsaW5rcy5nZXQodGhpcy4kX2lkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgneCcgaW4gcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHNldE9uZVBvc2l0aW9uKCd4JywgcG9zaXRpb24ueClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJ3knIGluIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRPbmVQb3NpdGlvbigneScsIHBvc2l0aW9uLnkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9yZW5kZXJlci5ub2RlTWFuYWdlci5jaGFuZ2VBdHRyaWJ1dGUodGhpcywgJ3Bvc2l0aW9uJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfcG9zaXRpb25cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgc3Ryb2tlIHdpZHRoIG9mIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBOb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdHJva2VXaWR0aCh2YWx1ZT86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9zdHJva2VXaWR0aCA9IHZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubm9kZU1hbmFnZXIuY2hhbmdlQXR0cmlidXRlKHRoaXMsICdzdHJva2VXaWR0aCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfc3Ryb2tlV2lkdGhcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldC9nZXQgc3Ryb2tlIGNvbG9yIG9mIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIHtDb2xvcn0gW3ZhbHVlXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3Ryb2tlQ29sb3IodmFsdWU/OiBpbnRlcmZhY2VzLkNvbG9yKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy4kX3N0cm9rZUNvbG9yID0gdmFsdWVcclxuICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9yZW5kZXJlci5ub2RlTWFuYWdlci5jaGFuZ2VBdHRyaWJ1dGUodGhpcywgJ3N0cm9rZUNvbG9yJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9zdHJva2VDb2xvclxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0L2dldCBmaWxsIGNvbG9yIG9mIGEgbm9kZVxyXG4gICAgICogQHBhcmFtIHtDb2xvcn0gW3ZhbHVlXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmlsbCh2YWx1ZT86IGludGVyZmFjZXMuQ29sb3IpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRfZmlsbCA9IHZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubm9kZU1hbmFnZXIuY2hhbmdlQXR0cmlidXRlKHRoaXMsICdmaWxsJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9maWxsXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQvZ2V0IHJhZGl1cyBvZiBhIG5vZGVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcl1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHIodmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRfciA9IHZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLiRfcmVuZGVyZXIubm9kZU1hbmFnZXIuY2hhbmdlQXR0cmlidXRlKHRoaXMsICdyYWRpdXMnKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3JcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNvbnRyb2wgbGFiZWwgc2hvdyBvciBub3RcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd0xhYmVsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy4kX3Nob3dMYWJlbCA9IHZhbHVlXHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJF9jb3JlLmxhYmVsTWFuYWdlci5kcmF3TGFiZWwodGhpcylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiRfY29yZS5sYWJlbE1hbmFnZXIucmVtb3ZlTGFiZWwodGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQvc2V0IG5vZGUncyBsYWJlbFxyXG4gICAgICogQHBhcmFtIHZhbHVlIGxhYmVsIHRleHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRleHQodmFsdWU/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy4kX3RleHQgPSB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kX3RleHRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldC9zZXQgb2Zmc2V0IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgb2Zmc2V0IHZhbHVlXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBub3QgdXNlZCBjdXJyZW50bHksIG5vdCBzdXBwb3J0IHNldCBub2RlJ3MgbGFiZWwgb2Zmc2V0IGluZGl2aWR1YWxseVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdGV4dE9mZnNldCh2YWx1ZT86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLiRfdGV4dE9mZnNldCA9IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRfdGV4dE9mZnNldFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IHRoZSBpZCBvZiB0aGlzIG5vZGUuXHJcbiAgICAgKiBpdCBpcyBvbmx5IHVzZWQgZm9yIGNvbnN0cnVjdG9yXHJcbiAgICAgKiBiZWNhdXNlIGEgbm9kZSdzIGlkIGlzIG5vdCBhbGxvd2VkIHRvIGJlIGNoYW5nZWQuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyBub3RoaW5nXHJcbiAgICAgKiBAbWVtYmVyb2YgTm9kZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlICRfc2V0SWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChpc1ZhbGlkSWQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRfY29yZS4kX2lkMm5vZGUuaGFzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGUgbm9kZSAoJHt2YWx1ZX0pIGlzIG5vdCBhbGxvd2VkLmApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWRJZCh0aGlzLiRfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgY2hhbmdlIHRoZSBpZCBvZiBhbiBleGlzdCBub2RlLicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kX2NvcmUuJF9pZDJub2RlLnNldCh2YWx1ZSwgdGhpcylcclxuICAgICAgICAgICAgdGhpcy4kX2lkID0gdmFsdWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgSUQgJHt2YWx1ZX1gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBob3ZlciBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIGhvdmVyIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0SG92ZXJDYWxsYmFjayhjYWxsYmFjazogKG5vZGU6IE5vZGUpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLiRfaG92ZXJDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgY2xpY2sgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBjbGljayBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNldENsaWNrQ2FsbGJhY2soY2FsbGJhY2s6IChub2RlOiBOb2RlKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy4kX2NsaWNrQ2FsbGJhY2sgPSBjYWxsYmFja1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb2RlXHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzQgY29sb3I7XFxyXFxuXFxyXFxub3V0IHZlYzQgZnJhZ21lbnRDb2xvcjtcXHJcXG5cXHJcXG52b2lkIG1haW4odm9pZCkge1xcclxcbiAgICBmcmFnbWVudENvbG9yID0gdmVjNChjb2xvci5yZ2IgKiBjb2xvci5hLCBjb2xvci5hKTtcXHJcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAzMDAgZXNcXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuaW4gdmVjNCBjb2xvcjtcXHJcXG5cXHJcXG5pbiB2ZWM0IGlkO1xcclxcblxcclxcbi8vIFRPRE86IGFsbCBpZCByZWxhdGVkIHNoYWRlciBuZWVkIGNsZWFuIHVwXFxyXFxub3V0IHZlYzQgZnJhZ21lbnRDb2xvcjtcXHJcXG5cXHJcXG52b2lkIG1haW4odm9pZCkge1xcclxcbiAgICBmcmFnbWVudENvbG9yID0gaWQ7XFxyXFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzMgaW5WZXJ0ZXhQb3M7XFxyXFxuaW4gdmVjMiBpblNvdXJjZVBvc2l0aW9uO1xcclxcbmluIHZlYzIgaW5UYXJnZXRQb3NpdGlvbjtcXHJcXG5pbiBmbG9hdCBpblN0cm9rZVdpZHRoO1xcclxcbmluIHZlYzQgaW5TdHJva2VDb2xvcjtcXHJcXG5cXHJcXG5pbiB2ZWM0IGluSWQ7XFxyXFxuXFxyXFxub3V0IHZlYzQgY29sb3I7XFxyXFxuXFxyXFxub3V0IHZlYzQgaWQ7XFxyXFxuXFxyXFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb247XFxyXFxudW5pZm9ybSB2ZWMyIHNjYWxlO1xcclxcbnVuaWZvcm0gdmVjMiB0cmFuc2xhdGU7XFxyXFxuXFxyXFxudm9pZCBtYWluKHZvaWQpIHtcXHJcXG4gICAgaWQgPSBpbklkO1xcclxcblxcclxcbiAgICBjb2xvciA9IGluU3Ryb2tlQ29sb3I7XFxyXFxuXFxyXFxuICAgIHZlYzIgc291cmNlID0gaW5Tb3VyY2VQb3NpdGlvbiAqIHNjYWxlICsgdHJhbnNsYXRlO1xcclxcbiAgICB2ZWMyIHRhcmdldCA9IGluVGFyZ2V0UG9zaXRpb24gKiBzY2FsZSArIHRyYW5zbGF0ZTtcXHJcXG4gICAgdmVjMiBkZWx0YSA9IHNvdXJjZSAtIHRhcmdldDtcXHJcXG4gICAgdmVjMiBjZW50ZXIgPSAwLjUgKiAoc291cmNlICsgdGFyZ2V0KTtcXHJcXG4gICAgZmxvYXQgbGVuID0gbGVuZ3RoKGRlbHRhKTtcXHJcXG4gICAgZmxvYXQgcGhpID0gYXRhbihkZWx0YS55IC8gZGVsdGEueCk7XFxyXFxuXFxyXFxuICAgIG1hdDMgbGluZV9zY2FsZSA9IG1hdDMoXFxyXFxuICAgICAgICBsZW4sIDAsIDAsXFxyXFxuICAgICAgICAwLCBpblN0cm9rZVdpZHRoLCAwLFxcclxcbiAgICAgICAgMCwgMCwgMVxcclxcbiAgICApO1xcclxcbiAgICBtYXQzIGxpbmVfcm90YXRlID0gbWF0MyhcXHJcXG4gICAgICAgIGNvcyhwaGkpLCBzaW4ocGhpKSwgMCxcXHJcXG4gICAgICAgIC1zaW4ocGhpKSwgY29zKHBoaSksIDAsXFxyXFxuICAgICAgICAwLCAwLCAxXFxyXFxuICAgICk7XFxyXFxuICAgIG1hdDMgbGluZV90cmFuc2xhdGUgPSBtYXQzKFxcclxcbiAgICAgICAgMSwgMCwgMCxcXHJcXG4gICAgICAgIDAsIDEsIDAsXFxyXFxuICAgICAgICBjZW50ZXIueCwgY2VudGVyLnksIDFcXHJcXG4gICAgKTtcXHJcXG4gICAgXFxyXFxuICAgIG1hdDMgdHJhbnNmb3JtID0gbGluZV90cmFuc2xhdGUgKiBsaW5lX3JvdGF0ZSAqIGxpbmVfc2NhbGU7XFxyXFxuXFxyXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwcm9qZWN0aW9uICogdHJhbnNmb3JtICogaW5WZXJ0ZXhQb3MsIDEuKTtcXHJcXG59XCI7IiwiLyoqXHJcbiAqIEBhdXRob3IgWGlhb2RvbmcgWmhhbyA8emhhb3hpYW9kb25nQHpqdS5lZHUuY24+XHJcbiAqIEBkZXNjcmlwdGlvbiBMaW5rIHVzZWQgaW4gcmVuZGVyZXJcclxuICovXHJcblxyXG5pbXBvcnQgdmVydFNoYWRlclN0ciBmcm9tICcuL3ZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgZnJhZ1NoYWRlclN0ciBmcm9tICcuL2ZyYWdtZW50Lmdsc2wnXHJcbmltcG9ydCBpZFZlcnRTaGFkZXJTdHIgZnJvbSAnLi9pZC12ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGlkRnJhZ1NoYWRlclN0ciBmcm9tICcuL2lkLWZyYWdtZW50Lmdsc2wnXHJcbmltcG9ydCB7XHJcbiAgICBjcmVhdGVQcm9ncmFtLFxyXG4gICAgY3JlYXRlQXJyYXlCdWZmZXIsXHJcbiAgICBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIsXHJcbiAgICBlbmNvZGVSZW5kZXJJZFxyXG59IGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBSZW5kZXJBdHRyaWJ1dGUsIExpbmtBdHRyLCBMaW5rTWFuYWdlckNvbmZpZ3MgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi8uLi9saW5rJ1xyXG5pbXBvcnQgTWFwMiBmcm9tICcuLi8uLi8uLi91dGlscy9tYXAyJ1xyXG5cclxuZW51bSBMaW5rQXR0cktleSB7XHJcbiAgICBURU1QTEFURSxcclxuICAgIFNPVVJDRSxcclxuICAgIFRBUkdFVCxcclxuICAgIFdJRFRILFxyXG4gICAgQ09MT1JcclxufVxyXG5cclxuZW51bSBMaW5rSWRBdHRyS2V5IHtcclxuICAgIFRFTVBMQVRFLFxyXG4gICAgU09VUkNFLFxyXG4gICAgVEFSR0VULFxyXG4gICAgV0lEVEgsXHJcbiAgICBDT0xPUixcclxuICAgIElEXHJcbn1cclxuXHJcbmNvbnN0IExpbmtBdHRyTWFwID0ge1xyXG4gICAgc291cmNlOiBMaW5rQXR0cktleS5TT1VSQ0UsXHJcbiAgICB0YXJnZXQ6IExpbmtBdHRyS2V5LlRBUkdFVCxcclxuICAgIHN0cm9rZVdpZHRoOiBMaW5rQXR0cktleS5XSURUSCxcclxuICAgIHN0cm9rZUNvbG9yOiBMaW5rQXR0cktleS5DT0xPUlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyTGlua01hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxyXG4gICAgcHJpdmF0ZSBsaW1pdDogbnVtYmVyXHJcbiAgICBwcml2YXRlIGNvdW50ID0gMFxyXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyXHJcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyXHJcbiAgICBwcml2YXRlIHBpeGVsUmF0aW86IG51bWJlclxyXG4gICAgcHJpdmF0ZSBwcm9ncmFtOiBXZWJHTFByb2dyYW1cclxuICAgIHByaXZhdGUgYXR0cmlidXRlczogUmVuZGVyQXR0cmlidXRlXHJcbiAgICBwcml2YXRlIGlkUHJvZ3JhbTogV2ViR0xQcm9ncmFtXHJcbiAgICBwcml2YXRlIGlkQXR0cmlidXRlczogUmVuZGVyQXR0cmlidXRlXHJcbiAgICBwcml2YXRlIGlkVGV4dHVyZTogV2ViR0xUZXh0dXJlXHJcbiAgICBwcml2YXRlIHJlbmRlcklkVG9JZHM6IHsgW2tleTogbnVtYmVyXTogW3N0cmluZywgc3RyaW5nXSB9XHJcblxyXG4gICAgcHJpdmF0ZSBpZHNUb0luZGV4ID0gbmV3IE1hcDIoKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIHJlbmRlciBsaW5rIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBnbCBXZWJHTCBjb250ZXh0XHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIG5lc3Nlc2FyeSBjb25maWdzIGZvciBsaW5rIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBpZFRleHR1cmUgdGV4dHVyZSBzdG9yZSBlbGVtZW50cyBpZCBvZiBlYWNoIHBpeGVsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgICBwYXJhbXM6IExpbmtNYW5hZ2VyQ29uZmlncyxcclxuICAgICAgICBpZFRleHR1cmU6IFdlYkdMVGV4dHVyZVxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgeyBsaW1pdCwgd2lkdGgsIGhlaWdodCB9ID0gcGFyYW1zXHJcbiAgICAgICAgdGhpcy5nbCA9IGdsXHJcbiAgICAgICAgdGhpcy5saW1pdCA9IGxpbWl0XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcclxuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcih2ZXJ0U2hhZGVyU3RyKVxyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odGhpcy5nbCwgdmVydFNoYWRlclN0ciwgZnJhZ1NoYWRlclN0ciwgdGhpcy5hdHRyaWJ1dGVzKVxyXG5cclxuICAgICAgICB0aGlzLmlkQXR0cmlidXRlcyA9IGV4dHJhY3RBdHRyaWJ1dGVzRnJvbVNoYWRlcihpZFZlcnRTaGFkZXJTdHIpXHJcbiAgICAgICAgdGhpcy5pZFByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHRoaXMuZ2wsIGlkVmVydFNoYWRlclN0ciwgaWRGcmFnU2hhZGVyU3RyLCB0aGlzLmlkQXR0cmlidXRlcylcclxuICAgICAgICB0aGlzLmlkVGV4dHVyZSA9IGlkVGV4dHVyZVxyXG4gICAgICAgIHRoaXMucmVuZGVySWRUb0lkcyA9IHt9XHJcblxyXG4gICAgICAgIC8vIGluaXQgYXJyYXlzXHJcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LlRFTVBMQVRFXS5hcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAtMC41LCAwLjUsIDEuMCxcclxuICAgICAgICAgICAgLTAuNSwgLTAuNSwgMS4wLFxyXG4gICAgICAgICAgICAwLjUsIDAuNSwgMS4wLFxyXG4gICAgICAgICAgICAwLjUsIC0wLjUsIDEuMCxcclxuICAgICAgICBdKVxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIGF0dHIuYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGF0dHIuc2l6ZSAqIHRoaXMubGltaXQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaW5pdCBidWZmZXJzXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgYXR0ci5idWZmZXIgPSBjcmVhdGVBcnJheUJ1ZmZlcih0aGlzLmdsLCBhdHRyLmFycmF5KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGluaXQgaWQgYXR0cmlidXRlcyBhbmQgYnVmZmVyc1xyXG4gICAgICAgIC8vIFRPRE86IGhhcmRjb2RlIGNoZWNrLCBuZWVkIHJlZmFjdG9yXHJcbiAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0ciwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpZHggPCB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlc1tpZHhdID0gdGhpcy5hdHRyaWJ1dGVzW2lkeF1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIGF0dHIuYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGF0dHIuc2l6ZSAqIHRoaXMubGltaXQpXHJcbiAgICAgICAgICAgICAgICBhdHRyLmJ1ZmZlciA9IGNyZWF0ZUFycmF5QnVmZmVyKHRoaXMuZ2wsIGF0dHIuYXJyYXkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpbml0IHVuaWZvcm1zXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBwcm9qZWN0aW9uTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAncHJvamVjdGlvbicpXHJcbiAgICAgICAgY29uc3Qgc2NhbGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICdzY2FsZScpXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAndHJhbnNsYXRlJylcclxuXHJcbiAgICAgICAgLy8gdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkgLy8gVE9ETzogdmlld3BvcnQgc2V0LCBub3QgbmVlZGVkPyBwdXQgaGVyZSBpbiBjYXNlIGJ1ZyBhcHBlYXJcclxuXHJcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAyIC8gdGhpcy53aWR0aCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgLTIgLyB0aGlzLmhlaWdodCwgMCxcclxuICAgICAgICAgICAgLTEsIDEsIDFcclxuICAgICAgICBdKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDNmdihwcm9qZWN0aW9uTG9jLCBmYWxzZSwgcHJvamVjdGlvbilcclxuXHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBuZXcgRmxvYXQzMkFycmF5KFsxLCAxXSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoc2NhbGVMb2MsIHNjYWxlKVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSBuZXcgRmxvYXQzMkFycmF5KFswLCAwXSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYodHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXHJcblxyXG4gICAgICAgIC8vIGlkIHVuaWZvcm1zLCBpZGVudGljYWwgdG8gbGlua1xyXG4gICAgICAgIC8vIFRPRE86IG5lZWQgcmVmYWN0b3IgdG9vXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgIGNvbnN0IGlkUHJvamVjdGlvbkxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAncHJvamVjdGlvbicpXHJcbiAgICAgICAgY29uc3QgaWRTY2FsZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAnc2NhbGUnKVxyXG4gICAgICAgIGNvbnN0IGlkVHJhbnNsYXRlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG5cclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXgzZnYoaWRQcm9qZWN0aW9uTG9jLCBmYWxzZSwgcHJvamVjdGlvbilcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoaWRTY2FsZUxvYywgc2NhbGUpXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkVHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGFuZ2UgbGluaydzIGF0dHJpYnV0ZVxyXG4gICAgICogQHBhcmFtIGxpbmsgbGluayBkYXRhXHJcbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlIGF0dHJpYnV0ZSBrZXkgdG8gY2hhbmdlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjaGFuZ2VBdHRyaWJ1dGUobGluazogTGluaywgYXR0cmlidXRlOiBMaW5rQXR0cikge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IExpbmtBdHRyTWFwW2F0dHJpYnV0ZV1cclxuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5hdHRyaWJ1dGVzW2tleV1cclxuICAgICAgICBjb25zdCBub2RlcyA9IGxpbmsuc291cmNlVGFyZ2V0KClcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaWRzVG9JbmRleC5nZXQoW25vZGVzLnNvdXJjZS5pZCgpLCBub2Rlcy50YXJnZXQuaWQoKV0pXHJcbiAgICAgICAgbGV0IGRhdGEgPSBudWxsXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3NvdXJjZScpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gbm9kZXMuc291cmNlLnBvc2l0aW9uKClcclxuICAgICAgICAgICAgZGF0YSA9IFtwb3MueCwgcG9zLnldXHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGUgPT09ICd0YXJnZXQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IG5vZGVzLnRhcmdldC5wb3NpdGlvbigpXHJcbiAgICAgICAgICAgIGRhdGEgPSBbcG9zLngsIHBvcy55XVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAnc3Ryb2tlV2lkdGgnKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBbbGluay5zdHJva2VXaWR0aCgpICogdGhpcy5waXhlbFJhdGlvXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAnc3Ryb2tlQ29sb3InKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGxpbmsuc3Ryb2tlQ29sb3IoKVxyXG4gICAgICAgICAgICBkYXRhID0gW2NvbC5yLCBjb2wuZywgY29sLmIsIGNvbC5hXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0xpbmsgYXR0cmlidXRlIG5vdCBzdXBwb3J0ZWQuJylcclxuICAgICAgICAgICAgcmV0dXJuIC8vIGVhcmx5IHJldHVybiwgc2tpcCBmb2xsb3dpbmcgYnVmZmVyIGNoYW5nZVxyXG4gICAgICAgIH1cclxuICAgICAgICBhdHRyLmFycmF5LnNldChkYXRhLCBhdHRyLnNpemUgKiBpbmRleClcclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YShcclxuICAgICAgICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGluZGV4ICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgYXR0ci5hcnJheSxcclxuICAgICAgICAgICAgYXR0ci5zaXplICogaW5kZXgsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlZnJlc2ggYWxsIHBvc2l0aW9uIG9mIGVkZ2VzXHJcbiAgICAgKiBAcGFyYW0gbGlua3MgYWxsIGxpbmsgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVmcmVzaFBvc2l0aW9uKGxpbmtzOiBMaW5rW10pIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwIC8vIFRPRE86IHVzZWxlc3MgY291bnRcclxuICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IGNvbnNpZGVyIGxpbmsgYW5kIHJlbmRlciBsaW5rIGF0dHJpYnV0ZSBtYXBwaW5nXHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGxpbmsuc291cmNlKClcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlUG9zaXRpb24gPSBzb3VyY2UucG9zaXRpb24oKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuU09VUkNFXS5hcnJheVsyICogKGNvdW50ICsgaSldID0gc291cmNlUG9zaXRpb24ueFxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuU09VUkNFXS5hcnJheVsyICogKGNvdW50ICsgaSkgKyAxXSA9IHNvdXJjZVBvc2l0aW9uLnlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGxpbmsudGFyZ2V0KClcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXQucG9zaXRpb24oKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuVEFSR0VUXS5hcnJheVsyICogKGNvdW50ICsgaSldID0gdGFyZ2V0UG9zaXRpb24ueFxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuVEFSR0VUXS5hcnJheVsyICogKGNvdW50ICsgaSkgKyAxXSA9IHRhcmdldFBvc2l0aW9uLnlcclxuXHJcbiAgICAgICAgICAgIC8vIGN1cnJlbnRseSBubyBuZWVkIGZvciBjb2xvciZyZW5kZXJJZCBjaGFuZ2VcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LldJRFRIXS5hcnJheVt0aGlzLmNvdW50ICsgaV0gPVxyXG4gICAgICAgICAgICAgICAgbGluay5zdHJva2VXaWR0aCgpICogdGhpcy5waXhlbFJhdGlvXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGxpbmsuc3Ryb2tlQ29sb3IoKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpXSA9IGNvbG9yLnJcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LkNPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gY29sb3IuZ1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMl0gPSBjb2xvci5iXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAzXSA9IGNvbG9yLmFcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcklkQ29sb3IgPSBlbmNvZGVSZW5kZXJJZCgyICogKHRoaXMuY291bnQgKyBpKSArIDEpIC8vIE5PVEU6IGxpbmsgcmVuZGVyIGlkLCB1c2Ugb2RkIGludGVnZXJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbTGlua0lkQXR0cktleS5JRF0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSldID0gcmVuZGVySWRDb2xvci5yXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzW0xpbmtJZEF0dHJLZXkuSURdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPSByZW5kZXJJZENvbG9yLmdcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbTGlua0lkQXR0cktleS5JRF0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAyXSA9IHJlbmRlcklkQ29sb3IuYlxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlc1tMaW5rSWRBdHRyS2V5LklEXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDNdID0gcmVuZGVySWRDb2xvci5hXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3Qgc291cmNlQXR0ciA9IHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5TT1VSQ0VdXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0QXR0ciA9IHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5UQVJHRVRdXHJcblxyXG4gICAgICAgIGNvbnN0IGFyciA9IFtzb3VyY2VBdHRyLCB0YXJnZXRBdHRyXVxyXG5cclxuICAgICAgICBhcnIuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGNvdW50ICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGxpbmtzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNsZWFyIGxpbmsgZGF0YVxyXG4gICAgICogbm90IGFjdHVhbGx5IGVyYXNlIGRhdGEsIGJ1dCByZXNldCBjb3VudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYXJEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgbGlua3MgZGF0YSB0byBlbmdpbmVcclxuICAgICAqIEBwYXJhbSBsaW5rcyBsaW5rcyBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGREYXRhKGxpbmtzOiBMaW5rW10pIHtcclxuICAgICAgICAvLyBzZXQgYXJyYXlcclxuICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IGNvbnNpZGVyIGxpbmsgYW5kIHJlbmRlciBsaW5rIGF0dHJpYnV0ZSBtYXBwaW5nXHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGxpbmsuc291cmNlKClcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlUG9zaXRpb24gPSBzb3VyY2UucG9zaXRpb24oKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuU09VUkNFXS5hcnJheVsyICogKHRoaXMuY291bnQgKyBpKV0gPSBzb3VyY2VQb3NpdGlvbi54XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5TT1VSQ0VdLmFycmF5WzIgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPSBzb3VyY2VQb3NpdGlvbi55XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBsaW5rLnRhcmdldCgpXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0LnBvc2l0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LlRBUkdFVF0uYXJyYXlbMiAqICh0aGlzLmNvdW50ICsgaSldID0gdGFyZ2V0UG9zaXRpb24ueFxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuVEFSR0VUXS5hcnJheVsyICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gdGFyZ2V0UG9zaXRpb24ueVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LldJRFRIXS5hcnJheVt0aGlzLmNvdW50ICsgaV0gPVxyXG4gICAgICAgICAgICAgICAgbGluay5zdHJva2VXaWR0aCgpICogdGhpcy5waXhlbFJhdGlvXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGxpbmsuc3Ryb2tlQ29sb3IoKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpXSA9IGNvbG9yLnJcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW0xpbmtBdHRyS2V5LkNPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gY29sb3IuZ1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTGlua0F0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMl0gPSBjb2xvci5iXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tMaW5rQXR0cktleS5DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAzXSA9IGNvbG9yLmFcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcklkQ29sb3IgPSBlbmNvZGVSZW5kZXJJZCgyICogKHRoaXMuY291bnQgKyBpKSArIDEpIC8vIE5PVEU6IGxpbmsgcmVuZGVyIGlkLCB1c2Ugb2RkIGludGVnZXJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbTGlua0lkQXR0cktleS5JRF0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSldID0gcmVuZGVySWRDb2xvci5yXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzW0xpbmtJZEF0dHJLZXkuSURdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPSByZW5kZXJJZENvbG9yLmdcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbTGlua0lkQXR0cktleS5JRF0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAyXSA9IHJlbmRlcklkQ29sb3IuYlxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlc1tMaW5rSWRBdHRyS2V5LklEXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDNdID0gcmVuZGVySWRDb2xvci5hXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2VUYXJnZXQgPSBsaW5rLnNvdXJjZVRhcmdldCgpXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVySWRUb0lkc1syICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gW1xyXG4gICAgICAgICAgICAgICAgc291cmNlVGFyZ2V0LnNvdXJjZS5pZCgpLFxyXG4gICAgICAgICAgICAgICAgc291cmNlVGFyZ2V0LnRhcmdldC5pZCgpXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgdGhpcy5pZHNUb0luZGV4LnNldChcclxuICAgICAgICAgICAgICAgIFtzb3VyY2VUYXJnZXQuc291cmNlLmlkKCksIHNvdXJjZVRhcmdldC50YXJnZXQuaWQoKV0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ICsgaVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50ICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogbGlua3MubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpZCBidWZmZXIgZGF0YVxyXG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmlkQXR0cmlidXRlc1tMaW5rSWRBdHRyS2V5LklEXVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgYXR0ci5zaXplICogdGhpcy5jb3VudCAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgIGF0dHIuYXJyYXksXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGxpbmtzLmxlbmd0aFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdGhpcy5jb3VudCArPSBsaW5rcy5sZW5ndGhcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBUcmFuc2Zvcm0gaW4gUmVuZGVyIExpbmtcclxuICAgICAqIEBwYXJhbSB0cmFuc2Zvcm0gY3VycmVudCB0cmFuc2Zvcm0ocGFuJnpvb20gY29uZGl0aW9uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBzY2FsZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG5cclxuICAgICAgICBjb25zdCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoW3RyYW5zZm9ybS5rLCB0cmFuc2Zvcm0ua10pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KHNjYWxlTG9jLCBzY2FsZSlcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gbmV3IEZsb2F0MzJBcnJheShbdHJhbnNmb3JtLngsIHRyYW5zZm9ybS55XSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYodHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXHJcblxyXG4gICAgICAgIC8vIGlkIHVuaWZvcm1zLCBpZGVudGljYWwgdG8gbGlua1xyXG4gICAgICAgIC8vIFRPRE86IG5lZWQgcmVmYWN0b3IgdG9vXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgIGNvbnN0IGlkU2NhbGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCBpZFRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndHJhbnNsYXRlJylcclxuXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkU2NhbGVMb2MsIHNjYWxlKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFRyYW5zbGF0ZUxvYywgdHJhbnNsYXRlKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVuZGVyIGlkIHRvIGxpbmsgaWRzKHNvdXJjZSBhbmQgdGFyZ2V0KVxyXG4gICAgICogQHBhcmFtIHJlbmRlcklkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRJZHNCeVJlbmRlcklkKHJlbmRlcklkOiBudW1iZXIpOiBbc3RyaW5nLCBzdHJpbmddIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJJZFRvSWRzW3JlbmRlcklkXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhdyBsaW5rc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORClcclxuICAgICAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHIuaW5kZXgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0ciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLkZMT0FULFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuaXNCdWlsZEluID8gMCA6IGF0dHIuc2l6ZSAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGF0dHIuaW5kZXgsIDEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXNJbnN0YW5jZWQodGhpcy5nbC5UUklBTkdMRV9TVFJJUCwgMCwgNCwgdGhpcy5jb3VudClcclxuXHJcbiAgICAgICAgLy8gZHJhdyBpZFxyXG4gICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuT05FLCB0aGlzLmdsLlpFUk8pXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHRoaXMuaWRUZXh0dXJlKVxyXG5cclxuICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0ci5pbmRleClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5pZEF0dHJpYnV0ZXNbTGlua0lkQXR0cktleS5JRF1cclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgICAgYXR0ci5pbmRleCxcclxuICAgICAgICAgICAgYXR0ci5zaXplLFxyXG4gICAgICAgICAgICB0aGlzLmdsLkZMT0FULFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgYXR0ci5zaXplICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgMFxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYkRpdmlzb3IoYXR0ci5pbmRleCwgMSlcclxuXHJcbiAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzSW5zdGFuY2VkKHRoaXMuZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQsIHRoaXMuY291bnQpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbClcclxuXHJcbiAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORClcclxuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLk9ORSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzMgaW5WZXJ0ZXhQb3M7XFxyXFxuaW4gdmVjMiBpblNvdXJjZVBvc2l0aW9uO1xcclxcbmluIHZlYzIgaW5UYXJnZXRQb3NpdGlvbjtcXHJcXG5pbiBmbG9hdCBpblN0cm9rZVdpZHRoO1xcclxcbmluIHZlYzQgaW5TdHJva2VDb2xvcjtcXHJcXG5cXHJcXG5vdXQgdmVjNCBjb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbjtcXHJcXG51bmlmb3JtIHZlYzIgc2NhbGU7XFxyXFxudW5pZm9ybSB2ZWMyIHRyYW5zbGF0ZTtcXHJcXG5cXHJcXG52b2lkIG1haW4odm9pZCkge1xcclxcbiAgICBjb2xvciA9IGluU3Ryb2tlQ29sb3I7XFxyXFxuXFxyXFxuICAgIHZlYzIgc291cmNlID0gaW5Tb3VyY2VQb3NpdGlvbiAqIHNjYWxlICsgdHJhbnNsYXRlO1xcclxcbiAgICB2ZWMyIHRhcmdldCA9IGluVGFyZ2V0UG9zaXRpb24gKiBzY2FsZSArIHRyYW5zbGF0ZTtcXHJcXG4gICAgdmVjMiBkZWx0YSA9IHNvdXJjZSAtIHRhcmdldDtcXHJcXG4gICAgdmVjMiBjZW50ZXIgPSAwLjUgKiAoc291cmNlICsgdGFyZ2V0KTtcXHJcXG4gICAgZmxvYXQgbGVuID0gbGVuZ3RoKGRlbHRhKTtcXHJcXG4gICAgZmxvYXQgcGhpID0gYXRhbihkZWx0YS55IC8gZGVsdGEueCk7XFxyXFxuXFxyXFxuICAgIG1hdDMgbGluZV9zY2FsZSA9IG1hdDMoXFxyXFxuICAgICAgICBsZW4sIDAsIDAsXFxyXFxuICAgICAgICAwLCBpblN0cm9rZVdpZHRoLCAwLFxcclxcbiAgICAgICAgMCwgMCwgMVxcclxcbiAgICApO1xcclxcbiAgICBtYXQzIGxpbmVfcm90YXRlID0gbWF0MyhcXHJcXG4gICAgICAgIGNvcyhwaGkpLCBzaW4ocGhpKSwgMCxcXHJcXG4gICAgICAgIC1zaW4ocGhpKSwgY29zKHBoaSksIDAsXFxyXFxuICAgICAgICAwLCAwLCAxXFxyXFxuICAgICk7XFxyXFxuICAgIG1hdDMgbGluZV90cmFuc2xhdGUgPSBtYXQzKFxcclxcbiAgICAgICAgMSwgMCwgMCxcXHJcXG4gICAgICAgIDAsIDEsIDAsXFxyXFxuICAgICAgICBjZW50ZXIueCwgY2VudGVyLnksIDFcXHJcXG4gICAgKTtcXHJcXG4gICAgXFxyXFxuICAgIG1hdDMgdHJhbnNmb3JtID0gbGluZV90cmFuc2xhdGUgKiBsaW5lX3JvdGF0ZSAqIGxpbmVfc2NhbGU7XFxyXFxuXFxyXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwcm9qZWN0aW9uICogdHJhbnNmb3JtICogaW5WZXJ0ZXhQb3MsIDEuKTtcXHJcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAzMDAgZXNcXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuaW4gdmVjMiBwb3M7XFxyXFxuaW4gZmxvYXQgcmFkaXVzO1xcclxcbmluIHZlYzQgY29sb3I7XFxyXFxuaW4gZmxvYXQgc3Ryb2tlV2lkdGg7XFxyXFxuaW4gdmVjNCBzdHJva2VDb2xvcjtcXHJcXG5cXHJcXG5vdXQgdmVjNCBmcmFnbWVudENvbG9yO1xcclxcblxcclxcbnVuaWZvcm0gdmVjMiB2aWV3cG9ydDtcXHJcXG51bmlmb3JtIGZsb2F0IHBpeGVsUmF0aW87XFxyXFxuXFxyXFxuZmxvYXQgaW5DaXJjbGUoKSB7XFxyXFxuICB2ZWMyIGZsaXBfcG9zID0gcG9zO1xcclxcbiAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3MueTtcXHJcXG4gIGZsb2F0IHIgPSBkaXN0YW5jZShnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvLCBmbGlwX3Bvcyk7XFxyXFxuICBmbG9hdCBkcmF3ID0gMS4gLSBzdGVwKHJhZGl1cyAtIHN0cm9rZVdpZHRoIC8gMi4sIHIpO1xcclxcbiAgcmV0dXJuIGRyYXc7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IGluQm9yZGVyKCkge1xcclxcbiAgaWYgKHN0cm9rZVdpZHRoID09IDAuKSB7XFxyXFxuICAgIHJldHVybiAwLjtcXHJcXG4gIH1cXHJcXG4gIHZlYzIgZmxpcF9wb3MgPSBwb3M7XFxyXFxuICBmbGlwX3Bvcy55ID0gdmlld3BvcnQueSAtIHBvcy55O1xcclxcbiAgZmxvYXQgciA9IGRpc3RhbmNlKGdsX0ZyYWdDb29yZC54eSAvIHBpeGVsUmF0aW8sIGZsaXBfcG9zKTtcXHJcXG4gIGZsb2F0IGRyYXdPdXRlciA9IDEuIC0gc21vb3Roc3RlcCgocmFkaXVzICsgc3Ryb2tlV2lkdGggLyAyLikgKiAwLjk1LCAocmFkaXVzICsgc3Ryb2tlV2lkdGggLyAyLikgKiAxLjA1LCByKTtcXHJcXG4gIGZsb2F0IGRyYXdJbm5lciA9IDEuIC0gc3RlcChyYWRpdXMgLSBzdHJva2VXaWR0aCAvIDIuLCByKTtcXHJcXG4gIHJldHVybiBkcmF3T3V0ZXIgKiAoMS4gLSBkcmF3SW5uZXIpO1xcclxcbiAgLy8gcmV0dXJuIGRyYXdPdXRlcjtcXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKHZvaWQpIHtcXHJcXG4gICAgLy8gYm9yZGVyIGNoZWNrLCB1c2luZyAwLjUoY2VudGVyIG9mIHNtb290aHN0ZXApXFxyXFxuICAgIGlmIChpbkNpcmNsZSgpIDwgMS4gJiYgKHN0cm9rZVdpZHRoIDwgMC44IHx8IGluQm9yZGVyKCkgPCAwLjUpKSB7XFxyXFxuICAgICAgICBkaXNjYXJkO1xcclxcbiAgICB9XFxyXFxuICAgIGZyYWdtZW50Q29sb3IgPSBpbkJvcmRlcigpICogdmVjNChzdHJva2VDb2xvci5yZ2IgKiBzdHJva2VDb2xvci5hLCBzdHJva2VDb2xvci5hKSArIGluQ2lyY2xlKCkgKiB2ZWM0KGNvbG9yLnJnYiAqIGNvbG9yLmEsIGNvbG9yLmEpO1xcclxcbn1cIjsiLCJleHBvcnQgZGVmYXVsdCBcIiN2ZXJzaW9uIDMwMCBlc1xcclxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG5pbiB2ZWMyIHBvcztcXHJcXG5pbiBmbG9hdCByYWRpdXM7XFxyXFxuaW4gdmVjNCBjb2xvcjtcXHJcXG5pbiBmbG9hdCBzdHJva2VXaWR0aDtcXHJcXG5pbiB2ZWM0IHN0cm9rZUNvbG9yO1xcclxcblxcclxcbmluIHZlYzQgaWQ7XFxyXFxuXFxyXFxub3V0IHZlYzQgZnJhZ21lbnRDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIHZlYzIgdmlld3BvcnQ7XFxyXFxudW5pZm9ybSBmbG9hdCBwaXhlbFJhdGlvO1xcclxcblxcclxcbmZsb2F0IGluQ2lyY2xlKCkge1xcclxcbiAgdmVjMiBmbGlwX3BvcyA9IHBvcztcXHJcXG4gIGZsaXBfcG9zLnkgPSB2aWV3cG9ydC55IC0gcG9zLnk7XFxyXFxuICBmbG9hdCByID0gZGlzdGFuY2UoZ2xfRnJhZ0Nvb3JkLnh5IC8gcGl4ZWxSYXRpbywgZmxpcF9wb3MpO1xcclxcbiAgZmxvYXQgZHJhdyA9IDEuIC0gc3RlcChyYWRpdXMgLSBzdHJva2VXaWR0aCAvIDIuLCByKTtcXHJcXG4gIHJldHVybiBkcmF3O1xcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCBpbkJvcmRlcigpIHtcXHJcXG4gIGlmIChzdHJva2VXaWR0aCA9PSAwLikge1xcclxcbiAgICByZXR1cm4gMC47XFxyXFxuICB9XFxyXFxuICB2ZWMyIGZsaXBfcG9zID0gcG9zO1xcclxcbiAgZmxpcF9wb3MueSA9IHZpZXdwb3J0LnkgLSBwb3MueTtcXHJcXG4gIGZsb2F0IHIgPSBkaXN0YW5jZShnbF9GcmFnQ29vcmQueHkgLyBwaXhlbFJhdGlvLCBmbGlwX3Bvcyk7XFxyXFxuICBmbG9hdCBkcmF3T3V0ZXIgPSAxLiAtIHNtb290aHN0ZXAoKHJhZGl1cyArIHN0cm9rZVdpZHRoIC8gMi4pICogMC45NSwgKHJhZGl1cyArIHN0cm9rZVdpZHRoIC8gMi4pICogMS4wNSwgcik7XFxyXFxuICBmbG9hdCBkcmF3SW5uZXIgPSAxLiAtIHN0ZXAocmFkaXVzIC0gc3Ryb2tlV2lkdGggLyAyLiwgcik7XFxyXFxuICByZXR1cm4gZHJhd091dGVyICogKDEuIC0gZHJhd0lubmVyKTtcXHJcXG4gIC8vIHJldHVybiBkcmF3T3V0ZXI7XFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbih2b2lkKSB7XFxyXFxuICAgIC8vIGJvcmRlciBjaGVjaywgdXNpbmcgMC41KGNlbnRlciBvZiBzbW9vdGhzdGVwKVxcclxcbiAgICBpZiAoaW5DaXJjbGUoKSA8IDEuICYmIChzdHJva2VXaWR0aCA8IDAuOCB8fCBpbkJvcmRlcigpIDwgMC41KSkge1xcclxcbiAgICAgICAgZGlzY2FyZDtcXHJcXG4gICAgfVxcclxcbiAgICBmcmFnbWVudENvbG9yID0gaWQ7XFxyXFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzMgaW5WZXJ0ZXhQb3M7XFxyXFxuaW4gdmVjMiBpblBvc2l0aW9uO1xcclxcbmluIGZsb2F0IGluUmFkaXVzO1xcclxcbmluIHZlYzQgaW5GaWxsO1xcclxcbmluIGZsb2F0IGluU3Ryb2tlV2lkdGg7XFxyXFxuaW4gdmVjNCBpblN0cm9rZUNvbG9yO1xcclxcblxcclxcbmluIHZlYzQgaW5JZDtcXHJcXG5cXHJcXG5vdXQgdmVjMiBwb3M7XFxyXFxub3V0IGZsb2F0IHJhZGl1cztcXHJcXG5vdXQgdmVjNCBjb2xvcjtcXHJcXG5vdXQgZmxvYXQgc3Ryb2tlV2lkdGg7XFxyXFxub3V0IHZlYzQgc3Ryb2tlQ29sb3I7XFxyXFxuXFxyXFxub3V0IHZlYzQgaWQ7XFxyXFxuXFxyXFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb247XFxyXFxudW5pZm9ybSB2ZWMyIHNjYWxlO1xcclxcbnVuaWZvcm0gdmVjMiB0cmFuc2xhdGU7XFxyXFxudW5pZm9ybSB2ZWMyIHZpZXdwb3J0O1xcclxcblxcclxcbnZvaWQgbWFpbih2b2lkKSB7XFxyXFxuICAgIGlkID0gaW5JZDtcXHJcXG5cXHJcXG4gICAgZmxvYXQgc2l6ZSA9IGluUmFkaXVzICsgaW5TdHJva2VXaWR0aCAvIDIuO1xcclxcbiAgICByYWRpdXMgPSBpblJhZGl1cztcXHJcXG4gICAgY29sb3IgPSBpbkZpbGw7XFxyXFxuICAgIHN0cm9rZVdpZHRoID0gaW5TdHJva2VXaWR0aDtcXHJcXG4gICAgc3Ryb2tlQ29sb3IgPSBpblN0cm9rZUNvbG9yO1xcclxcbiAgICBmbG9hdCB2ZXJ0ZXhTaXplID0gc2l6ZSAqICgyLiAqIHNxcnQoMi4pKSAqIDEuNTsgLy8gTk9URTogeCAxLjUgdG8gcHJldmVudCBib3JkZXIgZmFjdG9yXFxyXFxuICAgIHBvcyA9IHNjYWxlICogaW5Qb3NpdGlvbiArIHRyYW5zbGF0ZTtcXHJcXG4gICAgbWF0MyB0cmFuc2Zvcm0gPSBtYXQzKFxcclxcbiAgICAgICAgdmVydGV4U2l6ZSwgMCwgMCxcXHJcXG4gICAgICAgIDAsIHZlcnRleFNpemUsIDAsXFxyXFxuICAgICAgICBwb3MueCwgcG9zLnksIDFcXHJcXG4gICAgKTtcXHJcXG5cXHJcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHByb2plY3Rpb24gKiB0cmFuc2Zvcm0gKiBpblZlcnRleFBvcywgMS4pO1xcclxcbn1cIjsiLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIE5vZGUgdXNpbmcgaW4gUmVuZGVyZXJcclxuICovXHJcblxyXG5pbXBvcnQgdmVydFNoYWRlclN0ciBmcm9tICcuL3ZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgZnJhZ1NoYWRlclN0ciBmcm9tICcuL2ZyYWdtZW50Lmdsc2wnXHJcbmltcG9ydCBpZFZlcnRTaGFkZXJTdHIgZnJvbSAnLi9pZC12ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGlkRnJhZ1NoYWRlclN0ciBmcm9tICcuL2lkLWZyYWdtZW50Lmdsc2wnXHJcbmltcG9ydCB7XHJcbiAgICBjcmVhdGVQcm9ncmFtLFxyXG4gICAgY3JlYXRlQXJyYXlCdWZmZXIsXHJcbiAgICBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIsXHJcbiAgICBlbmNvZGVSZW5kZXJJZFxyXG59IGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBSZW5kZXJBdHRyaWJ1dGUsIE5vZGVBdHRyLCBOb2RlTWFuYWdlckNvbmZpZ3MgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi8uLi8uLi9ub2RlJ1xyXG5cclxuZW51bSBOb2RlQXR0cktleSB7XHJcbiAgICBURU1QTEFURSxcclxuICAgIFBPU0lUSU9OLFxyXG4gICAgUkFESVVTLFxyXG4gICAgQ09MT1IsXHJcbiAgICBTVFJPS0VfV0lEVEgsXHJcbiAgICBTVFJPS0VfQ09MT1JcclxufVxyXG5cclxuZW51bSBOb2RlSWRBdHRyS2V5IHtcclxuICAgIFRFTVBMQVRFLFxyXG4gICAgUE9TSVRJT04sXHJcbiAgICBSQURJVVMsXHJcbiAgICBDT0xPUixcclxuICAgIFNUUk9LRV9XSURUSCxcclxuICAgIFNUUk9LRV9DT0xPUixcclxuICAgIElEXHJcbn1cclxuXHJcbmNvbnN0IE5vZGVBdHRyTWFwID0ge1xyXG4gICAgcG9zaXRpb246IE5vZGVBdHRyS2V5LlBPU0lUSU9OLFxyXG4gICAgcmFkaXVzOiBOb2RlQXR0cktleS5SQURJVVMsXHJcbiAgICBmaWxsOiBOb2RlQXR0cktleS5DT0xPUixcclxuICAgIHN0cm9rZVdpZHRoOiBOb2RlQXR0cktleS5TVFJPS0VfV0lEVEgsXHJcbiAgICBzdHJva2VDb2xvcjogTm9kZUF0dHJLZXkuU1RST0tFX0NPTE9SXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJOb2RlTWFuYWdlciB7XHJcbiAgICAvLyBwcm9ncmFtXHJcbiAgICBwcml2YXRlIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0XHJcbiAgICBwcml2YXRlIGxpbWl0OiBudW1iZXJcclxuICAgIHByaXZhdGUgY291bnQgPSAwXHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXJcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXJcclxuICAgIHByaXZhdGUgcGl4ZWxSYXRpbzogbnVtYmVyXHJcbiAgICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbVxyXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGVzOiBSZW5kZXJBdHRyaWJ1dGVcclxuICAgIHByaXZhdGUgaWRQcm9ncmFtOiBXZWJHTFByb2dyYW1cclxuICAgIHByaXZhdGUgaWRBdHRyaWJ1dGVzOiBSZW5kZXJBdHRyaWJ1dGVcclxuICAgIHByaXZhdGUgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgIHByaXZhdGUgcmVuZGVySWRUb0lkOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9XHJcblxyXG4gICAgcHJpdmF0ZSBpZFRvSW5kZXg6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSByZW5kZXIgbm9kZSBtYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gZ2wgV2ViR0wgY29udGV4dFxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBuZXNzZXNhcnkgY29uZmlncyBmb3Igbm9kZSBtYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gaWRUZXh0dXJlIHRleHR1cmUgc3RvcmUgZWxlbWVudHMgaWQgb2YgZWFjaCBwaXhlbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgICAgcGFyYW1zOiBOb2RlTWFuYWdlckNvbmZpZ3MsXHJcbiAgICAgICAgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IHsgbGltaXQsIHdpZHRoLCBoZWlnaHQgfSA9IHBhcmFtc1xyXG4gICAgICAgIHRoaXMuZ2wgPSBnbFxyXG4gICAgICAgIHRoaXMubGltaXQgPSBsaW1pdFxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5waXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIodmVydFNoYWRlclN0cilcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHRoaXMuZ2wsIHZlcnRTaGFkZXJTdHIsIGZyYWdTaGFkZXJTdHIsIHRoaXMuYXR0cmlidXRlcylcclxuXHJcbiAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXMgPSBleHRyYWN0QXR0cmlidXRlc0Zyb21TaGFkZXIoaWRWZXJ0U2hhZGVyU3RyKVxyXG4gICAgICAgIHRoaXMuaWRQcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh0aGlzLmdsLCBpZFZlcnRTaGFkZXJTdHIsIGlkRnJhZ1NoYWRlclN0ciwgdGhpcy5pZEF0dHJpYnV0ZXMpXHJcbiAgICAgICAgdGhpcy5pZFRleHR1cmUgPSBpZFRleHR1cmVcclxuICAgICAgICB0aGlzLnJlbmRlcklkVG9JZCA9IHt9XHJcblxyXG4gICAgICAgIHRoaXMuaWRUb0luZGV4ID0ge31cclxuXHJcbiAgICAgICAgLy8gaW5pdCBhcnJheXNcclxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuVEVNUExBVEVdLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgIC0wLjUsIDAuMCwgMS4wLFxyXG4gICAgICAgICAgICAwLjAsIC0wLjUsIDEuMCxcclxuICAgICAgICAgICAgMC4wLCAwLjUsIDEuMCxcclxuICAgICAgICAgICAgMC41LCAwLjAsIDEuMCxcclxuICAgICAgICBdKVxyXG4gICAgICAgIC8vIFRPRE86IGNvbWJpbmUgdGhlIGZvbGxvd2luZyB0d28gbG9vcD9cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSBhdHRyLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShhdHRyLnNpemUgKiB0aGlzLmxpbWl0KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGluaXQgYnVmZmVyc1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGF0dHIuYnVmZmVyID0gY3JlYXRlQXJyYXlCdWZmZXIodGhpcy5nbCwgYXR0ci5hcnJheSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpbml0IGlkIGF0dHJpYnV0ZXMgYW5kIGJ1ZmZlcnNcclxuICAgICAgICAvLyBUT0RPOiBoYXJkY29kZSBjaGVjaywgbmVlZCByZWZhY3RvclxyXG4gICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWR4IDwgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbaWR4XSA9IHRoaXMuYXR0cmlidXRlc1tpZHhdXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSBhdHRyLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShhdHRyLnNpemUgKiB0aGlzLmxpbWl0KVxyXG4gICAgICAgICAgICAgICAgYXR0ci5idWZmZXIgPSBjcmVhdGVBcnJheUJ1ZmZlcih0aGlzLmdsLCBhdHRyLmFycmF5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaW5pdCB1bmlmb3Jtc1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbkxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3Byb2plY3Rpb24nKVxyXG4gICAgICAgIGNvbnN0IHNjYWxlTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnc2NhbGUnKVxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3RyYW5zbGF0ZScpXHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd2aWV3cG9ydCcpXHJcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpb0xvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3BpeGVsUmF0aW8nKVxyXG5cclxuICAgICAgICAvLyB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSAvLyBUT0RPOiB2aWV3cG9ydCBzZXQsIG5vdCBuZWVkZWQ/IHB1dCBoZXJlIGluIGNhc2UgYnVnIGFwcGVhclxyXG5cclxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICBjb25zdCBwcm9qZWN0aW9uID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgIDIgLyB0aGlzLndpZHRoLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAtMiAvIHRoaXMuaGVpZ2h0LCAwLFxyXG4gICAgICAgICAgICAtMSwgMSwgMVxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4M2Z2KHByb2plY3Rpb25Mb2MsIGZhbHNlLCBwcm9qZWN0aW9uKVxyXG5cclxuICAgICAgICBjb25zdCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDFdKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihzY2FsZUxvYywgc2NhbGUpXHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDBdKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdih0cmFuc2xhdGVMb2MsIHRyYW5zbGF0ZSlcclxuXHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLndpZHRoLCB0aGlzLmhlaWdodF0pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KHZpZXdwb3J0TG9jLCB2aWV3cG9ydClcclxuXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMWYocGl4ZWxSYXRpb0xvYywgdGhpcy5waXhlbFJhdGlvKVxyXG5cclxuICAgICAgICAvLyBpZCB1bmlmb3JtcywgaWRlbnRpY2FsIHRvIG5vZGVcclxuICAgICAgICAvLyBUT0RPOiBuZWVkIHJlZmFjdG9yIHRvb1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmlkUHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBpZFByb2plY3Rpb25Mb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3Byb2plY3Rpb24nKVxyXG4gICAgICAgIGNvbnN0IGlkU2NhbGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCBpZFRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndHJhbnNsYXRlJylcclxuICAgICAgICBjb25zdCBpZFZpZXdwb3J0TG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICd2aWV3cG9ydCcpXHJcbiAgICAgICAgY29uc3QgaWRQaXhlbFJhdGlvTG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZFByb2dyYW0sICdwaXhlbFJhdGlvJylcclxuXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4M2Z2KGlkUHJvamVjdGlvbkxvYywgZmFsc2UsIHByb2plY3Rpb24pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkU2NhbGVMb2MsIHNjYWxlKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFRyYW5zbGF0ZUxvYywgdHJhbnNsYXRlKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFZpZXdwb3J0TG9jLCB2aWV3cG9ydClcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0xZihpZFBpeGVsUmF0aW9Mb2MsIHRoaXMucGl4ZWxSYXRpbylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBUcmFuc2Zvcm0gaW4gUmVuZGVyIE5vZGVcclxuICAgICAqIEBwYXJhbSB0cmFuc2Zvcm0gY3VycmVudCB0cmFuc2Zvcm0ocGFuJnpvb20gY29uZGl0aW9uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcclxuICAgICAgICBjb25zdCBzY2FsZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICd0cmFuc2xhdGUnKVxyXG5cclxuICAgICAgICBjb25zdCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoW3RyYW5zZm9ybS5rLCB0cmFuc2Zvcm0ua10pXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KHNjYWxlTG9jLCBzY2FsZSlcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gbmV3IEZsb2F0MzJBcnJheShbdHJhbnNmb3JtLngsIHRyYW5zZm9ybS55XSlcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYodHJhbnNsYXRlTG9jLCB0cmFuc2xhdGUpXHJcblxyXG4gICAgICAgIC8vIGlkIHVuaWZvcm1zLCBpZGVudGljYWwgdG8gbm9kZVxyXG4gICAgICAgIC8vIFRPRE86IG5lZWQgcmVmYWN0b3IgdG9vXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgIGNvbnN0IGlkU2NhbGVMb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkUHJvZ3JhbSwgJ3NjYWxlJylcclxuICAgICAgICBjb25zdCBpZFRyYW5zbGF0ZUxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWRQcm9ncmFtLCAndHJhbnNsYXRlJylcclxuXHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGlkU2NhbGVMb2MsIHNjYWxlKVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihpZFRyYW5zbGF0ZUxvYywgdHJhbnNsYXRlKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hhbmdlIG5vZGUncyBhdHRyaWJ1dGVcclxuICAgICAqIEBwYXJhbSBub2RlIG5vZGUgZGF0YVxyXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZSBhdHRyaWJ1dGUga2V5IHRvIGNoYW5nZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2hhbmdlQXR0cmlidXRlKG5vZGU6IE5vZGUsIGF0dHJpYnV0ZTogTm9kZUF0dHIpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBOb2RlQXR0ck1hcFthdHRyaWJ1dGVdXHJcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuYXR0cmlidXRlc1trZXldXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmlkVG9JbmRleFtub2RlLmlkKCldXHJcbiAgICAgICAgbGV0IGRhdGEgPSBudWxsXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3Bvc2l0aW9uJykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBub2RlLnBvc2l0aW9uKClcclxuICAgICAgICAgICAgZGF0YSA9IFtwb3MueCwgcG9zLnldXHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGUgPT09ICdmaWxsJykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBub2RlLmZpbGwoKVxyXG4gICAgICAgICAgICBkYXRhID0gW2NvbC5yLCBjb2wuZywgY29sLmIsIGNvbC5hXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAncmFkaXVzJykge1xyXG4gICAgICAgICAgICBkYXRhID0gW25vZGUucigpICogdGhpcy5waXhlbFJhdGlvXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAnc3Ryb2tlV2lkdGgnKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBbbm9kZS5zdHJva2VXaWR0aCgpICogdGhpcy5waXhlbFJhdGlvXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAnc3Ryb2tlQ29sb3InKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IG5vZGUuc3Ryb2tlQ29sb3IoKVxyXG4gICAgICAgICAgICBkYXRhID0gW2NvbC5yLCBjb2wuZywgY29sLmIsIGNvbC5hXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vdCBzdXBwb3J0ZWQgTm9kZSBhdHRyaWJ1dGUuJylcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF0dHIuYXJyYXkuc2V0KGRhdGEsIGF0dHIuc2l6ZSAqIGluZGV4KVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICB0aGlzLmdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgYXR0ci5zaXplICogaW5kZXggKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBpbmRleCxcclxuICAgICAgICAgICAgYXR0ci5zaXplXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVmcmVzaCBhbGwgbm9kZXMgcG9zaXRpb24gYWZ0ZXIgbGF6eSB1cGRhdGVcclxuICAgICAqIEBwYXJhbSBub2RlcyBhbGwgbm9kZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWZyZXNoUG9zaXRpb24obm9kZXM6IE5vZGVbXSkge1xyXG4gICAgICAgIC8vIHNldCBhcnJheVxyXG4gICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUsIGkpID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETzogY29uc2lkZXIgbm9kZSBhbmQgcmVuZGVyIG5vZGUgYXR0cmlidXRlIG1hcHBpbmdcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBub2RlLnBvc2l0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LlBPU0lUSU9OXS5hcnJheVsyICogaV0gPSBwb3NpdGlvbi54XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5QT1NJVElPTl0uYXJyYXlbMiAqIGkgKyAxXSA9IHBvc2l0aW9uLnlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWF0dHIuaXNCdWlsZEluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5hcnJheSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIG5vZGVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNsZWFyIG5vZGUgZGF0YVxyXG4gICAgICogbm90IGFjdHVhbGx5IGVyYXNlIGRhdGEsIGJ1dCByZXNldCBjb3VudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYXJEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgbm9kZXMgZGF0YSB0byBlbmdpbmVcclxuICAgICAqIEBwYXJhbSBub2RlcyBub2RlcyBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGREYXRhKG5vZGVzOiBOb2RlW10pIHtcclxuICAgICAgICAvLyBzZXQgYXJyYXlcclxuICAgICAgICBub2Rlcy5mb3JFYWNoKChub2RlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IGNvbnNpZGVyIG5vZGUgYW5kIHJlbmRlciBub2RlIGF0dHJpYnV0ZSBtYXBwaW5nXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbm9kZS5wb3NpdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5QT1NJVElPTl0uYXJyYXlbMiAqICh0aGlzLmNvdW50ICsgaSldID0gcG9zaXRpb24ueFxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuUE9TSVRJT05dLmFycmF5WzIgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPSBwb3NpdGlvbi55XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuUkFESVVTXS5hcnJheVt0aGlzLmNvdW50ICsgaV0gPSBub2RlLnIoKSAqIHRoaXMucGl4ZWxSYXRpb1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlsbCA9IG5vZGUuZmlsbCgpXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSldID0gZmlsbC5yXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAxXSA9IGZpbGwuZ1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMl0gPSBmaWxsLmJcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LkNPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDNdID0gZmlsbC5hXHJcblxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuU1RST0tFX1dJRFRIXS5hcnJheVt0aGlzLmNvdW50ICsgaV0gPVxyXG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VXaWR0aCgpICogdGhpcy5waXhlbFJhdGlvXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHJva2VDb2xvciA9IG5vZGUuc3Ryb2tlQ29sb3IoKVxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuU1RST0tFX0NPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKV0gPSBzdHJva2VDb2xvci5yXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tOb2RlQXR0cktleS5TVFJPS0VfQ09MT1JdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMV0gPVxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3IuZ1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbTm9kZUF0dHJLZXkuU1RST0tFX0NPTE9SXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDJdID1cclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yLmJcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW05vZGVBdHRyS2V5LlNUUk9LRV9DT0xPUl0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAzXSA9XHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvci5hXHJcblxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJJZENvbG9yID0gZW5jb2RlUmVuZGVySWQoMiAqICh0aGlzLmNvdW50ICsgaSkpIC8vIE5PVEU6IG5vZGUgcmVuZGVyIGlkLCB1c2UgZXZlbiBpbnRlZ2VyXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzW05vZGVJZEF0dHJLZXkuSURdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpXSA9IHJlbmRlcklkQ29sb3IuclxyXG4gICAgICAgICAgICB0aGlzLmlkQXR0cmlidXRlc1tOb2RlSWRBdHRyS2V5LklEXS5hcnJheVs0ICogKHRoaXMuY291bnQgKyBpKSArIDFdID0gcmVuZGVySWRDb2xvci5nXHJcbiAgICAgICAgICAgIHRoaXMuaWRBdHRyaWJ1dGVzW05vZGVJZEF0dHJLZXkuSURdLmFycmF5WzQgKiAodGhpcy5jb3VudCArIGkpICsgMl0gPSByZW5kZXJJZENvbG9yLmJcclxuICAgICAgICAgICAgdGhpcy5pZEF0dHJpYnV0ZXNbTm9kZUlkQXR0cktleS5JRF0uYXJyYXlbNCAqICh0aGlzLmNvdW50ICsgaSkgKyAzXSA9IHJlbmRlcklkQ29sb3IuYVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJJZFRvSWRbMiAqICh0aGlzLmNvdW50ICsgaSldID0gbm9kZS5pZCgpXHJcbiAgICAgICAgICAgIHRoaXMuaWRUb0luZGV4W25vZGUuaWQoKV0gPSB0aGlzLmNvdW50ICsgaVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghYXR0ci5pc0J1aWxkSW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYXR0ci5idWZmZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zaXplICogdGhpcy5jb3VudCAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5hcnJheSxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIG5vZGVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaWQgYnVmZmVyIGRhdGFcclxuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5pZEF0dHJpYnV0ZXNbTm9kZUlkQXR0cktleS5JRF1cclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YShcclxuICAgICAgICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAgICAgICAgIGF0dHIuc2l6ZSAqIHRoaXMuY291bnQgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxyXG4gICAgICAgICAgICBhdHRyLmFycmF5LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiB0aGlzLmNvdW50LFxyXG4gICAgICAgICAgICBhdHRyLnNpemUgKiBub2Rlcy5sZW5ndGhcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMuY291bnQgKz0gbm9kZXMubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW5kZXIgaWQgdG8gaWRcclxuICAgICAqIEBwYXJhbSByZW5kZXJJZCByZW5kZXIgaWQgaW4gbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRJZEJ5UmVuZGVySWQocmVuZGVySWQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySWRUb0lkW3JlbmRlcklkXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhdyBub2Rlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORClcclxuICAgICAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHIuaW5kZXgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0ciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBhdHRyLmJ1ZmZlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLkZMT0FULFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2l6ZSAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgaWYgKCFhdHRyLmlzQnVpbGRJbikgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGF0dHIuaW5kZXgsIDEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXNJbnN0YW5jZWQodGhpcy5nbC5UUklBTkdMRV9TVFJJUCwgMCwgNCwgdGhpcy5jb3VudClcclxuXHJcbiAgICAgICAgLy8gZHJhdyBpZFxyXG4gICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jKHRoaXMuZ2wuT05FLCB0aGlzLmdsLlpFUk8pXHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWRQcm9ncmFtKVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHRoaXMuaWRUZXh0dXJlKVxyXG5cclxuICAgICAgICB0aGlzLmlkQXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0ci5pbmRleClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5pZEF0dHJpYnV0ZXNbTm9kZUlkQXR0cktleS5JRF1cclxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIGF0dHIuYnVmZmVyKVxyXG4gICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgICAgYXR0ci5pbmRleCxcclxuICAgICAgICAgICAgYXR0ci5zaXplLFxyXG4gICAgICAgICAgICB0aGlzLmdsLkZMT0FULFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgYXR0ci5zaXplICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcclxuICAgICAgICAgICAgMFxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYkRpdmlzb3IoYXR0ci5pbmRleCwgMSlcclxuXHJcbiAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzSW5zdGFuY2VkKHRoaXMuZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQsIHRoaXMuY291bnQpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbClcclxuXHJcbiAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORClcclxuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLk9ORSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbmluIHZlYzMgaW5WZXJ0ZXhQb3M7XFxyXFxuaW4gdmVjMiBpblBvc2l0aW9uO1xcclxcbmluIGZsb2F0IGluUmFkaXVzO1xcclxcbmluIHZlYzQgaW5GaWxsO1xcclxcbmluIGZsb2F0IGluU3Ryb2tlV2lkdGg7XFxyXFxuaW4gdmVjNCBpblN0cm9rZUNvbG9yO1xcclxcblxcclxcbm91dCB2ZWMyIHBvcztcXHJcXG5vdXQgZmxvYXQgcmFkaXVzO1xcclxcbm91dCB2ZWM0IGNvbG9yO1xcclxcbm91dCBmbG9hdCBzdHJva2VXaWR0aDtcXHJcXG5vdXQgdmVjNCBzdHJva2VDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbjtcXHJcXG51bmlmb3JtIHZlYzIgc2NhbGU7XFxyXFxudW5pZm9ybSB2ZWMyIHRyYW5zbGF0ZTtcXHJcXG51bmlmb3JtIHZlYzIgdmlld3BvcnQ7XFxyXFxuXFxyXFxudm9pZCBtYWluKHZvaWQpIHtcXHJcXG4gICAgZmxvYXQgc2l6ZSA9IGluUmFkaXVzICsgaW5TdHJva2VXaWR0aCAvIDIuO1xcclxcbiAgICByYWRpdXMgPSBpblJhZGl1cztcXHJcXG4gICAgY29sb3IgPSBpbkZpbGw7XFxyXFxuICAgIHN0cm9rZVdpZHRoID0gaW5TdHJva2VXaWR0aDtcXHJcXG4gICAgc3Ryb2tlQ29sb3IgPSBpblN0cm9rZUNvbG9yO1xcclxcbiAgICBmbG9hdCB2ZXJ0ZXhTaXplID0gc2l6ZSAqICgyLiAqIHNxcnQoMi4pKSAqIDEuNTsgLy8gTk9URTogeCAxLjUgdG8gcHJldmVudCBib3JkZXIgZmFjdG9yXFxyXFxuICAgIHBvcyA9IHNjYWxlICogaW5Qb3NpdGlvbiArIHRyYW5zbGF0ZTtcXHJcXG4gICAgbWF0MyB0cmFuc2Zvcm0gPSBtYXQzKFxcclxcbiAgICAgICAgdmVydGV4U2l6ZSwgMCwgMCxcXHJcXG4gICAgICAgIDAsIHZlcnRleFNpemUsIDAsXFxyXFxuICAgICAgICBwb3MueCwgcG9zLnksIDFcXHJcXG4gICAgKTtcXHJcXG5cXHJcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHByb2plY3Rpb24gKiB0cmFuc2Zvcm0gKiBpblZlcnRleFBvcywgMS4pO1xcclxcbn1cIjsiLCIvKipcclxuICogQGRlc2NyaXB0aW9uIHJlbmRlciBncmFwaCB1c2luZyB3ZWJnbFxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFJlbmRlck5vZGVNYW5hZ2VyIH0gZnJvbSAnLi9lbGVtZW50cy9ub2RlL3JlbmRlci1ub2RlJ1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi9ub2RlJ1xyXG5pbXBvcnQgTGluayBmcm9tICdzcmMvbGluaydcclxuaW1wb3J0IHsgUmVuZGVyTGlua01hbmFnZXIgfSBmcm9tICcuL2VsZW1lbnRzL2xpbmsvcmVuZGVyLWxpbmsnXHJcbmltcG9ydCB7IFRyYW5zZm9ybSwgUG9zaXRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBSZW5kZXJlckNvbmZpZ3MgfSBmcm9tICcuL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IGRlY29kZVJlbmRlcklkIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XHJcbiAgICBwdWJsaWMgbm9kZU1hbmFnZXI6IFJlbmRlck5vZGVNYW5hZ2VyXHJcbiAgICBwdWJsaWMgbGlua01hbmFnZXI6IFJlbmRlckxpbmtNYW5hZ2VyXHJcblxyXG4gICAgcHJpdmF0ZSBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxyXG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kQ29sb3I6IENvbG9yXHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXJcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXJcclxuICAgIHByaXZhdGUgaWRUZXh0dXJlOiBXZWJHTFRleHR1cmVcclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSByZW5kZXJlciBvYmplY3RcclxuICAgICAqIEBwYXJhbSBjb25maWdzIHtjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgYmFja2dyb3VuZENvbG9yOiBDb2xvciwgZGVmYXVsdENvbmZpZ3M6IE9iamVjdH0gY29uZmlncyBwYXNzZWQgdG8gcmVuZGVyZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZ3M6IFJlbmRlcmVyQ29uZmlncykge1xyXG4gICAgICAgIGNvbnN0IHsgY2FudmFzLCB3aWR0aCwgaGVpZ2h0LCBiYWNrZ3JvdW5kQ29sb3IsIG5vZGVMaW1pdCwgbGlua0xpbWl0IH0gPSBjb25maWdzXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5nbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKVxyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldFYgcmVxdWlyZXMgV2ViR0wyIHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXInKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvclxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdElkVGV4dHVyZSgpXHJcblxyXG4gICAgICAgIHRoaXMubm9kZU1hbmFnZXIgPSBuZXcgUmVuZGVyTm9kZU1hbmFnZXIoXHJcbiAgICAgICAgICAgIHRoaXMuZ2wsXHJcbiAgICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgbGltaXQ6IG5vZGVMaW1pdCB9LFxyXG4gICAgICAgICAgICB0aGlzLmlkVGV4dHVyZVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmxpbmtNYW5hZ2VyID0gbmV3IFJlbmRlckxpbmtNYW5hZ2VyKFxyXG4gICAgICAgICAgICB0aGlzLmdsLFxyXG4gICAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIGxpbWl0OiBsaW5rTGltaXQgfSxcclxuICAgICAgICAgICAgdGhpcy5pZFRleHR1cmVcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgY2xlYXJDb2xvciBmb3IgcmVuZGVyZXJcclxuICAgICAqIEBwYXJhbSBjb2xvciBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEJhY2tncm91bmRDb2xvcihjb2xvcjogQ29sb3IpIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjbGVhciBkYXRhIGluIHJlbmRlcmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhckRhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5jbGVhckRhdGEoKVxyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIuY2xlYXJEYXRhKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBub2RlcyB0byBub2RlIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBub2RlcyBub2RlIGRhdGEgaW4gTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTm9kZXMobm9kZXM6IE5vZGVbXSkge1xyXG4gICAgICAgIHRoaXMubm9kZU1hbmFnZXIuYWRkRGF0YShub2RlcylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBsaW5rcyB0byBsaW5rIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBsaW5rcyBsaW5rIGRhdGEgaW4gTmV0VlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTGlua3MobGlua3M6IExpbmtbXSkge1xyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIuYWRkRGF0YShsaW5rcylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5zZXRUcmFuc2Zvcm0odHJhbnNmb3JtKVxyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIuc2V0VHJhbnNmb3JtKHRyYW5zZm9ybSlcclxuICAgICAgICB0aGlzLmRyYXcoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhdyBhbGwgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5pZFRleHR1cmUpXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKDEsIDEsIDEsIDEpXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbClcclxuXHJcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5yLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5nLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5iLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvci5hXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuZ2wuY2xlYXIodGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUKVxyXG4gICAgICAgIHRoaXMubGlua01hbmFnZXIuZHJhdygpXHJcbiAgICAgICAgdGhpcy5ub2RlTWFuYWdlci5kcmF3KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBlbGVtZW50J3MgaWQgYXQgKHgsIHkpIG9mIGNhbnZhcyBpZiBleGlzdHNcclxuICAgICAqIEBwYXJhbSB4IHggcG9zXHJcbiAgICAgKiBAcGFyYW0geSB5IHBvc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SWRCeVBvc2l0aW9uKHBvc2l0aW9uOiBQb3NpdGlvbik6IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10ge1xyXG4gICAgICAgIGNvbnN0IHJlbmRlcklkID0gdGhpcy5yZWFkSWRUZXh0dXJlKHBvc2l0aW9uKVxyXG4gICAgICAgIGlmIChyZW5kZXJJZCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChyZW5kZXJJZCAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIE5PVEU6IG5vZGUgaGFzIGV2ZW4gcmVuZGVyIGlkLCBsaW5rIGhhcyBvZGQgcmVuZGVyIGlkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlSWQgPSB0aGlzLm5vZGVNYW5hZ2VyLmdldElkQnlSZW5kZXJJZChyZW5kZXJJZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlSWRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtJZHMgPSB0aGlzLmxpbmtNYW5hZ2VyLmdldElkc0J5UmVuZGVySWQocmVuZGVySWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlua0lkc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVhZCBwaXhlbCB2YWx1ZSBhdCAoeCwgeSkgb2YgdGV4dHVyZVxyXG4gICAgICogQHBhcmFtIHggeCBwb3NcclxuICAgICAqIEBwYXJhbSB5IHkgcG9zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkSWRUZXh0dXJlKHBvc2l0aW9uOiBQb3NpdGlvbik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgcmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5SRUFEX0ZSQU1FQlVGRkVSLCB0aGlzLmlkVGV4dHVyZSlcclxuICAgICAgICBjb25zdCByZWFkUGl4ZWxCdWZmZXIgPSBuZXcgVWludDhBcnJheShbMjU1LCAyNTUsIDI1NSwgMjU1XSkgLy8gLTFcclxuICAgICAgICB0aGlzLmdsLnJlYWRQaXhlbHMoXHJcbiAgICAgICAgICAgIC8vICFXYXJuaW5nOiB4IGFuZCB5IGFyZSBvcHRpb25hbCBpbiBQb3NpdGlvbiwgbmVlZCB0byBjaGVjayB0aGVtXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnggKiByYXRpbyxcclxuICAgICAgICAgICAgcG9zaXRpb24ueSAqIHJhdGlvLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICB0aGlzLmdsLlJHQkEsXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuVU5TSUdORURfQllURSxcclxuICAgICAgICAgICAgcmVhZFBpeGVsQnVmZmVyXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNvbnN0IG9iamVjdElEID0gZGVjb2RlUmVuZGVySWQocmVhZFBpeGVsQnVmZmVyKVxyXG5cclxuICAgICAgICByZXR1cm4gb2JqZWN0SURcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGluaXQgV2ViR0wgdGV4dHVyZSBmb3IgcmVjb3JkaW5nIHBvc2l0aW9uIG9mIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdElkVGV4dHVyZSgpIHtcclxuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2xcclxuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxyXG4gICAgICAgIGNvbnN0IHNjcmVlbldpZHRoID0gdGhpcy53aWR0aCAqIHBpeGVsUmF0aW9cclxuICAgICAgICBjb25zdCBzY3JlZW5IZWlnaHQgPSB0aGlzLmhlaWdodCAqIHBpeGVsUmF0aW9cclxuXHJcbiAgICAgICAgY29uc3QgZmJvID0gZ2wuY3JlYXRlRnJhbWVidWZmZXIoKVxyXG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgZmJvKVxyXG5cclxuICAgICAgICBjb25zdCBpZFRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKClcclxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBpZFRleHR1cmUpXHJcbiAgICAgICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgICAgICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgZ2wuUkdCQSxcclxuICAgICAgICAgICAgc2NyZWVuV2lkdGgsXHJcbiAgICAgICAgICAgIHNjcmVlbkhlaWdodCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgZ2wuUkdCQSxcclxuICAgICAgICAgICAgZ2wuVU5TSUdORURfQllURSxcclxuICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgIClcclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKVxyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpXHJcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbClcclxuICAgICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIGlkVGV4dHVyZSwgMClcclxuXHJcbiAgICAgICAgLy8gVE9ETzogbmVlZCBzaW1wbGlmeVxyXG4gICAgICAgIGdsLmRyYXdCdWZmZXJzKFswXS5tYXAoKHYpID0+IHYgKyBnbC5DT0xPUl9BVFRBQ0hNRU5UMCkpXHJcblxyXG4gICAgICAgIGNvbnN0IHJibyA9IGdsLmNyZWF0ZVJlbmRlcmJ1ZmZlcigpXHJcbiAgICAgICAgZ2wuYmluZFJlbmRlcmJ1ZmZlcihnbC5SRU5ERVJCVUZGRVIsIHJibylcclxuICAgICAgICBnbC5jbGVhckNvbG9yKDEsIDEsIDEsIDEpXHJcbiAgICAgICAgZ2wucmVuZGVyYnVmZmVyU3RvcmFnZShnbC5SRU5ERVJCVUZGRVIsIGdsLkRFUFRIMjRfU1RFTkNJTDgsIHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQpXHJcbiAgICAgICAgZ2wuYmluZFJlbmRlcmJ1ZmZlcihnbC5SRU5ERVJCVUZGRVIsIG51bGwpXHJcbiAgICAgICAgZ2wuZnJhbWVidWZmZXJSZW5kZXJidWZmZXIoXHJcbiAgICAgICAgICAgIGdsLkZSQU1FQlVGRkVSLFxyXG4gICAgICAgICAgICBnbC5ERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlQsXHJcbiAgICAgICAgICAgIGdsLlJFTkRFUkJVRkZFUixcclxuICAgICAgICAgICAgcmJvXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBpZiAoZ2wuY2hlY2tGcmFtZWJ1ZmZlclN0YXR1cyhnbC5GUkFNRUJVRkZFUikgIT09IGdsLkZSQU1FQlVGRkVSX0NPTVBMRVRFKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRnJhbWVidWZmZXIgZ2VuZXJhdGUgZmFpbGVkJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbClcclxuXHJcbiAgICAgICAgdGhpcy5pZFRleHR1cmUgPSBmYm9cclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIHV0aWxpdHkgZnVuY3Rpb25zIGZvciByZW5kZXJlclxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuXHJcbi8qKlxyXG4gKiBjb21waWxlIHdlYmdsIHNoYWRlclxyXG4gKiBAcGFyYW0gZ2wgV2ViR0wgaW5zdGFuY2VcclxuICogQHBhcmFtIHNoYWRlclN0ciBzaGFkZXIgZmlsZSBpbiBzdHJpbmdcclxuICogQHBhcmFtIHNoYWRlclR5cGUgdmVydGV4IG9yIGZyYWdtZW50IHNoYWRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVTaGFkZXIoXHJcbiAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgIHNoYWRlclN0cjogc3RyaW5nLFxyXG4gICAgc2hhZGVyVHlwZTogbnVtYmVyXHJcbik6IFdlYkdMU2hhZGVyIHtcclxuICAgIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihzaGFkZXJUeXBlKVxyXG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU3RyKVxyXG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpXHJcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2hhZGVyIGNvbXBpbGUgZmFpbGVkOiAnICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaGFkZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIGdlbmVyYXRlIFdlYkdMIHByb2dyYW1cclxuICogQHBhcmFtIGdsIFdlYkdMIGluc3RhbmNlXHJcbiAqIEBwYXJhbSB2ZXJ0U2hhZGVyU3RyIHZlcnRleCBzaGFkZXIgaW4gc3RyaW5nIGZvcm1hdFxyXG4gKiBAcGFyYW0gZnJhZ1NoYWRlclN0ciBmcmFnbWVudCBzaGFkZXIgaW4gc3RyaW5nIGZvcm1hdFxyXG4gKiBAcGFyYW0gYXR0cmlidXRlcyBhdHRyaWJ1dGVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbShcclxuICAgIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgdmVydFNoYWRlclN0cjogc3RyaW5nLFxyXG4gICAgZnJhZ1NoYWRlclN0cjogc3RyaW5nLFxyXG4gICAgYXR0cmlidXRlczogeyBuYW1lOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfVtdXHJcbik6IFdlYkdMUHJvZ3JhbSB7XHJcbiAgICBjb25zdCB2ZXJ0U2hhZGVyID0gY29tcGlsZVNoYWRlcihnbCwgdmVydFNoYWRlclN0ciwgZ2wuVkVSVEVYX1NIQURFUilcclxuICAgIGNvbnN0IGZyYWdTaGFkZXIgPSBjb21waWxlU2hhZGVyKGdsLCBmcmFnU2hhZGVyU3RyLCBnbC5GUkFHTUVOVF9TSEFERVIpXHJcblxyXG4gICAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKVxyXG5cclxuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBhdHRyLmluZGV4LCBhdHRyLm5hbWUpXHJcbiAgICB9KVxyXG5cclxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0U2hhZGVyKVxyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdTaGFkZXIpXHJcblxyXG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSlcclxuICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBsaW5rIHNoYWRlcnM6ICR7Z2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSl9YClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJvZ3JhbVxyXG59XHJcblxyXG4vKipcclxuICogY3JlYXRlIFdlYkdMIGFycmF5IGJ1ZmZlciBnaXZlbiBkYXRhIGFycmF5XHJcbiAqIEBwYXJhbSBnbCBXZWJHTCBjb250ZXh0XHJcbiAqIEBwYXJhbSBkYXRhIGRhdGEgdG8gc3RvcmUgaW4gYnVmZmVyXHJcbiAqIEByZXR1cm5zIFdlYkdMIGJ1ZmZlciBzdG9yZSBnaXZlbiBkYXRhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXJyYXlCdWZmZXIoZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsIGRhdGE6IEZsb2F0MzJBcnJheSk6IFdlYkdMQnVmZmVyIHtcclxuICAgIGNvbnN0IGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpXHJcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKVxyXG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGRhdGEsIGdsLkRZTkFNSUNfRFJBVylcclxuICAgIHJldHVybiBidWZmZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIGV4dHJhY3QgYXR0cmlidXRlcyBmcm9tIGEgc2hhZGVyIHNyaW5nXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGFkZXJTdHJcclxuICogQHJldHVybnMge1JlbmRlckF0dHJpYnV0ZVtdfSBhdHRyaWJ1dGVzIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEF0dHJpYnV0ZXNGcm9tU2hhZGVyKHNoYWRlclN0cjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBtYXRjaGluZ3MgPSBzaGFkZXJTdHIubWF0Y2goL2luXFxzLio7L2cpXHJcbiAgICByZXR1cm4gbWF0Y2hpbmdzLm1hcCgobWF0Y2gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IG1hdGNoLnNwbGl0KCcgJylbMl0uc2xpY2UoMCwgLTEpXHJcbiAgICAgICAgY29uc3QgdHlwZSA9IG1hdGNoLnNwbGl0KCcgJylbMV1cclxuICAgICAgICBsZXQgc2l6ZSA9IDFcclxuICAgICAgICBpZiAodHlwZS5zbGljZSgwLCAzKSA9PT0gJ3ZlYycpIHtcclxuICAgICAgICAgICAgc2l6ZSA9IE51bWJlcih0eXBlLnNsaWNlKC0xKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGlzQnVpbGRJbiA9IGZhbHNlXHJcbiAgICAgICAgaWYgKG5hbWUgPT09ICdpblZlcnRleFBvcycpIHtcclxuICAgICAgICAgICAgaXNCdWlsZEluID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBzaXplLFxyXG4gICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgaXNCdWlsZEluXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIGVuY29kZSBhIHJlbmRlciBpZCBhcyBjb2xvciB0byBwYXNzIGluIHRleHR1cmVcclxuICogQHBhcmFtIGlkIHJlbmRlciBpZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVJlbmRlcklkKGlkOiBudW1iZXIpOiBDb2xvciB7XHJcbiAgICAvLyBzcGxpdCBhIGxhcmdlIG51bWJlciBieSA4LWJpdDogaWQgPSBjb25jYXQoYSwgYiwgZywgciksIGFuZCBub3JtYWxpemUgdGhlbSBpbnRvICgwLCAxKVxyXG4gICAgY29uc3QgciA9IChpZCAmIDI1NSkgLyAyNTUuMFxyXG4gICAgY29uc3QgZyA9ICgoaWQgPj4gOCkgJiAyNTUpIC8gMjU1LjBcclxuICAgIGNvbnN0IGIgPSAoKGlkID4+IDE2KSAmIDI1NSkgLyAyNTUuMFxyXG4gICAgY29uc3QgYSA9ICgoaWQgPj4gMjQpICYgMjU1KSAvIDI1NS4wXHJcbiAgICByZXR1cm4geyByLCBnLCBiLCBhIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIGRlY29kZSBwaXhlbCB2YWx1ZSB0byBudW1iZXJcclxuICogQHBhcmFtIHBpeGVsVmFsIGEgcGl4ZWwncyB2YWx1ZSBvbiB0ZXh0dXJlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlUmVuZGVySWQocGl4ZWxWYWw6IFVpbnQ4QXJyYXkpOiBudW1iZXIge1xyXG4gICAgLy8gcGFyc2Ugbm9ybWFsaXplZCBwYXJ0cyBvZiBpZCBudW1iZXIsIGJpdCBzaGlmdCB0byBvcmlnaW4gcG9zaXRpb24gYW5kIGNvbmNhdFxyXG4gICAgY29uc3QgcmVuZGVySWQgPSBwaXhlbFZhbFswXSB8IChwaXhlbFZhbFsxXSA8PCA4KSB8IChwaXhlbFZhbFsyXSA8PCAxNikgfCAocGl4ZWxWYWxbM10gPDwgMjQpXHJcbiAgICByZXR1cm4gcmVuZGVySWRcclxufVxyXG4iLCIvKipcclxuICogVGVzdCB3aGV0aGVyIGEgc3RyaW5nIGNhbiBiZSBhIHZhbGlkIGlkIG9mIGEgTm9kZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlOiB0aGUgc3RyaW5nIHRvYmUgdGVzdGVkXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRJZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmxlbmd0aCA+IDBcclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBKaWFjaGVuZyBQYW4gPGphY2tpZWFueGlzQGdtYWlsLmNvbT5cclxuICogQGRlc2NyaXB0aW9uIE1hcDIgaXMgYSBNYXAgZGF0YSBzdHJ1Y3R1cmUgd2hpY2ggbWFwcyB0d28ga2V5cyB0byBvbmUgdmFsdWUuXHJcbiAqIEBVc2FnZSBzYW1lIHRvIE1hcCBkYXRhIHN0cnVjdHVyZSBpbiBFUzYuXHJcbiAqIEBkZXBlbmRlbmNlcyBOb25lXHJcbiAqL1xyXG5cclxuY29uc3QgSk9JTiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNylcclxuY29uc3QgaXNLZXlzID0gKGtleXM6IEFycmF5PHN0cmluZz4pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAga2V5cyBpbnN0YW5jZW9mIEFycmF5ICYmXHJcbiAgICAgICAga2V5cy5sZW5ndGggPT09IDIgJiZcclxuICAgICAgICBrZXlzLmV2ZXJ5KChrZXkpID0+IGtleSAhPT0gdW5kZWZpbmVkICYmIGtleSAhPT0gbnVsbClcclxuICAgIClcclxufVxyXG5jbGFzcyBNYXAyIHtcclxuICAgIHByaXZhdGUgbWFwID0gbmV3IE1hcCgpXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZW50cmllcz86IEFycmF5PEFycmF5PGFueT4+KSB7XHJcbiAgICAgICAgaWYgKGVudHJpZXMgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgW2tleSwgdmFsdWVdID0gZW50cnlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBzaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5zaXplXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShrZXlzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgaWYgKGlzS2V5cyhrZXlzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzLmpvaW4oSk9JTilcclxuICAgICAgICAgICAgY29uc3Qga2V5XyA9IGtleXNbMV0gKyBKT0lOICsga2V5c1swXVxyXG4gICAgICAgICAgICBsZXQgbWFwID0gdGhpcy5tYXBcclxuICAgICAgICAgICAgbWFwLmRlbGV0ZShrZXkpXHJcbiAgICAgICAgICAgIG1hcC5kZWxldGUoa2V5XylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChrZXlzOiBBcnJheTxzdHJpbmc+LCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGlzS2V5cyhrZXlzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzLmpvaW4oSk9JTilcclxuICAgICAgICAgICAgY29uc3Qga2V5XyA9IGtleXNbMV0gKyBKT0lOICsga2V5c1swXVxyXG4gICAgICAgICAgICBsZXQgbWFwID0gdGhpcy5tYXBcclxuICAgICAgICAgICAgaWYgKCFtYXAuaGFzKGtleV8pKSB7XHJcbiAgICAgICAgICAgICAgICBtYXAuc2V0KGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXAuc2V0KGtleV8sIHZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXlzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgaWYgKGlzS2V5cyhrZXlzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzLmpvaW4oSk9JTilcclxuICAgICAgICAgICAgY29uc3Qga2V5XyA9IGtleXNbMV0gKyBKT0lOICsga2V5c1swXVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSkgfHwgdGhpcy5tYXAuZ2V0KGtleV8pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzKGtleXM6IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICBpZiAoaXNLZXlzKGtleXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXMuam9pbihKT0lOKVxyXG4gICAgICAgICAgICBjb25zdCBrZXlfID0ga2V5c1sxXSArIEpPSU4gKyBrZXlzWzBdXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoa2V5KSB8fCB0aGlzLm1hcC5oYXMoa2V5XylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvckVhY2goZnVuYzogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm1hcC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0ga2V5LnNwbGl0KEpPSU4pXHJcbiAgICAgICAgICAgIGZ1bmModmFsdWUsIGtleXMsIHRoaXMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW50cmllcygpIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMubWFwLmVudHJpZXMoKV0ubWFwKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBlbnRyeVswXS5zcGxpdChKT0lOKVxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVudHJ5WzFdXHJcbiAgICAgICAgICAgIHJldHVybiBba2V5LCB2YWx1ZV1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBrZXlzKCkge1xyXG4gICAgICAgIGxldCBrZXlzID0gWy4uLnRoaXMubWFwLmtleXMoKV1cclxuICAgICAgICByZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4ga2V5LnNwbGl0KEpPSU4pKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLm1hcC52YWx1ZXMoKV1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwMlxyXG4iLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIHNvbWUgdXRpbGl0eSBmdW5jdGlvbnNcclxuICovXHJcblxyXG5pbXBvcnQgeyBOb2RlTGlua0RhdGEgfSBmcm9tICdzcmMvaW50ZXJmYWNlcydcclxuXHJcbi8qKlxyXG4gKiBnaXZlbiBhIGdyYXBoIGRhdGEgd2l0aCBwb3NpdGlvbiwgcmV0dXJuIGEgY29weSBvZiBncmFwaCwgd2l0aCBwb3NpdGlvbiB0cmFuc2Zvcm1lZCB0byBjZW50ZXIgb2YgZ2l2ZW4gc2l6ZVxyXG4gKiBAcGFyYW0gZ3JhcGggbm9kZSBsaW5rIGdyYXBoIGRhdGFcclxuICogQHBhcmFtIHNpemUgZ3JhcGggc2l6ZSAobWF4KHdpZHRoLCBoZWlnaHQpKVxyXG4gKiBAcGFyYW0gY2VudGVyWCB4IHBvcyBvZiBncmFwaCBjZW50ZXJcclxuICogQHBhcmFtIGNlbnRlclkgeSBwb3Mgb2YgZ3JhcGggY2VudGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtR3JhcGhQb3NpdGlvbihcclxuICAgIGdyYXBoOiBOb2RlTGlua0RhdGEsXHJcbiAgICBzaXplOiBudW1iZXIsXHJcbiAgICBjZW50ZXJYOiBudW1iZXIsXHJcbiAgICBjZW50ZXJZOiBudW1iZXJcclxuKSB7XHJcbiAgICBjb25zdCB0YXJnZXRHcmFwaDogTm9kZUxpbmtEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShncmFwaCkpXHJcbiAgICBjb25zdCB4cyA9IHRhcmdldEdyYXBoLm5vZGVzLm1hcCgobm9kZSkgPT4gbm9kZS54KVxyXG4gICAgY29uc3QgeXMgPSB0YXJnZXRHcmFwaC5ub2Rlcy5tYXAoKG5vZGUpID0+IG5vZGUueSlcclxuICAgIGNvbnN0IHhNaW4gPSBNYXRoLm1pbiguLi54cylcclxuICAgIGNvbnN0IHhNYXggPSBNYXRoLm1heCguLi54cylcclxuICAgIGNvbnN0IHlNaW4gPSBNYXRoLm1pbiguLi55cylcclxuICAgIGNvbnN0IHlNYXggPSBNYXRoLm1heCguLi55cylcclxuXHJcbiAgICBjb25zdCB4TWlkID0gKHhNaW4gKyB4TWF4KSAvIDJcclxuICAgIGNvbnN0IHlNaWQgPSAoeU1pbiArIHlNYXgpIC8gMlxyXG5cclxuICAgIHRhcmdldEdyYXBoLm5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICBub2RlLnggPSAoKG5vZGUueCAtIHhNaWQpIC8gKHhNYXggLSB4TWluKSkgKiBzaXplICsgY2VudGVyWFxyXG4gICAgICAgIG5vZGUueSA9ICgobm9kZS55IC0geU1pZCkgLyAoeU1heCAtIHlNaW4pKSAqIHNpemUgKyBjZW50ZXJZXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB0YXJnZXRHcmFwaFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=