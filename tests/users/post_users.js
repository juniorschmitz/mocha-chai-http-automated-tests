import chaiHttp from 'chai-http';
import { Factory } from '../../factory/factory.js';
chai.use(chaiHttp);
const request = chai.request('https://serverest.dev');

describe('Post Users', () => {
    it('Should register a new user', (done) => {
        request
            .post(`/usuarios`)
            .send(Factory.user())
            .end((err, res) => {
                console.log(res.body)
                expect(res).to.has.status(201)
                expect(res.body.nome).not.to.be.null
                done();
            })
    });

      it('Should not register a user without e-mail', (done) => {
          request
              .post(`/usuarios`)
              .send(Factory.invalid_user('missing_email'))
              .end((err, res) => {
                  console.log(res.body)
                  expect(res).to.has.status(400)
                  expect(res.body.email).to.eql('email é obrigatório')
                  done();
          })
      });

      it('Should not register a user without name', (done) => {
          request
              .post(`/usuarios`)
              .send(Factory.invalid_user('missing_name'))
              .end((err, res) => {
                  console.log(res.body)
                  expect(res).to.has.status(400)
                  expect(res.body.nome).to.eql('nome é obrigatório')
                  done();
          })
      });

      it('Should not register a user without password', (done) => {
          request
              .post(`/usuarios`)
              .send(Factory.invalid_user('missing_password'))
              .end((err, res) => {
                  console.log(res.body)
                  expect(res).to.has.status(400)
                  expect(res.body.password).to.eql('password é obrigatório')
                  done();
          })
      });

      it('Should not register a user if administrador is non boolean', (done) => {  
          request
              .post(`/usuarios`)
              .send(Factory.invalid_user('administrator_non_boolean'))
              .end((err, res) => {
                  console.log(res.body)
                  expect(res).to.has.status(400)
                  expect(res.body.administrador).to.eql("administrador deve ser 'true' ou 'false'")
                  done();
          })
      });
});
