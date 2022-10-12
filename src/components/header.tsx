import React from 'react'
import styled from 'styled-components'
import { Label } from './label'
import { Search } from './search'
import { Tabs } from './tabs'

type Props = {}

const HeaderWrapper = styled.div`
    display: grid;
    grid-template-rows: 62px 40px 50px;
    border-bottom: 1px solid #dcdcde;
`

export const Header = (props: Props) => {
    return (
        <HeaderWrapper>
            <Label />
            <Search />
            <Tabs />
        </HeaderWrapper>
    )
}