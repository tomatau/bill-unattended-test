import React from 'react';
import * as Pure from 'src/components/elements/Pure';
import bill from '../bill';

export class RentalsTable extends React.Component {
  render() {
    return (
      <Pure.Table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th style={{ width: '26%' }}>Cost</th>
          </tr>
        </thead>
        <tbody>
          {bill.skyStore.rentals.map((rental, i) =>
            <tr key={i}>
              <td>{rental.title}</td>
              <td>£{rental.cost}</td>
            </tr>
          )}
        </tbody>
      </Pure.Table>
    );
  }
}
