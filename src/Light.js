
export default class Light {

	static setLight(lightId, intensity, color, color2) {
		let light;
		switch (lightId) {
			case "Ambient Light":
				light = new THREE.AmbientLight(color, 0.5);
				break;
			case "Point Light":
				light = new THREE.PointLight(color, 0.5);
			case "Hemisphere Light":
				light = new THREE.HemisphereLight(color, 0x0808dd, 0.3);
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


	// add spotlight

	// renderer.shadowMap.enabled = true;
	// renderer.shadowMap.type = THREE.PCFShadowMap;

	// let light4 = new THREE.SpotLight(0xFFFFFF, 0.5, 3000);
	// light4.position.y = 100;
	// light4.target = mesh;

	// light4.castShadow = true;
	// light4.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(100, 1, 500, 1000));
	// light4.shadow.bias = 0.0001;
	// light4.shadow.mapSize.width = 2048 * 2;
	// light4.shadow.mapSize.height = 2048 * 2;
	// scene.add(light4);
	// mesh.castShadow = true;
	// floorMesh.receiveShadow = true;