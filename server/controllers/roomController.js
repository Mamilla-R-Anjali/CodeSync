// Create Room
const createRoom = (req, res) => {
    res.json({
        success: true,
        message: "Room created successfully"
    });
};

// Join Room
const joinRoom = (req, res) => {
    const { roomId } = req.params;

    res.json({
        success: true,
        message: `Joined room ${roomId}`
    });
};

module.exports = {
    createRoom,
    joinRoom
};