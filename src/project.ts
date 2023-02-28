import { makeProject } from '@motion-canvas/core/lib';

import intro from './scenes/intro?scene';
import java from './scenes/java?scene';
import suggestion from './scenes/suggestion?scene';
import bestPattern from './scenes/bestPattern?scene';
import fin from './scenes/fin?scene';

export default makeProject({
  scenes: [
    intro,
    java,
    suggestion,
    bestPattern,
    fin,
  ],
  background: '#142424',
});
