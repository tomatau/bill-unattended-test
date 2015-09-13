import React from 'react';
import * as Pure from 'src/components/elements/Pure';
import {FixedHeaderTable} from 'src/components/elements/FixedHeaderTable';
import bill from '../bill';

const
  headerHeight = 34

export class BuyAndKeepTable extends React.Component {
  render() {
    return (
      <FixedHeaderTable
        columns={[
          { header: 'Title', width: '74%', getValue: (item)=>item.title },
          { header: 'Cost', width: '26%', getValue: (item)=>`£${item.cost}` },
        ]}
        items={bill.skyStore.buyAndKeep}
      />
    );
  }
}
