import React from 'react';
import { Container } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import QRCode from 'qrcode.react';
import Textarea from 'react-textarea-autosize';
import MyHeader from './MyHeader.js';

export default class X extends React.Component {
  constructor() {
    super();

    this.state = {
      text: 'https://threadx.netlify.com/',
    };
  }

  componentDidMount() {
  }

  handleChange(e) {
    /*
    Uncaught Error: code length overflow. (10212>10208)
    10208 bits / 8 = 1276 bytes / 3 = 425
    */
    this.setState({text: e.target.value});
  }

  render() {
    const { location } = this.props;

    return (
      <>
        <MyHeader location={location} />

        <Container className='MyContainer'>
          <Grid columns={2} stackable divided>
            <Grid.Row stretched>
              <Grid.Column>
                <Grid columns={2} stackable>
                  <Grid.Row >
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column>
                      <pre>
                        <Form>
                          <Textarea
                            ref='textarea'
                            autoFocus={false}
                            minRows={15}
                            value={this.state.text}
                            onChange={this.handleChange.bind(this)}
                            style={{widthx: '50%', floatx:'right'}}
                          />
                        </Form>
                      </pre>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column>
                <pre style={{whiteSpace: 'pre-wrap'}}>
                  <QRCode
                    value={this.state.text}
                    size={278}
                    bgColor={'#FFFFFF'}
                    fgColor={'#000000'}
                    level={'H'}
                    includeMargin={false}
                    renderAs={'svg'}
                  />
                </pre>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </>
    );
  }
};
