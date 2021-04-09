import JSON from  '../components/JSON.js';
import URL from  '../components/URL.js';
import Unicode from  '../components/Unicode.js';
import Octal from  '../components/Octal.js';
import Hex from  '../components/Hex.js';
import Time from  '../components/Time.js';
import Tz from  '../components/Tz.js';
import QRCode from  '../components/QRCode.js';
import Test from '../components/Test.js';
import NotFound from '../components/NotFound.js';

const routes = [
  { path: '/', component: JSON },
  { path: '/tools', component: JSON },
  { path: '/json', component: JSON },
  { path: '/url', component: URL },
  { path: '/unicode', component: Unicode },
  { path: '/octal', component: Octal },
  { path: '/hex', component: Hex },
  { path: '/time', component: Time },
  { path: '/tz', component: Tz },
  { path: '/qrcode', component: QRCode },
  { path: '/test', component: Test },
  { path: '*', component: NotFound },
];

export default routes;
