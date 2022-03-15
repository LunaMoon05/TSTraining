import React, { FC } from 'react'
import { IUser } from '../../types/types'

interface UserItemProps {
  user: IUser,
  bgColor: string,
  marginRight: string,
  onClick: ((user:IUser) => void)
}

export const UserItem: FC<UserItemProps> = props => {
  const {user, bgColor, onClick, marginRight} = props
  return (
    <div onClick={() => onClick(user)} style={{padding: 10, color: 'white', backgroundColor: bgColor, marginRight }}>
      <span>{user.id}.</span>
      <div>Имя: {user.name}</div>
      <div>Адрес проживания: город {user.address.city}, улица {user.address.street}</div>
      <div>Почта: {user.email}</div>
    </div>
  )
}
