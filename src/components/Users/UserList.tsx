import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../../types/types';
import { UserItem } from './UserItem';
import { List } from '../Common/List';
import { useNavigate } from 'react-router-dom';

interface UserListProps {
  users: IUser[]
}

export const UserList: FC<UserListProps> = props => {
  const {users} = props
  const colors: string[] = ['#3C91E6', '#342E37', '#A2D729', '#FA824C', '#FF5400']
  const navigate = useNavigate()
  
  return (
    <div style={{display: 'flex', marginBottom: 15}}>
      <List items={users}
      renderItem={(user:IUser, index:number) => 
      <UserItem 
      onClick={(item) => navigate(`/users/${item.id}`)}
      marginRight={(index + 1) == 10 ? '0px' : '10px'} 
      bgColor={index > 4 ? colors[index - 5] : colors[index]} 
      user={user} 
      key={user.id} />} />
    </div>
  )
}
