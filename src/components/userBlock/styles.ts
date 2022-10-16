import styled from "styled-components"

export const UserBlockWrapper = styled.div`
    display: grid;
    grid-template-columns: max-content 16px max-content 1fr;
    align-items: center;

    & img {
        width: 72px;
        border-radius: 36px;
    }
`
export const UserInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 4px;
`
export const UserName = styled.div`
    font-size: 16px;
    line-height: 20px;
`
export const UserTag = styled.div`
    font-size: 14px;
    font-weight: ${props => props.theme.weight.medium};
    color: ${props => props.theme.colors.tetriary};
    line-height: 18px;
    align-self: center;
`
export const UserDepartment = styled.div`
    font-size: 13px;
    font-weight: ${props => props.theme.weight.normal};
    color: ${props => props.theme.colors.secondary};
    line-height: 16px;
    text-transform: capitalize;
`
export const UserLink = styled.div`
    & a, :active, :hover {
    text-decoration: none;
    }
`
export const UserBirthday = styled.div`
    justify-self: end;
    font-weight: ${props => props.theme.weight.normal};
    color: ${props => props.theme.colors.secondary};
    line-height: 20px;
`