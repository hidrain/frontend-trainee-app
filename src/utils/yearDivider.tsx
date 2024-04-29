
import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 68px;

`
export const Line = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background-color:#C3C3C6;

`
export const Year = styled.div`
  display: flex;
  width: 160px;
  align-items: center;
  justify-content: center;
  color: #C3C3C6;

`
export const YearDivider = () => {

    const now = new Date();
    const nextYear = now.getFullYear() + 1

    return (
        <Wrapper>
            <Line />
            <Year>
                {nextYear}
            </Year>
            <Line />
        </Wrapper>
    )
}