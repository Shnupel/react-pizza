import React from "react";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

const CategoriesComponent = ({ value }) => {
  const dispatch = useDispatch();
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  
  return (
    <div className="categories">
      <ul>
        {
          categories.map((category, i) => {
            return (
              <li key={ i } onClick={ () => dispatch(setCategoryId(i)) } className={ value === i ? "active" : ""} > { category } </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default CategoriesComponent;