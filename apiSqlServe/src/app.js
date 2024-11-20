import express from 'express'
import empresasRoutes from './routes/empresa.routes.js'


const app = express()
app.use(empresasRoutes)

export default app