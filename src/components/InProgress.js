import React from 'react';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLang } from '../actions/LangAction.js';

class X extends React.Component {
  render() {
    return (
      <>
        <Message floating>
          <p>
            {
              (
                this.props.lang === 'en'
              ) ?  (
                'STILL IN PROGRESS...'
              ) : (
                '正在制作中...'
              )
            }
          </p>
        </Message>
      </>
    );
  }
}

X.propTypes = {
  getLang: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  lang: state.whatever.lang,
});

export default connect(mapStateToProps, { getLang })(X);
