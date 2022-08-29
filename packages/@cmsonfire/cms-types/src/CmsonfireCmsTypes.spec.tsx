import { render } from '@testing-library/react';

import {
  Widget,
  CmsWidgetControlProps,
  CmsWidgetPreviewProps,
  CmsWidgetControl,
  CmsWidgetPreview,
} from './CmsWidget';

const Control: CmsWidgetControl = (props: CmsWidgetControlProps<string>) => {
  return <div>{JSON.stringify(props, null, 2)}</div>;
};
const Preview: CmsWidgetPreview = (props: CmsWidgetPreviewProps<string>) => {
  const { value } = props;
  return <div>{value}</div>;
};

const TestWidget: Widget<string> = () => {
  return {
    name: 'test',
    Control,
    Preview,
  };
};

describe('CmsonfireCmsTypes', () => {
  const { name, Control, Preview } = TestWidget();
  it('Control should render successfully', () => {
    const { baseElement } = render(
      <Control
        forID={name}
        value={''}
        onChange={(v: string) => v}
        classNameWrapper={'class-name'}
        setActiveStyle={() => null}
        setInactiveStyle={() => null}
      />
    );
    expect(baseElement).toBeTruthy();
  });
  it('Preview should render successfully', () => {
    const { baseElement } = render(<Preview value={''} />);
    expect(baseElement).toBeTruthy();
  });
});
