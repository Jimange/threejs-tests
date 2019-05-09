function init() {
	var scene = 	new THREE.Scene();
	var cam =		new THREE.PerspectiveCamera(
						45, 									//field of view
						window.innerWidth / window.innerHeight, //aspect ratio
						1, 										//near clipping plane
						1000 									//far clipping plane
					);
	var renderer =	new THREE.WebGLRenderer(); 					//other renderers available

	renderer.setSize(window.innerWidth,window.innerHeight);
	document.getElementById('render-container').appendChild(renderer.domElement);
	renderer.render(scene,camera);
}

init();