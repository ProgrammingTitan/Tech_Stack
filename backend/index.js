const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');

require("dotenv").config();

// Set up express
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));


// Set up mongoose
mongoose.connect(process.env.MONGODB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
    useCreateIndex: true,
}, (err) => {
    if(err) throw err;
    console.log("MongoDB Connection Established");
})

// Set Routes

app.use("/api/users", require("./routes/userRouter"));
app.use("/api/emails", require("./routes/emailRouter"));
app.use("/api/headlines", require("./routes/headlineRouter"));
app.use("/api/articles", require("./routes/articleRouter"));

// For Deployment
// // Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('frontend/build'));
  
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//     });
//   }