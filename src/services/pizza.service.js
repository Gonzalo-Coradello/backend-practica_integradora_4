import PizzaModel from '../models/pizza.model.js'
import { logger } from '../utils/logger.js'

export default class PizzaService {
  get = async () => {
    return await PizzaModel.find()
  }

  getByID = async id => {
    return await PizzaModel.findById(id)
  }

  create = async data => {
    try {
      return await PizzaModel.create(data)
    } catch (error) {
      logger.error(error)
      return {}
    }
  }

  update = async (id, data) => {
    return await PizzaModel.updateOne({ _id: id }, { $set: data })
  }

  delete = async id => {
    return await PizzaModel.deleteOne({ _id: id })
  }
}
