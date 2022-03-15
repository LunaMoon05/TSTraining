
import React, { FC } from 'react'
import { useState } from 'react';
import { IUser } from './../types/types';
import { getRandom } from './../helpers/getRandom';
import { useEffect } from 'react';

export const Card:FC<IUser> = props => {
  const {id, name, email, address} = props
  return (
    <div style={{fontSize: 17}}>
      <span style={{fontSize: 18, fontWeight: 'bold'}}>{id}.</span>
      {name} проживает в городе {address.city} на улице {address.street}
      Почта: {email}
    </div>
  )
}
