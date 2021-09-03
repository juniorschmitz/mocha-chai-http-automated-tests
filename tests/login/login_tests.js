import { Factory } from '../../factory/factory.js';
import { Rest } from '../../services/rest.js';

describe('Login endpoint', () => {
    it('Should login', async () => {
        let response = await Rest.post("/login", Factory.login_credentials('valid'))
        expect(response).to.has.status(200)
        expect(response.body.message).to.be.eql('Login realizado com sucesso')
    });

    it('Should not login with invalid credentials', async () => { 
        let response = await Rest.post("/login", Factory.login_credentials('invalid'))
        expect(response).to.has.status(401)
        expect(response.body.message).to.be.eql('Email e/ou senha inválidos')
    });
});