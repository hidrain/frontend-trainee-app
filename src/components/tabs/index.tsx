import { useAppDispatch } from '../../redux/store'
import { Spacer } from '../../utils/spacer'
import { ButtonWrapper, TabLink, TabsWrapper } from './styles'

type Props = {}

export const tabs = [
    'Всe',
    'Android',
    'iOS',
    'Designers',
    'Managers',
    'QA',
    'Back office',
    'Frontend',
    'HR',
    'PR',
    'Backend',
    'Support',
    'Analysts'
]
export const Tabs = (props: Props) => {

    const dispatch = useAppDispatch()

    return (
        <TabsWrapper>
            <Spacer width={16} />
            <ButtonWrapper>
                {
                    tabs.map((tabName, index) => (
                        <TabLink key={index}
                        // onClick={() => onChangeCategory(index)}
                        // className={value === index ? "active" : ''}
                        // onClick={(e: any) => dispatch(setDepartment(index))}
                        >
                            {tabName}
                        </TabLink>
                    ))
                }
            </ButtonWrapper>
        </TabsWrapper>
    )
}

