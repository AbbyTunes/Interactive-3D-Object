
class Geometry {
	constructor(shape) {
		this.shape = shape
	}
	setShape(shape) {
		switch (shape) {
			case "cube":
				return new THREE.CubeGeometry(100, 100, 100);
			case "square":
				return new THREE.PlaneGeometry(100, 100);
			default:
				return new THREE.CubeGeometry(100, 100, 100);
		}
	}
}

export default Geometry;
