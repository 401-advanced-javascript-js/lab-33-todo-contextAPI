/* eslint-disable react/prop-types */
import React from 'react';

import { CounterContext } from '../context/counter-context';

export default class Count extends React.Component {
  static contextType = CounterContext;

  render() {
    return <h2>Context: There are {this.context.count} items in the list</h2>;
  }
}
