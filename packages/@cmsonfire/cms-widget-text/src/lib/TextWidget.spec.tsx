import { render } from '@testing-library/react';

import { TextWidget } from './TextWidget';

describe('TextWidget', () => {
  it('should render successfully', () => {
    const ControlWidget = TextWidget.controlComponent;
    const PreviewWidget = TextWidget.previewComponent;
    const { baseElement } = render(
      <div>
        <ControlWidget
          forID="test"
          onChange={(e) => e.target.value}
          classNameWrapper=""
          setActiveStyle={() => null}
          setInactiveStyle={() => null}
        />
        <PreviewWidget value={<div>test</div>} />
      </div>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should render successfully: functional', () => {
    const Widget = TextWidget.Widget();
    const ControlWidget = Widget.controlComponent;
    const PreviewWidget = Widget.previewComponent;
    const { baseElement } = render(
      <div>
        <ControlWidget
          forID="test"
          onChange={(e) => e.target.value}
          classNameWrapper=""
          setActiveStyle={() => null}
          setInactiveStyle={() => null}
        />
        <PreviewWidget value={<div>test</div>} />
      </div>
    );
    expect(baseElement).toBeTruthy();
  });
});
