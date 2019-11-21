
class Light {

	constructor(lightId) {
		this.lightId = lightId;
	}

	setLight(lightId, color1, color2, intensity) {
		let light;
		switch (lightId) {
			case "light1":
				light = new THREE.AmbientLight(0xffffff, 0.5);
				break;
			case "light2":
				light = new THREE.PointLight(0xffffff, 0.5, 100);
			case "light3":
				light = new THREE.HemisphereLight(0xffffff, 0x0808dd, 0.5);
			default:
				break;
		}
		light.name
	}
}

function controlLight() {
	let lights = document.getElementsByName("checkbox");
	console.log(light);
	let length = lights.length;
	for (let i = 0; i < length; i++) {
		let light = lights[i];
		if (light.checked) {
			addLight(light);
		} else {
			removeLight(light);
		}
	}
}

function addLight(light) {
	scene.add(light);
}

function removeLight(light) {
	clearObjectFromScene(light.name);
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