import Pusher from "pusher";
import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import cors from 'cors'

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080


export const pusher = new Pusher({
  appId: process.env.app_id,
  key: process.env.key,
  secret: process.env.secret,
  cluster: process.env.cluster,
  useTLS: true,
});

app.listen(port, function () {
  console.log('Node app is running at localhost:' + port)
})