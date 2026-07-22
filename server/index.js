const express = require("express");
const roomRoutes = require("./routes/roomRoutes");

const app = express();

const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to CodeSync Backend!");
});

app.use("/api/rooms", roomRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});