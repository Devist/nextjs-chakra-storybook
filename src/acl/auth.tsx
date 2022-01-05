import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'universal-cookie'
import Router, { useRouter } from 'next/router'
import { APIClient } from '@core-business/network/APIClient'
import { UserAPI } from '@core-business/network/apis/UserAPI'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const cookies = new Cookies()

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = cookies.get('token')
      if (token) {
        // 유효한 토큰인지 검증 후, 유효한 경우 axios에 기본 헤더에 토큰 추가
        //   const await APIClient.shared.request(new UserAPI.ME())
        // APIClient.defaults.headers.Authorization = `Bearer ${token}`
        // const { data: user } = await api.get('users/me')
        if (user) setUser(user)
      }
      setLoading(false)
    }
    loadUserFromCookies()
  }, [])

  const login = async (email, password) => {
    // const { data: token } = await api.post('auth/login', { email, password })
    // if (token) {
    //   Cookies.set('token', token, { expires: 60 })
    //   api.defaults.headers.Authorization = `Bearer ${token.token}`
    //   const { data: user } = await api.get('users/me')
    //   setUser(user)
    // }
  }

  const logout = (email, password) => {
    // Cookies.remove('token')
    // setUser(null)
    // delete api.defaults.headers.Authorization
    window.location.pathname = '/login'
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
