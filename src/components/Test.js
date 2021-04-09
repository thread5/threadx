import React from 'react';
import '../App.css';
import { Container } from 'semantic-ui-react';
import InProgress from './InProgress.js';
import MyHeader from './MyHeader.js';

export default class X extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <>
        <MyHeader location={location} />

        <Container className='MyContainer'>
          <div style={{textAlign: 'center'}}>
            <div
              style={{
                display: 'inline-block',
                textAlign: 'left',
              }}
            >
              <InProgress />
            </div>
          </div>
        </Container>
      </>
    );
  }
};
