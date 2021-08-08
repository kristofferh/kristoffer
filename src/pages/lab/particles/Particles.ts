import * as THREE from "three";

export class Particles {
  protected container: THREE.Object3D;

  constructor() {
    console.log("particles");
    this.container = new THREE.Object3D();
  }
}
