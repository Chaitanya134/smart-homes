const fs = require("fs");
const csv = require('csvtojson');

const { io } = require("./server");
io.on("connection", socket => {
    console.log(socket.id);

    socket.on("dashboard", async () => {
        const chartData = {};
        socket.emit("start-loading");
        const files = fs.readdirSync("public/data");
        files.forEach(async (file) => {
            const data = await csv({ output: "csv" }).fromFile("public/data/" + file);
            // const data = fs.readFileSync("public/data/" + file);
            const newData = data.map(row => Number(row[0]));
            console.log(newData);
            console.log(typeof newData);
            chartData[file] = newData;
        });
        socket.emit("stop-loading");
        index = 0;
        setInterval(() => {
            files.forEach(file => {
                if (index >= chartData[file].length) index = 0;
                socket.emit("dashboard-data", file, chartData[file][index]);
                index++;
            })
        }, 1000)
    });
});