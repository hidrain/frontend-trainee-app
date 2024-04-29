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
import { format, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'



export const UserBlock = ({ id, avatarUrl, firstName, lastName,
    userTag, department, birthday }: UserType) => {

    const { dateOfBrthday } = useAppSelector(selectFilter)

    const date = format(parseISO(birthday), "d MMMM", { locale: ru })

    console.log(birthday)

    return (
        <UserLink>
            <Link key={id} to={`/user/${id}`}>
                <UserBlockWrapper>
                    {/* <img src={avatarUrl ?? plugImg} alt='avatar' /> */}
                    <img src={plugImg} alt='avatar' />
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
                            {date}
                        </UserBirthday>
                    }
                </UserBlockWrapper>
                <Spacer height={12} />
            </Link>
        </UserLink>
    )
}