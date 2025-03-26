const app = require("../src/app");
const http = require("http");
const chokidar = require("chokidar");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("sendMessage", (msg) => {
        io.emit("receiveMessage", msg);
    });

    chokidar.watch("./src/views").on("change", () => {
        console.log("File EJS changed, reloading...");
        io.emit("reload");
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
