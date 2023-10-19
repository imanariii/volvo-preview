export enum DrawerActionTypes {
    SET_DRAWER_FORM = "SET_DRAWER_FORM",
    EDIT_STEP = 'EDIT_STEP',
    ERROR = "ERROR",
}
interface SetDrawerAction {
    type: DrawerActionTypes.SET_DRAWER_FORM;
    payload: boolean;
}

interface EditStepAction {
    type: DrawerActionTypes.EDIT_STEP,
    payload: number;
}

interface ErrorAction {
    type: DrawerActionTypes.ERROR;
    payload: string;
}

export interface DrawerState {
    isShow: boolean;
    step: number;
    error: null | string;
}

export type DrawerAction = ErrorAction | EditStepAction | SetDrawerAction;