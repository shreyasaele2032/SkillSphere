
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

dotenv.config();
const connectDB = require("./config/db");
connectDB();



const app = express();





app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (
  origin.startsWith("http://localhost:") ||
  origin === "https://skillsphereproject.vercel.app"
) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);


app.use(express.json());


app.use((req, res, next) => {

  console.log(
    "REQUEST RECEIVED:",
    req.method,
    req.url
  );

  next();

});


app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/uploads", express.static("uploads"));





app.get("/", (req, res) => {

  res.json({

    success: true,
    message: "Welcome to SkillSphere API 🚀",

  });

});







app.use(
  "/api/auth",
  require("./routes/authRoutes")
);



app.use(
  "/api/users",
  require("./routes/userRoutes")
);

app.use("/api/profile", require("./routes/profileRoutes"));



app.use(
  "/api/gigs",
  require("./routes/gigRoutes")
);



const jobRoutes = require("./routes/jobRoutes");

console.log("Job routes imported");

app.use(
  "/api/jobs",
  jobRoutes
);


const adminRoutes = require("./routes/adminRoutes");


app.use(
  "/api/admin",
  adminRoutes
);


app.use(
  "/api/chat",
  require("./routes/chatRoutes")
);



app.use(
  "/api/milestones",
  require("./routes/milestoneRoutes")
);



app.use(
  "/api/payments",
  require("./routes/paymentRoutes")
);






const {
  notFound,
  errorHandler,
} = require("./middleware/errorMiddleware");



app.use(notFound);



app.use(errorHandler);








const server = http.createServer(app);


const io = new Server(server, {

  cors: {

    origin: function (origin, callback) {

      if (!origin) {
        return callback(null, true);
      }

      if (
  origin.startsWith("http://localhost:") ||
  origin === "https://skillsphereproject.vercel.app"
) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));

    },

    methods: [
      "GET",
      "POST"
    ],

    credentials: true

  }

});

const initializeSocket = require("./socket/socket");

initializeSocket(io);






io.on(
  "connection",
  (socket)=>{


    console.log(
      "User connected:",
      socket.id
    );



    socket.on(
      "disconnect",
      ()=>{

        console.log(
          "User disconnected:",
          socket.id
        );

      }
    );


  }
);







const PORT = process.env.PORT || 8006;


server.listen(
  PORT,
  ()=>{

    console.log(
      `🚀 SkillSphere server running on port ${PORT}`
    );

  }
);