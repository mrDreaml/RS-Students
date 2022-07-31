import Engine from './engine'
import Winners from './winners'
import Garage from './garage'

class API {
    constructor() {
        this.engine = new Engine()
        this.winners = new Winners()
        this.garage = new Garage()
    }

    async startEngine(id) {
        return this.engine.start(id)
    }

    async getWinners(...p) {
        return this.winners.getWinners(...p)
    }

    async getCar(...p) {
        return this.garage.getCar(...p)
    }
}

export default API
