import { engine } from "./engine.mjs";
import * as CANNON from "cannon-es";
import * as THREE from "three.js";
import { materials } from "./asset_loading/assets_3d.mjs";
let ballMesh, ballBody;

function createBall(x, y, z) {
    // Ball (Physics)
    const ballMaterialPhysics = new CANNON.Material(); // Create a new material
    ballMaterialPhysics.friction = 1;
    ballMaterialPhysics.restitution = 5; // Set the restitution coefficient (adjust as needed)
    ballMaterialPhysics.friction = 0.2;
    const ballShape = new CANNON.Sphere(1); // Radius 1
    ballBody = new CANNON.Body({
      mass: 5,
      position: new CANNON.Vec3(x, y, z),
      shape: ballShape,
      material: ballMaterialPhysics,
    });
    
    ballBody.linearDamping = 0.4;
    engine.cannonjs_world.addBody(ballBody);
  
    const ballGeometry = new THREE.SphereGeometry(1, 32, 32);
    ballMesh = new THREE.Mesh(ballGeometry, materials.GolfBall);
  
    window.ballMesh = ballMesh; 
    window.ballBody = ballBody; 
  
    ballMesh.position.set(x, y, z);
    engine.scene.add(ballMesh);
  }

export {ballMesh, ballBody, createBall};
