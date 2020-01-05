class Material {

	static setMaterial(material, objectColor, emissiveColor = 0xe0cdac, intensity = 0.4, metalness = 0.5) {

		switch (material) {
			case "Mesh Lambert":
				return new THREE.MeshLambertMaterial({
					color: objectColor
					// side: THREE.FrontSide,
					// emissive: emissiveColor,
					// emissiveIntensity: intensity
				});
			case "Mesh Standard":
				return new THREE.MeshStandardMaterial({
					color: objectColor,
					roughness: 0.5,// roughness,
					metalness: metalness
				})
			// case "Mesh Phong":
			// 	return new THREE.MeshPhongMaterial({
			// 		color: objectColor,
			// 		// specular: emissiveColor,
			// 		shininess: 30 // 50
			// 		// map: new THREE.TextureLoader().load('../src/img/wool.jpg')
			// 	})
			case "Line Basic":
				return new THREE.LineBasicMaterial({
					color: objectColor,
					linewidth: 3,
					linecap: 'round',
					linejoin: 'round'
				});
			case "Line Dashed":
				return new THREE.LineDashedMaterial({
					color: objectColor,
					linewidth: 3,
					scale: 3,
					dashSize: 8,
					gapSize: 8
				});
			case "Mesh Normal":
				return new THREE.MeshNormalMaterial({
					transparent: true,
					opacity: 0.5,
					wireframe: true,
					wireframeLinewidth: 5
				});
			case "Points":
				return new THREE.PointsMaterial({ color: objectColor })
			default:
				new THREE.MeshNormalMaterial({
					transparent: true,
					opacity: 0.5,
					wireframe: true,
					wireframeLinewidth: 5
				});
				// return new THREE.MeshLambertMaterial({ color: 0xF3FFE2 });
		}
	}
}

export default Material;
