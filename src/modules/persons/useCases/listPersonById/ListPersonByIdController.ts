import { Request, Response } from 'express'
import { ListPersonByIdUseCase } from './ListPersonByIdUseCase'

export class ListPersonByIdController {
  async handle (request: Request, response: Response) {
    const { id } = request.params

    const listPersonByIdUseCase = new ListPersonByIdUseCase()

    const person = await listPersonByIdUseCase.execute(id)

    return response.status(200).json(person)
  }
}
