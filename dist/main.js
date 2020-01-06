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

/***/ "./src/Geometry.js":
/*!*************************!*\
  !*** ./src/Geometry.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Geometry {\n\n\tstatic setShape(shape, scale, detail) {\n\t\tswitch (shape) {\n\t\t\tcase \"cube\":\n\t\t\t\treturn new THREE.CubeGeometry(scale, scale, scale); // x y z\n\t\t\tcase \"sphere\":\n\t\t\t\treturn new THREE.SphereGeometry(scale, detail, detail); // x detail detil\n\t\t\tcase \"cone\":\n\t\t\t\treturn new THREE.ConeGeometry(scale, scale * 2, detail); // x y detail\n\t\t\tcase \"octahedron\":\n\t\t\t\treturn new THREE.OctahedronGeometry(scale, 0); // set\n\t\t\tcase \"tetradron\":\n\t\t\t\treturn new THREE.TetrahedronGeometry(scale, 0); // set\n\t\t\tcase \"torusKnot\":\n\t\t\t\t// console.log(`scale: ${scale}, detail: ${detail}`)\n\t\t\t\treturn new THREE.TorusKnotGeometry(scale / 1.5, detail*1.5, 20, detail); // x z  set detail\n\t\t\tdefault:\n\t\t\t\treturn new THREE.SphereGeometry(scale, detail, detail);\n\t\t}\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Geometry);\n\n\n//# sourceURL=webpack:///./src/Geometry.js?");

/***/ }),

/***/ "./src/Light.js":
/*!**********************!*\
  !*** ./src/Light.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Light; });\nlet hemisphereLight = \"Hemisphere-Light\";\nlet spotLight = \"Spot-Light\";\n\nclass Light {\n\tstatic setLight(lightId, emissiveColor=0xffffff, intensity=0.4, specularColor=0xffffff) {\n\t\tlet light;\n\t\tswitch (lightId) {\n\t\t\tcase \"Ambient-Light\":\n\t\t\t\tlight = new THREE.AmbientLight(emissiveColor, 0.4);\n\t\t\t\tbreak;\n\t\t\tcase \"Point-Light\":\n\t\t\t\tlight = new THREE.PointLight(emissiveColor, 0.3);\n\t\t\t\tbreak;\n\t\t\tcase \"Hemisphere-Light\":\n\t\t\t\tlight = new THREE.HemisphereLight(emissiveColor, specularColor, intensity);\n\t\t\t\tbreak;\n\t\t\tcase \"Spot-Light\":\n\t\t\t\tlight = new THREE.SpotLight(emissiveColor, intensity, 3000);\n\t\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\tlight = new THREE.AmbientLight(emissiveColor, 0.5);\n\t\t\t\tbreak;\n\t\t}\n\t\tlight.name = lightId;\n\t\treturn light;\n\t}\n\n\tstatic controlHemisphereLight(scene, turnOnLight, emissiveColor, intensity, specularColor) {\n\t\tLight.removeLight(scene, \"Hemisphere-Light\");\n\t\tif (turnOnLight) {\n\t\t\tintensity = intensity /= 20;\n\t\t\t// console.log(intensity)\n\t\t\tLight.addLight(scene, \"Hemisphere-Light\", emissiveColor, intensity, specularColor);\n\t\t}\n\t}\n\n\tstatic controlShadows(scene, turnOnShadows, mesh, emissiveColor, intensity) {\n\t\tlet name = \"Spot-Light\";\n\n\t\tif (turnOnShadows) {\n\t\t\tthis.removeLight(scene, name);\n\t\t\tintensity /= 10;\n\t\t\t// console.log(intensity)\n\t\t\tlet spotlight = Light.setLight(\"Spot-Light\", emissiveColor, intensity);\n\t\t\tspotlight.target = mesh;\n\t\t\tspotlight.position.y = 300;\n\t\t\tspotlight.position.x = 505;\n\t\t\tspotlight.castShadow = true;\n\t\t\tspotlight.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(100, 1, 500, 1000));\n\t\t\tspotlight.shadow.bias = 0.0001;\n\t\t\tspotlight.shadow.mapSize.width = 2048 * 2;\n\t\t\tspotlight.shadow.mapSize.height = 2048 * 2;\n\t\t\tscene.add(spotlight);\n\t\t} else {\n\t\t\tthis.removeLight(scene, name);\n\t\t}\n\t}\n\n\tstatic addLight(scene, lightId, emissiveColor, intensity, specularColor) {\n\t\tlet light = Light.setLight(lightId, emissiveColor, intensity, specularColor);\n\t\tscene.add(light);\n\t}\n\n\tstatic removeLight(scene, lightId) {\n\t\tconst selectedObject = scene.getObjectByName(lightId);\n\t\tscene.remove(selectedObject);\n\t}\n}\n\n// var light3 = new THREE.DirectionalLight(0xffffff, 0.5);\n// light3.name = \"Directional Light\";\n// // light3.target = mesh;\n\n\n//# sourceURL=webpack:///./src/Light.js?");

/***/ }),

