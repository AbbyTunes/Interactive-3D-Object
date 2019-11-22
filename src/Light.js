let hemisphereLight = "Hemisphere-Light";


export default class Light {
	static setLight(lightId, emissiveColor = 0xffffff, specularColor=0x0808dd, intensity=0.4) {
		let light;
		switch (lightId) {
			case "Ambient-Light":
				light = new THREE.AmbientLight(emissiveColor, intensity);
				break;
			case "Point-Light":
				light = new THREE.PointLight(emissiveColor, intensity);
				break;
			case "Hemisphere-Light":
				light = new THREE.HemisphereLight(emissiveColor, specularColor, intensity);
				break;
			case "Spot-Light":
				light = new THREE.SpotLight(emissiveColor, intensity, 3000);
				break;
			default:
				light = new THREE.AmbientLight(emissiveColor, intensity);
				break;
		}
		light.name = lightId;
		return light;
	}

	static controlHemisphereLight(scene, turnOnLight, emissiveColor = 0xffffff, specularColor = 0x0808dd, intensity = 0.2) {
		Light.removeLight(scene, "Hemisphere-Light");
		if (turnOnLight) {
			Light.addLight(scene, "Hemisphere-Light", emissiveColor, specularColor, intensity);
		}
	}

	static controlShadows(scene, turnOnShadows, mesh) {
		let name = "spotlight"
		if (turnOnShadows) {
			let spotlight = Light.setLight("Spot-Light", 0xffffff);
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

	static addLight(scene, lightId, emissiveColor=0xffffff, specularColor = 0x0808dd, intensity = 0.2) {
		let light = Light.setLight(lightId, emissiveColor, specularColor, intensity);
		scene.add(light);
	}

	static removeLight(scene, lightId) {
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