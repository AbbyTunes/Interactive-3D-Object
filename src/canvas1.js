var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas1'), antialias: true });
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

const maxWidth = window.innerWidth / 2;
const maxHeight = window.innerHeight / 2;
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
var geometry = new THREE.CubeGeometry(100, 100, 100);

// var material = new THREE.MeshBasicMaterial();
var material = new THREE.MeshLambertMaterial({ color: 0xF3FFE2 });
material.needsUpdate = true

// fullRender(geometry, material);
// function fullRender(geometry, material) {
var mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0, 0, -1000);

scene.add(mesh);

requestAnimationFrame(render);

export default function render() {
	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}
// }