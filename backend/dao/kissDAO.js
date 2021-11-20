import Common from "../common/common.js";
import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectId;

let kiss;

export default class KissDAO {
    static async injectDB(conn) {
        if(kiss) {
            return;
        }

        try {
            kiss = await conn.db(process.env.KISS_NS).collection("url");
        } catch (e) {
            console.error('Unable to establish a collection handle in KissDAO: ' + e);
        }
    }

    static async all() {
        return await kiss.find().toArray();
    }

    static async one(code) {
        return await kiss.findOne({ "code": code });
    }

    static async byId(id) {
        return await kiss.findOne(ObjectId(id));
    }

    static async create(longUrl) {
        if(!Common.validateUrl(longUrl)) {
            return "invalid url/url too short!";
        }

        let code = Common.randomCode();

        if(await this.one(code) != null){
            return this.create(longUrl);
        }

        let res = await kiss.insertOne({
            code: code,
            longUrl: longUrl
        });

        return this.byId(res.insertedId);
    }
}