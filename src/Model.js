let singletonModelInstance = null;

export default class Model {

	constructor() {
		this.scale = 100;
		this.detail = 20;
		this.objectColor = 0xF3FFE2;
		this.emissiveColor = 0;
		this.offsetX = 0;
		this.offsetY = 0;
        this.previousShapeName = "cube"
        this.extraLight = false
		// this.lightArr = new Map();
		// this.lightArr.set("Ambient Light", false);
		// this.lightArr.set("Point Light", false);
		// this.lightArr.set("Hemisphere Light", false);
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

	static getObjectColor() {
		let objectColor = document.getElementById("object-color");
		return objectColor.value;
	}

	static getModel() {
		if (singletonModelInstance === null) {
			singletonModelInstance = new Model();
		}
		return singletonModelInstance;
	}
}
