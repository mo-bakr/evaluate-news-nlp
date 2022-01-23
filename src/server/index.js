const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const bodyParser = require("body-parser")
const cors = require("cors")
const axios = require("axios")

// App Setup
const app = express()

// Cores
app.use(express.static(path.resolve(__dirname, '../../dist')))
app.use(cors())

// BodyParser
app.use(bodyParser())

// Server
app.get("/", (req, res) => { res.sendFile(path.resolve(__dirname, '../../dist/index.html')) })
app.listen(8081, () => { console.log("server fired-up on port 8081") })

// API
app.post("/test", (req, res) => {
    console.log("*Called*")

    let url = req.body.url
    axios.post("https://api.meaningcloud.com/sentiment-2.1", {
        key: process.env.API_KEY,
        lang: "en",
        url: url
    })
        .then(response => response.data)
        .then(data => {
            res.json({
                "model": data["model"],
                "score_tag": data["score_tag"],
                "agreement": data["agreement"],
                "subjectivity": data["subjectivity"],
                "confidence": data["confidence"],
                "irony": data["irony"]
            })
        })
        .catch(err => console.log(err))
})