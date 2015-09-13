import React from 'react';
import * as Pure from 'src/components/elements/Pure';
import {FixedHeaderTable} from 'src/components/elements/FixedHeaderTable';
import bill from '../bill';

export class CallsTable extends React.Component {
  render() {
    return (
      <FixedHeaderTable
        columns={[
          { header: 'Called', width: '37%', getValue: (item)=>item.called },
          { header: 'Duration', width: '37%', getValue: (item)=>item.duration },
          { header: 'Cost', width: '26%', getValue: (item)=>`£${item.cost}` },
        ]}
        items={bill.callCharges.calls}
      />
    );
  }
}
