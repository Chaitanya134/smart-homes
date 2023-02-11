const { io } = require("./server");
io.on("connection", socket => {
    console.log(socket.id);

    socket.on("dashboard", () => {
        console.log(socket.id, 'dashhhh');
        socket.emit("hello", "hello world");
    });
});