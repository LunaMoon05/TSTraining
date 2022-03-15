import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { UserList } from './UserList'
import { IUser } from './../types/types';

export const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([])
  useEffect(() => {
    fetchUsers()
  }, [])
  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <UserList users={users} />
  );
}
