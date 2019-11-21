import Model from "./Model";
import Geometry from "./Geometry";
import Material from "./Material";
import Light from "./Light";
import toggleButton from "./toggleButton";


var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

const maxWidth = window.innerWidth;
const maxHeight = window.innerHeight;
renderer.setSize(maxWidth, maxHeight);

// init camera
let camera = new THREE.PerspectiveCamera(35, maxWidth / maxHeight, 0.1, 3000);
// camera.position.set(0, 0, 0);

// init scene
let scene = new THREE.Scene();

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
	let lightArr = model.lightArr;
	console.log(lightArr)

	console.log(`previous ShapeName: ${ model.previousShapeName }`)
	clearObjectFromScene(scene, model.previousShapeName);

	Light.controlLight(scene, lightArr);

	console.log(`shape before change: ${ Model.shapeName() }`);
	let geometry = Geometry.setShape(Model.shapeName(), scale, detail);
	// Update previousShapeName so we can delete correctly next time.
	model.previousShapeName = Model.shapeName();

	// materialName = selectMaterial.options[selectMaterial.selectedIndex].value;
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

	requestAnimationFrame(render);
	function render() {
		mesh.rotation.x += 0.01;
		mesh.rotation.y += 0.01;
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

let lightArr = document.getElementsByName("light");

lightArr.forEach((light) => {
	light.addEventListener('change', () => {
		let lights = document.getElementsByName("light");
		let length = lights.length;
		for (let i = 0; i < length; i++) {
			let light = lights[i];
			Model.getModel().lightArr.set(light.id, light.checked);
		}
		fullRender();
	});
})


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

// const changeValue = (field) => {
// 	document.getElementById(field).oninput = function() {
// 		let [field] = this.value;
// 		fullRender(field);
// 	}
// }

// update(field) {
// 	return e => this.setState({ [field]: e.target.value });
// }

