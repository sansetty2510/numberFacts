import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({
  type, color, widthVal, heightVal
}) => (
  <ReactLoading type={type} color={color} height={heightVal} width={widthVal} />
);

export default Loader;
