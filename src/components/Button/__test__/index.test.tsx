import React from 'react';
import {render} from '@testing-library/react-native';
import Button from '../index';

describe('button', () => {
  it('should render button', () => {
    const {getByText} = render(<Button text={'Button'} onPress={() => {}} />);
    expect(getByText('Button')).toBeTruthy();
  });
});
