import chai from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);;

const EXEC_ENV = process.env.ENVIRONMENT
const { default: config } = await import(`./config/${EXEC_ENV.trim()}.js`);

global.chai = chai
global.expect = chai.expect

const base_uri = config.base_uri

export default base_uri