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
fullRender(geometry, material, shapeName, 0, 0);

function fullRender(geometry, material, shapeName, offsetX, offsetY ) {

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

	// console.log(`shape before change: ${shapeName}`);
	var selectedObject = scene.getObjectByName(shapeName);
	scene.remove(selectedObject);

	shapeName = selectShape.options[selectShape.selectedIndex].value;
	geometry = geometryIns.setShape(shapeName);

	// console.log(`shape after change: ${shapeName}`)
	fullRender(geometry, material, shapeName, 0, 0);
});

selectMaterial.addEventListener('change', () => {

	var selectedObject = scene.getObjectByName(shapeName);
	scene.remove(selectedObject);

	materialName = selectMaterial.options[selectMaterial.selectedIndex].value;
	material = materialIns.setMaterial(materialName);
	material.needsUpdate = true;
	
	console.log(`material after change: ${materialName}`)
	console.log(material)
	fullRender(geometry, material, shapeName, 0, 0);
});
