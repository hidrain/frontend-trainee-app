import styled from "styled-components"

export const ProfileWrapper = styled.div`
    display: grid;
    grid-template-rows: 280px 1fr;
`
export const TopWrapper = styled.div`
    display: grid;
    grid-template-rows: 72px max-content 1fr;
    background: #F7F7F8;
    justify-items: center;
`
export const ButtomWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 26px 20px;
    font-size: 16px;
`
export const InfoWrapper = styled.div`
    align-self: center;
`
export const UserInfo = styled.div`
    display: grid; 
    grid-template-columns: 1fr max-content; 
    gap: 4px; 
`
export const GoBackButton = styled.button`
    display: flex;
    justify-self: start;
    align-self: center;
    cursor: pointer;
    background: none;
    border: none;
`
export const Avatar = styled.img`
    width: 104px;
    border-radius: 64px;
    filter: drop-shadow(0px 1px 5px rgba(22, 30, 52, 0.039)) drop-shadow(0px 8px 12px rgba(22, 30, 52, 0.08));
`
export const Name = styled.div`
    font-size: 24px;
    font-weight: ${props => props.theme.weight.bold};
`
export const UserTag = styled.div`
    font-size: 17px;
    font-weight: ${props => props.theme.weight.normal};
    color: ${props => props.theme.colors.tetriary};
    align-self: center;
`
export const Departament = styled.div`
    display: flex;
    font-size: 13px;
    font-weight: ${props => props.theme.weight.normal};
    color: ${props => props.theme.colors.secondary};
    justify-content: center;
`
export const ButtomItem = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
        a {
            text-decoration: none;
        }
`
export const Age = styled.div`
    justify-self: end;
    padding-top: 20px;
    color: ${props => props.theme.colors.tetriary};
`