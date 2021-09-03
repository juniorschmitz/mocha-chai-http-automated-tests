import * as base_uri from '../support/env.js'
const request = chai.request(base_uri.default)

export class Rest {
    static post(endpoint, payload) {
        return request.post(endpoint).send(payload)
    }
}