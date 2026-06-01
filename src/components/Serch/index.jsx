import serchLogo from "../../assets/img/search.svg"
import Styles from "./Serch.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { setSerch } from "../../redux/slices/filterSlice"





export const Serch = () => {
    const serch = useSelector(state => state.filter.serch)
    const dispatch = useDispatch()
    return (
        <div className={Styles.root}>
            <img className={Styles.root_img} src={serchLogo} alt="SerchLogo" />
            <input className={Styles.input_img}
                value={serch}
                onChange={event => dispatch(setSerch(event.target.value))}
                type="serch" placeholder="Поиск" />
        </div>
    )
}