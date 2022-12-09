import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer()//tool of 3gs , phan bo 1 ko gian tren webpage, noi ta add animate 

renderer.setSize(window.innerWidth, window.innerHeight); //set size cua space, o day ta muon lay toan bo chieu rong va cao cua man hinh

document.body.appendChild(renderer.domElement);//tiem domelement cuar dom renderer vao body 

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 10 );

const scene = new THREE.Scene();
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];

points.push(new THREE.Vector2(0,0));
points.push(new THREE.Vector2(10,0));
points.push(new THREE.Vector2(10,10));
points.push(new THREE.Vector2(0,10));
points.push(new THREE.Vector2(0,0));    


const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, material );
scene.add( line );
renderer.render( scene, camera );