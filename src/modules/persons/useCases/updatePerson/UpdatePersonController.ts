import { Request, Response } from 'express'
import { UpdatePersonUseCase } from './UpdatePersonUseCase'

export class UpdatePersonController {
  async handle (request: Request, response: Response) {
    if (!request.body.name) {
      throw new Error('Name is required')
    }
    const { id } = request.params
    const { name } = request.body

    const updatePersonUseCase = new UpdatePersonUseCase()

    const person = await updatePersonUseCase.execute({ id, name })

    return response.status(200).json(person)
  }
}
