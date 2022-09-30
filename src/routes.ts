import { Router } from 'express'
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

routes.post('/person', createPersonController.handle)
routes.put('/person/:id', updatePersonController.handle)
routes.get('/person', listAllPersonsController.handle)
routes.get('/person/:id', listPersonByIdController.handle)
routes.delete('/person/:id', deletePersonController.handle)
