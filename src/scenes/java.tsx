import { makeScene2D } from "@motion-canvas/2d";
import { createSignal } from "@motion-canvas/core/lib/signals";
import { Text, Rect } from '@motion-canvas/2d/lib/components';
import { all } from "@motion-canvas/core/lib/flow";

import TextBox from "../components/TextBox";
import { linear } from "@motion-canvas/core/lib/tweening";

export default makeScene2D(function* (view) {
  const title = createSignal("More Java Focused");
  const titleBox = { 
    rect: null as Rect, 
    text: null as Text 
  };
  
  view.add(
    <TextBox 
      refs={titleBox} 
      label={title} 
      rectProps={{ 
        width: 800,
        x: -300,
        y: -160,
      }} 
    />
  );

  yield* all(
    titleBox.rect.position.x(400, 20, linear),
    titleBox.rect.fill('#11c2d8', 20),
  );
});
