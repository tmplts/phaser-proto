import { Scene } from "phaser";
import Dot from "../objects/dot";

class ExampleScene extends Scene {
  create() {
    // Runs on scene load
    console.log("Starting example scene");

    // Create our dot
    this.add.existing(new Dot(this));
  }
}

export default ExampleScene;
