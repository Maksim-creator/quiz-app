import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import HomeScreen from '../index';

describe('HomeScreen', () => {
  it('should render component', () => {
    const {getByText} = render(<HomeScreen />);
    expect(getByText('Nickname')).toBeTruthy();
    const rndQuiz = getByText('Random quiz');
    fireEvent.press(rndQuiz);
    const selectQuiz = getByText('Select quiz');
    fireEvent.press(selectQuiz);
  });
});
