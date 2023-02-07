import { GameObjects, Scene } from "phaser";

class Dot extends GameObjects.Arc {
  constructor(scene: Scene) {
    super(scene, 0, 0, 50, 0, 360, false, 0xffffff);
  }

  preUpdate(time: number, delta: number) {
    // Move our dot around using maths ✨

    this.setPosition(
      this.scene.scale.width / 2 + Math.cos(time / 500) * 100,
      this.scene.scale.height / 2 + Math.sin(time / 500) * 100
    );
  }
}

export default Dot;
