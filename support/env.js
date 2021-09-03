import chai from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
import config from './config/prd.js';

global.chai = chai
global.expect = chai.expect

const base_uri = config.base_uri

export default base_uri