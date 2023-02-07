import Phaser from "phaser";
import ExampleScene from "./scenes/example";

const game = new Phaser.Game({
  canvas: document.getElementById("game-root")! as HTMLCanvasElement,
  type: Phaser.WEBGL,
  width: 1280,
  height: 720,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 },
    },
  },
});

game.scene.add("example", ExampleScene, true);
