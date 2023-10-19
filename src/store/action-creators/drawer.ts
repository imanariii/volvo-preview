import {Dispatch} from "redux";
import {DrawerAction, DrawerActionTypes} from "../../types/drawer";

export const setShowDrawer = (show: boolean) => {
    return async (dispatch: Dispatch<DrawerAction>) => {
        try {
            dispatch({
                type: DrawerActionTypes.SET_DRAWER_FORM,
                payload: show
            })
        } catch (e) {
            dispatch({type: DrawerActionTypes.ERROR, payload: "Ошибка при открытии/закрытии окна"})
        }
    }
}

export const editStepDrawer = (step: number) => {
    return async (dispatch: Dispatch<DrawerAction>) => {
        try {
            if(step>=0) {
                dispatch({
                    type: DrawerActionTypes.EDIT_STEP,
                    payload: step
                })
            } else {
                dispatch({
                    type: DrawerActionTypes.SET_DRAWER_FORM,
                    payload: false
                })
            }
        } catch (e) {
            dispatch({type: DrawerActionTypes.ERROR, payload: "Ошибка при открытии/закрытии модального окна информации"})
        }
    }
}