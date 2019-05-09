function getBox(w,h,d) 
{
	var geometry =	new THREE.BoxGeometry(w,h,d); 					//3 dimensions: w, h, d
	var mat =		new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	var mesh =		new THREE.Mesh(geometry, mat);

	return mesh;
}

function init() 
{
	var scene = 	new THREE.Scene();
	var box =		getBox(1,1,1);

	scene.add(box);

	var cam =		new THREE.PerspectiveCamera(
						45, 											//field of view
						window.innerWidth / window.innerHeight, 		//aspect ratio
						1, 												//near clipping plane
						1000 											//far clipping plane
					);
	cam.position.z = 5;
	cam.position.x = 1;
	cam.position.y = 2;

	cam.lookAt(new THREE.Vector3(0,0,0));								//points cam at target coordinates (box)

	var renderer =	new THREE.WebGLRenderer(); 							//other renderers available

	renderer.setSize(window.innerWidth,window.innerHeight);
	document.getElementById('render-container').appendChild(renderer.domElement);
	renderer.render(scene,cam);
}

init();