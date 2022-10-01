import { Request, Response } from 'express'
import { RemovePersonFromEventUseCase } from './RemovePersonFromEventUseCase'

export class RemovePersonFromEventController {
  async handle (request: Request, response: Response) {
    try {
      const { eventId, personId } = request.params

      const removePersonFromEventUseCase = new RemovePersonFromEventUseCase()

      await removePersonFromEventUseCase.execute(eventId, personId)

      return response.status(204).send()
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({
          message: error.message
        })
      }
    }
  }
}
