
class Geometry {

	static addText() {

	}

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
			// case "icosahedron":
			// 	return new THREE.IcosahedronGeometry(100, 30, 16, 100);
			case "torus":
				return new THREE.TorusGeometry(100, 30, detail, detail); // set z detail detail
			case "torusKnot":
				return new THREE.TorusKnotGeometry(scale, 30, 20, detail); // x z  set detail
			case "text":
				// return new THREE.TextGeometry("my text", {
				// 	font: font,
				// 	size: scale,
				// 	height: 10,
				// 	material: 0,
				// 	bevelThickness: 1,
				// 	extrudeMaterial: 1
				// })
			case "floor":
				return 
			default:
				return new THREE.CubeGeometry(scale, scale, scale); // x y z
		}
	}
}

export default Geometry;
