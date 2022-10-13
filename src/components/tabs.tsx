import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Spacer } from '../utils/spacer'

type Props = {}

const TabsWrapper = styled.div`
    display: flex;
    overflow: auto;

    & nav {
        display: grid;
        grid-template-columns: repeat(6, max-content);
        overflow: auto;
        padding-top: 21px;
        font-weight: ${props => props.theme.weight.medium};
    }

    & a {
        color: ${props => props.theme.colors.tetriary};
        text-decoration: none;
        padding: 8px 12px;
        line-height: 20px;
    }
`

export const Tabs = (props: Props) => {
    return (
        <TabsWrapper>
            <Spacer width={16} />
            <nav>
                <Link to='/' >Все</Link>
                <Link to='/designers'>Designers</Link>
                <Link to='/analysts' >Analysts</Link>
                <Link to='/managers'>Managers</Link>
                <Link to='/ios'>iOS</Link>
                <Link to='/android'>Android</Link>
            </nav>
        </TabsWrapper>
    )
}
