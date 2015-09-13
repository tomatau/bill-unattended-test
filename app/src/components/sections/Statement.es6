import React from 'react';
import { Grid, Col } from 'src/components/elements/Pure';
import bill from '../bill';
import * as Section from 'src/components/elements/Section';
import { twoDP } from 'src/utils';

export class Statement extends React.Component {
  render() {
    return (
      <div className="statement" style={{ padding: '20px 15px', height: 186 }}>
        <Section.Heading
          title='Statement Total'
          total={twoDP(bill.total)}
          style={{
            height: '100%',
            backgroundColor: '#E0E0E0',
            color: '#000'
          }}
        />
      </div>
    );
  }
}
