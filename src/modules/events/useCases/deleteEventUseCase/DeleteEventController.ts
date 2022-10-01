import { Request, Response } from 'express'
import { DeleteEventUseCase } from './DeleteEventUseCase'

export class DeleteEventController {
  async handle (request: Request, response: Response) {
    const { id } = request.params

    const deleteEventsUseCase = new DeleteEventUseCase()

    await deleteEventsUseCase.execute(id)

    return response.status(204).send()
  }
}
