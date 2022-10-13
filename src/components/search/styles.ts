import styled from "styled-components"

export const SearchWrapper = styled.div`
    display: flex;
`

export const Input = styled.input`
    border: none;
    outline: none;
    height: 40px;
    border-radius: 16px;
    background: #F7F7F8;
    padding-left: 44px;
    caret-color: ${props => props.theme.colors.active_primary};

    ::placeholder {
        color: #C3C3C6;
    }
`
export const SearchButton = styled.button`
    border: none;
    position: absolute;
    top: 8px;
    left: 12px;
    cursor: pointer;
    background: none;
`
export const SortButton = styled.button`
    border: none;
    position: absolute;
    top: 8px;
    right: 12px;
    cursor: pointer;
    background: none;
    border: none;

    :hover svg path{
        fill: ${props => props.theme.colors.active_primary};
    }
`
export const Form = styled.form`
    display: grid;
    position: relative;
    width: 100%;

    :focus-within {
        ${SearchButton} svg path {
        fill: ${props => props.theme.colors.primary};
    }
}
`