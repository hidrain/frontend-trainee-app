import { Link } from 'react-router-dom'
import { Spacer } from '../../utils/spacer'
import { UserType } from '../../redux/users/types'
import plugImg from '../../assets/img/plug.png'
import {
    UserBirthday, UserBlockWrapper, UserDepartment, UserInfoWrapper,
    UserLink, UserName, UserTag
} from './styles'
import { useAppSelector } from '../../redux/store'
import { selectFilter } from '../../redux/filter/selectors'

export const UserBlock = ({ id, avatarUrl, firstName, lastName,
    userTag, department, birthday }: UserType) => {

    const { dateOfBrthday } = useAppSelector(selectFilter)

    const dob = new Date(birthday)
    const getShortMonthDay = (dob: any) => {
        let months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн',
            'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
        return months[dob.getMonth()];
    }
    const shortBirthDay = dob.getDate() + ' ' + getShortMonthDay(dob)

    return (
        <div>
            <ul>
                <UserLink>
                    <Link key={id} to={`/user/${id}`}>
                        <UserBlockWrapper>
                            <img src={avatarUrl ?? plugImg} />
                            <Spacer width={16} />
                            <UserInfoWrapper>
                                <UserName>
                                    {firstName + ' ' + lastName}
                                </UserName>
                                <UserTag>
                                    {userTag.toLowerCase()}
                                </UserTag>
                                <UserDepartment>
                                    {department}
                                </UserDepartment>
                            </UserInfoWrapper>
                            {dateOfBrthday &&
                                <UserBirthday>
                                    {shortBirthDay}
                                </UserBirthday>
                            }
                        </UserBlockWrapper>
                        <Spacer height={12} />
                    </Link>
                </UserLink>
            </ul>
        </div >
    )
}