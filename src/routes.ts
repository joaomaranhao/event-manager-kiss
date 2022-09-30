import { Router } from 'express'
import { CreatePersonController } from './modules/persons/useCases/createPerson/CreatePersonController'
import { ListAllPersonsController } from './modules/persons/useCases/listAllPersons/ListAllPersonsController'
import { UpdatePersonController } from './modules/persons/useCases/updatePerson/UpdatePersonController'

export const routes = Router()

const createPersonController = new CreatePersonController()
const updatePersonController = new UpdatePersonController()
const listAllPersonsController = new ListAllPersonsController()

routes.post('/person', createPersonController.handle)
routes.put('/person/:id', updatePersonController.handle)
routes.get('/person', listAllPersonsController.handle)
