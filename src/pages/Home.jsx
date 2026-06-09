import Categories from '../components/Categories.jsx';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/Skeleton';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../components/pagination/index.js';

function Homes() {
    const [getPizzas, setGetPizzas] = useState([])
    const [showPizzas, setshowPizzas] = useState([])
    const [isloading, setIsLoadeing] = useState(true)

    const [currentPerPage] = useState(4)
    const { categoriesIndex, sortItem, serch, currentPagePaginate } = useSelector((state) => state.filter)
    const currentNumbersIndex = Math.ceil(getPizzas.length / currentPerPage)
    const paginate = `&page=${currentPagePaginate}&limit=${currentPerPage}`

    const URL = `https://6a17d7bb1878294b597bec67.mockapi.io/react-pizza`

    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setGetPizzas(res.data)
            })
    }, [URL])


    useEffect(() => {

        const categoryAdd = `${categoriesIndex === 0 ? '' : `&category=${categoriesIndex}`}`
        const serchTitle = `&search=${serch}`
        setIsLoadeing(true)
        axios.get(URL + sortItem.sorting + paginate + serchTitle + categoryAdd)
            .then(response => {
                setshowPizzas(response.data)
                setIsLoadeing(false)
            })
            .catch((error => console.error("Ошибка", error)))
    }, [categoriesIndex, sortItem, paginate, serch, URL])

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
                        [...new Array(currentPerPage)].map((val, index) => <Skeleton key={index} />)
                        : showPizzas.map((item, i) =>
                            (<PizzaBlock key={item.id} {...item} />))}
                </div>
            </div>
            <Pagination currentNumbersIndex={currentNumbersIndex}
            />
        </>
    )
}

export default Homes