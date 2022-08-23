import { render } from '@testing-library/react';
import Widget, { TemplateWidget } from './CmsLibTemplate';

describe('CmsLibTemplate', () => {
  it('should render successfully', () => {
    const ControlWidget = TemplateWidget.Control;
    const PreviewWidget = TemplateWidget.Preview;
    const { baseElement } = render(
      <div>
        <ControlWidget
          forID="test"
          onChange={(value) => value}
          classNameWrapper=""
          setActiveStyle={() => null}
          setInactiveStyle={() => null}
        />
        <PreviewWidget value={'test'} />
      </div>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should render successfully: functional', () => {
    const TemplateWidget = Widget();
    const ControlWidget = TemplateWidget.Control;
    const PreviewWidget = TemplateWidget.Preview;
    const { baseElement } = render(
      <div>
        <ControlWidget
          forID="test"
          onChange={(value) => value}
          classNameWrapper=""
          setActiveStyle={() => null}
          setInactiveStyle={() => null}
        />
        <PreviewWidget value={'test'} />
      </div>
    );
    expect(baseElement).toBeTruthy();
  });
});
