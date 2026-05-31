import { useState } from "react"
import serchLogo from "../../assets/img/search.svg"
import Styles from "./Serch.module.scss"





export const Serch = () => {

    const [value, setValue] = useState('')
    return (
        <div className={Styles.root}>
            <img className={Styles.root_img} src={serchLogo} alt="SerchLogo" />
            <input className={Styles.input_img}
                value={value}
                onChange={event => setValue(event.target.value)}
                type="serch" placeholder="Поиск" />
        </div>
    )
}