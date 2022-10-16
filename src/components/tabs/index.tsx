import { selectFilter } from '../../redux/filter/selectors'
import { setDepartment } from '../../redux/filter/slice'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { Spacer } from '../../utils/spacer'
import { ButtonWrapper, TabLink, TabsWrapper } from './styles'

type Props = {}

export const tabs = [
    { key: 'all', value: 'Всe' },
    { key: 'android', value: 'Android' },
    { key: 'ios', value: 'iOS' },
    { key: 'design', value: 'Designers' },
    { key: 'management', value: 'Managers' },
    { key: 'qa', value: 'QA' },
    { key: 'back_office', value: 'Back office' },
    { key: 'frontend', value: 'Frontend' },
    { key: 'hr', value: 'HR' },
    { key: 'pr', value: 'PR' },
    { key: 'backend', value: 'Backend' },
    { key: 'support', value: 'Support' },
    { key: 'analytics', value: 'Analysts' },
]
export const Tabs = (props: Props) => {

    const dispatch = useAppDispatch()

    const onChangeDepartment = (department: any) => {
        dispatch(setDepartment(department))
        console.log(department)
    }

    return (
        <TabsWrapper>
            <Spacer width={16} />
            <ButtonWrapper>
                {
                    tabs.map((tabName, index) => (
                        <TabLink key={index}
                            onClick={() => onChangeDepartment(tabName.key)}
                        // className={value === index ? "active" : ''}
                        >
                            {tabName.value}
                        </TabLink>
                    ))
                }
            </ButtonWrapper>
        </TabsWrapper>
    )
}

