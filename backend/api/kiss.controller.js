import KissDAO from "../dao/kissDAO.js";

export default class KissController {
    static async apiGetAll(req, res, next) {
        res.json(await KissDAO.all());
    }

    static async apiGetOne(req, res, next) {
        res.json(await KissDAO.one(req.params.code));
    }

    static async apiPost(req, res, next) {
        res.json(await KissDAO.create(req.body.longUrl));
    }
}