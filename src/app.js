import * as THREE from 'three';

let camera, scene, renderer, cube, material, geometry,
bulbLight, bulbMat, hemiLight,
object, loader, ballMat, cubeMat, floorMat,
container;

// Camera settings
const CAMERA_FOV = 75;  
const CAMERA_ASPECT_RATIO = window.innerWidth/window.innerHeight;
const CAMERA_CLIPPING_PLANE_NEAR = 0.1;
const CAMERA_CLIPPING_PLANE_FAR = 1000;
const CAMERA_DISTANCE = 5; 

// Renderer settings
const RENDERER_WIDTH = window.innerWidth;
const RENDERER_HEIGHT = window.innerHeight;
 
init();
animate(); 

function init() {  

	container = document.getElementById( 'container' );

	// Scene
	scene = new THREE.Scene();

	// Camera
	camera = new THREE.PerspectiveCamera( CAMERA_FOV , CAMERA_ASPECT_RATIO, CAMERA_CLIPPING_PLANE_NEAR, CAMERA_CLIPPING_PLANE_FAR );
	camera.position.z = CAMERA_DISTANCE;
	scene.add(camera);

	// Renderer
	renderer = new THREE.WebGLRenderer({
		alpha: true // sets the background to be transparent
	});
	renderer.setSize( RENDERER_WIDTH, RENDERER_HEIGHT );
	container.appendChild( renderer.domElement );

	// Lines
	material = new THREE.LineBasicMaterial( { color: 0xFECB3E } );
	geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3)

	// Cube
	geometry = new THREE.BoxGeometry( 1, 1, 1 );
	material = new THREE.MeshBasicMaterial( {color: 0xfd59d7} );
	cube = new THREE.Mesh( geometry, material );
	// cube.position.set(0, 0, 60);
	// cube.rotation.x = 0.8; //90 deg
	// cube.receiveShadow = true;
	// cube.castShadow = true;
	scene.add( cube );

	// Lights
	var ambientLight = new THREE.AmbientLight(0xffffff, 2);
	scene.add( ambientLight );


	var light = new THREE.PointLight(0xffffff, 2, 1000);
	light.position.set(50, 50, 50);
	light.castShadow = true;            // default false

	// light.shadow.mapSize.width = 512;  // default
	// light.shadow.mapSize.height = 512; // default
	// light.shadow.camera.near = 0.5;       // default
	// light.shadow.camera.far = 500      // default

	scene.add(light);


}

function onWindowResize() {

camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();

renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}	
		