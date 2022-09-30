import { Request, Response } from 'express'
import { DeletePersonUseCase } from './DeletePersonUseCase'

export class DeletePersonController {
  async handle (request: Request, response: Response) {
    const { id } = request.params

    const deletePersonUseCase = new DeletePersonUseCase()

    await deletePersonUseCase.execute(id)

    return response.status(204).send()
  }
}
