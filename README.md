# Magic Shape by Abby
# [Live Demo](https://abbytunes.github.io/magic-shape/)

![Imgur](https://i.imgur.com/B0b7NXc.png)

## Overview

Magic Shape is a single-page JavaScript-based DOM manipulation application.

Introduced different lighting effects in coordination with shadow, background, and camera settings.

## Technologies
 * JavaScript, HTML Canvas, WebGL
 * Library: THREE.js
 * CSS

![Imgur](https://i.imgur.com/LShpNOG.png)


## Features and Technical Challenges

### Encapsulated model state into its own entity to allow for clear interface boundaries between rendering pipeline and business logic, thereby producing maintainable, modular, and extensible code

```javascript 
// index.js

	let model = Model.getModel();

	let scale = model.scale;
	let detail = model.detail;
	let metalness = model.metalness;
	let objectColor = model.objectColor;
	let emissiveColor = model.emissiveColor;
	let specularColor = model.specularColor;
	let intensity = model.intensity;
	let isHemisphere = model.hemisphereLight;
	let isSpotLight = model.spotLight;
	let isFloor = model.floor;

// ...
	static shapeName() {
		let selectShape = document.getElementById("shape");
		return selectShape.options[selectShape.selectedIndex].value;
	}

	let material = Material.setMaterial(Model.materialName(), objectColor, emissiveColor, intensity, metalness);
```

### Provided user with a control panel including slide bars, on/off switches, color pickers, backed by event handlers that update internal model state

![Imgur](https://i.imgur.com/yM1AFZn.png)

```javascript 
// index.js

	let intensitySlider = document.getElementById("intensity");
	intensitySlider.oninput = function () {
		Model.getModel().intensity = this.value * 1.0;
		fullRender();
	}

	let objectColor = document.getElementById("object-color");
	objectColor.addEventListener('input', () => {
		Model.getModel().objectColor = objectColor.value;
		fullRender();
	})
```

### Allow users to toggle different lighting settings, including Ambient Light, Point Light, Spot Light, Hemisphere Lights.


![Imgur](https://i.imgur.com/ad4yP2U.png)

```javascript
// Light.js
	static controlShadows(scene, turnOnShadows, mesh, emissiveColor, intensity) {
		let name = "Spot-Light";

		if (turnOnShadows) {
			this.removeLight(scene, name);
			intensity /= 100;
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
```

### Adding a new flat geometry as the floor, and set its position to suitable place for casting shadow on in the future

![Imgur](https://i.imgur.com/2WlopAZ.png)

```javascript 
// index.js
	clearObjectFromScene(scene, "floor");

	let floorMesh = null;
	if (Model.checkFloor()) {
		let floor = new THREE.PlaneGeometry(10000, 10000, 100, 100);
		let floorMaterial = new THREE.MeshLambertMaterial({ color: 0xd3d3d3 });
		floorMesh = new THREE.Mesh(floor, floorMaterial);
		floorMesh.name = "floor";
		floorMesh.rotation.x = -90 * Math.PI / 180;
		floorMesh.position.y = -100;
	}
```

### Render object in motion - set static canvas, object animation, and perspective camera
### All the model settings will interact with different shapes, materials, camera position, and object movement.

![Imgur](https://i.imgur.com/17SV1LC.png)

```javascript
// index.js
	requestAnimationFrame(render); 
	function render() {
		mesh.rotation.x += 0.005;
		mesh.rotation.y += 0.005;
		renderer.render(scene, camera1);
		requestAnimationFrame(render);
	}
```