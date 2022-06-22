import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { addProduct } from "../../redux/slices/basketSlice";
import { IBasketCarts, IPizza } from "../../../interface/interfaces";

export const pizzaIndex: string[] = ["тонкая", "традиционная"];

const PizzaBlock: React.FC<{ pizzaData: IPizza }> = ({ pizzaData }) => {
  const { id, name, types, sizes, imageUrl, price } = pizzaData;
  const [pizzaType, setPizzaType] = useState(0);
  const [pizzaSize, setPizzaSize] = useState(0);
  const [pizzaCounter, setPizzaCounter] = useState(0);
  const dispatch = useDispatch();

  const onClickAdd = () => {
    setPizzaCounter(prevCounter => prevCounter += 1);
    const choicePizza: IBasketCarts = {
      id: id,
      size: sizes[pizzaSize],
      type: pizzaType,
      img: imageUrl,
      cost: price,
      count: 1,
      name: name,
    };
    dispatch(addProduct(choicePizza));
  }

  return (
    <div className="pizza-block-wrapped">
      <div className="pizza-block">
        <Link to={ `/pizza/${ id }` } ><img className="pizza-block__image" src={ imageUrl } alt="Pizza" /></Link>
        <Link to={ `/pizza/${ id }` } ><h4 className="pizza-block__title"> { name } </h4></Link>
        <div className="pizza-block__selector">
          <ul>
            {
              types?.map((type) => <li onClick={ () => setPizzaType(type) } className={ type === pizzaType ? "active" : "" } key={ type }> { pizzaIndex[type] } </li>)
            }
          </ul>
          <ul>
            {
              sizes?.map((size, i) => <li onClick={ () => setPizzaSize(i)} className={ pizzaSize === i ? "active" : "" } key={ i }>{ size } см.</li>)
            }
          </ul>
        </div>
        <div  className="pizza-block__bottom">
          <div className="pizza-block__price">от { price } ₽</div>
          <button onClick={ onClickAdd } className="button button--outline button--add">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white" /></svg>
            <span>Добавить</span>
            <i> { pizzaCounter } </i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PizzaBlock;