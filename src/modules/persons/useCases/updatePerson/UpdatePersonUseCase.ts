import { prisma } from '../../../../database/prismaClient'

export interface UpdatePersonDTO {
  id: string
  name: string
}

export class UpdatePersonUseCase {
  async execute (data: UpdatePersonDTO) {
    const person = await prisma.persons.update({
      where: {
        id: data.id
      },
      data
    })

    return person
  }
}
