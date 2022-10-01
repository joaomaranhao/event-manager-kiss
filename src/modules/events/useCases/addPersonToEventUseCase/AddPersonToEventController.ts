import { Request, Response } from 'express'
import { AddPersonToEventUseCase } from './AddPersonToEventUseCase'

export class AddPersonToEventController {
  async handle (request: Request, response: Response) {
    const requiredFields = ['eventId', 'personId']
    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response.status(400).json({
          error: `${field} is required`
        })
      }
    }
    const { eventId, personId } = request.body

    const addPersonToEventUseCase = new AddPersonToEventUseCase()

    try {
      await addPersonToEventUseCase.execute({ eventId, personId })
      return response.status(201).send()
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({
          error: error.message
        })
      }
    }
  }
}
