import Categories from '../components/Categories.jsx';
import qs from "qs"
import Sort, { sortList } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/Skeleton';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/pagination/index.js';
import { Navigate, useNavigate } from 'react-router';
import { setActionParams } from '../redux/slices/filterSlice.js';


function Homes() {
    const [getPizzas, setGetPizzas] = useState([])
    const [showPizzas, setshowPizzas] = useState([])
    const [isloading, setIsLoadeing] = useState(true)

    const [currentPerPage] = useState(4)
    const { categoriesIndex, sortItem, serch, currentPagePaginate } = useSelector((state) => state.filter)
    const currentNumbersIndex = Math.ceil(getPizzas.length / currentPerPage)
    const paginate = `&page=${currentPagePaginate}&limit=${currentPerPage}`
    const category = `${categoriesIndex === 0 ? '' : `&category=${categoriesIndex}`}`
    const navigate = useNavigate()
    const dispath = useDispatch()
    const URL = `https://6a17d7bb1878294b597bec67.mockapi.io/react-pizza`
    const isMounted = useRef(false)

    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setGetPizzas(res.data)
            })

        const Params = qs.parse(window.location.search.substring(1))
        const sorting = sortList.find(list => console.log(Params.sortItem, list))
        console.log(sorting)
        dispath(setActionParams({
            ...Params,
            sorting
        }))

    }, [URL])




    useEffect(() => {
        const serchTitle = `&search=${serch}`

        setIsLoadeing(true)
        axios.get(URL + sortItem.sorting + paginate + category)
            .then(response => {
                setshowPizzas(response.data)
                window.scrollTo(0, 0)
                setIsLoadeing(false)
            })

        if (isMounted.current) {
            const qeryString = qs.stringify({
                sortItem: sortItem.sorting,
                paginate,
                category: categoriesIndex

            }, { encode: false })

            navigate(`?${qeryString}`)
        }
        isMounted.current = true



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