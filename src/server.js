import express from 'express'

const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', function(req,res){
  res.send('<h1>ffffffff</h1>')
}
)