import { Factory } from '../../factory/factory.js';
import { Rest } from '../../services/rest.js';

describe('Post Users', () => {
    it('Should register a new user', async () => {
        let response = await Rest.post('/usuarios', Factory.user())
        expect(response).to.has.status(201)
        expect(response.body.nome).not.to.be.null
    });

      it('Should not register a user without e-mail', async () => {
          let response = await Rest.post('/usuarios', Factory.invalid_user('missing_email'))
          expect(response).to.has.status(400)
          expect(response.body.email).to.eql('email é obrigatório')
      });

      it('Should not register a user without name', async () => {
          let response = await Rest.post('/usuarios', Factory.invalid_user('missing_name'))
          expect(response).to.has.status(400)
          expect(response.body.nome).to.eql('nome é obrigatório')
      });

      it('Should not register a user without password', async () => {
          let response = await Rest.post('/usuarios', Factory.invalid_user('missing_password'))
          expect(response).to.has.status(400)
          expect(response.body.password).to.eql('password é obrigatório')
      });

      it('Should not register a user if administrador is non boolean', async () => {
          let response = await Rest.post('/usuarios', Factory.invalid_user('administrator_non_boolean'))
          expect(response).to.has.status(400)
          expect(response.body.administrador).to.eql("administrador deve ser 'true' ou 'false'")
      });
});
