import React from 'react';
import { Container } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';

export default class X extends React.Component {
  render() {
    return (
      <>
        <Container className='MyContainer'>
          <div style={{textAlign: 'center'}}>
            <div
              style={{
                display: 'inline-block',
                textAlign: 'left',
              }}>
              <Message warning floating>
                <p>Not Found (a.k.a. 404)</p>
              </Message>
            </div>
          </div>
        </Container>
      </>
    );
  }
};
