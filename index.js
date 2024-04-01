const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')

require("./db/connection")

app.use(express.json())
app.use(cors())


app.use("/api" , require("./routes/services"))
app.use("/api" , require("./routes/contacts"))
app.use("/api" , require("./routes/products"))
app.use("/api" , require("./routes/users"))

app.listen(port , () => {
    console.log(`Listening to the port ${port}`);
})