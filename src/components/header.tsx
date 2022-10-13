import { Label } from './label'
import { Search } from './search'
import { Tabs } from './tabs'

type Props = {}

export const Header = (props: Props) => {
    return (
        <>
            <Label />
            <Search />
            <Tabs />
        </>
    )
}