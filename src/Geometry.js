
class Geometry {
	constructor(shape) {
		this.shape = shape
	}
	setShape(shape) {
		switch (shape) {
			case "cube":
				return new THREE.CubeGeometry(100, 100, 100);
			case "sphere":
				return new THREE.SphereGeometry(100, 20, 20);
			case "cone":
				return new THREE.ConeGeometry(50, 100, 100);
			case "octahedron":
				return new THREE.OctahedronGeometry(100, 0);
			case "tetradron":
				return new THREE.TetrahedronGeometry(100, 0);
			// case "icosahedron":
			// 	return new THREE.IcosahedronGeometry(100, 30, 16, 100);
			case "torus":
				return new THREE.TorusGeometry(100, 30, 60);
			case "torusKnot":
				return new THREE.TorusKnotGeometry(100, 30, 16, 20);
			default:
				return new THREE.SphereGeometry(100, 100, 100);
		}
	}
}

export default Geometry;
