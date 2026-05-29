import Categories from '../components/Categories.jsx';
import Sort from '../components/Sort.jsx';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/Skeleton';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Homes() {

    const [isloading, setIsLoadeing] = useState(true)
    const [showPizzas, setshowPizzas] = useState([])

    useEffect(() => {
        axios.get("https://6a17d7bb1878294b597bec67.mockapi.io/react-pizza")
            .then(response => {
                setshowPizzas(response.data)
                setIsLoadeing(false)
            })
            .catch((error => console.error("Ошибка", error)))
    }, [])


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
                        : showPizzas.map((item, i) => (<PizzaBlock key={item.id} {...item} />))}
                </div>
            </div>
        </>
    )
}

export default Homes