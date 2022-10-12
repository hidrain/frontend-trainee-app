import React from 'react'
import styled from 'styled-components'
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
                <a href='/' >Все</a>
                <a href='/designers'>Designers</a>
                <a href='/analysts' >Analysts</a>
                <a href='/managers'>Managers</a>
                <a href='/ios'>iOS</a>
                <a href='/android'>Android</a>
            </nav>
        </TabsWrapper>
    )
}
