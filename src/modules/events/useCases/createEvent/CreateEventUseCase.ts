import { prisma } from '../../../../database/prismaClient'

export interface CreateEventDTO {
  title: string
  description: string
  date: Date
}

export class CreateEventUseCase {
  async execute (data: CreateEventDTO) {
    const event = await prisma.events.create({
      data
    })

    return event
  }
}
