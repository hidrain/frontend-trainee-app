import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UserBlock } from '../components'
import { setUsers, catchUsers } from '../redux/users/slice'
import { Spacer } from '../utils/spacer'
import { selectUsersData } from '../redux/users/selectors'
import { useAppDispatch, useAppSelector } from '../redux/store'


type Props = {}

export const Main = (props: Props) => {

  const dispatch = useAppDispatch()
  const users = useAppSelector(selectUsersData)

  const getUsers = () => {
    dispatch(catchUsers())
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>

      <ul>
        <Spacer height={22} />
        {users.map((u: any) => {
          return (
            <div key={u.id}>
              <UserBlock {...u} />
            </div>
          )
        })}
      </ul>

    </div >
  )
}