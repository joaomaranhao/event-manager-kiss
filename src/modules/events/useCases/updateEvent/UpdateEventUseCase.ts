import { prisma } from '../../../../database/prismaClient'

export interface UpdateEventDTO {
  title?: string
  description?: string
  date?: Date
}

export class UpdateEventUseCase {
  async execute (id: string, data: UpdateEventDTO) {
    const event = await prisma.events.findUnique({
      where: {
        id
      }
    })

    if (!event) {
      throw new Error('Event not found')
    }

    const updatedEvent = await prisma.events.update({
      where: {
        id
      },
      data
    })

    return updatedEvent
  }
}
