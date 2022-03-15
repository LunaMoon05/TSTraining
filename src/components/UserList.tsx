import React, { FC, useEffect, useState } from 'react'
import { IUser } from './../types/types';
import { Card } from './Card';
import { getRandom } from './../helpers/getRandom';
import { UserItem } from './UserItem';

interface UserListProps {
  users: IUser[]
}

export const UserList: FC<UserListProps> = props => {
  const {users} = props
  const colors: string[] = ['#3C91E6', '#342E37', '#A2D729', '#FA824C', '#FF5400']
  
  return (
    <div style={{display: 'flex'}}>
      {users.map((user, index) => {
        return (
          <UserItem key={user.id} user={user} marginRight={(index + 1) == 10 ? '0px' : '10px'} bgColor={index > 4 ? colors[index - 5] : colors[index]} />
        )
      })}
    </div>
  )
}
