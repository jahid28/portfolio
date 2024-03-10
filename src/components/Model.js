// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// // import * as CANNON from "cannon-es"
// // import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Updated import path

// const Model = () => {
// //   const cubeRef = useRef();

// //   const sceneRef = useRef();


//   useEffect(() => {
//     // Create a scene
//     const scene = new THREE.Scene();

//     // Create a camera
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.set(0, 2, 6);


// console.log('width is ',window.innerWidth)
//     // Create a renderer
//     const renderer = new THREE.WebGLRenderer({alpha:true});
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.getElementById("canvas").appendChild(renderer.domElement);


//     // const orbit = new THREE.OrbitControls(camera, renderer.domElement)
//     // orbit.enableZoom = false;
//     // const controls = new OrbitControls(camera, renderer.domElement);
//     // controls.enableDamping = true; // Optional: Add damping to smooth out the control movement
//     // controls.dampingFactor = 0.05;
//     // orbit.update()



//     // const geometry = new THREE.BoxGeometry(2.5, 1, 1);
//     // const material = new THREE.MeshStandardMaterial({ color: 'red' });
//     // const cube = new THREE.Mesh(geometry, material);
//     // scene.add(cube);
//     // cubeRef.current = cube;
   

//     // const axis = new THREE.AxesHelper(20)
//     // scene.add(axis)

//     const ambientLight = new THREE.AmbientLight(0x333333)
//     scene.add(ambientLight)


//     // const grid = new THREE.GridHelper()
//     // scene.add(grid)

//     const pointLight = new THREE.PointLight('white')
//     pointLight.power = 10
//     scene.add(pointLight)
//     pointLight.position.set(6, 5, 0)
//     const pointLightHelper = new THREE.PointLightHelper(pointLight)
//     // scene.add(pointLightHelper)

//     const pointLight2 = new THREE.PointLight('white')
//     pointLight2.power = 10
//     scene.add(pointLight2)
//     pointLight2.position.set(-6, 5, 0)
//     const pointLightHelper2 = new THREE.PointLightHelper(pointLight2)
//     // scene.add(pointLightHelper2)

//     const pointLight3 = new THREE.PointLight('white')
//     pointLight3.power = 10
//     scene.add(pointLight3)
//     pointLight3.position.set(0, 5, 6)
//     const pointLightHelper3 = new THREE.PointLightHelper(pointLight3)
//     // scene.add(pointLightHelper3)

//     const pointLight4 = new THREE.PointLight('white')
//     pointLight4.power = 10
//     scene.add(pointLight4)
//     pointLight4.position.set(0, 5, -6)
//     const pointLightHelper4 = new THREE.PointLightHelper(pointLight4)
//     // scene.add(pointLightHelper4)

   
//     let desk
//     const loader = new GLTFLoader();
//     loader.load('desk_model/scene.gltf', (gltf) => {
//       // Add the loaded model to the scene
//       const model = gltf.scene;
//       desk = model

//       // Apply rotation to the pivot group
//       scene.add(model);
//       model.position.set(0, -1, 0)
//       model.scale.set(.013, .013, .013)

//     });



//     // Animation loop
//     const animate = () => {
//         if(desk){
//             desk.rotation.y+=0.01
//         }
//       requestAnimationFrame(animate);
//       // controls.update();
//       renderer.render(scene, camera);
//     };

//     animate();



//     // Handle window resize
//     const handleResize = () => {
//       const newWidth = window.innerWidth;
//       const newHeight = window.innerHeight;
//       camera.aspect = newWidth / newHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(newWidth, newHeight);
//     };

//     window.addEventListener('resize', handleResize);
//     // const cannonDebugRenderer = new CannonDebugRenderer(scene, world);
//     // cannonDebugRenderer.update();
//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);




//   return (
//     <div >
//       <div  id='canvas'></div>
//     </div>
//   )
// }

// export default Model
