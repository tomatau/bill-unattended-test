import React from 'react';
import { Grid, Col } from 'src/components/elements/Pure';
import bill from '../bill';
import * as Section from 'src/components/elements/Section';
import { twoDP } from 'src/utils';

export class Statement extends React.Component {
  render() {
    return (
      <div className="statement" style={{ padding: '0 10px 15px' }}>
        <Section.Heading
          title='Statement Total'
          total={twoDP(bill.total)}
          style={{
            backgroundColor: '#E0E0E0',
            color: '#000'
          }}
        />
      </div>
    );
  }
}
