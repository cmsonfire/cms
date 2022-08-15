import { render } from '@testing-library/react';
import CmsonfireCmsLibTemplate from './CmsonfireCmsLibTemplate';

describe('CmsonfireCmsLibTemplate', () => {
  it('should render successfully', () => {
    const ControlWidget = CmsonfireCmsLibTemplate.controlComponent;
    const PreviewWidget = CmsonfireCmsLibTemplate.previewComponent;
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
    const Widget = CmsonfireCmsLibTemplate.Widget();
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
