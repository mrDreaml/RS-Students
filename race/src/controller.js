import API from './services/api'

// probably you shouldn't use controller if you will use Redux(such controller logic should placed at actionCreators)
class Controller {
    constructor() {
        this.ids = [] // fill ids
    }

    async startAll() {
        return Promise.all(this.ids.map(API.startEngine))
    }
}
