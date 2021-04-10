import * as THREE from "/scripts/three/three.module.js";
import * as gltlL from "/scripts/three/GLTFloader.js";

function init() {
  const scene = new THREE.Scene();

  scene.background = new THREE.Color(0xdddddd);

  const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.rotation.y = (45 / 180) * Math.PI;
  camera.position.x = 800;
  camera.position.y = 100;
  camera.position.z = 1000;

  const hlight = new THREE.AmbientLight(0x404040, 100);
  scene.add(hlight);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const loader = new gltlL.GLTFLoader();
  loader.load("/scenes/scene.gltf", function (gltf) {
    museum = gltf.scene.children[0];
    museum.scale.set(5, 5, 5);
    scene.add(gltf.scene);
    renderer.render(scene, camera);
  });
}
init();
