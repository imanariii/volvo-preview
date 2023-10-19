import {combineReducers} from "redux";
import {drawerReducer} from "./drawerReducer.ts";


export const rootReducer = combineReducers({
    drawer: drawerReducer
})

export type RootState = ReturnType<typeof rootReducer>