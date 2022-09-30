import { Request, Response } from 'express'
import { ListAllPersonsUseCase } from './ListAllPersonsUseCase'

export class ListAllPersonsController {
  async handle (request: Request, response: Response) {
    const listAllPersonsUseCase = new ListAllPersonsUseCase()

    const persons = await listAllPersonsUseCase.execute()

    return response.status(200).json(persons)
  }
}
