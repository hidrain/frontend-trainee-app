export type UserType = {
    id: string
    avatarUrl: string
    firstName: string
    lastName: string
    userTag: string
    department: string
    birthday: string
    phone: string
}

export interface UsersSliceState {
    users: UserType[],
    status: Status
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
  }