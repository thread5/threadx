import React from 'react';
import { Container } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import Textarea from 'react-textarea-autosize';
import MyHeader from './MyHeader.js';

export default class X extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      raw_data:  '\\xe4\\xb8\\xad\\xe6\\x96\\x87',
      new_data:  '中文',
      raw_data2: '中文',
      new_data2:  '\\xe4\\xb8\\xad\\xe6\\x96\\x87',
    }
  }

  componentDidMount() {
  }

  handleChange(e) {
    this.setState({raw_data: e.target.value});

    try {
      let new_data = e.target.value.replace(/\\\\/g, '\\');
      const matches = new_data.match(/(\\x\w{2}){3}/g);
      if (matches) {
        matches.forEach(match => {
          let x = decodeURI(match.replace(/\\x/g, '%'));
          new_data = new_data.replace(match, x);
        });
      }
      this.setState({new_data});
    } catch (error) {
      let msg = 'Something weng wrong!!';
      let new_data = e.target.value === '' ? '' : msg;
      this.setState({new_data});
    }
  }

  handleChange2(e) {
    this.setState({raw_data2: e.target.value});

    try {
      let new_data2 = encodeURI(e.target.value).toLowerCase();
      new_data2 = new_data2.replace(/%/g, '\\x');
      this.setState({new_data2});
    } catch (error) {
      let msg = 'Something weng wrong!!';
      let new_data2 = e.target.value === '' ? '' : msg;
      this.setState({new_data2});
    }
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
                  <Grid.Row stretched>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column>
                      <pre>
                        <Form>
                          <Textarea
                            ref='textarea'
                            autoFocus={false}
                            minRows={5}
                            value={this.state.raw_data}
                            onChange={this.handleChange.bind(this)}
                          />
                        </Form>
                      </pre>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column>
                <pre
                  style={{
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {this.state.new_data}
                </pre>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid columns={2} stackable divided>
            <Grid.Row stretched>
              <Grid.Column>
                <Grid columns={2} stackable>
                  <Grid.Row stretched>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column>
                      <pre>
                        <Form>
                          <Textarea
                            ref='textarea2'
                            minRows={5}
                            value={this.state.raw_data2}
                            onChange={this.handleChange2.bind(this)}
                          />
                        </Form>
                      </pre>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column>
                <pre
                  style={{
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {this.state.new_data2}
                </pre>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </>
    );
  }
};
