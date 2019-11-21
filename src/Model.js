let singletonModelInstance = null;

export default class Model {

	constructor() {
		this.scale = 100;
		this.detail = 20;
		this.color = 8000;
		this.color2 = 0;
		this.offsetX = 0;
		this.offsetY = 0;
		this.previousShapeName = "cube"
		// this.lightArr = new Map();
		// this.lightArr.set("Ambient Light", false);
		// this.lightArr.set("Point Light", false);
		// this.lightArr.set("Hemisphere Light", false);
	}

	static shapeName() {
		let selectShape = document.getElementById("shape");
		return selectShape.options[selectShape.selectedIndex].value;
	}

	static materialName() {
		let selectMaterial = document.getElementById("material");
		return selectMaterial.options[selectMaterial.selectedIndex].value;
	}

	static getModel() {
		if (singletonModelInstance === null) {
			singletonModelInstance = new Model();
		}
		return singletonModelInstance;
	}
}
