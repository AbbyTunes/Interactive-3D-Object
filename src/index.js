import Model from "./Model";
import Geometry from "./Geometry";
import Material from "./Material";
import Light from "./Light";
import Lighting from "./Lighting";
import toggleFloor from "./Floor";
import toggleButton from "./toggleButton";


var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

const maxWidth = window.innerWidth;
const maxHeight = window.innerHeight;
renderer.setSize(maxWidth, maxHeight);

// init camera
let camera = new THREE.PerspectiveCamera(35, maxWidth / maxHeight, 300, 10000);

// camera.position.set(0, 0, 0);

// init scene
let scene = new THREE.Scene();

// add lights
let light1 = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(light1);
let light2 = new THREE.PointLight(0xffffff, 0.4);
scene.add(light2);

// init floor
let floor = new THREE.PlaneGeometry(10000, 10000, 100, 100);

// first render
fullRender();

function clearObjectFromScene(scene, name) {
	const selectedObject = scene.getObjectByName(name);
	scene.remove(selectedObject);
}

function fullRender() {

	let model = Model.getModel();

	let scale = model.scale;
	let detail = model.detail;
	let color = model.color;
	let offsetX = model.offsetX;
	let offsetY = model.offsetY;
	// let lightArr = model.lightArr;
	// console.log(lightArr)

	console.log(`previous ShapeName: ${ model.previousShapeName }`)
	clearObjectFromScene(scene, model.previousShapeName);

	// Light.controlLight(scene, lightArr);
	// let hemisphereLight = document.getElementById("Hemisphere Light");
	// if (hemisphereLight.checked) {
	// 	Lighting.addLight(scene);
	// } else {
	// 	Lighting.removeLight(scene);
	// }
	
	console.log(`shape before change: ${ Model.shapeName() }`);
	let geometry = Geometry.setShape(Model.shapeName(), scale, detail);
	// Update previousShapeName so we can delete correctly next time.
	model.previousShapeName = Model.shapeName();

	let material = Material.setMaterial(Model.materialName(), color);
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

	mesh.position.set(offsetX, offsetY, -1000);
	mesh.name = Model.shapeName();
	scene.add(mesh);

	// add floor
	// setFloor(scene);
	
	toggleFloor(scene, floor);

	
	// toggle Light;
	// new Lighting();
	// Lighting.toggleLight(scene);


	requestAnimationFrame(render);

	function render() {
		mesh.rotation.x += 0.005;
		mesh.rotation.y += 0.005;
		renderer.render(scene, camera);
		requestAnimationFrame(render);
	}
}

let selectShape = document.getElementById("shape");
selectShape.addEventListener('change', () => {
	fullRender();
});

let selectMaterial = document.getElementById("material");
selectMaterial.addEventListener('change', () => {
	fullRender();
});

// let lightArr = document.getElementsByName("light");

// lightArr.forEach((light) => {
// 	light.addEventListener('change', () => {
// 		let lights = document.getElementsByName("light");
// 		let length = lights.length;
// 		for (let i = 0; i < length; i++) {
// 			let light = lights[i];
// 			Model.getModel().lightArr.set(light.id, light.checked);
// 		}
// 		fullRender();
// 	});
// })




let scaleSlider = document.getElementById("scale");
scaleSlider.oninput = function () {
	Model.getModel().scale = parseInt(this.value);
	fullRender();
}

let detailSlider = document.getElementById("detail");
detailSlider.oninput = function () {
	Model.getModel().detail = this.value;
	fullRender();
}

let colorSlider = document.getElementById("color");
colorSlider.oninput = function () {
	Model.getModel().color = parseInt(this.value);
	fullRender();
}

let checkboxFloor = document.getElementById("floor");
checkboxFloor.addEventListener("change", () => {
	fullRender();
})

let toggleLight = document.getElementById("Hemisphere Light");
toggleLight.addEventListener("click", () => {
	if (toggleLight.checked) {
		// toggleLight.checked = true;
		let light = new THREE.HemisphereLight(0xffffff, 0x0808dd, 0.1);
		scene.add(light);
		fullRender();
	} else {
		return null
		// toggleLight.checked = false;
		// fullRender();
	}
})


// const changeValue = (field) => {
// 	document.getElementById(field).oninput = function() {
// 		let [field] = this.value;
// 		fullRender(field);
// 	}
// }

// update(field) {
// 	return e => this.setState({ [field]: e.target.value });
// }

