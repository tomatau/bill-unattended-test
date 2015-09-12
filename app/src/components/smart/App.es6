import React from 'react';
import { Grid, Col, Table } from 'src/components/elements/Pure';

class App extends React.Component {
  render() {
    return (
      <Grid style={{
        maxWidth: 994,
        margin: '0 auto'
      }}>
        <Col u='1-3'>
          <Table>
            <thead>
              <tr>
                <th>Thing</th>
              </tr>
            </thead>
          </Table>
        </Col>
        <Col u='1-3'>
          <Table>
            <thead>
              <tr>
                <th>Thing</th>
              </tr>
            </thead>
          </Table>
        </Col>
        <Col u='1-3'>
          <Table>
            <thead>
              <tr>
                <th>Thing</th>
              </tr>
            </thead>
          </Table>
        </Col>
      </Grid>
    );
  }
}

export default App;