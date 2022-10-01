import { prisma } from '../../../../database/prismaClient'

export class DeleteEventUseCase {
  async execute (id: string) {
    const event = await prisma.events.findUnique({
      where: {
        id
      }
    })

    if (!event) {
      throw new Error('Event not found')
    }

    await prisma.events.delete({
      where: {
        id
      }
    })
  }
}
