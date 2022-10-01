import { prisma } from '../../../../database/prismaClient'

export class ListAllEventsUseCase {
  async execute () {
    const events = await prisma.events.findMany()

    return events
  }
}
