class Material {

	static setMaterial(material, objectColor) {

		switch (material) {
			case "Mesh Lambert":
				return new THREE.MeshLambertMaterial({
					color: objectColor,
					side: THREE.FrontSide
					// emissive: color,
					// emissiveIntensity: 0.0
				});
			case "Mesh Standard":
				return new THREE.MeshStandardMaterial({
					color: 0xF3FFE2,
					roughness: 0.5,
					metalness: 0.5
				})
			case "Mesh Phong":
				return new THREE.MeshPhongMaterial({
					color: 0xF3FFE2,
					specular: 0xff0000, // color2
					shininess: 30 // 50
					// map: new THREE.TextureLoader().load('../src/img/wool.jpg')
				})
			case "Line Basic":
				return new THREE.LineBasicMaterial({
					color: 0xF3FFE2,
					linewidth: 3,
					linecap: 'round',
					linejoin: 'round'
				});
			case "Line Dashed":
				return new THREE.LineDashedMaterial({
					color: 0xF3FFE2,
					linewidth: 3,
					scale: 3,
					dashSize: 7,
					gapSize: 7
				});
			case "Mesh Normal":
				return new THREE.MeshNormalMaterial({
					transparent: true,
					opacity: 0.5,
					wireframe: true,
					wireframeLinewidth: 5
				});
			case "Points":
				return new THREE.PointsMaterial({ color: 0xF3FFE2 })
			default:
				return new THREE.MeshLambertMaterial({
					color: 0xF3FFE2
					// emissive: color,
					// emissiveIntensity: 0.0
				});
		}
	}
}

export default Material;
