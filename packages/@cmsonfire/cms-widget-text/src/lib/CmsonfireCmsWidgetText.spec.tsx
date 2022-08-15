import { render } from '@testing-library/react';

import CmsonfireCmsWidgetText from './CmsonfireCmsWidgetText';

describe('CmsonfireCmsWidgetText', () => {
  it('should render successfully', () => {
    const ControlWidget = CmsonfireCmsWidgetText.controlComponent;
    const PreviewWidget = CmsonfireCmsWidgetText.previewComponent;
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
    const Widget = CmsonfireCmsWidgetText.Widget();
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
