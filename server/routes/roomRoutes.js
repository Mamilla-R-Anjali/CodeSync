const express = require("express");

const router = express.Router();

const {
    createRoom,
    joinRoom
} = require("../controllers/roomController");

router.post("/", createRoom);

router.post("/:roomId/join", joinRoom);

module.exports = router;