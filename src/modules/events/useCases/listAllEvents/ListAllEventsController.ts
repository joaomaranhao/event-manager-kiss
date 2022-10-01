import { Request, Response } from 'express'
import { ListAllEventsUseCase } from './ListAllEventsUseCase'

export class ListAllEventsController {
  async handle (request: Request, response: Response) {
    const listAllEventsUseCase = new ListAllEventsUseCase()

    const events = await listAllEventsUseCase.execute()

    return response.status(200).json(events)
  }
}
