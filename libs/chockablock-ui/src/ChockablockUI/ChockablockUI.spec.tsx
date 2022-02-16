import { render } from '@testing-library/react';

import ChockablockUi from '.';

describe('ChockablockUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChockablockUi />);
    expect(baseElement).toBeTruthy();
  });
});
