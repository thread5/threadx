import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { connect } from 'react-redux';
import { getLang } from '../actions/LangAction.js';
import { Container } from 'semantic-ui-react';
import { Table } from 'semantic-ui-react';
import MyHeader from './MyHeader.js';

/*
// Hide element for mobile only - Semantic UI
https://stackoverflow.com/q/38183708
// Responsive helpers (mobile-only etc.) for semantic-ui
https://gist.github.com/bl4ck5un/ed27db3d653011b32ee0877058abac7d
*/

class X extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props)
    this.state = {
      /*
      2020, Sunday, March 8, 2:00 am
      2020, Sunday, November 1, 2:00 am
      2021, Sunday, March 14, 2:00 am
      2021, Sunday, November 7, 2:00 am
      2022, Sunday, March 13, 2:00 am
      2022, Sunday, November 6, 2:00 am
      */
      switch_to_summer: true,
      switch_to_winter: false,

      tz_us_la: '12-08 09:00:00 +00',
      tz_us_nyc: '12-08 09:00:00 +00',
      tz_gb_ldn: '12-08 09:00:00 +00',
      tz_fr_par: '12-08 09:00:00 +00',
      tz_de_ber: '12-08 09:00:00 +00',
      tz_cn_sz: '12-08 09:00:00 +00',
      tz_nz_akl: '12-08 09:00:00 +00',
      tz_us_la_offset: '+00',
      tz_us_nyc_offset: '+00',
      tz_gb_ldn_offset: '+00',
      tz_fr_par_offset: '+00',
      tz_de_der_offset: '+00',
      tz_cn_sz_offset: '+00',
      tz_nz_akl_offset: '+00',

      tz_pdt: '12-08 09:00:00 -07',
      tz_edt: '12-08 09:00:00 -04',
      tz_bst: '12-08 09:00:00 +01',
      tz_cest: '12-08 09:00:00 +02',
      tz_cst: '12-08 09:00:00 +08',
      tz_nzst: '12-08 09:00:00 +12',
      tz_pdt_offset: '-07',
      tz_edt_offset: '-04',
      tz_bst_offset: '+01',
      tz_cest_offset: '+02',
      tz_cst_offset: '+08',
      tz_nzst_offset: '+12',

      tz_pst: '12-08 09:00:00 -08',
      tz_est: '12-08 09:00:00 -05',
      tz_gmt: '12-08 09:00:00 +00',
      tz_cet: '12-08 09:00:00 +01',
      _tz_cst: '12-08 09:00:00 +08',
      tz_nzdt: '12-08 09:00:00 +13',
      tz_pst_offset: '-08',
      tz_est_offset: '-05',
      tz_gmt_offset: '+00',
      tz_cet_offset: '+01',
      _tz_cst_offset: '+08',
      tz_nzdt_offset: '+13',

      tz_us_la_color: '',
      tz_us_nyc_color: '',
      tz_gb_ldn_color: '',
      tz_fr_par_color: '',
      tz_de_der_color: '',
      tz_cn_sz_color: '',
      tz_nz_akl_color: '',
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.initTimer();
    this.startTimer();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  initTimer() {
    // window.timer.push(t);
    if (typeof window.timer !== 'undefined') {
      for (let i = 0; i < window.timer.length; i++) {
        window.clearTimeout(window.timer[i]);
      }
    } else {
      window.timer = [];
    }
  }

  startTimer() {
    if (this.state.switch_to_summer) {
      this.setTime('tz_us_la', '-', 7);
      this.setTime('tz_us_nyc', '-', 4);
      this.setTime('tz_gb_ldn', '+', 1);
      this.setTime('tz_fr_par', '+', 2);
      this.setTime('tz_de_ber', '+', 2);
      this.setTime('tz_cn_sz', '+', 8);
      this.setTime('tz_nz_akl', '+', 12);
      this.setState({
        tz_us_la_offset: this.state.tz_pdt_offset,
      });
      this.setState({
        tz_us_nyc_offset: this.state.tz_edt_offset,
      });
      this.setState({
        tz_gb_ldn_offset: this.state.tz_bst_offset,
      });
      this.setState({
        tz_fr_par_offset: this.state.tz_cest_offset,
      });
      this.setState({
        tz_de_der_offset: this.state.tz_cest_offset,
      });
      this.setState({
        tz_cn_sz_offset: this.state.tz_cst_offset,
      });
      this.setState({
        tz_nz_akl_offset: this.state.tz_nzst_offset,
      });
    } else {
      this.setTime('tz_us_la', '-', 8);
      this.setTime('tz_us_nyc', '-', 5);
      this.setTime('tz_gb_ldn', '+', 0);
      this.setTime('tz_fr_par', '+', 1);
      this.setTime('tz_de_ber', '+', 1);
      this.setTime('tz_cn_sz', '+', 8);
      this.setTime('tz_nz_akl', '+', 13);
      this.setState({
        tz_us_la_offset: this.state.tz_pst_offset,
      });
      this.setState({
        tz_us_nyc_offset: this.state.tz_est_offset,
      });
      this.setState({
        tz_gb_ldn_offset: this.state.tz_gmt_offset,
      });
      this.setState({
        tz_fr_par_offset: this.state.tz_cet_offset,
      });
      this.setState({
        tz_de_der_offset: this.state.tz_cet_offset,
      });
      this.setState({
        tz_cn_sz_offset: this.state.tz_cst_offset,
      });
      this.setState({
        tz_nz_akl_offset: this.state.tz_nzdt_offset,
      });
    }
  }

  setTime(tz, operation, timezone) {
    let today = new Date();
    if (operation === '-') {
      today.setTime(
        today.getTime() +
        today.getTimezoneOffset() * 60 * 1000 -
        timezone * 3600 * 1000
      );
    } else {
      today.setTime(
        today.getTime() +
        today.getTimezoneOffset() * 60 * 1000 +
        timezone * 3600 * 1000
      );
    }
    //
    // let year = today.getFullYear()
    // [0, 11]
    //
    let month = this.formatTime(today.getMonth() + 1);
    let date = this.formatTime(today.getDate());
    let hours = this.formatTime(today.getHours());
    let minutes = this.formatTime(today.getMinutes());
    let seconds = this.formatTime(today.getSeconds());
    let time = (
      month + '-' + date +
      ' ' +
      hours + ':' + minutes + ':' + seconds
    );

    if (this._isMounted) {
      this.setState({ [tz]: time });
    }

    let that = this;

    setTimeout(function() {
      that.setTime(tz, operation, timezone);
    }, 1000);
  }

  formatTime(x) {
    if (x < 10) {
      x = '0' + x;
    }
    return x;
  }

  render() {
    const { location } = this.props

    return (
      <>
        <MyHeader location={location} />

        <Container className='MyContainer'>
          {/*
          <Container
            className='computer only grid'
            style={{ marginTop: '10px', marginBottom: '30px' }}
          >
          */}
          <Container
            classNamex='computer only grid'
            style={{ marginTop: '10px', marginBottom: '-4px', textAlign: 'center' }}
          >
            <Table
              unstackable
              celled
              compact
              collapsing
              style={{ display: 'inline-block' }}
            >
              <Table.Body>
                <Table.Row textAlign='center'>
                  <Table.Cell
                    style={{ color: this.state.tz_us_la_color }}
                  >
                    <span>{ this.state.tz_us_la }</span>
                    <br />
                    <span>L.A., US</span>
                    <span>&#44;&nbsp;</span>
                    <span>{ this.state.tz_us_la_offset }00</span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row textAlign='center'>
                  <Table.Cell
                    style={{ color: this.state.tz_us_nyc_color }}
                  >
                    <span>{ this.state.tz_us_nyc }</span>
                    <br />
                    <span>NYC, US</span>
                    <span>&#44;&nbsp;</span>
                    <span>{ this.state.tz_us_nyc_offset }00</span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row textAlign='center'>
                  <Table.Cell
                    style={{ color: this.state.tz_gb_ldn_color }}
                  >
                    <span>{ this.state.tz_gb_ldn }</span>
                    <br />
                    <span>LDN, GB</span>
                    <span>&#44;&nbsp;</span>
                    <span>{ this.state.tz_gb_ldn_offset }00</span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row textAlign='center'>
                  <Table.Cell
                    style={{ color: this.state.tz_fr_par_color }}
                  >
                    <span>{ this.state.tz_fr_par }</span>
                    <br />
                    <span>PAR, FR</span>
                    <span>&#44;&nbsp;</span>
                    <span>{ this.state.tz_fr_par_offset }00</span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row textAlign='center'>
                  <Table.Cell
                    style={{ color: this.state.tz_de_der_color }}
                  >
                    <span>{ this.state.tz_de_ber }</span>
                    <br />
                    <span>BER, DE</span>
                    <span>&#44;&nbsp;</span>
                    <span>{ this.state.tz_de_der_offset }00</span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row textAlign='center'>
                  <Table.Cell
                    style={{ color: this.state.tz_cn_sz_color }}
                  >
                    <span>{ this.state.tz_cn_sz }</span>
                    <br />
                    <span>SZ, CN</span>
                    <span>&#44;&nbsp;</span>
                    <span>{ this.state.tz_cn_sz_offset }00</span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row textAlign='center'>
                  <Table.Cell
                    style={{ color: this.state.tz_nz_akl_color }}
                  >
                    <span>{ this.state.tz_nz_akl }</span>
                    <br />
                    <span>AKL, NZ</span>
                    <span>&#44;&nbsp;</span>
                    <span>{ this.state.tz_nz_akl_offset }00</span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Container>
        </Container>
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
