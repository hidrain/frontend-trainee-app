import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Spacer } from '../../utils/spacer'
import { UserType } from '../../redux/users/types'
import plugImg from '../../assets/img/plug.png'

const UserBlockWrapper = styled.div`
    display: flex;
    align-items: center;

    & img {
        width: 72px;
        border-radius: 36px;
    }
`
const UserInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 4px;
`
const UserName = styled.div`
    font-size: 16px;
    line-height: 20px;
`
const UserTag = styled.div`
    font-size: 14px;
    font-weight: ${props => props.theme.weight.medium};
    color: ${props => props.theme.colors.tetriary};
    line-height: 18px;
    align-self: center;
`
const UserDepartment = styled.div`
    font-size: 13px;
    font-weight: ${props => props.theme.weight.normal};
    color: ${props => props.theme.colors.secondary};
    line-height: 16px;
    text-transform: capitalize;
`
const UserLink = styled.div`
    & a, :active, :hover {
    text-decoration: none;
    }
`

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