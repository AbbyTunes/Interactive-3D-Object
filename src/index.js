import Model from "./Model";
import Geometry from "./Geometry";
import Material from "./Material";
import Light from "./Light";
import Lighting from "./Lighting";
// import toggleFloor from "./Floor";
import toggleButton from "./toggleButton";


var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

const maxWidth = window.innerWidth;
const maxHeight = window.innerHeight;
renderer.setSize(maxWidth, maxHeight);

// init camera
let camera1 = new THREE.PerspectiveCamera(35, maxWidth / maxHeight, 300, 10000);
let camera2 = new THREE.OrthographicCamera(-1500, 1500, 1500, -1500, 0.1, 10000);

// camera.position.set(0, 0, 0);

// init scene
let scene = new THREE.Scene();

// add lights
let light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);
let light2 = new THREE.PointLight(0xffffff, 0.5); // 600
scene.add(light2);

// init floor
// let floor = new THREE.PlaneGeometry(10000, 10000, 100, 100);
// let floorMaterial = new THREE.MeshLambertMaterial({ color: 0xF3FFE2 });
// let floorMesh = new THREE.Mesh(floor, floorMaterial);
// floorMesh.name = "floor";

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
	let objectColor = model.objectColor;
	let offsetX = model.offsetX;
	let offsetY = model.offsetY;
	// let lightArr = model.lightArr;
	// console.log(lightArr)

	// console.log(`previous ShapeName: ${ model.previousShapeName }`)
	clearObjectFromScene(scene, model.previousShapeName);

	// Light.controlLight(scene, lightArr);
	// let hemisphereLight = document.getElementById("Hemisphere Light");
	// if (hemisphereLight.checked) {
	// 	Lighting.addLight(scene);
	// } else {
	// 	Lighting.removeLight(scene);
	// }
	
	// console.log(`shape before change: ${ Model.shapeName() }`);
	let geometry = Geometry.setShape(Model.shapeName(), scale, detail);
	model.previousShapeName = Model.shapeName();

	let material = Material.setMaterial(Model.materialName(), objectColor);
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

	// toggle Light
	// new Lighting();
	// Lighting.toggleLight(scene);

	// toggle Floor
	let floor = new THREE.PlaneGeometry(10000, 10000, 100, 100);
	let floorMaterial = new THREE.MeshLambertMaterial({ color: 0xd3d3d3 });
	let floorMesh = new THREE.Mesh(floor, floorMaterial);
	floorMesh.name = "floor";
	if (Model.checkFloor()) {
		floorMesh.rotation.x = -90 * Math.PI / 180;
		floorMesh.position.y = -150;
		scene.add(floorMesh);
	} else {
		clearObjectFromScene(scene, "floor");
	}

	// add spotlight
	// let spotLight = new THREE.SpotLight(0xffffff, 2.0, 30); // distance
	// spotLight.name = "Spot Light";
	// spotLight.target = mesh;
	// requestAnimationFrame(render); // keep

	// let delta = 0;
	// function render() {
	// 	delta += 0.01;
	// 	camera2.lookAt(spotLight.position);

	// 	camera2.position.x = Math.sin(delta) * 5000;
	// 	camera2.position.z = Math.cos(delta) * 5000;
	// 	renderer.render(scene, camera2);
	// 	requestAnimationFrame(render);
	// }

	requestAnimationFrame(render); 
	function render() {
		mesh.rotation.x += 0.005;
		mesh.rotation.y += 0.005;
		renderer.render(scene, camera1);
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

let objectColor = document.getElementById("object-color");
objectColor.addEventListener('input', () => {
	Model.getModel().objectColor = this.value;
	// Model.getModel().color = parseInt(this.value);
	fullRender();
})


let floorSwitch = document.getElementById("floor");
floorSwitch.addEventListener("change", () => {
	fullRender();
})

let toggleLight = document.getElementById("Hemisphere-Light");
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


// const changeValue = (field) => {
// 	document.getElementById(field).oninput = function() {
// 		let [field] = this.value;
// 		fullRender(field);
// 	}
// }

// update(field) {
// 	return e => this.setState({ [field]: e.target.value });
// }

