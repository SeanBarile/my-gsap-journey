import { Clock } from './clock';
import { Marquee } from './marquee';
import { Grid } from './grid';
import { Heading } from './heading';
import { ToolkitText } from './toolkit';

import { reveal } from './helpers/reveal';

class App {
  constructor() {
    this.clock = null;
    this.marquees = [];
    this.grid = null;
    this.heading = null;
    this.toolkit = null;
  }

  init() {
    console.log('App Initializing...');

    // Clock
    this.clock = new Clock('.hero_clock');

    // Grid
    if (this.grid) this.grid.destroy();
    this.grid = new Grid();

    // Marquee
    const marqueeElements = document.querySelectorAll('.marquee');
    marqueeElements.forEach((marquee) =>
      this.marquees.push(new Marquee(marquee))
    );

    // Heading
    this.heading = new Heading(document.querySelector('.hero_h1'));

    // ToolkitText
    if (this.toolkit) this.toolkit.destroy();
    this.toolkit = new ToolkitText('.toolkit_p');

    reveal();
  }

  handleColorModeChange() {}

  listenToMotionPreferenceChanges() {}

  start() {
    document.fonts.ready.then(() => {
      this.init();
    });
  }
}

// Instantiate and start the app
const app = new App();
app.start();
