const app = require('./app');
const cors = require("cors");
const { Server } = require("socket.io");
const connectDatabase = require('./config/database');
const dotenv = require("dotenv");
// const cloudinary = require("cloudinary");

//connecting to database
connectDatabase();

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// })

app.use(cors());

//config
dotenv.config({path:"backend/config/config.env"});

const server = app.listen(process.env.PORT, () => { 
    console.log(`Server is running on port: ${process.env.PORT}`);
})

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
})

io.on("connection", (socket) => {
    socket.on("join_room", (data) => {
        socket.join(data);
    })

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    })

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    })
})