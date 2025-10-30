import express from 'express'
import cors from "cors";
import { Server } from "socket.io";
import { Request, Response } from 'express';

// interface reqBody {
//   lattitude: string;
//   longitude: string;
// }


const app = express();

app.use(cors());
app.use(express.json());

const io = new Server({
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

io.listen(3001 );

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
});

io.on("disconnect", (socket) => {
  console.log("Client disconnected:", socket.id);
});

app.post("/update-direction", (req: Request, res: Response) => {
  // Update the direction in the database or perform any necessary actions
});
