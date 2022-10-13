import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../components'

type Props = {}

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 152px 1fr;
`
const HeaderWrapper = styled.div`
    display: grid;
    grid-template-rows: 62px 40px 50px;
    border-bottom: 1px solid #dcdcde;
`
const ContentWrapper = styled.div`
    padding: 0 16px 0 16px;
`

export const Layout = (props: Props) => {
    return (
        <AppWrapper>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>

            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
        </AppWrapper>
    )
}