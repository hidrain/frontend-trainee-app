import styled from "styled-components"

export const SortWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`
export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(5, 5, 16, 0.16);
`
export const PopupContent = styled.div`
    display: grid;
    position: absolute;
    grid-template-rows: 42px 60px 60px 8px;
    width: 337px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #fff;
    padding: 24px 18px 0 18px;
    border-radius: 20px;
    font-size: 16px;
`
export const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    align-content: start;
`
export const SortBlock = styled.div`
    display: inline-flex;
        input, label {
            cursor: pointer;
        }       
        label {
            align-self: center;
        }
`
export const Name = styled.div`
    justify-self: center;
    font-size: 20px;
    font-weight: 600;
    color: #050510;
`
export const Button = styled.button`
    display: flex;
    justify-self: end;
    align-self: start;
    cursor: pointer;
    background: none;
    border: none;
`