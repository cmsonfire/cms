/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import Widget, { TextWidget } from './TextWidget';

describe('TextWidget', () => {
  it('should render successfully', () => {
    const ControlWidget = TextWidget.Control;
    const { baseElement } = render(
      <div>
        <ControlWidget
          forID="test"
          onChange={(e) => e}
          classNameWrapper=""
          setActiveStyle={() => null}
          setInactiveStyle={() => null}
        />
      </div>
    );
    expect(baseElement).toBeTruthy();
  });
  it('Preview should render successfully', () => {
    const PreviewWidget = TextWidget.Preview;
    const { baseElement } = render(
      <div>
        <PreviewWidget value={'test'} />
      </div>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully: functional', () => {
    const CmsWidget = Widget();
    const ControlWidget = CmsWidget.Control;
    const PreviewWidget = CmsWidget.Preview;
    const { baseElement } = render(
      <div>
        <ControlWidget
          forID="test"
          onChange={(e) => e}
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
