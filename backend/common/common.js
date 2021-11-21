export default class Common {
    static randomCode() {
        return Math.random().toString(36).substr(2, process.env.KISS_URL_CODE_MAXLENGTH);
    }

    static validateUrl(value) {
        return this.validateUrlBaseLength(value) && this.validateUrlPattern(value);
    }

    static validateUrlBaseLength(value) {
        return value.length > (parseInt(process.env.KISS_URL_BASE_MAXLENGTH) + parseInt(process.env.KISS_URL_CODE_MAXLENGTH));
    }

    static validateUrlPattern(value) {
        const regex = new RegExp('(https?://)([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        return regex.test(value);
    }

    static setResponseNotFound(res) {
        res.status(process.env.KISS_NOTFOUND_CODE).json({ error: process.env.KISS_NOTFOUND_TEXT });
    }

    static setResponseGenericError(res, err) {
        res.status(process.env.KISS_ERROR_CODE).json({ error: err });
    }
}