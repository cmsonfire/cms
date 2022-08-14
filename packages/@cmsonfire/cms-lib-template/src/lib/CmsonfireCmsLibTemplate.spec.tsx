import { render } from '@testing-library/react';

import CmsonfireCmsLibTemplate from './CmsonfireCmsLibTemplate';

describe('CmsonfireCmsLibTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CmsonfireCmsLibTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
