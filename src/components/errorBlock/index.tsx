import { Link } from 'react-router-dom'
import flying_saucer from '../../assets/img/flying_saucer.png'
import { MainText, RegularText, Wrapper } from './styles'

type Props = {}

export const ErrorBlock = (props: Props) => {
  return (
    <Wrapper>
      <img src={flying_saucer} alt='error_image' />
      <MainText>Какой-то сверхразум все сломал</MainText>
      <RegularText>Постараемся быстро починить</RegularText>
      <Link to='/'>Попробовать снова</Link>
    </Wrapper>
  )
}
