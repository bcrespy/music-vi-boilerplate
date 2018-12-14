

import Creenv from '@creenv/core';

import Renderer from './renderer';


class MyProject extends Creenv {
  init() {
    super.init(); 

    super.framerate(60);

    this.renderer = new Renderer();
    this.renderer.init();
  }

  render() {
    this.renderer.render(this.elapsedTime);
  }
}


let project = new MyProject();
project.bootstrap(); 