import { Request, Response } from 'express'
import { UpdateEventUseCase } from './UpdateEventUseCase'

export class UpdateEventController {
  async handle (request: Request, response: Response) {
    const { id } = request.params
    const { title, description, date } = request.body

    if (!title || !description || !date) {
      throw new Error('Missing required fields!')
    }

    const updateEventUseCase = new UpdateEventUseCase()

    const event = await updateEventUseCase.execute(id, {
      title,
      description,
      date
    })

    return response.status(200).json(event)
  }
}
