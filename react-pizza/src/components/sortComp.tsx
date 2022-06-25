import React, { useState, useEffect, useRef, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ISortParams } from "../../interface/interfaces";
import { setSort } from "../redux/slices/filterSlice";
import { stateType } from "../redux/store";
import { getSortFromLS } from "../utils/getParamsFromLocalStrorage";

export const list: ISortParams[] = [
  { name: "популярности", sortProperty: "rating" },
  { name: "цене (по убыванию)", sortProperty: "price" },
  { name: "цене (по возрастанию)", sortProperty: "-price" },
  { name: "алфавиту (по убыванию)", sortProperty: "name" },
  { name: "алфавиту (по возрастанию)", sortProperty: "-name" },
];

const SortComponent: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: stateType) => state.filter.sort);
  const [visibileted, setVisibilited] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const chooseSort = (chosedCategory: ISortParams) => {
    const sortJSON = JSON.stringify(chosedCategory);
    localStorage.setItem("sort", sortJSON);
    dispatch(setSort(chosedCategory));
    setVisibilited(false);
  }
  
  useEffect(() => {
    const closePopUp = (event: MouseEvent) => {
      const _event = event as MouseEvent & { path: Node[] };
      if(sortRef.current && !_event.path.includes(sortRef.current)){
        setVisibilited(false);
      }
    }
    document.body.addEventListener("click", closePopUp);
    return () => {
      document.body.removeEventListener("click", closePopUp);
    }
  }, []);

  const howMounted = useRef(0);
  useEffect(() => {
    if(howMounted.current > 1){
      dispatch(setSort(getSortFromLS()));
    }
    howMounted.current += 1;
  }, []);

  return (
    <div ref={ sortRef } className="sort">
      <div onClick={ () => setVisibilited(prevVisible => !prevVisible) } className="sort__label">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C" /></svg>
        <b>Сортировка по:</b>
        <span> { value.name  } </span>
      </div>
      {
        visibileted && (
          <div className="sort__popup">
            <ul>
              {
                list.map((listElem, i) => {
                  return <li key={ i } className={ value.sortProperty === listElem.sortProperty ? "active" : "" } onClick={ () => chooseSort(listElem) }> { listElem.name } </li>
                })
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}

const MemorizedSortComponent = memo(SortComponent);

export default MemorizedSortComponent;