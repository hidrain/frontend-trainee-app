import styled from "styled-components"

export const TabsWrapper = styled.div`
    display: flex;
    overflow: scroll;
`
export const ButtonWrapper = styled.nav`
    display: grid;
    grid-template-columns: repeat(13, max-content);
    overflow: auto;
    padding-top: 21px;
    font-weight: 500;
`
export const TabLink = styled.a`
    color: ${props => props.theme.colors.tetriary};
    text-decoration: none;
    border: none;
    padding: 8px 12px;
    line-height: 20px;

    /* color: #050510;
    font-weight: 600;
    border-bottom: 2px solid #6534FF; */
`