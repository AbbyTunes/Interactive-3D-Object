# Magic Shape by Abby
# [Live Demo](https://abbytunes.github.io/magic-shape/)

![Imgur](https://i.imgur.com/B0b7NXc.png)

## Overview

Magic Shape is a single-page JavaScript-based DOM manipulation application.

Introduced different lighting effects in coordination with shadow, background, and camera settings.

![Imgur](https://i.imgur.com/LShpNOG.png)

## Technologies
 * JavaScript, HTML Canvas, WebGL
 * Library: THREE.js
 * CSS

## Features and Technical Challenges

### Encapsulated model state into its own entity to allow for clear interface boundaries between rendering pipeline and business logic, thereby producing maintainable, modular, and extensible code

![Imgur](https://i.imgur.com/aS1jOsA.png)

```javascript 

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
```

```javascript 
	static shapeName() {
		let selectShape = document.getElementById("shape");
		return selectShape.options[selectShape.selectedIndex].value;
	}
	
	static getModel() {
		if (singletonModelInstance === null) {
			singletonModelInstance = new Model();
		}
		return singletonModelInstance;
	}
```

### Provided user with a control panel including slide bars, on/off switches, color pickers, backed by event handlers that update internal model state

![Imgur](https://i.imgur.com/yM1AFZn.png)

```javascript 
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

### Allow users to toggle different lighting settings, including Ambient Light, Point Light, Spot Light, Hemisphere Lights. All the lighting effects will interact with different object's shape, material, camera position, floor position, shadow, and object movement.

![Imgur](https://i.imgur.com/ad4yP2U.png)

```javascript 
	static addLight(scene, lightId, emissiveColor, intensity, specularColor) {
		let light = Light.setLight(lightId, emissiveColor, intensity, specularColor);
		scene.add(light);
	}

	static removeLight(scene, lightId) {
		const selectedObject = scene.getObjectByName(lightId);
		scene.remove(selectedObject);
	}
```

### Adding a new flat geometry as the floor, and set its position to suitable place for casting shadow on in the future

```javascript 
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

	Light.controlShadows(scene, Model.checkFloor(), mesh, emissiveColor, intensity);
	
	if (Model.checkFloor()) {
		floorMesh.receiveShadow = true;
		scene.add(floorMesh);
	}

	mesh.castShadow = true;
	scene.add(mesh);
```

### render object in motion - set static canvas, object animation, and perspective camera

```javascript 
requestAnimationFrame(render); 
	function render() {
		mesh.rotation.x += 0.005;
		mesh.rotation.y += 0.005;
		renderer.render(scene, camera1);
		requestAnimationFrame(render);
	}

```