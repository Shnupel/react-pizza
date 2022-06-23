import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";
import { stateType } from "../redux/store";
import { useWhyDidYouUpdate } from "ahooks";

const CategoriesComponent: React.FC<{ value: number }> = ({ value }) => {
  const dispatch = useDispatch();
  const sortParam = useSelector((state: stateType) => state.filter.sort.sortProperty);
  const categoryId = useSelector((state: stateType) => state.filter.categoryId);
  const categories = useSelector((state: stateType) => state.filter.filterParams);

  return (
    <div className="categories">
      <ul>
        {
          categories.map((category, i) => {
            return (
              <Link to={ `/categoryId=${ i }/sortParams=${ sortParam }` } key={ i }> <li onClick={ () => dispatch(setCategoryId(i)) } className={ categoryId === i ? "active" : ""} > { category } </li> </Link>
            )
          })
        }
      </ul>
    </div>
  )
}

const MemorizedCategoryComponent = memo(CategoriesComponent);

export default MemorizedCategoryComponent;