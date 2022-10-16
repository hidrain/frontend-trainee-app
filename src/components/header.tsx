import { useAppSelector } from '../redux/store'
import { selectUsersData } from '../redux/users/selectors'
import { Label } from './label'
import { Search } from './search'
import { Tabs } from './tabs'

type Props = {}

export const Header = (props: Props) => {

    const { status } = useAppSelector(selectUsersData)

    return (
        <>
            <Label />
            <Search />
            <Tabs />
        </>
    )
}