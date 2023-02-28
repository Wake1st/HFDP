import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { createSignal } from '@motion-canvas/core/lib/signals';
import { Text, Rect } from '@motion-canvas/2d/lib/components';
import { all, waitFor } from '@motion-canvas/core/lib/flow';

import TextBox from '../components/TextBox';

export default makeScene2D(function* (view) {
  const title = createSignal("HFDP");
  const titleBox = { 
    rect: null as Rect, 
    text: null as Text 
  };

  const note1 = createSignal("1");
  const note1Box = { 
    rect: null as Rect, 
    text: null as Text 
  };
  const note2 = createSignal("2");
  const note2Box = { 
    rect: null as Rect, 
    text: null as Text 
  };
  const note3 = createSignal("3");
  const note3Box = { 
    rect: null as Rect, 
    text: null as Text 
  };
  
  view.add(
    <TextBox 
      refs={note3Box} 
      label={note3} 
      rectProps={{ width: 40 }} 
    />
  );
  view.add(
    <TextBox 
      refs={note2Box} 
      label={note2} 
      rectProps={{ width: 40 }} 
    />
  );
  view.add(
    <TextBox 
      refs={note1Box} 
      label={note1} 
      rectProps={{ width: 40 }} 
    />
  );
  view.add(
    <TextBox 
      refs={titleBox} 
      label={title} 
      color="#11c2d8"
      rectProps={{ width: 200 }} 
    />
  );
  
  yield* all(
    titleBox.rect.position.x(200, 1),
    titleBox.rect.width(840, 1),
  );
  title("Head First Design Patterns")
  
  yield* all(
    titleBox.rect.position.x(-400, 4),
    titleBox.rect.fill('#11c2d8', 4),
  );
  
  yield* waitFor(10);
  
  yield* all(
    titleBox.rect.position.y(-400, 4),
    note1Box.rect.position.y(-160, 4),
    note2Box.rect.position.y(80, 4),
    note3Box.rect.position.y(320, 4),
    );
    
  yield* all(
    note1Box.rect.width(800, 1),
    note1Box.rect.position.x(-300, 1),
  );
  note1("More Java Focused");
  yield* waitFor(3);
  
  yield* all(
    note2Box.rect.width(800, 1),
    note2Box.rect.position.x(-300, 1),
  );
  note2("Suggestion, not Scripture");
  yield* waitFor(3);
  
  yield* all(
    note3Box.rect.width(800, 1),
    note3Box.rect.position.x(-300, 1),
  );
  note3("The Best Design Pattern...");
  yield* waitFor(3);

  yield *waitFor(1);
});
