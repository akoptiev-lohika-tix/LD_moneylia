import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import UserSummaryDataView from '../components/user-summary-data-view/user-summary-data-view';

const props = {
  title: 'Test title',
  data: 2022,
};

test('UserSummaryDataViewTesting renders correctly', async () => {
  const tree = await waitFor(() =>
    renderer.create(<UserSummaryDataView title={props.title} data={props.data} />).toJSON()
  );
  expect(tree).toMatchSnapshot();
});

describe('UserSummaryDataViewTesting', () => {
  beforeEach(async () => {
    await waitFor(() => render(<UserSummaryDataView title={props.title} data={props.data} />));
  });

  it('should have correct title', () => {
    expect(screen.findByText(props.title)).toBeTruthy();
  });

  it('should have correct data', () => {
    expect(screen.findByText(props.data)).toBeTruthy();
  });
});
