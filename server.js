const express = require("express");
const app = express();
const PORT = 8000

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

const AllMyJokeRoutes = require("./routes/joke.routes");
AllMyJokeRoutes(app);

app.listen(PORT, () => console.log(`The server is ready on port ${PORT}!`));