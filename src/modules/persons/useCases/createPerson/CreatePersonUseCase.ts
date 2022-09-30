import { prisma } from '../../../../database/prismaClient'

interface CreatePersonDTO {
  name: string
}

export class CreatePersonUseCase {
  async execute (data: CreatePersonDTO) {
    const person = await prisma.persons.create({
      data
    })

    return person
  }
}
