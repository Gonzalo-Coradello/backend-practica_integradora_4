import PizzaService from '../../src/services/pizza.service.js'
import chai from 'chai'
import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017', { dbName: 'db_clase44_test' })
const service = new PizzaService()
const expect = chai.expect

describe('Test CRUD Pizza Servie', () => {
  before(async function () {
    await mongoose.connection.db.dropCollection('pizzas', () => {
      console.log('Collection dropped')
    })

    this.timeout(2000)
  })

  it('Must return all pizzas', async () => {
    const result = await service.get()
    expect(result).to.be.deep.equal([])
  })

  it('Must create a pizza', async () => {
    const result = await service.create({
      name: 'Fugazzeta',
      size: 'M',
      price: 100,
    })

    console.log(result)

    expect(result).to.have.property('_id')
  })
})
