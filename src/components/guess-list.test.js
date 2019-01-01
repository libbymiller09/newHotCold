import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList />);
  });
  
  it('should show number of guesses made', () => {
    let guessNum = [0, 1, 2];
    let wrapper = shallow(<GuessList guessList={guessNum} />);
    let items = wrapper.find('li');
    expect(items.length).toEqual(guessNum.length);
    guessNum.forEach((guessNum, index) => {
      expect(items.at(index).text()).toEqual(guessNum.toString());
    });
  });
});
