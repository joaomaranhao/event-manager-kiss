import { Request, Response } from 'express'
import { ListEventParticipantsUseCase } from './ListEventParticipantsUseCase'

export class ListEventParticipantsController {
  async handle (request: Request, response: Response) {
    const { id } = request.params

    const listEventParticipantsUseCase = new ListEventParticipantsUseCase()

    try {
      const participants = await listEventParticipantsUseCase.execute(id)
      return response.status(200).json(participants)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({
          error: error.message
        })
      }
    }
  }
}
