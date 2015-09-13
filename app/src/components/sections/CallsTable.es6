import React from 'react';
import * as Pure from 'src/components/elements/Pure';
import bill from '../bill';

export class CallsTable extends React.Component {
  render() {
    return (
      <Pure.Table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th style={{ width: '37%' }}>Called</th>
            <th>Duration</th>
            <th style={{ width: '26%' }}>Cost</th>
          </tr>
        </thead>
        <tbody>
          {bill.callCharges.calls.map((charge,i) =>
            <tr key={i}>
              <td>{charge.called}</td>
              <td>{charge.duration}</td>
              <td>{charge.cost}</td>
            </tr>
          )}
        </tbody>
      </Pure.Table>
    );
  }
}
