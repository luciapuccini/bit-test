import React from 'react';
import { render } from '@testing-library/react';
import { BasicButtonRow } from './button-row.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicButtonRow />);
  const rendered = getByText('button1');
  expect(rendered).toBeTruthy();
});

