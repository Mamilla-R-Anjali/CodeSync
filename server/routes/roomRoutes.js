const express = require("express");

const router = express.Router();

//Creating the room
router.post("/", (req, res) => {
    res.json({
        message: "Room created successfully"
    });
});

// Joining of Room
router.post("/:roomId/join", (req, res) => {
    res.json({
        message: `Joined room ${req.params.roomId}`
    });
});

module.exports = router;