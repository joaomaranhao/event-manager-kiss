import { Request, Response } from 'express'
import { CreateEventUseCase } from './CreateEventUseCase'

export class CreateEventController {
  async handle (request: Request, response: Response) {
    const requiredFields = ['title', 'description', 'date']
    for (const field of requiredFields) {
      if (!request.body[field]) {
        throw new Error(`${field} is required!`)
      }
    }
    const { title, description, date } = request.body
    const createEventUseCase = new CreateEventUseCase()
    const event = await createEventUseCase.execute({ title, description, date })
    return response.status(201).json(event)
  }
}
