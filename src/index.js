import Geometry from "./Geometry";

var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

const maxWidth = window.innerWidth;
const maxHeight = window.innerHeight;
renderer.setSize(maxWidth, maxHeight);

// add a camera
var camera = new THREE.PerspectiveCamera(35, maxWidth / maxHeight, 0.1, 3000);
// camera.position.set(0, 0, 0);
var scene = new THREE.Scene();

//adding light
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

// adding geometry
// var geometry = new THREE.CubeGeometry(100, 100, 100);

// changing geometry

var selectShape = document.getElementById("shape");
let shape = selectShape.options[selectShape.selectedIndex].value;

let geometryIns = new Geometry();
let geometry = geometryIns.setShape();

// var material = new THREE.MeshBasicMaterial();
var material = new THREE.MeshLambertMaterial({ color: 0xF3FFE2 });
material.needsUpdate = true

// fullRender(geometry, material);
// function fullRender(geometry, material) {
var mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0, 0, -1000);
mesh.name = "sphere";

scene.add(mesh);

requestAnimationFrame(render);

function render() {
	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}
// }

selectShape.addEventListener('change', () => {
	
	console.log(`shape before change: ${shape}`);
	// console.log(`name before change: ${mesh.name}`)

	var selectedObject = scene.getObjectByName(shape);
	scene.remove(selectedObject);
	
	shape = selectShape.options[selectShape.selectedIndex].value;
	geometry = geometryIns.setShape(shape);
	console.log(`shape after change: ${shape}`)

	// try to rerender the object
	var mesh = new THREE.Mesh(geometry, material);
	
	// set an offset position
	mesh.position.set(20, 20, -1000);
	console.log(`created new mesh: ${mesh}`);
	mesh.name = shape;
	console.log(`new mesh name: ${mesh.name}`);
	scene.add(mesh);

	requestAnimationFrame(render);

	function render() {
		mesh.rotation.x += 0.01;
		mesh.rotation.y += 0.01;
		renderer.render(scene, camera);
		requestAnimationFrame(render);
	}
})

