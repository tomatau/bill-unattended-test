import React from 'react';

const Path = ({d, ...props}) => (
  <path fill='none' d={d} {...props} />
);

export default Path;