
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

// changing geometry
// var select = document.getElementById("select-shape");
// let shape = select.options[select.selectedIndex].value;

// let geometryIns = new Geometry();
// let geometry = geometryIns.setShape();
// console.log(`shape before change: ${shape}`);

// console.log(`geo before change: ${geometry}`);

// 	geometry.dispose();
// 	geometry = null;

// 	console.log(`after despose: ${geometry}`);

// 	// geometry = null;
// 	// console.log(`after null: ${geometry}`);
// 	let geometry2;
// 	shape = select.options[select.selectedIndex].value;
// 	// geometryIns = new Geometry();
// 	geometry2 = geometryIns.setShape(shape);

// 	console.log(shape)

// 	console.log(geometry2);
// 	// let mesh2 = new THREE.Mesh(geometry, material);

// 	fullRender(geometry2);
// 	console.log(`shape after change: ${shape}`);
	