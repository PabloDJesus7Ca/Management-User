const express = require('express')
const cors = require('cors')
require('dotenv').config()

const personasRouter = require('./src/routes/personas.routes')
const app = express()

app.use(cors({ origin: process.env.URL_ENDPOINT }))

app.use(express.json())

app.use('/api/personas', personasRouter)

app.get('/', (req, res) => res.json({ status: 'API funcionando' }))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
