import { render } from '@testing-library/react';
import Widget, { StringWidgetWidget } from './StringWidget';

describe('CmsLibTemplate', () => {
  it('should render successfully', () => {
    const ControlWidget = StringWidgetWidget.Control;
    const PreviewWidget = StringWidgetWidget.Preview;
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
    const StringWidgetWidget = Widget();
    const ControlWidget = StringWidgetWidget.Control;
    const PreviewWidget = StringWidgetWidget.Preview;
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
