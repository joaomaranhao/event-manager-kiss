import { Request, Response } from 'express'
import { FindPersonByIdUseCase } from './FindPersonByIdUseCase'

export class FindPersonByIdController {
  async handle (request: Request, response: Response) {
    const { id } = request.params

    const listPersonByIdUseCase = new FindPersonByIdUseCase()

    const person = await listPersonByIdUseCase.execute(id)

    return response.status(200).json(person)
  }
}
