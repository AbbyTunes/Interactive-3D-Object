
class Geometry {

	constructor(shape) {
		this.shape = shape
	}

	setShape(shape, scale, detail) {
		switch (shape) {
			case "cube":
				return new THREE.CubeGeometry(scale, scale, scale); // x y z
			case "sphere":
				return new THREE.SphereGeometry(scale, detail, detail); // x detail detil
			case "cone":
				return new THREE.ConeGeometry(scale, 50, detail); // x y detail
			case "octahedron":
				return new THREE.OctahedronGeometry(scale, 0); // set
			case "tetradron":
				return new THREE.TetrahedronGeometry(scale, 0); // set
			// case "icosahedron":
			// 	return new THREE.IcosahedronGeometry(100, 30, 16, 100);
			case "torus":
				return new THREE.TorusGeometry(100, 20, detail, detail); // set z detail detail
			case "torusKnot":
				return new THREE.TorusKnotGeometry(scale, 20, 20, detail); // x z  set detail
			default:
				return new THREE.CubeGeometry(scale, scale, scale); // x y z
		}
	}
}

export default Geometry;
