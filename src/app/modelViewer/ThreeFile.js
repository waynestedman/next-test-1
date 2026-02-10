// Three.js file

import * as THREE from 'three';

const width = window.innerWidth, height = window.innerHeight;

// initialization
const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;
const scene = new THREE.Scene();

// geometry
const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

// renderer
const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );
document.getElementById('approot').appendChild( renderer.domElement );

// animation
function animate( time ) {
  mesh.rotation.x = time / 2000;
  mesh.rotation.y = time / 1000;
  renderer.render( scene, camera );
}
