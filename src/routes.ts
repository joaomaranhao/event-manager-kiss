import { Router } from 'express'
import { CreateEventController } from './modules/events/useCases/createEvent/CreateEventController'
import { FindEventByIdController } from './modules/events/useCases/findEventById/FindEventByIdController'
import { UpdateEventController } from './modules/events/useCases/updateEvent/UpdateEventController'
import { CreatePersonController } from './modules/persons/useCases/createPerson/CreatePersonController'
import { DeletePersonController } from './modules/persons/useCases/deletePerson/DeletePersonController'
import { ListAllPersonsController } from './modules/persons/useCases/listAllPersons/ListAllPersonsController'
import { ListPersonByIdController } from './modules/persons/useCases/listPersonById/ListPersonByIdController'
import { UpdatePersonController } from './modules/persons/useCases/updatePerson/UpdatePersonController'

export const routes = Router()

const createPersonController = new CreatePersonController()
const updatePersonController = new UpdatePersonController()
const listAllPersonsController = new ListAllPersonsController()
const listPersonByIdController = new ListPersonByIdController()
const deletePersonController = new DeletePersonController()

const createEventController = new CreateEventController()
const findEventById = new FindEventByIdController()
const updateEventController = new UpdateEventController()

routes.post('/person', createPersonController.handle)
routes.put('/person/:id', updatePersonController.handle)
routes.get('/person', listAllPersonsController.handle)
routes.get('/person/:id', listPersonByIdController.handle)
routes.delete('/person/:id', deletePersonController.handle)

routes.post('/event', createEventController.handle)
routes.get('/event/:id', findEventById.handle)
routes.put('/event/:id', updateEventController.handle)
