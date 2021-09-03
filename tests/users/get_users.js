import chaiHttp from 'chai-http';
import { Factory } from '../../factory/factory.js';
chai.use(chaiHttp);
const request = chai.request('https://serverest.dev');

describe('Get Users', () => {
    let valid_user_id;
    it('Should return a list of valid users', (done) => { 
        request
            .get("/usuarios")
            .end((err, res) => {
                expect(res).to.has.status(200)
                expect(res.body.usuarios).to.be.an('array')
                valid_user_id = res.body.usuarios[0]._id
                done();
        })
    });

    it('Should return a single user', (done) => {
        request
            .get(`/usuarios/${valid_user_id}`)
            .end((err, res) => {
                console.log(res.body)
                expect(res).to.has.status(200)
                expect(res.body.nome).not.to.be.null
                done();
        })
    });
});