/***/ "./src/Material.js":
/*!*************************!*\
  !*** ./src/Material.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Material {\n\n\tstatic setMaterial(material, objectColor, emissiveColor = 0xe0cdac, intensity = 0.4, metalness = 0.5) {\n\n\t\tswitch (material) {\n\t\t\tcase \"Mesh Lambert\":\n\t\t\t\treturn new THREE.MeshLambertMaterial({\n\t\t\t\t\tcolor: objectColor\n\t\t\t\t\t// side: THREE.FrontSide,\n\t\t\t\t\t// emissive: emissiveColor,\n\t\t\t\t\t// emissiveIntensity: intensity\n\t\t\t\t});\n\t\t\tcase \"Mesh Standard\":\n\t\t\t\treturn new THREE.MeshStandardMaterial({\n\t\t\t\t\tcolor: objectColor,\n\t\t\t\t\troughness: 0.5,// roughness,\n\t\t\t\t\tmetalness: metalness\n\t\t\t\t})\n\t\t\t// case \"Mesh Phong\":\n\t\t\t// \treturn new THREE.MeshPhongMaterial({\n\t\t\t// \t\tcolor: objectColor,\n\t\t\t// \t\t// specular: emissiveColor,\n\t\t\t// \t\tshininess: 30 // 50\n\t\t\t// \t\t// map: new THREE.TextureLoader().load('../src/img/wool.jpg')\n\t\t\t// \t})\n\t\t\tcase \"Line Basic\":\n\t\t\t\treturn new THREE.LineBasicMaterial({\n\t\t\t\t\tcolor: objectColor,\n\t\t\t\t\tlinewidth: 3,\n\t\t\t\t\tlinecap: 'round',\n\t\t\t\t\tlinejoin: 'round'\n\t\t\t\t});\n\t\t\tcase \"Line Dashed\":\n\t\t\t\treturn new THREE.LineDashedMaterial({\n\t\t\t\t\tcolor: objectColor,\n\t\t\t\t\tlinewidth: 3,\n\t\t\t\t\tscale: 3,\n\t\t\t\t\tdashSize: 8,\n\t\t\t\t\tgapSize: 8\n\t\t\t\t});\n\t\t\tcase \"Mesh Normal\":\n\t\t\t\treturn new THREE.MeshNormalMaterial({\n\t\t\t\t\ttransparent: true,\n\t\t\t\t\topacity: 0.5,\n\t\t\t\t\twireframe: true,\n\t\t\t\t\twireframeLinewidth: 5\n\t\t\t\t});\n\t\t\tcase \"Points\":\n\t\t\t\treturn new THREE.PointsMaterial({ color: objectColor })\n\t\t\tdefault:\n\t\t\t\tnew THREE.MeshNormalMaterial({\n\t\t\t\t\ttransparent: true,\n\t\t\t\t\topacity: 0.5,\n\t\t\t\t\twireframe: true,\n\t\t\t\t\twireframeLinewidth: 5\n\t\t\t\t});\n\t\t\t\t// return new THREE.MeshLambertMaterial({ color: 0xF3FFE2 });\n\t\t}\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Material);\n\n\n//# sourceURL=webpack:///./src/Material.js?");

/***/ }),

