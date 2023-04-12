// import { useEffect, useState } from 'react'
// import { createAsyncThunk } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowIcon, PhoneIcon, StarIcon } from '../../assets/icons'
// import { selectFilter } from '../../redux/filter/selectors'
import { useAppSelector } from '../../redux/store'
import { selectUsersData } from '../../redux/users/selectors'
// import { catchUsers, fetchUsers } from '../../redux/users/slice'
// import { FetchProps } from '../../redux/users/types'
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

    // const dispatch = useAppDispatch();
    // const { department } = useAppSelector(selectFilter)
    // useEffect(() => {
    //     catchUsers({ department })
    // }, [dispatch])


    const user = users.find(u => u.id === id)

    //GET FORMAT BIRTHDAY
    const date = user!.birthday
    const birthDay = format(parseISO(date), "d MMMM yyyy", { locale: ru })

    //GET AGE
    const dob = new Date(date);
    const now = new Date();
    const age = differenceInYears(now, dob);

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

