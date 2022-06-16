import React from "react";
import styles from "./style.module.scss";

const NotFoundItem = () => {
  return (
    <div className={ styles.root }>
      <span>😕</span> 
      <br /> not found :(
      <p> sorry, this page not exist in our eShop </p>
    </div>
  )
}

export default NotFoundItem;