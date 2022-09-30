import { prisma } from '../../../../database/prismaClient'

export class ListPersonByIdUseCase {
  async execute (id: string) {
    const person = await prisma.persons.findUnique({
      where: {
        id
      }
    })

    return person
  }
}
