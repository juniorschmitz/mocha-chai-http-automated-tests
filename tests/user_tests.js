const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request('https://serverest.dev');
const expect = chai.expect;

describe('Get Users', () => {
    it('Should return a list of valid users', (done) => {
        request
            .get("/usuarios")
            .end((err, res) => {
                expect(res).to.has.status(200)
                expect(res.body.usuarios).to.be.an('array')
                done();
            })
    });

    it('Should return a single user', (done) => {
      request
          .get("/usuarios/xjl0fvNKPxcSY20s")
          .end((err, res) => {
              console.log(res.body)
              expect(res).to.has.status(200)
              expect(res.body.nome).not.to.be.null
              done();
          })
    });
});
