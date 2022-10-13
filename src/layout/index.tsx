import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../components'

type Props = {}

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 152px 1fr;
`
const OutletWrapper = styled.div`
padding: 0 16px 0 16px;
`

export const Layout = (props: Props) => {
    return (
        <AppWrapper>
            <Header />

            <OutletWrapper>
                <Outlet />
            </OutletWrapper>
        </AppWrapper>
    )
}