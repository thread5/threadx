import React from 'react';
import { Container } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import ScrollButton from './ScrollButton.js';
import Textarea from 'react-textarea-autosize';
import MyHeader from './MyHeader.js';

export default class X extends React.Component {
  constructor() {
    super();

    this.state = {
      raw_data: '[{"x": 1, "y": 2, "z": 3}]',
      new_data:  [{"x": 1, "y": 2, "z": 3}] ,
    };
  }

  componentDidMount() {
  }

  handleChange(e) {
    this.setState({raw_data: e.target.value});

    try {
      let new_data = JSON.parse(e.target.value);
      this.setState({new_data});
    } catch (error) {
      let msg = 'Invalid syntax!!';
      let new_data = e.target.value === '' ? '' : msg;
      this.setState({new_data});
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
                            minRows={15}
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
                <pre style={{whiteSpace: 'pre-wrap'}}>
                  {
                    typeof this.state.new_data === 'object'
                    ?
                    JSON.stringify(this.state.new_data, null, 2)
                    :
                    this.state.new_data
                  }
                </pre>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <ScrollButton />
        </Container>
      </>
    );
  }
};
