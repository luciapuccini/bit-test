import React from 'react';
import { render } from '@testing-library/react';
import { BasicButtonText } from './button-text.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicButtonText />);
  const rendered = getByText('hello from ButtonText');
  expect(rendered).toBeTruthy();
});

