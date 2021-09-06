import * as base_uri from '../support/env.js'
const request = chai.request(base_uri.default)

export class Rest {
    static post(endpoint, payload) {
        return request.post(endpoint).send(payload)
    }

    static delete(endpoint) {
        return request.delete(endpoint)
    }

    static get(endpoint) {
        return request.get(endpoint)
    }

    static put(endpoint, payload) {
        return request.put(endpoint).send(payload)
    }
}