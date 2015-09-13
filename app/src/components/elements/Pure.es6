import React from 'react';
import cx from 'classnames';

export const Grid = ({children, className, ...prop}) => (
  <div className={cx('pure-g', className)} {...prop}>
    {children}
  </div>
);

export const Col = ({u, md, sm, lg, xl, children, className, ...props}) => (
  <div className={cx(className, {
      [`pure-u-${u}`]: u != null,
      [`pure-u-sm-${sm}`]: sm != null,
      [`pure-u-md-${md}`]: md != null,
      [`pure-u-lg-${lg}`]: lg != null,
      [`pure-u-xl-${xl}`]: xl != null,
    })}
    {...props}>
    {children}
  </div>
);

export const Table = ({children, className, ...props}) => (
  <table
    className={cx(
      'pure-table',
      'pure-table-bordered',
      className
    )}
    {...props}>
    {children}
  </table>
);
