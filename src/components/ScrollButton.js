import React from 'react';
import { Button } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

export default class X extends React.Component {
  render () {
    return (
      <>
        <Button basic icon
          title='Back to Top'
          className='ScrollButton'
          onClick={() => window.scrollTo(0, 0)}>
          <Icon name='chevron up' />
        </Button>
      </>
    );
  }
};
