import React from 'react'
import styled from 'styled-components'
import { UserType } from '../redux/users/types'
import { Spacer } from '../utils/spacer'

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
                    <a key={id} href={`/user/${id}`}>
                        <UserBlockWrapper>
                            <img src={avatarUrl} />
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
                    </a>
                </UserLink>
            </ul>
        </div >
    )
}