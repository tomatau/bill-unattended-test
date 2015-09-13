import React from 'react';
import './Loader.css';

const Loader = () => (
  <div className="loader__container"  style={{
    margin: '0 auto',
    width: 67,
    fontSize: 'initial',
    marginTop: 10
  }}>
    <div className="loader"></div>
  </div>
);

export default Loader;