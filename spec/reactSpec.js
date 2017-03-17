import React from 'react';
import { shallow } from 'enzyme'; //use for "shallow" rendering (doesn't include props and such)
//import { mount } from 'enzyme'; // use for full dom rendering http://airbnb.io/enzyme/index.html
import { expect } from 'chai';
import FriendEventList from '../src/client/app/FriendEventList';
import FriendEventListItem from '../src/client/app/FriendEventListItem';
import App from '../src/client/app/index';

describe('<FriendEventList />', () => {
  it('renders two <FriendEventListItem /> components', () => {
    const wrapper = shallow(<FriendEventList />);
    expect(wrapper.find('FriendEventListItem')).to.have.length(1);
  });
});


// describe('<Foo />', () => {
//   it('allows us to set props', () => {
//     const wrapper = mount(<Foo bar="baz" />);
//     expect(wrapper.props().bar).to.equal('baz');
//     wrapper.setProps({ bar: 'foo' });
//     expect(wrapper.props().bar).to.equal('foo');
//   });


//this needs to be included in the test command in package.json after the server test bit
//  & mocha spec/setup.js mocha spec/reactSpec.js