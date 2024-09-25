import e from "express";
import "dotenv/config";
import "./config/db.js"
import movie_router from "./routes/movie-route.js"
import user_router from "./routes/user-route.js"

const app = e();

app.use(e.json());
app.use("/movie", movie_router)
app.use("/user", user_router)

app.listen(process.env.API_PORT, () => console.log("Server running"));
