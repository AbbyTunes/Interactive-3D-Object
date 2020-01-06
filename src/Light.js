let hemisphereLight = "Hemisphere-Light";
let spotLight = "Spot-Light";

export default class Light {
	static setLight(lightId, emissiveColor=0xffffff, intensity=0.4, specularColor=0xffffff) {
		let light;
		switch (lightId) {
			case "Ambient-Light":
				light = new THREE.AmbientLight(emissiveColor, 0.4);
				break;
			case "Point-Light":
				light = new THREE.PointLight(emissiveColor, 0.3);
				break;
			case "Hemisphere-Light":
				light = new THREE.HemisphereLight(emissiveColor, specularColor, intensity);
				break;
			case "Spot-Light":
				light = new THREE.SpotLight(emissiveColor, intensity, 3000);
				break;
			default:
				light = new THREE.AmbientLight(emissiveColor, 0.5);
				break;
		}
		light.name = lightId;
		return light;
	}

	static controlHemisphereLight(scene, turnOnLight, emissiveColor, intensity, specularColor) {
		Light.removeLight(scene, "Hemisphere-Light");
		if (turnOnLight) {
			intensity = intensity /= 20;
			// console.log(intensity)
			Light.addLight(scene, "Hemisphere-Light", emissiveColor, intensity, specularColor);
		}
	}

	static controlShadows(scene, turnOnShadows, mesh, emissiveColor, intensity) {
		let name = "Spot-Light";

		if (turnOnShadows) {
			this.removeLight(scene, name);
			intensity /= 10;
			// console.log(intensity)
			let spotlight = Light.setLight("Spot-Light", emissiveColor, intensity);
			spotlight.target = mesh;
			spotlight.position.y = 300;
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

	static addLight(scene, lightId, emissiveColor, intensity, specularColor) {
		let light = Light.setLight(lightId, emissiveColor, intensity, specularColor);
		scene.add(light);
	}

	static removeLight(scene, lightId) {
		const selectedObject = scene.getObjectByName(lightId);
		scene.remove(selectedObject);
	}
}

// var light3 = new THREE.DirectionalLight(0xffffff, 0.5);
// light3.name = "Directional Light";
// // light3.target = mesh;
