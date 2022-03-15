import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IUser } from './../../types/types'

export const UserItemPage = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<'id'>()
  const navigate = useNavigate()
  useEffect(() => {
    fetchUser()
  }, [])
  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      setUser(response.data)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <button onClick={() => navigate('/users')}>Назад</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>Почта: {user?.email}</div>
      <div>Адрес проживания: {user?.address.city}, ул. {user?.address.street}</div>
    </div>
  )
}
