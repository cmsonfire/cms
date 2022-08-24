import { render } from '@testing-library/react';
import Widget, { StringWidget } from './StringWidget';

describe('CmsLibTemplate', () => {
  it('should render successfully', () => {
    const ControlWidget = StringWidget.Control;
    const PreviewWidget = StringWidget.Preview;
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
    const StringWidget = Widget();
    const ControlWidget = StringWidget.Control;
    const PreviewWidget = StringWidget.Preview;
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
