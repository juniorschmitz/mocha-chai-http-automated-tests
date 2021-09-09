import { expect } from 'chai';
import { Rest } from '../../services/rest.js';
import { JsonValidator } from '../../support/utils/json_validator.js'

describe('Get Users', () => {
    let valid_user_id;
    it('Should return a list of valid users', async () => {
        let response = await Rest.get('/usuarios')
        expect(response).to.has.status(200)
        expect(response.body.usuarios).to.be.an('array')
        valid_user_id = response.body.usuarios[0]._id
    });

    it('Should return a single user', async () => {
        let response = await Rest.get(`/usuarios/${valid_user_id}`)
        expect(response).to.has.status(200)
        expect(response.body.nome).not.to.be.null
    });

    it('Should return the valid contract for single users', async() => {
        let response = await Rest.get(`/usuarios/${valid_user_id}`)
        expect(response).to.has.status(200)
        expect(JsonValidator.validateSchema('get_user', '200', response.body)).to.be.true
    });

    it('Should return the valid contract for all users', async() => {
        let response = await Rest.get('/usuarios')
        expect(response).to.has.status(200)
        expect(JsonValidator.validateSchema('get_users', '200', response.body)).to.be.true
    });
});