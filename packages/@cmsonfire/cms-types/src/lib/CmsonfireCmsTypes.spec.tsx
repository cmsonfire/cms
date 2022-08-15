import { render } from '@testing-library/react';

import Widget, { ControlComponentProps, PreviewComponentProps} from './CmsonfireCmsTypes';

const Control = (props: ControlComponentProps)  =>  {
  return <div>{ JSON.stringify(props, null, 2)}</div>
}
const Preview = (props: PreviewComponentProps) => {
  return props.value
}

describe('CmsonfireCmsTypes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Widget name="test" controlComponent={Control} previewComponent={Preview} />);
    expect(baseElement).toBeTruthy();
  });
});
