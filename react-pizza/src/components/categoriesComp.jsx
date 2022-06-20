import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

const CategoriesComponent = ({ value }) => {
  const dispatch = useDispatch();
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const sortParam = useSelector((state) => state.filter.sort.sortProperty);

  return (
    <div className="categories">
      <ul>
        {
          categories.map((category, i) => {
            return (
              <Link to={ `/categoryId=${ i }/sortParams=${ sortParam }` } key={ i }> <li onClick={ () => dispatch(setCategoryId(i)) } className={ value === i ? "active" : ""} > { category } </li> </Link>
            )
          })
        }
      </ul>
    </div>
  )
}

export default CategoriesComponent;