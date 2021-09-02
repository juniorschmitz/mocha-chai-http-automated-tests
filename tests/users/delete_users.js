import chai from 'chai';
import chaiHttp from 'chai-http';
import { Factory } from '../../factory/factory.js';
chai.use(chaiHttp);
const request = chai.request('https://serverest.dev');
const expect = chai.expect;

describe('Get Users', () => {
    let valid_user_id;
    before((done) => {
        request
          .post(`/usuarios`)
          .send(Factory.user())
          .end((err, res) => {
              console.log(res.body)
              expect(res).to.has.status(201)
              expect(res.body.nome).not.to.be.null
              valid_user_id = res.body._id
              done();
        })
    });

    it('Should delete an existent user', (done) => {
        console.log(valid_user_id)
        request
            .delete(`/usuarios/${valid_user_id}`)
            .end((err, res) => {
                console.log(res.body)
                expect(res).to.has.status(200)
                expect(res.body.message).to.eql('Registro excluído com sucesso')
                done();
        })
    });

    it('Should not delete an user that does not exist', (done) => {
        request
            .delete('/usuarios/blablabla')
            .end((err, res) => {
                console.log(res.body)
                expect(res).to.has.status(200)
                expect(res.body.message).to.eql('Nenhum registro excluído')
                done();
        })
    });
});