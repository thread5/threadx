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
      raw_data:  '-28000000',
      new_data:  '1970-01-01 00:00:00',
      raw_data2: '1970-01-01 00:00:00',
      new_data2: '-28800000',
    }
  }

  componentDidMount() {
    let now = Date.now();

    let timestamp = now.toString();

    let today = new Date(now);
    let year = today.getFullYear();
    let month = this.formatTime(today.getMonth() + 1);
    let date = this.formatTime(today.getDate());
    let hours = this.formatTime(today.getHours());
    let minutes = this.formatTime(today.getMinutes());
    let seconds = this.formatTime(today.getSeconds());
    let YYYYMMDD = year + '-' + month + '-' + date;
    let HHmmss = hours + ':' + minutes + ':' + seconds;
    let datetime = YYYYMMDD + ' ' + HHmmss;

    let datetime2 = datetime;
    let timestamp2 = Date.parse(datetime).toString();

    this.setState({raw_data: timestamp});
    this.setState({new_data: datetime});
    this.setState({raw_data2: datetime2});
    this.setState({new_data2: timestamp2});
  }

  formatTime(x) {
    if (x < 10) {
      x = '0' + x;
    }
    return x;
  }

  handleChange(e) {
    this.setState({raw_data: e.target.value});

    try {
      let x = e.target.value;
      // x = x.trim();
      x = x.replace(/^\s*|\s*$/g, '');

      if (isNaN(x)) {
        throw new Error();
      }

      if (x.length === 10) {
        x = x + '000';
      }

      if (x.length === 13) {
        let newDate = new Date(parseInt(x));
        let year = newDate.getFullYear();
        let month = this.formatTime(newDate.getMonth() + 1);
        let date = this.formatTime(newDate.getDate());
        let hours = this.formatTime(newDate.getHours());
        let minutes = this.formatTime(newDate.getMinutes());
        let seconds = this.formatTime(newDate.getSeconds());
        let YYYYMMDD = year + '-' + month + '-' + date;
        let HHmmss = hours + ':' + minutes + ':' + seconds;
        let datetime = YYYYMMDD + ' ' + HHmmss;
        this.setState({new_data: datetime});
      } else {
        throw new Error();
      }
    } catch (error) {
      let msg = 'Something weng wrong!!';
      let new_data = e.target.value === '' ? '' : msg;
      this.setState({new_data});
    }
  }

  handleChange2(e) {
    this.setState({raw_data2: e.target.value});
    try {
      let x = Date.parse(e.target.value);

      if (isNaN(x)) {
        throw new Error();
      }

      let new_data2 = x.toString();

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
                <pre style={{
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}>
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
