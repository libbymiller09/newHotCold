import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });

  it('renders feeback', () => {
    let test_feedback = 'Listening to game.';
    let wrapper = shallow(<Feedback feedback={test_feeback} />);
    expect(wrapper.contains(test_status)).toEqual(true);
  });
})