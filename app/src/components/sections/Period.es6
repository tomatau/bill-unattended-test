import React from 'react';
import { Grid, Col } from 'src/components/elements/Pure';
import bill from '../bill';
import * as Section from 'src/components/elements/Section';
import { niceDate } from 'src/utils';

export class Period extends React.Component {
  render() {
    return (
      <div className="period" style={{ padding: '0 10px 15px' }}>
        <Section.SubHeading
          title={
            <Grid>
              <Col u='5-12' style={{ padding: '0.6rem 0' }}>
                Generated
              </Col>
              <Col u='7-12' style={{ padding: '0.6rem 0', backgroundColor: 'white' }}>
                {niceDate(bill.statement.generated)}
              </Col>
            </Grid>
          }
          style={{
            backgroundColor: '#E0E0E0',
            color: '#000',
            padding: 0
          }}
        />
        <Section.SubHeading
          title={
            <Grid>
              <Col u='5-12' style={{ padding: '0.6rem 0' }}>
                Due
              </Col>
              <Col u='7-12' style={{ padding: '0.6rem 0', backgroundColor: 'white' }}>
                {niceDate(bill.statement.due)}
              </Col>
            </Grid>
          }
          style={{
            backgroundColor: '#E0E0E0',
            color: '#000',
            padding: 0
          }}
        />
        <Section.SubHeading
          title={'Period'}
          style={{
            backgroundColor: '#E0E0E0',
            color: '#000'
          }}
        />
        <Section.SubHeading
          title={
            <Grid>
              <Col u='1-2' style={{ padding: '0.6rem 0' }}>
                From
              </Col>
              <Col u='1-2' style={{ padding: '0.6rem 0' }}>
                To
              </Col>
            </Grid>
          }
          style={{
            backgroundColor: '#E0E0E0',
            color: '#000',
            padding: 0
          }}
        />
        <Section.SubHeading
          title={
            <Grid>
              <Col u='1-2' style={{ padding: '0.6rem 0', backgroundColor: 'white' }}>
                {niceDate(bill.statement.period.from)}
              </Col>
              <Col u='1-2' style={{ padding: '0.6rem 0', backgroundColor: 'white' }}>
                {niceDate(bill.statement.period.to)}
              </Col>
            </Grid>
          }
          style={{
            backgroundColor: '#E0E0E0',
            color: '#000',
            padding: 0
          }}
        />
      </div>
    );
  }
}
