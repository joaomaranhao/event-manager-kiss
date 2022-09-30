import { Router } from 'express'
import { CreatePersonController } from './modules/persons/useCases/createPerson/CreatePersonController'

export const routes = Router()

const createPersonController = new CreatePersonController()

routes.post('/person', createPersonController.handle)
