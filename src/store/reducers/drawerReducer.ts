import {DrawerAction, DrawerActionTypes, DrawerState} from "../../types/drawer.ts";

const initialState:DrawerState = {
    isShow: false,
    step: 0,
    error: null
}

export const drawerReducer = (state=initialState, action: DrawerAction): DrawerState => {
    switch (action.type) {
        case DrawerActionTypes.SET_DRAWER_FORM:
            return {step: state.step, error: null, isShow: action.payload}
        case DrawerActionTypes.EDIT_STEP:
            return {step: action.payload, error: null, isShow: true}
        case DrawerActionTypes.ERROR:
            return {step: 0, error: action.payload, isShow: false}
        default:
            return {...state}
    }
}