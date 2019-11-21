
class Lighting {

	constructor() {
		this.color = 8000;
		this.color2 = 8000;
		this.intensity = 0.1;
		// this.light = new THREE.HemisphereLight(0xffffff, 0x0808dd, 0.3);
		// this.name = scene.children.HemisphereLight[name]
	}

	static toggleLight(scene) {
		let hemisphereLight = document.getElementById("Hemisphere Light");
		if (hemisphereLight.checked) {

			console.log(hemisphereLight.checked);
			// this.light[name] = "Hemisphere Light";

			let light = new THREE.HemisphereLight(0xffffff, 0x0808dd, 0.3);
			console.log(scene);
			scene.add(light);
			console.log(scene);
			// this.name = "Hemisphere Light";
			// return scene.children.HemisphereLight.name = "Hemisphere Light";
		} else {
			console.log(hemisphereLight.checked);
			console.log(scene);
			return null
			let arr = scene.children;
			return arr.filter((ele) => ele.name !== "Hemisphere Light");
			// for (let i = 0; i < arr.length; i++) {
			// 	if (arr[i] === 3) {
			// 		arr.splice(i, 1);
			// 	}
			// }
			console.log(scene);

		}
	}
// var filtered = array.filter(function (value, index, arr) {

// 	return value > 5;

// });
	// static addLight(scene) {
	// 	scene.add(this.light);
	// 	// this.light.name = "Hemisphere Light"
	// }

	// static removeLight(scene) {
	// 	return null;
	// 	// not a 3D Object, cannot remove light from scene
	// 	// selectedObject = scene.getObjectByName(this.name);
	// 	// scene.remove(selectedObject);
	// }
}

export default Lighting;
