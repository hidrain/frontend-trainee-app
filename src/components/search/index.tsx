import { ChangeEvent, FormEvent } from 'react'
import { SearchIcon, SortIcon } from '../../assets/icons'
import { selectFilter } from '../../redux/filter/selectors'
import { setSearchValue, setSortPopup } from '../../redux/filter/slice'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { Spacer } from '../../utils/spacer'
import { Form, Input, SearchButton, SearchWrapper, SortButton } from './styles'

type Props = {}

export const Search = (props: Props) => {

    const dispatch = useAppDispatch()
    const { searchValue, sortPopup } = useAppSelector(selectFilter)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(e.target.value))
    }
    const onClickOpenSort = () => {
        dispatch(setSortPopup(!sortPopup))
    }


    return (
        <SearchWrapper>
            <Spacer width={16} />
            <Form
                onSubmit={handleSubmit}
                autoComplete='off'>
                <Input
                    type='text'
                    name='search'
                    placeholder='Введи имя, тег, почту...'
                    onChange={onChange}
                    value={searchValue}
                />

                <SearchButton
                    type='submit'>
                    <SearchIcon />
                </SearchButton>

                <SortButton
                    onClick={onClickOpenSort}>
                    <SortIcon />
                </SortButton>

            </Form>

            <Spacer width={16} />
        </SearchWrapper >
    )
}