const fs = require("fs");
const csv = require('csvtojson');

const { io } = require("./server");
io.on("connection", socket => {
    console.log(socket.id);

    socket.on("dashboard", async (fileName) => {
        const chartData = {};
        socket.emit("start-loading");
        const files = fs.readdirSync("public/data");
        console.log(files);

        const data = await csv({ output: "csv" }).fromFile("public/data/" + fileName.toLowerCase() + ".csv");
        const newData = data.map(row => Number(row[0]));
        console.log(newData);
        // console.log(typeof newData);
        chartData[fileName.toLowerCase() + ".csv"] = newData;


        // files.forEach(async (file) => {
        //     console.log(file, fileName.toLowerCase());
        //     if (!file.includes(fileName.toLowerCase())) return;

        //     const data = await csv({ output: "csv" }).fromFile("public/data/" + file);
        //     const newData = data.map(row => Number(row[0]));
        //     console.log(newData);
        //     // console.log(typeof newData);
        //     chartData[file] = newData;
        // });
        console.log(chartData);
        socket.emit("stop-loading");
        let indices = { [fileName.toLowerCase() + ".csv"]: 0 };
        setInterval(() => {
            files.forEach(file => {
                if (!chartData[file]) return;
                if (indices[file] >= chartData[file].length) indices[file] = 0;
                socket.emit("dashboard-data", file, chartData[file][indices[file]]);
                indices[file]++;
            })
        }, 1000)
    });
});