import React from 'react';
import * as Pure from 'src/components/elements/Pure';
import bill from '../bill';

const
  headerHeight = 34

export class BuyAndKeepTable extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', maxHeight: 200, position: 'relative', paddingTop: headerHeight }}>
        <div className="Table__header-background" style={{
          backgroundColor: '#e0e0e0',
          height: headerHeight,
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0
        }} />
        <div className="Table--inner" style={{
          height: '100%', overflowX: 'hidden', overflowY: 'auto'
        }}>
          <Pure.Table style={{ width: '100%', overflowX: 'hidden', overflowY: 'auto' }} cellSpacing='0'>
            <thead>
              <tr style={{ width: '100%' }}>
                <th style={{ padding: 0 }}>
                  <div style={{
                    width: '74%',
                    position: 'absolute',
                    top: 0,
                    lineHeight: `calc(${headerHeight}px - 1em)`,
                    padding: '0.5em 1em',
                  }}>Title</div>
                </th>
                <th style={{ padding: 0 }}>
                  <div style={{
                    width: '26%',
                    position: 'absolute',
                    top: 0,
                    lineHeight: `calc(${headerHeight}px - 1em)`,
                    padding: '0.5em 1em',
                  }}>Cost</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {bill.skyStore.buyAndKeep.map((rental, i) =>
                <tr key={i} style={{ width: '100%' }}>
                  <td style={{ width: '74%' }}>{rental.title}</td>
                  <td style={{ width: '26%' }}>£{rental.cost}</td>
                </tr>
              )}
            </tbody>
          </Pure.Table>
        </div>
      </div>
    );
  }
}
