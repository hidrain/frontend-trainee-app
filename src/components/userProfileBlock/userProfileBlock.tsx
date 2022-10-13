import { useNavigate, useParams } from 'react-router-dom'
import { ArrowIcon, PhoneIcon, StarIcon } from '../../assets/icons'
import { useAppSelector } from '../../redux/store'
import { selectUsersData } from '../../redux/users/selectors'
import { declOfNum } from '../../utils/declOfNum'
import { Spacer } from '../../utils/spacer'
import { Age, Avatar, ButtomItem, ButtomWrapper, Departament, GoBackButton, InfoWrapper, Name, ProfileWrapper, TopWrapper, UserInfo, UserTag } from './style'

type Props = {}

export const UserProfileBlock = (props: Props) => {

    const { users } = useAppSelector(selectUsersData)

    const { id } = useParams()
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const user = users.find(u => u.id === id)

    //GET AGE
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const dob = new Date(user!.birthday)
    const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate())
    let age = today.getFullYear() - dob.getFullYear()
    if (today < dobnow) {
        age = age - 1
    }

    //GET FORMAT BIRTHDAY
    const getMonthDay = (dob: any) => {
        let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
        return months[dob.getMonth()];
    }
    const birthDay = dob.getDate() + ' ' + getMonthDay(dob) + ' ' + dob.getFullYear()

    //GET PHONE NUMBER
    const phoneNumber = 'tel:' + user?.phone;

    return (
        <div>
            {user && <ProfileWrapper>

                <TopWrapper>

                    <GoBackButton onClick={goBack}>
                        <Spacer width={24} />
                        <ArrowIcon />
                    </GoBackButton>
                    <Avatar src={user.avatarUrl} />

                    <InfoWrapper>
                        <UserInfo>
                            <Name>
                                {user.firstName + ' ' + user?.lastName}
                            </Name>
                            <UserTag>
                                {user.userTag.toLowerCase()}
                            </UserTag>
                        </UserInfo>
                        <Spacer height={12} />
                        <Departament>
                            {user.department}
                        </Departament>
                    </InfoWrapper>

                </TopWrapper>

                <ButtomWrapper>

                    <div>
                        <ButtomItem>
                            <StarIcon />
                            <Spacer width={12} />
                            {birthDay}
                        </ButtomItem>
                        <ButtomItem>
                            <PhoneIcon />
                            <Spacer width={12} />
                            <a href={phoneNumber}>{user.phone}</a>
                        </ButtomItem>
                    </div>
                    <Age>{age} {declOfNum(age, ['год', 'года', 'лет'])}</Age>

                </ButtomWrapper>

            </ProfileWrapper>}
        </div >
    )
}