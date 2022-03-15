import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { UserList } from './components/UserList';
import { IUser } from './types/types';

function App() {
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
    // <Card />
  );
}

export default App;