/***/ "./src/Model.js":
/*!**********************!*\
  !*** ./src/Model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\nlet singletonModelInstance = null;\n\nclass Model {\n\n\tconstructor() {\n\t\tthis.scale = 100;\n\t\tthis.detail = 15;\n\t\tthis.metalness = 0.3;\n\t\tthis.objectColor = 0xF3FFE2;\n\t\tthis.emissiveColor = 0xffffff;\n\t\tthis.specularColor = 0xffffff;\n\t\tthis.spotLightColor = 0xffffff;\n\t\tthis.intensity = 5;\n        this.previousShapeName = \"cube\";\n\t\tthis.hemisphereLight = false;\n\t\tthis.spotLight = false;\n\t\tthis.floor = false;\n\t}\n\n\tstatic shapeName() {\n\t\tlet selectShape = document.getElementById(\"shape\");\n\t\treturn selectShape.options[selectShape.selectedIndex].value;\n\t}\n\n\tstatic materialName() {\n\t\tlet selectMaterial = document.getElementById(\"material\");\n\t\treturn selectMaterial.options[selectMaterial.selectedIndex].value;\n\t}\n\n\tstatic checkFloor() {\n\t\tlet checkFloor = document.getElementById(\"floor\");\n\t\treturn checkFloor.checked;\n\t}\n\t\n\tstatic getModel() {\n\t\tif (singletonModelInstance === null) {\n\t\t\tsingletonModelInstance = new Model();\n\t\t}\n\t\treturn singletonModelInstance;\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/Model.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ \"./src/Model.js\");\n/* harmony import */ var _Geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Geometry */ \"./src/Geometry.js\");\n/* harmony import */ var _Material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Material */ \"./src/Material.js\");\n/* harmony import */ var _Light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Light */ \"./src/Light.js\");\n/* harmony import */ var _togglePanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./togglePanel */ \"./src/togglePanel.js\");\n\n\n\n\n\n\nvar renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });\nrenderer.setClearColor(0x000000);\nrenderer.setPixelRatio(window.devicePixelRatio);\nrenderer.shadowMap.enabled = true;\nrenderer.shadowMap.type = THREE.PCFShadowMap;\n\nconst maxWidth = window.innerWidth;\nconst maxHeight = window.innerHeight;\nrenderer.setSize(maxWidth, maxHeight);\n\n// init camera\nlet camera1 = new THREE.PerspectiveCamera(35, maxWidth / maxHeight, 300, 10000);\n// let camera2 = new THREE.OrthographicCamera(-1500, 1500, 1500, -1500, 0.1, 10000);\n\n// init scene\nlet scene = new THREE.Scene();\n\n// add lights\nlet light1 = _Light__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setLight(\"Ambient-Light\", 0xffffff, 0.3);\nscene.add(light1);\nlet light2 = _Light__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setLight(\"Point-Light\", 0xffffff, 0.3); // distance: 600\nscene.add(light2);\n\n// init floor\n// let floor = new THREE.PlaneGeometry(10000, 10000, 100, 100);\n// let floorMaterial = new THREE.MeshLambertMaterial({ color: 0xF3FFE2 });\n// let floorMesh = new THREE.Mesh(floor, floorMaterial);\n// floorMesh.name = \"floor\";\n\n// first render\nfullRender();\n\nfunction clearObjectFromScene(scene, name) {\n\tconst selectedObject = scene.getObjectByName(name);\n\tscene.remove(selectedObject);\n\tif (selectedObject) {\n\t\tif (selectedObject.geometry) {\n\t\t\tselectedObject.geometry.dispose();\n\t\t}\n\n\t\tif (selectedObject.material) {\n\t\t\tselectedObject.material.dispose();\n\t\t}\n\t}\n}\n\nfunction fullRender() {\n\n\tlet model = _Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getModel();\n\n\tlet scale = model.scale;\n\tlet detail = model.detail;\n\tlet metalness = model.metalness;\n\tlet objectColor = model.objectColor;\n\tlet emissiveColor = model.emissiveColor;\n\tlet specularColor = model.specularColor;\n\tlet intensity = model.intensity;\n\tlet isHemisphere = model.hemisphereLight;\n    let isSpotLight = model.spotLight;\n\tlet isFloor = model.floor;\n\n\t// console.log(`previous ShapeName: ${ model.previousShapeName }`)\n\tclearObjectFromScene(scene, model.previousShapeName);\n\t\n\t// console.log(`shape before change: ${ Model.shapeName() }`);\n\tlet geometry = _Geometry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setShape(_Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shapeName(), scale, detail);\n\tmodel.previousShapeName = _Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shapeName();\n\n\tlet material = _Material__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setMaterial(_Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].materialName(), objectColor, emissiveColor, intensity, metalness);\n\tmaterial.needsUpdate = true;\n\t// console.log(`material after change: ${materialName}`)\n\n\tlet mesh;\n\n\tif (material.isLineDashedMaterial) {\n\t\tmesh = new THREE.Line(geometry, material);\n\t\tmesh.computeLineDistances();\n\t} else if (material.isLineBasicMaterial) {\n\t\tmesh = new THREE.Line(geometry, material);\n\t} else {\n\t\tmesh = new THREE.Mesh(geometry, material);\n\t}\n\n\tmesh.position.set(0, 0, -500);\n\tmesh.name = _Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shapeName();\n\n\t// add light\n\t_Light__WEBPACK_IMPORTED_MODULE_3__[\"default\"].controlHemisphereLight(scene, isHemisphere, emissiveColor, intensity, specularColor);\n\n\t// toggle Floor\n\tclearObjectFromScene(scene, \"floor\");\n\n\tlet floorMesh = null;\n\tif (_Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkFloor()) {\n\t\tlet floor = new THREE.PlaneGeometry(10000, 10000, 100, 100);\n\t\tlet floorMaterial = new THREE.MeshLambertMaterial({ color: 0xd3d3d3 });\n\t\tfloorMesh = new THREE.Mesh(floor, floorMaterial);\n\t\tfloorMesh.name = \"floor\";\n\t\tfloorMesh.rotation.x = -90 * Math.PI / 180;\n\t\tfloorMesh.position.y = -100;\n\t}\n\n\t_Light__WEBPACK_IMPORTED_MODULE_3__[\"default\"].controlShadows(scene, _Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkFloor(), mesh, emissiveColor, intensity);\n\t\n\tif (_Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkFloor()) {\n\t\tfloorMesh.receiveShadow = true;\n\t\tscene.add(floorMesh);\n\t}\n\n\tmesh.castShadow = true;\n\tscene.add(mesh);\n\n\trequestAnimationFrame(render); \n\tfunction render() {\n\t\tmesh.rotation.x += 0.005;\n\t\tmesh.rotation.y += 0.005;\n\t\trenderer.render(scene, camera1);\n\t\trequestAnimationFrame(render);\n\t}\n}\n\nlet selectShape = document.getElementById(\"shape\");\nselectShape.addEventListener('change', () => {\n\tfullRender();\n});\n\nlet selectMaterial = document.getElementById(\"material\");\nselectMaterial.addEventListener('change', () => {\n\tfullRender();\n});\n\n\nlet scaleSlider = document.getElementById(\"scale\");\nscaleSlider.oninput = function () {\n\t_Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getModel().scale = parseInt(this.value);\n\tfullRender();\n}\n\nlet detailSlider = document.getElementById(\"detail\");\ndetailSlider.oninput = function () {\n\t_Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getModel().detail = this.value;\n\tfullRender();\n}\n\nlet metalnessSlider = document.getElementById(\"metalness\");\nmetalnessSlider.oninput = function () {\n\t_Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getModel().metalness = this.value * 1.0 / 10;\n\tfullRender();\n}\n\n// let roughnessSlider = document.getElementById(\"roughness\");\n// roughnessSlider.oninput = function () {\n// \tModel.getModel().roughness = this.value * 1.0 / 10;\n// \tfullRender();\n// }\n\nlet intensitySlider = document.getElementById(\"intensity\");\nintensitySlider.oninput = function () {\n\t_Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getModel().intensity = this.value * 1.0;\n\tfullRender();\n}\n\nlet objectColor = document.getElementById(\"object-color\");\nobjectColor.addEventListener('input', () => {\n\t_Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getModel().objectColor = objectColor.value;\n\tfullRender();\n})\n\nlet emissiveColor = document.getElementById(\"emissive-color\");\nemissiveColor.addEventListener('input', () => {\n\t_Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getModel().emissiveColor = emissiveColor.value;\n\tfullRender();\n})\n\nlet specularColor = document.getElementById(\"specular-color\");\nspecularColor.addEventListener('input', () => {\n\t_Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getModel().specularColor = specularColor.value;\n\tfullRender();\n})\n\n\nlet toggleHemisphereLight = document.getElementById(\"Hemisphere-Light\");\ntoggleHemisphereLight.addEventListener(\"click\", () => {\n\t_Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getModel().hemisphereLight = toggleHemisphereLight.checked;\n\tfullRender();\n});\n\nlet floorSwitch = document.getElementById(\"floor\");\nfloorSwitch.addEventListener(\"change\", () => {\n\tfullRender();\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/togglePanel.js":
