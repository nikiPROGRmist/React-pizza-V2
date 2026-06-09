import { useDispatch, useSelector } from "react-redux"
import Style from "./pagination.module.scss"
import { setCurrentPage } from '../../redux/slices/filterSlice'

const Pagination = ({ currentNumbersIndex }) => {
    const currentPagePaginate = useSelector(state => state.filter.currentPagePaginate)
    const dispatch = useDispatch()
    return (
        <>
            <ul className={Style.root}>
                {
                    [...Array(currentNumbersIndex).keys()].map((number => (
                        <li
                            key={number}
                            className={`${Style.root_item}  
                            ${currentPagePaginate === number + 1 ? Style.active : ''}`}
                            onClick={() => dispatch(setCurrentPage(number + 1))}>
                            {number + 1}
                        </li>
                    )))
                }
            </ul>
        </>
    )
}

export default Pagination