import { prisma } from '../../../../database/prismaClient'

export class ListEventParticipantsUseCase {
  async execute (id: string) {
    const event = await prisma.events.findUnique({
      where: {
        id
      }
    })

    if (!event) {
      throw new Error('Event not found')
    }

    const participantsIds = await prisma.eventParticipants.findMany({
      where: {
        eventId: id
      },
      select: {
        personId: true
      }
    })

    const participants = await prisma.persons.findMany({
      where: {
        id: {
          in: participantsIds.map(participant => participant.personId)
        }
      }
    })

    return participants
  }
}
