import { Router } from 'express'
import { CreatePersonController } from './modules/persons/useCases/createPerson/CreatePersonController'
import { UpdatePersonController } from './modules/persons/useCases/updatePerson/UpdatePersonController'

export const routes = Router()

const createPersonController = new CreatePersonController()
const updatePersonController = new UpdatePersonController()

routes.post('/person', createPersonController.handle)
routes.put('/person/:id', updatePersonController.handle)
