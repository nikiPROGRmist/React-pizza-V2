import serchLogo from "../../assets/img/search.svg"
import closeIMG from "../../assets/img/close.svg"
import Styles from "./Serch.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { setSerch } from "../../redux/slices/filterSlice"
import { useEffect, useRef, useState } from "react"


export const Serch = () => {
    const serch = useSelector(state => state.filter.serch)
    const dispatch = useDispatch()
    const refFocus = useRef()
    const [inputValue, setInputValue] = useState(serch)
    const timer = useRef(null)  // просто timer вместо timeoutRef

    useEffect(() => {
        refFocus.current.focus()
    }, [])

    const handleChange = (value) => {
        setInputValue(value)

        if (timer.current) clearTimeout(timer.current)

        timer.current = setTimeout(() => {
            dispatch(setSerch(value))
        }, 1500)
    }

    const handleClear = () => {
        setInputValue("")
        dispatch(setSerch(""))
    }

    return (
        <div className={Styles.root}>
            <div className={Styles.root_input}>
                <div className={Styles.input__item}>
                    <img className={Styles.root_img} src={serchLogo} alt="SerchLogo" />
                    <input
                        ref={refFocus}
                        className={Styles.input_img}
                        value={inputValue}
                        onChange={e => handleChange(e.target.value)}
                        type="text"
                        placeholder="Поиск"
                    />
                    <img
                        onClick={handleClear}
                        className={inputValue ? Styles.root_active : Styles.root_close}
                        src={closeIMG}
                        alt="close"
                    />
                </div>
            </div>
        </div>
    )
} 