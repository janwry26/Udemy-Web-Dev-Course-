const express = require("express")
const app = express()

app.use(cors({
    origin: ''
}))
app.get("/data", (req, res) => {
    res.json("")
})
app.listen(3000)