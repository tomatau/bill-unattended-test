import React from 'react';
import cx from 'classnames';

export const Grid = ({children, className, ...prop}) => (
  <div className={cx('pure-g', className)} {...prop}>
    {children}
  </div>
);

export const Col = ({u, children, className, ...props}) => (
  <div className={cx(`pure-u-${u}`, className)} {...props}>
    {children}
  </div>
);

export const Table = ({children, className, ...props}) => (
  <table
    className={cx(
      'pure-table',
      'pure-table-bordered',
      'pure-table-striped',
      className
    )}
    {...props}>
    {children}
  </table>
);
