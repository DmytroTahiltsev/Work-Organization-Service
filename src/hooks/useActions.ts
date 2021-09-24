import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { AppDispatch } from "../store"
import { EventActionCreator, TodoActionCreator } from "../store/slices"
import { AuthActionCreator } from "../store/slices"


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
        ...AuthActionCreator,
        ...EventActionCreator,
        ...TodoActionCreator
    }, dispatch)
}  