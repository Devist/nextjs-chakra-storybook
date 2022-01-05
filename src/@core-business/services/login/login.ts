import { ILoginData, IUser, IUserData, Login, User } from '@core-business/entities'
import { ILoginService } from './login.types'
import { UserRepository, IUserRepository, IUserRepositoryMock } from '@core-business/repositories'

const idsFromEmail = {
  'alexsando@ssg.com': 1,
  'kschoi@ssg.com': 2,
  'hwangsc@ssg.com': 3,
  'whatsup@ssg.com': 4,
  default: -1
}

export class LoginService implements ILoginService {
  constructor(
    private readonly userRepository: IUserRepository | IUserRepositoryMock = new UserRepository()
  ) {}

  /**
   * # 로그인 시도
   * 성공시, 쿠키를 저장하고, userId를 반환합니다.
   */
  async loginUser(loginData: ILoginData): Promise<IUser> {
    if (loginData.password !== 'P@ssw0rd') await Promise.reject('비밀번호 틀림')

    const userId = this.matchIdByFakeEmail(loginData.email)

    return await this.userRepository.fetchItem(userId).then((userData: IUserData) => {
      this.userRepository.saveToken(userData.id)

      userData.email =
        Object.keys(idsFromEmail).find(
          (key) => idsFromEmail[key as keyof typeof idsFromEmail] === userId
        ) || 'undefined'
      return new User(userData)
    })
  }

  isValidEmail(loginData: ILoginData): boolean {
    return new Login(loginData).isValidEmail()
  }

  isValidPassword(loginData: ILoginData): boolean {
    return new Login(loginData).isValidPassword()
  }

  private matchIdByFakeEmail(email: string) {
    return idsFromEmail[email as keyof typeof idsFromEmail] || idsFromEmail.default
  }
}
