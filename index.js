const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = 5000
const app = express()

app.use(express.json({limit: '25mb'}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/img', express.static(path.join(__dirname, 'img')))
app.use(cors())
global.cash = {}


app.get('/', function (req, res) {
    res.send('Hello World')
  })

function startApp(){
    try{
       app.listen(PORT, () => console.log(`SERVER START ON PORT ${PORT}`))
    }
    catch(e){
       console.log(e)
    }
}

startApp()
