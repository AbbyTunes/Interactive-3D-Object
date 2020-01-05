
class Geometry {

	static setShape(shape, scale, detail) {
		switch (shape) {
			case "cube":
				return new THREE.CubeGeometry(scale, scale, scale); // x y z
			case "sphere":
				return new THREE.SphereGeometry(scale, detail, detail); // x detail detil
			case "cone":
				return new THREE.ConeGeometry(scale, scale * 2, detail); // x y detail
			case "octahedron":
				return new THREE.OctahedronGeometry(scale, 0); // set
			case "tetradron":
				return new THREE.TetrahedronGeometry(scale, 0); // set
			case "torusKnot":
				// console.log(`scale: ${scale}, detail: ${detail}`)
				return new THREE.TorusKnotGeometry(scale / 1.5, detail*1.5, 20, detail); // x z  set detail
			default:
				return new THREE.SphereGeometry(scale, detail, detail);
		}
	}
}

export default Geometry;
