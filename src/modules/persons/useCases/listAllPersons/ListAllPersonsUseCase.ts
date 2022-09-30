import { prisma } from '../../../../database/prismaClient'

export class ListAllPersonsUseCase {
  async execute () {
    const persons = await prisma.persons.findMany()

    return persons
  }
}
