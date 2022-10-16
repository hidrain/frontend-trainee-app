export interface FilterSliceState {
    searchValue: string;
    department: 'all' | 'android' | 'ios' | 'design' | 'management' | 
    'qa' | 'back_office' | 'frontend' | 'hr' | 'pr' | 'backend' | 
    'support' | 'analytics';
    sortPopup: boolean;
    dateOfBrthday: boolean;
}