

function toggleFloor(scene, floor) {

	let floorSwitch = document.getElementById("floor");
	let floorMaterial = new THREE.MeshLambertMaterial({ color: 0xF3FFE2 });
	let floorMesh = new THREE.Mesh(floor, floorMaterial);
	floorMesh.name = "floor";

	if (floorSwitch.checked) {
		const selectedObject = scene.getObjectByName(floor.name);
		scene.remove(selectedObject);
	} else {
		
		
		floorMesh.rotation.x = -90 * Math.PI / 180;
		floorMesh.position.y = -150;
		scene.add(floorMesh);
		return floorMesh;
	}
}

export default toggleFloor;

