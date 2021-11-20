import express from 'express';
import KissCtrl from './kiss.controller.js';

const router = express.Router();

router.route("/")
    .get(KissCtrl.apiGetAll)
    .post(KissCtrl.apiPost);

router.route("/:code")
    .get(KissCtrl.apiGetOne);

export default router;