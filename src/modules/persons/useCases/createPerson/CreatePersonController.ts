import { Request, Response } from 'express'
import { CreatePersonUseCase } from './CreatePersonUseCase'

export class CreatePersonController {
  async handle (request: Request, response: Response) {
    const { name } = request.body

    const createPersonUseCase = new CreatePersonUseCase()

    const person = await createPersonUseCase.execute({ name })

    return response.status(201).json(person)
  }
}
