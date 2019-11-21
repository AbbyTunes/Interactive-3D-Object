import Geometry from "./Geometry";
import Material from "./Material";

var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

const maxWidth = window.innerWidth;
const maxHeight = window.innerHeight;
renderer.setSize(maxWidth, maxHeight);

// init camera
var camera = new THREE.PerspectiveCamera(35, maxWidth / maxHeight, 0.1, 3000);
// camera.position.set(0, 0, 0);

// init scene
var scene = new THREE.Scene();

// init light
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);



// init geometry
var selectShape = document.getElementById("shape");
let shapeName = "cube";
let geometryIns = new Geometry();
let geometry = geometryIns.setShape(shapeName);

// init material
var selectMaterial = document.getElementById("material");
let materialName = "Mesh Lambert"
let materialIns = new Material();
let material = materialIns.setMaterial(materialName)

// first render
fullRender();

function clearObjectFromScene(name) {
	const selectedObject = scene.getObjectByName(name);
	scene.remove(selectedObject);
}

function fullRender(scale=100, detail=20, color=8000, offsetX=0, offsetY=0) {

	clearObjectFromScene(shapeName);

	console.log(`shape before change: ${shapeName}`);
	shapeName = selectShape.options[selectShape.selectedIndex].value;
	console.log(`detail after change: ${detail}`)
	geometry = geometryIns.setShape(shapeName, scale, detail);
	// console.log(`shape after change: ${shapeName}`)
	console.log(`scale after change: ${scale}`);

	materialName = selectMaterial.options[selectMaterial.selectedIndex].value;
	material = materialIns.setMaterial(materialName);
	material.needsUpdate = true;
	// console.log(`material after change: ${materialName}`)

	let mesh;

	if (material.isLineDashedMaterial) {
		mesh = new THREE.Line(geometry, material);
		mesh.computeLineDistances();
	} else if (material.isLineBasicMaterial) {
		mesh = new THREE.Line(geometry, material);
	} else {
		mesh = new THREE.Mesh(geometry, material);
	}

	// var light3 = new THREE.DirectionalLight(0xffffff, 0.5, 100);
	// light3.target = mesh;
	// scene.add(light3);

	// var light4 = new THREE.SpotLight(0xffffff, 2.0, 100);
	// light4.target = mesh;
	// scene.add(light4);

	// var light5 = new THREE.HemisphereLight(0xffffff, 0x0808dd, 0.5);
	// scene.add(light5);


	mesh.position.set(offsetX, offsetY, -1000);
	mesh.name = shapeName;

	scene.add(mesh);

	requestAnimationFrame(render);
	function render() {
		mesh.rotation.x += 0.01;
		mesh.rotation.y += 0.01;
		renderer.render(scene, camera);
		requestAnimationFrame(render);
	}
}

selectShape.addEventListener('change', () => {
	fullRender();
});

selectMaterial.addEventListener('change', () => {
	fullRender();
});

var scaleSlider = document.getElementById("scale");
scaleSlider.oninput = function () {
	let scale = this.value;
	fullRender(scale);
}

var detailSlider = document.getElementById("detail");
detailSlider.oninput = function () {
	let detail = this.value;
	fullRender(detail);
}


// const changeValue = (field) => {
// 	document.getElementById(field).oninput = function() {
// 		let [field] = this.value;
// 		fullRender(field);
// 	}
// }

// update(field) {
// 	return e => this.setState({ [field]: e.target.value });
// }

var colorSlider = document.getElementById("color");

colorSlider.oninput = function () {
	let color = parseInt(this.value);
	fullRender(color);
	// might be better off using this:
	// https://www.w3schools.com/colors/colors_picker.asp
	// fullRender({ color: parseInt(this.value) });
}

// scaleSlider.addEventListener('change', () => {
// 	// clearObjectFromScene(shapeName);

// 	shapeName = selectShape.options[selectShape.selectedIndex].value;
// 	geometry = geometryIns.setShape(shapeName, { scale: this.value });

// 	// console.log(`shape after change: ${shapeName}`)
// 	fullRender(geometry, material, shapeName);
// });

