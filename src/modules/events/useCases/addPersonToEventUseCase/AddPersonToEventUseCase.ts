import { prisma } from '../../../../database/prismaClient'

interface AddPersonToEventDTO {
  eventId: string
  personId: string
}

export class AddPersonToEventUseCase {
  async execute (data: AddPersonToEventDTO) {
    const { eventId, personId } = data

    const eventExists = await prisma.events.findUnique({
      where: {
        id: eventId
      }
    })

    if (!eventExists) {
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

    const event = await prisma.eventParticipants.create({
      data
    })

    return event
  }
}
