import { useEffect, useState } from 'react'
import { UserBlock } from '../components'
import { catchUsers } from '../redux/users/slice'
import { Spacer } from '../utils/spacer'
import { selectUsersData } from '../redux/users/selectors'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { Skeleton } from '../components/userBlock/skeleton'
import { UserType } from '../redux/users/types'
import { selectSearchValue } from '../redux/filter/selectors'


type Props = {}

export const Main = (props: Props) => {

  const dispatch = useAppDispatch()
  const { users, status } = useAppSelector(selectUsersData)
  const { searchValue } = useAppSelector(selectSearchValue)

  const getUsers = () => {
    dispatch(catchUsers())
  }

  useEffect(() => {
    getUsers()
  }, [])

  const user = users
    .filter((u: UserType) => {
      if (u.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
        u.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
        u.userTag.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return true
      }
      return false
    })
    .map((u: UserType) => <UserBlock key={u.id} {...u} />)

  const skeletons = [...new Array(10)].map((_, index) => <div key={index}><Skeleton /></div>)

  return (
    <div>
      <ul>
        <Spacer height={22} />
        {status === 'loading' ? skeletons : user}
      </ul>
    </div >
  )
}