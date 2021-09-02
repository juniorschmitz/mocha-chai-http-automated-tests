import chai from 'chai';
import chaiHttp from 'chai-http';
import { Factory } from '../../factory/factory.js';
chai.use(chaiHttp);
const request = chai.request('https://serverest.dev');
const expect = chai.expect;

describe('Login endpoint', () => {
    it('Should login', (done) => { 
        request
            .post("/login")
            .send(Factory.login_credentials('valid'))
            .end((err, res) => {
                console.log(res.body)
                expect(res).to.has.status(200)
                expect(res.body.message).to.be.eql('Login realizado com sucesso')
                done();
        })
    });

    it('Should not login with invalid credentials', (done) => { 
      request
          .post("/login")
          .send(Factory.login_credentials('invalid'))
          .end((err, res) => {
              console.log(res.body)
              expect(res).to.has.status(401)
              expect(res.body.message).to.be.eql('Email e/ou senha inválidos')
              done();
      })
  });
});