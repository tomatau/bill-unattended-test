import React from 'react';
import cx from 'classnames';
import {twoDP} from 'src/utils';

export const Heading = ({ title, subtitle, color, style }) => (
  <div style={{
    height: 120,
    backgroundColor: color,
    verticalAlign: 'text-top',
    color: 'white',
    ...style
  }}>
    <div style={{
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
      'msTransform': 'translateY(-50%)',
      'WebkitTransform': 'translateY(-50%)',
      'MozTransform': 'translateY(-50%)',
      'OTransform': 'translateY(-50%)',
      textAlign: 'center',
    }}>
      <h3 style={{
        margin: 0,
        textTransform: 'uppercase'
      }}>{title}</h3>
      <span style={{
        fontSize: 60,
        fontWeight: 'lighter',
      }}>
        {subtitle}
      </span>
    </div>
  </div>
);

export const SubHeading = ({ title, style, color }) => (
  <h4 style={{
    backgroundColor: color,
    margin: 0,
    padding: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
    ...style
  }}>{title}</h4>
)