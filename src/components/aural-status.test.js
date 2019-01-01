import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('renders aural status', () => {
    let test_status = 'Listening to game.';
    let wrapper = shallow(<AuralStatus auralStatus={test_status} />);
    expect(wrapper.contains(test_status)).toEqual(true);
  });
});