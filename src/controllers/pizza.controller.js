import PizzaService from '../services/pizza.service.js'

export default class PizzaController {
  constructor() {
    this.service = new PizzaService()
  }

  get = async (req, res) => {
    res.json(await this.service.get())
  }

  getByID = async (req, res) => {
    const { id } = req.params
    res.json(await this.service.getByID(id))
  }

  create = async (req, res) => {
    const data = req.body
    res.json(await this.service.create(data))
  }

  update = async (req, res) => {
    const { id } = req.params
    const data = req.body
    res.json(await this.service.update(id, data))
  }

  delete = async (req, res) => {
    const { id } = req.params
    res.json(await this.service.delete(id))
  }
}
