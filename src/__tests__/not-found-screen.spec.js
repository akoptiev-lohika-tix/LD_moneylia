import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import { NOT_FOUND_SCREEN_TEXT } from '../variables';
import NotFoundScreen from '../screens/not-found-screen/not-found-screen';

test('NotFoundScreen renders correctly', async () => {
  const tree = await waitFor(() => renderer.create(<NotFoundScreen />).toJSON());
  expect(tree).toMatchSnapshot();
});

describe('NotFoundScreen testing', () => {
  beforeEach(() => {
    render(<NotFoundScreen />);
  });

  it('should have correct text', () => {
    expect(screen.findByText(NOT_FOUND_SCREEN_TEXT)).toBeTruthy();
  });

  it('should have icon', () => {
    expect(screen.findByTestId('not-found-icon')).toBeTruthy();
  });
});
