import { Text, Rect, LayoutProps } from '@motion-canvas/2d/lib/components';
import { makeRef } from '@motion-canvas/core/lib/utils';
import { SignalValue, SimpleSignal } from '@motion-canvas/core/lib/signals';
import { PossibleCanvasStyle } from '@motion-canvas/2d/lib/partials';

export default ({
  refs,
  label,
  color,
  rectProps,
}: {
  refs: { 
    rect: Rect; 
    text: Text;
  },
  label: SimpleSignal<string, void>,
  color?: SignalValue<PossibleCanvasStyle>,
  rectProps?: LayoutProps,
}) => (
  <Rect
    ref={makeRef(refs, 'rect')}
    x={0}
    width={200}
    height={200}
    radius={20}
    fill={color ?? "#11c2a8"}
    {...rectProps}
  >
    <Text 
      ref={makeRef(refs, 'text')}
      text={() => label()}
      fontFamily="Monospace" 
      fontSize={48}
      fontWeight={700}
    />
  </Rect>
);
