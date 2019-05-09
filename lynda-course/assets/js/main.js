function init() 
{
	var scene = 	new THREE.Scene();
	var box =		getBox(1,1,1);
	var plane =		getPlane(4);
	box.position.y = box.geometry.parameters.height / 2;				//gets box height and / 2
	plane.rotation.x = Math.PI / 2;										//uses different unit to deg

	scene.add(box);
	scene.add(plane);

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

function getBox(w,h,d) 
{
	var geometry =	new THREE.BoxGeometry(w,h,d); 						//3 dimensions: w, h, d
	var mat =		new THREE.MeshBasicMaterial({ color: 0xffffff });	
	var mesh =		new THREE.Mesh(geometry, mat);

	return mesh;
}

function getPlane(size) {
	var geometry =	new THREE.PlaneGeometry(size,size); 						//3 dimensions: w, h, d
	var mat =		new THREE.MeshBasicMaterial({ 
							color: 0xff0000,
							side: THREE.DoubleSide 
						});	
	var mesh =		new THREE.Mesh(geometry, mat);

	return mesh;
}

init();