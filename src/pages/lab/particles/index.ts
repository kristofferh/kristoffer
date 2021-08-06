import * as THREE from "three";

export class Particles {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;

  constructor() {
    this.scene = new THREE.Scene();
    console.log("scene", this.scene);
    // camera
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    this.camera.position.z = 300;

    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    console.log("renderer", this.renderer);
    // clock
    const clock = new THREE.Clock(true);
    this.resize();
    console.log("clock", clock);
  }

  resize() {
    if (!this.renderer) return;

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}