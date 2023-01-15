/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Ring } from '@uiball/loaders';

function Loader(props) {
  return (
    <Ring size={props.size} lineWeight={5} speed={2} color={props.color} />
  );
}

export default Loader;
