import { prisma } from '../../../../database/prismaClient'

export class DeletePersonUseCase {
  async execute (id: string) {
    const person = await prisma.persons.findFirst({
      where: {
        id
      }
    })

    if (!person) {
      throw new Error('Person not found')
    }

    await prisma.persons.delete({
      where: {
        id
      }
    })
  }
}
