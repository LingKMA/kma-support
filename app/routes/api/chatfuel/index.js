const router = require("express").Router();
const {chatfuelValidator} = require("@helpers/validator");
const controller = require("@controllers/chatfuel/");
module.exports = function({models}) {
    router.get("/", chatfuelValidator, controller({models}));
    return router;
}
