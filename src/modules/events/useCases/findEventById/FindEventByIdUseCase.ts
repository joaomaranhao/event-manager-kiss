import { prisma } from '../../../../database/prismaClient'

export class FindEventByIdUseCase {
  async execute (id: string) {
    const event = await prisma.events.findUnique({
      where: {
        id
      }
    })

    return event
  }
}
