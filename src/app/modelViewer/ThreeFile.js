// Three.js file

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const width = window.innerWidth, height = window.innerHeight;
const threeCanvas = document.getElementById('threeroot');
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');

// initialization
// Camera & scene setup
const camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 100);
camera.position.set(0.5, 5, 1);
camera.up.set(0, 0, 1); // Z up
camera.lookAt(0, 0, 0,);
const scene = new THREE.Scene();

// lighting 
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 0);
scene.add(directionalLight);

// geometry
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh( geometry, material );
mesh.position.set(3, 0, 0);
// scene.add( mesh );

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);
let bolt;

gltfLoader.load('/Unnamed-Body.gltf', (gltf) => {
  bolt = gltf.scene;
  bolt.scale.set(20, 20, 20);
  scene.add(bolt);
}, undefined, (error) => {
  console.error('An error occurred while loading the bolt model:', error);
});

// show axes helper
const axesHelper = new THREE.AxesHelper( 5 );
scene.add(axesHelper);

// renderer
const renderer = new THREE.WebGLRenderer({
  threeCanvas,
  alpha: true,
  premultipliedAlpha: false,
 });
renderer.setSize(width, height);
renderer.setAnimationLoop(animate);
threeCanvas.appendChild(renderer.domElement);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// animation
function animate( time ) {
  mesh.rotation.x = time / 2000;
  mesh.rotation.y = time / 1000;
  renderer.render( scene, camera );
}
