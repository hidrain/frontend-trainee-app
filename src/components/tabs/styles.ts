import styled from "styled-components"

export const TabsWrapper = styled.div`
    display: flex;
    overflow: scroll;
`
export const ButtonWrapper = styled.nav`
    display: grid;
    grid-template-columns: repeat(13, max-content);
    padding-top: 12px;
    font-weight: 500;
`
interface PropsTabLink {
    isActive: boolean;
}

export const TabLink = styled.a<PropsTabLink>`
    color: ${props => props.theme.colors.tetriary};
    text-decoration: none;
    border: none;
    padding: 8px 12px;
    line-height: 20px;
    cursor: pointer;
    border-bottom-style: ${(props) => (props.isActive && 'solid')};
    border-bottom-color: ${(props) => (props.isActive && '#6534FF')};
    border-bottom-width: ${(props) => (props.isActive && '2px')};
    font-weight: ${(props) => (props.isActive && props.theme.weight.semibold)};
    color: ${(props) => (props.isActive && props.theme.colors.primary)};
`
