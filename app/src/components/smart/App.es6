import React from 'react';
import { connect } from 'react-redux';

import { Grid, Col } from 'src/components/elements/Pure';

/* Components */
import {SkyStore} from 'src/components/sections/SkyStore';
import {CallCharges} from 'src/components/sections/CallCharges';
import {Packages} from 'src/components/sections/Packages';
import {Statement} from 'src/components/sections/Statement';
import {Period} from 'src/components/sections/Period';
import {MeterSummary} from 'src/components/sections/MeterSummary';

import { fetchBill } from 'src/actions';

const containerStyles = {
  maxWidth: 994,
  margin: '0 auto'
}

@connect()
class App extends React.Component {

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchBill())
  }

  render() {
    return (
      <div>
        <Grid style={containerStyles}>
          <Col u='1' md='1-3'>
            <Statement />
          </Col>
          <Col u='1' md='1-3'>
            <MeterSummary />
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