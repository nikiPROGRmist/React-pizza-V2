import serchLogo from "../../assets/img/search.svg"
import closeIMG from "../../assets/img/close.svg"
import Styles from "./Serch.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { setSerch } from "../../redux/slices/filterSlice"
import { useEffect } from "react"





export const Serch = () => {
    const serch = useSelector(state => state.filter.serch)

    useEffect(() => {
        document.querySelector("input").focus()
    }, [serch])

    const dispatch = useDispatch()
    return (
        <div className={Styles.root}>
            <div className={Styles.root_input}>
                <img className={Styles.root_img} src={serchLogo} alt="SerchLogo" />
                <input className={Styles.input_img}
                    value={serch}
                    onChange={event => dispatch(setSerch(event.target.value))}
                    type="serch" placeholder="Поиск" />
                {serch.length > 0 ?
                    <img onClick={() => dispatch(setSerch(""))}
                        className={Styles.root_close}
                        src={closeIMG} alt="close" />
                    : false}
            </div>
        </div>
    )
}