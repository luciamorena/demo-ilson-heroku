require('dotenv/config')

const app = require('express')()
const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.status(200).send(`API 2.0.0 - ${Math.random()}`)
})

app.listen(port,() => console.log(`SERVIDOR ONLINE  - ${port}`))