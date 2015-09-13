import React from 'react';
import { Grid, Col } from 'src/components/elements/Pure';
import Meter from 'src/components/elements/Meter';
import bill from '../bill';

import {SkyStore} from 'src/components/sections/SkyStore';
import {CallCharges} from 'src/components/sections/CallCharges';
import {Packages} from 'src/components/sections/Packages';
import {Statement} from 'src/components/sections/Statement';
import {Period} from 'src/components/sections/Period';

const containerStyles = {
  maxWidth: 994,
  margin: '0 auto'
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Grid style={containerStyles}>
          <Col u='1' md='1-3'>
            <Statement />
          </Col>
          <Col u='1' md='1-3'>
            <Meter
              width={144}
              height={188}
              series={[
                { value: bill.package.total, color: '#CE7112' },
                { value: bill.callCharges.total, color: '#519251' },
                { value: bill.skyStore.total, color: '#2c4985' },
              ]}
            />
          </Col>
          <Col u='1' md='1-3'>
            <Period />
          </Col>
        </Grid>
        <Grid style={containerStyles}>
          <Col u='1' lg='1-3'>
            <Packages style={{ margin: '0 0.5em 2em' }} />
          </Col>
          <Col u='1' lg='1-3'>
            <CallCharges style={{ margin: '0 0.5em 2em' }} />
          </Col>
          <Col u='1' lg='1-3'>
            <SkyStore style={{ margin: '0 0.5em 2em' }} />
          </Col>
        </Grid>
      </div>
    );
  }
}

export default App;