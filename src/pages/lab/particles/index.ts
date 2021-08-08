import * as THREE from "three";
import { Particles as ParticleView } from "./Particles";

export class Particles {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  protected particles: ParticleView;

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

    this.particles = new ParticleView();
    requestAnimationFrame(this.animate);
  }

  resize() {
    if (!this.renderer) return;

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate = () => {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  };
}
