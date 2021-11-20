import http from "../http-common.js";

class KissDataService {
    getAll(){
        return http.get();
    }

    get(code) {
        return http.get('/' + code);
    }

    create(longUrl){
        let data = {
            "longUrl": longUrl
        }
        return http.post('', data);
    }
}

export default new KissDataService();