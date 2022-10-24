import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import PaymentsListItem from '../components/payments-list-item/payments-list-item';

const payment = {
  id: '12345',
  description: 'test description',
  expiryDate: '01/01/2022',
  sum: 1288,
  address: {
    code: 'EADB',
    street: '12 Avenue',
    postCode: 'AA456',
  },
  taxCode: 22334,
  noticeCode: 9887711,
};

test('PaymentListItem renders correctly', async () => {
  const tree = await waitFor(() =>
    renderer.create(<PaymentsListItem payment={payment} />).toJSON()
  );
  expect(tree).toMatchSnapshot();
});

describe('PaymentListItem testing', () => {
  beforeEach(() => {
    render(<PaymentsListItem payment={payment} />);
  });

  it('should have correct description', () => {
    expect(screen.findByText(payment.description)).toBeTruthy();
  });

  it('should have correct date', () => {
    expect(screen.findByText(payment.expiryDate)).toBeTruthy();
  });

  it('should have correct sum', () => {
    expect(screen.findByText(payment.sum)).toBeTruthy();
  });

  it('should have two icons', () => {
    expect(screen.findByTestId('logo-icon')).toBeTruthy();
    expect(screen.findByTestId('arrow-icon')).toBeTruthy();
  });
});
