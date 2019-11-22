let extraLightName = "extra-light";


export default class Light {
	static setLight(lightId, color, name) {
		let light;
		switch (lightId) {
			case "Ambient Light":
				light = new THREE.AmbientLight(color, 0.5);
				break;
			case "Point Light":
				light = new THREE.PointLight(color, 0.5);
				break;
			case "Hemisphere Light":
				light = new THREE.HemisphereLight(color, 0x0808dd, 0.3);
				break;
			case "Spotlight":
				light = new THREE.SpotLight(color, 4.0, 3000);
				break;
			default:
				break;
		}
		light.name = name;
		return light;
	}

	static controlLight(scene, turnOnLight) {
		if (turnOnLight) {
			Light.addLight(scene, "Hemisphere Light", 0xffffff, extraLightName, );
		} else {
			Light.removeLight(scene, extraLightName);
		}
	}

	static controlShadows(scene, turnOnShadows, mesh, floorMesh) {
		let name = "spotlight"
		if (turnOnShadows) {
			let spotlight = Light.setLight("Spotlight", 0xffffff, name);
			spotlight.target = mesh;
			spotlight.position.y = 250;
			spotlight.position.x = 505;
			spotlight.castShadow = true;
			spotlight.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(100, 1, 500, 1000));
			spotlight.shadow.bias = 0.0001;
			spotlight.shadow.mapSize.width = 2048 * 2;
			spotlight.shadow.mapSize.height = 2048 * 2;
			scene.add(spotlight);
		} else {
			this.removeLight(scene, name);
		}
	}

	static addLight(scene, lightId, color, name) {
		console.log("adding light")
		let light = Light.setLight(lightId, color, name);
		scene.add(light);
	}

	static removeLight(scene, name) {
		console.log("removing light")
		const selectedObject = scene.getObjectByName(name);
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