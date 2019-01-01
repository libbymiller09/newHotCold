import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('should call onMakeGuess when form submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onSubmit={callback} />);
    const value = 10;
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.stimulate('submit');
    expect(callback).toHaveBeenCalledWith(value.soStting());
  });

  it('should reset input on form submit', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 10;
    wrapper.stimulate('submit');
    expect(input.instance().value).toEqual('');
  });
});