import axios from 'axios'
import { APP_CONFIG, paymentMethods } from './Constants'
class API {


    constructor() {
        this.axios_instance = axios.create()
        this.axios_instance.defaults.baseURL = APP_CONFIG.data.API_BASE_URL
        this.result = {}
    }
    setHeader(token) {
        this.axios_instance.defaults.headers.common['Authorization'] = "Bearer " + token;
    }
     get(resource) {
        return this.axios_instance.get(resource);

    }
     post(resource, payload) {
        return this.axios_instance.post(resource, payload)
    }

    put(resource, payload) {
        return this.axios_instance.post(resource, payload)
    }

    delete(resource) {
        return this.axios_instance.delete(resource)
    }

    getResult() {
        return this.result;
    }

}
export let api = new API()