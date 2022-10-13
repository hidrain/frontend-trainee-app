import { useState } from "react"
import { CloseIcon } from '../../assets/icons/close-icon'
import { Spacer } from '../../utils/spacer'
import { Button, HeaderWrapper, Name, Overlay, PopupContent, SortBlock, SortWrapper } from "./styles"

type Props = {}

export const Sort = (props: Props) => {

    const [sortPopup, setSortPopup] = useState(false)

    const togglePopup = () => {
        setSortPopup(!sortPopup)
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
                                // onClick={() => { sortUsersByAbc() }} 
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

