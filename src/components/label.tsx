import styled from 'styled-components'
import { Spacer } from '../utils/spacer'

type Props = {}

const LabelWrapper = styled.div`
    display: flex;
`
const StyledLabel = styled.div`
    font-size: 24px;
    font-weight: ${props => props.theme.weight.bold};
    align-self: center;
`

export const Label = (props: Props) => {
    return (
        <LabelWrapper>
            <Spacer width={24} />
            <StyledLabel>Поиск</StyledLabel>
        </LabelWrapper>
    )
}

