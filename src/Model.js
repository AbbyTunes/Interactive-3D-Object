let singletonModelInstance = null;

export default class Model {

	constructor() {
		this.scale = 100;
		this.detail = 20;
		this.color = 8000;
		this.offsetX = 0;
		this.offsetY = 0;
		this.previousShapeName = "cube"
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
