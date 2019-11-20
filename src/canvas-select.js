

class Canvas {

	constructor(canvas) {
		this.canvas = canvas
	}
	setCanvas(canvas) {
		switch (canvas) {
			
			case "canvas1":
				debugger;
				render1();
				break;
			case "canvas2":
				debugger;
				render2();
				break;
			default:
				return document.getElementById("canvas1");
		}
	}
}

// changing canvas
var selectCanvas = document.getElementById("select-canvas");
let canvasNum = selectCanvas.options[selectCanvas.selectedIndex].value;

let canvas;
let canvasIns = new Canvas();
canvas = canvasIns.setCanvas(canvasNum);

selectCanvas.addEventListener('change', () => {
	console.log(canvas);
	canvasNum = selectCanvas.options[selectCanvas.selectedIndex].value;
	canvas = canvasIns.setCanvas(canvasNum);
});






	
// if (WEBGL.isWebGLAvailable()) {

// 	// Initiate function or other initializations here
// 	animate();

// } else {

// 	var warning = WEBGL.getWebGLErrorMessage();
// 	document.getElementById('container').appendChild(warning);

// }