/*!****************************!*\
  !*** ./src/togglePanel.js ***!
  \****************************/
/*! exports provided: togglePanel, showTab, getFirstChildWithTagName, getHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"togglePanel\", function() { return togglePanel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showTab\", function() { return showTab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFirstChildWithTagName\", function() { return getFirstChildWithTagName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHash\", function() { return getHash; });\n\nlet mainButton = document.getElementById(\"main-button\");\nlet panel = document.getElementById(\"panel\");\nlet closeButton = document.getElementById(\"close-button\");\n\n// panel.addEventListener(\"\")\n\nmainButton.addEventListener(\"click\", () => {\n\ttogglePanel();\n})\n\ncloseButton.addEventListener(\"click\", () => {\n\ttogglePanel();\n})\n\nfunction togglePanel() {\n\tif (mainButton.style.display === \"none\") {\n\t\tmainButton.style.display = \"block\";\n\t\tpanel.style.display = \"none\";\n\t} else {\n\t\tmainButton.style.display = \"none\";\n\t\tpanel.style.display = \"block\";\n\t}\n}\n\nvar tabLinks = new Array();\nvar contentDivs = new Array();\n\n// export function init() {\nwindow.onload = function init() {\n\n\t// Grab the tab links and content divs from the page\n\tvar tabListItems = document.getElementById('tabs').childNodes;\n\tfor (var i = 0; i < tabListItems.length; i++) {\n\t\tif (tabListItems[i].nodeName == \"LI\") {\n\t\t\tvar tabLink = getFirstChildWithTagName(tabListItems[i], 'A');\n\t\t\tvar id = getHash(tabLink.getAttribute('href'));\n\t\t\ttabLinks[id] = tabLink;\n\t\t\tcontentDivs[id] = document.getElementById(id);\n\t\t}\n\t}\n\n\t// Assign onclick events to the tab links, and\n\t// highlight the first tab\n\tvar i = 0;\n\n\tfor (var id in tabLinks) {\n\t\ttabLinks[id].onclick = showTab;\n\t\ttabLinks[id].onfocus = function () { this.blur() };\n\t\tif (i == 0) tabLinks[id].className = 'selected';\n\t\ti++;\n\t}\n\n\t// Hide all content divs except the first\n\tvar i = 0;\n\n\tfor (var id in contentDivs) {\n\t\tif (i != 0) contentDivs[id].className = 'tabContent hide';\n\t\ti++;\n\t}\n}\n\nfunction showTab() {\n\tvar selectedId = getHash(this.getAttribute('href'));\n\n\t// Highlight the selected tab, and dim all others.\n\t// Also show the selected content div, and hide all others.\n\tfor (var id in contentDivs) {\n\t\tif (id == selectedId) {\n\t\t\ttabLinks[id].className = 'selected';\n\t\t\tcontentDivs[id].className = 'tabContent';\n\t\t} else {\n\t\t\ttabLinks[id].className = '';\n\t\t\tcontentDivs[id].className = 'tabContent hide';\n\t\t}\n\t}\n\n\t// Stop the browser following the link\n\treturn false;\n}\n\nfunction getFirstChildWithTagName(element, tagName) {\n\tfor (var i = 0; i < element.childNodes.length; i++) {\n\t\tif (element.childNodes[i].nodeName == tagName) return element.childNodes[i];\n\t}\n}\n\nfunction getHash(url) {\n\tvar hashPos = url.lastIndexOf('#');\n\treturn url.substring(hashPos + 1);\n}\n\n\n//# sourceURL=webpack:///./src/togglePanel.js?");

/***/ })

/******/ });