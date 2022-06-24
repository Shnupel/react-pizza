import React, { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { stateType } from "../redux/store";
import { setCategoryId } from "../redux/slices/filterSlice";
import { getCategoryFromLS } from "../utils/getParamsFromLocalStrorage";

const CategoriesComponent: React.FC<{ value: number }> = ({ value }) => {
  const dispatch = useDispatch(); 
  const categoryId = useSelector((state: stateType) => state.filter.categoryId);
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  const chooseCategory = (categoryIndex: number) => {
    const categoryJSON = JSON.stringify(categoryIndex);
    localStorage.setItem("category", categoryJSON);
    dispatch(setCategoryId(categoryIndex));
  }

  const howMounted = React.useRef(0);
  useEffect(() => {
    if(howMounted.current > 1){
      dispatch(setCategoryId(getCategoryFromLS()));
    }
    howMounted.current += 1;
  }, [categoryId]);

  return (
    <div className="categories">
      <ul>
        {
          categories.map((category, i) => {
            return (
              <li key={ i } onClick={ () => chooseCategory(i) } className={ categoryId === i ? "active" : ""} > { category } </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const MemorizedCategoryComponent = memo(CategoriesComponent);

export default MemorizedCategoryComponent;