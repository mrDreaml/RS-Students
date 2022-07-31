import Fetch from './fetch'

class RequestService {
    constructor(host) {
        this.connection = new Fetch(host)
    }

    #onError(errror) {
        // describe error
        console.error()
    }

    request(...params) {
        return this.connection.request(...params).catch(this.#onError)
    }
}

export default RequestService
