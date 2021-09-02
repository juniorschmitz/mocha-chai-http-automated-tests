import chai from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
const request = chai.request('https://serverest.dev');

export class Serverest {
    static post(endpoint, payload) {
        return request.post(endpoint).send(payload)
    }
}