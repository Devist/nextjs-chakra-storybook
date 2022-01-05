import { IUserData } from '@core-business/entities'
import { APIClient } from '@core-business/network/APIClient'
import { UserAPI } from '@core-business/network/apis/UserAPI'
import { IUserRepository } from './user.types'
import Cookies from 'universal-cookie'

export class UserRepository implements IUserRepository {
  cookies = new Cookies()

  async fetchItem(id: number): Promise<IUserData> {
    return await APIClient.shared.request(new UserAPI.Fetch(id))
  }

  saveToken(token: number) {
    this.cookies.set('token', token, {
      expires: new Date(new Date().setDate(new Date().getDate() + 1)),
    })
  }

  getToken(): number {
    return this.cookies.get('token')
  }
}
