let singletonModelInstance = null;

export default class Model {

	constructor() {
		this.scale = 100;
		this.detail = 15;
		this.metalness = 0.5;
		this.objectColor = 0xF3FFE2;
		this.emissiveColor = 0xffffff;
		this.specularColor = 0xffffff;
		this.spotLightColor = 0xffffff;
		this.intensity = 5;
        this.previousShapeName = "cube";
		this.hemisphereLight = false;
		this.spotLight = false;
		this.floor = false;
	}

	static shapeName() {
		let selectShape = document.getElementById("shape");
		return selectShape.options[selectShape.selectedIndex].value;
	}

	static materialName() {
		let selectMaterial = document.getElementById("material");
		return selectMaterial.options[selectMaterial.selectedIndex].value;
	}

	static checkFloor() {
		let checkFloor = document.getElementById("floor");
		return checkFloor.checked;
	}
	
	static getModel() {
		if (singletonModelInstance === null) {
			singletonModelInstance = new Model();
		}
		return singletonModelInstance;
	}
}
