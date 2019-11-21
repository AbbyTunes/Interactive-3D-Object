class Material {

	static setMaterial(material, color) {

		switch (material) {
			case "Mesh Lambert":
				return new THREE.MeshLambertMaterial({
					color: color,
					emissive: 0xff0000,
					emissiveIntensity: 0.1
				});
			case "Mesh Standard":
				return new THREE.MeshStandardMaterial({
					color: color,
					roughness: 0.5,
					metalness: 0.5
				})
			case "Mesh Phong":
				return new THREE.MeshPhongMaterial({
					color: color,
					specular: 0xff0000, // color2
					shininess: 50
					// map: new THREE.TextureLoader().load('../src/img/wool.jpg')
				})
			case "Line Basic":
				return new THREE.LineBasicMaterial({
					color: color,
					linewidth: 3,
					linecap: 'round',
					linejoin: 'round'
				});
			case "Line Dashed":
				return new THREE.LineDashedMaterial({
					color: color,
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
				return new THREE.PointsMaterial({ color: color })
			default:
				return new THREE.MeshLambertMaterial({
					color: color,
					emissive: 0xff0000, // color2
					emissiveIntensity: 0.1
				});
		}
	}
}

export default Material;
