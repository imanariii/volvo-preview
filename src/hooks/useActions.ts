import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as DrawerActionCreators from '../store/action-creators/drawer'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
        ...DrawerActionCreators
    }, dispatch)
}