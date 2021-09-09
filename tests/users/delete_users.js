import { Factory } from '../../factory/factory.js';
import { Rest } from '../../services/rest.js';

describe('Get Users', () => {
    let valid_user_id;
    before(async () => {
        let response = await Rest.post('/usuarios', Factory.user())
        valid_user_id = response.body._id
    });

    it('Should delete an existent user', async () => {
        let response = await Rest.delete(`/usuarios/${valid_user_id}`)
        expect(response).to.has.status(200)
        expect(response.body.message).to.eql('Registro excluído com sucesso')
    });

    it('Should not delete an user that does not exist', async () => {
        let response = await Rest.delete('/usuarios/blablabla')
        expect(response).to.has.status(200)
        expect(response.body.message).to.eql('Nenhum registro excluído')
    });
});
