
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowIcon, PhoneIcon, StarIcon } from '../../assets/icons'
import { useAppSelector } from '../../redux/store'
import { selectUsersData } from '../../redux/users/selectors'
import { declOfNum } from '../../utils/declOfNum'
import { Spacer } from '../../utils/spacer'
import {
    Age, Avatar, ButtomItem, ButtomWrapper, Departament, GoBackButton,
    InfoWrapper, Name, ProfileWrapper, TopWrapper, UserInfo, UserTag
} from './style'
import { format, parseISO, differenceInYears } from 'date-fns'
import { ru } from 'date-fns/locale'
import plugImg from '../../assets/img/plug.png'

type Props = {}

export const UserProfileBlock = (props: Props) => {

    const { users } = useAppSelector(selectUsersData)
    const { id } = useParams()
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const user = users ? users?.find((u) => u.id === id) : '';
    console.log(users)

    let birthday: string = '';
    let phoneNumber: string = '';
    let age: number = 0;

    //GET FORMAT BIRTHDAY
    // const date = user!.birthday
    // const birthDay = format(parseISO(date), "d MMMM yyyy", { locale: ru })

    //GET AGE
    // const dob = new Date(date);
    // const now = new Date();
    // const age = differenceInYears(now, dob);

    //GET PHONE NUMBER
    // const phoneNumber = 'tel:' + user?.phone;

    if (user) {
        birthday = format(parseISO(user.birthday), "d MMMM yyyy", { locale: ru });
        phoneNumber = 'tel:' + user.phone;
        const dob = new Date(user.birthday);
        const now = new Date();
        age = differenceInYears(now, dob);
    }

    return (
        <div>
            {user && <ProfileWrapper>

                <TopWrapper>

                    <GoBackButton onClick={goBack}>
                        <Spacer width={24} />
                        <ArrowIcon />
                    </GoBackButton>
                    {/* <Avatar src={user.avatarUrl} /> */}
                    <Avatar src={plugImg} />


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
                            {birthday}
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

