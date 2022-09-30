import { Request, Response } from 'express'
import { FindEventByIdUseCase } from './FindEventByIdUseCase'

export class FindEventByIdController {
  async handle (request: Request, response: Response) {
    const { id } = request.params

    const findEventByIdUseCase = new FindEventByIdUseCase()

    const event = await findEventByIdUseCase.execute(id)

    return response.status(200).json(event)
  }
}
