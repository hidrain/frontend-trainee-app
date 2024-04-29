import { useEffect } from 'react'
import { UserBlock } from '../components'
import { catchUsers } from '../redux/users/slice'
import { Spacer } from '../utils/spacer'
import { selectUsersData } from '../redux/users/selectors'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { Skeleton } from '../components/userBlock/skeleton'
import { UserType } from '../redux/users/types'
import { selectFilter } from '../redux/filter/selectors'
import { NotFound } from './notFound'
import { format, parseISO } from 'date-fns'
import { YearDivider } from '../utils/yearDivider'

type Props = {}

export const Main = (props: Props) => {

  const dispatch = useAppDispatch()
  const { users, status } = useAppSelector(selectUsersData)
  const { searchValue, department, dateOfBrthday } = useAppSelector(selectFilter)

  const getUsers = () => {
    const params = { department }
    dispatch(catchUsers(params))
  }

  useEffect(() => {
    getUsers()
  }, [department, searchValue])

  const userList = users
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


  const userThisYear = userList.filter(user => {
    const dayOfBirth = format(parseISO(user.props.birthday), "dd")
    const monthOfBirth = format(parseISO(user.props.birthday), "MM")

    const thisDay = format(new Date(), "dd")
    const thisMonth = format(new Date(), "MM")

    const usersThisPeriod = monthOfBirth <= '12' && `${monthOfBirth}-${dayOfBirth}` >= `${thisMonth}-${thisDay}`
    return usersThisPeriod
  })

  const userNextYear = userList.filter(user => {
    const dayOfBirth = format(parseISO(user.props.birthday), "dd")
    const monthOfBirth = format(parseISO(user.props.birthday), "MM")

    const thisDay = format(new Date(), "dd")
    const thisMonth = format(new Date(), "MM")

    const usersNextPeriod = monthOfBirth >= '01' && `${monthOfBirth}-${dayOfBirth}` < `${thisMonth}-${thisDay}`
    return usersNextPeriod
  })

  return (
    <div>
      <ul>
        <Spacer height={22} />
        {status === 'loading' ? skeletons : (
          dateOfBrthday ? (<>
            {userThisYear}
            {(userThisYear[0] && userNextYear[0]) && <YearDivider />}
            {userNextYear}
          </>) : userList
        )}
        {status === 'completed' && userList.length === 0 ? <NotFound /> : null}
      </ul>
    </div >
  )
}