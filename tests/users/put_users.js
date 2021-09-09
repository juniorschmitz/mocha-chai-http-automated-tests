import { Factory } from '../../factory/factory.js';
import { Rest } from '../../services/rest.js';

describe('Put Users', () => {
    let payload_update_user
    let user_id
    before('Create a new user for updating', async () => {
        let user = Factory.user()
        let response = await Rest.post('/usuarios', user)
        expect(response).to.has.status(201)
        payload_update_user = user
        user_id = response.body._id
    });

    it('Should update a user', async () => {
        payload_update_user.email = Factory.email()
        let response = await Rest.put(`/usuarios/${user_id}`, payload_update_user)
        expect(response).to.has.status(200)
        expect(response.body.message).to.be.eql('Registro alterado com sucesso')
    });

    it('Should not update if a id is not passed', async () => {
      let response = await Rest.put('/usuarios', Factory.user())
      expect(response).to.has.status(405)
      expect(response.body.message).to.contain('Não é possível realizar PUT em /usuarios.')
  });
});