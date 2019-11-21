
export default class Light {

	static setLight(lightId, color1, color2, intensity) {
		let light;
		switch (lightId) {
			case "Ambient Light":
				light = new THREE.AmbientLight(0xffffff, 1);
				break;
			case "Point Light":
				light = new THREE.PointLight(0xffffff, 1, 100);
			case "Hemisphere Light":
				light = new THREE.HemisphereLight(0xffffff, 0x0808dd, 1);
			default:
				break;
		}
		light.name = lightId;
		return light;
	}

	static controlLight(scene, lightArr) {
		for (let [key, value] of lightArr) {
			if (value) {
				Light.addLight(scene, key);
			} else {
				Light.removeLight(scene, key);
			}
		};
	}

	static addLight(scene, lightId) {
		console.log("adding light")
		let light = Light.setLight(lightId);
		scene.add(light);
	}

	static removeLight(scene, lightId) {
		console.log("removing light")
		const selectedObject = scene.getObjectByName(lightId);
		scene.remove(selectedObject);
	}
}

// var new THREE.AmbientLight(0xffffff, 0.5); // intensity
// light1.name = "Ambient Light";

// var light2 = new THREE.PointLight(0xffffff, 0.5, 100); // distance
// light2.name = "Point Light";

// var light3 = new THREE.HemisphereLight(0xffffff, 0x0808dd, 0.5);
// light3.name = "Hemisphere Light";

// var light3 = new THREE.DirectionalLight(0xffffff, 0.5);
// light3.name = "Directional Light";
// // light3.target = mesh;

// var light4 = new THREE.SpotLight(0xffffff, 2.0, 100); // distance
// light4.name = "Spot Light";
// // light4.target = mesh;