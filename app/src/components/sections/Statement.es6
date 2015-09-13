import React from 'react';
import { connect } from 'react-redux';
import * as Section from 'src/components/elements/Section';
import { twoDP } from 'src/utils';
import Loader from 'src/components/elements/Loader';

@connect(({bill})=>{
  return {
    total: bill.total
  }
})
export class Statement extends React.Component {
  render() {
    const { total } = this.props;
    return (
      <div className="statement" style={{
        padding: '20px 15px', height: 190
      }}>
        <Section.Heading
          title='Statement Total'
          subtitle={total
            ? `£${twoDP(total)}`
            : <Loader />}
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
