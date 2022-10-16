import { CloseIcon } from '../../assets/icons/close-icon'
import { selectFilter } from "../../redux/filter/selectors"
import { setSortPopup } from '../../redux/filter/slice'
import { useAppDispatch, useAppSelector } from "../../redux/store"
import { selectUsersData } from '../../redux/users/selectors'
import { setSortUsersByName, setUsers } from '../../redux/users/slice'
import { Spacer } from '../../utils/spacer'
import { Button, HeaderWrapper, Name, Overlay, PopupContent, SortBlock, SortWrapper } from "./styles"

type Props = {}

export const Sort = (props: Props) => {

    const dispatch = useAppDispatch()
    const { sortPopup } = useAppSelector(selectFilter)
    const { users } = useAppSelector(selectUsersData)

    const togglePopup = () => {
        dispatch(setSortPopup(!sortPopup))
    }

    const sortUsersByName = () => {
        dispatch(setSortUsersByName(users))
        dispatch(setSortPopup(false))
        console.log(users)
    }

    return (
        <div>
            {sortPopup && (
                <SortWrapper>
                    <Overlay>
                        <PopupContent>

                            <HeaderWrapper>
                                <Name>Сортировка</Name>
                                <Button
                                    onClick={togglePopup}
                                >
                                    <CloseIcon />
                                </Button>
                            </HeaderWrapper>
                            <SortBlock>
                                <input type="radio" name="abc" id="abc"
                                    onClick={() => { sortUsersByName() }}
                                />
                                <Spacer width={14} />
                                <label htmlFor="abc">По алфавиту</label>
                            </SortBlock>
                            <SortBlock>
                                <input type="radio" name="date" id="date"
                                // onClick={() => { sortUsersByDate() }} 
                                />
                                <Spacer width={14} />
                                <label htmlFor="date">По дню рождения</label>
                            </SortBlock>

                        </PopupContent>
                    </Overlay>
                </SortWrapper>
            )}
        </div>)
}

