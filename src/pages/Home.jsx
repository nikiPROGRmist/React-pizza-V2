import Categories from '../components/Categories.jsx';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/Skeleton';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../components/pagination/index.js';

function Homes() {
    const [isloading, setIsLoadeing] = useState(true)
    const [showPizzas, setshowPizzas] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPerPage] = useState(4)
    const { categoriesIndex, sortItem, serch } = useSelector((state) => state.filter)
    const lastPageIndex = currentPage * currentPerPage
    const firstPageIndex = lastPageIndex - currentPerPage
    const currentSlicePage = showPizzas.slice(firstPageIndex, lastPageIndex)
    const currentNumbersIndex = Math.ceil(showPizzas.length / currentPerPage)

    useEffect(() => {
        const URL = `https://6a17d7bb1878294b597bec67.mockapi.io/react-pizza`
        const categoryAdd = `${categoriesIndex === 0 ? '' : `&category=${categoriesIndex}`}`
        const serchTitle = `&search=${serch}`
        setIsLoadeing(true)
        axios.get(URL + sortItem.sorting + serchTitle + categoryAdd)

            .then(response => {
                setshowPizzas(response.data)
                setIsLoadeing(false)
            })
            .catch((error => console.error("Ошибка", error)))
    }, [categoriesIndex, sortItem, serch])




    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                <div className="content__items">
                    {isloading ?
                        [...new Array(8)].map((val, index) => <Skeleton key={index} />)
                        : currentSlicePage.map((item, i) =>
                            (<PizzaBlock key={item.id} {...item} />))}
                </div>
            </div>
            <Pagination currentPage={currentPage}
                currentNumbersIndex={currentNumbersIndex}
                setCurrentPage={setCurrentPage} />
        </>
    )
}

export default Homes