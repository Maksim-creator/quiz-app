import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import InitialScreen from '../index';

const mockedDispatch = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

describe('InitialScreen', () => {
  beforeEach(() => {
    mockedDispatch.mockClear();
  });

  it('should render component', () => {
    const {getByText} = render(<InitialScreen />);
    const button = getByText("Let's start");

    expect(button).toBeTruthy();
    fireEvent.press(button);
  });
});
