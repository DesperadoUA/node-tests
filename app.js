require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
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

app.post('/api/users', function (req, res) {
    const response = {
        confirm: 'ok',
        body: {
          msg: 'Hello world'
        }
    }
   return res.status(200).json(response)
})

function startApp(){
    try{
       app.listen(PORT, () => {
         console.log(`SERVER START ON PORT ${PORT} ENV ${process.env.NODE_ENV}`)
        } 
       )
    }
    catch(e){
      console.log(e)
    }
}

if(process.env.NODE_ENV !== 'test') startApp()
module.exports = app
