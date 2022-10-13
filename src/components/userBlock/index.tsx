import { Link } from 'react-router-dom'
import { Spacer } from '../../utils/spacer'
import { UserType } from '../../redux/users/types'
import plugImg from '../../assets/img/plug.png'
import { UserBlockWrapper, UserDepartment, UserInfoWrapper, UserLink, UserName, UserTag } from './styles'

export const UserBlock = ({ id, avatarUrl, firstName, lastName,
    userTag, department, birthday }: UserType) => {

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
                        </UserBlockWrapper>
                        <Spacer height={12} />
                    </Link>
                </UserLink>
            </ul>
        </div >
    )
}