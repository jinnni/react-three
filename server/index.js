const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const domainsFromEnv = 'http://localhost:3000';
const app = express();
const whitelist = domainsFromEnv.split(",").map(item => item.trim());
const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
}
app.use(cors(corsOptions));
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from Pritam Dey!" });
// });
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
