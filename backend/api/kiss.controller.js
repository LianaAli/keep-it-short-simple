import KissDAO from "../dao/kissDAO.js";
import Common from "../common/common.js";

export default class KissController {
    static async apiGetAll(req, res, next) {
        try {
            let urls = await KissDAO.all();
            res.json(urls);
        } catch (e) {
            Common.setResponseGenericError(res, e);
        }
    }

    static async apiGetOne(req, res, next) {
        try {
            let url = await KissDAO.one(req.params.code);

            if(!url) {
                Common.setResponseNotFound(res);
                return;
            }
            
            res.json(url);
        } catch (e) {
            Common.setResponseGenericError(res, e);
        }
    }

    static async apiPost(req, res, next) {
        try {
            let longUrl = req.body.longUrl || "";

            if(!Common.validateUrl(longUrl)) {
                Common.setResponseGenericError(res, process.env.KISS_ERROR_INVALID_URL_TEXT);
                return;
            }

            let url = await KissDAO.createReturn(longUrl);
            if(!url) {
                Common.setResponseNotFound(res);
                return;
            }

            res.json(url);
        } catch (e) {
            Common.setResponseGenericError(res, e);
        }
    }
}