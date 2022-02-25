import * as TWEEN from '@tweenjs/tweenjs';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.ConeGeometry(2, 3, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

const cone = new THREE.Mesh(geometry, material);
scene.add(cone);
//scene.add(new THREE.HemisphereLight(0x606060, 0x404040));

const light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 1, 1).normalize();
scene.add(light);
camera.position.z = 5;
camera.position.set(0, 0, 6);

//cone.material.transparent = true;
//cone.material.opacity = 0;
createjs.Tween.get(
  cone.material,
  { loop: true },
  to({ color: Math.random() * 0xffffff }, 500)
    .wait(1500)
    .to({ color: 0xffffff }, 500)
);
function animate() {
  requestAnimationFrame(animate);

  cone.rotation.x += 0.005;
  cone.rotation.y += 0.005;
  cone.rotation.z += 0.01;

  // cone.material.color.setHex(0xffffff < 1);
  TWEEN.update();
  renderer.render(scene, camera);
}
animate();
