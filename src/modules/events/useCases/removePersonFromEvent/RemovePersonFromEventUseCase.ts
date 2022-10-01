import { prisma } from '../../../../database/prismaClient'

export class RemovePersonFromEventUseCase {
  async execute (eventId: string, personId: string) {
    const event = await prisma.events.findUnique({
      where: {
        id: eventId
      }
    })

    if (!event) {
      throw new Error('Event not found')
    }

    const person = await prisma.persons.findUnique({
      where: {
        id: personId
      }
    })

    if (!person) {
      throw new Error('Person not found')
    }

    const participant = await prisma.eventParticipants.findFirst({
      where: {
        eventId,
        personId
      },

      select: {
        id: true
      }
    })

    if (!participant) {
      throw new Error('Participant not found')
    }

    await prisma.eventParticipants.delete({
      where: {
        id: participant.id
      }
    })
  }
}
