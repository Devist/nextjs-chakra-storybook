import { mockLoginsData } from '@core-business/entities'
import { LoginService } from './login'
import { mockUserRepository } from '@core-business/repositories'

describe('>>> Login Service', () => {
  const mUserRepository = mockUserRepository()
  const loginService = new LoginService(mUserRepository)

  describe('>> loginUser 메소드', () => {
    it('alexsando@ssg.com / P@ssw0rd 로 로그인시, userId 1을 사용합니다.', async () => {
      const userData = mockLoginsData()[4]
      await loginService.loginUser(userData).then((userData) => {
        expect(userData.id).toBe(1)
      })
    })
  })
})
