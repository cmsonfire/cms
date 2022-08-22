import { render } from '@testing-library/react';

import {
  ControlWidget,
  CmsWidgetParams,
  CmsWidgetControlProps,
  CmsWidgetPreviewProps,
} from './CmsWidget';

const Control = (props: CmsWidgetControlProps<string>) => {
  return <div>{JSON.stringify(props, null, 2)}</div>;
};
const Preview = (props: CmsWidgetPreviewProps<string>) => {
  const { value } = props;
  return <div>{value}</div>;
};

describe('CmsonfireCmsTypes', () => {
  it('should render successfully', () => {
    const Widget: ControlWidget = ({
      name,
      controlComponent,
      previewComponent,
      ...props
    }: CmsWidgetParams) => {
      return <div>{name}</div>;
    };
    const { baseElement } = render(
      <Widget
        name="test"
        controlComponent={Control}
        previewComponent={Preview}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
