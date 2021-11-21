import http from "../http-common.js";

class KissDataService {
    getAll(){
        return http.get('/urls');
    }

    get(code) {
        return http.get('/url?code=' + code);
    }

    create(longUrl){
        let data = {
            "longUrl": longUrl
        }
        return http.post('/url-new', data);
    }
}

export default new KissDataService();