const express = require('express')
const app = express()
const cors = require('cors')


//middleware
app.use(express.json())
app.use(cors())


//Routes
//Register and Login
app.use('/auth', require('./routes/jwtAuth'))


//dashboard router
app.use('/dashboard', require('./routes/dashboard'))


//Server live
app.listen(5000,()=>{
    console.log('server running on port 5000')
})