import Style from "./pagination.module.scss"

const Pagination = ({ currentNumbersIndex, setCurrentPage, currentPage }) => {
    return (
        <>
            <ul className={Style.root}>
                {
                    [...Array(currentNumbersIndex).keys()].map((number => (
                        <li

                            className={`${Style.root_item}  ${currentPage === number + 1 ? Style.active : ''}`}
                            onClick={() => setCurrentPage(number + 1)}>
                            {number + 1}
                        </li>
                    )))
                }
            </ul>
        </>
    )
}

export default Pagination