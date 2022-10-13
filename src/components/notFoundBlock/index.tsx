import magnifying_glass from '../../assets/img/magnifying-glass.png'
import { MainText, RegularText, Wrapper } from './styles'

type Props = {}

export const NotFoundBlock = (props: Props) => {
  return (
    <Wrapper>
      <img src={magnifying_glass} alt='no results' />
      <MainText>Мы никого не нашли</MainText>
      <RegularText>Попробуй скорректировать запрос</RegularText>
    </Wrapper>
  )
}
