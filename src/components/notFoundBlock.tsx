import styled from 'styled-components'
import magnifying_glass from '../assets/img/magnifying-glass.png'

type Props = {}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: 35vh 1fr 1fr;

  & img {
    width: 56px;
    align-self: end;
  }

  & a {
    font-size: 16px;
    font-weight: 600;
    color: #6534FF;
    text-decoration: none;
    padding-top: 12px;
  }
`
const MainText = styled.div`
  font-size: 17px;
  font-weight: 700;
  font-weight: ${props => props.theme.weight.bold};
  padding-top:8px;
  align-self: end;
`
const RegularText = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: ${props => props.theme.weight.normal};
  color: ${props => props.theme.colors.tetriary};
  padding-top: 12px;
`

export const NotFoundBlock = (props: Props) => {
  return (
    <Wrapper>
      <img src={magnifying_glass} alt='no results' />
      <MainText>Мы никого не нашли</MainText>
      <RegularText>Попробуй скорректировать запрос</RegularText>
    </Wrapper>
  )
}
