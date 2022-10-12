import React from 'react'
import styled from 'styled-components'
import { SearchIcon, SortIcon } from '../assets/icons'
import { Spacer } from '../utils/spacer'

type Props = {}

const SearchWrapper = styled.div`
    display: flex;
`

const Input = styled.input`
    border: none;
    outline: none;
    height: 40px;
    border-radius: 16px;
    background: #F7F7F8;
    padding-left: 44px;
    caret-color: #6534FF;

    ::placeholder {
        color: #C3C3C6;
    }
`
const SearchButton = styled.button`
    border: none;
    position: absolute;
    top: 8px;
    left: 12px;
    cursor: pointer;
    background: none;
`
const SortButton = styled.button`
    border: none;
    position: absolute;
    top: 8px;
    right: 12px;
    cursor: pointer;
    background: none;
    border: none;

    :hover svg path{
        fill: #6534FF;
    }
`
const Form = styled.form`
    display: grid;
    position: relative;
    width: 100%;

    :focus-within {
        ${SearchButton} svg path {
        fill: #050510;
    }
}
`

export const Search = (props: Props) => {
    return (
        <SearchWrapper>
            <Spacer width={16} />
            <Form
                onSubmit={() => { }}
                autoComplete='off'>
                <Input
                    type='text'
                    name='search'
                    placeholder='Введи имя, тег, почту...'
                    onChange={(e) => { }}
                    value=''
                />

                <SearchButton
                    type='submit'>
                    <SearchIcon />
                </SearchButton>

                <SortButton
                    onClick={() => { }}>
                    <SortIcon />
                </SortButton>

            </Form>

            <Spacer width={16} />
        </SearchWrapper >
    )
}