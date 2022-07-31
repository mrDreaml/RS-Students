class Fetch {
    constructor(host) {
        this.host = host
    }

    async request(url, options) {
        return fetch(`${this.host}/${url}`, options)
    }
}

export default Fetch
