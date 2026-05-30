import Categories from '../components/Categories.jsx';
import Sort from '../components/Sort.jsx';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/Skeleton';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Homes() {

    const [isloading, setIsLoadeing] = useState(true)
    const [showPizzas, setshowPizzas] = useState([])
    const [categoriesIndex, setCategoriesIndex] = useState(0)


    const sortList = [
        { name: "Популярности (Убывание)", sorting: "?sortBy=raiting" },
        { name: "Популярности (возрастание)", sorting: "?sortBy=raiting&order=desc" },
        { name: "Цена по возрастанию", sorting: "?sortBy=price" },
        { name: "Цена по убыванию", sorting: "?sortBy=price&order=desc" },
        { name: "Алфавиту", sorting: "?sortby=title" }

    ];

    const [sortItem, setSortItem] = useState(sortList[0])


    useEffect(() => {
        const URL = `https://6a17d7bb1878294b597bec67.mockapi.io/react-pizza`
        const categoryAdd = `${categoriesIndex === 0 ? '' : `&category=${categoriesIndex}`}`
        setIsLoadeing(true)
        axios.get(URL + sortItem.sorting + categoryAdd)


            .then(response => {
                setshowPizzas(response.data)
                setIsLoadeing(false)
            })
            .catch((error => console.error("Ошибка", error)))
    }, [categoriesIndex, sortItem])


    return (
        <>
            <div className="content__top">
                <Categories categoriesIndex={categoriesIndex}
                    setCategoriesIndex={setCategoriesIndex} />
                <Sort sortItem={sortItem} setSortItem={setSortItem} sortList={sortList} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                <div className="content__items">
                    {isloading ?
                        [...new Array(8)].map((val, index) => <Skeleton key={index} />)
                        : showPizzas.map((item, i) => (<PizzaBlock key={item.id} {...item} />))}
                </div>
            </div>
        </>
    )
}

export default Homes