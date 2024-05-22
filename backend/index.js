const express  = require('express')
const cors = require('cors')
const app = express()

const indicadoRoutes = require('./routes/indicadoRoutes')
const apostaRoutes = require('./routes/apostaRoutes')

const host = '127.0.0.1'
const port = 3333

app.use(cors("http://localhost:5173/"))
app.use(express.json())
app.use('/indicados',indicadoRoutes)
app.use('/apostas',apostaRoutes)

app.listen(port, host,()=>{
    console.log(`Server running at http://${host}:${port}`)
})