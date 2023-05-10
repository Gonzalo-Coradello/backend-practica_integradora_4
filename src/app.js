import express from 'express'
import router from './routes/pizza.router.js'
import mongoose from 'mongoose'
import { loggerHttp } from './utils/logger.js'
import __dirname from './utils/utils.js'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUiExpress from 'swagger-ui-express'

const specs = swaggerJSDoc({
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Documentación de Pizzas',
      description: 'Documentación detallada de API de pizzas'
    }
  },
  apis: [`${__dirname}/../docs/*.yaml`]
})

console.log(__dirname)

const app = express()
app.use(express.json())
app.use(loggerHttp)

app.use('/swagger', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))
app.use('/api/pizza', router)
app.use('/', (req, res) => res.json({ status: 'ok' }))

mongoose.connect('mongodb://127.0.0.1:27017', { dbName: 'db_clase44' }).then(() => {
  app.listen(8080, () => console.log('Listening...'))
})
