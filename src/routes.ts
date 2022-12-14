import { Router } from 'express'
import { CreateEventController } from './modules/events/useCases/createEvent/CreateEventController'
import { FindEventByIdController } from './modules/events/useCases/findEventById/FindEventByIdController'
import { UpdateEventController } from './modules/events/useCases/updateEvent/UpdateEventController'
import { CreatePersonController } from './modules/persons/useCases/createPerson/CreatePersonController'
import { DeletePersonController } from './modules/persons/useCases/deletePerson/DeletePersonController'
import { ListAllPersonsController } from './modules/persons/useCases/listAllPersons/ListAllPersonsController'
import { FindPersonByIdController } from './modules/persons/useCases/findPersonById/FindPersonByIdController'
import { UpdatePersonController } from './modules/persons/useCases/updatePerson/UpdatePersonController'
import { ListAllEventsController } from './modules/events/useCases/listAllEvents/ListAllEventsController'
import { DeleteEventController } from './modules/events/useCases/deleteEventUseCase/DeleteEventController'
import { AddPersonToEventController } from './modules/events/useCases/addPersonToEventUseCase/AddPersonToEventController'
import { ListEventParticipantsController } from './modules/events/useCases/listEventParticipants/ListEventParticipantsController'
import { RemovePersonFromEventController } from './modules/events/useCases/removePersonFromEvent/RemovePersonFromEventController'

export const routes = Router()

const createPersonController = new CreatePersonController()
const updatePersonController = new UpdatePersonController()
const listAllPersonsController = new ListAllPersonsController()
const findPersonByIdController = new FindPersonByIdController()
const deletePersonController = new DeletePersonController()

const createEventController = new CreateEventController()
const findEventById = new FindEventByIdController()
const updateEventController = new UpdateEventController()
const listAllEventsController = new ListAllEventsController()
const deleteEventController = new DeleteEventController()

const addPersonToEventController = new AddPersonToEventController()
const listEventParticipantsController = new ListEventParticipantsController()
const removePersonFromEvent = new RemovePersonFromEventController()

routes.post('/person', createPersonController.handle)
routes.put('/person/:id', updatePersonController.handle)
routes.get('/person', listAllPersonsController.handle)
routes.get('/person/:id', findPersonByIdController.handle)
routes.delete('/person/:id', deletePersonController.handle)

routes.post('/event', createEventController.handle)
routes.get('/event/:id', findEventById.handle)
routes.put('/event/:id', updateEventController.handle)
routes.get('/event', listAllEventsController.handle)
routes.delete('/event/:id', deleteEventController.handle)

routes.post('/event/person', addPersonToEventController.handle)
routes.get('/event/:id/person', listEventParticipantsController.handle)
routes.delete('/event/:eventId/person/:personId', removePersonFromEvent.handle)
