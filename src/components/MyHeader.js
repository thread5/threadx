import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class X extends React.Component {
  constructor(props) {
    super(props);

    this.pathname = 'whatever';
    if (this.props.location !== undefined) {
      this.pathname = this.props.location.pathname;
    }
  }

  match (keyword) {
    /*
    this.pathname.match(/^\/keyword($|\/)/)
    this.pathname.match(/(^\/keyword($|\/)|^\/$)/)
    */
    let pattern = '^/' + keyword + '($|/)';
    let regexp = new RegExp(pattern);
    return regexp.test(this.pathname)
  }

  render() {
    let isJson = this.match('json') ? true : false;
    let isUrl = this.match('url') ? true : false;
    let isUnicode = this.match('unicode') ? true : false;
    let isOctal = this.match('octal') ? true : false;
    let isHex = this.match('hex') ? true : false;
    let isTime = this.match('time') ? true : false;
    let isTz = this.match('tz') ? true : false;
    let isQrcode = this.match('qrcode') ? true : false;

    if (this.match('')) {
      isJson = true;
    }

    return (
      <>
        <div style={{textAlign: 'center', paddingTop: '40px'}}>
          <Menu stackable compact>
            <Menu.Item as={Link} to='/json' active={isJson}>
              JSON
            </Menu.Item>
            <Menu.Item as={Link} to='/url' active={isUrl}>
              URL
            </Menu.Item>
            <Menu.Item as={Link} to='/unicode' active={isUnicode}>
              UNICODE
            </Menu.Item>
            <Menu.Item as={Link} to='/octal' active={isOctal}>
              OCTAL
            </Menu.Item>
            <Menu.Item as={Link} to='/hex' active={isHex}>
              HEX
            </Menu.Item>
            <Menu.Item as={Link} to='/time' active={isTime}>
              TIME
            </Menu.Item>
            <Menu.Item as={Link} to='/tz' active={isTz}>
              TZ
            </Menu.Item>
            <Menu.Item as={Link} to='/qrcode' active={isQrcode}>
              QRCODE
            </Menu.Item>
          </Menu>
        </div>
      </>
    );
  }
};
