import React from 'react';
import * as Pure from 'src/components/elements/Pure';
import bill from '../bill';

export class SubscriptionsTable extends React.Component {
  render() {
    return (
      <Pure.Table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th style={{ width: '37%' }}>Type</th>
            <th>Name</th>
            <th style={{ width: '26%' }}>Cost</th>
          </tr>
        </thead>
        <tbody>
          {bill.package.subscriptions.map((sub, i) =>
            <tr key={i}>
              <td>{sub.type}</td>
              <td>{sub.name}</td>
              <td>{sub.cost}</td>
            </tr>
          )}
        </tbody>
      </Pure.Table>
    );
  }
}
