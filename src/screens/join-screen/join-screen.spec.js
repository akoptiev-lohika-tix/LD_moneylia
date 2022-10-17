import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';

import JoinScreen from './join-screen';
import { JOIN_SCREEN_TITLE } from '../../variables';

test('should have correct title', async () => {
    await waitFor(() => render(<JoinScreen />));

    expect(screen.findByText(JOIN_SCREEN_TITLE)).toBeTruthy();
});

test('should have button', async () => {
    await waitFor(() => render(<JoinScreen />));

    expect(screen.findByTestId('join-button')).toBeTruthy();
});
