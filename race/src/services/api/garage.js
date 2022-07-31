import RequestService from '../request'

class Garage extends RequestService {
    constructor(host) {
        super(host)
    }

    async getCar(id) {
        // probably you should use new URLSearchParams to build url
        this.request('garage{QUERY_PARAMS}')
    }
}

export default Garage
