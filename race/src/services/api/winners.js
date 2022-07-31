import RequestService from '../request'

class Winners extends RequestService {
    constructor(host) {
        super(host)
    }

    async getWinners(...params) {
        // probably you should use new URLSearchParams to build url
        this.request('garage{QUERY_PARAMS}')
    }
}

export default Winners
