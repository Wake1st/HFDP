import { makeScene2D } from "@motion-canvas/2d";
import { createSignal } from "@motion-canvas/core/lib/signals";
import { Text, Rect } from '@motion-canvas/2d/lib/components';
import { all, waitFor } from "@motion-canvas/core/lib/flow";
import { linear } from '@motion-canvas/core/lib/tweening';

import TextBox from "../components/TextBox";

export default makeScene2D(function* (view) {
  const title = createSignal("The Best Design Pattern...");
  const titleBox = { 
    rect: null as Rect, 
    text: null as Text 
  };

  const review = createSignal("... Is No Pattern At All.");
  const reviewBox = { 
    rect: null as Rect, 
    text: null as Text 
  };
  
  view.add(
    <TextBox 
      refs={reviewBox} 
      label={review} 
      rectProps={{ 
        width: 800,
        x: -300,
        y: 320,
      }} 
    />
  );
  view.add(
    <TextBox 
      refs={titleBox} 
      label={title} 
      rectProps={{ 
        width: 800,
        x: -300,
        y: 320,
      }} 
    />
  );

  yield* waitFor(4);
  
  yield* all(
    reviewBox.rect.position.y(80, 2),
  );

  yield* all(
    reviewBox.rect.position.x(400, 20, linear),
    reviewBox.rect.fill('#11c2d8', 20),
  );
});
