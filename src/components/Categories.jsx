
import { useDispatch, useSelector } from "react-redux"
import { setCategoriesIndex } from "../redux/slices/filterSlice"
function Categories() {

    const categoriesIndex = useSelector((state) => state.filter.categoriesIndex)
    const dispatch = useDispatch()


    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']


    return (
        <div className="categories">
            <ul>
                {
                    categories.map((category, index) => (
                        <li key={index}
                            onClick={() => dispatch(setCategoriesIndex(index))}
                            className={categoriesIndex === index ? 'active' : ''}>
                            {category}
                        </li>

                    ))
                }
            </ul>
        </div>
    )
}

export default Categories