import { makeScene2D } from "@motion-canvas/2d";
import { createSignal } from "@motion-canvas/core/lib/signals";
import { Text, Rect } from '@motion-canvas/2d/lib/components';
import { waitFor } from "@motion-canvas/core/lib/flow";

import TextBox from "../components/TextBox";

export default makeScene2D(function* (view) {
  const title = createSignal("That's All");
  const titleBox = { 
    rect: null as Rect, 
    text: null as Text 
  };
  
  view.add(
    <TextBox 
      refs={titleBox} 
      label={title}
      color="#11c2d8"
      rectProps={{ 
        width: 800,
      }} 
    />
  );

  yield* waitFor(10);
});
