import React from 'react'

import { UserRepository } from '@core-business/repositories'
import { LoginService } from '@core-business/services/login'

export default class RootService {
  loginService

  constructor() {
    this.loginService = new LoginService(new UserRepository())
  }
}

const ServicesContext = React.createContext(new RootService())
export const useServices = () => React.useContext(ServicesContext)
