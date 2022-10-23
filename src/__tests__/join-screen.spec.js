import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import JoinScreen from '../screens/join-screen/join-screen';
import { JOIN_SCREEN_TITLE } from '../variables';

test('JoinScreen renders correctly', async () => {
  const tree = await waitFor(() => renderer.create(<JoinScreen />).toJSON());
  expect(tree).toMatchSnapshot();
});

test('should have correct title', async () => {
  await waitFor(() => render(<JoinScreen />));

  expect(screen.findByText(JOIN_SCREEN_TITLE)).toBeTruthy();
});

test('should have button', async () => {
  await waitFor(() => render(<JoinScreen />));

  expect(screen.findByTestId('join-button')).toBeTruthy();
});
