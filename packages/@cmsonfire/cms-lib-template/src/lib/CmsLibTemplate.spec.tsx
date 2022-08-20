import { render } from '@testing-library/react';
import { CmsLibTemplate } from './CmsLibTemplate';

describe('CmsLibTemplate', () => {
  it('should render successfully', () => {
    const ControlWidget = CmsLibTemplate.controlComponent;
    const PreviewWidget = CmsLibTemplate.previewComponent;
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
    const Widget = CmsLibTemplate.Widget();
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
